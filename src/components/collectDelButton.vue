<style scoped>
	.del-button{
		display: inline-block;
	}
</style>
<template>
	<div class="del-button">
		<mt-button type="danger" v-on:click="delCollect"  v-if="store.state.collectDelIsOpen">删除</mt-button>
	</div>
</template>
<script>
	import { Button } from 'mint-ui';
    import store from '../store';
    import bus from '../bus.js';
    export default {
	   props:{
            type:Number,
            index:Number,
            items:Array,
        },
    	data(){
    		return {
    			store:store,
                data:null
    		}
    	},
        computed(){
            newitems:{
                if(this.data){
                    return this.data;
                }else{
                    return this.items;
                }
            }
        },
    	components:{
            'mt-button':Button
        },
       
    	methods:{
            refresh(){   
                bus.$emit('refresh');  
            },
    		delCollect(){
                 
                var url = "http://www.ey99.com/api/mobile/mycollect.php";
                var option = {emulateJSON:true};
                var body = {linkurl:this.items[this.index].linkurl,type:this.type,action:"del",token:localStorage.token};
                this.$http.post(url,body,option).then((res)=>{
                    if(res.body.query_res){
                        this.refresh();
                    }
                });
            }
    	}

    }
</script>
