<template>
    <div>
        {{this.$route.params}}
    </div>
</template>

<script>
    export default {
        mounted(){
            console.log(this.$route.params);
        }
    }
</script>