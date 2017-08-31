<template lang="pug">
    #app
        header
            top-menu
        .container
            router-view
</template>

<script>
import topMenu from './components/topMenu.vue'

export default {
    components: {
        topMenu
    }
}
</script>

<style lang="scss">
    @import "assets/style/main";
</style>
