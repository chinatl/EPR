import {
	setToken
} from '@/utils/auth'

const app = {
	state: {
		token: '',
		user: {
			userId:''
		}
	},
	mutations: {
		SET_USER: (state, data) => {
			state.token = data.token;
			state.user = data.user;
			setToken(data)
		},
	},
	actions: {

	}
}

export default app
