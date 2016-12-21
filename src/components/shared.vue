<template>






        <transition name="slide-fade">


                <div v-show="show" class="shared-modal"  @click.stop.prevent="shutdown">



                <div class="h5share_panel" @click.stop.prevent="">
                    <div class="item wxzone">
                        <a class="jiathis_button_douban">
                            <i class="iconfont">&#x3440;</i>
                            <span>豆瓣</span>
                        </a>
                    </div>
                    <div class="item qzone">
                        <a class="jiathis_button_qzone">
                            <i class="iconfont ">&#xe7dc;</i>
                            <span>QQ空间</span>
                        </a>
                    </div>
                    <!--<div class="item qq">-->
                        <!--<a class="jiathis_button_cqq" >-->
                            <!--<i class="iconfont ">&#xe607;</i>-->
                            <!--<span>QQ好友</span>-->
                        <!--</a>-->
                    <!--</div>-->
                    <div class="item wb">
                        <a class="jiathis_button_tsina">
                            <i class="iconfont">&#x3436;</i>
                            <span>新浪</span>
                        </a>
                    </div>
                </div>
                <div class="share_shutdown" @click.stop.prevent="shutdown"><span>取消</span></div>
            </div>


        </transition>



    </template>
 
    <script>

        import sha1 from '../js/sha1.js';

        export default {
            props:{
                show: {
                type: Boolean,
                required: true,
                twoWay: true}
            },
            computed:{
                isShow(){}
            },
            create(){

            },
            mounted(){     

               
                var _this = this;
                $(document).ready(function(){
                    var oHead = document.getElementsByTagName('HEAD').item(0); 
                    var oScript= document.createElement("script"); 
                    oScript.type = "text/javascript"; 
                    oScript.src="http://v3.jiathis.com/code/jia.js"; 
                    oHead.appendChild(oScript); 


                    var oHead = document.getElementsByTagName('HEAD').item(0); 
                    var oScript= document.createElement("script"); 
                    oScript.type = "text/javascript"; 
                    oScript.src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"; 
                    oHead.appendChild(oScript);                     

                    
                    _this.wxapi();
                  


//                     VueScript2.load('http://v3.jiathis.com/code/jia.js').then(function () {
//   $('#msg').text('Hello from VueScript2!')
// })

                })
            },
            data(){
                return{

                }
            },
            methods:{
                wxapi(){
                    var appId = "wx453d0d79f235d54a";
                    var timestamp = Math.ceil(Date.parse(new Date()) / 1000);
                    var url = window.location.href;
                    var nonceStr = this.randomString();
                    var jsapi_ticket = "bxLdikRXVbTPdHSM05e5u9PpExo1F0nnrbdkBe0wtPzXhVPxbGMrVq6ARLQK3hBA458FDeWmo3R3htAZ5SSonw";

                    var str = url + "jsapi_ticket="+jsapi_ticket+"&noncestr="+nonceStr+"&timestamp="+timestamp+"&url="+url;
                    
                    //str = "jsapi_ticket=bxLdikRXVbTPdHSM05e5u9PpExo1F0nnrbdkBe0wtPzXhVPxbGMrVq6ARLQK3hBA458FDeWmo3R3htAZ5SSonw&noncestr=dfsfr&timestamp=1411222222&url=m.ey99.com";

                    var signature = sha1.hex_sha1(str);
                     
                     

                    wx.config({
                        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        appId: appId, // 必填，公众号的唯一标识
                        timestamp: timestamp, // 必填，生成签名的时间戳
                        nonceStr: nonceStr, // 必填，生成签名的随机串
                        signature: signature,// 必填，签名，见附录1
                        jsApiList: ["onMenuShareQQ"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                    });

                    wx.ready(function(){})
                },
                randomString(len) {
                　　len = len || 32;
                　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
                　　var maxPos = $chars.length;
                　　var pwd = '';
                　　for (var i = 0; i < len; i++) {
                　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
                　　}
                　　return pwd;
                },
                shutdown(){

                    this.$parent.isOpen = false;
                }
            }
        }
    </script>

    <style lang="sass" scoped>
        .slide-fade-enter-active {
            transition: all .3s ease;
        }
        .slide-fade-leave-active {
            transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
        }
        .slide-fade-enter, .slide-fade-leave-active {
            opacity:0;
        }
        /*translate(x,y) 平移*/
        .slide-fade-enter  .h5share_panel, .slide-fade-leave-active  .h5share_panel {

            -webkit-transform: translate(0, 1.5rem);
            transform: translate(0, 1.5rem);
        }
        .shared-modal{
            transition: all .3s ease;
        }
        .shared-modal{
            width:6.4rem;
            z-index: 999999;
            background: rgba(0,0,0,0.6);
            position: fixed;
            bottom:0;
            height:100%;
            .h5share_panel{
                width: 100%;
                background-color: #e6e6e6;
                border-bottom: 1px solid #dcdcdc;
                font-size: 0;
                margin: 0;
                padding: .2rem 0 0;
                box-sizing: border-box;
                position: absolute;
                bottom: .96rem;
                transition: all .3s ease;
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
                .qq i{
                    color:#5bc0de;
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