<template>
    <div class="page-container">
        <load  :loading="loading" ></load>

        <div v-if="!loading" class="page-items">
            <!--  -->
            <mt-loadmore :bottom-method="loadBottom" bottom-pull-text="上拉加载" :bottom-all-loaded="allLoaded" ref="loadmore">
                

                <invest-item :collect="collect" v-if="type == 22" :items="items"></invest-item>

                <article-item :collect="collect" v-if="type == 21" :items="items"></article-item>
             
                
                <div v-if="noData" slot="bottom" class="mint-loadmore-bottom">
                    没有了
                </div>
            </mt-loadmore>
        </div>
      
        <no-data v-if="issearchpage && emptyresource && page == 1"></no-data>
       
        <div class="clear"></div>
    </div>

</template>
<script>
  
    import load from './loading.vue';

    import { Loadmore } from 'mint-ui';
    import { Indicator } from 'mint-ui';
    
    import noData from './noData';
    
    import searchArticleItem from './searchArticleItem';
    import searchInvestItem from './searchInvestItem';


    import Vue from 'vue';
    export default {
        props:{  
            currentview:Object,
            getparams:Object,
            collect:{
                type:Boolean,
                default:false,
            },
            issearchpage:{
                default:false
            },
            type:{
                default:0
            }
        },
        data(){
            return {
                allLoaded:false,
                loading:true,
                items:null,
                page:0,
                noData:false,
                emptyresource:false
            }
        },
        components:{
            'load':load,
            noData,
            "article-item":searchArticleItem,
            "invest-item":searchInvestItem
        },
        updated(){   
 
        },
        created(){
            this.loadData();
        },
        mounted(){ 
           
        },

        methods:{
            loadTop(id) {
                this.loadData(id,true);              
            },
            loadBottom(id) {

              
                    this.loadData(id); 
              
              
            
            },
            loadData(id,refresh=false){
                if(refresh){
                    this.page = 0;
                    if(id) this.$refs.loadmore.onTopLoaded(id);
                }
 

                var url = this.getparams.url;
                var option = this.getparams.option;
                var _this = this;       
                this.page += 1;
                option.params.page = this.page;
                this.$http.get(url,option).then(

                    (res)=>{
                        //console.log(res);
                        if(res.body.list.length){ 
                            if(_this.page == 1){
                                _this.items = res.body.list;
                              
                            }else{
                                for(var i=0;i<res.body.list.length;i++){
                                    _this.items.push(res.body.list[i]);
                                }                              
                            } 
                            
                            if(id) this.$refs.loadmore.onBottomLoaded(id);
                            _this.loading = false; 

                        }else{     
                            //if(id) this.$refs.loadmore.onBottomLoaded(id);              
                           _this.allLoaded = true;
                           _this.noData = true;
                            setTimeout(()=>{
                                _this.noData = false;
                                if(id) _this.$refs.loadmore.onBottomLoaded(id);
                            },1000)
                            _this.emptyresource = true;
                        }
                        
                        Indicator.close();
                        
                       
                },
                        (err)=>{

                }
                );
            }
            
        }
    }
</script>
<style lang="sass" scoped>
    .page-container{
        .page-items{
            background: #FFF;
        }
    }
</style>