
<!--conten1-->
<template>
    <!-- content1-->
    <div id="items">
    <div class="item" v-for="(item,index) in items">
        <collect-del-button v-if="collect" :items.sync="items" :type="22" :index="index" class="collect-del-botton"></collect-del-button>   
        <router-link  :to="{ name: 'investmentShow', query:{id:item.itemid}, params: { item : item }}" >
            <div class="item_left">
                <div class="item_tit">
                    {{item.title | dSubstr(20) }}
                </div>

                <span class="item_hit">{{item.hits}}点击</span>
                <span class="item_date">{{item.editdate}}</span>
            </div>
            <img  v-lazy="item.sptp[0]" class="item_img" />
            <div class="clear"></div>
        </router-link>
    </div>
    </div>

</template>


<script>
    
    import collectDelButton from './collectDelButton';

    export default {
        props: {
            items:{},
            collect:{
                type:Boolean,
                default:false
            }
        },
        computed:{
            del(){
                return true;
            }
        },
        data () {
            return {
               
            }
        },
        components:{
            collectDelButton
        },
        
        mounted(){
            
        },
        methods:{
           
        },
        filters:{
            dSubstr(title,length){
                return title.substr(0,length);
            }
        },
        events: {

        },


    }
</script>


<style lang="sass" scoped>
    .item{
        margin:0px .3rem;
        padding:.2rem 0px;
        width:5.8rem;
        border-bottom: 1px solid #fafafa;
        position: relative;
        .collect-del-botton{
            position:absolute;
            right:0;
        }
    }

    .item_left{
        width:4rem;
        float:left;
    }
    .item_tit{
        padding-right:.2rem;
        padding-top:.1rem;
        font-size: .3rem;
        height:.8rem;
    }
    .item_img{
        width: 1.8rem;
        height: 1.2rem;
    }
    .item_cat{
        border: 1px solid #bae3fa;
        color: #bae3fa;
        border-radius: .05rem;
        font-size: .16rem;
        padding: 0 .05rem;
        height: .24rem;
        line-height: .30rem;
        display: inline-block;
        margin-right: .14rem;
    }
    .item_hit{
        color: #8a8a8a;
        font-size: .22rem;
        height: .34rem;
        line-height: .34rem;
        margin-right: .26rem;
        display: inline-block;
    }
    .item_date{
        height: .34rem;
        line-height: .34rem;
        color: #8a8a8a;
        font-size: .22rem;
        margin-right: .26rem;
        display: inline-block;
    }
</style>
