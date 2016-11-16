

<template>

    <div class="footer">
        <router-link :to="{path:'/home'}" active-class='on' class="home">

                <router-link tag="i"  :to="{path:'/home'}" active-class='cur'>

                </router-link>

            <span>首页</span>
        </router-link>

        <router-link :to="{path:'/video'}" active-class='on' class="video">

                <router-link tag="i"  :to="{path:'/video'}" active-class='cur'>

                </router-link>

            <span>视频</span>
        </router-link>

        <router-link  :to="{path:'/my'}" active-class='on' class="my">

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
<style scoped>
    .footer{
        background-color: #f4f5f6;
        width:6.4rem;
        position: fixed;
        bottom: 0px;
        padding:.08rem 0px;
    }
    .footer .home{
        margin-left: .56rem;
        float: left;
        width:1rem;

        text-align: center;
        cursor: pointer;
    }
    .footer .home i{

        background: url("../image/home_icon.png");
        width:.40rem;
        height: .40rem;
        display: inline-block;
        background-size: .40rem .40rem;
    }
    .footer .home .cur{

        background: url("../image/home_icon_on.png");
        width:.40rem;
        height: .40rem;
        display: inline-block;
        background-size: .40rem .40rem;
    }


    .footer .video{
        margin-left:1.2rem;
        float: left;
        width:1rem;

        text-align: center;
        cursor: pointer;
    }
    .footer .video .cur{

        background: url("../image/video_icon_on.png") no-repeat;
        width:.40rem;
        height: .40rem;
        display: inline-block;
        background-size: .38rem .38rem;
        background-position: center;
    }
    .footer .video i{

        background: url("../image/video_icon.png") no-repeat;
        width:.40rem;
        height: .40rem;
        display: inline-block;
        background-position: center;
        background-size: .38rem .38rem;
    }


    .footer .my{
        margin-left: 1.2rem;
        float: left;
        width:1rem;

        text-align: center;
        cursor: pointer;
    }
    .footer .my i{

        background: url("../image/my_icon.png");
        width:.40rem;
        height: .40rem;
        display: inline-block;
        background-size: .40rem .40rem;
    }
    .footer .my .cur{
        background: url("../image/my_icon_on.png");
        width:.40rem;
        height: .40rem;
        display: inline-block;
        background-size: .40rem .40rem;
    }

     .footer span{
         display: block;
         width: 1rem;
         font-size: .22rem;
         color: #4c4c4c;
     }
    .footer .on span{
        display: block;
        width: 1rem;
        font-size: .22rem;
        color: #ed1b23;
    }
</style>
