<template lang="pug">
    #app
        div(:class="title ? 'mainPage' : 'landPage'" )
            vue-head
            #buttons
                button(@click="aboutWelder") О сварочниках
                button(@click="aboutUs") Способы обращения
                button(@click="reset") Reset
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
                currentView: 0,
                title: false
            }
        },
        components: {
            VueHead,
            VueList: () => import('./components/ListOfTrans.vue')
        },
        methods: {
            aboutWelder: function() {
                this.currentView = 1;
                this.title = true;
            },
            aboutUs: function() {
                this.currentView = 2;
                this.title = true;
            },
            reset: function() {
                this.currentView = 0;
                this.title = false;
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
        max-width: 1400px;
        margin: 10px auto;
        color: #2c3e50;
    }

    .landPage, .mainPage {
        max-width: 1400px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        align-content: center;
        transition: all 1s;
        margin: 10px auto;
    }

    .landPage {
        height: 96vh;
        min-height: 400px;
    }

    .mainPage {
        height: 400px;
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
