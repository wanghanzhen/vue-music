<template>
  <transition name="slide">
    <music-list :title=title :bgImage="bgImage" :songs="songs"></music-list>
  </transition>
</template>

<script>
  import MusicList from '../music-list/musicList.vue'
  import {getSongUrl} from '../../api/song'
  import {mapGetters} from 'vuex'
  import {getSongList} from '../../api/recommend'
  import {ERR_OK} from '../../api/config.js'
  import {createSong} from '../../common/js/song'
  export default {
    data() {
      return {
        songs: []
      }
    },
    components: {
      MusicList
    },
    computed: {
      title() {
        return this.disc.dissname
      },
      bgImage() {
        return this.disc.imgurl
      },
      ...mapGetters([
        'disc'
      ])
    },
    created() {
      this._getSongList();
    },
    methods: {
      _getSongList() {
        if (!this.disc.dissid) {
          this.$router.push({
            path: '/recommend'
          })
        }
        getSongList(this.disc.dissid).then((res) => {
          if (res.code === ERR_OK) {
            let list = res.cdlist[0].songlist;
            let songmidArr = list.map(item => {
              return item.songmid;
            })
            getSongUrl(songmidArr).then(res => {
              let arr = [];
              list.forEach((musicData, index) => {
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

<style lang="stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s
  .slide-enter, .slide-leave-to
    transform: translate3d(100%,0,0)
</style>
