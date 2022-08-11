<template>
  <div class="complaint">
    <ul class="complaint__adress">
      <li class="complaint__adressName">
        <a href="/">Головна</a>
      </li>
      <li class="complaint__adressName">
        Оскарження в АМКУ
      </li>
    </ul>
    <h1 class="complaint__title">Оскарження в Антимонопольному комітеті України. Захист ваших інтересів в АМКУ</h1>
    <p class="complaint__description">Плануєте брати участь у тендері, але в тендерній документації є дискримінаційні
      вимоги? Вашу тендерну пропозицію відхилено? Взяли участь у тендері, але програли в аукціоні? Якщо у Вас виникало
      хоча-б одне з цих запитань вам неодмінно потрібна допомога фахівців.
    </p>
    <a href="#" class="complaint__button">Замовити послуги</a>
    <img class="complaint__image" src="../../assets/complaints.jpg" alt="Молоток">
  </div>
  <div class="wrapper">
    <div class="container">
      <h2 class="complaint__subtitle">
        Вирішуємо будь-які завдання, пов'язані з публічними закупівлями
      </h2>
      <ul class="complaint__services">
        <li class="complaint__service">- Аудит тендерної документації (на наявність дискримінаційних вимог)</li>
        <li class="complaint__service">- Аудит тендерних пропозицій конкурентів</li>
        <li class="complaint__service">- Оформлення та направлення скарг до АМКУ</li>
        <li class="complaint__service">- Оформлення та направлення вимог до Замовника</li>
        <li class="complaint__service">- Підготовка аргументованих відповідей на вимоги Учасників</li>
      </ul>
    </div>
  </div>
  <div class="complaint">
    <h2 class="complaint__subtitle complaint__subtitle--underline">Ми - надійність</h2>
    <p class="complaint__text">Знайти кваліфікованих фахівців — завдання не з простих. Більшість «фахівців» зривають
      строки подачі тендеру, не виконують свої зобов'язання, допускають помилки, що призводить до програшу тендеру, або
      навіть беруть попередню оплату та не виходять на зв'язок. Все вищеперелічене не стосується нас. Обираючи нашу
      агенцію ви обираєте надійність та впевненість у тому, що ваші сподівання будуть повністю виправдані. Наші постійні
      клієнти вже переконались в тому, що це не пусті слова, переконайтесь і Ви.
    </p>
    <p class="complaint__text">При співпраці з нами Ви концентруєтесь на розвитку, а всі питання з публічних
      закупівель ми беремо на себе.
    </p>
  </div>
  <div class="complaint">
    <h2 class="complaint__subtitle">Наші переваги</h2>
    <ul class="complaint__benefits">
      <li class="complaint__benefit" v-for="(item,indx) of benefits" :key="indx">
        <h3 class="complaint__benefitName">{{item.title}}</h3>
        <p class="complaint__benefitText">{{item.description}}</p>
      </li>
    </ul>
  </div>
  <div class="complaint complaint--wider">
    <h2 class="complaint__subtitle">Пакети послуг</h2>
    <ul class="pricelist">
      <li class="pricelist__item" v-for="(item, idx) of price.complaint" :key="idx">
        <span class="pricelist__wrapper">
          <h3 class="pricelist__name">{{item.title}}</h3>
          <ul class="pricelist__list">
            <li class="pricelist__description" v-for="(itm,indx) of item.descriptions" :key="indx">
              -{{itm}}
            </li>
          </ul>
          <p class="pricelist__price">Ціна: <span class="pricelist__price--blue">{{item.price}} грн/шт</span></p>
          <p class="pricelist__price">Ціна при замовленні від 3шт: <span
              class="pricelist__price--blue">{{item.priceDiscount}}
              грн/шт</span>
          </p>
        </span>
      </li>
    </ul>
  </div>
  <div class="complaint">
    <h2 class="complaint__subtitle">FAQ</h2>
    <ul class="faq">
      <li class="faq__item" v-for="({question, answer}, idx) of faqText" :key="idx">
        <p class="faq__question" @click="showFaqAnswer(idx)">{{ question }}
          <img :class="{ 'faq__clicked': activeAnswer[idx]}" class="faq__icon" src="../../assets/svg/plus.svg" alt="">
        </p>
        <p class="faq__answer" v-show="activeAnswer[idx]">{{answer}}
        </p>
      </li>
    </ul>
  </div>
  <div class="complaint">
    <h2 class="complaint__subtitle complaint__subtitle--marginBottom">Iнші послуги</h2>
    <ButtonComp :services="buttonsNames[0]" />
  </div>
</template>

<script>
import ButtonComp from "../../components/ButtonComp.vue";
import faq from "../faq";
import price from "../priceList"
import benefits from "../ourBenefits"

