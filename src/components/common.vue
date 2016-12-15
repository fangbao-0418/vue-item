

<template>
        <div>
            <router-view></router-view>
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
