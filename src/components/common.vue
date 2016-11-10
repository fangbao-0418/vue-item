

<template>
    <div>
        <div style="padding-top:1.44rem;padding-bottom:.80rem;">
            <router-view></router-view>
        </div>
        <my-footer></my-footer>
    </div>

</template>

<script>


    import myFooter from './footer.vue';
    export default {
        data () {
            return {
                msg: "首页"
            }
        },
        components: {
            'my-footer': myFooter
        }
    }
</script>
<style scoped>

</style>
