

<template>
    <div class="content">
     
    <my-header :option="option"></my-header>
  
      <mt-tab-container v-model="active" :swipeable="false">
              <mt-tab-container-item id="tab-container1">
                <home-shell v-if="active == 'tab-container1'" :type="22" :getparams="params[0]"></home-shell>
              </mt-tab-container-item>
              <mt-tab-container-item id="tab-container2">                
                <home-shell v-if="active == 'tab-container2'" :type="22" :getparams="params[1]"></home-shell>
              </mt-tab-container-item>
              <mt-tab-container-item id="tab-container3">
                 <home-shell v-if="active == 'tab-container3'" :type="22" :getparams="params[2]"></home-shell>
              </mt-tab-container-item>
               <mt-tab-container-item id="tab-container4">
                 <home-shell v-if="active == 'tab-container4'" :type="22" :getparams="params[3]"></home-shell>
              </mt-tab-container-item>
               <mt-tab-container-item id="tab-container5">
                 <home-shell v-if="active == 'tab-container5'" :type="22" :getparams="params[4]"></home-shell>
              </mt-tab-container-item>
               <mt-tab-container-item id="tab-container6">
                 <home-shell v-if="active == 'tab-container6'" :type="22" :getparams="params[5]"></home-shell>
              </mt-tab-container-item>
               <mt-tab-container-item id="tab-container7">
                 <home-shell v-if="active == 'tab-container7'" :type="22" :getparams="params[6]"></home-shell>
              </mt-tab-container-item>
               <mt-tab-container-item id="tab-container8">
                 <home-shell v-if="active == 'tab-container8'" :type="22" :getparams="params[7]"></home-shell>
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
    export default {
        data () {
            return {
                option:[
                    {
                        title:'全部',
                        topid:'',
                    },
                    {
                        title:'药品',
                        topid:4,
                    },
                    {
                        title:'保健食品',
                        topid:5,
                    },
                    {
                        title:'营养食品',
                        topid:6,
                    },
                    {
                        title:'原料药',
                        topid:7,
                    },
                    {
                        title:'中间体',
                        topid:8,
                    },
                    {
                        title:'药用辅料',
                        topid:9,
                    },
                    {
                        title:'动植物提取物',
                        topid:10,
                    }
                ],
                active:"tab-container1",
                params:[
                    {
                        url:serverapi.investment,
                        option:{params:{}}
                    },
                    {
                        url:serverapi.investment,
                        option:{params:{catid:4}}
                    },
                    {
                        url:serverapi.investment,
                        option:{params:{catid:5}}
                    },
                    {
                        url:serverapi.investment,
                        option:{params:{catid:6}}
                    },
                    {
                        url:serverapi.investment,
                        option:{params:{catid:7}}
                    },
                    {
                        url:serverapi.investment,
                        option:{params:{catid:8}}
                    },
                    {
                        url:serverapi.investment,
                        option:{params:{catid:9}}
                    },
                    {
                        url:serverapi.investment,
                        option:{params:{catid:10}}
                    },
                    {
                        url:serverapi.investment,
                        option:{params:{catid:11}}
                    },
                ],
               
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
        }
    }
</script>
<style scoped>
    .content{
        padding-bottom:.88rem;
    }
</style>
