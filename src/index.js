import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';
import routerConfig from './router.config';            //路由配置文件

// for Vue 2.0
import VueLazyload from 'vue-lazyload';


require("./js/function.js");
require("./js/reset.js");					  //全局加载重置js
require('./css/reset.css');					  //全局加载重置css
require('./css/common.css');					  //全局css样式

Vue.use(VueRouter)
Vue.use(VueResource);   //加载Resource

Vue.use(VueLazyload, {
    error:require("./assets/err.jpg"),
    loading: require("./assets/loading.gif"),
    try: 3 // default 1
})

const router = new VueRouter(routerConfig)

// 4. Create and mount root instance.
// Make sure to inject the router.
// Route components will be rendered inside <router-view>.
new Vue({
    router

}).$mount('#app')
