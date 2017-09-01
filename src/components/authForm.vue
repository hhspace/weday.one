<template lang="pug">
    div.login
        input#tabInput.sign-in(type="radio" name="tab" checked)
        label.tab(for="tabInput", v-on:click="showForm(1)") Вход
        input#tabRegistration.sign-up(type="radio" name="tab")
        label.tab(for="tabRegistration", v-on:click="showForm(2)") Регистрация

        transition(name="component-fade")
            form.sign-in-form(v-show="showSignInForm", @submit.prevent="auth(model)")
                .input-group
                    label.label(for="email") Почта
                    input#email.input(type="email" required v-model.lazy="model.email")
                .input-group
                    label.label(for="password") Пароль
                    input#password.input(type="password" data-type="password" required v-model.lazy="model.password")
                button.btn.btn-primary.outline(type="submit") Войти
                .hr
                .footer-link
                    a(v-on:click="showForm(3)") Забыли пароль?
        transition(name="component-fade")
            form.sign-up-form(v-show="showSignUpForm", @submit.prevent="auth(model)")
                .input-group
                    label.label(for="email") Почта
                    input#email.input(type="email" required v-model.lazy="model.email")
                .input-group
                    label.label(for="password") Пароль
                    input#password.input(type="password" data-type="password" required v-model.lazy="model.password")
                .input-group
                    label.label(for="repassword") Пароль
                    input#repassword.input(type="repassword" data-type="password" required v-model.lazy="model.repassword")
                button.btn.btn-primary(type="submit") Регистрация
                .hr
                .footer-link
                    label(for="tabInput", v-on:click="showForm(1)") Уже зарегистрированы?
        transition(name="component-fade", @submit.prevent="auth(model)")
            form.sign-reset-form(v-show="showResetForm")
                .input-group
                    label.label(for="emailReset") Почта
                        sup.error *
                    input#emailReset.input(type="email" required v-model.lazy="model.emailReset")
                span
                    sup.error *
                    | На указанную почту придет информация о восстановлении доступа
                button.btn.btn-primary(type="submit") Восстановить
</template>
<script>
    import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                showSignInForm: true,
                showSignUpForm: false,
                showResetForm: false,
                model: {
                    email: '',
                    password: '',
                    repassword: null
                }
            }
        },
        methods: {
            ...mapActions(['auth']),
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