

<template>
    <div class="content">
    <my-header ></my-header>
    <keep-alive>
        <component :is="currentView" :catid="catid" keep-alive>
            <!-- 组件在 vm.currentview 变化时改变 -->
        </component>
    </keep-alive>
    </div>
</template>

<script>
    import myHeader from './header.vue';
    import indexMain from './indexMain.vue';
    import investment from './investment.vue';

    import recommend from './recommend.vue';
    import health from './health.vue';


    export default {
        data () {
            return {
                msg: "首页",
            }
        },
        computed:{
            catid(){
                var catid = this.$route.query.id ? this.$route.query.id : 4;
                return catid;
            },
            currentView(){
                var type = this.$route.query.type ? this.$route.query.type : 'recommend';
                return type;
            }
        },
        mounted(){

        },
        //["recommend","drug","zyc","bjsp","ylqx","mrhf","jsyp","zysb","yly"];
        components: {
            'my-header':myHeader,
            'index-main':indexMain,
            'recommend':recommend,
            'drug':investment,
            'zyc':investment,
            'bjsp':investment,
            'ylqx':investment,
            'mrhf':investment,
            'jsyp':investment,
            'zysb':investment,
            'yly':investment,
            'health':health,
        }
    }
</script>
<style scoped>
    .content{
        height:100%;
    }
</style>
