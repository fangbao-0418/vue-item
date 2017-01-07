<template>
    <div class="navigate">
        <div class="column">
            <div class="goback">
                <i @click="goBack"></i>
            </div>
            <collect-icon v-if="needCollect" class="collect" :moduleid="moduleid" :id="id" ></collect-icon>
            <div class="share">
                <i @click="shared" class="iconfont">&#xe648;</i>
            </div>
        </div>
        <app-share :show="isOpen"></app-share>
    </div>
</template>
<script>
    import share from './shared.vue';
    import collectIcon from './common/collectIcon.vue';

    export default {
        props:{
            needCollect:{
                default:true
            },
            path:{
                default:null
            },
            moduleid:{default:null},
            id:{}
        },
        data(){
            return {
                isOpen:false,                         
            }
        },
      
        computed:{
           
        },
        components:{
            'app-share':share,
            collectIcon
        },
        methods:{
                   
            shared(){
                this.isOpen = true;
            },
          
            
            goBack(){
                if(this.path){
                    console.log(this.path);
                    this.$router.push(this.path);
                }else{
                    this.$router.go(-1);
                }                
            }
        }
    }
</script>
<style lang="sass" scoped>
    /*nav*/
    .navigate{
        position: fixed;
        top:0;
        z-index: 999999;
        width:6.4rem ;
        height:.8rem;
        background: #f5f5f3;
        .column{
            position: relative;
            width:5.8rem ;
            height:.8rem;
            margin: 0 .3rem;          
            .goback{
                position: absolute;
                left:0;
                top:.19rem;
                display: inline-block;
                i{
                    width:.22rem;
                    height:.42rem;                  
                    color:#000;                   
                    background: url("../image/left-back.png");
                    background-size: .22rem .42rem;
                    display: inline-block;
                }
            } 
            .collect{
                position:absolute;
                top:.16rem;
                right:.8rem;             
                display: inline-block;
            }
            .share {
                display: inline-block;
                position: absolute;
                right:0;
                top:.08rem;
                i{      
                    font-size:.5rem;
                    color:#999;
                }
            }
        }
    }

   
 

   

   
   
</style>