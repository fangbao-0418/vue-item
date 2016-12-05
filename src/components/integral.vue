<style>
</style>
<template>
	<div class="integral-area" >
		<my-nav theme="white" title="我的成长值"></my-nav>
		<div class="integral-main">
			<ul>
				<li>
					<span>充值</span>
					<i>+1000.00</i>
				</li>
				<li>
					<span>投资</span>
					<em>-12311.00</em>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import blackNav from './blackNav';
	export default {
		data(){
			return {
				
			}
		},
		components:{
			'my-nav':blackNav
		}
	}
</script>

<style lang="sass" scoped>
	.integral-main{
		margin-top: .05rem;
		background: #fff;
		padding:0 0.2rem;
		li{
			padding:.15rem 0.2rem;
			font-size: .25rem;
		}
		li:nth-child(1){
			border-bottom:1px solid #e8e8e8;
		}
		i{
			float: right;
			color:red;
		}
		em{
			float: right;
			color: #4fcb2d;
		}
	}

</style>