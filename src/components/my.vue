
<!--conten1-->
<template>
    <!-- content1-->
    <div class="white_box">
        <div class="content1">
            <div class="content1-left">
                <div class="content1-left-t content-title">
                    <h2><a>坚持十个小习惯变身健康瘦美人</a></h2>
                </div>
                <div class="content1-left-b content-info">
                    <ul>
                        <li><span class="Drugs">药品</span></li>
                        <li><span class="click">1365点击</span></li>
                        <li><span class="time">24小时前</span></li>
                    </ul>
                </div>
            </div>
            <div class="content1-right">
                <a><img src="/imgs/shouye_03.gif"/></a>
            </div>
            <div class="clear"></div>
        </div>
        <!-- content1-->
        <!-- content2-->
        <div class="content2">
            <div class="content-Title content-title">
                <h2><a>OEM贴牌加工松针油软胶囊</a></h2>
            </div>
            <div class="content2-img">
                <a href="#"><img class="c2-img" src="/imgs/shouye_09.gif"/></a>
                <a href="#"><img  class="c2-img" src="/imgs/shouye_11.gif"/></a>
                <a href="#"><img src="/imgs/shouye_09.gif"/></a>
            </div>
            <div class="content-info">
                <ul>
                    <li><span class="Drugs">药品</span></li>
                    <li><span class="click">1365点击</span></li>
                    <li><span class="time">24小时前</span></li>
                </ul>
            </div>
        </div>
        <!--/content2-->
        <!-- content3-->
        <div class="content3">
            <div class="content-title content-Title">
                <h2><a>[OEM/ODM加工] 小儿退热贴贴牌加工</a></h2>
            </div>
            <div class="content3-img">
                <a href="#"><img src="/imgs/shouye_16.gif"/></a>
            </div>
            <div class="content-info">
                <ul>
                    <li><span class="Drugs">药品</span></li>
                    <li><span class="click">1365点击</span></li>
                    <li><span class="time">24小时前</span></li>
                </ul>
            </div>
        </div>
        <div class="content1">
            <div class="content1-left">
                <div class="content1-left-t content-title">
                    <h2><a>坚持十个小习惯变身健康瘦美人</a></h2>
                </div>
                <div class="content1-left-b content-info">
                    <ul>
                        <li><span class="Drugs">药品</span></li>
                        <li><span class="click">1365点击</span></li>
                        <li><span class="time">24小时前</span></li>
                    </ul>
                </div>
            </div>
            <div class="content1-right">
                <a><img src="/imgs/shouye_03.gif"/></a>
            </div>
            <div class="clear"></div>
        </div>
        <!-- content1-->
        <!-- content2-->
        <div class="content2">
            <div class="content-Title content-title">
                <h2><a>OEM贴牌加工松针油软胶囊</a></h2>
            </div>
            <div class="content2-img">
                <a href="#"><img class="c2-img" src="/imgs/shouye_09.gif"/></a>
                <a href="#"><img  class="c2-img" src="/imgs/shouye_11.gif"/></a>
                <a href="#"><img src="/imgs/shouye_09.gif"/></a>
            </div>
            <div class="content-info">
                <ul>
                    <li><span class="Drugs">药品</span></li>
                    <li><span class="click">1365点击</span></li>
                    <li><span class="time">24小时前</span></li>
                </ul>
            </div>
        </div>
        <!--/content2-->
        <!-- content3-->
        <div class="content3">
            <div class="content-title content-Title">
                <h2><a>[OEM/ODM加工] 小儿退热贴贴牌加工</a></h2>
            </div>
            <div class="content3-img">
                <a href="#"><img src="/imgs/shouye_16.gif"/></a>
            </div>
            <div class="content-info">
                <ul>
                    <li><span class="Drugs">药品</span></li>
                    <li><span class="click">1365点击</span></li>
                    <li><span class="time">24小时前</span></li>
                </ul>
            </div>
        </div>
        <!-- content3-->
        <div style="height:.4rem"></div>
        <div class="clear"></div>
    </div>
</template>


<script>

    //http://www.ey99.com/api/mobile/ad.php

    export default {
        data () {
            return {
                items:[]
            }
        },
        ready(){
            this.loadData();
        },
        methods:{

            loadData:function(){
                var _this = this;
                this.$http.jsonp('http://www.ey99.com/api/mobile/ad.php', []).then(function(response){
                    //console.log(response);
                    _this.items = response.body;
                    // 响应成功回调
                }, function(response){
                    // 响应成功回调
                });
            }
        }
    }
</script>


<style scoped>
    .clear{
        clear: both;
    }
    .white_box{
        padding-top:.2rem;
        width:6.4rem;
        background-color:#FFFFFF;
    }
    .content1{
        width:5.8rem;
        margin: 0 auto;
        padding:.2rem 0;
        border-bottom:1px solid #e7e7e7;
    }

    .content1-left{
        width: 4rem;

        float: left;
    }

    .content-title h2{
        font-size: .3rem;
    }


    .content-info ul{
        margin-top:.2rem;
        width:3.6rem ;
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

    .content2{
        width:5.8rem ;
        padding:.2rem 0px;
        margin: 0 auto;
        border-bottom:1px solid #e7e7e7;
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
    /*content3*/
    .content3{
        width:5.8rem ;
        padding:.2rem 0px;
        margin: 0 auto;
        border-bottom:1px solid #e7e7e7;
    }
    .content3-img a img{
        width:5.79rem;
        height:2.84rem;
    }
</style>
