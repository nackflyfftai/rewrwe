// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import i18n from './lang'

Vue.config.productionTip = false

Vue.use(ElementUI, {
  // size: Cookies.get('size') || 'medium' // set element-ui default size
  size: 'medium' // set element-ui default size
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
