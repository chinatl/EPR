const app = {
	state: {
		show_edit_pwd: false,
		show_edit_phone: false,
		show_edit_trade: false,
	},
	mutations: {
		TOOGLE_EDIT_PWD: state => {
			state.show_edit_pwd = !state.show_edit_pwd
		},
		TOOGLE_EDIT_PHONE: state => {
			state.show_edit_phone = !state.show_edit_phone
		},
		TOOGLE_EDIT_TRADE: state => {
			state.show_edit_trade = !state.show_edit_trade
		},

	},
	actions: {

	}
}
export default app
