<template lang="pug">
    .menu
        .menu__left
            .menu__left-logo
                router-link(tag="a" to="/") Главная
            .menu__left-nav
                ul
                    li
                        a Специалистам
                        ul.dropdown
                            li
                                router-link(tag="a" to="/specialists") Специалистам
                            li
                                router-link(tag="a" to="/specialists/cart") Карточка специалиста
        .menu__right
            ul.menu__right-user
                li
                    router-link(tag="a" to="/registration") Регистрация
                li
                    router-link(tag="a" to="/login") Вход
                li
                    router-link(tag="a" to="/profile") Профиль
                li
                    router-link(tag="a" to="#") Выход
</template>

<script>

</script>

<style lang="scss">

</style>
