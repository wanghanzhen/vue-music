import {getLyric, getSongUrl} from '../../api/song'
import {ERR_OK} from '../../api/config'
import {Base64} from 'js-base64'

export default class Song {

  constructor({id, mid, singer, name, album, duration, image, url}) {
    this.id = id;
    this.mid = mid;
    this.singer = singer;
    this.name = name;
    this.album = album;
    this.duration = duration;
    this.image = image;
    this.url = url;
  }

  getLyric() {
    if (this.lyric) {
      return Promise.resolve(this.lyric)
    }
    return new Promise((resolve, reject) => {
      getLyric(this.mid).then((res) => {
        if (res.data.code === ERR_OK) {
          this.lyric = Base64.decode(res.data.lyric);
          resolve(this.lyric);
        } else {
          reject('No lyric')
        }
      })
    })
  }
}
let flag = true
export function createSong(musicData) {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    url: musicData.purl
  })
}

// 多个歌手名 /分隔
function filterSinger(singer) {
  if (!singer) {
    return '';
  }
  let ret = [];
  singer.forEach((s) => {
    ret.push(s.name);
  })
  return ret.join('/');
}