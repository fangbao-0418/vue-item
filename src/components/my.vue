<template>
	<div>
		<!-- header -->
	    <div class="header">
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
                   <a href="#"><img src="../imgs/nav1.gif"/></a>
			     </div>
			     <div class="nav-ti left-nav-tu">
			     	<a href="#">收藏</a>
			     </div>
			  </div>
			  <div class="mide nav-box">
			     <div class=nav-tu>
			       <a href="#"><img src="../imgs/nav2.gif"/></a></div>
			     <div class="nav-ti">
                    <a href="#">夜间</a>
			     </div>
			  </div>
			  <div class="right nav-box">
			     <div class=nav-tu>
                      <a href="#"><img src="../imgs/nav3.gif"/></a>
			     </div>
			     <div class="nav-ti">
                     <a href="#">设置</a>
			     </div>
			  </div>
			</div>
	      </div>		
	     <!-- /nav -->
	     <!-- detal-->
	     <div class="detal">
            <div class="jf detal-box">
                <a href="">我的积分</a>
                <div class="jt">
                   <a href="#"><img src="../imgs/jt.gif"/></a>
                </div>
            </div>
	        <div class="vip detal-box">
                <a href="">升级VIP</a>
	        </div>
	        <div class="zh detal-box">
                <a href=""><span class="zh">退出账户</span></a>
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
		}
	}

</script>

<style scoped>

.header{
	background: url("../imgs/header.jpg");
	width:6.4rem;
	height:3.28rem;
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
	margin: 0 auto;
	padding: 0 0.3rem;
}

.nav-box{
	width:1.8rem;
	height: 1.24rem;
	float: left;
	position: relative;
}


.mide{
	width:2.1rem ;
	height:1.24rem;
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

.nav-ti a{
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

.detal-box a{
	font-size:.3rem; 
    float:left;
}


.zh{
	color: #ed1b23;
}

.jt{
	float: right;
}
</style>
