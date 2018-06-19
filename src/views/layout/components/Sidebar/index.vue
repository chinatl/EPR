<template>
 <div>
      <scroll-bar>
       	<div class="menu333" @click="toggleSideBar">
       		<svg-icon icon-class='menu3'  :style='{"transform": "rotate("+(sidebar.opened ? 0 : 90) +"deg)","transition": "transform .3s"}'></svg-icon>
<!--       		<hamburger class="hamburger-container"  ></hamburger>-->
       	</div>
        <el-menu
          mode="vertical"
          :show-timeout="200"
          :default-active="$route.path"
          :collapse="isCollapse"
          background-color="#42485B"
          text-color="#fff"
          active-text-color="#409EFF"
        >
          <sidebar-item :routes="routes"></sidebar-item>
        </el-menu>
      </scroll-bar>
  </div>
</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	import SidebarItem from './SidebarItem'
	import ScrollBar from '@/components/ScrollBar'
	import Hamburger from '@/components/Hamburger'

	export default {
		components: {
			SidebarItem,
			ScrollBar,
			Hamburger
		},
		computed: {
			...mapGetters([
				'sidebar'
			]),
			routes() {
				return this.$router.options.routes
			},
			isCollapse() {
				return !this.sidebar.opened
			}
		},
		methods: {
			showSlider() {

			},
			toggleSideBar() {
				this.$store.dispatch('ToggleSideBar')
			},
		}
	}

</script>

<style>
	.menu333 {
		background-color: #4A5064;
		color: #e4e4e4;
		padding: 12px 0;
		text-align: center;
		display: flex;
		justify-content: center;
		padding-left: 7px;
		cursor: pointer;
	}

</style>
