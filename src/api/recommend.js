import jsonp from '../common/js/jsonp'
import {commomParams, options} from './config'
import axios from 'axios'
export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
  const data = Object.assign({}, commomParams, {
    paltform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options);
}

export function getDiscList() {
  const url = '/api/getDiscList';
  const data = Object.assign({}, commomParams, {
    rnd: Math.random(),
    loginUin: 0,
    hostUin: 0,
    platform: 'yqq',
    needNewCode: 0,
    categoryId: 10000000,
    sortId: 5,
    sin: 0,
    ein: 29,
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data);
  })
}
// export function getDiscList() {
//   const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg';
//   const data = Object.assign({}, commomParams, {
//     rnd: Math.random(),
//     loginUin: 0,
//     hostUin: 0,
//     platform: 'yqq',
//     needNewCode: 0,
//     categoryId: 10000000,
//     sortId: 5,
//     sin: 0,
//     ein: 29
//   })

//   return jsonp(url, data, options);
// }

export function getSongList(disstid) {
  const url = '/api/getSongList';
  const data = Object.assign({}, commomParams, {
    disstid,
    json: 1,
    type: 1,
    utf8: 1,
    onlysong: 0,
    loginUin: 0,
    hostUin: 0,
    platform: 'yqq',
    needNewCode: 0,
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data);
  })
}
