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
      <nav>
        <ul class="header__list">
          <li class="header__menu"><a href="#" class="header__link">О нас</a></li>
          <li class="header__menu"><a href="#" class="header__link">Услуги</a></li>
          <li class="header__menu"><a href="#" class="header__link">Опыт</a></li>
        </ul>
      </nav>
      <ul class="header__contacts">
        <li class="header__contact"><a href="#" class="header__link">0505742362</a></li>
        <li class="header__contact"><a href="#" class="header__link">aptashenko2019@gmail.com</a></li>
        <li class="header__contact"><a href="#" class="header__link">Пн-Пт: 10:00 - 18:00</a></li>
      </ul>
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
            <p class="hero__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos porro reiciendis aliquid
              libero saepe dignissimos facere id hic eligendi rerum ipsam assumenda enim voluptatum omnis maiores
              expedita eaque distinctio, quidem quisquam itaque mollitia architecto? Non quis debitis in est fugit
              veniam cupiditate recusandae explicabo assumenda at quidem fuga, pariatur ipsa. </p>
          </li>
          <li class="hero__item"><a href="#" class="hero__button">Оставить заявку</a></li>
        </ul>
        <img src="./assets/creator.jpg" alt="" class="hero__image">
      </div>
    </section>
    <section class="about">
      <div class="about__container">
        <h2 class="about__title">About me</h2>
        <ul class="about__list">
          <li class="about__item"><img src="./assets/certificate.png" alt="" class="about__image"></li>
          <li class="about__item">
            <p class="about__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non qui maxime consequatur
              omnis optio. Doloremque rem suscipit qui optio tempora impedit, culpa voluptate ducimus dolor dolores?
              Praesentium aliquid cumque pariatur, cupiditate qui eos exercitationem dicta nostrum ducimus, omnis beatae
              odit. Rem, veniam! Porro exercitationem provident, qui pariatur assumenda ratione illo! </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="abilities">
      <div class="abilities__container">
        <h2 class="abilities__title">Досвід</h2>
        <ul class="abilities__list">
          <li class="abilities__item">Оскарження в АМКУ:</li>
          <li class="abilities__item abilities__exp">5 років</li>
          <li class="abilities__item">Підготовка документів для участі:</li>
          <li class="abilities__item abilities__exp">6 років</li>
          <li class="abilities__item">Надання консультацій:</li>
          <li class="abilities__item abilities__exp">5 років</li>
          <li class="abilities__item">Навчання фахівців з Prozorro:</li>
          <li class="abilities__item abilities__exp">4 роки</li>
        </ul>
      </div>
    </section>
    <section class="services">
      <div class="services__container">
        <h2 class="services__title">Our services</h2>
        <ul class="services__list">
          <li class="services__item">
            <div class="services__image">
              <h2 class="services__name">Кураторство тендерного отдела</h2>
            </div>
            <p class="services__text">Контроль роботи Вашого тендерного відділу</p>
            <p class="services__price">10 000 UAH</p>
          </li>
          <li class="services__item">
            <div class="services__image">
              <h2 class="services__name">Разовая консультация (устная)</h2>
            </div>
            <p class="services__text">Одна телефонна консультація до 15 хв.</p>
            <p class="services__price">200 UAH</p>
          </li>
          <li class="services__item">
            <div class="services__image">
              <h2 class="services__name">Ежемесячная консультация (устная)</h2>
            </div>
            <p class="services__text">Телефонні консультації до 30хв. на день</p>
            <p class="services__price">5 000 UAH</p>
          </li>
          <li class="services__item">
            <div class="services__image">
              <h2 class="services__name">Работа с АМКУ</h2>
            </div>
            <p class="services__text">Скарги, вимоги, відповіді контролюючим органам</p>
            <p class="services__price">от 2 000 UAH</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="feedback">
      <div class="feedback__container">
        <h2 class="feedback__title">Clients</h2>
        <ul class="feedback__list">
          <li class="feedback__item">
            <a href="#" class="feedback__link"><img src="./assets/logo1.png" alt="" class="feedback__logo">
                </a>
          </li>
          <li class="feedback__item">
            <a href="#" class="feedback__link"><img src="./assets/logo2.png" alt="" class="feedback__logo">
                </a>
          </li>
          <li class="feedback__item">
            <a href="#" class="feedback__link"><img src="./assets/logo3.jpg" alt="" class="feedback__logo">
                </a>
          </li>
          <li class="feedback__item">
            <a href="#" class="feedback__link"><img src="./assets/logo4.png" alt="" class="feedback__logo">
                </a>
          </li>
        </ul>
      </div>
    </section>
  </main>
  <footer class="contacts">
    <div class="contacts__container">
      <h2 class="contacts__title">Contacts</h2>
      <div class="contacts__wrapper">
        <ul class="contacts__list">
          <li class="contacts__item"><a href="tel:0505742362" class="contacts__link">(050) 574-23-62</a></li>
          <li class="contacts__item"><a href="mailto:aptashenko2019@gmail.com"
              class="contacts__link">aptashenko2019@gmail.com</a></li>
          <li class="contacts__item"><a href="#" class="contacts__link">@aptashenko</a></li>
          <li class="contacts__item"><a href="#" class="contacts__link">Графік роботи: Пн-Пт: 10:00 - 18:00</a></li>
        </ul>
        <form class="contacts__form">
          <h2 class="contacts__form--title">Остались вопросы?</h2>
          <label class="contacts__label"><input type="text" class="contacts__input" placeholder="Ваше имя"></label>
          <label class="contacts__label"><input type="email" class="contacts__input" placeholder="Ваш email"></label>
          <label class="contacts__label"><input type="tel" class="contacts__input" placeholder="Ваш телефон"></label>
          <label class="contacts__label"><textarea class="contacts__input contacts__input--textarea" wrap="hard"
              placeholder="Введите Ваш вопрос"></textarea></label>
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
  background: rgba(240, 240, 240, 0.5);
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
    @media (min-width: 768px) {
      display: none;
    }
  }
  &__list, nav {
    display: flex;
    align-items: center;
    @media (max-width: 767px) {
      display: none;
    }
  }
  &__contacts {
    @media (max-width: 767px) {
        display: none;
      }
  }
  &__menu {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
  &__link {
    text-decoration: none;
    color: #000;
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
    @media (max-width: 767px) {
      display: none;
    }
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    margin-left: 20px;
  }
}

