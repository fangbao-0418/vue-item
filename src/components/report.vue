<template>
	<div v-show="isshow" class="report-bg" @click="cancel">
		<div class="report-main" @click.stop="">
			<div class="report-head">
				<span class="cancel">取消</span>
				<span class="send">发表</span>
			</div>
			<div class="content">
				<textarea autofocus="autofocus"></textarea>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props:['isshow'],
		data(){
			return {
				
			}
		},
		mounted(){
			 
			
		},
		methods:{
			cancel(){
				this.$parent.isshow = false;
			},
		}
	}
</script>
<style lang="sass" scoped>
	.report-bg{
		width: 6.4rem;
	    z-index: 999999;
	    background: rgba(0, 0, 0, 0.6);
	    position: fixed;
	    bottom: 0;
	    height: 100%;
	}
	.report-main{
		position:fixed;
		bottom:0;
		width:100%;
		.report-head{
			line-height: .6rem;
			width:90%;
			height:.6rem;
			background-color: #F7F7F7;
			padding:0 5%;
			span{
				font-size:.26rem;
			}
			.cancel{
				color:#000;
			}
			.send{
				color:#6699FF;
				float:right;
			}
		}
		.content{
			background-color:#FFF;
			width:90%;
			padding:0 5%;
			textarea{
				width:100%;
				padding:2% 0;
				border:none;
				min-height: 2rem;
			}
		}
	}
</style>