<template>
<el-menu class="navbar" mode="horizontal">
	<hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
	<!--    <breadcrumb></breadcrumb>-->
	<div class="left-item">
		<div class="times" v-show="!isShow">
			<h3>{{$t(`layout["免费试用版"]`)}}</h3>
			<h6 @click='open' style="text-decoration:underline;cursor:pointer;text-align:center">{{$t(`layout["更换套餐"]`)}}</h6>
		</div>
		<div class="times" v-show="isShow">
			<h3>{{$t(`layout["04／22／2018年到期"]`)}}</h3>
			<h6 @click='open' style="text-decoration: underline;cursor:pointer;text-align:center">{{$t(`layout["使用 Pagamento"]`)}}|$39.00</h6>
		</div>

		<div class="line"></div>
		<div class="GRTIS">
			<p class="p">{{$t(`layout["分享可获得1周免费"]`)}}</p>
			<p class="button">
				<el-button size='mini' type='primary'>
					<div class="div">
						<img :src="require('@/assets/img/face.png')" alt="">
						<span style="margin-left:4px">{{$t(`layout["分享"]`)}}</span>
					</div>
				</el-button>
			</p>
		</div>
	</div>
	<div class="right-item">
		<button @click='select_lang'>切换语言</button>
		<el-tooltip class="item" effect="dark" content="Sugestão | Reportar Erro" placement="bottom">
			<span class="span" @click='$store.commit("TOGGLE_ALL_MESSAGE")'><svg-icon icon-class='vc' alt='' title=''></svg-icon></span>
		</el-tooltip>
		<el-popover
		  placement="bottom-end"
		  width="400"
		  trigger="click">
			<div>
				<div class="hand-icon">
					<div class="icon"><svg-icon icon-class='hand' alt='' title=''></svg-icon></div>
					<div class="line"></div>
					<p>Escova Alisadora Magic Hair atingiu o preço minimo</p>
				</div>
				<div class="hand-icon">
					<div class="icon"><svg-icon icon-class='hand' alt='' title=''></svg-icon></div>
					<div class="line"></div>
					<p>Escova Alisadora Magic Hair atingiu o preço minimo</p>
				</div>
				<div class="hand-icon">
					<div class="icon"><svg-icon icon-class='hand' alt='' title=''></svg-icon></div>
					<div class="line"></div>
					<p>Escova Alisadora Magic Hair atingiu o preço minimo</p>
				</div>
				<div class="hand-icon">
					<div class="icon"><svg-icon icon-class='hand' alt='' title=''></svg-icon></div>
					<div class="line"></div>
					<p>Escova Alisadora Magic Hair atingiu o preço minimo</p>
				</div>
			</div>
		  <div slot='reference'>
			<el-tooltip class="item" effect="dark" content="Precificação BuyBox" placement="bottom">
				<span class="span">
					<b>3</b>
					<svg-icon icon-class='hand' alt='' title=''></svg-icon>
				</span>
			</el-tooltip>	
		  </div>
		</el-popover>
<!--
		<el-tooltip class="item" effect="dark" content="Precificação BuyBox" placement="bottom">
			<span><svg-icon icon-class='hand' alt='' title=''></svg-icon></span>
		</el-tooltip>
-->
		<el-popover
		  placement="bottom-end"
		  width="400"
		  trigger="click">
			<div>
				<div class="hand-icon">
					<div class="icon"><svg-icon icon-class='naozhong1' alt='' title=''></svg-icon></div>
					<div class="line"></div>
					<p>Existem 8 pedidos expedidos fora do sistema</p>
				</div>
				<div class="hand-icon">
					<div class="icon"><svg-icon icon-class='naozhong2' alt='' title=''></svg-icon></div>
					<div class="line"></div>
					<p>No dia 27/04/2018 - 12:00 
estaremos realizando a 
manutenção do sistema 
</p>
				</div>
				<div class="hand-icon">
					<div class="icon"><svg-icon icon-class='naozhong3' alt='' title=''></svg-icon></div>
					<div class="line"></div>
					<p>Objetos aguardando retirada 
na agência</p>
				</div>
				<div class="hand-icon">
					<div class="icon"><svg-icon icon-class='naozhong4' alt='' title=''></svg-icon></div>
					<div class="line"></div>
					<p>Escova Magic Hair e mais 3 
Produtos estão sem estoque.</p>
				</div>
				<div class="hand-icon">
					<div class="icon"><svg-icon icon-class='naozhong5' alt='' title=''></svg-icon></div>
					<div class="line"></div>
					<p>13 Pedido cancelados.</p>
				</div>
			</div>
		  <div slot='reference'>
			<el-tooltip class="item" effect="dark" content="Tutoriais" placement="bottom">
				<span class="span">
					<b>5</b>
					<svg-icon icon-class='naozhong' alt='' title=''></svg-icon>
				</span>
			</el-tooltip>	
		  </div>
		</el-popover>
<!--
		<el-tooltip class="item" effect="dark" content="Tutoriais" placement="bottom">
			<span><svg-icon icon-class='naozhong' alt='' title=''></svg-icon></span>
		</el-tooltip>
