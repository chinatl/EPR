const app = {
	state: {
		show_unbind: false,
		show_market: false,
		show_ml: false,
		show_delete: false,
		show_entrda: false,
		show_edit: false,
		show_auto_link: false,
		show_fast_copy: false,
	},
	mutations: {
		TOGGLE_ML: state => {
			state.show_ml = !state.show_ml
		},
		TOGGLE_UNBIND: state => {
			state.show_unbind = !state.show_unbind
		},
		TOGGLE_MARKET: state => {
			state.show_market = !state.show_market
		},
		TOGGLE_DELETE: state => {
			state.show_delete = !state.show_delete
		},
		TOGGLE_ENTRDA: state => {
			state.show_entrda = !state.show_entrda
		},
		TOGGLE_EDIT: state => {
			state.show_edit = !state.show_edit
		},
		TOGGLE_AUTO_LINK: state => {
			state.show_auto_link = !state.show_auto_link
		},
		TOGGLE_FAST_COPY: state => {
			state.show_fast_copy = !state.show_fast_copy
		},
		
	}
}

export default app
