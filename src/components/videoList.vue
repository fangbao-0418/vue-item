<template>
	<div class="videoList">
 

		<div class="videoItem">
			<div class="videoarea">
				<vplayer :source="source" ref="vplayer"></vplayer>				
			</div>
			<span class="title">小男孩无意间偷拿了超市巧克力。。。</span>
			<div class="note">
				<span class="author">当代医药市场网</span>
				<span class="hits"> <i class="iconfont">&#xf0048;</i> 188</span>
			</div>		
		</div>

		<div class="videoItem">
			<div class="videoarea">
				<vplayer :source="source" ref="vplayer"></vplayer>				
			</div>
			<span class="title">小男孩无意间偷拿了超市巧克力。。。</span>
			<div class="note">
				<span class="author">当代医药市场网</span>
				<span class="hits"> <i class="iconfont">&#xf0048;</i> 188</span>
			</div>		
		</div>

		<div class="videoItem">
			<div class="videoarea">
				<vplayer :source="source" ref="vplayer"></vplayer>				
			</div>
			<span class="title">小男孩无意间偷拿了超市巧克力。。。</span>
			<div class="note">
				<span class="author">当代医药市场网</span>
				<span class="hits"> <i class="iconfont">&#xf0048;</i> 188</span>
			</div>		
		</div>

		<div class="videoItem">
			<div class="videoarea">
				<vplayer :source="source" ref="vplayer"></vplayer>				
			</div>
			<span class="title">小男孩无意间偷拿了超市巧克力。。。</span>
			<div class="note">
				<span class="author">当代医药市场网</span>
				<span class="hits"> <i class="iconfont">&#xf0048;</i> 188</span>
			</div>		
		</div> 
		 
	</div>
</template>
<script>
 	import vueVideo from './common/video.vue';
	export default {
		data () {
		  return {
     	 
 source : [
                    {
                        src : 'http://www.runoob.com/try/demo_source/movie.mp4',
                        type : 'video/mp4'
                    }
                ]

			 

		  	}
		  },
 methods: {
    playerStateChanged(playerCurrentState) {
      console.log(playerCurrentState)
    }
  },
		components: {
		    'vplayer': vueVideo
		  },

		   events: {
    'playerStateChanged': function (playerCurrentState) {
      console.log(playerCurrentState)
    }
  }

	}
</script>
<style lang="sass" scoped>
	.videoItem{
		margin-top:.2rem;
		width:5.8rem;
		padding:0px .3rem;
		border-bottom:.2rem #efefef solid;
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