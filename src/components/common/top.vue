<template>
	<div class="top">
            <div class="wrap">
                <i class="logo"></i>
                <div class="search_bg" @click="gosearch">
                    <i>当代医药市场网</i>
                </div>
            </div>
    </div>
</template>
<script>
	export default {
		methods:{
			gosearch(){
                this.$router.push({path:"/search"});
            },

		}
	}
</script>
<style lang="sass" scoped>
 	.top{
        width:6.4rem;
        height:.84rem;
        background: #ed1b23;
        z-index: 999999;
         .wrap{
	        width:5.8rem;
	        margin:0px .3rem;
    		.logo{
		        width:3rem;
		        height:0.4rem;
		        display: inline-block;
		        background: url("../../image/logo.png") no-repeat;
		        background-size: 3rem .4rem;
		        margin-top:.22rem;
    		}
	    	.search_bg{
		        background: url("../../image/search_bg.png");
		        width:2.61rem;
		        height:.5rem;
		        line-height: .5rem;
		        float:right;
		        margin-top:.16rem;
		        background-size: 2.61rem .5rem;
		        i{
		            font-size:.24rem;
		            color:#8f8f8f;
		            padding-left:.5rem;
		            display:inline-block;
		        }
	    	}
    	}
      
    }

</style>