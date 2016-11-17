

<template>
 <div class="white-box">
     <!-- content1-->
     <div class="one">
         <div class="one-left">
             <div class="title one-title">
                 <h2><a>坚持十个小习惯变身健康瘦美人</a></h2>
             </div>
             <div class="one-info info">
                 <ul>
                     <li><a href="#" target="_blank"><span class="Druge">药品</span></a></li>
                     <li><a href="#" target="_blank"><span class="click">1365点击</span></a></li>
                     <li><a href="#" target="_blank"><span class="time">24小时前</span></a></li>
                 </ul>
             </div>
         </div>
         <div class="one-right">
             <a href="#" target=""><img src="../imgs/shouye_03.gif" /></a>
         </div>
     </div><!-- /content1-->
     <!-- content2-->
     <div class="two">
         <div class="title two-title">
             <h2><a>OEM贴牌加工松针油软胶囊</a></h2>
         </div>
         <div class="two-img img2">
             <a href="#"><img src="../imgs/shouye_09.gif"/></a>
             <a href="#"><img class="two-img2" src="../imgs/shouye_09.gif"/></a>
             <a href="#"><img src="../imgs/shouye_09.gif"/></a>
         </div>
         <div class="info">
             <ul>
                 <li><a href="#" target="_blank"><span class="Druge">药品</span></a></li>
                 <li><a href="#" target="_blank"><span class="click">1365点击</span></a></li>
                 <li><a href="#" target="_blank"><span class="time">24小时前</span></a></li>
             </ul>
         </div>
     </div><!-- /content2-->
     <!-- content3-->
     <div class="three">
         <div class="title two-title">
             <h2><a>OEM贴牌加工松针油软胶囊</a></h2>
         </div>
         <div class="three-img img2">
             <a href="#"><img src="../imgs/shouye_16.gif"/></a>
         </div>
         <div class="info">
             <ul>
                 <li><a href="#" target="_blank"><span class="Druge">药品</span></a></li>
                 <li><a href="#" target="_blank"><span class="click">1365点击</span></a></li>
                 <li><a href="#" target="_blank"><span class="time">24小时前</span></a></li>
             </ul>
         </div>
     </div><!-- /content3-->
     <my-footer></my-footer>
 </div>
</template>

<script>
    import footer from './footer.vue';
    export default {
        data () {
            return {
                msg: "首页"
            }
        },
        components: {
            'my-footer':footer
        }
    }
</script>
<style scoped>
.white-box{
    width: 6.4rem;height: 9rem;
    background: #fff;
    margin: 0 auto;
}
/*content1*/
.one{
    width:5.8rem ;height: 1.2rem;
    /*background: yellow;*/
    margin:0  auto;
    padding: .3rem 0 .2rem 0 ;
    border-bottom: 1px solid #e7e7e7;
}

.one-left{
    width: 3.6rem;height:1.2rem ;
    float: left;
    /*background: olive;*/
}

.one-title{
    width:3.6rem ;height: .75rem;
    /*background: palegoldenrod;*/
}

.title h2{
   font-size: .3rem;
}

.info{
    width:3.5rem ;height:.22rem ;
    line-height: .22rem;
}

.info li{
    display: block;
    float:left;
}

.one-info{
    padding: .25rem 0 .1rem 0;
}

.Druge{
    font-size: .18rem;
    padding: .03rem;
    border: 1px solid #13b5f3;
    color: #13b5f3;
    border-radius: .06rem;
    display: inline-block;
    text-align: center;
    line-height: .2rem;
}

.click,.time{
    font-size: .22rem;
    color: #8a8a8a;
}

.click{
    padding: 0 .24rem 0 .17rem ;
}
.one-right{
    width:1.8rem ;height: 1.2rem;
    float: right;
}

.one-right img{
    width:1.8rem ;height: 1.2rem;
}

.two{
    width:5.8rem ;height:2.08rem ;
    /*background: palevioletred;*/
    margin: 0 auto;
    padding: .25rem 0 .25rem 0;
    border-bottom: 1px solid #e7e7e7;
}

.two-img{
    width: 5.8rem;height: 1.23rem;
    /*background: purple;*/
    padding: .15rem 0 .21rem 0;
}

.img2{
    padding: .15rem 0 .20rem 0;
}
.two-img img{
    display: block;
    float: left;
    width:1.9rem ;height: 1.23rem;
}

.two-img2{
    margin: 0 .05rem 0 .05rem;
}

.three{
    width:5.8rem ;height: 3.7rem;
    /*background: olive;*/
    margin: 0 auto;
    padding: .33rem 0 .28rem 0;
    border-bottom: 1px solid #e7e7e7;
}

.three-img{
    width:5.8rem ;height:2.84rem ;

}

.three-img img{
    width:5.8rem ;height:2.84rem ;
}

</style>
