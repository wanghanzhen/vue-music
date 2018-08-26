<template>
  <transition name="slide">
    <music-list :songs="songs" :title="title" :bg-image="bgImage"></music-list>
  </transition>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {getSingerDetail} from '../../api/singer'
  import {getSongUrl} from '../../api/song'
  import {ERR_OK} from '../../api/config'
  import {createSong} from '../../common/js/song'
  import MusicList from '../music-list/musicList.vue'

  export default {
    data() {
      return {
        songs: []
      }
    },
    computed: {
      title() {
        return this.singer.name
      },
      bgImage() {
        return this.singer.avatar
      },
      ...mapGetters([
        'singer'
      ])
    },
    created() {
      this._getDetail();
    },
    components: {
      MusicList
    },
    methods: {
      _getDetail() {
        if (!this.singer.id) {
          this.$router.push('/singer');
          return;
        }
        getSingerDetail(this.singer.id).then((res) => {
          if (res.code === ERR_OK) {
            let list = res.data.list;
            let songmidArr = list.map(item => {
              return item.musicData.songmid;
            })
            getSongUrl(songmidArr).then(res => {
              let arr = [];
              list.forEach((item, index) => {
                let {musicData} = item;
                musicData.purl = res.data['req_0'].data.midurlinfo[index].purl;
                if (musicData.songmid && musicData.albummid) {
                  arr.push(createSong(musicData));
                }
              })
              this.songs = arr;
            })
          }
        })
      },
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/variable'
    
  .slide-enter-active, .slide-leave-active
    transition: all 0.5s
  .slide-enter, .slide-leave-to
    transform: translate3d(100%,0,0)
</style>