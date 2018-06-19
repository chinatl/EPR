<template>
	<div style="overflow:hidden" v-loading.fullscreen = 'loading'>
		<div class="operadores-item">
			<div class="setting-header">
				{{$t(`setting['Senha']`)}}
			</div>
			<div class="setting-content">
				<div class="setting-content-input">
					<span class='name '>{{$t(`setting['Senha de Login']`)}}:</span>
					<el-input size='small' type='password' style='width:50%' readonly value='12345678'></el-input>
				<i class='el-icon-edit-outline' @click='$store.commit("TOOGLE_EDIT_PWD")'></i>
				</div>
				<div class="setting-content-input">
					<span class='name'>{{$t(`setting['Telefone']`)}}:</span>
					<el-input size='small' value='xxxxxxxx' style='width:50%' readonly ></el-input>
					<i class='el-icon-edit-outline'
						@click='open_dialog("edit_phone_dialog")'
					></i>
				</div>
				<div class="setting-content-input">
					<span class='name'>{{$t(`setting['Senha de Administração']`)}}:</span>
					<el-input size='small' type='password' style='width:50%'  readonly value='12345678'></el-input>
					<i class='el-icon-edit-outline'
					@click='open_dialog("edit_password")'
					></i>
				</div>
			</div>
		</div>
		<div class="operadores-item">
			<div class="setting-header">
				{{$t(`setting['Taxa de Comissão']`)}}
			</div>
			<div class="setting-item">
				<div>
					<!-- class="filter-gray"-->
					<h6>Mercado Livre</h6>
					<div class="setting-item-img">
						<img :src="require('@/assets/market/market-liver.png')" alt="">
					</div>
					<p class="setting-item-tip">
						<span>{{$t(`setting['Clássico']`)}}</span>
						<span>{{$t(`setting['Premium']`)}}</span>
					</p>
					<div class="setting-item-footer">
						<div class='setting-search-button'>
							<el-input type='text' size='small'
							@keyup.native='checkNum($event,"mercadoClassico")'
							 v-model='mercadoClassico'>
								 <span slot="suffix" class="el-input__icon" style="color:#000;padding-right:2px;font-size:16px">%</span>
							</el-input>
							<el-input type='text' size='small'
							 @keyup.native='checkNum($event,"mercadoPremium")'
							 v-model='mercadoPremium'>
								 <span slot="suffix" class="el-input__icon" style="color:#000;padding-right:2px;font-size:16px">%</span>
							</el-input>
							<el-button size='mini' type='primary' @click='submit_money'><i class="el-icon-check"></i></el-button>
						</div>
					</div>
				</div>
				<div>
					<!-- class="filter-gray"-->
					<h6>B2W</h6>
					<div class="setting-item-img">
						<img :src="require('@/assets/market/market-b2w.png')" alt="">
					</div>
					<p class="setting-item-tip">
						<span>{{$t(`setting['Comissão Mkt']`)}}.</span>
					</p>
					<div class="setting-item-footer">
						<div class='erp-search-button'>
							<el-input size='small' 
								@keyup.native='checkNum($event,"b2w")'	 v-model='b2w'>
								 <span slot="suffix" class="el-input__icon" style="color:#000;padding-right:2px;font-size:16px">%</span>
							</el-input>
							<el-button size='small' type='primary' @click='submit_money'>ok</el-button>
						</div>
					</div>
				</div>
				<div>
					<!-- class="filter-gray"-->
					<h6>{{$t(`setting['Comissão Mkt']`)}}..</h6>
					<div class="setting-item-img">
						<img :src="require('@/assets/market/wmarket-woerma.png')" alt="">
					</div>
					<p class="setting-item-tip">
						<span>{{$t(`setting['Comissão Mkt']`)}}..</span>
					</p>
					<div class="setting-item-footer">
						<div class='erp-search-button'>
							<el-input type='text' size='small' v-model='walmart' @keyup.native='checkNum($event,"walmart")'>
								 <span slot="suffix" class="el-input__icon" style="color:#000;padding-right:2px;font-size:16px">%</span>
							</el-input>
							<el-button size='small' type='primary' @click='submit_money'>ok</el-button>
						</div>
					</div>
				</div>
			</div>
		</div>
	 <el-dialog
   		class='edit-password'
    	:visible.sync="edit_password"
    >
        <div slot='title' class="erp-dialog_title">
            Alterar Senha
        </div>
       	<div class='erp-dialog-item no-border'>
			<div>
				<p>{{$t('input["Senha Atual"]')}}</p>
				<el-input v-model='trade_form.password' size='small' type='password'></el-input>
			</div>
		</div>
       	<div class='erp-dialog-item no-border'>
			<div>
				<p>
					{{$t('input["Nova Senha"]')}}
				</p>
				<el-input v-model='trade_form.managePassword' type='password' size='small' ></el-input>
			</div>
		</div>
       	<div class='erp-dialog-item no-border'>
			<div>
				<p>
					{{$t('input["Confirmar Nova Senha"]')}}
				</p>
				<el-input v-model='trade_form.re_Password' type='password' size='small' ></el-input>
			</div>
		</div>
       	<div class='erp-dialog-item no-border'>
			<div>
				<p>
					{{$t('input["Código de Verificação"]')}}
				</p>
				<div class='erp-search-button'>
					<el-input size='small' v-model.trim='trade_form.code'></el-input>
					<button :class='!isSend ? "erp-btn" : "erp-btn info"'  @click='get_email_code'>{{email_message}}</button>
				</div>
			</div>
		</div>
   		<p class='erp-dialog-button'>
   			<button class="erp-btn" @click='submit_edit_password'>{{$t('button["Concluir"]')}}</button>
		</p>
    </el-dialog>
   <el-dialog
    :visible.sync="edit_phone_dialog"
    class='edit-password'
    >
        <div slot='title' class="erp-dialog_title">
            Alterar Telefone
        </div>
       	<div class='erp-dialog-item no-border'>
			<div>
				<p>
				Novo Telefone
				</p>
				<div class='erp-search-button'>
					<el-input type='text' size='small' placeholder='手机号' v-model='phone_form.phone' v-if='!isSendPhone'></el-input>
					<el-input type='text' size='small' placeholder='请输入手机验证码'
					 v-model='phone_form.phoneCode' v-else></el-input>
					<button :class='!isSendPhone ? "erp-btn" : "erp-btn info"'  @click='get_phone_code'>{{phone_message}}</button>
				</div>
			</div>
		</div>
		<div class='erp-dialog-item no-border'>
			<div>
				<p>
					Código de Verificação do E-Mail
				</p>
				<div class='erp-search-button'>
					<el-input type='text' size='small' placeholder='Insira o código de 6 dígitos' v-model='phone_form.emailCode'></el-input>
					<button :class='!isSend ? "erp-btn" : "erp-btn info"'  @click='get_email_code'>{{email_message}}</button>
				</div>
			</div>
		</div>
   		<p class='erp-dialog-button'>
			<button class="erp-btn" @click='submit_edit_phone'>{{$t('button["Concluir"]')}}</button>
		</p>
    </el-dialog> 
		<edit-password></edit-password>
