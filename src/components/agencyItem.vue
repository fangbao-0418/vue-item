<template>
	<div class="agency-main">
		<ul>
			<router-link v-for="(item,index) in items" :to="{path:'/agency/show',query:{id:item.itemid}}" tag="li">
				<div class="agency-head">
					<img :src="item.avatar" class="user-icon" />
					<span class="user-name">{{item.username}}</span>
				</div>
				<div class="agency-content">
					<span class="agency-type" >求</span>
					<span class="agency-title">{{item.title}}</span>
				</div>
				<div class="detail">代理区域:{{item.yxqy}}</div>
				<div class="detail">代理性质:{{item.dlxz}}</div>
				<div class="detail">代理渠道:{{item.xsqd}}</div>
				<div class="hit">浏览：{{item.hits}}</div>
			</router-link>
		</ul>
	</div>
	</div>
</template>
<script>
	export default {
		props: {
			items:{},
        	collect:{
            	type:Boolean,
            	default:false
        	}
        },	
		mounted(){
			console.log(222);
			console.log(this.items);
		}
	}
</script>
<style lang="sass" scoped>
	.agency-main{
		ul{
			width:100%;
			float:left;
			background:#efefef;
			li{
				float:left;
				margin-top:.2rem;
				background: #fff;
				width:90%;
				padding:.1rem 5%;
				.agency-head{
					width:100%;
					float:left;
					padding:.1rem 0;
					.user-icon{
						width:.4rem;
						height:.4rem;
						float:left;
						border-radius:.4rem;
					}
					.user-name{
						font-size:.3rem;
						margin-left:.2rem;
						height:.4rem;
						line-height: .4rem;
						display: inline-block;
						color:#8295A5;
					}
				}
				.agency-content{
					padding:.1rem 0;
					float:left;
					width:100%;
					border-bottom: 1px solid #fafafa;
					.agency-type{
						font-size: .3rem;
						color:#000;
					}
					.agency-title{
						color:#717DD3;
						font-size: .3rem;
					}
				}
				.detail{
					width:100%;
					float:left;
					font-size:.24rem;
					padding:.1rem 0;
					color:#8295A5;
				}
				.hit{
					border-top: 1px solid #fafafa;
					width:100%;
					float:left;
					padding:.1rem 0;
					color:#8295A5;
					font-size:.24rem;
				}
			}	
		}
	}
</style>