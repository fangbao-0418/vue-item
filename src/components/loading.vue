<template>
    <!--<div class="spinner">-->
        <!--<div class="bounce1"></div>-->
        <!--<div class="bounce2"></div>-->
        <!--<div class="bounce3"></div>-->
    <!--</div>-->
   <!--  <div class="box">
        <i></i>
    </div> -->
</template>
<script>
    import { Indicator } from 'mint-ui';
    export default {
       props:['loading'],
       mounted(){
           Indicator.open({
              text: '数据加载中',
              spinnerType: 'fading-circle'
            });
       },
       watch:{
            loading:function(val,oldVal){
                if(val){
                      Indicator.open({
                          text: '数据加载中',
                          spinnerType: 'fading-circle'
                        });
                }else{
                     Indicator.close()
                }
            } 
       },
       updated(){
         
       }
    }
</script>
<style scoped>
    .box{
        width:6.4rem;
        text-align: center;
        display: -webkit-flex; /* Safari */
        display: flex;
        background-color:transparent;
        height:100%;
        flex-direction: column;
        justify-content: center;
    }
    .box i{
       display: inline-block;
        align-self: center;
        background: url("../assets/bg-load.gif") no-repeat;
        background-size: 1.2rem 1.2rem;
        width:1.2rem;
        height:1.2rem;
        display: inline-block;
        background-color:transparent;
    }
    .spinner {
        width: 6.4rem;
        text-align: center;

    }

    .spinner > div {
        width: .20rem;
        height: .20rem;
        background-color: #ed1b23;
        border-radius: 100%;
        display: inline-block;
        -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
        animation: bouncedelay 1.4s infinite ease-in-out;
        /* Prevent first frame from flickering when animation starts */
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }

    .spinner .bounce1 {
        -webkit-animation-delay: -0.32s;
        animation-delay: -0.32s;
    }

    .spinner .bounce2 {
        -webkit-animation-delay: -0.16s;
        animation-delay: -0.16s;
    }

    @-webkit-keyframes bouncedelay {
        0%, 80%, 100% { -webkit-transform: scale(0.0) }
        40% { -webkit-transform: scale(1.0) }
    }

    @keyframes bouncedelay {
        0%, 80%, 100% {
            transform: scale(0.0);
            -webkit-transform: scale(0.0);
        } 40% {
              transform: scale(1.0);
              -webkit-transform: scale(1.0);
          }
    }
</style>