<template>
 <div>
      <scroll-bar>
        <el-menu
          mode="vertical"
          :show-timeout="200"
          :default-active="$route.path"
          :collapse="isCollapse"
          background-color="#304156"
          text-color="#bfcbd9"
          active-text-color="#409EFF"
        >
           <div class='logo' v-show='!isCollapse'>
               <h3>HARIEXPRESS</h3>
               <h3>Solution All-in-One</h3>
           </div>
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

    export default {
        components: {
            SidebarItem,
            ScrollBar
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
        }
    }

</script>

<style>
    .logo {
        font-size: 14px;
        color: #fff;
        padding: 10px;
        white-space: nowrap
    }

</style>
