import Vue from 'vue'
import Router from 'vue-router'
// import Recommend from '../components/recommend/recommend'
// import Singer from '../components/singer/singer'
// import Rank from '../components/rank/rank'
// import Search from '../components/search/search'
// import SingerDetail from '../components/singer-detail/singerDetail.vue'
// import Disc from '../components/disc/disc.vue'
// import TopList from '../components/topList/topList.vue'
// import UserCenter from '../components/userCenter/UserCenter'

Vue.use(Router)

const Singer = () => import('../components/singer/singer')
const Recommend = () => import('../components/recommend/recommend')
const Rank = () => import('../components/rank/rank')
const Search = () => import('../components/search/search')
const SingerDetail = () => import('../components/singer-detail/singerDetail')
const Disc = () => import('../components/disc/disc')
const TopList = () => import('../components/topList/topList')
const UserCenter = () => import('../components/userCenter/userCenter')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend,
      children: [
        {
          path: ':id',
          component: Disc
        }
      ]
    },
    {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/rank',
      component: Rank,
      children: [
        {
          path: ':id',
          component: TopList
        }
      ]
    },
    {
      path: '/search',
      component: Search,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/user',
      component: UserCenter
    }
  ]
})