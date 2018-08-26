<template>
  <transition name="slide">
    <music-list :title="title" :bgImage="bgImage" :songs="songs" :rank="rank"></music-list>
  </transition>
</template>

<script>
  import MusicList from '../music-list/musicList.vue'
  import {mapGetters} from 'vuex'
  import {getMusicList} from '../../api/rank'
  import {ERR_OK} from '../../api/config'
  import {createSong} from '../../common/js/song'
  import {getSongUrl} from '../../api/song'

  export default {
    components: {
      MusicList
    },
    data() {
      return {
        songs: [],
        rank: true
      }
    },
    computed: {
      title() {
        return this.topList.topTitle;
      },
      bgImage() {
        if (this.songs.length) {
          return this.songs[0].image
        }
        return ''
      },
      ...mapGetters([
        'topList'
      ])
    },
    created() {
      this._getMusicList();
    },
    methods: {
      _getMusicList() {
        if (!this.topList.id) {
          this.$router.push({
            path: '/rank'
          })
        }
        getMusicList(this.topList.id).then((res) => {
          if (res.code === ERR_OK) {
            let list = res.songlist;
            let songmidArr = list.map(item => {
              return item.data.songmid;
            })
            getSongUrl(songmidArr).then(res => {
              let arr = [];
              list.forEach((item, index) => {
                let musicData = item.data;
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
    transition: all 0.3s ease
  .slide-enter, .slide-leave-to
    transform: translateX(100%)
</style>


