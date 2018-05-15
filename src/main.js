import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);
/*导入语言包*/
import i18n from './i18n/i18n';

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
//import '@/permission' // permission control
import * as filters from './filters' // 全局filter
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})
/*引入字体图标*/
import Icon from 'vue-awesome'
Vue.component('icon', Icon)


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
	    i18n,
  template: '<App/>',
  components: {
    App
  }
})
