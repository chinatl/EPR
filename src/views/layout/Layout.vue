<template>
  <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
 	<navbar></navbar>
    <sidebar class="sidebar-container"></sidebar>
	<div class="main-container">
      <app-main></app-main>
      <my-change></my-change>
      <my-message></my-message><!--左边第一个弹出层-->
      
   
   <!-- 功能限制通知 -->
	   <div class="error-page">
			<el-dialog
				:visible.sync="limit_function"
				  center
				>
				<div slot='title' class="error-header">Informação</div>
				<div class="error-content">
					<p class="error-message">Função não disponivel no plano contratado.</p>
					<p class="error-button">
						<el-button size='small' round type="info" @click='agree_function'>
							<span class="error-inner" >{{$t('button["Alterar Plano"]')}}</span>
						</el-button>
					</p>
				</div>
			</el-dialog>
			<el-dialog
				:visible.sync="limit_power"
				  center
				>
				<div slot='title' class="error-header">Informação</div>
				<div class="error-content">
					<p class="error-message">Conta suspensa por falta de pagamento.</p>
					<p class="error-button">
						<el-button size='small' round type="info" @click='agree_power'>
							<span class="error-inner">{{$t('button["Realizar Pagamento"]')}}</span>
						</el-button>
					</p>
				</div>
			</el-dialog>
		</div>
    </div>
  </div>
</template>

<script>
	import {
		Navbar,
		Sidebar,
		AppMain,
		myPerfil,
		mySetting,
		myMessage,
	} from '@/views/layout/components'
	import myChange from '@/components/Change'

	export default {
		name: 'layout',
		components: {
			Navbar,
			Sidebar,
			AppMain,
			myChange,
			myPerfil,
			mySetting,
			myMessage
		},
		data() {
			return {
				limit_power: true,
				limit_function: true,
			}
		},
		methods: {
			agree_function() {
				this.limit_function = false;
			},
			agree_power() {
				this.limit_power = false;
			},
		},
		computed: {
			sidebar() {
				return this.$store.state.app.sidebar
			}
		}
	}

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	@import "src/styles/mixin.scss";
	.app-wrapper {
		@include clearfix;
		position: relative;
		height: 100%;
		width: 100%;
	}

</style>
