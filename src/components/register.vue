<template>
	<div class="pt-perspective">
		<my-nav title="注册">
			<router-link :to="{path:'/login'}" class="nav-right" slot="right">登录</router-link>
		</my-nav>
		<div class="reg-main">
			<ul>
				<li>
					<span>手机号码</span>
					<input palceholder="手机号码"/>
				</li>
				<li>
					<span>验证码</span>
					<input class="validate" maxlength="6"/>
					<el-button type="primary" :disabled="true">获取验证码</el-button>
				</li>
				<li>
					<span>密码</span>
					<input palceholder="6-16位字母、数字和符号" />
				</li>
			</ul>

			<el-button @click.native="open" type="primary">注册</el-button>
		</div>
	</div>
</template>
<script>
	import blackNav from './blackNav.vue';
	export default {
		components:{
			'my-nav':blackNav,
		},
		methods: {
      		open() {
      			this.$message({
		          showClose: true,
		          message: '恭喜你，这是一条成功消息',
		          top:"80%"
		        });
      		}
    	}

	}
</script>

<style lang="sass" scoped>
	.nav-right{	
		position:absolute;
		right:5%;
		color: #0aa6de;
		font-size:.3rem;
	}
	.pt-perspective{
		width:100%;
		
		.reg-main{
			margin-top:.4rem;				
			ul {
				padding:0px 5%;
				background: #FFF;
				margin-bottom:.4rem;
				li{		
					position:relative;
					height:.8rem;
					line-height:.8rem;
					margin-bottom:.2rem;
					border-bottom:1px solid #efefef;
					span{
						width:30%;						
						font-size:.3rem;
						float:left;
					}
					.el-button{
						padding:0px;
						margin:0px;
						position:absolute;
						width:32%;
						top:.1rem;
						right:0px;
						height:.6rem;
					}
					input{
						width:70%;
						height:.8rem;
						line-height:.8rem;
						float:right;
						font-size:.3rem;
						border:none;
						background-color:transparent;
					}
				}
			}
			.el-button{				
				margin:0px 5%;
				width:90%;
				height:.8rem;
				font-size:.3rem;
			}
		}

	}

</style>