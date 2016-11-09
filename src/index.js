/**
 * Created by Darren on 16/09/11.
 *
 * Notice: 入口文件
 * work	 : 启动前的加载，注入，实例化
 *
 */

import Vue from 'vue';                                //vue
import VueRouter from 'vue-router';                   //vue-router
import VueResource from 'vue-resource';               //vue-resource

import routerConfig from './router.config';            //路由配置文件

//var routerConfig = require('./ios.router.config');


require("./js/function.js");
require("./js/reset.js");					  //全局加载重置js
require('./css/reset.css');					  //全局加载重置css
require('./css/common.css');					  //全局css样式


Vue.use(VueRouter);     //加载vue-router
Vue.use(VueResource);   //加载Resource 

// 创建一个路由器实例
// 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置
const router = new VueRouter({
    //保存页面切换的位置滚动
    saveScrollPosition:true
});
routerConfig(router);

var App = Vue.extend({})
// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app')

window.router = router;






