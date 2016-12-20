<style lang="sass" scoped>
	.integral-area{
		.fixed-nav{
			position:fixed;
			top:0px;
			z-index:999;
			border-bottom: #fafafa solid 1px;
		}
		background: #fff;
		.integral-main{
			width: 90%;
			padding:0px 5%;
			margin-top:.8rem;
			background: #fff;
			ul{
				li{
					padding:.2rem 0px;
					border-bottom:solid 1px #fafafa;
					.integral-detail-1{
						line-height: .36rem;						
						.title{
							width:80%;
							display: inline-block;
							font-size:.28rem;
						}
						.plus{
							width:20%;
							text-align: right;
							display: inline-block;
							font-size:.26rem;
							color:#9EC461;
							float: right;
						}
						.minus{
							font-size:.26rem;
							color:#f75c5c;
							float: right;
						}
					}
					.integral-detail-2{
						font-size:.24rem;
						color: #999999;
						height: .4rem;
						line-height: .4rem;
						.addtime{
							float: left;
						}
						.balance{
							float: right;
						}
					}					
				}
			}
		}
	}
</style>
<template>
	<div class="integral-area" >
		<my-nav :path="path" class="fixed-nav" theme="white" title="成长值明细"></my-nav>
		<div class="integral-main">
			<mt-loadmore v-if="items != null" :bottom-method="loadBottom" bottom-pull-text="上拉加载" :bottom-all-loaded="allLoaded" ref="loadmore">
				<ul>
					<li v-for="item in items">
						<div class="integral-detail-1">
							<span class="title">{{item.reason}}</span>
							<span :class="getColor(item.amount)">{{ parseInt(item.amount) > 0 ? "+" + item.amount : item.amount }}</span>
						</div>
						<div class="integral-detail-2">
							<span class="addtime">{{item.adddate}}</span>
							<span class="balance">{{item.balance}}</span>
						</div>
					</li>
				</ul>
				  <div v-if="noData" slot="bottom" class="mint-loadmore-bottom">
                    没有了
                </div>
			</mt-loadmore>
		</div>
	</div>
</template>
<script>
	import blackNav from '../blackNav';
	import serverapi from '../../serverapi.js';
	import { Loadmore } from 'mint-ui';
	export default {
		data(){
			return {
				path:{path:"/my"},
				items:null,
				allLoaded:false,
				page:0,
				noData:false
			}
		},
		computed:{

		},
		mounted(){
			this.loadData();
		},
		methods:{
			getColor(str){
				if(parseInt(str) < 0){
					return "minus";
				}else{
					return "plus";
				}
			},
			loadData(id){
				this.page = this.page + 1;
			
				var url = serverapi.integral;
				var body = {token:localStorage.token};
				var option = {params:{page:this.page},emulateJSON:true};
				var _this = this;
				this.$http.post(url,body,option).then((res)=>{

					console.log(res);
					if(res.body.list.length && this.page < 10){
						if(_this.items != null){
							for(var i = 0; i < res.body.list.length; i++){
								_this.items.push(res.body.list[i]);
							}
						}else{
							_this.items = res.body.list;
						}
					
						if(id) this.$refs.loadmore.onBottomLoaded(id);
					}else{
						this.noData = true;
						setTimeout(()=>{
							this.noData = false;
							if(id) this.$refs.loadmore.onBottomLoaded(id);
						},2000)
						
					}
					
				})
			},
			 
			loadBottom(id) {
			  this.loadData(id);
			}
		},
		components:{
			'my-nav':blackNav
		}
	}
</script>