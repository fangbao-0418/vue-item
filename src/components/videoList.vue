<template>
	<div class="videoList">
 


		<div v-for="(item,index) in items" class="videoItem">
			<div class="videoarea">
				<vplayer :source="item.source" ref="vplayer"></vplayer>				
			</div>
			<span class="title">{{item.title }}</span>
			<collect-icon class="collect" moduleid="14" :id="item.itemid" ref=""></collect-icon>
			 <collect-del-button v-if="collect" :items="items" :type="14" :index="index" class="collect-del-botton"></collect-del-button>   

			<!-- <div class="note">
				<span class="author">当代医药市场网</span>
				<span class="hits"> <i class="iconfont">&#xf0048;</i> 188</span>
			</div>		 -->
		</div>

		 
		 
	</div>
</template>
<script>
 	import vueVideo from './common/video.vue';
  	import collectIcon from './common/collectIcon.vue'; 	
  	import collectDelButton from './collectDelButton'; 
	export default {
		props:['items','collect'],
		data () {
		    return {}
		},
		mounted(){

		},
		methods: {
		 
		},
		components: {
		    'vplayer': vueVideo,
		    collectIcon,
		    collectDelButton
		},
		filters:{
          dsubstr(title,length){
              return title.substr(0,length);
          }
      	},
 
  }
 
</script>
<style lang="sass" scoped>
	.videoItem{
		margin-top:.2rem;
		width:5.8rem;
		padding:.2rem .3rem;
		border-bottom:.2rem #efefef solid;
		background: #FFF;
		position:relative;
		.videoarea{
			position:relative;
			width:5.8rem;
			
			img{
				width:5.8rem;
				height:2.8rem;
			}
			
		}
		.title{
			width:80%;
			padding:.24rem 0 0 0;
			font-size:.3rem;
			display: inline-block;
		}
		.collect{
			padding: .16rem 2% 0 0;
			text-align: right;
			width:18%;
			float:right;
		}
		.note{
			padding-bottom:.1rem;
			.author{
			font-size:.2rem;
				display: inline-block;			
			}
			.hits{
				margin-left:.2rem;
				font-size:.2rem;
				display: inline-block;
			}
		}
		.collect-del-botton{
			position:absolute;
			top:.3rem;
			right:.3rem;
		}
		
	}
</style>