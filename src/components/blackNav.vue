<template>
<div :class="['warp-header',theme]">

  	<div v-show="goback" @click="back" class="goback" ></div>
	
	{{title}}
	<slot name="right"></slot>
</div>		
</template>
<script>
	export default {
		props:{
			title:{
				type:String,
				required: true
			},
			goback:{
				type:Boolean,
				default:true
			},
			theme:{
				type:String,
				default:"black"
			},
			path:{
				type:Object
			}
		},
		data(){
			return {}
		},
		methods:{
			back(){
				if(this.path){
					this.$router.push(this.path);
				}else{
					this.$router.go(-1)
				}
			}
		}
	}
</script>
<style lang="sass" scoped>
.warp-header{
	position:relative;
	height:.8rem;
	width:100%;
	line-height:.8rem;
	font-size:.4rem;	
	text-align: center;	
	.goback{
		display: inline-block;
	    position: absolute;
	    width: .2rem;
	    height: .2rem;
	    content: "";
	  
	    -webkit-transform: rotate(-135deg);
	    -moz-transform: rotate(-135deg);
	    -ms-transform: rotate(-135deg);
	    -o-transform: rotate(-135deg);
	    transform: rotate(-135deg);
	    bottom: .3rem;
	    left: 5%;
	    margin-left: -4px;
		i{

		}
	}	
	
}
.black{
		background:#272733;
		color: #fff;
		.goback{
			border-top: #fff 1px solid;
	    	border-right: #fff 1px solid;
		}
}
.white{
		background:#FFF;
		color: #000;
		.goback{
			border-top: #333 1px solid;
	    	border-right: #333 1px solid;
		}
}
</style>