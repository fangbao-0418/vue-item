<template>
    <transition name="slide-fade">
<div v-show="show" class="shared-modal"  @click.stop.prevent="shutdown">

      

    <transition name="toggle">
    <div class="h5share_panel">
        <div class="item wxzone">
            <i class="iconfont">&#xe631;</i>
            <span>朋友圈</span>
        </div>
        <div class="item qzone">
            <i class="iconfont">&#xe611;</i>
            <span>QQ空间</span>
        </div>
        <div class="item wx">
            <i class="iconfont">&#x3433;</i>
            <span>微信</span>
        </div>
        <div class="item wb">
            <i class="iconfont">&#xe60a;</i>
            <span>微博</span>
        </div>
    </div>
    </transition>
    <div class="share_shutdown" @click.stop.prevent="shutdown"><span>取消</span></div>
</div>
    </transition>
</template>
<script>
    export default {
        props:{
            show: {
            type: Boolean,
            required: true,
            twoWay: true}
        },

        data(){
            return{

            }
        },
        methods:{
            shutdown(){
                this.$parent.isOpen = false;
            }
        }
    }
</script>
<style lang="sass" scoped>
    .shared-modal{
        width:6.4rem;
        z-index: 999999;
        background: rgba(0,0,0,0.6);
        position: fixed;
        bottom:0;
        height:100%;
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-active {
        padding-left: 10px;
        opacity: 0;
    }
        .toggle-enter-active {
            height: 0;
        }
        .toggle-leave-active {
            height: 3rem;
        }
        .toggle-enter, .toggle-leave-active {
            height: 3rem;
        }
        .h5share_panel{

            width: 100%;
            background-color: #e6e6e6;
            border-bottom: 1px solid #dcdcdc;
            font-size: 0;
            margin: 0;
            padding: .5rem 0 0;
            box-sizing: border-box;
            position: absolute;
            bottom: .96rem;
            .item{
                width: .98rem;
                display: inline-block;
                text-align: center;
                margin: .25rem 0 .25rem .48rem;
            }
            .item i{
                height: .98rem;
                line-height: .98rem;
                width: .98rem;
                border-radius: .5rem;
                border: 1px solid #eee;
                background-color: #fff;
                display: inline-block;
                text-align: center;
                margin-bottom:.2rem;
                -webkit-tap-highlight-color: rgba(0,0,0,0);
                vertical-align: middle;
                display: block;
                font-size: .5rem;
            }
            .item span{
                display: block;
                font-size: .2rem;
            }
            .qzone i{
                color: #4c9aea;
            }
            .wx i{
                color:#0ca726;
            }
            .wxzone i {
                color:#0ca726;
            }
            .wb i {
                color: #f90;
            }
        }
        .share_shutdown {
            width: 100%;
            height: .96rem;
            background-color: #fff;
            position: absolute;
            bottom: 0;
            text-align: center;
            padding-top: .28rem;
            box-sizing: border-box;
            span{
                font-size: .32rem;
                color: #333;
            }
        }
    }
</style>