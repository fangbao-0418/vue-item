<template>
	<div class="videoList">
 


		<div v-for="item in items" class="videoItem">
			<div class="videoarea">
				<vplayer :source="item.source" ref="vplayer"></vplayer>				
			</div>
			<span class="title">{{item.title}}</span>
			<!-- <div class="note">
				<span class="author">当代医药市场网</span>
				<span class="hits"> <i class="iconfont">&#xf0048;</i> 188</span>
			</div>		 -->
		</div>

		 
		 
	</div>
</template>
<script>
 	import vueVideo from './common/video.vue';
 	import serverapi from '../serverapi';
	export default {
		props:['items'],
		data () {
		    return {}
		},
		mounted(){

		},
		methods: {
		 
		},
		components: {
		    'vplayer': vueVideo
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
		.videoarea{
			position:relative;
			width:5.8rem;
			
			img{
				width:5.8rem;
				height:2.8rem;
			}
			
		}
		.title{
			width:100%;
			padding:.12rem 0 .05rem;
			font-size:.3rem;
			display: inline-block;
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
		
	}
</style>