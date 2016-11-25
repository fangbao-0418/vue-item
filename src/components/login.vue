<template>
	<div class="pt-perspective">
		<my-nav title="登录">
			<router-link :to="{path:'/register'}" class="nav-right" slot="right">注册</router-link>
		</my-nav>
		

		<div class="login-main">
				<ul>
					<li>
	 <i class="iconfont">&#x3437;</i>
				 <el-input class="from-input"
	  placeholder="手机/当代账号"
	  v-model="user">
	  
					</li>
					<li>
	</el-input>		
				 <i class="iconfont">&#xe678;</i>
				 <el-input class="from-input"
	  placeholder="登录密码"
	  v-model="pwd">
					</li>
				<li>
					<el-button type="primary" @click="login">登录</el-button>
				</li>	
			</ul>	

 



		</div>

		 

	</div>
</template>
<script>
import blackNav from './blackNav.vue';
 
export default {
  data() {
    return {
      user: 'ffcffc',
      pwd:'fb41827',
    }
  },
  components:{
  	'my-nav':blackNav,
  },
  methods:{
  	login(){
  		this.checklogin();
  	},
  	checklogin(){

  		var url = "http://www.ey99.com/api/mobile/auth.php";

  		var option = {params:{moduleid:2,job:"checklogin",user:this.user,password:this.pwd}}

  		this.$http.get(url,option).then((res)=>{
  			
  		})
  	}
  }
}
</script>
<style lang="sass" >
.nav-right{	
		position:absolute;
		right:5%;
		color: #0aa6de;
		font-size:.3rem;
	}
.login-main{
	margin:0px 5%;
	ul{
		li{
			.el-input{
				
				.el-input__inner{
					height:.8rem;
					padding-left:.6rem;
					font-size:.3rem;
				}						
			}
			position:relative;
			padding-bottom:.4rem;
			i{
				position:absolute;
				top:.14rem;
				left:.1rem;
				z-index: 1;
				font-size:.5rem;
				color:#333;
			}
			.el-button{
				width:100%;
				height:.8rem;
				font-size:.3rem;
			}
		}
	}
}
</style>
<style lang="sass" scoped>
	.pt-perspective{
		width:100%;
		
		.login-main{
			margin-top:.4rem;
		}
	}
</style>
