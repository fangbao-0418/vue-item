<template>
	<div class="agency">
		 <home-shell :type="params.type" :getparams="params"></home-shell> 
	</div>
</template>
<script>
	import homeShell from './homeShell';
    import serverapi from '../serverapi.js';
	export default {
		 
		data(){
			return {
				params:{
                    url:serverapi.agency,
                    type:23,
                    option:{params:{}}
                }
			}
		},
		components:{
			homeShell
		}
	}
</script>
<style lang="sass" scoped>
	.agency{
		 
	}
</style>