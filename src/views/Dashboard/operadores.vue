<template>
    <div style="overflow:hidden" v-loading.fullscreen = 'fullscreen_loading'>
    	<div class='setting-item'>
    		<div class="setting-header">
				{{$t(`setting['Lista de Operadores']`)}}
			</div>
			<div class="erp-list" v-loading='loading'>
				<ul class="title">

					<li>{{$t(`table['Lista de Operadores']`)}}</li>
					<li>{{$t(`table['Grupo']`)}}</li>
					<li>{{$t(`table['Acessos']`)}}</li>
					<li>{{$t(`table['Operação']`)}}</li>
				</ul>
				<div>
					<ul class="content" v-for='(item,index) in user_list' v-bind:key="index" :key='index'>
						<li>{{item.userName}}</li>
						<li>{{get_user_group(item.roleIdList)}}</li>
						<li>{{item.status}}</li>
						<li>
							<div class="table-icon">
								<span @click='open_add_dialog(item)'><i class='el-icon-edit-outline'></i></span>
								<span @click='del_role_item(item.userId,"user")'><i class='el-icon-delete'></i></span>
							</div>
						</li>
					</ul>
				</div>
			</div>
		 	<p class='erp-dialog-button'>
				<button class="erp-btn info circle" @click='open_add_dialog(0)'>{{$t(`button['Adicionar operador']`)}}</button>
			</p>
    	</div>
    	<div class='setting-item'>
    		<div class="setting-header">
				{{$t(`table['Grupos']`)}}
			</div>
			<div class="erp-list"  v-loading='role_loading'>
				<ul class="title">
					<li>{{$t(`table['Grupo']`)}} </li>
					<li>{{$t(`table['Acessos']`)}}</li>
					<li>{{$t(`table['Operação']`)}}</li>
				</ul>
				<transition-group name="fade" tag='div'>
					<ul class="content" v-for='(item,index) in role_list' v-bind:key="index">
						<li>{{item.roleName}}</li>
						<li>{{item.remark}}</li>
						<li>
							<div class="table-icon">
								<span  @click='open_edit_dialog(item)'><i class='el-icon-edit-outline'></i></span>
								<span  @click='del_role_item(item.roleId,"role")'><i class='el-icon-delete'></i></span>
							</div>
						</li>
					</ul>
				</transition-group>
			</div>
			<pagination :total='role_total'></pagination>
			 <p class='erp-dialog-button'>
				<button class="erp-btn info circle"  @click='open_edit_dialog(0)'>{{$t(`button['Criar Grupo']`)}}</button>
			</p>
    	</div>
		<el-dialog
			:visible.sync="add_dialog"
			class='small-dialog'
		>
		<div slot='title' class="erp-dialog_title">
			Adicionar Operador
		</div>
		<div class='erp-dialog-item  no-border'>
			<div>
				<p>Grupos</p>
				<el-select placeholder='Selecione' size='small' style='width:100%' v-model='user_form.group'>
					<el-option v-for='items in options' :label='items.roleName' :value='items.roleId' :key='Math.random()'></el-option>
				</el-select>
<!--				<el-input type='text' size='small' placeholder='Pesquisar...' v-model='name'></el-input>-->
			</div>	
		</div>
		<div class='erp-dialog-item  no-border'>
			<div class="null-class">
				<p>Usuário</p>
				<el-input size='small' v-model='user_form.userName' ref='input' :maxlength='20'>
					  <span slot="prefix" style="color:#000;font-size:14px;padding-top:2px">{{this.email}}_</span>
				</el-input>
			</div>
		</div>
		<div class='erp-dialog-item  no-border'>
			<div>
				<p>Senha</p>
				<el-input size='small'  v-model='user_form.password'></el-input>
			</div>
		</div>
		<div class='erp-dialog-item  no-border'>
			<div>
				<p>Confirmar Senha</p>
				<el-input  size='small'  v-model='user_form.re_password'></el-input>
			</div>
		</div>
		
		<p class='erp-dialog-button'>
			<button class="erp-btn  size16 info" @click='submit_add'>{{$t('button["Criar Operador"]')}}</button>
		</p>
	</el-dialog>	
	<el-dialog
			:visible.sync="edit_dialog"
			class='small-dialog'
		>
		<div slot='title' class="erp-dialog_title">
			Editar/Criar Grupo
		</div>
		<div class='erp-dialog-item  no-border'>
			<div>
				<p>Nome do Grupo</p>
				<div class='erp-search-button'>
					<el-input type='text' size='small' v-model='valuex'></el-input>
				</div>
			</div>	
		</div>
		<div class="erp-list">
			<ul class="title">
				<li class="flex3">{{$t(`table['Módulo']`)}}</li>
				<li class="flex5">{{$t(`table['Descrição']`)}}</li>
				<li class="flex3">{{$t(`table['Operação']`)}}</li>
			</ul>
			<transition-group name="fade" tag='div'>
				<ul class="content" v-for='(item,index) in menu_list' v-bind:key="index" :key='index'>
					<li class="flex3"><span style="width:120px;text-align:center">{{item.menuName}}</span></li>
					<li class="flex5"><span style="width:280px;text-align:center">{{item.parentName || '暂时没有描述'}}</span></li>
					<li class="flex3">
						<div class="table-icon" style="opacity:1">
							<span v-for='(v,i) in item.list' :class='v.checked ?  "current" : "" ' @click='select_role(v,item.list)'>
								<i class='el-icon-edit-outline' v-if='v.menuName ==="操作"'></i>
								<i class='el-icon-search' v-else-if='v.menuName ==="查看"'></i>
								<i class='el-icon-error' v-else></i>
							</span>
						</div>
					</li>
				</ul>
			</transition-group>
		</div>
		
		<p class='erp-dialog-button'>
			<button class="erp-btn  size16 info circle" @click='submit_edit'>{{$t('button["Salvar"]')}}</button>
		</p>
	</el-dialog>
	<erp-del message='Confirmar a remoção ?' @ok='agree_item' @cancelar='cancae_item'></erp-del>
	</div> 
