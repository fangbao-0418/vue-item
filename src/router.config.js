
import Common from './components/common.vue';

//import Home from './components/home.vue';
const Home = resolve => require(['./components/home.vue'],resolve);

//import Video from './components/video.vue';
const Video = resolve => require(['./components/video.vue'],resolve);

//import investment from './components/investment.vue';
const investment = resolve => require(['./components/investment.vue'],resolve);
//import investmentShow from './components/investmentShow.vue';
const investmentShow = resolve => require(['./components/investmentShow.vue'],resolve);
//import newsDetail from './components/newsDetail.vue';
const newsDetail = resolve => require(['./components/newsDetail.vue'],resolve);
//import search from './components/search.vue';
const search = resolve => require(['./components/search.vue'],resolve);

//import login from './components/login.vue';
const login = resolve => require(['./components/login.vue'],resolve);

//import register from './components/register.vue';
const register = resolve => require(['./components/register.vue'],resolve);



//import My from './components/my.vue';
const My  = resolve => require(['./components/my.vue'],resolve);


//import mySetting from './components/my/mySetting';
const mySetting = resolve => require(['./components/my/mySetting.vue'],resolve);

//import infoEdit from './components/my/infoEdit';
const infoEdit = resolve => require(['./components/my/infoEdit.vue'],resolve);

//import collect from './components/my/collect';//收藏
const collect = resolve => require(['./components/my/collect.vue'],resolve);

//import integral from './components/my/integral';//积分成长值
const integral = resolve => require(['./components/my/integral.vue'],resolve);



//import nopage from './components/nopage';
const nopage = resolve => require(['./components/nopage.vue'],resolve);
 
import auth from './auth.js';
function requireAuth (to, from, next) {  	
	auth.getUserInfo().then((data)=>{
  		 next()
	},()=>{
 		next({
		      path: '/login'		      
    	})
	});
 
}
function requireLogin (to, from, next) {  	
	auth.getUserInfo().then((data)=>{
  		next({
		      path: '/my'		      
    	})
	},()=>{
 		next()
	});
 
}
 

// 定义路由规则
// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend
// 创建的组件构造函数，也可以是一个组件选项对象。
// 稍后我们会讲解嵌套路由

export default {
	//mode: 'history',
	base: __dirname,
	routes: [
		{	path:"/",component:Common,
			children: [
				{  name:"home", path: 'home', component: Home },
			
			],
		},

		{ path: '/',  redirect: '/home'},
		{ path: '/video', component: Video },

		{ name: 'my', path: '/my', component: My, beforeEnter: requireAuth},
		{ name : 'infoedit',path : '/my/infoedit', component : infoEdit },
		{ name: 'mySetting', path: '/my/mySetting', component: mySetting, beforeEnter: requireAuth},
		{ name: 'collect', path: '/my/collect', component: collect, beforeEnter: requireAuth},
		{ name: 'integral', path: '/my/integral', component: integral, beforeEnter: requireAuth},
		
		{ path : '/login' , component: login, beforeEnter: requireLogin},
		{ path : '/register' , component: register},
		{ path : '/search' , component : search},
		{ path: '/investment', component: investment},
		{ name : 'investmentShow', path: '/investment/show', component: investmentShow },
		{ name : 'newsDetail', path: '/news/show', component: newsDetail },
		{ name : '404', path: '/404', component: nopage},
		{ path: '*', redirect: 'home' }

	]
}