

<template>
 <div class="white-box">
    <my-top></my-top>
    <div class="video-area">
    <home-shell class="search-list" type="14" :getparams="params"></home-shell>
    </div>    
   
 </div>
</template>

<script>
    import footer from './footer.vue';
  
    import myTop from './common/top.vue';
    import homeShell from './homeShell.vue';   
    import serverapi from '../serverapi.js';
    export default {
        computed:{
           
        },
        data () {
            return {
                params:{
                    url:serverapi.video,
                    option:{params:{}}
                }
            }  
        },
        components: {  
            myTop,
            homeShell,         
            'my-footer':footer
        },
         methods: {           
        },
      
    }
</script>
<style lang="sass" scoped>
.white-box{
    width: 6.4rem;
    flex: 1;
    display: flex;
    flex-direction: column;  
    margin: 0 auto;

    overflow: hidden;
    .slider-item{
        width:100%;
    }
    .video-area{
       flex:1;
       overflow-y: auto;
    }
}

</style>
