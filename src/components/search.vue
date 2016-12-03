<template>
	<div class="search-page">
		<component :is="currentView"></component>
	</div>
</template>
<script>
	import searchPage from './searchPage.vue';
	import searchList from './searchList.vue';
	export default {
		data(){
			return {
				optionstatus:false,
				rotate:false,
				type:"招商",
			}
		},
		computed:{
			currentView(){				 
				return this.$route.query.q &&  this.$route.query.type ? "searchList" : "searchPage";
			}
		},
		components:{
			searchPage,
			searchList
		},	
		mounted(){
			 
		}	
		
	}
</script>
<style lang="sass" scoped>
.search-page{
	width:100%;
	height:100%;
	background:#ffffff;
}
</style>