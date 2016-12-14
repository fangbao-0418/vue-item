<template>
	<div class="pt-perspective">
		<my-nav title="注册">
			<router-link :to="{path:'/login'}" class="nav-right" slot="right">登录</router-link>
		</my-nav>
		<div class="reg-main">
			<ul>
				<li>
					<span>手机号码</span>
					<input maxlength="11" v-model="mobile" palceholder="手机号码"/>
				</li>
				<li>
					<span>验证码</span>
					<input class="validate" v-model="validate" maxlength="6"/>
					<el-button type="primary" @click="sendvalidate" :disabled="disabled">{{validatetext}}</el-button>
				</li>
				<li>
					<span>密码</span>
					<input v-if="passwordshow" type="text" v-model="password" palceholder="6-16位字母、数字和符号" />
					<input v-if="!passwordshow" type="password" v-model="password" palceholder="6-16位字母、数字和符号" />
					<mt-switch v-model="passwordshow"></mt-switch>
				</li>
			</ul>

			<el-button @click.native="submit" :disabled="!validateok" type="primary">注册</el-button>
		</div>
	</div>
</template>
<script>
	import blackNav from './blackNav.vue';
	import { Switch } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import auth from '../auth';
	import serverapi from '../serverapi';
	export default {
		data(){
			return {
				mobile:null,
				password:null,
				validate:null,
				issend:false,
				validatetext:"获取验证码",
				timer:null,
				passwordshow:false,	
				passwordtype:"password"			
			}		
		},
		computed:{
			disabled(){
				if(this.mobile && !this.issend ){
					return false;
				}else{
					return true;
				}
			},
			validateok(){
				if(this.mobile && this.validate && this.password){
					return true;
				}else{
					return false;
				}
			}
			 
		},
		components:{
			'my-nav':blackNav,
			
		},
		methods: {
			toast(message){
				Toast({
					  message: message,
					  position: 'bottom',
					  duration: 5000
					});
			},

      		submit() {
      			if(this.validateok){
      				var pattern = /^1[3|4|5|7|8][0-9]\d{8}$/;
      				if(!pattern.exec(this.mobile)){
      					this.toast("手机号码格式有误");
      				}else{
      					var url = serverapi.register;
      					var body = {username:this.mobile,validate:this.validate,password:this.password};
      					var option = {emulateJSON:true};
      					this.$http.post(url,body,option).then((res)=>{
      						console.log(res)
      						if(!res.body.codestatus){
								this.toast("验证码错误");
      						}else if(this.password.length < 6){
		      					this.toast("密码输入过短");
		      				}else{
		      					if(res.body.token){
		      						localStorage.token = res.body.token;
  									this.$router.push({path:'/my'});
		      					}else{
		      						this.toast("注册失败");
		      					}
		      				}
      				
      					},()=>{
      						this.toast("该手机号已被使用");
      					})
      				}      				
      			}
      		},
      		sendvalidate(){
      			if(this.issend == false){
      				var url = serverapi.validate;
      				var body = {mobile:this.mobile};
      				var option = {emulateJSON:true};
      				this.$http.post(url,body,option).then((res)=>{
      					if(res.body.status == "error"){
      						this.toast("短信发送失败");
      					}
      				})
      			}
      			this.issend = true;
      			var time = 60;
      			var _this = this;
      			this.timer = setInterval(()=>{
      				time--;
      				_this.validatetext = "重新获取(" + time + ")秒";
      				if (time == 1){
      					_this.issend = false;
      					_this.validatetext = "重新获取"
      					clearInterval(_this.timer);
      				}
      			},1000)
      		},
      	
    	},
    	beforeDestory(){
    		if(this.timer){
    			clearInterval(this.timer);
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
					.mint-switch{
						position:absolute;
						right:0;
						display:inline-block;
					}
					.el-button{
						padding:0px;
						margin:0px;
						position:absolute;
						width:2.3rem;
						top:.1rem;
						right:0px;
						height:.6rem;
						font-size:.28rem;
					}
					input{
						width:70%;
						height:.8rem;
						line-height:.4rem;
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