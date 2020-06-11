/*
 * @Author: chenxin
 * @Date: 2020-06-08 13:46:45
 * @LastEditors: chenxin
 * @LastEditTime: 2020-06-08 15:45:39
 * @Description: 
 */ 
import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
