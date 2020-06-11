/*
 * @Author: chenxin
 * @Date: 2020-06-08 13:46:45
 * @LastEditors: chenxin
 * @LastEditTime: 2020-06-08 16:16:30
 * @Description: 
 */ 
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
