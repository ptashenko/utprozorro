<script>
import './assets/style/normalize.scss';
import HeaderComp from '@/components/views/HeaderComp.vue';
import ContactsComp from '@/components/views/ContactsComp.vue';
import MainPage from '@/components/views/MainPage.vue';
import AboutPage from '@/components/views/AboutPage.vue';
import BenefitsPage from '@/components/views/BenefitsPage.vue';
import ExperiencePage from '@/components/views/ExperiencePage.vue';
import ServicesList from '@/components/views/ServicesList.vue';
// import ToTopButton from '@/components/ToTopButton.vue';

export default {
  name: 'App',
  components: {
    HeaderComp,
    MainPage,
    AboutPage,
    BenefitsPage,
    ExperiencePage,
    ContactsComp,
    ServicesList,
  },
};
</script>

<template>
  <HeaderComp />
  <MainPage />
  <AboutPage />
  <BenefitsPage />
  <ExperiencePage />
  <ServicesList />
  <ContactsComp />
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

ul,
li,
a {
  padding: 0;
  margin: 0;
  list-style: none;
}

body {
  font-family: Montserrat, sans-serif;
  margin: 0 auto;
  color: #000;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

p,
h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  padding: 0;
}</style>
