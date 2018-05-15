import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import product from './modules/product'
import tran from './modules/tran'
import order from './modules/order'
import expedic from './modules/expedic'
import integral from './modules/integral'
import sac from './modules/sac'
import getters from './getters'
import fornecedor from './modules/fornecedor'
import rastreamento from './modules/rastreamento'//物流最终

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
		fornecedor,
		expedic,
		sac,
		integral,
		rastreamento
		
	},
	getters
})

export default store
