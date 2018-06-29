import Vue from 'vue'
import Router from 'vue-router'
import LoginRoute from './login'
import HomeRoute from './home'

Vue.use(Router)

// 通过...运算符把所有的路由拼接
export default new Router({
  routes: [
    ...LoginRoute,
    ...HomeRoute,
    { 
      path: '/', 
      redirect: '/login',
    },
  ]
})
