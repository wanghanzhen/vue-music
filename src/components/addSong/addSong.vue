<template>
  <transition name="slide">
    <div class="add-song" v-show="showFlag" @click.stop>
      <div class="header">
        <h1 class="title">添加到歌曲列表</h1>
        <div class="close" @click="hide">
          <i class="icon-close"></i>
        </div>
      </div>
      <div class="search-box-wrapper">
        <search-box ref="searchBox" @query="onQueryChange" :placeholder="'搜索歌曲'"></search-box>
      </div>
      <div class="shortcut" v-show="!query">
        <switches :currentIndex="currentIndex" 
                  :switches="switches"
                  @switch="switchItem"></switches>
        <div class="list-wrapper">
          <scroll ref="songList" class="list-scroll" v-if="currentIndex === 0" :data="playHistory">
            <div class="list-inner">
              <song-list :songs="playHistory"
                          @select="selectSong"></song-list>
            </div>
          </scroll>
          <scroll ref="searchList" v-else class="list-scroll" :data="searchHistory">
            <div class="list-inner">
              <search-list :searches="searchHistory"
                            @select="addQuery"
                            @delete="deleteSearchHistory"></search-list>
            </div>
          </scroll>
        </div>
      </div>
      <div class="search-result" v-show="query">
        <suggest :query="query" :showSinger="showSinger" @select="selectSuggest"></suggest>
      </div>
      <top-tip  ref="topTip">
        <div class="tip-title">
          <i class="icon-ok"></i>
          <span class="text">1首歌曲已经添加到播放队列</span>
        </div>
      </top-tip>
    </div>
  </transition>
</template>

<script>
  import SearchBox from '../../base/searchBox/searchBox.vue'
  import Suggest from '../../components/suggest/suggest.vue'
  import {searchMixin} from '../../common/js/mixin'
  import Switches from '../../base/switches/switches.vue'
  import Scroll from '../../base/scroll/scroll.vue'
  import {mapGetters, mapActions} from 'vuex'
  import SongList from '../../base/song-list/songList.vue'
  import Song from '../../common/js/song'
  import SearchList from '../../base/searchList/searchList.vue'
  import TopTip from '../../base/topTip/topTip.vue'

  export default {
    mixins: [searchMixin],
    components: {
      SearchBox,
      Suggest,
      Switches,
      Scroll,
      SongList,
      SearchList,
      TopTip
    },
    data() {
      return {
        showFlag: false,
        query: '',
        showSinger: false,
        currentIndex: 0,
        switches: [
          {name: '最近播放'},
          {name: '搜索历史'}
        ]
      }
    },
    methods: {
      show() {
        this.showFlag = true;
        this.$nextTick(() => {
          if (this.currentIndex === 0) {
            this.$refs.songList.refresh();
          } else {
            this.$refs.searchList.refresh();
          }
        })
      },
      hide() {
        this.showFlag = false;
      },
      switchItem(index) {
        this.currentIndex = index;
      },
      selectSong(item, index) {
        if (index !== 0) {
          this.insertSong(new Song(item));
        }
        this.showTip();
      },
      selectSuggest(item) {
        this.showTip();
        this.saveSearch(item);
      },
      showTip() {
        this.$refs.topTip.show();
      },
      ...mapActions([
        'insertSong'
      ])
    },
    computed: {
      ...mapGetters([
        'playHistory'
      ])
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/variable'
  @import '../../common/stylus/mixin'

  .add-song
    position: fixed
    top: 0
    bottom: 0
    width: 100%
    z-index: 200
    background: $color-background
    &.slide-enter-active,&.slide-leave-active
      transition: all 0.3s
    &.slide-enter,&.slide-leave-to
      transform: translateX(100%)
    .header
      position: relative
      height: 44px
      text-align: center
      .title
        line-height: 44px
        font-size: $font-size-large
        color: $color-text
      .close
        position: absolute
        top: 0
        right: 8px
        .icon-close
          display: block
          padding: 12px
          font-size: 20px
          color: $color-theme
    .search-box-wrapper
      margin: 20px
    .shortcut
      .list-wrapper
        position: absolute
        top: 165px
        bottom: 0
        width: 100%
        .list-scroll
          height: 100%
          overflow: hidden
          .list-inner   
            padding: 20px 30px
    .search-result
      position: fixed
      top: 124px
      bottom: 0
      width: 100%
    .tip-title
      text-align: center
      padding: 18px 0
      font-size: 0
      .icon-ok
        font-size: $font-size-medium
        color: $color-theme
        margin-right: 4px
      .text
        font-size: $font-size-medium
        color: $color-text   
</style>


