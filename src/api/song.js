import axios from 'axios'
import {commomParams} from './config'

export function getLyric(mid) {
  const url = '/api/lyric';

  const data = Object.assign({}, commomParams, {
    pcachetime: +new Date(),
    songmid: mid,
    loginUin: 0,
    hostUin: 0,
    platform: 'yqq',
    needNewCode: 0,
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res);
  })
}

export function getSongUrl(midArr) {
  const url = `/api/getSongUrl`;
  let obj1 = {
    "module": "vkey.GetVkeyServer",
    "method": "CgiGetVkey",
    "param": {
      "guid": "6241848603",
      "songmid": midArr,
      "songtype": [],
      "uin": "0",
      "loginflag": 0,
      "platform": "23"
    }
  }
  let obj2 = {
    "g_tk": 5381,
    "uin": 0,
    "format": "json",
    "ct": 23,
    "cv": 0
  }
  return axios({
    url,
    method: 'post',
    data: {
      'req_0': obj1,
      'comm': obj2
    },
  }).then((res) => {
    return Promise.resolve(res);
  })
}
