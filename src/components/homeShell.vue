<template>
    <div class="white_box">
        <load  v-if="loading"  ></load>

        <div id="pullDown"  v-else>
            <pull-to-refresh
                    @on-pullup='onPullup'
                    @on-pulldown='onPulldown' class="page">

                <slot name="content"></slot>

                <div v-show="noPage" class="noPage">
                    没有了
                </div>
            </pull-to-refresh>
        </div>

        <div class="clear"></div>
    </div>

</template>
<script>
  
    import load from './loading.vue';


    //上拉下拉组件 pull-to-refresh 必须给该组件 定高度 class="page" 可改变className
    import PullToRefresh from './pull-to-refresh.vue'

    export default {
        props:{
            loading:{
                type:Boolean,
                required:true,
                default:true,
            }
        },
        data(){
            return {
                items:null,
                'noPage':false,
            }
        },
        components:{
          
            'load':load,
            'pull-to-refresh':PullToRefresh,

        },
        updated(){
            $(document).ready(function() {
                //获取数据后  固定page高度 即滑动区域 
                //$(".page").height(400);

                if($(".warp-header")[0]){
                    $(".page").height($("#app")[0].clientHeight - $(".warp-header")[0].clientHeight );

                }
                if($(".top")[0] && $(".nav")[0] && $(".footer")[0]) {
                    $(".page").height($("#app")[0].clientHeight - $(".top")[0].clientHeight - $(".nav")[0].clientHeight - $(".footer")[0].clientHeight);
                }
              
            });
        },
        mounted(){
            $(".white_box").height($("#app")[0].clientHeight - $(".top")[0].clientHeight - $(".nav")[0].clientHeight - $(".footer")[0].clientHeight);

            console.log(this);
        },
        methods:{

            onPullup(finshCallback) {
                this.$parent.loadData(finshCallback);

                //this.loadData(finshCallback);
            },

            onPulldown(finshCallback) {
                ///finshCallback 回归位置 页面扩充后 拉取高度 不执行的话 高度不拉伸
                this.$parent.loadData(finshCallback,true);

                //finshCallback  调整位置
//                this.noPage = false;
//                this.page = 0;
//                this.loadData(finshCallback);
            }
        }
    }
</script>