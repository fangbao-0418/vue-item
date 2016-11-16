
<template>

    <div>
        <div class="ad_content"  v-for="item in items.list">
            <div v-html="item.code"></div>
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
        props: ['items'],
        data () {
            return {

            }
        },
        mounted(){

        },
        methods:{

        }
    }
</script>


<style>

</style>
