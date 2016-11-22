
import Common from './components/common.vue';

//import Home from './components/home.vue';
const Home = resolve => require(['./components/home.vue'],resolve);

import Video from './components/video.vue';
import My from './components/my.vue';
import investment from './components/investment.vue';
import investmentShow from './components/investmentShow.vue';
import healthDetail from './components/healthDetail.vue';
import login from './components/login.vue';


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
		{ path: '/my', component: My },
		{ path : '/login' , component: login},
		{ path: '/investment', component: investment},
		{ name : 'investmentShow', path: '/investment/show', component: investmentShow },
		{ name : 'healthDetail', path: '/health/show', component: healthDetail },
		{ path: '*', redirect: 'home' }

	]
}