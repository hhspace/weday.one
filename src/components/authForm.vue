<template lang="pug">
    div.login
        input#tabInput.sign-in(type="radio" name="tab" checked)
        label.tab(for="tabInput", v-on:click="showForm(1)") Вход
        input#tabRegistration.sign-up(type="radio" name="tab")
        label.tab(for="tabRegistration", v-on:click="showForm(2)") Регистрация

        transition(name="component-fade")
            form.sign-in-form(v-show="showSignInForm")
                .input-group
                    label.label(for="email") Почта
                    input#email.input(type="email" required)
                .input-group
                    label.label(for="pass") Пароль
                    input#pass.input(type="password" data-type="password" required)
                button.btn.btn-primary.outline(type="submit") Войти
                .hr
                .footer-link
                    a(v-on:click="showForm(3)") Забыли пароль?
        transition(name="component-fade")
            form.sign-up-form(v-show="showSignUpForm")
                .input-group
                    label.label(for="emailReg") Почта
                    input#emailReg.input(type="email" required)
                .input-group
                    label.label(for="passReg") Пароль
                    input#passReg.input(type="password" data-type="password" required)
                .input-group
                    label.label(for="passReg2") Повторите пароль
                    input#passReg2.input(type="password" data-type="password" required)
                button.btn.btn-primary(type="submit") Регистрация
                .hr
                .footer-link
                    label(for="tabInput", v-on:click="showForm(1)") Уже зарегистрированы?
        transition(name="component-fade")
            form.sign-reset-form(v-show="showResetForm")
                .input-group
                    label.label(for="emailReset") Почта
                    input#emailReset.input(type="email" required)
                span
                    sup.error *
                    | На указанную почту придет информация о восстановлении доступа
                button.btn.btn-primary(type="submit") Восстановить
</template>
<script>
    export default {
        data() {
            return {
                showSignInForm: true,
                showSignUpForm: false,
                showResetForm: false,
            }
        },
        methods: {
            showForm(num) {
                switch(num) {
                    case 1:
                        this.showSignInForm = true
                        this.showSignUpForm = false
                        this.showResetForm = false
                        break;

                    case 2:
                        this.showSignInForm = false
                        this.showSignUpForm = true
                        this.showResetForm = false
                        break;
                    case 3:
                        this.showSignInForm = false
                        this.showSignUpForm = false
                        this.showResetForm = true
                        break;

                    default:
                        break;
                }
            }
        }
    }
</script>
<style lang="sass" scoped>
    @import "../assets/style/variables"
    @import "../assets/style/components/auth"
</style>