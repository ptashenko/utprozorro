<template>
  <main class="hero-main">
    <div :class="heroClass">
      <h1 class="hero-main__title">
        {{ mainPageSection.titles[0] }} <span class="hero-main__title--bold">{{ mainPageSection.titles[1] }}</span><span
          class="hero-main__title--underline">{{ mainPageSection.titles[2] }}</span>
      </h1>
      <ul class="hero-main__benefits">
        <li class="hero-main__benefitsItem" v-for="(item, i) of mainPageSection.benefits" :key="i">{{ item }}</li>
      </ul>
      <p class="hero-main__subtitle">
        {{ mainPageSection.subtitle }}
      </p>
      <a class="hero-main__button" @click="showModal = true">{{ mainPageSection.button }}</a>

      <BaseModal
        :show-modal="showModal"
        :show-close-button="true"
        @update:show-modal="showModal = $event"
        :title="modalSection.header"
      >
        <Form class="modalForm" @submit.prevent="handleSubmit">
          <label class="modalForm__label">
            {{ modalSection.labels[0] }}
            <input
              class="modalForm__input"
              name="name" type="text"
              v-model="name"
              placeholder="Ваше ім'я"
            >
          </label>
          <label class="modalForm__label">
            {{ modalSection.labels[1] }}
            <input
              class="modalForm__input"
              name="phone" type="tel"
              v-model="number"
              placeholder="Ваш телефон"
              @input="handlePhoneInput"
            >
            <div v-if="!isPhoneValid && isSubmitted" class="modalForm__error-message">Введіть номер телефону</div>
          </label>
          <label class="modalForm__label">
            {{ modalSection.labels[2] }}
            <input
              class="modalForm__input"
              name="email" type="email"
              v-model="mail"
              placeholder="Ваш email"
            >
          </label>
          <label class="modalForm__label">
            {{ modalSection.labels[3] }}
            <textarea
              name="message"
              maxlength="320"
              class="modalForm__textarea"
              v-model="question" cols="30"
              rows="5"
            >
            </textarea>
          </label>
          <input
            type="submit"
            :disabled="isSubmitted && !isPhoneValid"
            :value="buttonValue"
            class="modalForm__submit"
            :class="{ 'modalForm__submit__disabled': isSubmitted && !isPhoneValid }" @click="isSubmitted = true"
          >
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
        <img class="hero-main__image" src="../../assets/images/hummer-main.jpg" alt="" />
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
};
</script>

<style lang="scss">
.hero-main {
  max-width: 320px;
  padding: 30px 0 140px;
  margin: 0 auto;

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
        height: 5px;
      }
    }
  }

  &__benefitsItem {
    font-size: 13px;
    line-height: 1.3;
  }

  &__subtitle {
    font-size: 13px;
    font-weight: 500;
  }

  &__button {
    display: block;
    width: 270px;
    text-align: center;
    margin: 30px auto;
    text-decoration: none;
    padding: 20px 40px;
    border: 1px solid #000;
    color: #000;
    font-size: 14px;
    line-height: 1;
    transition: all 250ms linear;
    cursor: pointer;

    &:hover {
      background: #000;
      color: #fff;
    }
  }

  &__image {
    display: block;
    margin: 0 auto;
    max-width: 100%;

    &--wrapper {
      display: block;
      max-width: 522px;
      margin: 0 auto;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        bottom: -5px;
        right: -5px;
        width: 100px;
        height: 100px;
        z-index: -1;
        background: #1550e7;
      }
    }
  }
}

@media (max-width: 1199px) {
  .hero-main__desktop {
    display: none;
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
      font-size: 18px;
    }

    &__subtitle {
      font-size: 16px;
    }

    &__button {
      font-size: 18px;
      width: 320px;
    }
  }
}

@media (min-width: 1200px) {
  .hero-main {
    max-width: 1200px;

    &__mobile {
      display: none;
    }

    &__desktop {
      position: relative;
    }

    &__title {
      font-size: 64px;

      &--bold {
        display: block;
        font-size: 64px;
        text-shadow: 1px 1px 10px #fff;
      }

      &--underline {
        display: inline-block;
        font-size: 42px;
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

  &__label {
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  &__input {
    margin-top: 10px;
    border: none;
    outline: none;
    padding: 10px;
    background: rgba(8, 0, 255, 0.04);
    border-radius: 15px;
  }

  &__textarea {
    resize: none;
    margin-top: 10px;
    border: none;
    outline: none;
    padding: 10px;
    background: rgba(8, 0, 255, 0.04);
    border-radius: 15px;
  }

  &__submit {
    display: block;
    width: 100%;
    max-width: 300px;
    padding: 15px 20px;
    margin: 20px auto 0;
    background: transparent;
    color: #000;
    border: 1px solid #000;
    cursor: pointer;
    transition: all 250ms linear;

    &:hover {
      background: #000;
      color: #fff;
    }

    &__disabled {
      display: block;
      width: 100%;
      max-width: 300px;
      padding: 15px 20px;
      margin: 20px auto 0;
      background: transparent;
      border: 1px solid #adadad;
      color: #adadad;
      cursor: not-allowed;
      transition: all 250ms linear;
    }
  }

  &__error-message {
    color: red;
    margin-top: 5px;
    font-size: 11px;
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
  top: -20px;
  font-size: 28px;
  font-weight: bold;
}

.success__text {
  font-size: 16px;
  margin-bottom: 20px;
}

.success__btn {
  width: 80px;
  height: 34px;
  font-size: 14px;
  font-weight: 500;
  background: #000;
  color: #fff;
  border: 1px solid #000;
  border-radius: 5px;
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
    border-radius: 10px;
  }

  &__tip {
    width: 2.4em;
    top: 4.3em;
    left: 1.4em;
    transform: rotate(45deg);
    animation: tipInPlace 300ms ease-in-out;
    animation-fill-mode: forwards;
    animation-delay: 180ms;
    visibility: hidden;
  }

  &__long {
    transform: rotate(-45deg);
    top: 3.70em;
    left: 2.75em;
    animation: longInPlace 140ms ease-in-out;
    animation-fill-mode: forwards;
    visibility: hidden;
    animation-delay: 400ms;
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