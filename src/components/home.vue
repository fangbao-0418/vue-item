

<template>
    <div class="content">
    <my-header :option="option"></my-header>

        <investment v-if="currentView == 'investment'" :catid="catid"></investment>   
        <recommend v-if="currentView == 'recommend'" :catid="catid"></recommend>   

    </div>
</template>

<script>
    import myHeader from './header.vue';
    import indexMain from './indexMain.vue';
    import investment from './investment.vue';

    import recommend from './recommend.vue';
    import health from './health.vue';

    import bus from '../bus.js';

    export default {
        data () {
            return {
                option:[
                    {
                        title:'推荐',
                        sign:'recommend',
                        id:null
                    },
                    {
                        title:'药品',
                        sign:'investment',
                        id:4
                    },
                    {
                        title:'保健食品',
                        sign:'investment',
                        id:5
                    },
                    {
                        title:'营养食品',
                        sign:'investment',
                        id:6
                    },
                    {
                        title:'原料药',
                        sign:'investment',
                        id:7
                    },
                    {
                        title:'中间体',
                        sign:'investment',
                        id:8
                    },
                    {
                        title:'药用辅料',
                        sign:'investment',
                        id:9
                    },
                    {
                        title:'动植物提取物',
                        sign:'investment',
                        id:10
                    }
                ]
            }
        },
        computed:{
            catid(){
                var catid = this.$route.params.id ? this.$route.params.id : null;
                return catid;
            },
            currentView(){
                var type = this.$route.params.type ? this.$route.params.type : 'recommend';
                return type;
            }
        },
        update(){
            console.log(this.catid);
        },
        mounted(){
            console.log(this.$route.params);
            var _this = this;
            bus.$on('navselected',function(params){
                console.log(params);
                _this.catid = params.catid;
                _this.currentView = params.currentView;

            })
        },
        //["recommend","drug","zyc","bjsp","ylqx","mrhf","jsyp","zysb","yly"];
        components: {
            'my-header':myHeader,
          
            'recommend':recommend,
            
            'investment':investment,
            'health':health,
        }
    }
</script>
<style scoped>
    .content{
        height:100%;
    }
</style>
