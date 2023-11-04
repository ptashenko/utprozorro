<template>
  <main class="hero-main">
    <div class="main-wrap">
      <h1 class="hero-main__title">
        {{ mainPageSection.titles[0] }} <span class="hero-main__title--bold">{{ mainPageSection.titles[1] }}</span><span
          class="hero-main__title--underline">{{ mainPageSection.titles[2] }}</span>
      </h1>
      <ul class="hero-main__benefits">
        <li class="hero-main__benefitsItem" v-for="(item, i) of mainPageSection.benefits" :key="i"><span class="space">{{ item }}</span></li>
      </ul>
      <p class="hero-main__subtitle">
        {{ mainPageSection.subtitle }}
      </p>
      <a class="hero-main__button" @click="showModal = true">
        {{ mainPageSection.button }}
      </a>

      <BaseModal :show-modal="showModal" :show-close-button="true" @update:show-modal="showModal = $event"
        :title="modalSection.header">
        <Form class="modalForm" @submit.prevent="handleSubmit">
          <label class="modalForm__label">
            {{ modalSection.labels[0] }}
            <input class="modalForm__input" name="name" type="text" v-model="name" placeholder="Ваше ім'я">
          </label>
          <label class="modalForm__label">
            {{ modalSection.labels[1] }}
            <input class="modalForm__input" name="phone" type="tel" v-model="number" placeholder="Ваш телефон"
              @input="handlePhoneInput">
            <div class="modalForm__error-message" :class="{ 'modalForm__error-red': !isPhoneValid && isSubmitted }">
              Введіть номер телефону</div>
          </label>
          <label class="modalForm__label">
            {{ modalSection.labels[2] }}
            <input class="modalForm__input" name="email" type="email" v-model="mail" placeholder="Ваш email">
          </label>
          <label class="modalForm__label">
            {{ modalSection.labels[3] }}
            <textarea name="message" maxlength="320" class="modalForm__textarea" v-model="question" cols="30" rows="5">
            </textarea>
          </label>
          <button type="submit" :disabled="isSubmitted && !isPhoneValid" class="modalForm__submit"
            :class="{ 'modalForm__submit__disabled': isSubmitted && !isPhoneValid }"
            @click="isSubmitted = true">Відправити</button>
        </Form>
      </BaseModal>

      <BaseModal :show-modal="showApplicationModal" @update:show-modal="showApplicationModal = $event">
        <div class="success-modal">
          <div class="success-icon">
            <div class="success-icon__wrapper">
              <div class="success-icon__tip"></div>
              <div class="success-icon__long"></div>
            </div>
          </div>
          <div class="success__title">{{ modalSection.success[0] }}</div>
          <div class="success__text">{{ modalSection.success[1] }}</div>
          <button class="success__btn" @click="closeApplicationModal">{{ modalSection.successButton }}</button>
        </div>
      </BaseModal>

      <span class="hero-main__image--wrapper">
        <img class="hero-main__image" src="../../assets/images/hummer-main.png" alt="" />
      </span>
    </div>
  </main>
</template>

<script>
import telegramBotSend from '@/services/fetchApi';
import BaseModal from '../BaseModal.vue';

export default {
  components: {
    BaseModal,
  },
  data() {
    return {
      showModal: false,
      name: null,
      number: null,
      mail: null,
      question: null,
      isSubmitted: false,
      showApplicationModal: false,
      buttonValue: 'Відправити'
    };
  },
  methods: {
    handleSubmit() {
      const message = `Нова заявка!%0AІм'я: ${this.name}%0AНомер телефону: ${this.number}%0AEmail: ${this.mail}%0AКоментар: ${this.question}`;
      telegramBotSend(message);
      this.isSubmitted = true;
      this.showApplicationModal = true;
      this.showModal = false;
      this.name = null,
        this.number = null,
        this.mail = null,
        this.question = null,
        this.isSubmitted = false
    },
    handlePhoneInput() {
      this.number = this.number.replace(/[^0-9]/g, '');
    },
    closeApplicationModal() {
      this.showApplicationModal = false;
    },
  },
  computed: {
    isPhoneValid() {
      return this.number !== null && this.number.trim() !== '';
    },
  },
};
</script>

<style lang="scss">
.main-wrap {
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 30px;

  @media (min-width: 441px) and (max-width: 1024px) {
    margin-top: 30px;
  }

  @media (min-width: 1025px) {
    display: block;
    margin-bottom: 0;
  }
}