export default {
  components: { ButtonComp },
  data() {
    return {
      activeAnswer: [],
      buttonsNames: ["Послуги в оскарженні вимог/рішень"]
    }
  },
  computed: {
    faqText() {
      return faq;
    },
    price() {
      return price;
    },
    benefits() {
      return benefits;
    },
  },
  methods: {
    showFaqAnswer(index) {
      this.activeAnswer[index] = !this.activeAnswer[index];
    },
  },
  mounted() {
    faq.forEach(el => this.activeAnswer.push(el.active));
  }
}
</script>

<style lang="scss">
.complaint {
  max-width: 320px;
  margin: 0 auto;
  padding: 30px 0;

  &--wider {
    max-width: 375px;
  }

  &__adress {
    display: flex;
  }

  &__adressName {
    font-size: 14px;

    &>a {
      color: #000;
      text-decoration: none;
    }

    &:not(:first-child) {
      display: flex;
      align-items: center;

      &::before {
        content: '';
        margin: 0 10px;
        display: block;
        width: 30px;
        height: 2px;
        background: #000;
      }
    }
  }

  &__title {
    font-size: 18px;
    text-align: center;
    margin: 30px 0;
    line-height: 1.5;
  }

  &__description {
    font-size: 14px;
    margin: 0;
  }

  &__button {
    display: block;
    margin: 30px auto;
    padding: 20px 60px;
    max-width: 270px;
    text-decoration: none;
    color: #000;
    border: 1px solid #000;
    font-size: 14px;
  }

  &__image {
    display: block;
    max-width: 100%;
  }

  &__subtitle {
    margin: 0;
    font-size: 18px;
    text-align: center;

    &--marginBottom {
      margin-bottom: 20px;
    }

    &--underline {
      margin: 0 auto;
      width: fit-content;

      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 5px;
        background: blue;
      }
    }
  }

  &__services {
    margin-top: 20px;
  }

  &__service {
    font-size: 14.5px;
    line-height: 1.4;
  }

  &__text {
    font-size: 14.5px;
    line-height: 1.4;

    &:last-child {
      margin: 0;
    }
  }

  &__benefits {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  &__benefit {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background: #f5f5f5;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  &__benefitName {
    font-size: 16px;
    text-align: center;
    margin: 0;

    &::after {
      content: '';
      display: block;
      width: 50px;
      height: 3px;
      background: blue;
      margin: 20px auto;
    }
  }

  &__benefitText {
    margin: 0;
    font-size: 14.5px;
    line-height: 1.4;
  }
}

.wrapper {
  background: #f5f5f5;
  padding: 30px 0;
}

.container {
  max-width: 320px;
  margin: 0 auto;
}

.pricelist {
  margin-top: 20px;

  &__list {
    margin-top: 20px;
  }

  &__item {
    background: #f5f5f5;
    padding: 20px;

    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }

  &__name {
    margin: 0;
    font-size: 16px;
    line-height: 1.4;
    text-align: center;
  }

  &__description {
    margin: 0;
    font-size: 14.5px;
    line-height: 1.4;
  }

  &__price {
    font-size: 14.5px;
    line-height: 1.4;
    font-weight: 600;

    &--blue {
      font-weight: 500;
      color: blue;
    }
  }
}

.faq {
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  &__item {
    padding: 20px 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);

    &:last-child {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
  }

  &__question {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;

    &:hover .faq__icon,
    &:active .faq__icon {
      background: #eeee;
    }
  }

  &__icon {
    padding: 5px;
    margin-left: 10px;
    transition: all 250ms linear;
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }

  &__answer {
    margin: 20px 0 0;
  }

  &__clicked {
    transform: rotate(45deg);
    background: #eeee;
  }
}

@media (min-width: 767px) {

  .complaint,
  .container {
    max-width: 640px;

    &--wider {
      max-width: 100%;
    }

    &__title,
    .complaint__subtitle {
      font-size: 24px;
    }

    &__description,
    .complaint__service,
    .complaint__text,
    .complaint__benefitName {
      font-size: 18px;
    }

    &__button {
      font-size: 18px;
      padding: 20px 0px;
      text-align: center;
    }

    &__benefits {
      flex-direction: row;
      flex-wrap: wrap;
    }

    &__benefit {
      width: calc((100% - 20px)/2);
      padding: 40px;

      &:last-child {
        margin-bottom: 20px;
      }
    }

    &__benefitText {
      font-size: 16px;
    }
  }

  .pricelist {
    &__name {
      font-size: 16px;
    }

    &__description {
      font-size: 15px;
    }

    &__price {
      font-size: 16px;

      &--blue {
        font-weight: 700;
      }
    }

    &__wrapper {
      display: block;
      position: relative;
      max-width: 640px;
      margin: 0 auto;

      &::after {
        content: '';
        width: 40px;
        height: 40px;
        background: blue;
        position: absolute;
        bottom: -34.5px;
        right: 0;
      }
    }
  }
}

@media (min-width: 1200px) {

  .complaint,
  .container {
    max-width: 850px;

    &__title,
    .complaint__subtitle {
      font-size: 36px;
    }

    &__description {
      max-width: 700px;
      margin: 0 auto;
    }

    &__image {
      width: 100%;
    }
  }
}
</style>