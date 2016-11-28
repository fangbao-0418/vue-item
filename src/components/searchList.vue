<template>
	<div>
		<my-nav theme="white" :title="q"></my-nav>	
		<home-shell :loading="loading" >
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
	export default {
		
		data(){
			return {
				path:{path:"/search"},
				loading:true,
				height:0,
				'page':0,
				'currentView':searchArticleItem,
				'items':null
			}
		},
		computed:{
			q(){
				return this.$route.query.q.length > 10 ?  this.dSubstr(this.$route.query.q,10) + "···" : this.$route.query.q;
			}
		},
		created(){
			if(this.$route.query.q == "资讯"){
				this.loadData(false);
			}else{
				this.loadData(false);
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
			  loadData(finshCallback,refresh){

                if(refresh){
                    this.page = 0;
                }

                var _this = this;
                var url = "http://www.ey99.com/api/mobile/article.php";
                this.page += 1;

                var option = {params:{catid:331,page:this.page}};
                this.$http.get(url,option).then(
                        (res)=>{


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
