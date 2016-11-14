

<template>
    <div>
    <div class="top">
        <div class="wrap">
            <i class="logo"></i>
            <div class="search_bg"  ></div>
        </div>

    </div>
    <div class="nav">
        <div id="nav-smartSetup">
            <div id="scroller">
            <ul>
                <li v-on:click="selectType('recommend')" :class="{'cur':isCur[0]}" >推荐</li>
                <li v-on:click="selectType('drug')" :class="{'cur':isCur[1]}">药品 </li>
                <li v-on:click="selectType('zyc')" :class="{'cur':isCur[2]}">中药材</li>
                <li v-on:click="selectType('bjsp')" :class="{'cur':isCur[3]}">保健食品</li>
                <li  v-on:click="selectType('ylqx')" :class="{'cur':isCur[4]}">医疗器械 </li>
                <li  v-on:click="selectType('mrhf')" :class="{'cur':isCur[5]}">美容护肤 </li>
                <li  v-on:click="selectType('jsyp')" :class="{'cur':isCur[6]}">计生用品 </li>
                <li  v-on:click="selectType('zysb')" :class="{'cur':isCur[7]}">制药设备 </li>
                <li v-on:click="selectType('yly')" :class="{'cur':isCur[8]}">原料药 </li>
            </ul>
            </div>
        </div>
        <i class="line_a"></i>
        <i class="plus_a"></i>
    </div>
    </div>
</template>

<script>


    //滑动导航
    var IScroll = require("../js/iscroll.js");


    export default {
        data () {
            return {
                type:"drug",
            }
        },
        computed: {
            isCur:function(){
                let cur = [],i;
                let arr = ["recommend","drug","zyc","bjsp","ylqx","mrhf","jsyp","zysb","yly"];
                for(i in arr){
                    if(arr[i] == this.type){
                        cur[i] = true;
                    }else{
                        cur[i] = false;
                    }
                }
                return cur;
            }
        },
        methods:{
            selectType(type){
                this.type = type;
                this.$emit('child-type', type)
            },

        },
        mounted(){
            $(document).ready(function(){

                var myScroll;
                //iscroll click设为true 不然无法点击
                function loaded() {
                    myScroll = new IScroll('#nav-smartSetup', {scrollX: true, scrollY: false, mouseWheel: true ,click: true});
                }
                var w = 0;

                $("#scroller ul li").map(function(){
                    w += $(this)[0].clientWidth;
                })
                $("#scroller").width(w);

                loaded();

            })

        }

    }
</script>
<style scoped>
 
.wrap{
  width:5.8rem;
  margin:0px .3rem;
}
.top{
  position: fixed;
  top:0px;
  width:6.4rem;
  height:.84rem;
  background: #ed1b23;
  z-index: 999999;
}
.logo{
  width:3rem;
  height:0.4rem;
  display: inline-block;
  background: url("../image/logo.png") no-repeat;
  background-size: 3rem .4rem;
  margin-top:.22rem;
}
.search_bg{
  background: url("../image/search_bg.png");
  width:2.61rem;
  height:.5rem;
  float:right;
  margin-top:.16rem;
  background-size: 2.61rem .5rem;
}


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
  width: 5.4rem;
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

  background: url("../image/line-01.png");
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
  background: url("../image/plus.png");
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

