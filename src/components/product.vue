

<template>
    <div class="content">
     
    <my-header :option="option"></my-header>
  
        <mt-tab-container v-model="active" :swipeable="false">
              <mt-tab-container-item v-for="(item,index) in params" :id="'tab-container' + (index + 1)">
                <home-shell v-if="isactived(index)" :type="item.type" :getparams="item"></home-shell>
              </mt-tab-container-item>  
        </mt-tab-container>
       
    </div>
</template>

<script>
    import myHeader from './header.vue';
    import bus from '../bus.js';
    import { TabContainer, TabContainerItem } from 'mint-ui';
    import homeShell from './homeShell';
    import serverapi from '../serverapi.js';

    import paramConfig from '../param.config.js';
    export default {
        data () {
            return {
                option: paramConfig.product.option,
                active: "tab-container1",
                params: paramConfig.product.params               
            }
        },
        watch:{
            active(val,oldval){
                var id = val.replace("tab-container","");
                id = parseInt(id) - 1;             
                bus.$emit("navIndex",id);
            }
        },
        created(){
            var _this = this;
             bus.$on('navIndexToHome',function(index){                
                _this.active = 'tab-container' + (parseInt(index) + 1);  
            })             
        },
        mounted(){
        },
       
        components: {
            'my-header':myHeader,
            'home-shell':homeShell,
        },
        methods: {
            isactived(index){
                if(this.active == 'tab-container' + (index + 1)){
                    return true;
                }else{
                    return false;
                }
            }
        }
    }
</script>
<style scoped>
    .content{
        padding-bottom:.88rem;
    }
</style>
