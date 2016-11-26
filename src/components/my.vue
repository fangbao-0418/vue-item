<template>
	<div class="my-main">
		<!-- header -->
	    <div class="header" >
	       <div class="header-logo">
	         <a><img src="../imgs/tx.jpg"/></a>
	       </div>
	       <div class="header-title">
	        当代药物市场
	       </div>
	    </div>
	    <!--/header -->
	    <!-- content -->
	    <div class="content">
	    <!-- nav -->
	      <div class="nav-ifo">
			<div class="nav">
			  <div class="left nav-box">
			     <div class="nav-tu left-nav-tu">
                   <img src="../imgs/nav1.gif"/>
			     </div>
			     <div class="nav-ti left-nav-tu">
			     	<span>收藏</span>
			     </div>
			  </div>
			  <div class="mide nav-box" @click="setlight">
			     <div class=nav-tu>
			       <img src="../imgs/nav2.gif"/>
			   	 </div>
			     <div class="nav-ti">
                    <span>夜间</span>
			     </div>
			  </div>
			  <div class="right nav-box">
			     <div class="nav-tu">
                      	<img src="../imgs/nav3.gif"/>
			     </div>
			     <div class="nav-ti">
                     <span>设置</span>
			     </div>
			  </div>
			</div>
	      </div>		
	     <!-- /nav -->
	     <!-- detal-->
	     <div class="detal">
            <div class="jf detal-box">
                <span>我的积分</span>
                <div class="jt">
                   <i class="iconfont">&#xe604;</i>
                </div>
            </div>
	        <div class="vip detal-box">
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
	export default {
		components:{
			'my-footer':footer
		},
		methods:{
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
	left:2.4rem;
	border-radius:50% 50%;
	width: 1.45rem;
	height:1.45rem;
	background:#fff;
}

.header-logo img{
	border-radius:50% 50%;
    margin-left:.05rem;
    margin-top:.05rem ;
    width: 1.35rem;
    height: 1.35rem;	
}
   
.header-title{
   position: absolute;
   bottom: .72rem;
   left:2.4rem;
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
	border-bottom: 1px solid #e8e8e8;
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
	border-left: 1px solid #e8e8e8;
	border-right: 1px solid #e8e8e8;
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
	border-bottom: 1px solid #e8e8e8;
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