</template>
<script>
	export default {
		data() {
			return {
				options: [],
				name: '',
				name1: '',
				name2: '',
				name3: '',
				valuex: '',
				loading: false,
				add_dialog: false,
				edit_dialog: false,
				value: '11%',
				value1: '16%',
				b2w: '16%',
				walmart: '16%',
				role_list: [],
				menu_list: [],
				user_list: [],
				user_form: {}, //添加用户的表单
				role_loading: false, //用户列表的动画
				user_loading: false, //用户列表的动画
				role_type: 'add', //默认弹框的类型
				fullscreen_loading: false, //全屏loading
				role_total: 0, //角色的数量
				del_type: '', //删除类型  用户和 角色
				roleId: '', //修改权限的时候用
				userId: '', //修改子账号用户的时候用
				email: ''
			}
		},
		created() {
			this.init(5, 1); /*获取当前用户所有的权限*/
			this.get_meun_list(); /*获取所有权限的列表*/
			this.get_user_list(); /*获取所有用户的列表*/
			this.get_user_info(this.$store.getters.userId);
		},
		methods: {
			/*根据id获取*/
			get_user_group(arr) {
				for (var i = 0; i < this.role_list.length; i++) {
					if (this.role_list[i].roleId === arr[0]) {
						return this.role_list[i].roleName
					}
				}
			},
			/*根据当前id获取用户信息*/
			get_user_info(userId) {
				this.$get(`sys/user/info/${userId}`).then(res => {
					this.email = res.data.email;
				}).catch(res => {})
			},
			/*获取下拉框*/
			get_select() {
				this.$get('sys/role/list', {
					pageSize: 40,
					pageNo: 1,
					params: this.$store.getters.userId
				}).then(res => {
					this.options = res.data.content;
				}).catch(res => {})
			},
			/*获取所有权限的列表*/
			get_meun_list() {
				this.$get('sys/menu/list').then(res => {
					this.menu_list = res.data;
				})
			},
			/*获取所有子账号列表*/
			get_user_list() {
				this.user_loading = true;
				this.$get('sys/user/list', {
					//					pageSize: 5,
					//					pageNo: 1,
					//					params: this.$store.getters.userId
				}).then(res => {
					this.user_loading = false;
					this.user_list = res.data;
				}).catch(res => {
					this.user_loading = false;
				})
			},
			/*获取当前用户所有的权限列表*/
			init(pageSize, pageNo) {
				this.role_loading = true;
				this.$get('sys/role/list', {
					pageSize: pageSize,
					pageNo: pageNo,
					params: this.$store.getters.userId
				}).then(res => {
					this.role_list = res.data.content;
					this.role_total = res.data.totalElements
					this.role_loading = false;
				}).catch(res => {
					this.role_loading = false;
				})
			},
			/*赐于用户操作页面的权力*/
			select_role(item, list) {
				list.forEach(res => {
					this.$set(res, "checked", false);
				})
				this.$set(item, "checked", true);
			},
			/*打开删除 角色的弹出框*/
			del_role_item(item, del_type) {
				this.del_type = del_type;
				this.$store.commit("TOGGLE_ALL_DEL", item)
			},
			/*这个是弹出框的删除事件*/
			agree_item(id) {
				this.fullscreen_loading = true;
				if (this.del_type === 'user') {
					this.$post('sys/user/delete', {
						userIds: [id]
					}).then(res => {
						this.fullscreen_loading = false;
						this.$store.commit('TOGGLE_ALL_DEL');
						this.get_user_list();
						this.$message({
							message: res.data,
							type: 'success'
						})
					}).catch(res => {
						this.fullscreen_loading = false;
					})
				} else {
					this.$post('sys/role/delete', {
						roleIds: [id]
					}).then(res => {
						this.fullscreen_loading = false;
						this.$store.commit('TOGGLE_ALL_DEL');
						this.init(5, 1);
						this.$message({
							message: res.data,
							type: 'success'
						})
					}).catch(res => {
						this.fullscreen_loading = false;
					})
				}
			},
			/*弹出框的取消事件*/
			cancae_item() {
				this.$store.commit('TOGGLE_ALL_DEL');
			},
			/*打开添加子账户的弹出框*/
			open_add_dialog(item) {
				setTimeout(res => {
					this.$refs.input.$el.querySelector('input').style.paddingLeft = this.email.length * 10.2 + 'px';
				})
				if (item) {
					this.user_type = 'update';
					this.get_select();
					this.add_dialog = true;
					this.userId = item.userId;
					this.user_form.roleId = item.roleId;
					this.user_form.userName = item.userName.replace(this.email + '_', '');
					this.user_form.password = '';
					this.user_form.re_password = '';
				} else {
					this.user_type = 'add';
					this.get_select();
					this.add_dialog = true;
					this.user_form = {
						group: '',
						userName: '',
						password: '',
						re_password: ''
					}
				}
			},
			/*打开权限的弹出框*/
			open_edit_dialog(item) {
				if (item) {
					/*点的编辑*/
					this.edit_dialog = true;
					this.role_type = 'update';
					this.roleId = item.roleId;
					this.$get(`sys/role/info/${item.roleId}`).then(res => {
						this.valuex = res.data.roleName;
						var menuIdList = res.data.menuIdList;
						this.menu_list.forEach(value => {
							value.list && value.list.forEach(r => {
								menuIdList.forEach(response => {
									if (response == r.menuId) {
										r.checked = true;
									} else {
										r.checked = false;
									}
								})
							})
						});
					})

				} else {
					/*点的添加*/
					this.edit_dialog = true;
					this.role_type = 'add';
					this.valuex = '';
					this.menu_list.forEach(res => {
						res.list && res.list.forEach(r => {
							if (r.menuName === '无效') {
								r.checked = true
							}
						})
					});
				}
			},
			/*添加子用户或修改*/
			submit_add() {
				this.fullscreen_loading = true;
				if (this.user_type === 'add') {
					this.$post('sys/user/save', {
						"createUserId": this.$store.getters.userId,
						password: this.$md5(this.user_form.password),
						roleIdList: [this.user_form.group],
						userName: this.email + '_' + this.user_form.userName,
						email: this.email + '_' + this.user_form.userName,
						status: 0
					}).then(res => {
						this.fullscreen_loading = false;
						this.$message({
							message: res.data,
							type: 'success'
						});
						this.add_dialog = false;
						this.get_user_list();
					}).catch(res => {
						this.fullscreen_loading = false;
					})
				} else {
					this.$post('sys/user/update', {
						userId: this.userId,
						"createUserId": this.$store.getters.userId,
						password: this.$md5(this.user_form.password),
						roleIdList: [this.user_form.group],
						userName: this.email + '_' + this.user_form.userName,
						email: this.email + '_' + this.user_form.userName,
						status: 0
					}).then(res => {
						this.fullscreen_loading = false;
						this.$message({
							message: res.data,
							type: 'success'
						});
						this.add_dialog = false;
						this.get_user_list();
					}).catch(res => {
						this.fullscreen_loading = false;
					})
				}
			},
			/*提交添加或修改角色*/
			submit_edit() {
				if (!this.valuex) {
					this.$message({
						message: '未输入角色名称',
						type: 'error'
					});
					return
				}
				var id_list = [];
				for (var i = 0; i < this.menu_list.length; i++) {
					var temp = this.menu_list[i].list;
					for (var j = 0; j < temp.length; j++) {
						if (temp[j].checked) {
							id_list.push(temp[j].menuId);
							id_list.push(this.menu_list[i].menuId);
						}
					}
				}
				this.fullscreen_loading = true;
				if (this.role_type == 'add') {
					this.$post('sys/role/save', {
						"createUserId": this.$store.getters.userId,
						"menuIdList": id_list,
						//						"roleId": "string",
						"roleName": this.valuex,
						"updateUserId": this.$store.getters.userId,
					}).then(res => {
						this.fullscreen_loading = false;
						this.$message({
							message: res.data,
							type: 'success'
						});
						this.edit_dialog = false;
						this.init(5, 1);
					}).catch(res => {
						this.fullscreen_loading = false;
					})
				} else {
					this.$post('sys/role/update', {
						"createUserId": this.$store.getters.userId,
						"menuIdList": id_list,
						"roleId": this.roleId,
						"roleName": this.valuex,
						"updateUserId": this.$store.getters.userId,
					}).then(res => {
						this.fullscreen_loading = false;
						this.$message({
							message: res.data,
							type: 'success'
						});
						this.edit_dialog = false;
						this.init(5, 1);
					}).catch(res => {
						this.fullscreen_loading = false;
					})
				}

			}
		},
		mounted() {}
	}

</script>
<style rel='stylesheet/scss' lang='scss'>
	.setting-item {
		background-color: #fff;
		padding: 10px 30px 10px 30px;
		.setting-header {
			color: #666;
			font-size: 22rem;
			margin-bottom: 18px;
			border-bottom: 2px solid #ccc;
			padding-bottom: 12px;
		}
	}

	.null-class {
		.el-input__inner {
			padding-left: 172px;
		}
		.el-input__prefix {
			top: 3px;
			left: 16px;
		}
	}

</style>
