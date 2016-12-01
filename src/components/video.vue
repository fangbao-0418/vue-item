

<template>
 <div class="white-box">
    <my-top></my-top>
    <div class="video-area">
    <video-list></video-list>
    </div>    
    <my-footer></my-footer>   
 </div>
</template>

<script>
    import footer from './footer.vue';
    import videoList from './videoList.vue';
    import myTop from './top.vue';
    import homeShell from './homeShell.vue';   

    export default {
        computed:{
           
        },
        data () {
            return {}  
        },
        components: {  
            myTop,
            'video-list':videoList,              
            'my-footer':footer
        },
         methods: {           
        },
      
    }
</script>
<style scoped>
.white-box{
    width: 6.4rem;
    padding-bottom:.8rem;
   
    margin: 0 auto;
    padding-bottom:;
}
.slider-item{
    width:100%;
}
.video-area{
    padding-top:.84rem;
}
</style>
