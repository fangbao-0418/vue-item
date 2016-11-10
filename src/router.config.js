/**
 * Created by Darren on 16/09/11.
 *
 * Des: 路由模块
 *
 */
import Common from './components/common.vue';

import Home from './components/home.vue';
import Video from './components/video.vue';
import My from './components/my.vue';
import Drug from './components/drug.vue';
import investmentShow from './components/investmentShow.vue';
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
				{ path: 'home', component: Home },
				{ path: 'video', component: Video },
				{ path: 'my', component: My },

				{ name : 'investmentShow', path: 'investment/show', component: investmentShow },
				{ path: '*', redirect: 'home' }
			],

		},


		{ path: '*', redirect: 'home' }

	]
}