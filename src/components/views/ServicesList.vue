<template>
  <section class="services" id="services">
    <h2 class="services_title">
      {{ servicesListSection.title }}
    </h2>
    <table class="services_body">
      <tbody @click="showModal = true">
        <tr class="table_row">
          <td class="name">{{ servicesListSection.name[0] }}</td>
          <td class="cost">{{ servicesListSection.cost[0] }}</td>
        </tr>
        <tr class="table_row">
          <td class="name">{{ servicesListSection.name[1] }}</td>
          <td class="cost">{{ servicesListSection.cost[1] }}</td>
        </tr>
        <tr class="table_row">
          <td class="name">{{ servicesListSection.name[2] }}</td>
          <td class="cost">{{ servicesListSection.cost[2] }}</td>
        </tr>
      </tbody>
    </table>

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

<style lang="scss">
.services_body {
  width: 60vw;
  margin: 0 auto;
}

table {
  border-collapse: initial;
}

.table_row {
  height: 3vw;
  cursor: pointer;
  transition: all .25s linear;

  &:hover {
    background: #1550e7;
    color: #fff;
  }
}

.name {
  padding: 10px;
  border: 1px solid #000;
}

.cost {
  text-align: center;
  font-weight: 800;
  border: 1px solid #000;
}

.services {
  padding: 60px 0;
  max-width: 320px;
  margin: 0 auto;

  @media (min-width: 767px) {
    max-width: 640px;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
  }

  &_title {
    position: relative;
    margin: 0;
    margin-left: 60px;
    font-size: 16px;
    line-height: 1.3;
    color: #111111;
    width: 255px;
    padding: 30px 0;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: -60px;
      width: 40px;
      height: 5px;
      background: #1550e7;
      transform: translateY(-50%);
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