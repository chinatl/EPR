<template>
    <div class="ms-layout" v-loading.fullscreen='full_loading'>
        <div class="ms-login">
            <div class="login-header">
                <h3 class="HARI"><span class="blue">HARI</span>EXPRESS</h3>
                <h3 class="solution">Solution All-in-one</h3>
            </div>
            <el-form  :model="form" :rules="login_rule"  ref="login_form" status-icon >
                <el-form-item :label='$t(`login["用户名"]`)' prop='username'>
                    <el-input v-model="form.username" maxlength='32'></el-input>
                </el-form-item>
                <el-form-item :label='$t(`login["账号密码"]`)' prop='password'>
                    <el-input v-model="form.password" type='password' @keyup.native.enter ='login' auto-complete="on" ></el-input>
                </el-form-item>
            </el-form>
            <div class="login-remeber">
                 <el-checkbox v-model="checked" size='medium'><span class="forget">{{$t(`login["记住密码"]`)}}</span></el-checkbox>
                 <router-link to='forget'>{{$t(`login["忘记密码"]`)}}</router-link>
            </div>
            <div class="login-post">
                 <el-button type="success" round  v-waves @click='login'>{{loginmsg}} </el-button>
                 <p>-----------&nbsp;&nbsp;Qu&nbsp;&nbsp;-------------</p>
                 <div class="login-img">
                     <div v-waves><img :src="require('@/assets/img/img1.png')" alt=""></div>
                     <div v-waves><img :src="require('@/assets/img/facebook.png')" alt=""></div>
                     <div v-waves><img :src="require('@/assets/img/google.png')" alt=""></div>
                 </div>
            </div>
            <p class="login-register"><a @click='register_dialog = true'>{{$t(`login["注册"]`)}}</a></p>
        </div>
        <el-dialog
        :visible.sync="register_dialog"
        width="500px"
        center>
           <div slot='title'>
                <h3 class="HARI"><span class="blue">HARI</span>EXPRESS</h3>
                <h3 class="solution">Solution All-in-one</h3>
           </div>
           <el-form  :model="register_form" status-icon :rules="rules"  ref="registerForm">
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="register_form.email" maxlength='20'></el-input>
                </el-form-item>
                <el-form-item label="邮箱验证码">
                	<div style="display:flex;width:100%">
						<el-input v-model="register_form.mailVerification" maxlength='6' ></el-input>
						<button :class='!isSend ? "erp-btn" : "erp-btn info"' @click.stop.prevent='get_validate'>{{email_message}}</button>
                	</div>
                </el-form-item> 
                <el-form-item label="账号密码" prop="password">
                    <el-input v-model="register_form.password"  type='password' auto-complete="off"></el-input>
                </el-form-item> 
				<el-form-item label="确认密码" prop="repwd">
                    <el-input v-model="register_form.repwd" type='password' auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item align='center'>
                    <button class="erp-btn circle" @click.stop.prevent='register_submit'>{{$t(`login["注册"]`)}}</button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
	import MD5 from 'js-md5'
	import waves from '@/directive/waves' // 水波纹指令
	import {
		validateUrl
	} from '@/utils/validate' // 
	export default {
		directives: {
			waves
		},
		data() {
			var checkEmail = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入邮箱'));
				} else {
					if (!validateUrl(value)) {
						callback(new Error('邮箱格式错误'));
						return
					}
					callback();
				}
			}
			var checkEmail_reg = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入邮箱'));
				} else {
					if (!validateUrl(value)) {
						callback(new Error('邮箱格式错误'));
						return
					}
					this.$post('user/selectUser?email=' + value).then(res => {
						this.$message({
							message: res.data,
							type: 'success'
						})
						callback();
					}).catch(res => {
						callback(res.data);
					})
				}
			}
			var validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入密码'));
				} else {
					if (value.length < 8) {
						callback(new Error('请输入8位数以上的密码'));
					} else {
						callback();
					}
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请再次输入密码'));
				} else if (value !== this.register_form.password) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			return {
				full_loading: false,
				rules: {
					email: [{
						validator: checkEmail_reg,
						trigger: 'blur'
					}],
					password: [{
						validator: validatePass,
						trigger: 'blur'
					}],
					repwd: [{
						validator: validatePass2,
						trigger: 'change'
					}]
				},
				login_rule: {
					username: [{
						validator: checkEmail,
						trigger: 'blur'
					}],
					password: [{
						validator: validatePass,
						trigger: 'blur'
					}],
				},
				isSend: false,
				register_dialog: false,
				loading: false,
				checked: false,
				register_form: {
					password: '',
					email: ''
				},
				loginmsg: '登录',
				form: {
					username: '',
					password: '',
				},
				email_message: '获取验证码',
				timer: null
			}
		},
		methods: {
			/*获取验证码*/
			get_validate() {
				if (this.isSend) {
					this.$message({
						message: '您已发送验证码，请稍后再发',
						type: 'error'
					})
					return
				}
				if (validateUrl(this.register_form.email)) {
					this.full_loading = true;
					this.$get('user/mailVerification', {
						email: this.register_form.email
					}).then(res => {
						clearInterval(this.timer);
						this.full_loading = false;
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
								this.isSend = false;
								clearInterval(this.timer);
							}
						}, 1000)

					}).catch(res => {
						this.full_loading = false;
					})
				} else {
					this.$message({
						message: '邮箱格式错误',
						type: 'error'
					})
				}
			},
			/*注册*/
			register_submit() {
				this.$refs.registerForm.validate((valid) => {
					if (valid) {
						this.full_loading = true;
						this.$post(`user/registered/${this.$md5(this.register_form.password)}/${this.register_form.mailVerification}`, {
							email: this.register_form.email
						}).then(res => {
							this.full_loading = false;
							this.$store.commit("SET_USER", res.data);
							this.$router.push({
								path: '/dashboard/perfil'
							})
						}).catch(res => {
							this.full_loading = false;
						})
					} else {
						return false;
					}
				});
			},
			/*登陆*/
			login() {
				this.$refs.login_form.validate((valid) => {
					if (valid) {
						this.full_loading = true;
						this.$post(`sys/login/${this.form.username}/${this.$md5(this.form.password)}`).then(res => {
							this.full_loading = false;
							this.$store.commit("SET_USER", res.data);
							this.$router.push({
								path: '/dashboard/perfil'
							})
						}).catch(res => {
							this.full_loading = false;
						})
					} else {
						return false;
					}
				});
			}
		}
	}

