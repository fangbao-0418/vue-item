

<template>

    <div class="footer">
        <div v-link="{path:'/home', activeClass: 'on'}" class="home on">
            <i v-link="{path:'/home', activeClass: 'cur'}"></i>
            <span>首页</span>
        </div>
        <div v-link="{path:'/video', activeClass: 'on'}" class="video on">
            <i v-link="{path:'/video', activeClass: 'cur'}"></i>
            <span>视频</span>
        </div>
        <div v-link="{path:'/my', activeClass: 'on'}" class="my">
            <i v-link="{path:'/my', activeClass: 'cur'}" ></i>
            <span>我的</span>
        </div>
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
    .footer .home span{
        display: inline-block;
        width: 1rem;
        font-size: .22rem;
        color: #4c4c4c;
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
    .footer .video span{
        display: inline-block;
        width: 1rem;
        font-size: .22rem;
        color: #4c4c4c;
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
     .footer .my span{
         display: inline-block;
         width: 1rem;
         font-size: .22rem;
         color: #4c4c4c;
     }
    .footer .on span{
        display: inline-block;
        width: 1rem;
        font-size: .22rem;
        color: #ed1b23;
    }
</style>
