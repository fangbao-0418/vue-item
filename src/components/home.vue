

<template>
    <div class="content">
        <my-header ></my-header>

        <component :is="currentView" :catid="catid" keep-alive>
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
                currentView:'recommend',
                catid:4
            }
        },
        mounted(){

        },
        //["recommend","drug","zyc","bjsp","ylqx","mrhf","jsyp","zysb","yly"];
        components: {
            'my-header':myHeader,
            'index-main':indexMain,
            'recommend':recommend,
            'drug':drug,
            'zyc':drug,
            'bjsp':drug,
            'ylqx':drug,
            'mrhf':drug,
            'jsyp':drug,
            'zysb':drug,
            'yly':drug
        }
    }
</script>
<style scoped>
    .content{
        height:100%;
    }
</style>
