<template>
  <Transition name="slide-fade">
    <a class="toTop" v-if="store.currentScroll > 0" @click="scrollToTop()">^</a>
  </Transition>
</template>

<script>
import { inject } from 'vue';

export default {
  data() {
    return {
      store: inject('store'),
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};
</script>

<style lang="scss">
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(50px);
  opacity: 0;
}

.toTop {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 30px;
  right: 30px;

  width: 50px;
  height: 50px;
  border-radius: 50%;

  background: #1550e7;
  color: #fff;

  text-align: center;
  font-size: 36px;

  opacity: 0.1;
  transition: all 250ms linear;

  cursor: pointer;

  &:hover {
    opacity: 1;
  }
}
</style>