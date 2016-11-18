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
    import { Swipe, SwipeItem } from 'vue-swipe';
    import load from './loading.vue';
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
            'swipe':Swipe,
            'swipe-item':SwipeItem,
            'load':load,
            'pull-to-refresh':PullToRefresh,

        },
        updated(){
            $(document).ready(function() {
                $(".page").height($("#app")[0].clientHeight - $(".top")[0].clientHeight - $(".nav")[0].clientHeight - $(".footer")[0].clientHeight);
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
                this.$parent.loadData(finshCallback,true);

                //finshCallback  调整位置
//                this.noPage = false;
//                this.page = 0;
//                this.loadData(finshCallback);
            }
        }
    }
</script>