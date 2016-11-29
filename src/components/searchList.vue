<template>
	<div>
		<my-nav theme="white" :title="q"></my-nav>	
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
			'my-nav':blackNav
		},
		methods:{
			dSubstr(title,length){
    			return title.substr(0,length);
			}
		}
	}
</script>
