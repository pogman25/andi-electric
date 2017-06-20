<template lang="pug">
    .aboutUs
        h2 {{ msg }}
</template>

<script>
    export default {
        name: 'vue-about-us',
        data () {
            return {
                msg: 'Здесь будет информация о нас'
            }
        }
    }
</script>

<style lang="scss">

</style>