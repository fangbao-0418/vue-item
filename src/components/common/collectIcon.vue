<template>
<div class="collect">
    <i v-if="!collected" @click="collect" class="iconfont">&#xe68a;</i>
    <i v-else @click="collect" class="iconfont collected"> &#xe600;</i>               
</div>
</template>
<script>
  	
  	import auth from '../../auth.js';
	import serverapi from '../../serverapi.js';
	import { Toast } from 'mint-ui';

	export default {
		props:['moduleid','id'],
		data(){
			return {
				 collected:false      
			}
		},
		created(){
            this.iscollected();          
        },
		methods:{
			iscollected(){
                var _this = this;
                 auth.getUserInfo().then((info)=>{
                    if(info){        
                        var url = serverapi.collect;
                        var option = {params:{moduleid:this.moduleid,itemid:this.id,userid:info.userid,type:"get"},emulateJSON:true};
                        _this.$http.post(url,[],option).then((res)=>{   
                        	console.log(res);                        
                             _this.collected = res.body.res;
                        })
                    }else{
                        _this.collected = false;
                    }
                },()=>{ _this.collected = false; });    
            },    
			collect(){                             
                var _this = this;
                auth.getUserInfo().then((info)=>{                  
                    if(info){
                        var url = serverapi.collect;
                        var option = {params:{type:"set",moduleid:this.moduleid,itemid:this.id,userid:info.userid},emulateJSON:true};
                        _this.$http.post(url,[],option).then((res)=>{
                            if(res.body.res){
                                _this.collected = true;   
                            }
                        });
                    }else{
                        Toast({
                          message: '请先登录',
                          position: 'bottom',
                          duration: 5000
                        });
                    }
                },()=>{
                     Toast({
                          message: '请先登录',
                          position: 'bottom',
                          duration: 5000
                        });
                });
            },
		}
	}
</script>
<style lang="sass" scoped>
 .collect{
 	display: inline-block;
 	i{
      
        font-size:.4rem;
     
        color:#999;
    }
    .collected{
        color:#FFB040;
    }
 }   
</style>