<template>
    <div>
    	<!-- nav -->
    	<div class=nav>
           <div class="column">
             <div class="goback">
                <a href=""><i class="iconfont">&#xf0292;</i></a>
             </div>
             <div class="share">
                 <a href=""><i class="iconfont">&#xe636;</i></a>
             </div>
           </div>
    	</div>
    	<!-- content -->
    	<div class="content">
          <div class="content-box">
          	<!-- content-one -->
             <div class="content-one">
               <div class="one-title">
                 <p><a href="#">轻靓减肥胶囊纯植物减肥</a></p>
               </div>
               <div class="one-info">
               	 <i>当代药医市场</i>
               	 <span>11-21 22:34</span>
               </div>
             </div>
             <!-- content-two -->
             <div class="content-two">
               <a href="#"><img src="../imgs/zs3.gif"/></a>
               <div class="two-info character">
               	 <p>批准文号:&nbsp;国食健字G20041047</p>
               	 <p>生产企业:&nbsp;陕西君力生物医药科技有限公司</p>
               	 <p>招商企业:&nbsp;陕西君力生物医药科技有限公司</p>
               	 <p>发布日期:&nbsp;2014-02-24</p>
               	 <p>更新日期:&nbsp;2016-11-15</p>
               	 <p>点击数:&nbsp;30063</p>
               </div>
             </div>	 
             <!-- content-three -->
             <div class="content-three">
               <div class="three-title titled">
                  <h3><b>商品基本信息:</b></h3>
               </div>
               <div class="three-info character">
                  <p>商品名称:&nbsp;俏模牌轻靓减肥胶囊</p>
                  <p>通用名称:&nbsp;轻靓减肥胶囊</p>
                  <p>批准文号:&nbsp;国食健字G200441047</p>
                  <p>分&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类:&nbsp;保健食品</p>
                  <p>商品剂型:&nbsp;保健食品 > 胶囊剂 > 胶囊剂</p>
                  <p>商品规格:&nbsp;12粒/板X2板/小盒X6盒</p>
                  <p>适合渠道:&nbsp;药店 第三终端 商超 网络营销</p>
                  <p>产品卖点:&nbsp;单独定价 | 独家品种</p>
               </div>
             </div>
             <!-- content-for -->
             <div class="content-four">
               <div class="four-title titled">
                 <h3><b>商品详情信息:</b></h3>
               </div>
               <div class="four-info character">
                  <p>主要原料:&nbsp;暂无(这些字段如果是暂无就不显示出来)</p>
                  <p>功效成分:&nbsp;暂无</p>
                  <p>保健功能:&nbsp;暂无</p>
                  <p>适宜人群:&nbsp;暂无</p>
                  <p>食用方法:&nbsp;暂无</p>
                  <p>注意事项:&nbsp;暂无</p>
                  <p>包&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;装:&nbsp;暂无</p>
                  <p>执行标准:&nbsp;暂无</p>
                  <p>生产许可证:&nbsp;暂无</p>
                  <p>生产厂家:&nbsp;陕西君力生物医药科技有限公司</p>
                  <p>卫生许可证号:&nbsp;暂无</p>
                  <p>产品荣誉:&nbsp;暂无</p>
               </div>
             </div>
             <!-- content-five -->
             <div class="content-five">
             	<div class="five-title titled">
                   <h3><b>联系信息信息:</b></h3>
             	</div>
             	<div class="five-info character">
                   <p>企业名称:&nbsp;陕西君力生物医药科技有限公司</p>
                   <p>联系地址:&nbsp;山西省西安市雁塔区陕西西安雁塔区太白南路</p>
                   <p>邮政编码:&nbsp;710077</p>
                   <p>联&nbsp;&nbsp;系&nbsp;&nbsp;人:&nbsp;俞女士</p>  
                   <p>电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话:&nbsp;029-88443534</p>
                   <p>手&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;机:&nbsp;15291854316 | 15291854317</p>
                   <p>传&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;真:&nbsp;029-88276719</p>  
                   <p>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱:&nbsp;sxjlsw@163.com</p>
                   <p>其&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;他:&nbsp;QQ277973482</p>                 
             	</div>
             </div>
          </div><!--content-box-->
    	</div><!--/content-->
    	<!-- footer -->
    	<div class="footer">
           <div class="footer-box">
              <div class="footer-t">
              	<div class="foot-t-box">
                    <a href="#"><i class="iconfont favour">&#xe83c;</i></a>
                    <span><a href="#">16</a></span>
                    <i class="report"><b><a href="#">举报</a></b></i>
              	</div> 
              </div>
              <div class="footer-b">
                  <div class="footer-b-box">
                     <a href="#"><i class="iconfont collect">&#xe614;</i></a>
                     <a href="#"><i class="iconfont shared">&#xe607;</i></a>
                  </div>
              </div>
           </div>
    	</div>
    </div>