.hero-main {
  max-width: 320px;
  padding: 10px 0 10px;
  margin: 0 auto;

  @media (min-width: 440px) {
    padding: 30px 0 10px;
  }

  @media (min-width: 441px) and (max-width: 1024px) {
    padding: 15px 0 30px;
  }

  @media (min-width: 1025px) {
    padding: 15px 0 140px;
  }

  &__title {
    font-size: 28px;
    font-weight: 300;
    line-height: 1.3;

    &--bold {
      font-size: 25px;
      font-weight: 800;
    }

    &--underline {
      display: inline-block;
      font-size: 22px;

      &::after {
        content: '';
        display: flex;
        width: 100%;
        background: #1550e7;
        height: 6px;
      }
    }
  }

  &__benefits {
    margin-top: 20px;
    margin-bottom: 20px;
    color: #333;

    @media (min-width: 767px) {
      margin-bottom: 10px;
      margin-top: 0;
    }
  }

  .space {
    margin-left: 20px;

    @media (min-width: 767px) {
      margin: 0;
    }
  }

  &__benefitsItem {
    font-size: 13px;
    line-height: 1.5;
    position: relative;

    &::before {
        content: '';
        display: block;
        position: absolute;
        width: 18px;
        height: 18px;
        background: url(../../assets/images/check.png);
        background-repeat: no-repeat;
        top: 2px;
        left: 0;
      }
  }

  &__subtitle {
    font-size: 13px;
    font-weight: 500;
    margin-bottom: 10px;

    @media (min-width: 767px) {
      margin-bottom: 17px;
    }
  }

  &__button {
    display: block;
    width: 100%;
    margin: 10px auto 40px;
    text-decoration: none;
    padding: 15px 50px;
    border: 1px solid #000;
    background: #fff;
    color: #000;
    font-size: 16px;
    line-height: 1;
    transition: all 250ms linear;
    cursor: url(../../assets/images/press.png), auto;
    border: 1px solid #000;
    position: relative;

    @media (min-width: 441px) and (max-width: 1024px) {
      margin: 10px auto 40px;
    }

    @media (min-width: 1025px) {
      width: 380px;
      font-size: 19px;
      padding: 18px 70px;
      margin: 0 auto;
    }

    &:hover {
      background: #000;
      color: #fff;
      cursor: url(../../assets/images/press.png), auto;
    }
  }

  &__image {
    display: block;
    margin: 0 auto;
    max-width: 100%;

    @media (min-width: 767px) {
      width: 608px;
    }

    &--wrapper {
      display: block;
      max-width: 608px;
      margin: 0 auto;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        bottom: -6px;
        right: -6px;
        width: 137px;
        height: 137px;
        z-index: -1;
        background: #1550e7;
      }
    }
  }
}

@media (min-width: 767px) {
  .hero-main {
    max-width: 640px;

    &__title {
      font-size: 56px;

      &--bold {
        font-size: 50px;
      }

      &--underline {
        font-size: 36px;
      }
    }

    &__benefitsItem {
      font-weight: 400;
      font-size: 19px;
      line-height: 137%;
      color: #333333;
      padding-left: 30px;
      position: relative;

      &::before {
        content: '';
        display: block;
        position: absolute;
        width: 18px;
        height: 18px;
        background: url(../../assets/images/check.png);
        background-repeat: no-repeat;
        top: 4px;
        left: 4px;
      }
    }

    &__subtitle {
      font-weight: 400;
      font-size: 19px;
      line-height: 137%;
    }

    &__button {
      font-size: 16px;
      width: 300px;
      font-weight: 400;

    @media (min-width: 767px) {
      font-size: 19px;
      width: 380px;
      font-weight: 400;
      line-height: 137%;
    }
  }
  }
}

@media (min-width: 1200px) {
  .hero-main {
    max-width: 1440px;
    padding: 87px 50px 170px;
    margin: 0 auto;

    &__desktop {
      position: relative;
    }

    &__title {
      font-size: 70px;
      line-height: 85px;
      font-weight: 400;
      margin-bottom: 65px;

      &--bold {
        display: block;
        font-weight: 900;
        font-size: 70px;
        line-height: 85px;
      }

      &--underline {
        display: inline-block;
        font-weight: 400;
        font-size: 55px;
        line-height: 67px;
      }
    }

    &__image {
      &--wrapper {
        position: absolute;
        top: -20px;
        right: 0;
        z-index: -1;
      }
    }

    &__button {
      margin: 0;
    }
  }
}

