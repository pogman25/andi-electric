<template lang="pug">
    .sendForm
        label(for='sendName') Ваше имя
        input(id='sendName' v-model='sendName' placeholder='введите Имя')
        label(for='sendEmail') Ваш e-mail
        input(id='sendEmail' v-model='sendEmail' placeholder='введите e-mail')
        label(for='sendPhone') Ваш телефон
        input(id='sendPhone' v-model='sendPhone', @value='sendPhone' placeholder='введите телефон')
        label(for='sendText') Ваше сообщение
        textarea(id='sendText' v-model='sendText' placeholder='введите текст собщения' rows="10" cols="20")
        button(@onclick='handleSubmit') Оставить заявку
</template>

<script>
    export default {
        name: 'vue-send-letter',
        data () {
            return {
                sendName: '',
                sendText: '',
                sendEmail: '',
                sendPhone: '',
                validateEmail: false,
                validatePhone: false
            }
        },
        watch: {
            sendEmail: function () {
                const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                this.validateEmail = re.test(this.sendEmail);
            },
            sendPhone: function () {
                const re = /\d{10}/;
                let phone = this.sendPhone.replace(/\D/g, '');
                this.validatePhone = re.test(phone);
                if (re.test(phone)) this.sendPhone = phone;
            }
        },
        methods : {
            handleSubmit: function () {

            }
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

        label {
            font-weight: bold;
            font-size: 1.5em;
            mix-blend-mode: difference;
        }

        input, textarea {
            border-radius: 4px;
            margin: 10px 0;
            padding: 6px 5px;
            font-size: 1em;
            width: 50%;
            min-width: 300px;
        }

    }
</style>