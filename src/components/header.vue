

<template>
    <div class="box">
        <my-top></my-top>
        <scroll-nav :option="option"></scroll-nav>
    </div>
</template>

<script>
    


    import myTop from './common/top'; 
    import scrollNav from './common/scrollNav.vue';
   

    export default {
        props:['option'],
        data () {
            return {
            }
        },
        components:{
            myTop,
            scrollNav
        },
               

    }
</script>
<style lang="sass" scoped>
    .box{
        height:1.44rem;
        z-index: 999999;
    }
   
   
</style>

