<script>
import './assets/style/normalize.scss';
import HeaderComp from './components/views/Header/HeaderComp.vue';
import ContactsComp from '@/components/views/Contacts/ContactsComp.vue';
import MainPage from '@/components/views/MainPage/MainPage.vue';
import AboutPage from './components/views/About/AboutPage.vue';
import BenefitsPage from './components//views/BenefitsPage/BenefitsPage.vue';
import ExperiencePage from './components/views/Experience/ExperiencePage.vue';
import ServicesList from './components/views/ServicesList/ServicesList.vue';
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