</script>
<style>
	.blue {
		color: #40b4b1
	}



	.HARI {
		font-size: 30px;
		font-weight: 700;
		margin-top: 40px;
	}

	.solution {
		font-size: 27px;
		color: #999;
	}

	.ms-layout .el-dialog--center .el-dialog__body {
		padding: 0px 30px 10px 30px;
	}

	.ms-layout .el-form-item {
		margin-bottom: 12px;
	}

	/*登录头部*/

	.ms-login {
		width: 500px;
		box-sizing: border-box;
		padding: 20px 30px 30px;
		margin: 5% auto 0 auto;
		background-color: #fff
	}

	.ms-login .login-header {
		margin-bottom: 20px;
		text-align: center;
	}


	.ms-login .login-form p label {
		font-size: 22.82px;
		margin-bottom: 8px
	}

	.ms-login .login-form p input {
		font-size: 18px;
		margin-bottom: 8px;
		width: 100%;
		height: 40px;
		line-height: 38px;
		padding-left: 10px;
	}

	/*登录表单*/

	/*忘记密码*/

	.login-remeber {
		display: flex;
		justify-content: space-between;
		margin-bottom: 20px;
		padding-right: 8px;

	}

	.login-remeber .forget {
		font-size: 14px;

	}

	.login-remeber a {
		color: #999;
		text-decoration: underline;
		cursor: pointer;
	}

	.login-remeber a:hover {
		color: #40b4b1;
	}


	.login-post {
		text-align: center;
	}


	.login-post .el-button--success {
		background-color: #40b4b1;
		border: 2px solid #40b4b1;
	}

	.login-post .el-button--success:hover {
		background-color: #fff;
		color: #40b4b1;
	}

	.login-post p {
		color: #ccc;
		margin-top: 10px;
	}

	.login-post .login-img {
		display: flex;
		justify-content: center;
	}

	.login-post .login-img>div {
		margin: 15px;
		/*		width: 67px;*/
		border-radius: 8px;
		cursor: pointer
	}

	.login-post .login-img>div img {
		width: 100%;
	}

	.login-register {
		text-align: right;
		padding-right: 8px;
	}

	.login-register a {
		color: #40b4b1;
		text-decoration: underline
	}

</style>
