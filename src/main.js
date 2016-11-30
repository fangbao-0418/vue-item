/**
 * Created by Administrator on 2016/11/30.
 */
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'

Vue.use(MintUI)

new Vue({
        el: '#app',
        render: h => h(App)
})
