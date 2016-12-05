<template>
	<div class="my-main">
		<!-- header -->
	    <div class="header" >
	       <div class="header-logo">
	         <img :src="userinfo.avatar"/>
	       </div>
	       <div class="header-title">
	        {{userinfo.username}}
	       </div>
	    </div>
	    <!--/header -->
	    <!-- content -->
	    <div class="content">
	    <!-- nav -->
	      <div class="nav-ifo">
			<div class="nav">
			  <router-link  class="left nav-box"  :to="{name:'collect'}" tag="div">
			     <div class="nav-tu left-nav-tu">
                   <img src="../imgs/nav1.gif"/>
			     </div>
			     <div class="nav-ti left-nav-tu">
			     	<span>收藏</span>
			     </div>
			  </router-link >
			  <div class="mide nav-box" @click="setlight">
			     <div class=nav-tu>
			       <img src="../imgs/nav2.gif"/>
			   	 </div>
			     <div class="nav-ti">
                    <span>夜间</span>
			     </div>
			  </div>
			  <router-link class="right nav-box"  :to="{name:'mySetting'}" tag="div">
			     <div class="nav-tu">
                      	<img src="../imgs/nav3.gif"/>
			     </div>
			     <div class="nav-ti" >
                     <span>设置</span>
			     </div>
			  </router-link>
			</div>
	      </div>		
	     <!-- /nav -->
	     <!-- detal-->
	     <div class="detal">
            <router-link class="jf detal-box" :to="{name:'integral'}" tag="div">
                <span>成长值明细</span>
                <div class="jt">
                   <i class="iconfont">&#xe604;</i>
                </div>
            </router-link>
	        <div class="vip detal-box" @click="error">
                <span>升级VIP</span>
	        </div>
	        <div class="zh detal-box"  @click="loginout">
                <span class="zh">退出账户</span>
	        </div>
	     </div>
	     <!-- /detal -->
        </div>


	    <my-footer></my-footer>

	</div>

    


  
    

    
</template>
<script>
	import footer from './footer.vue';
	import { Toast } from 'mint-ui';
	import serverapi from '../serverapi';
	export default {
		data(){
			return {
				userinfo:{
					username:null
				}
			}
		},
		components:{
			'my-footer':footer
		},
		mounted(){

			this.loadData();
		
		},
		methods:{
			loadData(){
				var url = serverapi.info;
				var body = {token:localStorage.token};
				var option = {emulateJSON:true};
				this.$http.post(url,body,option).then((res) => {
					console.log(res);
					this.userinfo = res.body;
					
				})
			},
			loginout(){
				localStorage.removeItem('token');
				this.$router.push({path:'/login'})
			},
			setlight(){
				if(localStorage.currentlight){
					localStorage.removeItem("currentlight");
					$('.app-shade').css({"width":'6.4rem',"height":'100%',"background-color":"rgba(0,0,0,0)"});	
				}else{
					localStorage.currentlight = "black";
					$('.app-shade').css({"width":'6.4rem',"height":'100%',"background-color":"rgba(0,0,0,0.5)"});	
				}				
			},
			error(){
				Toast({
				  message: 'sorry,该功能暂未开放',
				  position: 'bottom',
				  duration: 5000
				});
			}
		}
	}

</script>

<style lang="sass" scoped>
@import "../css/common.scss";					  //全局css样式
.my-main{
	padding-bottom:1rem;
}
.header{
	background: url("../imgs/header.jpg");
	width:6.4rem;
	height:3.28rem;
	background-size: 6.4rem 3.28rem;
	position:relative;
}

.header img{
	width: 6.4rem;
}

.header-logo{
	position: absolute;
	top:.6rem;
	border-radius:50% 50%;
	left:2.47rem;
	width: 1.46rem;
	height:1.46rem;
	background:#fff;
}

.header-logo img{
	border-radius:50% 50%;
    margin-left:.05rem;
    margin-top:.05rem ;
    width: 1.36rem;
    height: 1.36rem;	
}
   
.header-title{
   position: absolute;
   bottom: .72rem;
   width: 100%;
   text-align: center;
   font-size: .25rem;
  
}   

.header-title {
  color: #fff;
} 



/*content*/

.content{
	width: 6.4rem;

    margin: 0 auto;
	background:#fff;
}
/*nav*/

.nav-ifo{
	width: 6.4rem;
	height:1.25rem ;
	background:#fff;	
	border-bottom: 1px solid #fafafa;
}

.nav{
	width:5.8rem; 
	height:1.25rem;	 
	padding: 0 .3rem;
}

.nav-box{
	width:1.9rem;
	height: 1.24rem;
	float: left;
	position: relative;
}


.mide{
	width:2rem ;
	height:1.24rem;
	box-sizing:border-box;
	border-left: 1px solid #fafafa;
	border-right: 1px solid #fafafa;
}


.nav-box img{
	width:.46rem;
	height:.43rem;
}


.left,.mide,.right{
	position: relative;
}

.nav-tu{
	position: absolute;
	left:40%;
	top: .19rem;
}


.nav-ti{
	position: absolute;
	bottom: .17rem;
	left: 40%;
}


.left-nav-tu{
	position: absolute;
	left:28%!important;
}

.nav-ti span{
	font-size: 0.22rem;

}

/*detal*/
.detal{
	width:5.8rem ;
	height: 2.58rem;
	padding-top:.3rem;
	margin: 0 auto;
}


.detal-box{
	width:5.8rem; 
	height: .85rem;
	border-bottom: 1px solid #fafafa;
	line-height: .85rem;
}

.detal-box span{
	font-size:.3rem; 
    float:left;
}


.zh{
	color: #ed1b23;
}

.jt{	
	i{
		float: right;
		font-size:.4rem;
		@include  rotate(180deg);
	}
}
</style>
