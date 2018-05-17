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
        <p class="button" >
        <el-button size='mini' type='primary'>
        <div>
          <img :src="require('@/assets/img/face.png')" alt="">
          <span style="margin-left:4px">{{$t(`layout["分享"]`)}}</span>
        </div>
        </el-button>
        </p>
      </div>
    </div>
    <div class="right-item">
     <button @click='select_lang'>切换语言</button>
      <img :src="require('@/assets/img/vc.png')" alt="">
      <img :src="require('@/assets/img/hand.png')" alt="">
      <a class='link'target="_blank" href="https://www.youtube.com/channel/UC6AAQNUU67NcsB5mlPlABCg"><img class='img' :src="require('@/assets/img/photo.png')" alt=""></a>
      <img :src="require('@/assets/img/naozhong.png')" alt="">
    </div>
    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
         <img :src="require('@/assets/img/renxiang.png')" alt=""  class="user-avatar">
        <i class="el-icon-caret-bottom"></i>
      </div>
      <el-dropdown-menu class="user-dropdown" slot="dropdown">
          <el-dropdown-item>
            <div @click='user'>
				<svg-icon icon-class='user' style='font-size:26px;'></svg-icon>{{$t(`layout["用户资料"]`)}}
			</div>
          </el-dropdown-item>
        <el-dropdown-item divided >
			<div @click='set'>
				<span>
					<svg-icon icon-class='set' style='font-size:26px;'></svg-icon>{{$t(`layout["配置"]`)}}
				</span>				
			</div>
        </el-dropdown-item>
		<el-dropdown-item divided @click='logout'>
				<div @click='logout'>
					<span>
						<svg-icon icon-class='enter' style='font-size:26px;'></svg-icon>{{$t(`layout["退出"]`)}}
					</span>		
				</div>   
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
				isShow:true,
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
		created(){
			setInterval(res=>{
				this.isShow=!this.isShow;
				console.log(1)
			},2000)
		},
		methods: {
			select_lang(){
				console.log(this.$i18n.locale);
//				if()
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
			open(){
				this.$store.state.title = true;
			},
			user(){
				this.$router.push({path:'/dashboard/perfil'});
			},
			set(){
				this.$router.push({path:'/dashboard/setting'});
			},
			logout(){
				this.$router.push({path:'/login'});
			}
		}
	}

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.left-item {
		float: left;
		/*    margin-left: 80px;*/
		div {
			float: left;
		}
		.times {
			padding: 0 10px;
			width:200px;
			text-align:center;
			h3 {
				height:50px;
				font-size:5rem;
				line-height: 50px;
				margin-top:10px;
			}
			
			h6 {
				text-align: right;
				font-size:5rem;
				line-height: 0px;
			}
		}
		
		.line {
			width: 2px;
			height: 70px;
			background-color: #ccc;
			margin: 15px 20px
		}
		.GRTIS {
			margin-top:10px;
			.p {
				display: block;
				height: 20px;
				font-size: 12px;
				text-align: center
			}
			.button {
				margin-top: 10px;
				font-size: 14px;
				div {
					display: flex;
					justify-content: space-around;
					align-items: center
				}
			}
		}
	}

	.right-item {
		float: right;
		margin-right: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100px;
		img {
			width: 30px;
			margin: 0 15px;
			cursor: pointer
		}

	}

	.navbar {
		height: 100px;
		line-height: 50px;
		border-radius: 0px !important;
		.hamburger-container {
			line-height: 58px;
			height: 50px;
			float: left;
			padding: 0 10px;
		}
		.link{
			display:inline-block;
			width:30px;
			height:30px;
			margin:0 15px;
			text-align:center;
			.img{
				width:100%;
				height:100%;
				position:relative;
				left:-12px;
				top:0;
			}
		}
		.screenfull {
			position: absolute;
			right: 90px;
			top: 16px;
			color: red;
		}
		.avatar-container {
			height: 100px;
			display: inline-block;
			position: absolute;
			right: 35px;
			.avatar-wrapper {
				cursor: pointer;
				position: relative;
				margin-top: 30px;
				.user-avatar {
					width: 40px;
					border-radius: 10px;
				}
				.el-icon-caret-bottom {
					position: absolute;
					right: -20px;
					top: 25px;
					font-size: 12px;
				}
			}
			.icon{
				font-size:16px;
				color:#808080;
			}
		}
	}

</style>