-->
		<el-tooltip class="item" effect="dark" content="Notificações" placement="bottom">
			<span class="span">
				<a class='link' target="_blank" href="https://www.youtube.com/channel/UC6AAQNUU67NcsB5mlPlABCg">
					<svg-icon icon-class='photo' alt='' title='' style='font-size:30px'></svg-icon>
				</a>
			</span>
		</el-tooltip>
	</div>
	<el-dropdown class="avatar-container" trigger="click">
		<div class="avatar-wrapper">
			<svg-icon icon-class='rentou' style='font-size:28px;font-weight:bold'></svg-icon>
			<i class="el-icon-caret-bottom"></i>
		</div>
		<el-dropdown-menu class="user-dropdown" slot="dropdown">
			<el-dropdown-item>
				<span @click='user' class="drop-icon">
					<svg-icon icon-class='user'  style='font-size:24px'></svg-icon>
					<span>{{$t(`layout["用户资料"]`)}}</span>
				</span>
			</el-dropdown-item>
			<el-dropdown-item>
				<span @click='user' class="drop-icon">
					<svg-icon icon-class='user'  style='font-size:24px'></svg-icon>
					<span>{{$t(`layout["Operadores"]`)}}</span>
				</span>
			</el-dropdown-item>
			<el-dropdown-item divided>
				<span @click='set' class="drop-icon">
					<svg-icon icon-class='set' style='font-size:18px'></svg-icon>
					<span>{{$t(`layout["配置"]`)}}</span>
				</span>
			</el-dropdown-item>
			<el-dropdown-item divided @click='logout'>
					<span  @click='logout' class="drop-icon">
						<svg-icon icon-class='enter' style='font-size:16px'></svg-icon>
						<span>{{$t(`layout["退出"]`)}}</span>
					</span>
			</el-dropdown-item>
		</el-dropdown-menu>
	</el-dropdown>
</el-menu>
</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	import Breadcrumb from '@/components/Breadcrumb'
	import Hamburger from '@/components/Hamburger'

	//  import bgc from '@/s'

	export default {
		data() {
			return {
				isShow: true,
				gridData: [{},
					{},
					{},
				]
			}
		},
		components: {
			Breadcrumb,
			Hamburger,


		},
		computed: {
			...mapGetters([
				'sidebar',
				'avatar'
			])
		},
		created() {
			setInterval(res => {
				this.isShow = !this.isShow;
			}, 3000)
		},
		methods: {
			select_lang() {
				this.$i18n.locale = this.$i18n.locale === 'cn' ? 'pt' : 'cn';
			},
			toggleSideBar() {
				this.$store.dispatch('ToggleSideBar')
			},
			logout() {
				this.$store.dispatch('LogOut').then(() => {
					location.reload() // 为了重新实例化vue-router对象 避免bug
				})
			},
			open() {
				this.$store.state.title = true;
			},
			user() {
				this.$router.push({
					path: '/dashboard/perfil'
				});
			},
			set() {
				this.$router.push({
					path: '/dashboard/setting'
				});
			},
			logout() {
				this.$router.push({
					path: '/login'
				});
			}
		}
	}

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	$height60:60px;
	$iconHeihgt:16px;
	.hand-icon {
		display: flex;
		align-items: center;
		padding: 0 20px;
		margin: 10px 0;
		/*		justify-content: flex-start*/
		>.icon {
			font-size: 40px;
			padding-right: 5px;
		}
		.line {
			height: 40px;
			width: 1px;
			background-color: #ccc;
			margin: 0 15px;
		}
		p {
			font-size: 14px;
			color: #000;
		}

	}

	.drop-icon {
		font-size: 16px;
		display: flex;
		align-items: center;
		span {
			margin: 0 10px;
			position: relative;

		}
		svg {
			width: 20px;
		}
	}

	.left-item {
		float: left;
		/*    margin-left: 80px;*/
		div {
			float: left;
		}
		.times {
			padding: 0 10px;
			height: $height60;
			width: 200px;
			text-align: center;
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: space-between;
			h3 {
				font-size: 5rem;
				margin-bottom: 6px;
			}

			h6 {
				font-size: 5rem;
				text-align: center;

			}
		}

		.line {
			width: 2px;
			background-color: #ccc;
			margin: 15px 20px;
			height: 40px;
		}
		.GRTIS {
			height: $height60;
			text-align: center;
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.p {
				display: block;
				/*				height: 20px;*/
				font-size: 12px;
				margin-bottom: 4px;
			}
			.button {
				.el-button--mini,
				.el-button--mini.is-round {
					padding: 4px 15px;
				}
				.div {
					display: flex;
					justify-content: space-around;
					align-items: center
				}
			}
		}
	}

	.right-item {
		float: right;
		margin-right: 70px;
		display: flex;
		justify-content: center;
		align-items: center;
		height: $height60;
		.span {
			margin: 0 10px;
			cursor: pointer;
			font-size: 24px;
			position: relative;
			>b {
				position: absolute;
				right: -5px;
				top: -2px;
				background-color: #C13838;
				color: #fff;
				font-size: 12px;
				font-weight: normal;
				display: inline-block;
				border-radius: 50%;
				height: $iconHeihgt;
				line-height: $iconHeihgt;
				text-align: center;
				padding: 0 5px;
			}
		}

	}

	.navbar {
		height: 60px;
		border-radius: 0px !important;
		position: fixed;
		top: 0;
		width: 100%;
		.hamburger-container {
			line-height: 58px;
			height: 50px;
			float: left;
			padding: 0 10px;
		}
		.screenfull {
			position: absolute;
			right: 90px;
			top: 16px;
			color: red;
		}
		.avatar-container {
			height: $height60;
			display: inline-block;
			position: absolute;
			right: 35px;
			.avatar-wrapper {
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				cursor: pointer;
				position: relative;
				.user-avatar {
					width: 40px;
					border-radius: 10px;
				}
				.el-icon-caret-bottom {
					position: absolute;
					right: -16px;
					bottom: 12px;
					font-size: 14px;
					color: #000;
				}
			}
			.icon {
				font-size: 16px;
				color: #808080;
			}
		}
	}

</style>
