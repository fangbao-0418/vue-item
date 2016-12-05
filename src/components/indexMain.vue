<style>
   
    
     .clear{
        clear: both;
    }
    .ad_content{
        width:5.8rem;
        margin: 0 auto;
        padding:0;
        position: relative;
        margin-bottom: .1rem;
    }
    .ad_code_one{
        width:100%;
        min-height: 1.5rem;
        padding: .08rem 0px .16rem 0px;
       
        border-bottom:1px solid #fafafa;
    }
    .ad_code_two{
        padding-top:.16rem;
        width:100%;
        padding-bottom:.8rem;
        border-bottom:1px solid #fafafa;
    }
    .ad_code_three{
        width:100%;
        padding-top:.1rem;
        padding-bottom:.8rem;
        border-bottom:1px solid #fafafa;
    }
    .content1-left{
        width: 4rem;
        min-height: 1.5rem;
        float: left;
    }

    .content-title h2{
        padding-right:.2rem;
        font-size: .3rem;
    }

    .content-info{
        position: absolute;
        bottom:.3rem;
    }
    .content-info ul{
        width:100% ;
        height:.3rem ;
        line-height: .3rem;
    }

    .content-info li {
        float: left;
    }



    .content1-right{
        width: 1.8rem;min-height: 1.5rem;
        float:right;
    }
    .content1-right  img{
        width:1.8rem;
        height:1.2rem;
    }
    .click,.time{
        color:#8a8a8a ;
        font-size:.22rem ;

        margin-right:.26rem;
        display: inline-block;
    }



    .content-Title{
        padding-bottom: .16rem;
    }

    .content2-img{
        width: 5.8rem;height: 1.23rem;
    }



    .content2-img img{
        display: block!important;
        float: left!important;
    }
    .content2-img img{
        width:1.89rem;
        height:1.23rem;
    }
    .c2-img{
        margin-right: .06rem;
    }

    .content3-img img{
        width:5.79rem;
        height:2.84rem;
    }


</style>

<template>

    <div>
        <div class="ad_content"  v-for="item in items.list">
            <a :href="item.text_url" class="click_area">
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
    .click_area{
        display: inline-block;
    }

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

