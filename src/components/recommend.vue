<template>

    <div class="white_box">


         <load ></load>

        <div id="pullDown"  v-if="!loading">
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
    import { Indicator } from 'mint-ui';
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
                var url = "http://www.ey99.com/api/mobile/recommend.php";
                //url += "page=" + this.page;
                var option = {params:{page:this.page}};

                this.$http.get(url,option).then(function(response){
                    
                    Indicator.close();

                    _this.pageTotal = Math.ceil( response.body.count / 10 );


                    _this.loading = false;


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
                        
                        

                            $(document).ready(function() {
                                $(".page").height($("#app")[0].clientHeight - $(".top")[0].clientHeight - $(".nav")[0].clientHeight - $(".footer")[0].clientHeight);
                            });

                       
                             
                       


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
    #pullDown{
        background: #FFFFFF;
    }
    .white_box{
        width:6.4rem;
        background-color:transparent;
        flex: 1;
        overflow: hidden;
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
