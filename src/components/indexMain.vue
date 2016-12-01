
<template>

    <div>
        <div class="ad_content"  v-for="item in items.list">
            <a :href="item.text_url">
                <div v-html="item.code"></div>
                <div class="content-info">
                    <ul>

                        <li><span v-if="item.note" class="note"><el-tag :type="types(item.note)">{{item.note}}</el-tag></span></li>
                    <!--     <li><span class="click">{{item.hits}}</span></li> -->
                        <li><span class="time">{{item.ago}}</span></li>
                    </ul>
                </div>
            </a>
            <div class="clear"></div>
        </div>
    </div>

</template>


<script>

    //http://www.ey99.com/api/mobile/ad.php

    export default {
        props: ['items'],
        computed:{
           
        },
        data () {
            return {

            }
        },
        mounted(){

        },
        methods:{
            types(note){
                switch(note){
                    case "推荐":
                        return "danger";
                    break;
                    case "保健食品":
                        return "success";
                    break;
                    case "营养食品":
                        return "success";
                    break;
                    default:
                        return "gray";
                    break;
                }               
            }
        },
        filters:{
            
        }
    }
</script>


<style lang="sass" scoped>
    .click, .time {
        font-size:12px;
        height:18px;
        line-height: 18px;
    }
    .note{
        display: inline-block;
        margin-right:.2rem;
       
        .el-tag{
             font-size:12px;
             height:16px;
             line-height: 16px;
        }
    }
</style>
