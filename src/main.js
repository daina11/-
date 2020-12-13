// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/icon/iconfont.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios';
import mockdata from "./router/mockjs";
import global from "./router/Global"
import Vuex from 'vuex'
Vue.prototype.$global=global
Vue.use(Vuex)
Vue.prototype.$axios =axios;
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(ElementUi)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
