const app = {
	state: {
		show_error: false,
		show_del: false,
	},
	mutations: {
		TOGGLE_ALL_ARROR: state => {
			state.show_error = !state.show_error
		},
		TOGGLE_ALL_DEL: state => {
			state.show_del = !state.show_del
		}
	},
	actions: {

	}
}
export default app
