<template lang="pug">
    #app
        vue-head
        vue-list
</template>

<script>
    import VueHead from './components/Head.vue';
    import VueList from './components/ListOfTrans.vue';
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Всё сварится - мы поможем!'
            }
        },
        components: {
            VueHead,
            VueList
        }
    }
</script>

<style lang="scss">
    :root {
        background: #e19d6f;
        background: url('./assets/texture.jpg') 50% 25%;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 10px auto;
        max-width: 1200px;
        height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        align-content: center;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
