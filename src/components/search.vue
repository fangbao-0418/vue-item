<template>
	<div>
		<component :is="currentView"></component>
	</div>
</template>
<script>
	import searchPage from './searchPage.vue';
	import searchList from './searchList.vue';
	export default {
		data(){
			return {
				optionstatus:false,
				rotate:false,
				type:"招商",
			}
		},
		computed:{
			currentView(){
				console.log(this.$route);
				return this.$route.query.q &&  this.$route.query.type ? "searchList" : "searchPage";
			}
		},
		components:{
			searchPage,
			searchList
		},	
		mounted(){
			console.log(this.currentView);
		}	
		
	}
</script>
<style lang="sass" scoped>
.search-main{
	.search-nav{
		padding:0px 5%;
		height:.8rem;
		line-height: .8rem;
		border-bottom:#FF9900 solid 1px;
		position:relative;
		.goback{
			font-size:.4rem;
			position:absolute;
			top:.04rem;
		}
		.search-icon{
			position:absolute;
			top:.05rem;
			font-size:.3rem;
			right:5%;
		}
		.search-area{
			position:absolute;
			top:.1rem;
			left:.7rem;
			height:.6rem;
			width:4.6rem;
			line-height: .6rem;
			margin-left:.2rem;
			display: inline-block;
			border:#efefef solid 1px;
			background-color: #cfcfcf;
			border-radius:.05rem;
			::-webkit-input-placeholder { /* WebKit browsers */ 
			color: #666; 
			} 
			:-moz-placeholder { /* Mozilla Firefox 4 to 18 */ 
			color: #666; 
			} 
			::-moz-placeholder { /* Mozilla Firefox 19+ */ 
			color: #666; 
			} 
			:-ms-input-placeholder { /* Internet Explorer 10+ */ 
			color: #666; 
			} 
			.option-area{
				margin-left:.1rem;
				color: #666; 
				font-size:.24rem;
				width:.9rem;
				display: inline-block;
				.rotate{
					display: inline-block;
					transform:rotate(180deg);
					-ms-transform:rotate(180deg); 	/* IE 9 */
					-moz-transform:rotate(180deg); 	/* Firefox */
					-webkit-transform:rotate(180deg); /* Safari 和 Chrome */
					-o-transform:rotate(180deg); 	/* Opera */
				}
			}
			.search-text{	
				width:3rem;
				font-size:.28rem;
				height:.6rem;
				border:none;
				background-color:transparent;				
				color:#333;
				display: inline-block
			}
		}
	}
	.option-content{
		color:#fff;
		position:absolute;
		
		
		width:2rem;
		left:2%;
		
		.option-bar{
			position:absolute;
			top:-.27rem;
			left:.8rem;
			font-size:.5rem;
			transform:rotate(180deg);
			-ms-transform:rotate(180deg); 	/* IE 9 */
			-moz-transform:rotate(180deg); 	/* Firefox */
			-webkit-transform:rotate(180deg); /* Safari 和 Chrome */
			-o-transform:rotate(180deg); 	/* Opera */
			color:rgb(95,95,95);
			z-index: 999;
		}
		ul{
			position:absolute;
			width:100%;
			border-radius:.1rem;
			top:.06rem;

			background-color:rgba(0,0,0,0.6);
			li{
				text-align: center;
				font-size:.3rem;
				padding:.2rem;
				border-bottom:#555 1px solid;
			}
			.no-border{
				border:none;
			}
		}
	}
	.history-area{
		padding-top:.2rem;
		margin:0px 5%;
		.title{
			font-size: .24rem;
			color:#FF9933;
		}
		.clean{
			font-size: .24rem;
			float:right;
			color:#666;

			i{
				display: inline-block;
				padding-right:.04rem;
				font-size:.24rem;
			}
		}
	}
}
</style>