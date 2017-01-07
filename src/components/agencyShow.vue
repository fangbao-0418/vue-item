<template>
    <div class="agency-box">

    	<!-- nav -->
        <app-nav :need-collect="false" moduleid=23 :id="id" ></app-nav>

        <load v-if="loading"></load>
        <!-- content -->
        <div v-else>
            <div class="content-box">
                <div class="content">
                    <div class="agency-title">
                       {{item.title}}
                    </div>
                    <div class=" line"></div>
                    <div class="agency-info">
                        <span>意向区域：</span>
                        {{item.yxqy}}
                    </div>
                     <div class="agency-info">
                        <span>销售渠道：</span>
                        {{item.xsqd}}
                    </div>
                    <div class="agency-info">
                        <span>代理性质：</span>
                        {{item.dlxz}}
                    </div>
                    <div class=" line"></div>
                    <div v-if="item.message" class="agency-info">
                        <span>代理留言：</span>
                        {{item.message}}
                    </div>

                     <div v-if="item.truename" class="agency-info">
                        <span>联系人：</span>
                        {{item.truename}}
                    </div>
                     <div v-if="item.telephone" class="agency-info">
                        <span>电话：</span>
                        {{item.telephone}}
                    </div>
                    <div v-if="item.mobile" class="agency-info">
                        <span>手机：</span>
                        {{item.mobile}}
                    </div>
                    <div v-if="item.qq" class="agency-info">
                        <span>qq：</span>
                        {{item.qq}}
                    </div>
                    <div v-if="item.email" class="agency-info">
                        <span>电子邮箱：</span>
                        {{item.email}}
                    </div>
                    <div class=" line"></div>
                    <div class="hits">
                        <span>浏览数：</span>
                        {{item.hits}}
                    </div>

                    <div class="tel">
                       <!--  <a :href="'tel:' + item.mobile"><i class="iconfont">&#xe608;</i></a> -->
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
    import nav from './navigate.vue';
    import load from './loading.vue';
    import serverapi from '../serverapi.js';   
    import { Indicator } from 'mint-ui';
    export default {
        data(){
            return {
                id:null,
                item:null,
                loading:true,
                path:{name:"home",query:{type:"health"}}
            }
        },
        created(){
            this.id = this.$route.query.id;
            this.loadData();
        },
        methods:{
            loadData(){
                var _this = this;
                var id = this.id;
                var option = {"params":{"type":"detail","id":id}}
                var url =  serverapi.agency;
                this.$http.get(url,option).then(
                        (res)=>{
                            console.log(res);
                        if(res.data.title){                           
                            res.data.hits = parseInt( res.data.hits ) + 1;

                            _this.item = res.data;
                            _this.loading = false;
                            
                            _this.hits(_this.item.itemid);
                            this.setSEO();
                        }
                        Indicator.close();
                },
                        (err)=>{

                }
                );
            },
            hits(itemid){
                var url =   serverapi.hits;
                var option = { params : {moduleid:23 ,itemid} };
                this.$http.get(url,option)
            },
            setSEO(){
                document.title = this.item.title;  
               
                if( $("meta[name='keywords']")[0] == undefined && $("meta[name='description']")[0] == undefined ){
                    
                    var keywords = document.createElement("meta");
                    keywords.setAttribute("name","keywords");
                    keywords.setAttribute("content",this.item.keyword);

                    var description = document.createElement("meta");
                    description.setAttribute("name","description");
                    description.setAttribute("content",this.item.introduce.substr(0,200));

                    var head = document.getElementsByTagName("title");

                    $(head[0]).after(description);
                    $(head[0]).after(keywords);

                }else{
                    $("meta[name='keywords']")[0].content = this.item.keyword;
                    $("meta[name='description']")[0].content = this.item.introduce.substr(0,200)
                }

            }
        },
        components:{
            'app-nav':nav,
            'load':load,
        }
    }
</script>
 

<style lang="sass" scoped>

.agency-box{
    background:#fff;
    .content{
        padding-top:.8rem;
        width:5.8rem;
        margin:0 .3rem;
        position:relative;
        .agency-title{
            margin-top:.3rem;
            font-size:.36rem;
            line-height: .4rem;
        }
        .agency-info{
            padding-top:.2rem;
            font-size:.28rem;
            line-height: .36rem;
            span{
                 
            }
        }
        .line{ 
            height:.2rem;
            border-bottom: 1px solid #fafafa;
        }
        .hits{
            margin-top:.2rem;
            float:left;
            line-height: .3rem;
            height:.3rem;
            font-size:.24rem;
        }
        .tel{            
            position:fixed;
            bottom:1rem;
            right:.8rem;
            i{
                transition: all 4s ease;
                color:#48B04E;
                font-size:.8rem;
                -webkit-animation: bounce-up 1.4s linear infinite;
                -ms-animation: bounce-up 1.4s linear infinite;
                -moz-animation: bounce-up 1.4s linear infinite;
                -o-animation: bounce-up 1.4s linear infinite;
                animation: bounce-up 1.4s linear infinite;
            }

            @-webkit-keyframes bounce-up {
                25% {-webkit-transform: translateY(10px);}
                50%, 100% {-webkit-transform: translateY(0);}
                75% {-webkit-transform: translateY(-10px);}
            }
            @keyframes bounce-up {
                25% {-webkit-transform: translateY(10px);}
                50%, 100% {-webkit-transform: translateY(0);}
                75% {-webkit-transform: translateY(-10px);}
            }

            @-ms-keyframes bounce-up {
                25% {-webkit-transform: translateY(10px);}
                50%, 100% {-webkit-transform: translateY(0);}
                75% {-webkit-transform: translateY(-10px);}
            }
            @-o-keyframes bounce-up {
                25% {-webkit-transform: translateY(10px);}
                50%, 100% {-webkit-transform: translateY(0);}
                75% {-webkit-transform: translateY(-10px);}
            }
            @-moz-keyframes bounce-up {
                25% {-webkit-transform: translateY(10px);}
                50%, 100% {-webkit-transform: translateY(0);}
                75% {-webkit-transform: translateY(-10px);}
            }

        }
    }
    
}




.no_border{
    border:none;
}






</style>