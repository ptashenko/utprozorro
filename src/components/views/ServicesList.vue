<template>
  <section class="services" id="services">
    <h2 class="services_title">
      {{ servicesListSection.title }}
    </h2>
    <div class="services_body">
      <div class="table_box">
        <p class="name">{{ servicesListSection.name[0] }}</p>
        <p class="cost">{{ servicesListSection.cost[0] }}</p>
        <button class="button-service" @click="showModal = true">Обрати послугу</button>
      </div>
      <div class="table_box">
        <p class="name">{{ servicesListSection.name[1] }}</p>
        <p class="cost">{{ servicesListSection.cost[1] }}</p>
        <button class="button-service" @click="showModal = true">Обрати послугу</button>
      </div>
      <div class="table_box">
        <p class="name">{{ servicesListSection.name[2] }}</p>
        <p class="cost">{{ servicesListSection.cost[2] }}</p>
        <button class="button-service" @click="showModal = true">Обрати послугу</button>
      </div>
    </div>


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
        <button type="submit" :disabled="isSubmitted && !isPhoneValid" :value="buttonValue" class="modalForm__submit"
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
  </section>
</template>

<script>
import telegramBotSend from '@/services/fetchApi';
import BaseModal from '../BaseModal.vue';

export default {
  components: {
    BaseModal
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
    heroClass() {
      return window.innerWidth >= 1199 ? 'hero-main__desktop' : 'hero-main__mobile';
    },
    isPhoneValid() {
      return this.number !== null && this.number.trim() !== '';
    },
  },
}
</script>

<style lang="scss" scoped>
.services_body {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 767px) {
    flex-direction: row;
  }
}

.table_box {
  padding: 20px 20px 20px;
  border: 1px solid #000000;
  transition: all .25s linear;
  position: relative;
  border-radius: 3px;

  &:not(:last-child) {
    margin-bottom: 25px;
  }

  &::before {
    content: '';
    background: url('../../assets/images/blue-bg.png');
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    margin-right: 0;

  @media (min-width: 767px) {
    background-size: auto;
  }
}

  @media (min-width: 767px) {
    padding: 55px 28px 50px;
    margin-bottom: 0;

    &:not(:last-child) {
      margin-right: 20px;
      margin-bottom: 0;
    }
  }

  &:last-child {
    .name {
      margin-bottom: 135px;

      @media (min-width: 767px) {
        margin-bottom: 160px;
      }
    }
  }
}

.name {
  font-weight: 600;
  font-size: 16px;
  line-height: 1.3;
  color: #FFFFFF;
  margin-bottom: 115px;
  padding-left: 7px;
  width: 90%;

  @media (min-width: 767px) {
    font-size: 23px;
    line-height: 113%;
    margin-bottom: 137px;
    width: 95%;
  }
}

.cost {
  font-weight: 800;
  font-size: 16px;
  line-height: 1.3;
  color: #000000;
  margin-bottom: 30px;
  padding-left: 15px;

  @media (min-width: 767px) {
    font-size: 22px;
    line-height: 118%;
    margin-bottom: 59px;
  }
}

.button-service {
  display: block;
  width: 100%;
  align-items: center;
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

  @media (min-width: 767px) {
    width: 380px;
    padding: 18px 70px;
    font-size: 19px;
  }

  &:hover {
    background: #000;
    color: #fff;
    cursor: url(../../assets/images/press.png), auto;
  }
}

.services {
  padding: 30px 0;
  max-width: 320px;
  margin: 0 auto;

  @media (min-width: 767px) {
    max-width: 640px;
    padding: 50px;
  }

  @media (min-width: 1200px) {
    max-width: 1440px;
  }

  &_title {
    position: relative;
    font-weight: 600;
    font-size: 16px;
    line-height: 130%;
    color: #000;
    margin: 0 0 30px 30px;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: -30px;
      width: 22px;
      height: 5px;
      background: #1550e7;
      transform: translateY(-50%);

      @media (min-width: 767px) {
        left: -60px;
        width: 40px;
      }
    }

    @media (min-width: 767px) {
      font-size: 20px;
      line-height: 130%;
      margin: 0 0 50px 60px;
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
  font-size: 45px;
  font-weight: 600;
  margin-bottom: 65px;
}

.success__text {
  font-size: 26px;
  margin-bottom: 35px;
  font-weight: 400;
  line-height: 100%;
}

.success__btn {
  width: 140px;
  height: 63px;
  font-size: 22px;
  font-weight: 600;
  background: #000;
  color: #fff;
  border: 1px solid #000;
  border-radius: 4px;
}

.success-icon {
  position: relative;
  top: -45px;
  display: flex;
  height: fit-content;
  align-items: center;
  justify-content: center;

  &__wrapper {
    display: inline-block;
    width: 16em;
    height: 16em;
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