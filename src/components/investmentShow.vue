<template>
    <div style="height:100%">

    	<!-- nav -->
        <app-nav></app-nav>

        <load v-if="loading"></load>
        <!-- content -->
        <div v-else>
            <div class="content-box">
                <!-- content-one -->
                <div class="content">
                    <div class="article_title">
                        <h1>{{item.title}}</h1>
                    </div>
                    <div class="article_info">
                        <i>{{item.spmc}}</i>
                        <span>{{item.editdate}}</span>
                    </div>
                    <div class="product_banner">

                        <swipe class="my-swipe" :speed="0" :auto="0" :show-indicators="false" >

                            <swipe-item v-for="pic in item.sptp" class="slide1"> <img :src="pic"/></swipe-item>

                        </swipe>
                    </div>

                    <div class="article_area">
                        <p>生产企业:&nbsp;{{item.scqy}}</p>
                        <p>招商企业:&nbsp;{{item.company}}</p>
                        <p>发布日期:&nbsp;{{item.adddate}}</p>
                        <p>更新日期:&nbsp;{{item.editdate}}</p>
                        <p>点击数:&nbsp;{{item.hits}}</p>
                    </div>
                    <div class="article_area">
                        <h3><b>商品基本信息:</b></h3>
                        <p>商品名称:&nbsp;{{item.spmc}}</p>
                        <p>通用名称:&nbsp;{{item.sptym}}</p>
                        <p>批准文号:&nbsp;{{item.pzwh}}</p>
                        <p>分&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类:&nbsp;{{item.catname}}</p>
                        <p>商品剂型:&nbsp;{{item.spjx}}</p>
                        <p>商品规格:&nbsp;{{item.spgg}}</p>
                        <p>适合渠道:&nbsp;{{item.shqd}}</p>
                        <p>产品卖点:&nbsp;{{item.cpmd}}</p>
                    </div>
                    <div class="article_area">
                        <h3><b>商品详情信息:</b></h3>
                        <p>主要原料:&nbsp;{{item.zyyl}}</p>
                        <p>功效成分:&nbsp;{{item.cs}}</p>
                        <p>保健功能:&nbsp;{{item.bjgn}}</p>
                        <p>适宜人群:&nbsp;{{item.syrq}}</p>
                        <p>食用方法:&nbsp;{{item.syff}}</p>
                        <p>注意事项:&nbsp;{{item.zysx}}</p>
                        <p>包&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;装:&nbsp;{{item.bz}}</p>
                        <p>执行标准:&nbsp;{{item.zxbz}}</p>
                        <p>生产许可证:&nbsp;{{item.scxkz}}</p>

                        <p>卫生许可证号:&nbsp;{{item.wsxkzh}}</p>
                        <p>产品荣誉:&nbsp;{{item.cpry}}</p>
                    </div>
                    <div class="article_area no_border">
                        <h3><b>联系信息信息:</b></h3>
                        <p>企业名称:&nbsp;{{item.company}}</p>
                        <p>联系地址:&nbsp;{{item.address}}</p>
                        <p>邮政编码:&nbsp;{{item.postcode}}</p>
                        <p>联&nbsp;&nbsp;系&nbsp;&nbsp;人:&nbsp;俞女士</p>
                        <p>电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话:&nbsp;{{item.telephone}}</p>
                        <p>手&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;机:&nbsp;{{item.mobile}}</p>
                        <p>传&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;真:&nbsp;{{item.fax}}</p>
                        <p>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱:&nbsp;{{item.email}}</p>
                        <p>Q&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Q:&nbsp;{{item.qq}}</p>
                    </div>

                </div>

            </div><!--content-box-->

            <!-- footer -->
            <div class="footer">
                <div class="footer-box">
                    <div class="footer-t">
                        <div class="foot-t-box">
                            <i class="iconfont favour">&#xe602;</i>
                            <span>16</span>
                            <i class="report"><b>举报</b></i>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>


</template>

<script>
    import nav from './navigate.vue';
    import load from './loading.vue';
    require('vue-swipe/dist/vue-swipe.css');

    // in ES6 modules
    import { Swipe, SwipeItem } from 'vue-swipe';

    export default {
        data(){
            return {
                id:null,
                item:null,
                loading:true,
            }
        },
        mounted(){
            this.id = this.$route.query.id;
            this.loadData();
        },
        methods:{
            loadData(){
                var _this = this;
                var id = this.id;
                var option = {"params":{"type":"detail","id":id}}
                var url = "http://www.ey99.com/api/mobile/investment.php";
                this.$http.jsonp(url,option).then(
                        (res)=>{
                        if(res.data.title){
                        _this.item = res.data;
                        _this.loading = false;
                    }
                },
                        (err)=>{

                }
                );
            }
        },
        components:{
            'app-nav':nav,
            'load':load,
            'swipe':Swipe,
            'swipe-item':SwipeItem
        }
    }
</script>

<style lang="sass" scoped>
.content{
    padding-top:.8rem;
    width:5.8rem;
}
.content-box{
	width:5.8rem;
    padding:0 .3rem;
    background: #fff;
}
.article_title h1{
    padding-top:.46rem;
    font-size:.35rem;
    padding-bottom:.14rem;
    color:#000;
}
.article_info{
    font-size:.2rem;
    padding:.04rem 0;
    color:#6d6d6d;
}
.product_banner {
    width: 5.8rem;
    height: 2.9rem;
    img{
        width: 5.8rem;
        margin-top:.28rem;
        height: 2.9rem;
    }

}

.article_area{
    border-bottom:solid 1px #d7d7d7;
    padding:.2rem 0 .1rem 0;
    p{
        font-size: .25rem;
        padding:.1rem 0;
    }
    h3{
        font-size: .27rem;
        padding-bottom: .1rem;
    }
}
.no_border{
    border:none;
}







/*footer*/
.footer{
	width: 6.4rem;
  background: #fff;
}


.footer-t{
  width: 5.8rem;
	padding-bottom: .2rem;
	border-bottom:1px solid #e9e9e9;
  margin: 0 auto;
}

.foot-t-box{
  width: 5.8rem;
	padding: .12rem 0;
}


.foot-t-box i{
  display: inline-block;
}
.foot-t-box span{
    font-size:.2rem;
    display: inline-block;
    padding: .1rem 0;
}
.favour{
  float: left;
  font-size: .36rem;
  line-height: .35rem;
  padding-right: .1rem;
}

.report{
  float: right;
  font-size: .25rem;
  line-height: .38rem;
}


</style>