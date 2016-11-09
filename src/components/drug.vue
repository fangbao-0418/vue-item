<template>
<div class="white_box">

        <div v-if="loading" class="loading"  v-on:click="loadData">
            加载中...
        </div>
        <div id="pullDown"  v-else>


            <pull-to-refresh
                    @on-pullup='onPullup'
                    @on-pulldown='onPulldown' class="page">
                <index-main :s="s" :items="items"></index-main>
            </pull-to-refresh>

        </div>
    </div>


    <div class="clear"></div>
</div>
</template>

<script>


    import indexMain from './indexMain.vue';

    import PullToRefresh from './pull-to-refresh.vue'

    export default {
        components: {
            "pull-to-refresh":PullToRefresh,
            "index-main":indexMain
        },

        data () {
            return {
                items: [],
                loading:true,
            }
        },
        ready(){

            this.loadData();

            $(document).ready(function(){

                //
                $(".white_box").height($("#app")[0].clientHeight - $(".top")[0].clientHeight - $(".nav")[0].clientHeight - $(".footer")[0].clientHeight);
                console.log($(".page").height());
            });

        },
        methods: {
            loadData:function(){

                var _this = this;
                this.$http.jsonp('http://www.ey99.com/api/mobile/ad.php', []).then(function(response){


                    _this.items = response.body;



                    setTimeout(
                            function(){

                                $(document).ready(function() {
                                    $(".page").height($("#app")[0].clientHeight - $(".top")[0].clientHeight - $(".nav")[0].clientHeight - $(".footer")[0].clientHeight);
                                });
                                _this.loading = false;

                            },2000
                    )
                    // 响应成功回调
                }, function(response){
                    // 响应成功回调
                });
            },
            onPullup(finshCallback) {
                console.log('onPullup');
                setTimeout(()=>{
                    console.log('finshCallback');
                //this.items=this.items.concat([6,6,6,6,6,6,6,6,6,6,6])
                finshCallback();//finish refreshing state
            },300000);
            },

            onPulldown(finshCallback) {
                console.log('onPulldown');
                setTimeout(()=>{
                    console.log('finshCallback');
                //this.items=[9,9,9,9,9,9,9,9,9,9,9,9,9,9]
                finshCallback();//finish refreshing state
            },300000);
            }
        },
    }
</script>

<style>
    .clear{
        clear: both;
    }
    .white_box{
        width:6.4rem;
        background-color:#FFFFFF;

        overflow: hidden;
    }
    .ad_content{
        width:5.8rem;
        margin: 0 auto;
        padding:.10rem 0;
        position: relative;
        margin-bottom: .1rem;
    }
    .ad_code_one{
        width:100%;
        height: 1.2rem;
        padding:.16rem 0px;
        border-bottom:1px solid #e7e7e7;
    }
    .ad_code_two{
        width:100%;
        padding-bottom:.7rem;
        border-bottom:1px solid #e7e7e7;
    }
    .ad_code_three{
        width:100%;
        padding-bottom:.6rem;
        border-bottom:1px solid #e7e7e7;
    }
    .content1-left{
        width: 4rem;

        float: left;
    }

    .content-title h2{
        padding-right:.2rem;
        font-size: .3rem;
    }

    .content-info{
        position: absolute;
        bottom:.3rem;
    }
    .content-info ul{
        width:100% ;
        height:.3rem ;
        line-height: .3rem;
    }

    .content-info li {
        float: left;
    }



    .content1-right{
        width: 1.8rem;height: 1.2rem;
        float:right;
    }
    .content1-right a img{
        width:1.8rem;
        height:1.2rem;
    }
    .click,.time{
        color:#8a8a8a ;
        font-size:.22rem ;

        margin-right:.26rem;
        display: inline-block;
    }



    .content-Title{
        padding-bottom: .16rem;
    }

    .content2-img{
        width: 5.8rem;height: 1.23rem;
    }



    .content2-img img{
        display: block!important;
        float: left!important;
    }
    .content2-img a img{
        width:1.89rem;
        height:1.23rem;
    }
    .c2-img{
        margin-right: .06rem;
    }

    .content3-img a img{
        width:5.79rem;
        height:2.84rem;
    }

    .loading{
       text-align: center;
        font-size:.3rem;
        margin-top:50%;
        color:#ccc;
    }

    .page{

        overflow: hidden;
        position: relative;
        /* Prevent native touch events on Windows */
        -ms-touch-action: none;
        /* Prevent the callout on tap-hold and text selection */
        -webkit-touch-callout: none;
        user-select: none;
        text-size-adjust: none;
    }

    #app {
        height: 100%;
        max-width: 400px;
        margin: 0 auto
    }
    ul{
        list-style: none;
        padding: 0px;
        margin: 0px
    }


    /*scrollbar start*/
    .iScrollVerticalScrollbar {
        position: absolute;
        z-index: 9999;
        width: 2px;
        bottom: 2px;
        top: 2px;
        right: 2px;
        overflow: hidden;
    }

    .iScrollVerticalScrollbar.iScrollBothScrollbars {
        bottom: 18px;
    }

    .iScrollIndicator {
        position: absolute;
        background: #999;
        border-radius: 6px;
        opacity: .8;
    }

    .iScrollVerticalScrollbar .iScrollIndicator {
        width: 100%;
        background: #999;
    }
    /*scrollbar end*/
</style>
