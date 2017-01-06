<style lang="sass" scoped>
@import "../../css/common.scss";					  //全局css样式
	.portrait{
		position: relative;
		padding:0px .2rem;
		background: #fff;
		margin-top: .3rem;
		height: 1.2rem;
		line-height: 1.2rem;
		span{
			font-size:.3rem;
			float:left;
		}
		.avatar-right{
			float:right;
			em{
				float:right;
				@include  rotate(180deg);
			}		 
			img{
				margin-top:.18rem;
				float:left;
				width:.84rem ;
				height:.84rem ;
				border-radius: 51%;
				padding-right: .1rem;
			}			 
		}
		.pure-button{
			position: absolute;
			top:0;
			width:5.8rem;
			height:1.2rem;
		}		
	}
</style>
<template>
	<div class="portrait" >
		<span>头像</span>
		<div class="avatar-right">
			<img :src="avatar"/>
			<em> <i class="iconfont">&#xe604;</i></em>
		</div>
		
		<vue-core-image-upload v-bind:class="['pure-button','pure-button-primary','js-btn-crop']" v-bind:crop="true" :url="url" :max-file-size="maxFileSize" extensions="png,gif,jpeg,jpg" v-on:imageuploaded="imageuploaded"></vue-core-image-upload>
	</div>
</template>
<script>
	
	import imageUpload  from '../common/vue.core.image.upload.vue';
	import serverapi from '../../serverapi.js';
	import bus from '../../bus.js';
	import { Toast, Indicator } from 'mint-ui';
	export default {
		props:['src'],
		data(){
			return {
				maxFileSize: 3 * 1024 * 1024,
				 
				avatar:this.src,
				 
				url: serverapi.avatarupload + "?token="+localStorage.token, 
			}
		},
		mounted(){
			this.loadData();
			var _this = this;
			bus.$on('errorHandle',function(res){
				console.log(res);
				_this.errorHandle(res);
			});
			bus.$on('imageuploading',function(res){
				console.log(res);
				 Indicator.open({
					  text: '上传中...',
					  spinnerType: 'fading-circle'
				 });
			});
			bus.$on('imageuploaded',function(res){
				 Indicator.close();
				 _this.imageuploaded(res);
			});
		},
		components: {
			  'vue-core-image-upload' : imageUpload,
		},
		events: {
		  imageuploaded(res) {
		  	  cosole.log(res);
			  if (res.errcode == 0) {
			   
			    //this.src = 'http://img1.vued.vanthink.cn/vued751d13a9cb5376b89cb6719e86f591f3.png';

			  }
			}
		 },
		 methods: {
		 	loadData(){
				var url = serverapi.info;
				var body = {token:localStorage.token};
				var option = {emulateJSON:true};
				this.$http.post(url,body,option).then((res) => {
					this.userinfo = res.body;
				})
			},
		    imageuploaded(res) {
		    	var timestamp = Date.parse(new Date());
		    	//this.userinfo.avatar = this.userinfo.avatar + "&time=" + timestamp;
				

					console.log(res);				

				if (res.errcode == 0) {
					

					if(res.data.src) {
						alert(res.data.src);
						this.avatar = res.data.src;
						return;
					}
					// this.name = res.data.name;
					// this.cropArgs = {
					//   toCropImgH: parseInt(res.data.post.toCropImgH),
					//   toCropImgW: parseInt(res.data.post.toCropImgW),
					//   toCropImgX: parseInt(res.data.post.toCropImgX),
					//   toCropImgY: parseInt(res.data.post.toCropImgY)
					// }
				}
		    },
		    errorHandle(msg) {
		      this.toast(msg)
		    },
		    toast(msg){
		    	Toast({
				  message: msg,
				  position: 'bottom',
				  duration: 2000
				});
		    }
  		}
	}
</script>