<script>
import MobileMenu from './MobileMenu.vue'

export default {
  components: {
    MobileMenu
  },
  data() {
    return {
      mobileMenu: false,
    }
  },
  methods: {
    mobileMenuToggle() {
      this.mobileMenu = !this.mobileMenu;

    if (this.mobileMenu) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  },
}
}
</script>

<template>
  <header class="header">
    <div class="container">
      <ul class="header__list">
        <li class="header__item">
          <a href="#" class="header__link">
            <img class="header__image--logo" src="../../assets/svg/logo.svg" alt="logo" />
          </a>
        </li>
        <ul class="header__navigation">
          <li class="header__navigationItem" v-for="(item, idx) of headerSection.headerLinks" :key="idx">
            <a :href="item.hash" class="header__navigationLink">
              {{ item.name }}
            </a>
          </li>
        </ul>
        <li class="header__item header__item--contacts">
          <ul class="header__contacts">
            <li class="header__item" v-for="(item, idx) of headerSection.headerContacts" :key="idx">
              <a :href="item.link" class="header__link header__link--bold">
                {{ item.text }}
              </a>
            </li>
            <li class="header__item header__item--margin">{{ headerSection.headerSchedule }}</li>
          </ul>
        </li>
        <li class="header__item header__item--burger">
          <img @click="mobileMenuToggle()" class="header__image--burger" src="../../assets/svg/burger_icons.svg"
            alt="logo" />
        </li>
      </ul>
    </div>
    <MobileMenu v-if="mobileMenu" @close="mobileMenuToggle" />
  </header>
</template>

<style lang="scss" scoped>
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.header {
  position: sticky;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 999;
  padding: 23px 30px 13px;
  width: 100%;

  @media (min-width: 767px) {
    padding: 10px 50px 13px;
  }
  .container {
    width: 100%;
    margin: 0 auto;
    padding: 0;

    @media (max-width: 475px) {
      max-width: 320px;
    }

    @media (min-width: 767px) {
      max-width: 640px;
    }

    @media (min-width: 1200px) {
      max-width: 1440px;
    }
  }

  &__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__navigation {
    display: flex;

    @media (max-width: 1200px) {
      display: none;
    }
  }

  &__navigationItem {
    &:not(:last-child) {
      margin-right: 96px;
    }

    transition: all 250ms linear;
  }

  &__navigationLink {
    font-size: 19px;
    font-weight: 700;
    text-decoration: none;
    color: #000;
    transition: all 250ms linear;
    cursor: pointer;

    &:hover {
      color: #fff;
      text-shadow: 0px 0px 2px rgba(0, 0, 0, 1);
    }
  }

  &__image {
    &--burger {
      width: 45px;
      height: 40px;
    }

    &--logo {
      width: 70%;

      @media (min-width: 767px) {
        width: 100%;
      }
    }
  }

  &__item {
    &--contacts {
      display: none;

      @media (min-width: 640px) {
        display: block;
      }
    }

    &--margin {
      position: relative;
      font-size: 16px;
      line-height: 20px;

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: -10px;
        width: 6px;
        height: 6px;
        background: #1550e7;
        border-radius: 50%;
        transform: translateY(-50%);
        animation: showOn 1s linear infinite alternate;
      }
    }

    &--burger {
      @media (min-width: 1200px) {
        display: none;
      }
    }
  }

  &__link {
    color: #000;
    text-decoration: none;
    font-size: 16px;
    line-height: 20px;

    &--bold {
      font-weight: 500;
    }
  }
}

.overflow-hidden {
  overflow: hidden;
}
</style>
