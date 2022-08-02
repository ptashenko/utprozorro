<template>
<HeaderComp />
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import './assets/style/normalize.scss'
export default {
    name: "App",
    components: { HeaderComp }
}
</script>

<style lang="scss">
body {
  font-family: Montserrat, sans-serif;
}
</style>
