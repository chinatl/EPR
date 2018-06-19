const app = {
	state: {
		show_cores: false
	},
	mutations: {
		TOGGLE_ATTR_CORES: state => {
			state.show_cores = !state.show_cores
		}
	}
}

export default app
