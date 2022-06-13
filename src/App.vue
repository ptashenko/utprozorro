<template>
  <header class="header">
    <div class="header__container">
      <img src="./assets/svg/logo.svg" alt="logo">
      <button class="header__btn" @click="mobMenu">X</button>
      <div class="header__mob" :class="{isActive: isActive}">
        <ul class="header__mob__list">
          <li class="header__mob__item">
            <a href="#" class="header__mob__link">О нас</a>
          </li>
          <li class="header__mob__item">
            <a href="#" class="header__mob__link">Наши услуги</a>
          </li>
          <li class="header__mob__item">
            <a href="#" class="header__mob__link">Наши цены</a>
          </li>
        </ul>
        <ul class="header__mob__contacts">
          <li class="header__mob__item">
            <a href="tel:0505742362" class="header__mob__link">050 574 23 62</a>
          </li>
          <li class="header__mob__item">
            <a href="mailto:aptashenko2019@gmail.com" class="header__mob__link">aptashenko2019@gmail.com</a>
          </li>
          <li class="header__mob__item">
            <a class="header__mob__link">Пн-Пт: 10:00 - 18:00</a>
          </li>
        </ul>
      </div>
      <div class="header__desktop">
        <nav>
          <ul class="header__list">
            <li class="header__menu"><a href="#" class="header__link">О нас</a></li>
            <li class="header__menu"><a href="#" class="header__link">Услуги</a></li>
            <li class="header__menu"><a href="#" class="header__link">Опыт</a></li>
          </ul>
        </nav>
        <ul class="header__list">
          <li class="header__contact"><a href="#" class="header__link">0505742362</a></li>
          <li class="header__contact"><a href="#" class="header__link">aptashenko2019@gmail.com</a></li>
          <li class="header__contact"><a href="#" class="header__link">Пн-Пт: 10:00 - 18:00</a></li>
        </ul>
      </div>
    </div>
  </header>
  <main class="main">
    <section class="hero">
      <div class="hero__container">
        <ul class="hero__list">
          <li class="hero__item">
            <h1 class="hero__title">Консультант у сфері публічних закупівель</h1>
          </li>
          <li class="hero__item">
            <p class="hero__subtitle">Ptashenko Artem Olegovich</p>
          </li>
          <li class="hero__item">
            <p class="hero__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, minus reiciendis quis
              amet voluptates officiis eius illum commodi cumque iste.</p>
          </li>
          <li class="hero__item"><a href="#" class="hero__button">Оставить заявку</a></li>
        </ul>
        <img src="./assets/creator.jpg" alt="" class="hero__image">
      </div>
    </section>
    <section class="about">
      <div class="about__container">
        <ul class="about__list">
          <li class="about__item">
            <h2 class="about__title">About me</h2>
          </li>
          <li class="about__item"><img src="./assets/certificate.jpg" alt="" class="about__image"></li>
          <li class="about__item">
            <p class="about__title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dicta magni
              corrupti
              voluptas dolore, quam praesentium! Accusantium numquam ut a!</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="abilities">
      <div class="abilities__container">
        <h2 class="abilities__title">Досвід роботи</h2>
        <ul class="abilities__list">
          <li class="abilities__item"><img src="./assets/svg/folder_icon.svg" alt="" class="abilities__image">
            <p class="abilities__text">Досвід роботи</p>
          </li>
          <li class="abilities__item"><img src="./assets/svg/folder_icon.svg" alt="" class="abilities__image">
            <p class="abilities__text">Досвід роботи</p>
          </li>
          <li class="abilities__item"><img src="./assets/svg/folder_icon.svg" alt="" class="abilities__image">
            <p class="abilities__text">Досвід роботи</p>
          </li>
          <li class="abilities__item"><img src="./assets/svg/folder_icon.svg" alt="" class="abilities__image">
            <p class="abilities__text">Досвід роботи</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="services">
      <div class="services__container">
        <h2 class="services__title">Our services</h2>
        <ul class="services__list">
          <li class="services__item">
            <img src="./assets/svg/folder_icon.svg" alt="" class="services__image">
            <h2 class="services__name">service#1</h2>
            <p class="services__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, obcaecati!</p>
            <p class="services__price">200 uah</p>
          </li>
          <li class="services__item">
            <img src="./assets/svg/folder_icon.svg" alt="" class="services__image">
            <h2 class="services__name">service#2</h2>
            <p class="services__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quisquam.</p>
            <p class="services__price">200 uah</p>
          </li>
          <li class="services__item">
            <img src="./assets/svg/folder_icon.svg" alt="" class="services__image">
            <h2 class="services__name">service#3</h2>
            <p class="services__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, qui.</p>
            <p class="services__price">200uah</p>
          </li>
          <li class="services__item">
            <img src="./assets/svg/folder_icon.svg" alt="" class="services__image">
            <h2 class="services__name">service#3</h2>
            <p class="services__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, qui.</p>
            <p class="services__price">200uah</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="feedback">
      <div class="feedback__container">
        <h2 class="feedback__title">Clients:</h2>
        <ul class="feedback__list">
          <li class="feedback__item"><a href="#" class="feedback__link"><img src="./assets/svg/folder_icon.svg" alt=""
                class="feedback__logo"></a>
          </li>
          <li class="feedback__item"><a href="#" class="feedback__link"><img src="./assets/svg/folder_icon.svg" alt=""
                class="feedback__logo"></a>
          </li>
          <li class="feedback__item"><a href="#" class="feedback__link"><img src="./assets/svg/folder_icon.svg" alt=""
                class="feedback__logo"></a>
          </li>
          <li class="feedback__item"><a href="#" class="feedback__link"><img src="./assets/svg/folder_icon.svg" alt=""
                class="feedback__logo"></a>
          </li>
        </ul>
      </div>
    </section>
  </main>
  <footer class="contacts">
    <div class="contacts__container">
      <h2 class="contacts__title">Contacts:</h2>
      <div class="contacts__wrapper">
        <ul class="contacts__list">
          <li class="contacts__item"><a href="#" class="contacts__link">0505742362</a></li>
          <li class="contacts__item"><a href="#" class="contacts__link">aptashenko2019@gmail.com</a></li>
          <li class="contacts__item"><a href="#" class="contacts__link">@aptashenko</a></li>
          <li class="contacts__item"><a href="#" class="contacts__link">Пн-Пт: 10:00 - 18:00</a></li>
        </ul>
        <form class="contacts__form">
          <label class="contacts__label"><input type="text" class="contacts__input"></label>
          <label class="contacts__label"><input type="text" class="contacts__input"></label>
          <label class="contacts__label"><input type="number" class="contacts__input"></label>
          <label class="contacts__label"><input type="textarea" class="contacts__input"></label>
          <input type="submit" class="contacts__btn" value="Send">
        </form>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      mobileHeight: window.innerHeight,
      isActive: false,
    }
  },
  methods: {
    mobMenu() {
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style lang="scss">
@import url(./assets/style/normalize.scss);
h1,
h2,
h3,
h4,
p,
ul,
li {
  margin: 0;
  padding: 0;
}

;

ul {
  list-style: none;
}

* {
  font-family: 'Montserrat', sans-serif;
}

%container {
  padding: 0 15px;
  margin: 0 auto;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
}
.isActive {
    display: flex !important;
    flex-direction: column;
    justify-content: space-evenly;
}

.header {
  &__container {
    @extend %container;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__btn {
    width: 30px;
    height: 30px;
    background: transparent;
    border-radius: 10px;
  }
  &__mob {
    position: absolute;
    top: 89px;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #fff;
    display: none;
    border-top: 1px solid #000;
    &__list {
      margin: 0 auto;
    }
    &__contacts {
      margin: 0 auto;
    }
    &__item {
      text-align: center;
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
    &__link {
      text-decoration: none;
      color: #000;
    }
  }
  &__desktop {
    @media (max-width: 768px) {
      display: none;
    }
  }
}

.hero {
  margin-top: 20px;
  &__container {
    @extend %container;
    display: flex;
    flex-direction: column;
  }
  &__image {
    width: 100%;
    margin: 0 auto;
    @media (max-width: 480px) {
      width: 70%;
    }
  }
  &__item {
    text-align: center;
    margin-bottom: 5px;
  }
  &__title {
    font-size: 22px;
    font-weight: 900;
  }
  &__subtitle {
    font-size: 18px;
  }
  &__button {
    display: block;
    margin: 0 auto;
    width: fit-content;
    padding: 10px 15px;
    border: 1px solid #000;
    text-decoration: none;
  }
}

.about {
  margin-top: 20px;
  &__container {
    @extend %container;
    display: flex;
    flex-direction: column;
  }
  &__image {
    display: block;
    width: 100%;
    margin: 0 auto;
  }
  &__item {
    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }
}

.abilities {
  margin-top: 20px;
  &__container {
    @extend %container;
  }
  &__title {
    margin-bottom: 10px;
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    margin: -5px;
  }
  &__item {
    margin: 5px;
    width: calc(100% / 2 - 10px);
  }
  &__image {
    display: block;
    margin: 0 auto;
  }
  &__text {
    text-align: center;
  }
}

.services {
  margin-top: 20px;
  &__container {
    @extend %container;
  }
  &__title {
    margin-bottom: 5px;
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
  }
  &__item {
    margin: 5px;
    width: calc((100% - 4*5px)/2)
  }
}

.feedback {
  margin-top: 20px;
  &__container {
    @extend %container;
  }
  &__title {
    margin-bottom: 5px;
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
  }
  &__item {
    margin: 10px;
    width: calc((100% - 4*10px)/2)
  }
}

.contacts {
  margin-top: 20px;
  &__container {
    @extend %container;
  }
  &__title {
    margin-bottom: 5px;
  }
}
</style>
