import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

// or with options
const lazy = Vue.use(VueLazyload, {
  preLoad: 1.3,
  //站位图 -> 所需的图片还没加载出来时显示的
  loading: require('@/assets/img/commonV/lazy.gif'),
  attempt: 1
})

export default lazy