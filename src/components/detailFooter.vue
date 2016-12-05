<template>
	 <div class="footer">
        <div class="footer-box">
            <div class="footer-t">
                <div class="foot-t-box">
                    <favour :moduleid="moduleid" :itemid="itemid"></favour>
                    <i @click="report" class="report"><b>举报</b></i>
                </div>
            </div>
        </div>
        <report :moduleid="moduleid" :itemid="itemid" :isshow="isshow"></report>
    </div>
</template>
<script>
  	import favour from './favour.vue';
    import report from './report.vue';
    export default {
    	props:['moduleid','itemid'],
    	data(){
    		return {
    			isshow : false
    		}
    	},
    	components:{
 			'favour':favour,
            'report':report,
    	},
    	methods:{
    		report(){
    			this.isshow = true;
    			console.log(this.isshow);
    		}
    	}
    }
</script>
<style lang="sass" scoped>

.footer{
	width: 6.4rem;
  	background: #fff;
  	.footer-box{
		.footer-t{
		  	width: 5.8rem;
			padding-bottom: .2rem;
		  	margin: 0 auto;
			.foot-t-box {
				i{
			  		display: inline-block;
				}
				.report{
				  	float: right;
				  	font-size: .25rem;
				  	line-height: .38rem;
				}
			}
		}
  	}
}

</style>