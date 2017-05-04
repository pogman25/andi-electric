<template lang="pug">
    #app
        vue-head
        button(@click="aboutWelder") О сварочниках
        button(@click="aboutUs") Способы обращения
        transition(appear)
            template(v-if="currentView === 1")
                vue-list
        transition(appear)
            template(v-if="currentView === 2")
                vue-head
</template>

<script>
    import VueHead from './components/Head.vue';
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Всё сварится - мы поможем!',
                currentView: 0
            }
        },
        components: {
            VueHead,
            VueList: () => import('./components/ListOfTrans.vue')
        },
        methods: {
            aboutWelder: function() {
                this.currentView = 1;
            },
            aboutUs: function() {
                this.currentView = 2;
            }
        }
    }
</script>

<style lang="scss">
    :root {
        background: #e19d6f;
        background: url('./assets/texture.jpg') 50% 25%;
        background-size: cover;
        background-attachment: fixed;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 10px auto;
        max-width: 1400px;
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
    .v-enter-active {
        transition: all .3s ease;
    }
    .v-enter
        /* .slide-fade-leave-active для <2.1.8 */ {
        transform: rotateY(90deg);
        opacity: 0;
    }
</style>
