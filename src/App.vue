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
import ModalComp from '@/components/ModalComp.vue';

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
    },
    openModal() {
      this.$modal.show(this.modalName);
    },
    closeModal() {
      this.$modal.hide(this.modalName);
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
