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

export function getSongUrl(mid) {
  const url = `/api/getSongUrl`;
  let form = new FormData();
  let obj1 = {
    "module": "vkey.GetVkeyServer",
    "method": "CgiGetVkey",
    "param": {
      "guid": "6241848603",
      "songmid": ["0024vbNZ4bQz74", "001Qu4I30eVFYb", "003FFWnA3AIczD", "001TXSYu1Gwuwv", "003TfyNp47dm7E", "000QwTVo0YHdcP", "003v4UL61IYlTY", "000QCwge3B6Ad1", "002BWGZQ2UKjKn", "001CG3wA3QkuJS", "004dADLe4ec8RG", "000fcbn33tw0lQ", "004VBMk71TdUuR", "001RlxZp1xwoNK", "003RCA7t0y6du5"],
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
  form.append('req_q', obj1);
  form.append('comm', obj2)
  return axios({
    url,
    method: 'get',
    params: {
      'req_0': obj1,
      'comm': obj2
    },
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // }
  }).then((res) => {
    return Promise.resolve(res);
  })
}
