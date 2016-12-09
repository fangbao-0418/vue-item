<template>
  <div class="nav">
        <div id="nav-smartSetup">
            <div id="scroller">
                <ul>
                    <li v-for="(item,index) in option" v-on:click="selectType( item.sign , item.id )" :class="{'cur':isCur[index]}" >{{item.title}}</li>
                 
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
			}
		},
		computed: {
            type(){
                var type = this.$route.params.type ? this.$route.params.type : "recommend";
                return type;
            },
            id(){
            	var id = this.$route.params.id ? this.$route.params.id : null;
                return id;
            },
            isCur:function(){
                let i,cur;
                cur = [];
                for(i in this.option){
                	//console.log(this.type + this.id);                                  
                    if(this.type == this.option[i].sign && this.id == this.option[i].id ){
                        //console.log(i);
                        cur[i] = true;
                    }else{
                        cur[i] = false;
                    }
                }
               	if( !this.$route.params.id || !this.$route.params.type ){
               		cur[0] = true;
               	}	

                return cur;
            },
            pathname(){
            	console.log(this.$route);
            	var path = this.$route.name ? this.$route.name : 'home';
                return path;
            }
        },
        methods:{
            selectType(type,catid){
                this.type = type;
                if(type == 'recommend'){
                    this.params = {currentView : 'recommend' };
                }else if(type == 'health'){                	
                	this.params = {currentView : 'health' }; 
                }else{                	
                	this.params = {currentView : type, catid : catid };
                }

                console.log(this.pathname);

                bus.$emit('navselected',this.params);    
                if(catid){
               		this.$router.push({name:this.pathname,params: {type:type,id:catid}})
                }else {
                	this.$router.push({path:"/" + this.pathname,query: {type:type}})
                }
             

            },
           
           
            loaded(startX) {
                  var myScroll;
                    myScroll = new IScroll('#nav-smartSetup', {startX:startX,scrollX: true, scrollY: false, mouseWheel: true ,click: true});
            },

            resetwidth(){
                var w = 0;
                var currPosition = 0;
                if($("#scroller ul li")[0]){
                    $("#scroller ul li").map(function(){
                        w += $(this)[0].clientWidth;
                    })

                    for(var i=0; i<$("#scroller ul li").length; i++){

                        if($("#scroller ul li").eq(i)[0].className == "cur"){
                        break;
                    }
                    currPosition += $("#scroller ul li").eq(i).width() ;
                    }
                    $("#scroller").width(w);
                     //初始化位置
                    this.loaded(-currPosition);
                }
              
            }
        },
        mounted(){
            


            var _this = this;
            $(document).ready(function(){             
                //iscroll click设为true 不然无法点击


                _this.resetwidth();
                window.onresize = function(){
                    _this.resetwidth();
                }  
               
               
              

                //$("#scroller").css({"transition-duration": "1s",transform: "translate(-"+ 20 +"px, 0px) translateZ(0px)"});
            })

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
