<template>
    <div style="height:100%">

    	<!-- nav -->
        <app-nav :path="topath" :id="id" moduleid="22"></app-nav>

        <load></load>
        <!-- content -->
        <div  v-if="!loading">
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
                        <p v-if="item.cpqy">出品企业:&nbsp;{{item.cpqy}}</p>
                        <p v-if="item.sccj">生产企业:&nbsp;{{item.sccj}}</p>
                        <p v-if="item.company">招商企业:&nbsp;{{item.company}}</p>
                        <p>发布日期:&nbsp;{{item.adddate}}</p>
                        <p>更新日期:&nbsp;{{item.editdate}}</p>
                        <p>点击数:&nbsp;{{item.hits}}</p>
                    </div>
                    <div class="article_area">
                        <h3><b>商品基本信息:</b></h3>
                        <p v-if="item.spmc">商品名称:&nbsp;{{item.spmc}}</p>
                        <p v-if="item.sptym">通用名称:&nbsp;{{item.sptym}}</p>
                        <p v-if="item.pzwh">批准文号:&nbsp;{{item.pzwh}}</p>
                        <p>分&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类:&nbsp;{{item.catname}}</p>
                        <p v-if="item.zybhpz">中药保护品种:&nbsp;{{item.zybhpz}}</p>  
                        <p v-if="item.mztx">民族特性:&nbsp;{{item.mztx}}</p>  
                        <p v-if="item.syjb">适用疾病:&nbsp;{{item.syjb}}</p>                     
                        <p v-if="item.syks">适用科室:&nbsp;{{item.syks}}</p>
                         <p v-if="item.cfysx">处方药属性:&nbsp;{{item.cfysx}}</p>
                        <p v-if="item.spjx">商品剂型:&nbsp;{{item.spjx}}</p>
                        <p v-if="item.spgg">商品规格:&nbsp;{{item.spgg}}</p>
                        <p v-if="item.jysx">基药属性:&nbsp;{{item.jysx}}</p>
                        <p v-if="item.ybsx">医保属性:&nbsp;{{item.ybsx}}</p>
                        <p v-if="item.zbqy">中标区域:&nbsp;{{item.zbqy}}</p>
                        <p v-if="item.shqd">适合渠道:&nbsp;{{item.shqd}}</p>
                        <p v-if="item.cpmd">产品卖点:&nbsp;{{item.cpmd}}</p>
                    </div>
                    <div class="article_area">
                        <h3><b>商品详情信息:</b></h3>
                        <p v-if="item.zyyl">主要原料:&nbsp;{{item.zyyl}}</p>
                        <p v-if="item.cs">功效成分:&nbsp;{{item.cs}}</p>
                        <p v-if="item.xz">性状:&nbsp;{{item.xz}}</p>
                        <p v-if="item.bjgn">保健功能:&nbsp;{{item.bjgn}}</p>
                        <p v-if="item.yfyl">用法用量:&nbsp;{{item.yfyl}}</p>
                        <p v-if="item.syrq">适宜人群:&nbsp;{{item.syrq}}</p>
                        <p v-if="item.syz">适应症:&nbsp;{{item.syz}}</p>
                        <p v-if="item.syff">食用方法:&nbsp;{{item.syff}}</p>
                        <p v-if="item.zysx">注意事项:&nbsp;{{item.zysx}}</p>
                        <p v-if="item.bz">包&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;装:&nbsp;{{item.bz}}</p>
                        <p v-if="item.zxbz">执行标准:&nbsp;{{item.zxbz}}</p>
                        <p v-if="item.scxkz">生产许可证:&nbsp;{{item.scxkz}}</p>
                        <p v-if="item.wsxkzh">卫生许可证号:&nbsp;{{item.wsxkzh}}</p>
                        <p v-if="item.cpry">产品荣誉:&nbsp;{{item.cpry}}</p>
                        <p v-if="item.bcsm">补充说明:&nbsp;{{item.bcsm}}</p>
                      
                    </div>
                    <div class="article_area">
                        <h3><b>招商要求:</b></h3>
                        <p>招商区域:&nbsp;{{item.zsqy ? item.zsqy : "全国"}}</p>
                        <p>招商要求:&nbsp;{{item.zsyq ? item.zsyq : "暂无要求"}}</p>
                        <p>可提供支持:&nbsp;{{item.ktgzc ? item.ktgzc : "暂无支持"}}</p>
                    </div>
                    <div class="article_area no_border">
                        <h3><b>联系信息:</b></h3>
                        <p v-if="item.company">企业名称:&nbsp;{{item.company}}</p>
                        <p v-if="item.address">联系地址:&nbsp;{{item.address}}</p>
                        <p v-if="item.postcode">邮政编码:&nbsp;{{item.postcode}}</p>
                        <p v-if="item.truename">联&nbsp;&nbsp;系&nbsp;&nbsp;人:&nbsp;{{item.truename}}</p>
                        <p v-if="item.telephone">电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话:&nbsp;{{item.telephone}}</p>
                        <p v-if="item.mobile">手&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;机:&nbsp;{{item.mobile}}</p>
                        <p v-if="item.fax">传&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;真:&nbsp;{{item.fax}}</p>
                        <p v-if="item.email">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱:&nbsp;{{item.email}}</p>
                        <p v-if="item.qq">Q&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Q:&nbsp;{{item.qq}}</p>
                    </div>

                </div>

            </div><!--content-box-->

            <!-- footer -->
            <detail-footer moduleid="22" :itemid="item.itemid"></detail-footer>

        </div>
       
    </div>


