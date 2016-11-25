<template>
	<div>
		<blackNav theme="white" :path="path" :title="q"></blackNav>	
	</div>
</template>
<script>
	import blackNav from './blackNav';
	export default {
		
		data(){
			return {
				path:{path:"/search"}
			}
		},
		computed:{
			q(){
				return this.$route.query.q.length > 10 ?  this.dSubstr(this.$route.query.q,10) + "···" : this.$route.query.q;
			}
		},
		components:{
			blackNav
		},
		methods:{
			dSubstr(title,length){
    			return title.substr(0,length);
			}
		}
	}
</script>
