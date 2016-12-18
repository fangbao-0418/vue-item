<template>
  <div class="nav">
        <div id="nav-smartSetup">
            <div id="scroller">
                <ul>

                    <li v-for="(item,index) in option" @click="select(index)" :class="{'cur':isCur[index]}" >{{item.title}}
                    </li>
                 
                </ul>
            </div>
        </div>
       <!--  <i class="line_a"></i>
        <i class="plus_a"></i> -->
    </div>        
</template>
<script>
 //滑动导航
    var IScroll = require("../../js/iscroll.js");
    import bus from '../../bus.js';
	export default {
		props:['option'],
		data(){
			return {
				params:{},
                index:0
			}
		},
		computed: {           
            
            isCur:function(){
                let i,cur;
                cur = [];
                for(i in this.option){
                	 cur[i] = false;
                }
                cur[this.index] = true;
                return cur;
            },
           
        },
        watch:{
            index(val,oldval){                
                this.resetwidth(val);
            }
        },
        methods:{
            loaded(startX) {
                var myScroll;
                setTimeout(function(){
                     myScroll = new IScroll('#nav-smartSetup', {startX:startX,scrollX: true, scrollY: false, click: true, useTransition: true}); 
                 },100)
                  
            },
            select(index){
                console.log("push");
                //alert(index);
                this.index = index;
                
                this.$router.push({path:this.$route.path + "#" + this.option[index].topid});
                
                bus.$emit('navIndexToHome',index);
            },
            resetwidth(index){
                var startX;//初始位置
                var w = 0;
                var divisor = $("#nav-smartSetup")[0].clientWidth; //除数
                //console.log($("#nav-smartSetup").outerWidth(false));
                var currPosition = 0;
                
                var currentLiWidth = $("#scroller ul li").eq(index)[0].clientWidth;// 当前li的宽度
                if($("#scroller ul li")[0]){

                    $("#scroller ul li").map(function(){
                                           
                        w += $(this)[0].clientWidth;
                        //console.log(w)
                    })

                    for(var i=0; i < index; i++){                       
                        currPosition += Math.round($("#scroller ul li").eq(i)[0].clientWidth);
                    }
                    $("#scroller").width(w);
                    
                    //初始化位置
                    
                    // if(w - currPosition <= document.documentElement.clientWidth){
                    
                    //     console.log($("#app").outerWidth());

                    //    this.loaded(document.documentElement.clientWidth - 20 - w); 
                    // }else{
                       
                    // }
                    var multiple = Math.floor(currPosition / divisor); //倍数
                    var remainder = (currPosition % divisor).toFixed(2); //余数
                    //console.log("currPosition->" + currPosition + " divisor->" + divisor + ":" + multiple);

                    

                    if(currPosition < divisor / 2){
                        startX = 0
                    }else if(currPosition >= ( w - divisor / 2)){
                        startX = w - divisor;
                    }else{
                        if( remainder > (divisor/2) ){
                            console.log({multiple : multiple, currPosition : currPosition, index : index, remainder : remainder, divisor : divisor });
                            console.log(multiple * divisor)                   

                            startX =  (multiple * divisor) + (remainder -  (divisor-currentLiWidth) / 2);    
                        }else{
                            //console.log({multiple : multiple, currPosition : currPosition, index : index, remainder : remainder, divisor : divisor });
                            //console.log(multiple * divisor)   

                            startX =  (multiple * divisor) - (0.5 * ( divisor - currentLiWidth) - remainder);

                            //console.log(startX);    
                        }
                    }


                   
                   
                    

                    //console.log( startX );
                    this.loaded(-startX); 
                }

                   
              
            },
            getUrlIndex(){
                var hash = this.$route.hash;
                var index = parseInt( hash.replace("#","") );
                var i;
                var _this = this;
                for(i in this.option){
                    
                    if(this.option[i].topid == index){
                      _this.index = i;                      
                    }
                }

                _this.select(this.index,true);
            }
        },
        created(){
            var _this = this;
            bus.$on('navIndex',function(index){
                _this.index = index;                
            }),
            _this.getUrlIndex();
            
            
        },
        mounted(){

            var _this = this;
                  
                //iscroll click设为true 不然无法点击
                _this.resetwidth(_this.index);
                window.onresize = function(){
                    _this.resetwidth(_this.index);
                }  
                //$("#scroller").css({"transition-duration": "1s",transform: "translate(-"+ 20 +"px, 0px) translateZ(0px)"});
          

        },

	}
</script>
<style lang="sass" scoped>
	 .nav{
        width:5.8rem;
        height:.6rem;
        padding:0px .3rem;
        position:fixed;
        top:.84rem;
        background-color:#f5f5f3;
        z-index: 999999;
    }
    #nav-smartSetup{
        position: absolute;
        z-index: 1;
        margin-left:-.3rem;
        padding-left:.1rem;
        height: .6rem;
        width: 6rem;
        overflow: hidden;
    }

    #nav-smartSetup ul li{
        float:left;
        line-height: .64rem;
        font-size: .3rem;
        padding: 0px .2rem;
        height:.6rem;
    }
    #nav-smartSetup ul .cur{
        font-size:.32rem;
        color:#ed1b23;
        float:left;
        line-height: .64rem;
        padding: 0px .2rem;

    }
    #scroller {
        position: absolute;
        z-index: 1;
        -webkit-tap-highlight-color: rgba(0,0,0,0);

        height: 100%;

        -webkit-transform: translateZ(0);
        -moz-transform: translateZ(0);
        -ms-transform: translateZ(0);
        -o-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-text-size-adjust: none;
        -moz-text-size-adjust: none;
        -ms-text-size-adjust: none;
        -o-text-size-adjust: none;
        text-size-adjust: none;
    }
    #scroller ul {
        list-style: none;
        padding: 0;
        margin: 0;
        width: 110%;
        line-height: 4rem;
        height: .6rem;
        text-align: center;
    }


    .line_a{

        background: url("../../image/line-01.png");
        display: inline-block;
        width:.14rem;
        height:.6rem;
        background-size: .14rem .6rem;

        position: absolute;
        top:0px;
        right:.67rem;
        z-index: 999;
    }
    .plus_a{
        position: absolute;
        right:.3rem;
        background: url("../../image/plus.png");
        display: inline-block;
        width:.37rem;
        height:.36rem;
        float:right;
        margin-top:.10rem;
        cursor: pointer;
        background-size: .37rem .36rem;
        z-index: 999;
    }


</style>
