// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import axios from 'axios'
Vue.prototype.$ajax = axios
import App from './App'
import store from './state/store'
import routes from './router/router'
Vue.use(VueRouter)
import '../static/font Awesome/css/font-awesome.min.css'

// 在使用 vux 的  弹框toast提示的时候，要全局引入组件 在安装
import  { ToastPlugin,ConfirmPlugin } from 'vux'
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)
const router = new VueRouter({
  routes
})

FastClick.attach(document.body)
//为了 解决 移动端 当滑动目标元素 时 阻止 父元素 触发滚动事件；但有时候不是很灵验
window.addEventListener('touchmove', e => e.preventDefault())
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
