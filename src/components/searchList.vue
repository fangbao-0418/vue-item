<template>
	<div>
		<my-nav theme="white" :title="q"></my-nav>	
<<<<<<< HEAD
		<home-shell v-if="!noData" :loading="loading" :type="type">
			 <div slot="content" v-if="!loading">
			 	<component :items="items.list" :is="currentView"></component>
			 </div>
		</home-shell>
		<no-data v-else></no-data>
=======
>>>>>>> 619844e82610499b4c5920d51b8f6385df3337b0
	</div>
</template>
<script>
	import blackNav from './blackNav';
<<<<<<< HEAD
	import homeShell from './homeShell';
	import searchArticleItem from './searchArticleItem';
	import searchInvestItem from './searchInvestItem';
	import noData from './noData';
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
				'noData':false,
=======
	export default {
		
		data(){
			return {
				path:{path:"/search"}
>>>>>>> 619844e82610499b4c5920d51b8f6385df3337b0
			}
		},
		computed:{
			q(){
				return this.$route.query.q.length > 10 ?  this.dSubstr(this.$route.query.q,10) + "···" : this.$route.query.q;
			}
		},
		components:{
<<<<<<< HEAD
			'my-nav':blackNav,
			'home-shell':homeShell,
			'no-data':noData,
=======
			'my-nav':blackNav
>>>>>>> 619844e82610499b4c5920d51b8f6385df3337b0
		},
		methods:{
			dSubstr(title,length){
    			return title.substr(0,length);
<<<<<<< HEAD
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
                       	
                       	if(res.body.count == 0){
                       		this.noData = true;
                       	}

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
=======
			}
>>>>>>> 619844e82610499b4c5920d51b8f6385df3337b0
		}
	}
</script>
