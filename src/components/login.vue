<template>
	<div class="pt-perspective">
		<div class="warp-header">
		  	<div class="goback" >            	
        	</div>
			登录
		</div>
	</div>
</template>
<script>
</script>
<style lang="sass" scoped>
	.pt-perspective{
		width:100%;
		.warp-header{
			position:relative;
			height:.8rem;
			width:100%;
			line-height:.8rem;
			background:#272733;
			font-size:.4rem;
			color: #fff;
			text-align: center;
			.goback{
				display: inline-block;
			    position: absolute;
			    width: .2rem;
			    height: .2rem;
			    content: "";
			    border-top: #fff 1px solid;
			    border-right: #fff 1px solid;
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
	}
</style>
