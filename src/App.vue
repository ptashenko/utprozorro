<template>
  <HeaderComp />
  <HeroComp />
  <AboutUs />
  <ServicesComp />
</template>

<script>
import './assets/style/normalize.scss';
import HeaderComp from './components/HeaderComp.vue';
import HeroComp from './components/HeroComp.vue';
import AboutUs from './components/AboutUs.vue';
import ServicesComp from './components/ServicesComp.vue';
export default {
  name: 'App',
  components: { HeaderComp, HeroComp, AboutUs, ServicesComp },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  font-family: Montserrat, sans-serif;
  margin: 0 auto;
}
</style>
