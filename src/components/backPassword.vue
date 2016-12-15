<template>
	<div class="back-area">
		<my-nav :goback="true" title="忘记密码">
			
			<div @click="next(step)" class="nav-right" slot="right">{{rightTitle}}</div>

		</my-nav>
		
			
			<div class="step-1" v-if="step == 1">
				<div class="back-content">
					<span class="tit">
						手机号码
					</span>
					<input v-model="mobile" maxlength="11" placeholder="请输入您的手机号码"/>
				</div>
			</div>

			<div class="step-2" v-if="step == 2">
				<div class="back-content">
					<span class="tit">
						验证码
					</span>
					<input v-model="validate" maxlength="6" placeholder="请输入您的验证码"/>
					<p :class="{'orange':!issend}">
						<span @click="sendValidate">{{validatetext}}</span>
					</p>
				</div>	
			</div>

			<div class="step-2" v-if="step == 3">
					<div class="back-content">
						<span class="tit">
							密码
						</span>
						<input v-model="password" type="password" placeholder="请输入密码"/>
					</div>
					<div class="back-content">
						<span class="tit">
							确认密码
						</span>
						<input v-model="cpassword" type="password" placeholder="再次确认密码"/>
					</div>		
			</div>
		</div>
	</div>
</template>
<script>
	import blackNav from "./blackNav.vue";
	import { Toast, Indicator } from "mint-ui";
	import serverapi from "../serverapi.js";

	export default {
		
		data(){
			return {
				issend : false,
				validatetext : "获取验证码",
				validate : null,
				step : 1,
				mobile : null,
				timer : null,
				password : null,
				cpassword : null,
			}
		},
		computed:{
			rightTitle(){
				if(this.step == 3){
					return "修改";
				}else{
					return "下一步";
				}
			}
		},
		components : {
			"my-nav" : blackNav
		},		
		methods : {
			sendValidate(){
				var url = serverapi.validate;
  				var body = {mobile:this.mobile,type:2};
  				var option = {emulateJSON:true};
  				if(!this.issend){
  					this.$http.post(url,body,option).then((res)=>{
  					console.log(res);
  					if(res.body.status == "error"){
  						this.toast(res.body.msg);
  					}
  					if(res.body.status == "ok"){
  						this.issend = true;
		      			var time = 60;
		      			var _this = this;
		      			_this.validatetext = "重新获取(" + time + ")秒";
		      			this.timer = setInterval(()=>{
		      				time--;
		      				_this.validatetext = "重新获取(" + time + ")秒";
		      				if (time == 1){
		      					_this.issend = false;
		      					_this.validatetext = "重新获取"
		      					clearInterval(_this.timer);
		      				}
		      			},1000)

  					}
	      			})

  				}
  				
			},
			toast(message){
				Toast({
					  message: message,
					  position: 'bottom',
					  duration: 5000
					});
			},
			next(num){
				if(num == 1){
					var pattern = /^1[3|4|5|7|8][0-9]\d{8}$/;
					if(!pattern.exec(this.mobile)){
						this.toast("手机格式不正确");
					}else{						
						this.$http.post(serverapi.backpassword,{action:"check_mobile",mobile:this.mobile},{emulateJSON:true}).then((res)=>{
							if(res.body == false){
								this.toast("该手机号尚未注册")
							}else{
								this.$http.post(serverapi.backpassword,{action:"send_validate",mobile:this.mobile},{emulateJSON:true}).then((res)=>{
									console.log(res);
									if(res.body.code == 0){
										this.step = 2;
									}else{
										this.toast(res.body.msg);
									}

								})
							}
						})
					}
				}

				if(num == 2){
					this.$http.post(serverapi.backpassword,{action:"check_validate",mobile:this.mobile,validate:this.validate},{emulateJSON:true}).then((res)=>{
						if(res.body.status == "ok"){
							this.step = 3;
						}else{
							this.toast(res.body.msg);
						}
					})
				}

				if(num == 3){
					var pattern = /^\w{6,20}$/;
					if(!pattern.exec(this.password)){
						this.toast("密码由6-20位英文或数字组成");
					}else if(this.password != this.cpassword){
						this.toast("两次输入的密码不一致");
					}else{
						 Indicator.open({
				              text: '密码修改中',
				              spinnerType: 'fading-circle'
				         });

						this.$http.post(serverapi.backpassword,{action:"edit_password",mobile:this.mobile,validate:this.validate,password:this.password},{emulateJSON:true}).then((res)=>{
							console.log(res);
							if(res.body.status == "error"){
								this.toast(res.body.msg);
							}else{
								this.toast("密码修改成功");
								setTimeout(()=>{
									this.$router.push({path:"/login"});
								},1000);
								
							}
							Indicator.close();
						})
					}
				}
			}
		},
		beforeDestory(){
    		if(this.timer){
    			clearInterval(this.timer);
    		}
    	}
	}
</script>
<style lang="sass" scoped>
	.back-area{
		.nav-right{
			display:inline-block;
			position:absolute;
			font-size:.26rem;
			color:#fff;			
			right:5%;
		}
		.back-content{
			margin-top:.4rem;
			width:90%;
			padding:0 5%;
			height:.8rem;
			line-height:.8rem;
			background:#fff;
			border-top:1px solid #ccc;
			border-bottom:1px solid #ccc;
			.tit{
				display:inline-block;
				width:30%;
				font-size:.3rem;
			}
			input{
				float:right;
				text-align:right;
				height:.8rem;
				line-height:.4rem;
				font-size:.3rem;
				width:60%;
				border:none;
				background:transparent;
			}
			.orange{
				color:#FF964B
			}
			p{
				margin-top:.2rem;
				font-size:.28rem;
				text-align: center;
				color:#bbb;
			}
		}
	}
</style>