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
			title: '产品',
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
					icon: 'form'
				}
      }
    ]
  },
	{
		path: '/produtos',
		component: Layout,
		meta: {
			title: '产品',
			icon: 'example'
		},
		children: [
			{
				path: 'product',
				name: '产品管理',
				component: () =>
					import ('@/views/Produtos/product'),
				meta: {
					title: '产品管理',
					icon: 'form'
				}
      },	{
				path: 'advertisement',
				name: '广告管理',
				component: () =>
					import ('@/views/Produtos/advertisement'),
				meta: {
					title: '广告管理',
					icon: 'form'
				}
      },	{
				path: 'attribute',
				name: '属性库',
				component: () =>
					import ('@/views/Produtos/attribute'),
				meta: {
					title: '属性库',
					icon: 'form'
				}
      },
    ]
  }, {
		path: '/estoque',
		component: Layout,
		meta: {
			title: '产品',
			icon: 'example'
		},
		children: [
			{
				path: 'index',
				name: '库存',
				component: () =>
					import ('@/views/Estoque/index'),
				meta: {
					title: '库存',
					icon: 'form'
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
					icon: 'form'
				}
      }
    ]
  }, {
		path: '/clientes',
		component: Layout,
		meta: {
			title: '客户',
			icon: 'example'
		},
		children: [
			{
				path: 'index',
				name: '客户',
				component: () =>
					import ('@/views/Clientes/index'),
				meta: {
					title: '客户',
					icon: 'form'
				}
      }
    ]
  }, {
		path: '/clientes',
		component: Layout,
		meta: {
			title: '应用',
			icon: 'example'
		},
		children: [
			{
				path: 'index',
				name: '应用',
				component: () =>
					import ('@/views/Pedido/index'),
				meta: {
					title: '应用',
					icon: 'form'
				}
      }
    ]
  }, {
		path: '/expedic',
		component: Layout,
		meta: {
			title: '调度',
			icon: 'example'
		},
		children: [
			{
				path: 'index',
				name: '调度',
				component: () =>
					import ('@/views/Expedic/index'),
				meta: {
					title: '调度',
					icon: 'form'
				}
      }
    ]
  }, {
		path: '/SAC',
		component: Layout,
		meta: {
			title: 'SAC',
			icon: 'example'
		},
		children: [
			{
				path: 'index',
				name: 'SAC',
				component: () =>
					import ('@/views/SAC/index'),
				meta: {
					title: 'SAC',
					icon: 'form'
				}
      }
    ]
  }, {
		path: '/Logistica',
		component: Layout,
		meta: {
			title: '调度',
			icon: 'example'
		},
		children: [
			{
				path: 'index',
				name: '物流和退货',
				component: () =>
					import ('@/views/Logistica/index'),
				meta: {
					title: '物流和退货',
					icon: 'form'
				}
      }
    ]
  }, {
		path: '/relatorios',
		component: Layout,
		meta: {
			title: '报表',
			icon: 'example'
		},
		children: [
			{
				path: 'history',
				name: '历史报表',
				component: () =>
					import ('@/views/Relatorios/history'),
				meta: {
					title: '历史报表',
					icon: 'form'
				}
      },
	  {
				path: 'analyse',
				name: '分析报表',
				component: () =>
					import ('@/views/Relatorios/analyse'),
				meta: {
					title: '分析报表',
					icon: 'form'
				}
      },
	   {
				path: 'profit',
				name: '利润报表',
				component: () =>
					import ('@/views/Relatorios/profit'),
				meta: {
					title: '利润报表',
					icon: 'form'
				}
      },
	   {
				path: 'send',
				name: '发货报表',
				component: () =>
					import ('@/views/Relatorios/send'),
				meta: {
					title: '发货报表',
					icon: 'form'
				}
      },
	   {
				path: 'return',
				name: '退货报表',
				component: () =>
					import ('@/views/Relatorios/return'),
				meta: {
					title: '退货报表',
					icon: 'form'
				}
      }
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
		path: '/config',
		component: Layout,
		children: [
			{
				path: 'index',
				name: 'Form',
				component: () =>
					import ('@/views/Config/index'),
				meta: {
					title: '设置',
					icon: 'form'
				}
      }
    ]
  },

//  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
	// mode: 'history', //后端支持可开
	scrollBehavior: () => ({
		y: 0
	}),
	routes: constantRouterMap
})
