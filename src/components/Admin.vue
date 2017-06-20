<template lang="pug">
    .admin
        h2 {{ msg }}
        .secure(v-if='!secureControl')
            p Введинет пароль, в SML его знают все
            input(:value='getPass', @input="sendPass")
        .tableAdmin(v-if='secureControl')
            ul
              li
                div
                  p Имя
                div
                  p Email
                div
                  p Телефон
                div
                  p Сообщение
              li(v-for="item in mails", @click="updMail(item)")
                  div
                      p {{ item.name }}
                  div
                      p {{ item.email }}
                  div
                      p {{ item.phone }}
                  div
                      p {{ item.text }}
                  .delForm(@click.stop="delMail(item.id)") X
        .updateTable(v-if="!!currentId")
           ul
             li
               div
                  input(type="text" v-model="name")
               div
                  input(type="text" v-model="email")
               div
                  input(type="text" v-model="phone")
               div
                    textarea(v-model="text")
           button(@click="sendUpd") Обновить
</template>

<script>
    import { DEL_MAIL, UPD_MAIL, PASSWORD } from '../constants';

    export default {
        name: 'vue-admin',
        data () {
            return {
                msg: 'Админ панель, отправленные сообщения',
                pass: '',
                secure: false,
                currentId: '',
                name: '',
                email: '',
                phone: '',
                text: ''
            }
        },
        computed: {
            secureControl: function () {
                return this.$store.state.password === '0272';
            },
            mails: function () {
                return this.$store.state.mails;
            },
            getPass: function () {
                return this.$store.state.password;
            }
        },
        methods: {
            sendPass: function (e) {
                this.$store.commit(PASSWORD, e.target.value);
            },
            delMail: function (id) {
                this.$store.commit(DEL_MAIL, id);
            },
            updMail: function ({id, name, email, phone, text}) {
                this.currentId = id;
                this.name = name;
                this.phone = phone;
                this.email = email;
                this.text = text;
            },
            sendUpd: function () {
                const payload = {
                    id: this.currentId,
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    text: this.text
                };
                this.$store.commit(UPD_MAIL, payload);
                this.currentId = '';
                this.name = '';
                this.text = '';
                this.email = '';
                this.phone = '';
            }
        }
    }
</script>

<style lang="scss" scoped>
    .secure {
        max-width: 300px;
        margin: 0 auto;
    }
    input, textarea {
        border-radius: 5px;
        border: none;
        outline: none;
        margin: 10px;
        padding: 6px 5px;
        font-size: 1em;
        width: 100%;
        background-color: transparentize(#fff, 0.5);

        &:focus {
            background-color: #fff;
        }
    }

    ul {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        li {
            display: flex;
            position: relative;
            background-color: transparentize(#fff, 0.6);

            &:first-child{
                border-bottom: 1px solid #275a92;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
            }

            &:last-child{
                border-bottom-left-radius: 5px;
                border-bottom-right-radius: 5px;
            }

            .delForm {
                visibility: hidden;
                position: absolute;
                right: 10px;
                color: #fff;
                border-radius: 5px;
                cursor: pointer;
            }

            &:hover .delForm {
                visibility: visible;
            }

            div {
                display: flex;
                justify-content: center;

                p {
                    text-align: center;
                }

                &:nth-child(-n + 3){
                    flex: 1 1 0;
                    border-right: 1px solid #275a92;
                }
                &:nth-child(4){
                    flex: 2 1 0;
                }
            }
        }
    }

    .updateTable {
        display: flex;
        flex-direction: column;

        ul {
            width: 100%;
            flex-direction: row;
            margin-top: 10px;

            li {
                width: 100%;
            }
        }

        button {
            max-width: 300px;
            margin: 10px 40px 0 0;
            align-self: flex-end;
        }
    }
</style>