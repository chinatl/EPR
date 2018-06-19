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
Vue.prototype.$delete = api.deleteItem;
//import '@/permission' // permission control
import * as filters from './filters' // 全局filter
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
})
/*导入自定义分页组件*/
import Pagination from '@/components/Pagination'
Vue.component('pagination', Pagination)
/*引入字体图标*/
import Icon from 'vue-awesome';
Vue.component('icon', Icon)
/*导入导出csv*/

import 'swiper/dist/css/swiper.css'
import {
	swiper,
	swiperSlide
} from 'vue-awesome-swiper'
Vue.component('swiper', swiper)
Vue.component('swiperSlide', swiperSlide)
//import '@/utils/vendor'
/*导入 md5*/
import md5 from 'js-md5';
Vue.prototype.$md5 = md5;

/*导入对称加密*/
import crypto from '@/utils/crypto'
Vue.prototype.$crypto = crypto;
/*自定义NoData组件*/ 
import NoData from '@/components/NoData'
Vue.component('noData', NoData)
/*初始化*/

/*自定义全局删除组件*/ 
import Delete_dialog from '@/components/Delete_dialog'
Vue.component('erpDel',Delete_dialog)
/*自定义全局提示组件*/
import ERP_dialog from '@/components/Info_dialog'
Vue.component('erpInfo',ERP_dialog)

import {
	getToken,
} from '@/utils/auth'

if (getToken()) {
	store.commit('SET_USER',{
		token: getToken(),
		user: JSON.parse(sessionStorage.getItem('user'))
	})
}
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
