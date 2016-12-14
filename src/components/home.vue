

<template>
    <div class="content">
     
    <my-header :option="option"></my-header>
  
      <mt-tab-container v-model="active" :swipeable="false">
              <mt-tab-container-item id="tab-container1">
                <home-shell v-if="active == 'tab-container1'" type="recommend" :getparams="params[0]"></home-shell>
              </mt-tab-container-item>
              <mt-tab-container-item id="tab-container2">                
                <home-shell v-if="active == 'tab-container2'" :type="21" :getparams="params[1]"></home-shell>
              </mt-tab-container-item>
              <mt-tab-container-item id="tab-container3">
                 <home-shell v-if="active == 'tab-container3'" :type="21" :getparams="params[2]"></home-shell>
              </mt-tab-container-item>
               <mt-tab-container-item id="tab-container4">
                 <home-shell v-if="active == 'tab-container4'" :type="21" :getparams="params[3]"></home-shell>
              </mt-tab-container-item>
               <mt-tab-container-item id="tab-container5">
                 <home-shell v-if="active == 'tab-container5'" :type="21" :getparams="params[4]"></home-shell>
              </mt-tab-container-item>
               <mt-tab-container-item id="tab-container6">
                 <home-shell v-if="active == 'tab-container6'" :type="21" :getparams="params[5]"></home-shell>
              </mt-tab-container-item>
               <mt-tab-container-item id="tab-container7">
                 <home-shell v-if="active == 'tab-container7'" :type="21" :getparams="params[6]"></home-shell>
              </mt-tab-container-item>
               <mt-tab-container-item id="tab-container8">
                 <home-shell v-if="active == 'tab-container8'" :type="21" :getparams="params[7]"></home-shell>
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
                        title:'推荐',
                        topid:'',
                    },
                    {
                        title:'养生',
                        topid:337,
                    },
                    {
                        title:'老年',
                        topid:338,
                    },
                    {
                        title:'心理',
                        topid:341,
                    },
                    {
                        title:'母婴',
                        topid:362,
                    },
                    {
                        title:'用药',
                        topid:383,
                    },
                    {
                        title:'疾病',
                        topid:390,
                    },
                    {
                        title:'饮食',
                        topid:404,
                    }
                ],
                active:"tab-container1",
                params:[
                    {
                        url:serverapi.recommend,
                        option:{params:{}}
                    },
                    {
                        url:serverapi.article,
                        option:{params:{catid:337}}
                    },
                    {
                        url:serverapi.article,
                        option:{params:{catid:338}}
                    },
                    {
                        url:serverapi.article,
                        option:{params:{catid:341}}
                    },
                    {
                        url:serverapi.article,
                        option:{params:{catid:362}}
                    },
                    {
                        url:serverapi.article,
                        option:{params:{catid:383}}
                    },
                    {
                        url:serverapi.article,
                        option:{params:{catid:390}}
                    },
                    {
                        url:serverapi.article,
                        option:{params:{catid:404}}
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