.modalForm {
  display: flex;
  flex-direction: column;

  @media (min-width: 767px) {
    width: 435px;
  }

  &__label {
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: #111111;

    @media (min-width: 767px) {
      font-size: 20px;
    }

    &:not(:last-child) {
      margin-bottom: 20px;
    }

    &:nth-child(2) {
      margin-bottom: 0;
    }
}

  &__input {
    margin-top: 10px;
    border: none;
    outline: none;
    padding: 10px;
    background: rgba(8, 0, 255, 0.04);
    border-radius: 15px;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: #6C6C6C;

    @media (min-width: 767px) {
      font-size: 20px;
    }
  }

  &__textarea {
    resize: none;
    margin-top: 10px;
    border: none;
    outline: none;
    padding: 10px;
    background: rgba(8, 0, 255, 0.04);
    border-radius: 15px;
    height: 132px;
  }

  &__submit {
    display: block;
    width: 100%;
    max-width: 310px;
    padding: 13px 98px;
    margin: 0 auto;
    background: transparent;
    color: #000;
    border: 1px solid #000;
    cursor: url(../../assets/images/press.png), auto;
    transition: all 250ms linear;
    position: relative;


    &:hover {
      background: #000;
      color: #fff;
      cursor: url(../../assets/images/press.png), auto;
    }

    &__disabled {
      display: block;
      width: 100%;
      max-width: 310px;
      padding: 13px 98px;
      margin: 0 auto;
      background: transparent;
      border: 1px solid #adadad;
      color: #adadad;
      cursor: not-allowed;
      transition: all 250ms linear;

      &:hover {
        display: block;
        width: 100%;
        max-width: 310px;
        padding: 13px 98px;
        margin: 0 auto;
        background: transparent;
        border: 1px solid #adadad;
        color: #adadad;
        cursor: not-allowed;
        transition: all 250ms linear;
      }
    }
  }

  &__error-message {
    color: white;
    font-size: 10px;
    line-height: 1.5;
    transition: all 250ms linear;
  }

  &__error-red {
    color: red;
    font-size: 10px;
    line-height: 1.5;
    transition: all 250ms linear;
  }
}

.success-modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.success__title {
  position: relative;
  top: -5px;
  font-size: 35px;
  font-weight: 600;
  margin-bottom: 20px;

  @media (min-width: 767px) {
    font-size: 45px;
    margin-bottom: 40px;
  }
}

.success__text {
  font-size: 18px;
  margin-bottom: 35px;
  font-weight: 400;
  line-height: 1.5;
  font-size: 18px;
  text-align: center;

  @media (min-width: 767px) {
    font-size: 26px;
    margin-bottom: 35px;
  }
}

.success__btn {
  width: 140px;
  height: 50px;
  font-size: 18px;
  font-weight: 600;
  background: #000;
  color: #fff;
  border: 1px solid #000;
  border-radius: 4px;

  @media (min-width: 767px) {
    height: 63px;
  }
}

.success-icon {
  position: relative;
  top: -18px;
  display: flex;
  height: fit-content;
  align-items: center;
  justify-content: center;

  @media (min-width: 767px) {
    top: -45px;
  }

  &__wrapper {
    display: inline-block;
    width: 8em;
    height: 8em;
    font-size: 8px;
    border-radius: 50%;
    border: 3px solid lighten(#000, 60%);
    background-color: #fff;
    position: relative;
    overflow: hidden;
    transform-origin: center;
    animation: showSuccess 180ms ease-in-out;
    transform: scale(1);
  }

  &__tip,
  &__long {
    display: block;
    position: absolute;
    height: 4px;
    background-color: lighten(#000, 20%);
  }

  &__tip {
    width: 2.4em;
    top: 4.3em;
    left: 1.4em;
    transform: rotate(42deg);
    animation: tipInPlace 300ms ease-in-out;
    animation-fill-mode: forwards;
    animation-delay: 180ms;
    visibility: hidden;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &__long {
    transform: rotate(-45deg);
    top: 3.70em;
    left: 2.75em;
    animation: longInPlace 140ms ease-in-out;
    animation-fill-mode: forwards;
    visibility: hidden;
    animation-delay: 400ms;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
}

@keyframes showSuccess {
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
}

@keyframes tipInPlace {
  from {
    width: 0em;
    top: 0em;
    left: -1.6em;
  }

  to {
    width: 20px;
    top: 4.3em;
    left: 1.1em;
    visibility: visible;
  }
}

@keyframes longInPlace {
  from {
    width: 0em;
    top: 5.1em;
    left: 3.2em;
  }

  to {
    width: 32px;
    top: 3.90em;
    left: 2.5em;
    visibility: visible;
  }
}
</style>