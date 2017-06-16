<template lang="pug">
    .sendForm
        h2.
            Лучший способ с нами связаться - это позвонить по одному из номеров:
            <br>+7-950-65-46-565
            <br>+7-987-65-43-221
        p.
            Вы также можете написать нам по адресу:<br>
            <span>andi-electric@mail.ru</span><br>
            или заполнить форму обратной связи
        vue-send-form
</template>

<script>
    import VueSendForm from './SendForm.vue';
    export default {
        name: 'vue-send-letter',
        data () {
            return {
            }
        },
        components: {
            VueSendForm
        }
    }
</script>

<style lang="scss">
    .sendForm {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;

        span {
            font-weight: bold;
            font-size: 1.5em;
        }

    }
</style>