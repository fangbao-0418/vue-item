<template>
    <div class="page_container">
        <load  :loading="loading" ></load>

        <div v-if="!loading" >
            <mt-loadmore :bottom-method="loadBottom"  ref="loadmore">
                
             
                <my-paging :items="items"></my-paging>
              
                
                <div v-show="noData" slot="bottom" class="mint-loadmore-bottom">
                    没有了
                </div>
            </mt-loadmore>
        </div>
        <div v-if="issearchpage">
        <no-data v-if="emptyresource && page == 1"></no-data>
        </div>
        <div class="clear"></div>
    </div>

</template>
<script>
  
    import load from './loading.vue';

    import { Loadmore } from 'mint-ui';
    import { Indicator } from 'mint-ui';
    
    import noData from './noData';
  
    import Vue from 'vue';
    export default {
        props:{  
            currentview:Object,
            getparams:Object,
            issearchpage:{
                default:false
            }
        },
        data(){
            return {
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
        },
        updated(){   
 
        },
        created(){
            this.loadData();
        },
        mounted(){ 

            console.log(this.getparams)

            Vue.component('my-paging',this.currentview);
           
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
<style scoped>
    .page_container{
        background: #FFF;
    }
</style>