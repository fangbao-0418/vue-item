

<template>
    <div>
        <my-header ></my-header>

        <component :is="currentView" keep-alive>
            <!-- 组件在 vm.currentview 变化时改变 -->
        </component>
    </div>
</template>

<script>
    import myHeader from './header.vue';
    import indexMain from './indexMain.vue';
    import drug from './drug.vue';
    import recommend from './recommend.vue';
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
                this.currentView = type;
            }
        },
        components: {
            'my-header':myHeader,
            'index-main':indexMain,
            'recommend':recommend,
            'drug':drug,
        }
    }
</script>
<style scoped>

</style>
