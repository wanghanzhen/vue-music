import jsonp from '../common/js/jsonp'
import {commomParams, options} from './config'
import axios from 'axios'

export function getTopList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg';
  const data = Object.assign({}, commomParams, {
    _: +new Date(),
    platform: 'h5',
    needNewCode: 1,
    uin: 0
  })

  return jsonp(url, data, options);
}

export function getMusicList(topid) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg';
  const data = Object.assign({}, commomParams, {
    topid,
    uin: 0,
    platform: 'h5',
    needNewCode: 1,
    tpl: 3,
    _: +new Date(),
    page: 'detail',
    type: 'top'
  });
  return jsonp(url, data, options)
}