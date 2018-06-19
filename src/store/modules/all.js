const app = {
	state: {
		show_error: false,
		show_del: false,
		show_message: false,
		show_info: false,
		del_id: ''
	},
	mutations: {
		TOGGLE_ALL_ARROR: state => {
			state.show_error = !state.show_error
		},
		TOGGLE_ALL_DEL: (state, id) => {
			state.show_del = !state.show_del;
			state.del_id = id;
		},
		TOGGLE_ALL_MESSAGE: state => {
			state.show_message = !state.show_message
		},
		TOGGLE_ALL_INFO: state => {
			state.show_info = !state.show_info
		},
	},
	actions: {

	}
}
export default app
