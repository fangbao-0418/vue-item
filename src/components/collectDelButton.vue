<style scoped>
	.del-button{
		display: inline-block;
	}
</style>
<template>
	<div class="del-button">
		<mt-button type="danger" @click="delCollect" v-if="store.state.collectDelIsOpen">删除</mt-button>
	</div>
</template>
<script>
	import { Button } from 'mint-ui';
    import store from '../store';
    export default {
    	props:['type','index','items'],
    	data(){
    		return {
    			store:store
    		}
    	},
    	components:{
            'mt-button':Button
        },
    	methods:{
    		delCollect(){
                var _this = this;
                var url = "http://www.ey99.com/api/mobile/mycollect.php";
                var option = {emulateJSON:true};
                var body = {linkurl:this.items[this.index].linkurl,type:this.type,action:"del",token:localStorage.token};
                this.$http.post(url,body,option).then((res)=>{
                    if(res.body.query_res){
                        _this.items.splice(_this.index,1);
                    }
                });
            }
    	}

    }
</script>
