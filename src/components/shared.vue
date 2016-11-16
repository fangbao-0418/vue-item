<template>
<div class="shared-modal">
    <div class="h5share_panel">
        <i class="iconfont">&#xebe0;</i>
    </div>
    <div class="share_shutdown"><span>取消</span></div>
</div>
</template>
<style lang="sass" scoped>
    .shared-modal{
        width:6.4rem;
        z-index: 999999;
        background: rgba(0,0,0,0.6);
        position: fixed;
        bottom:0;
        height:100%;
        .h5share_panel{
            height: 3rem;
            width: 100%;
            background-color: #e6e6e6;
            border-bottom: 1px solid #dcdcdc;
            font-size: 0;
            margin: 0;
            padding: .75rem 0 0;
            box-sizing: border-box;
            position: absolute;
            bottom: .96rem;
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