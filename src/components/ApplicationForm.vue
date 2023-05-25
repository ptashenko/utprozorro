<template>
  <Form class="modalForm" @submit.prevent="handleSubmit">
    <label class="modalForm__label">
      {{ modalSection.labels[0] }}
      <input class="modalForm__input" name="name" type="text" v-model="name" placeholder="Ваше ім'я">
    </label>
    <label class="modalForm__label">
      {{ modalSection.labels[1] }}
      <input class="modalForm__input" name="phone" type="tel" v-model="number" placeholder="Ваш телефон">
    </label>
    <label class="modalForm__label">
      {{ modalSection.labels[2] }}
      <input class="modalForm__input" name="email" type="email" v-model="mail" placeholder="Ваш email">
    </label>
    <label class="modalForm__label">
      {{ modalSection.labels[3] }}
      <textarea name="message" maxlength="320" class="modalForm__textarea" v-model="question" cols="30"
        rows="5"></textarea>
    </label>
    <input type="submit" :disabled="success" :value="buttonValue"
      :class="success ? 'modal-footer__success' : 'modalForm__submit'">
  </Form>
</template>

<script>
import telegramBotSend from '@/services/fetchApi'
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      name: null,
      number: null,
      mail: null,
      question: null,
    };
  },
  methods: {
    handleSubmit() {
      const message = `Нова заявка!%0AІм'я: ${this.name}%0AНомер телефону: ${this.number}%0AEmail: ${this.mail}%0AКоментар: ${this.question}`;
      telegramBotSend(message);
      Swal.fire({
        title: 'Дякуємо!',
        text: 'Ми зв\'яжемось з Вами у найближчий час!',
        icon: 'success',
        confirmButtonText: 'Добре',
      });
    },
  },
};
</script>

<style lang="scss">
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
  }
}

.modal-footer {
  text-align: center;
  pointer-events: none;

  &__success {
    background: green;
    color: white;
    width: fit-content;
    margin: 0 auto;
    padding: 10px;
    border-radius: 15px;
    transition: all .25s linear;
  }

  &__failed {
    background: red;
    color: white;
    width: fit-content;
    margin: 0 auto;
    padding: 10px;
    border-radius: 15px;
    font-size: 16px;
  }
}
</style>