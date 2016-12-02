<style lang="sass" scoped>
	.collect-area{
		.collect-main{
			.mint-navbar{
				.mint-tab-item-label{

				}
			}
			.mint-tab-container{
				margin-top:3px;
			}
		}
		.nav-right{	
			position:absolute;
			right:5%;
			color: #0aa6de;
			font-size:.3rem;
		}
	}
</style>
<template>
	<div class="collect-area" >
		<my-nav theme="white" title="收藏">
		<span slot="right" class="nav-right" @click="del">{{rightTitle}}</span>
		</my-nav>
		<div class="collect-main">
			<mt-navbar v-model="active">
			  <mt-tab-item id="tab-container1">产品</mt-tab-item>
			  <mt-tab-item id="tab-container2">资讯</mt-tab-item>
			  <mt-tab-item id="tab-container3">视频</mt-tab-item>
			</mt-navbar>

			<mt-tab-container v-model="active" :swipeable="true">
			  <mt-tab-container-item id="tab-container1">
			  	<home-shell :collect="true" v-if="active == 'tab-container1'" :type="22" :getparams="params1"></home-shell>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="tab-container2">
			  	
			  	<home-shell :collect="true" v-if="active == 'tab-container2'" :type="21" :getparams="params2"></home-shell>

			  </mt-tab-container-item>
			  <mt-tab-container-item id="tab-container3">
			     
			  </mt-tab-container-item>
			</mt-tab-container>
		</div>
	</div>
</template>
<script>
	import blackNav from './blackNav';
	import { Navbar, TabItem } from 'mint-ui';
	import { TabContainer, TabContainerItem } from 'mint-ui';
	import homeShell from './homeShell';
	 
  
	import store from '../store';
	export default {
		methods:{
			del(){
				 this.rightTitle = this.rightTitle == "删除" ? "取消" : "删除";
				 store.commit('collectDel')
			}
		},
		data(){
			return {
				active:"tab-container1",
				rightTitle:"删除",
				params1:{
					url:"http://www.ey99.com/api/mobile/mycollect.php",
					option:{params:{token:localStorage.token,type:22}}
				},
				params2:{
					url:"http://www.ey99.com/api/mobile/mycollect.php",
					option:{params:{token:localStorage.token,type:21}}
				},
				params3:{
					url:"http://www.ey99.com/api/mobile/mycollect.php",
					option:{params:{token:localStorage.token,type:22}}
				}

			}
		},
		components:{
			'my-nav':blackNav,
			Navbar, 
			TabItem,
			TabContainer,
			TabContainerItem,
			homeShell
		}
	}
</script>