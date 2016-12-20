

<template>

    <ul class="footer">


        <router-link :to="{path:'/home'}" active-class='on' class="home" tag="li">

                <router-link tag="i"  :to="{path:'/home'}" active-class='cur'>

                </router-link>

            <span>首页</span>
        </router-link>

        <router-link :to="{path:'/product'}" active-class='on' class="product" tag="li">

                <router-link tag="i"  :to="{path:'/product'}" active-class='cur'>

                </router-link>

            <span>产品</span>
        </router-link>

        <router-link :to="{path:'/video'}" active-class='on' class="video" tag="li">

                <router-link tag="i"  :to="{path:'/video'}" active-class='cur'>

                </router-link>

            <span>视频</span>
        </router-link>

        <router-link  :to="{path:'/my'}" active-class='on' class="my" tag="li">

                <router-link tag="i" :to="{path:'/my'}" active-class='cur'>

                </router-link>

            <span>我的</span>
        </router-link>



    </div>
</template>

<script>

    export default {
        data () {
            return {
                msg: "首页"
            }
        },
        components: {


        }
    }
</script>
<style lang="sass" scoped>
    .footer{
        background-color: #f4f5f6;
        width:6.4rem;        
        padding:.08rem 0px;
        justify-content: flex-end;
         li {
                width:25%;
        }
        .home{           
            float: left;
           
            text-align: center;
            cursor: pointer;
            i{
                background: url("../image/home_iconx56.png");
                width:.40rem;
                height: .40rem;
                display: inline-block;
                background-size: .40rem .40rem;
            }
            .cur{
                background: url("../image/home_icon_onx56.png");
                width:.40rem;
                height: .40rem;
                display: inline-block;
                background-size: .40rem .40rem;
            }
        }
        .product{
           
            float: left;
          
            text-align: center;
            cursor: pointer;
             i{
                background: url("../image/product_iconx56.png");
                width:.40rem;
                height: .40rem;
                display: inline-block;
                background-size: .40rem .40rem;
            }
            .cur{
                background: url("../image/product_icon_onx56.png");
                width:.40rem;
                height: .40rem;
                display: inline-block;
                background-size: .40rem .40rem;
            }
        }
        .video{
          
            float: left;
           
            text-align: center;
            cursor: pointer;
            .cur{
                background: url("../image/video_icon_onx56.png") no-repeat;
                width:.40rem;
                height: .40rem;
                display: inline-block;
                background-size: .38rem .38rem;
                background-position: center;
            }
            i{
                background: url("../image/video_iconx56.png") no-repeat;
                width:.40rem;
                height: .40rem;
                display: inline-block;
                background-position: center;
                background-size: .38rem .38rem;
            }
        }
      
        .my{
            float: left;
            text-align: center;
            cursor: pointer;
            i{
                background: url("../image/my_iconx56.png");
                width:.40rem;
                height: .40rem;
                display: inline-block;
                background-size: .40rem .40rem;
            }
            .cur{
                background: url("../image/my_icon_onx56.png");
                width:.40rem;
                height: .40rem;
                display: inline-block;
                background-size: .40rem .40rem;
            }
        }
       
        span{
             display: block;
         
             font-size: .22rem;
             color: #4c4c4c;
         }
        .on span{
            display: block;
          
            font-size: .22rem;
            color: #ed1b23;
        }
    }
  
    

  
 
  
</style>
