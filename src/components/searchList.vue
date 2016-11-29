<template>
	<div>
		<my-nav theme="white" :title="q"></my-nav>	
		<home-shell :loading="loading" :type="type">
			 <div slot="content" v-if="!loading">
			 	<component :items="items.list" :is="currentView"></component>
			 </div>
		</home-shell>
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
				loading:true,
				height:0,
				'page':0,
				'currentView':searchInvestItem,
				'items':null,
				type:0,
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
				this.loadData(false,false,0);
			}else if(this.$route.query.type == "视频"){
				this.loadData(false,false,1);
				this.currentView = searchArticleItem;
			}else{
				this.loadData(false,false,1);
				this.type = 1;
				this.currentView = searchInvestItem;
			}
			
		},
		components:{
			'my-nav':blackNav,
			'home-shell':homeShell,
		},
		methods:{
			dSubstr(title,length){
    			return title.substr(0,length);
			},
			  loadData(finshCallback,refresh,type=0){

                if(refresh){
                    this.page = 0;
                }

                var _this = this;
                
                if(type == 0){
                	var url = "http://www.ey99.com/api/mobile/article.php";
                }
                if(type == 1){
                	var url = "http://www.ey99.com/api/mobile/investment.php";
                }
               
                
                this.page += 1;

                var option = {params:{page:this.page,kw:this.$route.query.q}};
                this.$http.get(url,option).then(
                        (res)=>{
                        	console.log(res);
                        if(_this.page == 1){
                            _this.items = res.body;
                            _this.loading = false;
                            
                            if(finshCallback){
                                 finshCallback()
                            }                   
                        
                        }
                        if(_this.page > 1 && _this.page <= Math.ceil(res.body.count/20)){


                                for(var i=0;i<res.body.list.length;i++){
                                    _this.items.list.push(res.body.list[i]);
                                }
						console.log(_this.items.list);
                            _this.loading = false;
                             if(finshCallback){
                                 finshCallback()
                            }
                        }



                },
                        (err)=>{

                }
                );
            }
		}
	}
</script>
