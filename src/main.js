/*
 * @Description: 
 * @Version: 2.0
 * @Author: Liu Xuanting
 * @Date: 2023-04-16 10:09:58
 * @LastEditors: Liu Xuanting
 * @LastEditTime: 2023-04-16 11:18:29
 */
import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

import axios from 'axios'
// 添加方法
Vue.prototype.axios = axios;
// 过滤器
Vue.filter('setWH',(url , arg)=>{
    return url.replace(/w\.h/,arg);
});

import Scroller from '@/components/Scroller'
Vue.component('Scroller' , Scroller);

import Loading from '@/components/Loading'
Vue.component('Loading',Loading);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
