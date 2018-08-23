<template>
  <div class="search">
    <div class="search-box-wrapper">
      <search-box ref="searchBox" @query="onQueryChange"></search-box>
    </div>
    <div class="shortcut-wrapper" v-show="!query" ref="searchWrapper">
      <scroll class="shortcut" :refreshDelay="150" ref="shortcut" :data="shortcut">
        <div>
          <div class="hot-key">
            <h1 class="title">热门搜索</h1>
            <ul>
              <li class="item" v-for="item in hotKey" @click="addQuery(item.k)">
                <span>{{item.k}}</span>
              </li>
            </ul>
          </div>
          <div class="search-history" v-show="searchHistory.length">
            <h1 class="title">
              <span class="text">搜索历史</span>
              <span class="clear" @click="showConfirm">
                <i class="icon-clear"></i>
              </span>
            </h1>
            <search-list :searches="searchHistory"
                          @select="addQuery"
                          @delete="deleteSearchHistory"></search-list>
          </div>
        </div>
      </scroll>
    </div>
    <div class="search-result" ref="searchResult" v-show="query">
      <suggest :query="query" 
                @listScroll="blurInput" 
                @select="saveSearch"
                ref="suggest"></suggest>
    </div>
    <confirm ref="confirm" @confirm="clearSearchHistory"
            :text="'是否清空所有搜索历史'"
            :cancelBtnText="'清空'"></confirm>
    <router-view></router-view>
  </div>
</template>

<script>
  import SearchBox from '../../base/searchBox/searchBox.vue'
  import {getHotKey} from '../../api/search'
  import {ERR_OK} from '../../api/config'
  import Suggest from '../suggest/suggest.vue'
  import {mapActions, mapGetters, mapMutations} from 'vuex'
  import SearchList from '../../base/searchList/searchList.vue'
  import Confirm from '../../base/confirm/confirm.vue'
  import Scroll from '../../base/scroll/scroll.vue'
  import {playListMixin, searchMixin} from '../../common/js/mixin'

  const TYPE_SINGER = 'singer'

  export default {
    mixins: [playListMixin, searchMixin],
    created() {
      this._getHotKey()
    },
    data() {
      return {
        hotKey: [],
        query: ''
      }
    },
    computed: {
      shortcut() {
        return this.hotKey.concat(this.searchHistory);
      },
      ...mapGetters([
        'searchHistory'
      ])
    },
    methods: {
      showConfirm() {
        this.$refs.confirm.show();
      },
      handlePlayList(playList) {
        const bottom = playList.length > 0 ? '60px' : ''
        this.$refs.searchWrapper.style.bottom = bottom
        this.$refs.searchResult.style.bottom = bottom
        this.$refs.shortcut.refresh()
        this.$refs.suggest.refresh()
      },
      ...mapActions([
        'clearSearchHistory'
      ]),
      ...mapMutations({
        setSearchHistory: 'SET_SEARCH_HISTORY'
      }),
      _getHotKey() {
        getHotKey().then((res) => {
          if (res.code === ERR_OK) {
            this.hotKey = res.data.hotkey.slice(0, 10);
          }
        })
      }
    },
    watch: {
      query(newQuery) {
        if (!newQuery) {
          setTimeout(() => {
            this.$refs.shortcut.refresh()
          }, 20);
        }
      }
    },
    components: {
      SearchBox,
      Suggest,
      SearchList,
      Confirm,
      Scroll
    }
  }
</script>

<style lang="stylus">
  @import "../../common/stylus/variable.styl"
  @import "../../common/stylus/mixin.styl"
  
  .search
    .search-box-wrapper
      margin: 20px
    .shortcut-wrapper
      position: fixed
      top: 178px
      bottom: 0
      width: 100%
      .shortcut
        height: 100%
        overflow: hidden
        .hot-key
          margin: 0 20px 20px 20px
          .title
            margin-bottom: 20px
            font-size: $font-size-medium
            color: $color-text-l
          .item
            display: inline-block
            padding: 5px 10px
            margin: 0 20px 10px 0 
            border-radius: 6px
            background: $color-highlight-background
            font-size: $font-size-medium
            color: $color-text-d
        .search-history
          position: relative
          margin: 0 20px
          .title
            display: flex
            align-items: center
            height: 40px
            font-size: $font-size-medium
            color: $color-text-l
            .text
              flex: 1
            .clear
              extends-click()
              .icon-clear
                font-size: $font-size-medium
                color: $color-text-d    
    .search-result
      position: fixed
      width: 100%
      top: 178px
      bottom: 0        
</style>

