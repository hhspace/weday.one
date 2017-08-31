<template lang="pug">
    #app
        header(v-show="currentRoute !== '/login'") <!-- Условие если страница авторизации то не показываем применить в будущем в модалках -->
            top-menu
        .container
            router-view
</template>

<script>
import topMenu from './components/topMenu.vue'
import { router } from './app'

export default {
    data() {
        return {
            currentRoute: router.currentRoute.path
        }
    },
    components: {
        topMenu
    },
    watch: {
        '$route' (to, from) {
            this.currentRoute = to.path
        }
    }
}
</script>

<style lang="scss">
    @import "assets/style/main";
</style>
