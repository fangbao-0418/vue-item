<template>
    <div class="navigate">
        <div class="column">
            <div class="goback">
                <i @click="goBack"></i>
            </div>
            <div class="collect">
                <i @click="collect" class="iconfont">&#xe68a;</i>
            </div>
            <div class="share">
                <i @click="shared" class="iconfont">&#xe648;</i>
            </div>
        </div>
        <app-share :show="isOpen"></app-share>
    </div>
</template>
<script>
    import share from './shared.vue';
    export default {
        props:{
            path:{
                default:null
            }
        },
        data(){
            return {
                isOpen:false,
            }
        },
        components:{
            'app-share':share,
        },
        methods:{
            shared(){
                this.isOpen = true;
            },
            collect(){

            },
            goBack(){
                if(this.path){
                    this.$router.push(this.path);
                }else{
                    this.$router.go(-1);
                }                
            }
        }
    }
</script>
<style>
    /*nav*/
    .navigate{
        position: fixed;
        top:0;
        z-index: 999999;
        width:6.4rem ;
        height:.8rem;
        background: #f5f5f3;
    }

    .column{
        position: relative;
        width:5.8rem ;
        height:.26rem;
        margin: 0 auto;
        padding: .18rem 0;
    }

    .column i{
        font-size: .4rem;
        line-height: .26rem;
    }


    .goback i{
        width:.22rem;
        height:.42rem;
        position: absolute;
        left:0;
        color:#000;
        top:.19rem;
        background: url("../image/left-back.png");
        background-size: .22rem .42rem;
        display: inline-block;
    }

    .share i{
        position: absolute;
        font-size:.5rem;
        right:0;
        top:.28rem;
        color:#999;
    }
    .collect i{
        position: absolute;
        font-size:.4rem;
        right:.8rem;
        top:.28rem;
        color:#999;
    }
</style>