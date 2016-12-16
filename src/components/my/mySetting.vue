 
<template>
	<div class="myset-area" >
		<my-nav theme="white" :path="path" title="设置"></my-nav>
		<div class="myset-main">
				<ul>
				<router-link to="{name:'infoEdit'}" tag="li">
					<span>个人资料修改</span>
					<i class="iconfont">&#xe604;</i>
				</router-link>
				<!-- <li>
					<span>签到提醒</span>
					<i><el-switch v-model="status" on-text="" off-text="" @change="passwdstatus"></el-switch></i>
				</li>
				<li>
					<span>意见反馈</span>
					<i class="iconfont">&#xe604;</i>
				</li> -->
			</ul>
		</div>
		<div @click="loginout" class="logout">
			<span>退出登录</span>
		</div>
	</div>
</template>
<script>
	import blackNav from '../blackNav';
	export default {
		data(){
			return {
				status:false,
				path:{path:"/my"}
			}
		},
		components:{
			'my-nav':blackNav
		},
		methods:{
			loginout(){
				localStorage.removeItem('token');
				this.$router.push({path:'/login'})
			},
		}
	}
</script>

<style lang="sass" scoped>
.myset-main{
	background: #fff;
    width: 100%;
	margin-top: .3rem;
	ul{
		li{
			width: 6rem;
			padding:.19rem .2rem;
			list-style: none;
			font-size: .3rem;			
			border:1px solid #DFDFDF;
			i{
				float: right;
				color:#c3c3c3;
				font-size: .35rem;
				line-height: 1;
				-moz-transform:rotate(180deg); -webkit-transform:rotate(180deg);transform:rotate(180deg);
			}			
		}
	}
	
	
	
}

.logout{
	text-align: center;
	width: 6rem;
	padding: .15rem .2rem;
	margin-top: .3rem;
	background:#fff;
	color: #e9547a;
	font-size: .3rem;
    border-bottom: 1px solid #DFDFDF;
    border-top: 1px solid #DFDFDF;
}

</style>