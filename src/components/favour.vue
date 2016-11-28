<template>
<div class="favour-main">
 <i @click="favour" :class="['iconfont','favour',{'red':isfavour}]">&#xe602;</i>
 <span>{{favournum}}</span>
</div>
</template>
<script >
	export default {
		props:[
			'moduleid','itemid'
		],
		data(){
			return {
				isfavour:false,
				favournum:{type:Number,default:0}
			}
		},
		created(){
			this.getFavourNum();
			if(this.is_favour()){
				this.isfavour = true;
			}
		},
		methods:{
			is_favour(){

				if(localStorage.favour){
					var arr = localStorage.favour.split(',');
					var str = this.moduleid + "|" + this.itemid;
					 console.log($.inArray(str, arr) );
					if( $.inArray(str, arr) != -1){
						return true;
					}else{
						return false;
					}
				}else{
					return false;
				}
					
			},
			favour(){
				if(!this.is_favour()){
					this.favournum = parseInt(this.favournum) + 1;
					this.isfavour = true;
					this.setFavourNum();
				}
			},
			getFavourNum(){
				var url = "http://www.ey99.com/api/mobile/favour.php";
				var option = {params:{type:"get",moduleid:this.moduleid,itemid:this.itemid}};
				var _this = this;
				this.$http.get(url,option).then((res)=>{
					_this.favournum = res.body.favournum;
				});
			},
			setFavourNum(){
				
					var url = "http://www.ey99.com/api/mobile/favour.php";
					var option = {params:{type:"set",moduleid:this.moduleid,itemid:this.itemid}};
					this.$http.get(url,option);
					if(localStorage.favour){
						localStorage.favour += "," + this.moduleid + "|" + this.itemid;
					}else{
						localStorage.favour = this.moduleid + "|" + this.itemid;
					}
				
			},
		}
	}
</script>
<style scoped>
.favour-main{
	display: inline-block;
}
.favour-main span{
    font-size:.2rem;
    display: inline-block;
    padding: .1rem 0;
}
.favour{
  float: left;
  font-size: .36rem;
  line-height: .35rem;
  padding-right: .1rem;
}
.red{
	color:red;
}
</style>