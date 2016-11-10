
<!--conten1-->
<template>
    <!-- content1-->
    <div>
        <div class="ad_content"  v-for="item in items.list">
            <!--代码区域 start -->
            {{{ item.code }}}
            <!--代码区域 end -->

            <div class="content-info">
                <ul>
                    <li><span class="Drugs">药品</span></li>
                    <li><span class="click">1365点击</span></li>
                    <li><span class="time">24小时前</span></li>
                </ul>
            </div>

            <div class="clear"></div>
        </div>
    </div>

</template>


<script>

    //http://www.ey99.com/api/mobile/ad.php

    export default {
        props: ['items','scroll_height'],
        data () {
            return {
                h:"",
            }
        },
        mounted(){
            //ios 加高
            // $(".scroller").height( $(".scroller")[0].clientHeight + 50);
            $(".scroller").height( $(".scroller")[0].clientHeight);
        },
        methods:{

        }
    }
</script>


<style>

</style>
