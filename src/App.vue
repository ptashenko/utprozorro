<template>
  <HeaderComp />
  <HeroComp />
  <AboutUs />
  <ServicesComp />
  <OurExp />
</template>

<script>
import './assets/style/normalize.scss';
import HeaderComp from './components/HeaderComp.vue';
import HeroComp from './components/HeroComp.vue';
import AboutUs from './components/AboutUs.vue';
import ServicesComp from './components/ServicesComp.vue';
import OurExp from './components/OurExp.vue';
export default {
  name: 'App',
  components: { HeaderComp, HeroComp, AboutUs, ServicesComp, OurExp },
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
