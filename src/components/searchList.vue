<template>
	<div>
		<my-nav theme="white" :title="q"></my-nav>	
		<home-shell :currentview="currentView" :getparams="getParams" :issearchpage="true"></home-shell>
	</div>
</template>
<script>
 
	import blackNav from './blackNav';
	import homeShell from './homeShell';
	import searchArticleItem from './searchArticleItem';
	import searchInvestItem from './searchInvestItem';

	export default {		
		data(){
			return {
				path:{path:"/search"},
				'currentView':searchInvestItem,
				'items':null,
				type:0,
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
				this.currentView = searchArticleItem;
			  
			}else if(this.$route.query.type == "视频"){
				 
				this.currentView = searchArticleItem;
			}else{
			 
				this.type = 1;
				this.currentView = searchInvestItem;
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
                
                if(type == 0){
                	var url = "http://www.ey99.com/api/mobile/article.php";
                }
                if(type == 1){
                	var url = "http://www.ey99.com/api/mobile/investment.php";
                }              

                var option = {params:{kw:this.$route.query.q}};
                this.getParams = {url:url,option:option};
            }
		}
	}
</script>
