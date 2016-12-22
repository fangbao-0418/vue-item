<template>
	<div class="search-main">
		<div class="search-nav">
			<i @click="goback" class="iconfont goback">&#xf000c;</i>
			<div class="search-area">
				<div class="option-area" @click="selecttype">
					{{type}}
					<i :class="['iconfont','option-icon',{'rotate':rotate}]">&#x3438;</i>
				</div>
				

				<input v-model="q" class="search-text" placeholder="药品">
			</div>
			<i @click="gosearch" class="iconfont search-icon">&#xe606;</i>
		</div>
		<div v-show="optionstatus" class="option-content">
			<i class="iconfont option-bar">&#x3438;</i>
			<ul>
				<li @click="checktype('招商')">招商</li>
				<li @click="checktype('资讯')">资讯</li>
				<li @click="checktype('代理')">代理</li>
				<li @click="checktype('视频')" class="no-border">视频</li>
			</ul>
		</div>
		<div class="history-area">
			<div class="history-head">
				<span class="title">搜索历史</span>
				<span class="clean" @click="clearSearchItems"><i class="iconfont">&#xe6b8;</i>清空</span>
			</div>
			<div class="history-list">
				<ul>
					<li v-for="item in searchItems"><router-link :to="item">{{item.query.q}}</router-link></li>
				</ul>
			</div>
		</div>

	</div>
</template>
<script>
	export default {
		data(){
			return {
				optionstatus:false,
				rotate:false,
				type:"招商",
				q:null,	
				searchItems:[]			
			}
		},
		computed:{
			 
		},
		mounted(){
			if(localStorage.searchItems){
				this.searchItems = JSON.parse(localStorage.searchItems);
			}
		},
		ceated(){
			
		},
		methods:{
			goback(){
				this.$router.go(-1);
			},
			selecttype(){
				this.rotate = !this.rotate;
				this.optionstatus = !this.optionstatus;
			},
			checktype(type){
				this.type = type;
				this.selecttype();
			},
			gosearch(){	
				if(this.q){
					this.setSearchItems();
					this.$parent.currentView = "searchList";
					this.$router.push({path:'/search',query:{type:this.type,q:this.q}});
				}			
			},
			clearSearchItems(){
				this.searchItems = [];
				
				localStorage.removeItem('searchItems');
			},
			setSearchItems(){
			 
				
				if(this.searchItems.length >=7 ){
					this.searchItems.splice(7,this.searchItems.length);
				}	
				this.searchItems.unshift({path:'/search',query:{type:this.type,q:this.q}});
				localStorage.searchItems =  JSON.stringify(this.searchItems);
				 
			}
		}
	}
</script>
<style lang="sass" scoped>
.search-main{
	height:100%;
	background-color:#ffffff;
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
			border:#f0f0f0 solid 1px;
			background-color: #f0f0f0;
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
		.history-list{
			display: flex;
			padding-top:.1rem;
			ul{
				
				width:100%;
				li{
					width:50%;
					float:left;
					line-height:.6rem;
					font-size:.28rem;
				}
			}
		}
	}
}
</style>