

<template>
 <div class="white-box">
    <my-header></my-header>
    
          <video-list></video-list>
        
    <my-footer></my-footer>   
 </div>
</template>

<script>
    import footer from './footer.vue';
    import videoList from './videoList.vue';
    import header from './videoHeader.vue';
   

    export default {
        computed:{
            single(){

            }
        },
        data () {
            return {            
                someList:[
                {
                    title: 'slide1',
                    style:{
                         'background':'#1bbc9b',
                    },
                },
                {
                    title: 'slide2',
                    style:{
                         'background':'#4bbfc3',
                    },
                },
                {
                    title: 'slide3',
                    style:{
                         'background':'#7baabe',
                    },
                }
            ],
            sliderinit: {
                currentPage: 1,
                start: {},
                end: {},
                tracking: false,
                thresholdTime: 500,//滑动判定距离
                thresholdDistance: 100,//滑动判定时间
                // direction:'vertical',//垂直滚动
                // loop:true,//无限循环
                // autoplay:1000,//自动播放:时间[ms]
            }
            }
        },
        components: {  
            'my-header':header, 
            'video-list':videoList,              
            'my-footer':footer
        },
         methods: {
            turnTo (num) {
                // 传递事件
                this.$broadcast('slideTo', num);
            },
            slideNext () {
                this.$broadcast('slideNext');
            },
            slidePre () {
                this.$broadcast('slidePre');
            },
            appendslider(){
                this.someList.push({
                    title: 'slidernew',
                    style:{
                        background:'#333',
                        color:'#fff'
                    }
                });
            }
        },
        events:{
            slide(pagenum){
                // console.log(pagenum);
            }
        }
    }
</script>
<style scoped>
.white-box{
    width: 6.4rem;
    padding-bottom:.8rem;
    background: #fff;
    margin: 0 auto;
    padding-bottom:;
}
.slider-item{
    width:100%;
}

</style>
