import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import lazy from "@/commonJ/lazy";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import toast from 'components/commonV/toast'
Vue.use(toast)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  lazy,
  render: h => h(App)
}).$mount('#app')
