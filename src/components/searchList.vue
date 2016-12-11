
<template>
	<div class="search-main">
		<my-nav class="search-nav" theme="white" :title="q"></my-nav>	
		<home-shell class="search-list" :type="type" :getparams="getParams" :issearchpage="true"></home-shell>
	</div>
</template>
<script>
 
	import blackNav from './blackNav';
	import homeShell from './homeShell';
	import serverapi from '../serverapi.js';
	export default {		
		data(){
			return {
				path:{path:"/search"},				 
				'items':null,
				type:22,
				'getParams':null,
			}
		},
		computed:{
			q(){
				return this.$route.query.q.length > 10 ?  this.dSubstr(this.$route.query.q,10) + "···" : this.$route.query.q;
			}
		},
		created(){
			if(this.$route.query.type == "资讯"){
				this.type = 21;			  
			}else if(this.$route.query.type == "视频"){
				this.type = 14;
			}else{			 
				this.type = 22;			 
			}
			
			this.setGetParams(this.type);
		},
		components:{
			'my-nav':blackNav,
			'home-shell':homeShell,			
		},
		methods:{
			dSubstr(title,length){
    			return title.substr(0,length);
			},
			  setGetParams(type=0){
                
                if(type == 21){
                	var url = serverapi.article;
                }
                if(type == 22){
                	var url = serverapi.investment;
                }              
                if(type == 14){
                	var url = serverapi.video;
                }
                var option = {params:{kw:this.$route.query.q}};
                this.getParams = {url:url,option:option};
            }
		}
	}
</script>
<style lang="sass" scoped>
	.search-main{
		.search-nav{
			border-bottom: 1px solid #fafafa;
			position: fixed;
			top: 0;
			z-index: 999;
		}
		.search-list{
			padding-top:.81rem;
		}
	}
	
</style>