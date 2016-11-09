

<template>
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
                <li v-on:click="notify('index-main')" :class="{'cur':isCur[0]}" >推荐</li>
                <li v-on:click="notify('drug')" :class="{'cur':isCur[1]}">药品 </li>
                <li v-on:click="notify('zyc')" :class="{'cur':isCur[2]}">中药材</li>
                <li v-on:click="notify('bjsp')" :class="{'cur':isCur[3]}">保健食品</li>
                <li  v-on:click="notify('ylqx')" :class="{'cur':isCur[4]}">医疗器械 </li>
                <li  v-on:click="notify('mrhf')" :class="{'cur':isCur[5]}">美容护肤 </li>
                <li  v-on:click="notify('jsyp')" :class="{'cur':isCur[6]}">计生用品 </li>
                <li  v-on:click="notify('zysb')" :class="{'cur':isCur[7]}">制药设备 </li>
                <li v-on:click="notify('yly')" :class="{'cur':isCur[8]}">原料药 </li>
            </ul>
            </div>
        </div>
        <i class="line_a"></i>
        <i class="plus_a"></i>
    </div>
</template>

<script>


    //滑动导航
    var IScroll = require("../js/iscroll.js");


    export default {
        data () {
            return {
                type:"index-main",
            }
        },
        computed: {
            isCur:function(){
                let cur = [],i;
                let arr = ["index-main","drug","zyc","bjsp","ylqx","mrhf","jsyp","zysb","yly"];
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
            notify(type){
                this.type = type;
                this.$dispatch('child-type', type)
            },

        },
        ready(){
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

