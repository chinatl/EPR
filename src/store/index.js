import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import product from './modules/product'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		title: false
	},
	modules: {
		app,
		user,
		product
	},
	getters
})

export default store
