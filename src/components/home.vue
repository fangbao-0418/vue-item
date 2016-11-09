

<template>
    <my-header ></my-header>

    <component :is="currentView" keep-alive>
        <!-- 组件在 vm.currentview 变化时改变 -->
    </component>
</template>

<script>
    import myHeader from './header.vue';
    import indexMain from '../components/indexMain.vue';
    import drug from '../components/drug.vue';
    export default {
        data () {
            return {
                msg: "首页",
                currentView:'drug',
            }
        },
        events: {
            'child-type': function (type) {
                // 事件回调内的 `this` 自动绑定到注册它的实例上
                //this.type = type;
                this.currentView = 'drug';
            }
        },
        components: {
            'my-header':myHeader,
            'index-main':indexMain,
            'drug':drug,
        }
    }
</script>
<style scoped>

</style>
