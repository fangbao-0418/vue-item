<template>
	<div v-show="isshow" class="report-bg" @click="cancel">
		<div class="report-main" @click.stop="">
			<div class="report-head">
				<span class="send">举报内容问题</span>
			</div>
			<div class="content">
					<ul>
						<li v-for="(item,index) in items" v-on:click="checked(index)" :class="{'gray':item.checked}">
							 <span ><em v-if="item.checked" >已举报  </em>{{item.title}}</span>
						     <i  v-if="item.checked" class="iconfont">&#xe670;</i>
						</li>
					</ul>
				    <div class="report">
						<el-button type="primary">提交</el-button>
					</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props:['isshow'],
		data(){
			return {
				items:[
					{
						"title":"广告",
						"checked":false

					},{
						"title":"重复、旧闻",
						"checked":false
					},{
						"title":"格式问题",
			             "checked":false
					},{
						"title":"低俗",
						"checked":false
					}, {
						"title":"标题夸张",
						"checked":false
					},{
						"title":"已举报与事实不符",
						"checked":false
					},{
						"title":"疑似抄袭",
						"checked":false
					},{
						"title":"其他问题",
						"checked":false
					}
				]
			};

		},
		mounted(){
			 
			
		},
		methods:{
			checked(index){
				this.items[index].checked = !this.items[index].checked;
			},
			cancel(){
				this.$parent.isshow = false;
			},
		}
	}
</script>




<style lang="sass" scoped>
	.report-bg{
		width: 6.4rem;
	    z-index: 999999;
	    background: rgba(0, 0, 0, 0.6);
	    position: fixed;
	    bottom: 0;
	    height: 100%;
	}
	.report-main{
		position:fixed;
		bottom:0;
		width:100%;
		.report-head{
			line-height: .6rem;
			width:90%;
			height:.6rem;
			text-align: center;
			background-color: #F7F7F7;
			padding:0 5%;
			.send{
				color:#6699FF;
				font-size: .28rem;
			}
		}
		.content{
			background-color:#FFF;
			width:90%;
			padding:0 5%;
			textarea{
				width:100%;
				padding:2% 0;
				border:none;
				min-height: 2rem;
			}
			li{
				padding:.15rem 0;
				border-bottom: 1px solid #e8e8e8;
			}
			.gray{
				color:gray;
			}
			span{
				font-size: .24rem;
			}
			i{
				color:#6699FF;
				float: right;
			}
			.report{
				text-align: center;
				padding: .3rem 0;
			}

		}
	}
</style>