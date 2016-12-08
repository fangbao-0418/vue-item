<template>
	<div v-show="show" class="radio-box" v-on:click="close">
		<ul v-on:click.stop="">
			<li v-for="item in option" @click="select(item)">
				<el-radio class="radio" v-model="radio" :label="item">
				 {{getName(item)}}
				</el-radio>  
			</li>

		</ul>
	</div>
</template>
<script>
	import { Radio } from 'element-ui';
	import bus from '../../bus.js';
	export default {
		props:['option','show','value'],
		data(){
			return{		
			  radio: parseInt(this.value),				
			}
		},

		updated(){
			if(this.show){
				$(document).on("touchmove",function(e) {
		     		e.preventDefault(); 
		 		},false)	
			}
		},
		components:{
			'el-radio':Radio
		},
		mounted(){	
				 		 	
		},		
		methods:{
			getName(item){
				if(item == 1){
					return "男士";
				}
				if(item == 2){
					return "女士";
				}
			},
			select(item){
				this.radio = item;				
				this.close();
			},
			close(){	
				$(document).off('touchmove');
				bus.$emit('close',this.radio);
			}
		}
	}
</script>
 
<style lang="sass" scoped>

	.radio-box{
		position:fixed;
		display: flex;	
		top:0;
		width:100%;		
		height:100%;
		
		z-index:999999;
		background: rgba(0,0,0,0.6);
		flex-direction: column;
		justify-content:center;
		align-items:center;
		ul{
			background: #fff;

			width:80%;
			li{
				margin:.6rem .4rem;
			}
		}
	}
</style>