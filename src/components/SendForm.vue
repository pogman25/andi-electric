<template lang="pug">
    .inputForm
        p(class="success", v-if="sending") Форма отправлена, в ближайшее время вам позвонят
        .step1.steps(v-if="!sending", :class="{passed: validateName}")
            input(id='sendName' v-model='name' placeholder='введите Имя', @keyup.enter="sendName")
            span(v-show="getError && !validateName") Введите своё имя
            .next(@click="sendName")
                svg( height="40" width="200")
                    rect(id="shape" height="40" width="200" stroke="#2c3e50" fill="none" rx="15" ry="15")
                    text(class="svgText" x="50" y="30" stroke="#2c3e50" fill="none") Шаг 1
                    text(class="svgTextNext" x="50" y="30" stroke="#2c3e50" fill="none") Дальше
        .step2.steps(v-show="validateName", :class="{passed: validateEmail}")
            input(id='sendEmail' v-model='email' placeholder='введите e-mail', @keyup.enter="sendEmail")
            span(v-show="getError && !validateEmail") Введите корректный email
            .next(@click="sendEmail")
                svg( height="40" width="200")
                    rect(id="shape" height="40" width="200" stroke="#2c3e50" fill="none" rx="15" ry="15")
                    text(class="svgText" x="50" y="30" stroke="#2c3e50" fill="none") Шаг 2
                    text(class="svgTextNext" x="50" y="30" stroke="#2c3e50" fill="none") Дальше
        .step3.steps(v-show="validateEmail", :class="{passed: validatePhone}")
            input(id='sendPhone' v-model='phone', placeholder='введите телефон', @keyup.enter="sendPhone")
            span(v-if="getError && !validatePhone") Введите номер телефона
            .next(@click="sendPhone")
                svg( height="40" width="200")
                    rect(id="shape" height="40" width="200" stroke="#2c3e50" fill="none" rx="15" ry="15")
                    text(class="svgText" x="50" y="30" stroke="#2c3e50" fill="none") Шаг 3
                    text(class="svgTextNext" x="50" y="30" stroke="#2c3e50" fill="none") Дальше
        .step4.steps(v-show="validatePhone")
            textarea(id='sendText' v-model='text' placeholder='введите текст собщения' rows="10" cols="20", @keyup.enter="sendForm")
            .submit(@click="sendForm")
                svg( height="40" width="200")
                    rect(id="shape" height="40" width="200" stroke="#2c3e50" fill="none" rx="15" ry="15")
                    text(class="svgText" x="50" y="30" stroke="#2c3e50" fill="none") Шаг 4
                    text(class="svgTextNext" x="30" y="30" stroke="#2c3e50" fill="none") Отправить
</template>

<script>
    export default {
        name: 'vue-send-from',
        data () {
            return {
                name: '',
                text: '',
                email: '',
                phone: '',
                validateName:  false,
                validateEmail: false,
                validatePhone: false,
                getError: false,
                sending: false
            }
        },
        methods : {
            handleSubmit: function () {

            },
            sendName: function () {
                this.validateName = !!this.name.trim();
                this.getError = !this.name.trim();
                setTimeout(() => {
                    document.getElementById('sendEmail').focus();
                }, 700);
            },
            sendEmail: function () {
                const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                this.validateEmail = re.test(this.email);
                this.getError = !re.test(this.email);
                setTimeout(() => {
                    document.getElementById('sendPhone').focus();
                }, 700);
            },
            sendPhone: function () {
                const re = /\d{10}/;
                let phone = this.phone.replace(/\D/g, '');
                this.validatePhone = re.test(phone);
                if (re.test(phone)) this.phone = phone;
                this.getError = !re.test(phone);
                setTimeout(() => {
                    document.getElementById('sendText').focus();
                }, 700);
            },
            sendForm: function () {
                document.getElementById('sendText').blur();
                this.name = '';
                this.text = '';
                this.email = '';
                this.phone = '';
                this.getError = false;
                this.validateName = false;
                this.validateEmail = false;
                this.validatePhone = false;
                this.sending = true;
                setTimeout(() => {
                    this.sending = false;
                    document.getElementById('sendName').focus();
                }, 5000)
            }
        }
    }
</script>

<style lang="scss">
    .inputForm {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        position: relative;
        .steps {
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: all 0.3s;
            position: absolute;
            top: 0;


            span {
                font-size: 1em;
                color: #850000;
            }
        }

        .success {
            color: #275a92;
            font-size: 1.4em;
        }

        .passed {
            animation-name: disappear;
            animation-duration: 1s;
            animation-fill-mode: forwards;
        }

        input, textarea {
            border-radius: 5px;
            border: none;
            outline: none;
            margin: 10px 0;
            padding: 6px 5px;
            font-size: 1em;
            width: 50%;
            min-width: 300px;
            background-color: transparentize(#fff, 0.5);

            &:focus {
                background-color: #fff;
            }
        }
    }
    #shape {
        stroke-width: 4px;
        stroke-dasharray: 150 350;
        stroke-dashoffset: -240;
        transition: 1s all ease;
    }
    .svgText, .svgTextNext {
        top: 10px;
        left: 0;
        right: 0;
        margin: 0 auto;
        position: absolute;
        font-size: 1.8em;
        transition: 0.5s all ease;
    }

    .svgText {
        stroke-dasharray: 50 0;
        stroke-dashoffset: 0;
    }

    .svgTextNext {
        stroke-dasharray: 0 200;
        stroke-dashoffset: 0;
    }
    svg {
        cursor: pointer;
        &:hover {
            .svgText {
                stroke-dasharray: 0 200;
            }
            .svgTextNext {
                stroke-dasharray: 50 0;
                fill: transparentize(#191a44, 0.6);
            }
            #shape {
                stroke-dasharray: 25 0;
                stroke-dashoffset: 0;
            }
        }
    }
    @keyframes disappear {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: scale(0.2) translateX(1500px) translateY(-250px);
        }
    }
</style>