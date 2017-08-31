<template>
    <div>
        <top-menu></top-menu>
        <router-view></router-view>
    </div>
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
