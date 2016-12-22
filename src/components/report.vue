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
				    <div class="report" @click="submit">
						<el-button type="primary" :disabled="disabled">提交</el-button>
					</div>
			</div>
		</div>
	</div>
</template>
<script>

	import { Toast } from 'mint-ui';
	import serverapi from '../serverapi.js';	
	export default {
		props:['isshow','moduleid','itemid'],
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
						"title":"与事实不符",
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
		computed:{
			disabled(){
				let disabled = true;
				for(var i = 0; i < this.items.length; i ++){
					if(this.items[i].checked){
						return false;
					}
				}
				return disabled;
			}
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
			submit(){
				var str = "";
				for(var i = 0; i < this.items.length; i++){
					if(this.items[i].checked){
						if(str){
								str += "," + this.items[i].title;
						}else{
								str = this.items[i].title;
						}	

					}
				}
				
				if(str){
					this.sendContent(str);
				}
			},
			sendContent(str){				 
				var url = serverapi.report;
				var option = {params:{moduleid:this.moduleid,itemid:this.itemid,content:str},emulateJSON:true};
				this.$http.post(url,[],option)
				this.$parent.isshow = false;
				Toast('举报成功');
			}
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
				padding:.2rem 0;
				border-bottom: 1px solid #efefef;
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