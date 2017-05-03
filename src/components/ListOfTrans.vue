<template lang="pug">
    #list
        ul
          li
            p {{ msg }}
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                msg: 'модель сварочника!'
            }
        }
    }
</script>

<style lang="scss">
    #list{
        background: #d7fdff;
    }
</style>