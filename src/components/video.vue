

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
    import homeShell from './homeShell.vue';   

    export default {
        computed:{
           
        },
        data () {
            return {}  
        },
        components: {  
            'my-header':header, 
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

</style>