<!--		<edit-phone></edit-phone>-->
<!--		<edit-trade></edit-trade>-->
	</div>

</template>
<script>
	import editPassword from './components/edit_pwd.vue';
	//	import editPhone from './components/edit_phone.vue';
	//	import editTrade from './components/edit_trade.vue';
	import {
		validataShehui,
		validateUrl,
		validataNum
	} from '@/utils/validate'
	export default {
		components: {
			editPassword,
			//			editTrade,
			//			editPhone
		},
		data() {
			return {
				value: '',
				edit_password: false, //编辑交易密码的弹出框
				edit_phone_dialog: false, //修改手机号的弹出框
				loading: false,
				mercadoClassico: '11',
				mercadoPremium: '16',
				b2w: '16',
				walmart: '16',
				managePassword: '',
				id: '',
				type: '',
				trade_form: {
					code: '',
					password: '',
					managePassword: '',
				},
				phone_form: {
					phone: '',
					phoneCode: '',
					emailCode: '',
				},
				email: '',
				isSend: false,
				isSendPhone: false,
				isSendPhoneEmail: false,
				email_message: 'Enviar SMS',
				phone_message: 'Enviar SMS',
				timer: null
			}
		},
		created() {
			this.init();
			this.get_user_email(this.$store.getters.userId); //获取邮箱
		},
		methods: {
			/*打开弹出框并默认一下参数*/
			open_dialog(dialog) {
				this[dialog] = true;
				this.isSend = false;
				this.isSendPhone = false;
				this.isSendPhoneEmail = false;
				this.phone_form.phone = '';
				this.phone_form.phoneCode = '';
				this.phone_form.emailCode = '';
				this.trade_form.code = '';
				this.trade_form.password = '';
				this.trade_form.managePassword = '';
			},
			/*提交修改佣金*/
			submit_money() {
				this.loading = true;
				this.$post('config/update/mallRate', {
					mercadoClassico: this.mercadoClassico,
					mercadoPremium: this.mercadoPremium,
					b2W: this.b2w,
					walmart: this.walmart,
				}).then(res => {
					this.$message({
						message: res.data,
						type: 'success'
					});
					this.loading = false;
				}).catch(res => {
					this.loading = false;
				})
			},
			/* 正则验证用户输入*/
			checkNum(e, i) {
				if (!validataNum(e.target.value)) {
					this[i] = '';
				}
			},
			/*初始化这个页面*/
			init() {
				this.loading = true;
				this.$get('config/query').then(res => {
					this.loading = false;
					if (validataShehui(res.data.cnpj)) {
						this.type = 'update';
						this.walmart = res.data.walmart;
						this.mercadoPremium = res.data.mercadoPremium;
						this.b2w = res.data.b2W;
						this.mercadoClassico = res.data.mercadoClassico;
						this.id = res.data.id;
					}
				}).catch(res => {
					this.loading = false;
				})
			},
			/*获取当前用户邮箱*/
			get_user_email(userId) {
				this.$get(`sys/user/info/${userId}`).then(res => {
					this.email = res.data.email;
				}).catch(res => {})
			},
			/*发送邮箱验证码*/
			get_email_code() {
				if (this.isSend) {
					this.$message({
						message: '您已发送验证码，请稍后再发',
						type: 'error'
					})
					return
				}
				this.loading = true;
				this.$get('user/mailVerification', {
					email: this.email
				}).then(res => {
					clearInterval(this.timer);
					this.loading = false;
					this.$message({
						message: res.data,
						type: 'success'
					});
					this.isSend = true;
					var a = 0;
					this.timer = setInterval(res => {
						a++;
						this.email_message = (60 - a) + 's para reenviar';
						if (a == 60) {
							this.email_message = 'email_message';
							this.isSend = true;
							clearInterval(this.timer);
						}
					}, 1000)
				}).catch(res => {
					this.loading = false;
				})
			},
			/*确定提交修改 管理密码*/
			submit_edit_password() {
				this.loading = true;
				this.$post('config/update/managePassword', {
					"code": this.trade_form.code,
					"id": this.id,
					"mail": this.email,
					"managePassword": this.$md5(this.trade_form.managePassword),
					"password": this.$md5(this.trade_form.password),
				}).then(res => {
					this.loading = false;
					this.edit_password = false;
					this.$message({
						message: res.data,
						type: 'success'
					});
				}).catch(res => {
					this.loading = false;
				})
			},
			/*确定提交修改 手机号*/
			submit_edit_phone() {
				if (!this.phone_form.emailCode) {
					this.$message({
						message: '邮箱验证码为空',
						type: 'error'
					})
					return
				}
				if (!this.phone_form.phoneCode) {
					this.$message({
						message: '手机验证码为空',
						type: 'error'
					})
					return
				}
				this.loading = true;
				this.$post('config/update/phone', {
					"id": this.id,
					"phone": this.phone_form.phone,
					"phoneCode": this.phone_form.phoneCode,
					"mail": this.email,
					"emailCode": this.phone_form.emailCode,
				}).then(res => {
					this.edit_phone_dialog = false;
					this.loading = false;
					this.$message({
						message: res.data,
						type: 'success'
					});
				}).catch(res => {
					this.loading = false;
				})
			},
			/*发送修改手机的验证码*/
			get_phone_code() {
				if (!this.phone_form.phone) {
					this.$message({
						message: '请输入手机号',
						type: 'error'
					})
					return
				}
				if (this.isSendPhone) {
					this.$message({
						message: '您已发送验证码，请稍后再发',
						type: 'error'
					})
					return
				}
				this.loading = true;
				this.isSendPhone = true;
				this.$post(`user/message/${this.phone_form.phone}`).then(res => {
					clearInterval(this.timer);
					this.loading = false;
					this.$message({
						message: res.data,
						type: 'success'
					});
					var a = 0;
					this.timer = setInterval(res => {
						a++;
						this.phone_message = (60 - a) + 's para reenviar';
						if (a == 60) {
							this.phone_message = 'email_message';
							this.isSendPhone = true;
							clearInterval(this.timer);
						}
					}, 1000)
				}).catch(res => {
					this.loading = false;
				})
			}
		}
	}

