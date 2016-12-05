<style>
</style>
<template>
	<div class="myset-area" >
		<my-nav theme="white" title="设置"></my-nav>
		<div class="myset-main">
				<ul>
				<router-link :to="{path:'/my/infoedit'}" tag="li">
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
		<div class="logout">
			<span>退出登录</span>
		</div>
	</div>
</template>
<script>
	import blackNav from '../blackNav';
	export default {
		data(){
			return {
				status:false
			}
		},
		components:{
			'my-nav':blackNav
		},
		methods:{
			
		}
	}
</script>

<style lang="sass" scoped>
.myset-main{
	background: #fff;
    width: 6rem;
    padding:0 .2rem;
	margin-top: .3rem;
    border-bottom: 1px solid #cdcdcd;
    border-top: 1px solid #cdcdcd;
	li{
		list-style: none;
		font-size: .25rem;
		padding: .19rem 0;
	}
	li:nth-child(1){
		border-bottom:1px solid #e8e8e8;
	}
	li:nth-child(2){
		border-bottom:1px solid #e8e8e8;
	}
	i{
		float: right;
		color:#c3c3c3;
		font-size: .35rem;
		line-height: 1;
		-moz-transform:rotate(180deg); -webkit-transform:rotate(180deg);transform:rotate(180deg);
	}
}

.logout{
	text-align: center;
	width: 6rem;
	padding: .15rem .2rem;
	margin-top: .3rem;
	background:#fff;
	color: #e9547a;
	font-size: .26rem;
    border-bottom: 1px solid #cdcdcd;
    border-top: 1px solid #cdcdcd;
}

</style>