</template>

<script>
    export default {
        mounted(){
            console.log(this.$route.params);
        }
    }
</script>

<style scoped>
/*nav*/
.nav{
	width:6.4rem ;
	height:.62rem;
	background: #f5f5f3; 
}

.column{
  width:5.8rem ;
	height:.26rem;
	margin: 0 auto;
	padding: .18rem 0;
}

.column i{
  font-size: .4rem;
  line-height: .26rem;
}


.goback{
	float:left;
}

.share{
	float:right;	
}

/*content*/
.content{
	width:6.4rem;
  background: #fff;
}

.content-box{
	width:5.8rem;
	margin: 0 auto;
}

.content-one{
	width:5.8rem;
	padding: .3rem 0;
	line-height: 0.6rem;
}

.content-one p{
	font-size: .35rem;
}

.one-info{
	width:5.8rem;
	line-height: 0.3rem;
	color: #6d6d6d;
	font-size: .2rem;
}

/*content-two*/
.content-two{
	width:5.8rem;
}

.content-two a img{
  width:5.8rem;
}

.two-info{
  width:5.8rem;
  margin: .31rem 0  .15rem 0;
  border-bottom: 1px solid #d7d7d7;
}

.character p{
	font-size:.27rem!important;
	color:#4f4f4f;
	padding: .032rem 0;
}

.character p:last-child{
  margin-bottom: .15rem;  
}

/*content-three*/
.content-three{
  width:5.8rem;
  margin: .14rem 0 .16rem 0;
  border-bottom: 1px solid #d7d7d7;
}

.titled h3{
	font-size: .25rem;
}

/*content-four*/
.content-four{
  width:5.8rem;
  margin: .1rem 0;
  border-bottom: 1px solid #d7d7d7;
}

/*content-five*/
.content-five{
  width:5.8rem;
  padding: .16rem 0 .31rem 0;
}

/*footer*/
.footer{
	width: 6.4rem;
  background: #fff;
}


.footer-t{
  width: 5.8rem;
	padding-bottom: .2rem;
	border-bottom:1px solid #e9e9e9;
  margin: 0 auto;
}

.foot-t-box{
  width: 5.8rem;
	padding: .12rem 0;
}


.foot-t-box i{
  display: inline-block;
}

.favour{
  float: left;
  font-size: .36rem;
  line-height: .35rem;
  padding-right: .1rem;
}

.report{
  float: right;
  font-size: .25rem;
  line-height: .38rem;
}

.foot-t-box span{
	font-size: .2rem;
	line-height: .42rem;
}


.footer-b{
	width: 6.4rem;
	background:#f5f5f3;
  border-top: 1px solid #e9e9e9;
}

.footer-b-box{
  width: 5.8rem;
  margin: 0 auto;
}


.footer-b-box i{
  float: right;
  font-size: .3rem;
  line-height: .62rem;
}

.collect{
  padding-left: .4rem;
}

</style>