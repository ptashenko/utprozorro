<template>
  <header class="header">
    <ul class="header__list">
      <li class="header__item">
        <a href="#" class="header__link">
          <img class="header__image--logo" src="../../assets/svg/logo.svg" alt="logo" @click="backToMainPage()" />
        </a>
      </li>
      <ul class="header__navigation">
        <li class="header__navigationItem" v-for="(button, indx) of headerText.buttons" :key="indx">
          <a href="#" class="header__navigationLink">
            {{button}}
          </a>
        </li>
      </ul>
      <li class="header__item header__item--contacts">
        <ul class="header__contacts">
          <li class="header__item" v-for="(contact,i) of headerText.contacts" :key="i">
            <a href="#" class="header__link header__link--bold">
              {{contact}}
            </a>
          </li>
          <li class="header__item header__item--margin">Графік роботи: Пн-Пт, з 9:00 до 19:00</li>
        </ul>
      </li>
      <li class="header__item header__item--burger">
        <img @click="mobileMenuOpen()" v-show="mainPage === '/'" class="header__image--burger"
          src="../../assets/svg/burger_icons.svg" alt="logo" />
      </li>
    </ul>
    <transition name="slideOn">
      <div v-if="mobileMenu" class="mobileMenu">
        <img @click="mobileMenuOpen()" src="../../assets/svg/cross.svg" alt="Закрыть" class="mobileMenu__close" />
        <ul class="mobileMenu__menuList mobileMenu__menuList--navigation">
          <li class="mobileMenu__menuItem" v-for="(button, indx) of headerText.buttons" :key="indx">
            <a class="mobileMenu__menuLink" href="#">
              {{button}}
            </a>
          </li>
        </ul>
        <ul class="mobileMenu__contactsList">
          <li class="mobileMenu__contactsItem" v-for="(contact,i) of headerText.contacts" :key="i">
            <a href="tel:0505742362" class="mobileMenu__contactsLink">
              {{ contact }}
            </a>
          </li>
          <li class="mobileMenu__contactsItem mobileMenu__contactsLink">
              Графік роботи: Пн-Пт, з 9:00 до 19:00
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script>
import header from './headerTexts';
export default {
  data() {
    return {
      mobileMenu: false,
      mainPage: window.location.pathname,
    };
  },
  computed: {
    headerText() {
      return header;
    }
  },
  methods: {
    mobileMenuOpen() {
      if (this.mobileMenu) {
        this.mobileMenu = false;
      } else {
        this.mobileMenu = true;
      }
    },
    backToMainPage() {
      this.$router.push('/')
    }
  },
};
</script>

<style lang="scss">
@keyframes showOn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slide {
  0% {
    right: -100%;
  }
  100% {
    right: 0;
  }
}
.slideOn-enter-active {
  animation: slide 0.5s;
}

.slideOn-leave-active {
  animation: slide 0.5s reverse;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.header {
  max-width: 320px;
  padding-top: 5px;
  margin: 0 auto;
  @media (max-width: 475px) {
    max-width: 320px;
  }
  @media (min-width: 767px) {
    max-width: 640px;
  }
  @media (min-width: 1200px) {
    max-width: 1200px;
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
      margin-right: 80px;
    }
  }

  &__navigationLink {
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
    color: #000;
  }

  &__image {
    &--burger {
      width: 50px;
      height: 50px;
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
      margin-top: 5px;
      font-size: 14px;
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
    font-size: 14px;
    &--bold {
      font-weight: 500;
    }
  }
}

.mobileMenu {
  padding: 42px 20px;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  background: #000;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  z-index: 10;
  &__close {
    right: 15px;
    top: 15px;
    position: absolute;
    width: 18px;
    height: 18px;
  }
  &__menuList {
    &--navigation {
      flex-grow: 1;
    }
  }
  &__menuItem {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
  &__menuLink {
    font-size: 18px;
    text-decoration: none;
    color: #fff;
    font-weight: 500;
  }
  &__contactsLink {
    font-size: 13px;
    color: #fff;
    text-decoration: none;
  }
}
</style>
