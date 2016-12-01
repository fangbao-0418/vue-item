<template>
    <div class="navigate">
        <div class="column">
            <div class="goback">
                <i @click="goBack"></i>
            </div>
            <div class="collect">
                <i v-if="!collected" @click="collect" class="iconfont">&#xe68a;</i>
                <i v-else @click="collect" class="iconfont collected"> &#xe600;</i>               
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

    import auth from '../auth.js';
    
    import { Toast } from 'mint-ui';

    export default {
        props:{
            path:{
                default:null
            },
            moduleid:{default:null},
            id:{}
        },
        data(){
            return {
                isOpen:false,  
                collected:false              
            }
        },
        created(){
            this.iscollected();          
        },
        computed:{
           
        },
        components:{
            'app-share':share,
        },
        methods:{
            iscollected(){
                var _this = this;
                 auth.getUserInfo().then((info)=>{
                    if(info){                       
                        var url = "http://www.ey99.com/api/mobile/collect.php";
                        var option = {params:{moduleid:this.moduleid,itemid:this.id,userid:info.userid,type:"get"},emulateJSON:true};
                        _this.$http.post(url,[],option).then((res)=>{                           
                             _this.collected = res.body.res;
                        })
                    }else{
                        _this.collected = false;
                    }
                },()=>{ _this.collected = false; });    
            },           
            shared(){
                this.isOpen = true;
            },
            collect(){                             
                var _this = this;
                auth.getUserInfo().then((info)=>{                  
                    if(info){
                        var url = "http://www.ey99.com/api/mobile/collect.php";
                        var option = {params:{type:"set",moduleid:this.moduleid,itemid:this.id,userid:info.userid},emulateJSON:true};
                        _this.$http.post(url,[],option).then((res)=>{
                            if(res.body.res){
                                _this.collected = true;   
                            }
                        });
                    }else{
                        Toast({
                          message: '请先登录',
                          position: 'bottom',
                          duration: 5000
                        });
                    }
                },()=>{
                     Toast({
                          message: '请先登录',
                          position: 'bottom',
                          duration: 5000
                        });
                });
            },
            
            goBack(){

                this.$router.go(-1);

                // if(this.path){
                //     console.log(this.path);
                //     this.$router.push(this.path);
                // }else{
                //     this.$router.go(-1);
                // }                
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
    .collect .collected{
        color:#FF3333;
    }
</style>