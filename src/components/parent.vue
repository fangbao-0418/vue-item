<template>
	<div class="parent">		
		<transition :name="transitionName">
	    	<router-view class="child-view"></router-view>
	    </transition>
	  
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
@import '../css/mint-ui.css';
.parent{
	overflow:hidden;
	width:6.4rem;
	height:100%;
	background:#efefef;	
	.child-view{
		display: flex;
		flex-direction: column;
		height:100%;
		width:6.4rem;
	}
	.app-shade{
		position: fixed;
		z-index:9999999999;
		top:-100%;
		pointer-events: none; 
		left:0;	
		bottom:0;
		height:100%;
		width:6.4rem;
		padding:200%;
	}
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .20s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.child-view {
	width:6.4rem;
  position: absolute;
  transition: all .20s cubic-bezier(.36,.36,.72,.73);
}
.slide-left-enter, .slide-right-leave-active {
	width:6.4rem;
  opacity: 0;
  -webkit-transform: translate(6.4rem, 0);
  transform: translate(6.4rem, 0);
}
.slide-left-leave-active, .slide-right-enter {
	width:6.4rem;
  opacity: 0;
  -webkit-transform: translate(-6.4rem, 0);
  transform: translate(-6.4rem, 0);
}
</style>