.hero {
  padding-bottom: 50px;
  padding-top: 50px;
  &__container {
    @extend %container;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
  &__image {
    display: block;
    max-width: 340px;
    margin: 0 auto;
    @media (min-width: 768px) {
        border-radius: 50%;
    }
  }
  &__item {
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
  &__list {
    @media (min-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      width: 50%;
    }
  }
}

.about {
  padding-bottom: 50px;
  padding-top: 50px;
  background: rgba(240, 240, 240, 0.5);
  &__container {
    @extend %container;
    display: flex;
    flex-direction: column;
  }
  &__image {
    display: block;
    max-width: 340px;
    margin: 0 auto;
    border-radius: 50%;
  }
  &__title {
    text-decoration: underline solid blue 5px;
  }
  &__list {
    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
  &__item {
    @media (min-width: 768px) {
      width: 50%;
      }
    &:not(:last-child) {
      margin-bottom: 5px;
        @media (min-width: 768px) {
            margin-bottom: 0;
            margin-right: 10px;
          }
    }
  }
}

.abilities {
  padding-bottom: 50px;
  padding-top: 50px;
  &__container {
    @extend %container;
  }
  &__title {
    margin-bottom: 10px;
    text-decoration: underline solid blue 5px;
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  &__item {
    margin: 5px;
    width: calc(100% / 2 - 10px);
    font-weight: 700;
    @media (min-width: 768px) {
      margin: 10px;
        width: 270px;
      }
  }
  &__exp {
    text-align: center;
    font-weight: 500;
  }
  &__image {
    display: block;
    margin: 0 auto;
  }
  &__text {
    text-align: center;
    margin-top: 10px;
  }
}

.services {
  padding-bottom: 50px;
  padding-top: 50px;
  background: rgba(240, 240, 240, 0.5);
  &__container {
    @extend %container;
  }
  &__title {
    margin-bottom: 10px;
    text-decoration: underline solid blue 5px;
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
  }
  &__item {
    margin: 10px;
    width: calc((100% - 2*20px)/2);
    @media (min-width: 768px) {
      width: 272.5px;
    }
  }
  &__image {
    width: 150px;
    height: 150px;
    background: blue;
    margin: 0 auto 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 5px;
    padding: 5px;
  }
  &__name {
    font-size: 14px;
    color: #fff;
    text-align: center;
  }
  &__text {
    text-align: center;
    @media (max-width: 767px) {
      font-size: 14px;
    }
  }
  &__price {
    margin-top: 20px;
    text-align: center;
    font-weight: 900;
  }
}

.feedback {
  padding-bottom: 50px;
  padding-top: 50px;
  &__container {
    @extend %container;
  }
  &__title {
    margin-bottom: 10px;
    text-decoration: underline solid blue 5px;
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
  }
  &__item {
    margin: 10px;
    width: calc((100% - 4*10px)/2);
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 768px) {
        width: 272.5px;
      }
  }
  &__logo {
    width: 100px;
  }
}

.contacts {
  padding-bottom: 50px;
  padding-top: 50px;
  background: rgba(240, 240, 240, 0.5);
  &__container {
    @extend %container;
  }
  &__wrapper {
    @media (min-width: 768px) {
        display: flex;
      }
  }
  &__title {
    margin-bottom: 10px;
    text-decoration: underline solid blue 5px;
  }
  &__list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    margin: 20px 0;
    @media (min-width: 768px) {
      margin: 0;
    }
  }
  &__item {
    text-align: center;
    @media (min-width: 768px) {
      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
  &__link {
    text-decoration: none;
    color: #000;
    @media (min-width: 768px) {
      font-size: 20px;
    }
  }
  &__form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 480px;
    @media (min-width: 768px) {
      width: 480px;
    }
    &--title {
      margin-bottom: 10px;
      font-size: 14px;
      text-align: center;
    }
  }
  &__label {
    margin-bottom: 10px;
  }
  &__input {
    width: 100%;
    height: 30px;
    border-radius: 5px;
    border: none;
    padding: 5px 20px;
    &--textarea {
      height: 80px;
      resize: none;
    }
  }
  &__btn {
    display: block;
    margin: 0 auto;
    width: fit-content;
    padding: 10px 15px;
    border: 1px solid #000;
    background: transparent;
    font-weight: 700;
  }
}
</style>
