<template>
  <HeaderComp />
  <router-view></router-view>
  <ContactsComp />
</template>

<script>
import './assets/style/normalize.scss';
import HeaderComp from './components/Header/HeaderComp.vue';
import ContactsComp from '@/components/ContactsComp.vue';

export default {
  name: 'App',
  components: { HeaderComp, ContactsComp },
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

#app {
  padding-top: 10px;
}
</style>
