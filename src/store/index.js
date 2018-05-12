import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import product from './modules/product'
import tran from './modules/tran'
import order from './modules/order'
import getters from './getters'
import fornecedor from './modules/fornecedor'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		title: false
	},
	// strict:true,
	modules: {
		app,
		user,
		product,
		tran,
		order,
		fornecedor
	},
	getters
})

export default store
