<template>
	<div class="pt-perspective">
		<my-nav :goback="true" title="登录">
			<router-link :to="{path:'/register'}" class="nav-right" slot="right">注册</router-link>
		</my-nav>
		

		<div class="login-main">
				<ul>
					<li>
	 <i class="iconfont">&#x3437;</i>
				 <el-input class="from-input" placeholder="手机/当代账号" v-model="user"></el-input>
					</li>
					<li>
		
				 <i class="iconfont">&#xe678;</i>
				 <el-input class="from-input pwd" :type="passwdtype" placeholder="登录密码" v-model="pwd"></el-input>	
	  			<el-switch v-model="status" on-text="" off-text="" @change="passwdstatus"></el-switch>
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
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      user: '',
      pwd:'',
      passwdtype:'password',
      status:false
    }
  },
  components:{
  	'my-nav':blackNav,
  },
  methods:{
  	passwdstatus(){  		
  		this.passwdtype = this.passwdtype == "password" ? "text" : "password";  	
  	},
  	login(){
  		this.checklogin();
  	},
  	checklogin(){

  		var url = "http://www.ey99.com/api/mobile/auth.php";

  		var option = {params:{moduleid:2,job:"checklogin",user:this.user,password:this.pwd}}
  		var _this = this;
  		this.$http.get(url,option).then((res)=>{
  		
  			if(res.body.res[0] == 1 && res.body.res[1] == 1 && res.body.res[2] != 8){
  				localStorage.token = res.body.token;
  				_this.$router.push({path:'/my'});
  			}else if(res.body.res[2] == 8){
  				_this.alert(2);
  			}else{
  				_this.alert(1);
  			}
  			
  		})
  	},
  	alert(type){
  		if(type == 1){
  			Toast({
			  message: '账号或密码输入错误',
			  position: 'bottom',
			  duration: 5000
			});
 
  		}else if(type == 2){
			Toast({
			  message: '账号已被锁定一小时后再试！',
			  position: 'bottom',
			  duration: 5000
			}); 
  		}
  	}
  }
}

 
</script>
<style lang="sass" >
.login-main{
	margin:0px 5%;
	ul{
		li{
			.el-input{				
				.el-input__inner{
					padding-top:.14rem;
					height:.8rem;
					line-height: .4rem;
					padding-left:.6rem;
					font-size:.3rem;
				}						
			}
			.pwd{
				.el-input__inner{
					padding-right:1rem;
				}
			}
			position:relative;
			padding-bottom:.4rem;
			i{
				position:absolute;
				top:.1rem;
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
	.nav-right{	
		position:absolute;
		right:5%;
		color: #0aa6de;
		font-size:.3rem;
	}
	.pt-perspective{
		width:100%;
		
		.login-main{
			margin-top:.4rem;
			.el-switch{
				top:0;
				position:absolute;
				line-height: .8rem;
				height:1rem;
				right: 0.2rem;
			}
		}
	}
</style>
