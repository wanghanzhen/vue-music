<template>
  <div class="recommend" ref="recom">
    <scroll class="recommend-content" ref="scroll" :data="discList">
      <div>
        <div class="slider-wrapper" v-if="recommends.length">
          <slider>
            <div v-for="item in recommends">
              <a :href="item.linkUrl">
                <img @load="loadImage" :src="item.picUrl">
              </a>
            </div>
          </slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li v-for="item in discList" class="item" @click="selectItem(item)">
              <div class="icon">
                <img width="60" height="60" v-lazy="item.imgurl">
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name"></h2>
                <p class="desc" v-html="item.dissname"></p>
              </div>
            </li>
          </ul>
        </div>
        <div class="loading-container" v-show="!discList.length">
          <loading></loading>
        </div>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>
<script>
  import Slider from '../../base/slider/slider.vue'
  import Scroll from '../../base/scroll/scroll.vue'
  import Loading from '../../base/loading/loading.vue'
  import {getRecommend, getDiscList} from '../../api/recommend'
  import {ERR_OK} from '../../api/config.js'
  import {mapMutations} from 'vuex'
  import {playListMixin} from '../../common/js/mixin'

  export default {
    mixins: [playListMixin],
    data() {
      return {
        recommends: [],
        discList: []
      }
    },
    components: {
      Slider,
      Scroll,
      Loading
    },
    created() {
      this._getRecommend();
      this._getDiscList();
    },
    methods: {
      selectItem(item) {
        this.$router.push({
          path: `/recommend/${item.dissid}`
        })
        this.setDisc(item)
      },
      ...mapMutations({
        setDisc: 'SET_DISC'
      }),
      handlePlayList(playList) {
        const bottom = playList.length > 0 ? '60px' : ''
        this.$refs.recom.style.bottom = bottom
        this.$refs.scroll.refresh()
      },
      _getRecommend() {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.recommends = res.data.slider;
          }
        })
      },
      _getDiscList() {
        getDiscList().then((res) => {
          if (res.code === ERR_OK) {
            this.discList = res.data.list;
          }
        })
      },
      loadImage() {
        if (!this.isLoaded) {
          this.$refs.scroll.refresh()
          this.isLoaded = true;
        }
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable.styl"

  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-seize-meidum
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
        .icon
          flex: 0 0 60px
          width: 60px
          padding-right: 20px
        .text
          display: flex
          flex-direction: column
          justify-content: center
          flex: 1
          line-height: 20px
          overflow: hidden
          font-size: $font-sieze-medium
          .name
            margin-bottom: 10px
            color: $color-text
          .desc
            color: $color-text-d
      .loading-container
        position: fixed
        width: 100%
        top: 220px;
</style>
