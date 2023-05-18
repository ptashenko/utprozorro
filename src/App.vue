<script>
import './assets/style/normalize.scss';
import HeaderComp from './components/Header/HeaderComp.vue';
import ContactsComp from '@/components/Contacts/ContactsComp.vue';
import MainPage from '@/components/MainPage/MainPage.vue';
import AboutPage from './components/About/AboutPage.vue';
import BenefitsPage from './components/BenefitsPage/BenefitsPage.vue';
import ExperiencePage from './components/Experience/ExperiencePage.vue';
import ServicesList from './components/ServicesList/ServicesList.vue';
// import ToTopButton from './components/ToTopButton/ToTopButton.vue';
import ModalComp from './components/Modal/ModalComp.vue';

export default {
  name: 'App',
  data() {
    return {
      callOrder: false,
    }
  },
  components: {
    HeaderComp,
    MainPage,
    ModalComp,
    AboutPage,
    BenefitsPage,
    ExperiencePage,
    ContactsComp,
    ServicesList
  },
  methods: {
    togglecallOrder() {
      this.callOrder = !this.callOrder;
    }
  }
};
</script>

<template>
  <HeaderComp />
  <MainPage @openModal="togglecallOrder" />
  <AboutPage />
  <BenefitsPage />
  <ExperiencePage />
  <ServicesList @openModal="togglecallOrder" />
  <ContactsComp />
  <ModalComp v-if="callOrder" @toggleModal="togglecallOrder" />
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

body {
  font-family: Montserrat, sans-serif;
  margin: 0 auto;
}
</style>
