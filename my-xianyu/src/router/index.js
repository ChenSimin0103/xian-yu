import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // 重定向：即每次刷新页面去的路由地址
      // redirect: '/new',
      name: 'Index',
      component: Index
    }
  ]
})
