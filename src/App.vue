<template>
  <HeaderComp />
  <MainPage @toggleModal="toggleModal" />
  <AboutPage />
  <BenefitsPage />
  <ExperiencePage />
  <ServicesPage />
  <ContactsComp />
  <ToTopButton/>
  <ModalComp v-if="store.state.showModal" @toggleModal="toggleModal" @handleSubmit="handleSubmit" /> 
</template>

<script>
import './assets/style/normalize.scss';
import HeaderComp from './components/Header/HeaderComp.vue';
import ContactsComp from '@/components/Contacts/ContactsComp.vue';
import MainPage from './components/MainPage/MainPage.vue';
import AboutPage from './components/About/AboutPage.vue';
import BenefitsPage from './components/BenefitsPage/BenefitsPage.vue';
import ExperiencePage from './components/Experience/ExperiencePage.vue';
import ServicesPage from './components/ServicesPage/ServicesPage.vue';
import ToTopButton from './components/ToTopButton/ToTopButton.vue';
import ModalComp from './components/Modal/ModalComp.vue';
import store from '@/store';
import { onMounted, provide } from 'vue';
import sendToTelegram from './services/fetchApi'
const throttle = require('lodash.throttle');
export default {
  name: 'App',
  components: { HeaderComp, MainPage, ModalComp, ToTopButton, AboutPage, BenefitsPage, ExperiencePage, ServicesPage, ContactsComp },
  setup() {
    provide('store', store.state);

    const toggleModal = () => {
      store.state.showModal = !store.state.showModal;
    }

    const handleSubmit = (data) => {
      console.log(data);
    }

    const gatherFormData = (linkTarget) => {
      const form = linkTarget;
      const orderEntries = new Map();
      for (let input of form) {
        if (input.type !== 'submit') {
          orderEntries.set(input.name, input.value);
        }
      }
      const order = Object.fromEntries(orderEntries);
      return order;
    }

    provide('formDataGather', gatherFormData)

    const calcService = (order) => {
      sendToTelegram(order);
    }

    provide('calcService', calcService);

    const windowScrollHeight = onMounted(() => {
      window.addEventListener('scroll', throttle(() => {
        store.state.currentScroll = window.pageYOffset;
      }))
    })

    return { store, toggleModal, handleSubmit, windowScrollHeight };
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
