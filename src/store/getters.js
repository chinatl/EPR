const getters = {
	sidebar: state => state.app.sidebar,
	del_id: state => state.all.del_id,
	token: state => state.user.token,
	userId: state => state.user.user.userId,
	email: state => state.user.user.email,
	//  avatar: state => state.user.avatar,
	//  name: state => state.user.name,
	//  roles: state => state.user.roles
}
export default getters
