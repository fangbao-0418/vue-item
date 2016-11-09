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
// 定义路由规则
// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend
// 创建的组件构造函数，也可以是一个组件选项对象。
// 稍后我们会讲解嵌套路由

export default function (router){
	router.map({
	    '/':{
			component:Common,
			subRoutes: {
				'/home':{
					name:"home",
					component: Home,
				},
				'/video': {
					component: Video,
				},
				'/my': {
					component: My
				}
			}
		}

	})
	router.redirect({
		'/':'/home'
	})
}