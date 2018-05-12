<template>
    <div class="ms-layout">
        <div class="ms-login">
            <div class="login-header">
                <h3 class="HARI"><span class="blue">HARI</span>EXPRESS</h3>
                <h3 class="solution">Solution All-in-one</h3>
            </div>
            <el-form  :model="form">
                <el-form-item :label='$t(`login["用户名"]`)'>
                    <el-input v-model="form.name" maxlength='16'></el-input>
                </el-form-item>
                <el-form-item :label='$t(`login["账号密码"]`)'>
                    <el-input v-model="form.pwd" maxlength='16' type='password'></el-input>
                </el-form-item>
            </el-form>
            <div class="login-remeber">
                 <el-checkbox v-model="checked" size='medium'><span class="forget">{{$t(`login["记住密码"]`)}}</span></el-checkbox>
                 <router-link to='forget'>{{$t(`login["忘记密码"]`)}}</router-link>
            </div>
            <div class="login-post">
                 <el-button type="success" round  v-waves @click='login'>{{loginmsg}}</el-button>
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
           <el-form  :model="register_form">
                <el-form-item label="邮箱">
                    <el-input v-model="register_form.name" maxlength='16'></el-input>
                </el-form-item>
                <el-form-item label="账号密码">
                    <el-input v-model="register_form.pwd" maxlength='16' type='password'></el-input>
                </el-form-item>
                <el-form-item label="账号密码">
                    <el-input v-model="register_form.repwd" maxlength='16' type='password'></el-input>
                </el-form-item>
                <el-form-item align='center'>
                    <el-button type="primary" round >{{$t(`login["注册"]`)}}</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
	import MD5 from 'js-md5'
	import waves from '@/directive/waves' // 水波纹指令
	export default {
		directives: {
			waves
		},
		data() {
			return {
				register_dialog: false,
				loading: false,
				checked: false,
				register_form: {},
				loginmsg: '登录',
				form: {
					name: '',
					pwd: '',
				},
				rules: {
					name: [{
						min: 3,
						max: 12,
						message: '长度在 3 到 12 个字符',
						trigger: 'blur'
					}],
					pwd: [{
						min: 6,
						max: 16,
						message: '长度在 6 到 16 个字符',
						trigger: 'blur'
					}],
				}
			}
		},
		methods: {
			login() {
				const loading = this.$loading({
					lock: true,
					text: '登陆中',
					spinner: 'el-icon-loading',
					background: 'rgba(0, 0, 0, 0.7)'
				});
				setTimeout(res => {
					this.$router.push({
						path: '/dashboard/'
					})
					this.$message({
						message: '恭喜您，登录成功',
						type: 'success'
					});
					loading.close();
				}, 2000)

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
		width: 67px;
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
