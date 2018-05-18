import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
	{
		path: '/login',
		component: () =>
			import ('@/views/Login/index'),
		hidden: true
	},
	{
		path: '/404',
		component: () =>
			import ('@/views/404'),
		hidden: true
	},
	{
		path: '/',
		redirect: '/login',
		hidden: true
	},
	{
		path: '/dashboard',
		component: Layout,
		meta: {
			title: '主页',
			icon: 'example'
		},
		children: [
			{
				path: '',
				name: '主页',
				
				component: () =>
					import ('@/views/Dashboard/index'),
				meta: {
					title: '主页',
					icon: 'menu'
				}
            },
			{
		  path:'perfil',
		  hidden:true,
		  component:()=>
			  import ('@/views/layout/components/perfil'),
		  
	  },
	   {
		  path:'setting',
		  hidden:true,
		  component:()=>
			  import ('@/views/layout/components/setting'),
	  }

       ]
     },
	{
		path: '/produtos',
		component: Layout,
		meta: {
			title: '产品',
			icon: 'box'
		},
		children: [
			{
				path: 'product',
				name: '产品管理',
				component: () =>
					import ('@/views/Produtos/product'),
				meta: {
					title: '产品管理',
				}
      },	{
				path: 'advertisement',
				name: '广告管理',
				component: () =>
					import ('@/views/Produtos/advertisement'),
				meta: {
					title: '广告管理',
				}
      },	{
				path: 'attribute',
				name: '属性库',
				component: () =>
					import ('@/views/Produtos/attribute'),
				meta: {
					title: '属性库',
				}
      },
    ]
  }, {
		path: '/pedido',
		component: Layout,
		meta: {
			title: '产品',
			icon: 'example'
		},
		children: [
			{
				path: '',
				name: '订单管理',
				component: () =>
					import ('@/views/Pedido/index'),
				meta: {
					title: '订单管理',
					icon: 'menu3'
				}
      }
    ]
  },  {
		path: '/expedic',
		component: Layout,
		meta: {
			title: '打包',
			icon: 'wl'
		},
		children: [
			{
				path: 'empacotamento',
				name:'包装',
				component:()=>
				import('@/views/Expedic/empacotamento'),
				meta: {
					title: '包装',
				},		
      		},
			  {
				path: 'send',
				name:'发货',
				component:()=>
				import('@/views/Expedic/send'),
				meta: {
					title: '发货',
				},		
      		},
    	]
  }, {
		path: '/SAC',
		component: Layout,
		meta: {
			title: 'SAC',
			icon: 'erji'
		},
		children: [
			{
				path: 'question',
				name: '售前问题',
				component: () =>
					import ('@/views/SAC/question'),
				meta: {
					title: '售前问题',
				}
      },{
				path: 'massage',
				name: '售后问题',
				component: () =>
					import ('@/views/SAC/massage'),
				meta: {
					title: '售后问题',
				}
      }
    ]
  },{
		path: '/rastreamento',
		component: Layout,
		children: [
			{
				path: 'index',
				name: 'Form',
				component: () =>
					import ('@/views/rastreamento/index'),
				meta: {
					title: '物流跟踪',
					icon: 'rastreamento'
				}
      }
	]	
  }, {
		path: '/fornecedor',
		component: Layout,
		meta: {
			title: '供应商',
			icon: 'example'
		},
		children: [
			{
				path: 'index',
				name: '供应商',
				component: () =>
					import ('@/views/Fornecedor/index'),
				meta: {
					title: '供应商',
					icon: 'woshou'
				}
      }
    ]
  },{
		path: '/relatorios',
		component: Layout,
		meta: {
			title: '报表',
			icon: 'list'
		},
		children: [
			{
				path: 'history',
				name: '历史报表',
				component: () =>
					import ('@/views/Relatorios/history'),
				meta: {
					title: '历史报表',
				}
      },
	  {
				path: 'analyse',
				name: '分析报表',
				component: () =>
					import ('@/views/Relatorios/analyse'),
				meta: {
					title: '分析报表',
				}
      },
	   {
				path: 'profit',
				name: '利润报表',
				component: () =>
					import ('@/views/Relatorios/profit'),
				meta: {
					title: '利润报表',
				}
      },
	   {
				path: 'send',
				name: '发货报表',
				component: () =>
					import ('@/views/Relatorios/send'),
				meta: {
					title: '发货报表',
				}
      },
	   {
				path: 'return',
				name: '退货报表',
				component: () =>
					import ('@/views/Relatorios/return'),
				meta: {
					title: '退货报表',
				}
      },
	  
    ]
  },
//  {
//    path: '/example',
//    component: Layout,
//    redirect: '/example/table',
//    name: 'Example',
//    meta: { title: 'Example', icon: 'example' },
//    children: [
//      {
//        path: 'table',
//        name: 'Table',
//        component: () => import('@/views/table/index'),
//        meta: { title: 'Table', icon: 'table' }
//      },
//      {
//        path: 'tree',
//        name: 'Tree',
//        component: () => import('@/views/tree/index'),
//        meta: { title: 'Tree', icon: 'tree' }
//      }
//    ]
//  },
	
	{
		path: '/integral',
		component: Layout,
		children: [
			{
					
					path:'index',
					name:'账号',
					component:()=>
						import ('@/views/integral/index'),
					meta:{
						title:'账号',
						icon:'computer'
					},
			}

		]
    }
	
	]


//  { path: '*', redirect: '/404', hidden: true }


export default new Router({
	// mode: 'history', //后端支持可开
	scrollBehavior: () => ({
		y: 0
	}),
	routes: constantRouterMap
})
