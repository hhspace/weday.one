<template lang="pug">
    .container
        .menu
            .menu__left
                .menu__left-logo
                    router-link(tag="a" to="/") WE
                        span DAY
                .menu__left-nav
                    ul
                        li
                            a Специалистам
                            ul.dropdown
                                li
                                    router-link(tag="a" to="/specialists") Информация
                                li
                                    router-link(tag="a" to="#") Документация
                                li
                                    router-link(tag="a" to="/specialists/eula") Пользовательское соглашение
                        li
                            a Молодоженам
                            ul.dropdown
                                li
                                    router-link(tag="a" to="/wd") Информация
                                li
                                    router-link(tag="a" to="/wd/category") Категории
                                li
                                    router-link(tag="a" to="/wd/specialists") Список специалистов
                                li
                                    router-link(tag="a" to="/wd/specialists/cart") Карточка специалистов для молодоженов
            .menu__right
                ul.menu__right-user
                    //Для не зарегистрированных пользователей
                    li
                        router-link(tag="a" to="/registration") Регистрация
                    li
                        router-link(tag="a" to="/login" class="login") Вход
                    //Для зарегистрированных пользователей
                    li
                        router-link(tag="a" to="#") Написать обзор
                    li
                        a Имя пользователя
                        ul.dropdown.right
                            li
                                router-link(tag="a" to="/specialists/cart") Карточка специалиста <!--Если будет -->
                            li
                                router-link(tag="a" to="/profile") Профиль <!--Если будет молодожен-->
                            li
                                router-link(tag="a" to="#") Выход
</template>

<script>

</script>

<style lang="sass" scoped>
    @import "../assets/style/variables"
    @import "../assets/style/components/header"
</style>
