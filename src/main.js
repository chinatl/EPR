import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import i18n from './i18n/i18n';
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})
/*导入语言包*/

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
/* 导入 自定义 请求 */
import * as api from '@/utils/fetch'
Vue.prototype.$get = api.get;
Vue.prototype.$post = api.post;
//import '@/permission' // permission control
import * as filters from './filters' // 全局filter
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
})
/*导入自定义分页组件*/
import Pagination from '@/components/Pagination'
Vue.component('pagination',Pagination)
/*引入字体图标*/
import Icon from 'vue-awesome';
Vue.component('icon', Icon)
/*导入导出csv*/
//import '@/utils/vendor'

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
