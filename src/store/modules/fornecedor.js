const app = {
	state: {
		show_menu: false,
		form: {
			"bairro": "",
			"celular": "",
			"cidade": "",
			"cnpj": "",
			"complemento": "",
			"estado": "",
			"fantasic": "",
			"logradouro": "",
			"nome": "",
			"numero": "",
			"social": "",
			"supplierMail": "",
//			"userId": ''
		},
		type: 'add'
	},
	mutations: {
		TOGGLE_FORNECEDOR_MENU: state => {
			state.show_menu = !state.show_menu
		}
	},
	actions: {
		
	}
}
export default app
