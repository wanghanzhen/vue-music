<template>
  <div class="progress-bar" ref="progressBar"  @click="progressClick">
    <div class="bar-inner">
      <div class="progress" ref="progress"></div>
      <div class="progress-btn-wrapper" ref="progressBtn"
            @touchstart.prevent="progressTouchStart"
            @touchmove.prevent="progressTouchMove"
            @touchend="progressTouchEnd">
        <div class="progress-btn"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      percent: {
        type: Number,
        default: 0
      }
    },
    watch: {
      percent(newPercent) {
        if (newPercent > 0 && !this.touch.initiated) {
          const barWidth = this.$refs.progressBar.clientWidth - 16;
          const offsetWidth = newPercent * barWidth;
          this._offset(offsetWidth)
        }
      }
    },
    created() {
      this.touch = {}
    },
    methods: {
      progressTouchStart(e) {
        this.touch.initiated = true;
        this.touch.startX = e.touches[0].pageX;
        this.touch.left = this.$refs.progress.clientWidth;
      },
      progressTouchMove(e) {
        if (!this.touch.initiated) {
          return;
        }
        let daltaX = e.touches[0].pageX - this.touch.startX;
        let offsetWidth = Math.min(this.$refs.progressBar.clientWidth - 16, Math.max(0, this.touch.left + daltaX));
        this._offset(offsetWidth);
      },
      progressTouchEnd() {
        this.touch.initiated = false;
        this._triggerPercent();
      },
      progressClick(e) {
        const rect = this.$refs.progressBar.getBoundingClientRect();
        const offsetX = e.pageX - rect.left;
        this._offset(offsetX)
        // 点击progressBtn时会出现偏移错误
        // this._offset(e.offsetX)
        this._triggerPercent();
      },
      _offset(offsetWidth) {
        this.$refs.progress.style.width = `${offsetWidth}px`
        this.$refs.progressBtn.style.transform = `translate3d(${offsetWidth}px,0,0)`
      },
      _triggerPercent() {
        let percent = this.$refs.progress.clientWidth / (this.$refs.progressBar.clientWidth - 16);
        this.$emit('changePercent', percent)
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/variable'

  .progress-bar
    height: 30px
    .bar-inner
      position: relative
      top: 13px
      height: 4px
      background: rgba(0,0,0,0.3)
      .progress
        position: absolute
        height: 100%
        background: $color-theme
      .progress-btn-wrapper
        position: absolute
        left: -8px
        top: -13px
        width: 30px
        height: 30px
        .progress-btn
          position: relative
          top: 7px
          left: 7px
          box-sizing: border-box
          width: 16px
          height: 16px
          border: 3px solid $color-text
          border-radius: 50%
          background: $color-theme
</style>


