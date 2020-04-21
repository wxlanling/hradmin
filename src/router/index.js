import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/login/index'
// import index from '@/view/index/index'
import layout from '@/layout/index'
import home from '@/view/home/index'
import medicalexaminationcenter from '@/view/mechanism/medicalexaminationcenter/index'
import channel from '@/view/mechanism/channel/index'
import brand from '@/view/mechanism/brand/index'
import Label from '@/view/mechanism/Label/index'
import Other from '@/view/mechanism/Other/index'
import service from '@/view/mechanism/service/index'
import region from '@/view/mechanism/region/index'
import holiday from '@/view/mechanism/holiday/index'
import classify from '@/view/product/classify/index'
import setmealList from '@/view/product/setmealList/index'
import productLabel from '@/view/product/productLabel/index'
import characteristic from '@/view/product/characteristic/index'
import Intendedfor from '@/view/product/Intendedfor/index'
import notice from '@/view/product/notice/index'
import purchaseGi from '@/view/product/purchaseGi/index'
import newproject from '@/view/project/newproject/index'
import projectclassify from '@/view/project/projectclassify/index'
import projectindex from '@/view/project/projectindex/index'
import orderlist from '@/view/Order/orderlist/index'
import orderclassify from '@/view/Order/orderclassify/index'
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
      meta:{
        title:'登陆'
      }
    },
	{
	  path: '/',
    name: 'layout',
    redirect:'/home',
    component: layout,
    children:[
      {
        path: '/home',
        name: 'home',
        component: home,
        meta:{
          title:'管理员首页'
        }
      },
    ]
	},{
	  path: '/medicalexaminationcenter',
    name: 'layout',
    redirect:'/medicalexaminationcenter/index',
    component: layout,
    children:[
      {
        path: '/medicalexaminationcenter/index',
        name: 'medicalexaminationcenter',
        component: medicalexaminationcenter,
        meta:{
          title:'体检中心'
        }
      },
    ]
	},{
	  path: '/channel',
    name: 'layout',
    redirect:'/channel/index',
    component: layout,
    children:[
      {
        path: '/channel/index',
        name: 'channel',
        component: channel,
        meta:{
          title:'体检'
        }
      },
    ]
  },,{
	  path: '/brand',
    name: 'layout',
    redirect:'/brand/index',
    component: layout,
    children:[
      {
        path: '/brand/index',
        name: 'brand',
        component: brand,
        meta:{
          title:'品牌'
        }
      },
    ]
  },
  {
	  path: '/Label',
    name: 'layout',
    redirect:'/Label/index',
    component: layout,
    children:[
      {
        path: '/Label/index',
        name: 'Label',
        component: Label,
        meta:{
          title:'标签'
        }
      },
    ]
  },
  {
	  path: '/service',
    name: 'layout',
    redirect:'/service/index',
    component: layout,
    children:[
      {
        path: '/service/index',
        name: 'service',
        component: service,
        meta:{
          title:'服务'
        }
      },
    ]
	},   {
	  path: '/Other',
    name: 'layout',
    redirect:'/Other/index',
    component: layout,
    children:[
      {
        path: '/Other/index',
        name: 'Other',
        component: Other,
        meta:{
          title:'其他'
        }
      },
    ]
	}, {
	  path: '/region',
    name: 'layout',
    redirect:'/region/index',
    component: layout,
    children:[
      {
        path: '/region/index',
        name: 'region',
        component: region,
        meta:{
          title:'地区'
        }
      },
    ]
	},  {
	  path: '/holiday',
    name: 'layout',
    redirect:'/holiday/index',
    component: layout,
    children:[
      {
        path: '/holiday/index',
        name: 'holiday',
        component: holiday,
        meta:{
          title:'节假日'
        }
      },
    ]
	}, {
	  path: '/classify',
    name: 'layout',
    redirect:'/classify/index',
    component: layout,
    children:[
      {
        path: '/classify/index',
        name: 'classify',
        component: classify
      },
    ]
	}, {
	  path: '/setmealList',
    name: 'layout',
    redirect:'/setmealList/index',
    component: layout,
    children:[
      {
        path: '/setmealList/index',
        name: 'setmealList',
        component: setmealList
      },
    ]
	},{
	  path: '/productLabel',
    name: 'layout',
    redirect:'/productLabel/index',
    component: layout,
    children:[
      {
        path: '/productLabel/index',
        name: 'productLabel',
        component: productLabel
      },
    ]
	},{
	  path: '/characteristic',
    name: 'layout',
    redirect:'/characteristic/index',
    component: layout,
    children:[
      {
        path: '/characteristic/index',
        name: 'characteristic',
        component: characteristic
      },
    ]
	},{
	  path: '/Intendedfor',
    name: 'layout',
    redirect:'/Intendedfor/index',
    component: layout,
    children:[
      {
        path: '/Intendedfor/index',
        name: 'Intendedfor',
        component: Intendedfor
      },
    ]
	},{
	  path: '/notice',
    name: 'layout',
    redirect:'/notice/index',
    component: layout,
    children:[
      {
        path: '/notice/index',
        name: 'notice',
        component: notice
      },
    ]
	},{
	  path: '/purchaseGi',
    name: 'layout',
    redirect:'/purchaseGi/index',
    component: layout,
    children:[
      {
        path: '/purchaseGi/index',
        name: 'purchaseGi',
        component: purchaseGi
      },
    ]
	},{
	  path: '/newproject',
    name: 'layout',
    redirect:'/newproject/index',
    component: layout,
    children:[
      {
        path: '/newproject/index',
        name: 'newproject',
        component: newproject
      },
    ]
	},{
	  path: '/projectclassify',
    name: 'layout',
    redirect:'/projectclassify/index',
    component: layout,
    children:[
      {
        path: '/projectclassify/index',
        name: 'projectclassify',
        component: projectclassify
      },
    ]
	},{
	  path: '/projectindex',
    name: 'layout',
    redirect:'/projectindex/index',
    component: layout,
    children:[
      {
        path: '/projectindex/index',
        name: 'projectindex',
        component: projectindex
      },
    ]
	},{
	  path: '/orderlist',
    name: 'layout',
    redirect:'/orderlist/index',
    component: layout,
    children:[
      {
        path: '/orderlist/index',
        name: 'orderlist',
        component: orderlist
      },
    ]
	},{
	  path: '/orderclassify',
    name: 'layout',
    redirect:'/orderclassify/index',
    component: layout,
    children:[
      {
        path: '/orderclassify/index',
        name: 'orderclassify',
        component: orderclassify
      },
    ]
	}
  ]
})
