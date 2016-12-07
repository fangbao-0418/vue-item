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
			<img :src="userinfo.avatar"/>
			<em> <i class="iconfont">&#xe604;</i></em>
		</div>
		
		<vue-core-image-upload v-bind:class="['pure-button','pure-button-primary','js-btn-crop']" v-bind:crop="true" :url="url" extensions="png,gif,jpeg,jpg" v-on:imageuploaded="imageuploaded"></vue-core-image-upload>
	</div>
</template>
<script>
	
	import imageUpload  from '../common/vue.core.image.upload.vue';
	import serverapi from '../../serverapi';
	export default {
		data(){
			return {
				userinfo:{
					avatar:null
				},
				url: serverapi.avatarupload + "?token="+localStorage.token, 
			}
		},
		mounted(){
			this.loadData();
		},
		components: {
			  'vue-core-image-upload' : imageUpload,
		},
		events: {
		  imageuploaded(res) {
			  if (res.errcode == 0) {
			    this.src = 'http://img1.vued.vanthink.cn/vued751d13a9cb5376b89cb6719e86f591f3.png';

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
		    	this.userinfo.avatar = this.userinfo.avatar + "&time=" + timestamp;
				if (res.errcode == 0) {
					if(res.data.src) {
					  this.src = res.data.src;
					  return;
					}
					this.name = res.data.name;
					this.cropArgs = {
					  toCropImgH: parseInt(res.data.post.toCropImgH),
					  toCropImgW: parseInt(res.data.post.toCropImgW),
					  toCropImgX: parseInt(res.data.post.toCropImgX),
					  toCropImgY: parseInt(res.data.post.toCropImgY)
					}
				}
		    },
		    errorHandle: function(msg) {
		      console.warn(msg);
		    }
  		}
	}
</script>