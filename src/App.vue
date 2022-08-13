<template>
  <HeaderComp :page="page" @pageName="changePageName" />
  <router-view :page="page" @pageName="changePageName"></router-view>
  <ContactsComp />
</template>

<script>
import './assets/style/normalize.scss';
import HeaderComp from './components/Header/HeaderComp.vue';
import ContactsComp from '@/components/Contacts/ContactsComp.vue';

export default {
  name: 'App',
  components: { HeaderComp, ContactsComp },
  data() {
    return {
      page: 'main',
    }
  },
  methods: {
    changePageName(name) {
      this.page = name;
    }
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