</script>
<style rel='stylesheet/scss' lang='scss'>
	.operadores-item {
		background-color: #fff;
		padding: 30px 30px;
		margin-bottom: 30px;
		.setting-header {
			color: #999;
			font-size: 24rem;
			margin-bottom: 12px;
		}
		.setting-content {
			padding-left: 6px;
			.setting-content-input {
				display: flex;
				margin: 14px 0;
				align-items: center;
				.name {
					width: 240px;
					font-size: 16rem;
					display: inline-block;
					color: #999;
					margin-right: 20px;
				}
				i {
					font-size: 24px;
					margin-left: 12px;
					color: #999;
					font-weight: normal;
					cursor: pointer;
				}
			}
		}
		.setting-item {
			display: flex;
			padding-left: 6px;
			>div {
				width: 240px;
				min-width: 240px;
				border: 1px solid #ccc;
				border-radius: 16px;
				overflow: hidden;
				margin-right: 40px;
				margin-top: 10px;
				padding: 20px;
				h6 {
					text-align: center;
					font-size: 18px;
					height: 40px;
					line-height: 40px
				}
				.setting-item-img {
					height: 100px;
					display: flex;
					justify-content: center;
					align-items: center;
					img {
						/*					width: 100px;*/
					}
				}
				.setting-item-tip {
					text-align: left;
					margin-bottom: 6px;
					height: 40px;
					line-height: 40px;
					font-size: 16rem;
					color: #000;
					span {
						padding-left: 6px;
						border-left: 2px solid #999;
						margin-right: 12px;
					}
				}
				.setting-item-footer {
					.el-input__inner {
						padding: 0 6px;
					}
					.setting-search-button {
						display: flex;
						justify-content: center;
						align-items: center;
						.el-button--mini {
							padding: 7px;
							border-radius: 0 4px 4px 0;
						}
						.el-input__inner {
							border-radius: 4px 0 0 4px;
						}
						i {
							font-size: 16px;
						}
						.el-button--small {
							padding: 8px;
							border-radius: 0 4px 4px 0;
							span {
								font-size: 14px;
							}
						}
					}
				}

			}
		}
	}

</style>
