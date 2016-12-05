<template>
    <div style="height:100%">

    	<!-- nav -->
        <app-nav moduleid=21 :id="id" :path="path"></app-nav>

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
                        <i>{{item.copyfrom ?item.copyfrom : "当代医药市场网"}}</i>
                        <span>{{item.editdate}}</span>
                    </div>
                     

                    <div class="article_area no_border">
                     	<div class="article_body" v-html="item.content">
                     	</div>
                    </div>

                </div>

            </div><!--content-box-->

             
            <!-- footer -->
            <detail-footer moduleid="21" :itemid="item.itemid"></detail-footer>


        </div>
    </div>


</template>

<script>
    import nav from './navigate.vue';
    import load from './loading.vue';
    require('vue-swipe/dist/vue-swipe.css');
    import detailFooter from './detailFooter.vue';
    // in ES6 modules
    import { Swipe, SwipeItem } from 'vue-swipe';
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
                var url = "http://www.ey99.com/api/mobile/article.php";
                this.$http.get(url,option).then(
                        (res)=>{
                        if(res.data.title){                           
                            _this.item = res.data;
                            _this.loading = false;
                            _this.hits(_this.item.itemid);
                        }
                        Indicator.close();
                },
                        (err)=>{

                }
                );
            },
            hits(itemid){
                var url = "http://www.ey99.com/api/mobile/hits.php";
                var option = { params : {moduleid:21 ,itemid} };
                this.$http.get(url,option)
            }
        },
        components:{
            'app-nav':nav,
            'load':load,
            'swipe':Swipe,
            'swipe-item':SwipeItem,
            'detail-footer':detailFooter,
        }
    }
</script>

<style lang="sass" >
.article_body {
	line-height:.48rem;
	font-size:.32rem;
	*{
		font-size:.32rem;
	}
	img{
		width:5.8rem;
	}
}

</style>

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
    font-size:.4rem;
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