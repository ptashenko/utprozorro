<template>
<HeaderComp />
<HeroComp />
</template>

<script>
import './assets/style/normalize.scss'
import HeaderComp from './components/HeaderComp.vue';
import HeroComp from './components/HeroComp.vue';
export default {
    name: "App",
    components: { HeaderComp, HeroComp }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  font-family: Montserrat, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