</template>

<script>
    import nav from './navigate.vue';
    import load from './loading.vue';
    import { Indicator } from 'mint-ui';
  
    import detailFooter from './detailFooter.vue';
    require('vue-swipe/dist/vue-swipe.css');

    // in ES6 modules
    import { Swipe, SwipeItem } from 'vue-swipe';

    export default {
        computed:{
            type(){   
                var type;            
                switch(this.topid){
                    case "4":
                        type = "drug";
                        break;
                    case "5":
                        type = "bjsp";
                        break;
                    case "6":
                        type = "yysp";
                        break;
                    case "7":
                        type = "yly";
                        break;
                    case "8":
                        type = "zjt";
                        break;
                    case "9":
                        type = "yyfl";
                        break;
                    case "10":
                        type = "dzwtqw";
                        break;
                    case "11":
                        type = "zyc";
                        break;
                    case "12":
                        type = "zyyp";
                        break;
                    case "13":
                        type = "ylqx";
                        break;
                    case "14":
                        type = "hc";
                        break;
                    case "15":
                        type = "zysb";
                        break;
                    case "16":
                        type = "bzcl";
                        break;
                    case "17":
                        type = "yyyp";
                        break;
                    case "18":
                        type = "jsyp";
                        break;        
                    case "19":
                        type = "xdyp";
                        break;
                    case "20":
                        type = "mrhf";
                        break;                
                    default :
                        type = "";
                        break;           
                }
                return type
                //return this.$router.params.type ? this.$router.params.type;
            },
            topath(){
                return {name:"home",query:{id:this.topid,type:this.type}}    
            }
        },
        data(){
            return {
                id:null,
                item:null,
                loading:true,
                topid:null,                
            }
        },
        created(){          
            this.id = parseInt(this.$route.query.id);
            this.loadData();
        },
        mounted(){
        
        },
        methods:{
            loadData(){
                var _this = this;
                var id = this.id;
                var option = {"params":{"type":"detail","id":id}}
                var url = "http://www.ey99.com/api/mobile/investment.php";
                this.$http.get(url,option).then(
                        (res)=>{                      
                        if(res.data.title){
                            Indicator.close();
                        res.data.hits = parseInt( res.data.hits ) + 1;
                        _this.item = res.data;
                        _this.loading = false;
                        _this.topid = res.data.topid;
                        _this.hits(res.data.itemid);
                    }
                },
                        (err)=>{

                }
                );
            },
            hits(itemid){
                var url = "http://www.ey99.com/api/mobile/hits.php";
                var option = { params : {moduleid:22 ,itemid} };
                this.$http.get(url,option)
            }
        },
        components:{
            'app-nav':nav,
            'load':load,
            'swipe':Swipe,
            'swipe-item':SwipeItem,           
            'detail-footer':detailFooter
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









</style>