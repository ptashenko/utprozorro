<template>
  <HeaderComp />
  <MainPage @toggleModal="toggleModal" />
  <!-- <AboutPage />
  <BenefitsPage />
  <ExperiencePage />
  <ServicesPage />
  <ContactsComp />
  <ToTopButton/> -->
  <ModalComp v-if="store.state.showModal" @toggleModal="toggleModal" @handleSubmit="handleSubmit" /> 
</template>

<script>
import './assets/style/normalize.scss';
import HeaderComp from './components/Header/HeaderComp.vue';
// import ContactsComp from '@/components/Contacts/ContactsComp.vue';
import MainPage from './components/MainPage/MainPage.vue';
// import AboutPage from './components/About/AboutPage.vue';
// import BenefitsPage from './components/BenefitsPage/BenefitsPage.vue';
// import ExperiencePage from './components/Experience/ExperiencePage.vue';
// import ServicesPage from './components/ServicesPage/ServicesPage.vue';
// import ToTopButton from './components/ToTopButton/ToTopButton.vue';
import ModalComp from './components/Modal/ModalComp.vue';
import store from '@/store';
import { provide } from 'vue';

export default {
  name: 'App',
  // components: { HeaderComp, ContactsComp, MainPage, AboutPage, BenefitsPage, ExperiencePage, ServicesPage, ToTopButton, ModalComp },
  components: { HeaderComp, MainPage, ModalComp },
  setup() {
    provide('store', store.state);

    const toggleModal = () => {
      store.state.showModal = !store.state.showModal;
    }

    const handleSubmit = () => {
      console.log('submit');
    }

    return { store, toggleModal, handleSubmit };
  }
};
</script>

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
