<template lang="pug">
    #main
        div(:class="title ? 'mainPage' : 'landPage'" )
            vue-head
            transition-group(tag="div" name="btn" class="vue-btn" appear)
                router-link(class="btn1", to="/", :key="1" )
                    p Главная
                router-link(to="list", :key="2", class="btn2")
                    p О сварочниках
                router-link(to="send", :key="3", class="btn3")
                    p Способы обращения
                router-link(to="about", :key="4", class="btn4")
                    p О нас
        transition(name="fade")
            router-view
</template>

<script>
    import VueHead from './components/Head.vue';
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Всё сварится - мы поможем!',
                title: false
            }
        },
        watch: {
          '$route' (to) {
              this.title = !!to.name;
          }
        },
        components: {
            VueHead
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

    body {
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
    }

    #main {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        max-width: 1400px;
        margin: 10px auto;
        color: #2c3e50;
        position: relative;
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
        height: 330px;

        h1, h2 {
            font-size: 1.3em;
            transition: all 1s;
        }
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
    
    .fade-enter-active, .fade-leave-active {
        transition: all 1s ease;
    }
    .fade-enter{
        transform: rotateY(90deg);
        opacity: 0;
    }
    .fade-enter-to, .fade-leave{
        opacity: 1;
    }
    .fade-leave-to {
        position: absolute;
        opacity: 0;
        transform: translateX(100px) scale(0.75);
    }
    .vue-btn {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        font-size: 1.3em;
        background: transparent;
        mix-blend-mode: difference;
        width: 66%;
        cursor: pointer;
        perspective: 800px;

        p {
            margin: 0;
            padding: 0 15px;
            color: #fff;
        }
    }
    @media screen and (max-width: 950px) {
        .vue-btn {
            justify-content: space-around;
            width: 90%;
        }
    }
    .btn-enter-active {
        transition: all 1s cubic-bezier(.175, 2, .5, .1);
    }
    .btn-enter {
        opacity: 0;
        transform: rotateX(-90deg);
    }
    @for $i from 1 to 5 {
        .btn#{$i} {
            @extend %btn-num;
            transition-delay: $i*400+ms;
        }
    }

    %btn-num {
        background: url('./assets/texture-btn.jpg') no-repeat center center;
        border: 1px solid #ccc;
        border-radius: 20px/25px;
        background-size: cover;
        transform-origin: 100% 0;
    }

</style>
