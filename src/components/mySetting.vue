<style>
</style>
<template>
	<div class="myset-area" >
		<my-nav theme="white" title="设置"></my-nav>
		<div class="myset-main">
				<ul>
				<li>
					<span>个人资料修改</span>
					<i>&gt;</i>
				</li>
				<li>
					<span>签到提醒</span>
					<i><el-switch v-model="status" on-text="" off-text="" @change="passwdstatus"></el-switch></i>
				</li>
				<li>
					<span>意见反馈</span>
					<i>&gt;</i>
				</li>
			</ul>
		</div>
		<div class="logout">
			<span>退出登录</span>
		</div>
	</div>
</template>
<script>
	import blackNav from './blackNav';
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
			passwdstatus(){
				this.passwdtype = this.passwdtype == "password" ? "text" : "password";
			},
		}
	}
</script>

<style lang="sass" scoped>
.myset-main{
	background: #fff;
    width: 6rem;
    padding:0 .2rem;
	margin-top: .2rem;
    border-bottom: 1px solid #cdcdcd;
}

.myset-main li {
	list-style: none;
	font-size: .25rem;
	padding: .15rem 0;
}

.myset-main i {
	float: right;
	color:#c3c3c3;
	font-size: .35rem;
	line-height: 1;
}

.logout{
	text-align: center;
	width: 6rem;
	padding: .15rem .2rem;
	margin-top: .2rem;
	background:#fff;
	color: #e9547a;
	font-size: .26rem;
    border-bottom: 1px solid #cdcdcd;
}





</style>