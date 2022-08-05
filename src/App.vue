<template>
  <HeaderComp />
  <HeroComp />
  <AboutUs />
  <ServicesComp />
  <OurExp />
  <BenefitsComp />
  <ContactsComp />
</template>

<script>
import './assets/style/normalize.scss';
import HeaderComp from './components/HeaderComp.vue';
import HeroComp from './components/HeroComp.vue';
import AboutUs from './components/AboutUs.vue';
import ServicesComp from './components/ServicesComp.vue';
import OurExp from './components/OurExp.vue';
import BenefitsComp from './components/BenefitsComp.vue';
import ContactsComp from './components/ContactsComp.vue';
export default {
  name: 'App',
  components: { HeaderComp, HeroComp, AboutUs, ServicesComp, OurExp, BenefitsComp, ContactsComp },
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
