import Vue from 'vue';
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';
import routerConfig from './router.config';            //路由配置文件

// for Vue 2.0
import VueLazyload from 'vue-lazyload';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';


require("./js/function.js");
require("./js/global.js");
require("./js/reset.js");					  //全局加载重置js
require('./css/reset.css');					  //全局加载重置css
require('./css/common.css');

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

//Vue.use('./server.js');
Vue.use(VueRouter);
Vue.use(VueResource);   //加载Resource
Vue.use(ElementUI);

Vue.use(MintUI);

import Vuex from 'Vuex';
Vue.use(Vuex);

Vue.use(VueLazyload, {
    error:require("./assets/err.jpg"),
    loading: require("./assets/loading.gif"),
    try: 3 // default 1
})

const router = new VueRouter(routerConfig)

// 4. Create and mount root instance.
// Make sure to inject the router.
// Route components will be rendered inside <router-view>.

var app = new Vue({
    router
}).$mount('#app')
