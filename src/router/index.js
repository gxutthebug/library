import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout'
  },
  {
    path: '/layout',
    name: 'layout',
    redirect: '/layout/tabs', // 二级路由默认
    component: () => import('@/views/layout'), // 相当于在APP.Vue内（一级路由锚点放置处）引入并注册了layout组件，下面同理
    children: [
      {
        path: 'tabs', // 默认子路由
        name: 'tabs',
        component: () => import('@/views/tabs')
      },
      {
        path: 'seats',
        name: 'seats',
        component: () => import('@/views/seats')
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('@/views/order')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/manage',
    name: 'Manage',
    component: () => import('@/views/manage')
  }
//   {
//     path: '/search',
//     name: 'search',
//     component: () => import('@/views/search')
//   },
//   {
//     path: '/article/:articleId',
//     // 注意：文章列表并不是一个单一的组件页面，应该是一篇文章对应一个组件页面，也该使用动态组件页面（传参）
//     name: 'article',
//     component: () => import('@/views/article'),
//     // 将路由动态参数映射到组件的 props 中，更推荐这种做法
//     props: true
//   }
]

const router = new VueRouter({
  routes
})

export default router
