<template>

    <div class="white_box">


         <load  v-if="loading"></load>

        <div id="pullDown"  v-else>
            <pull-to-refresh
                    @on-pullup='onPullup'
                    @on-pulldown='onPulldown' class="page">
                <index-main  :items="items"></index-main>
                <div v-show="noPage" class="noPage">
                    没有了
                </div>
            </pull-to-refresh>

        </div>


        <div class="clear"></div>
    </div>
</template>

<script>


    import indexMain from './indexMain.vue';
    import loading from './loading.vue';
    import PullToRefresh from './pull-to-refresh.vue'

    export default {
        components: {
            "pull-to-refresh":PullToRefresh,
            "index-main":indexMain,
            "load":loading,
        },

        data () {
            return {
                items: [],
                loading:true,
                page:0,
                pageTotal:0,
                noPage:false,
            }
        },
        mounted(){

            var _this = this;
          
           $(".white_box").height($("#app")[0].clientHeight - $(".top")[0].clientHeight - $(".nav")[0].clientHeight - $(".footer")[0].clientHeight);
              

            

            this.loadData(false);
        },
        methods: {
            loadData:function(finshCallback){
                this.page += 1;
                var _this = this;
                var url = "http://www.ey99.com/api/mobile/ad.php";
                //url += "page=" + this.page;
                var param = {"params":{"page":this.page,"a":"ad"}};

                this.$http.get(url, param).then(function(response){

                    _this.pageTotal = Math.ceil( response.body.count / 10 );




                    //如果超过总页数 返回没有了
                    if(_this.page > _this.pageTotal){

                        if(finshCallback){
                            finshCallback();
                            _this.noPage = true;
                        }
                        setTimeout(()=>{
                            _this.noPage = false;
                    },2000);

                        return;
                    }



                    if(finshCallback){
                        finshCallback();
                    }


                    if(_this.page === 1){
                        _this.items =  response.body;
                    }else{
                        for(var i=0; i< response.body.list.length; i++){

                            _this.items.list.push( response.body.list[i] );

                        }
                    }


                    if(response.body.count > 0){
                        setTimeout(
                                function(){

                                    $(document).ready(function() {
                                        $(".page").height($("#app")[0].clientHeight - $(".top")[0].clientHeight - $(".nav")[0].clientHeight - $(".footer")[0].clientHeight);
                                    });

                                   _this.loading = false;

                                },500
                        )


                    }


                }, function(response){
                    // 响应成功回调
                });
            },
            onPullup(finshCallback) {
                //console.log("pullup");
                this.noPage = false;
                this.loadData(finshCallback);
            },

            onPulldown(finshCallback) {
                //finshCallback  调整位置
                //console.log("pulldown");
                this.noPage = false;
                this.page = 0;
                this.loadData(finshCallback);
            }
        },
    }

  

 
  

  
</script>
<style scoped>
    .noPage{
        font-size: .2rem;
        text-align: center;
        height: .50rem;
        line-height: .50rem;
        color: #888;
    }
</style>
<style>
    .clear{
        clear: both;
    }
    #pullDown{
        background: #FFFFFF;
    }
    .white_box{
        width:6.4rem;
        background-color:transparent;
        flex: 1;
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
