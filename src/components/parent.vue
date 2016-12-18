<template>
	<div class="parent">		
	<!-- 	<transition :name="transitionName">
	    	<router-view class="child-view"></router-view>
	    </transition> -->
	    <router-view class="child-view"></router-view>
	    <div class="app-shade"></div>
	</div>
</template>
<script>
	export default {
		 data () {
		    return {
		      transitionName: 'slide-left'
		    }
		  },
		  mounted(){
		  	if(localStorage.currentlight == "black"){
				//alert(2);
				 
					$('#app .parent .app-shade').css({"background-color":"rgba(0,0,0,0.5)"});
				 
			}

		  },
		  // dynamically set transition based on route change
		  watch: {
		    '$route' (to, from) {
		      const toDepth = to.path.split('/').length
		      const fromDepth = from.path.split('/').length
		      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
		    },
		    

		  },  
	}
</script>
<style lang="sass" scoped>
.parent{
	width:100%;
	.child-view{
		width:100%;
	}
	.app-shade{
		position: fixed;
		z-index:9999999999;
		top:-100%;
		pointer-events: none; 
		left:0;	
		bottom:0;
		height:100%;
		width:100%;
		padding:200%;
	}
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.child-view {
  position: absolute;
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(3.2rem, 0);
  transform: translate(3.2rem, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-3.2rem, 0);
  transform: translate(-3.2rem, 0);
}
</style>