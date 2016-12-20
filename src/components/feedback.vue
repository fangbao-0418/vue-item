<template>
	<div class="white-box">
		 
		<my-nav theme="black" :path="path" title="意见反馈"></my-nav>
		<div class="tj-main">
			<ul>
				<li>
					<textarea class="text" v-model="message" placeholder="描述下您出现的问题，便于我们更好的为您解决问题">
					</textarea>
				</li>
				<li>
					<input class="line" v-model="line" placeholder="QQ\电话\邮箱，方便我们联系" >
				</li>
				<li>
					<div class="save" @click="save">
						<span>提交反馈</span>
					</div>
				</li>
			</ul>
			<span class="hotline">
				客服热线：010-59492293
			</span>
		</div>
		 
	</div>
</template>
<script>
	import { Toast } from 'mint-ui';
	import blackNav from './blackNav';
	import serverapi from '../serverapi.js';
	export default {
		data(){
			return {
				message:null,
				line:null,
				path:{path:"/my"}
			}
		},
		components:{
			'my-nav':blackNav
		},
		methods:{
			toast(msg){
				Toast({
				  message: msg,
				  position: 'bottom',
				  duration: 2000
				});
			},
			save(){
				if(!this.message){
					this.toast("请输入您的意见");
				}else{
					this.toast("您的意见已提交，感谢您的反馈");
					
					console.log(serverapi);
					this.$http.post(serverapi.feedback,{token:localStorage.token,line:this.line,message:this.message},{emulateJSON:true}).then((res)=>{
						this.message = "";
						this.line = "";
						setTimeout(()=>{
							this.$router.push({path:'./my'});	
						},2000)
					});
					
				}
			}
		}
	}

</script>
<style lang="sass" scoped>
	.white-box{
		background:#fff;
		.tj-main{
			width:90%;
			margin:0 5%;
			padding-top:.4rem;
			ul{
				li{
					margin-bottom:.3rem;
					.text{
						background:#F0F0F0;
						width:96%;
						height:1.6rem;
						border:none;
						padding:2%;
					}
					.line{
						width:96%;
						padding:2%;
						height:.4rem;
						background:#F0F0F0;
						border:none;
					}
					.save{
						width: 100%;
					    margin: 0 auto;
					    text-align: center;
					    background: #0bbe06;
					    font-size: .3rem;
					    padding: .28rem 0;
					    color: #fff;
					}
				}
			}
			.hotline{
				font-size:.24rem;
			}
		}
	}
	
</style>