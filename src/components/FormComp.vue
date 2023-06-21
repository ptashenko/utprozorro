<template>
  <FormKit type="form" id="form" @submit="handleSubmit" submit-label="Відправити" :classes="{
    form: 'form',
  }" :submit-attrs="{ inputClass: 'form__button' }" :config="{
  classes: {
    input: 'form__input',
    outer: 'form__label',
  }
}">

    <h3 class="form__title">{{ formSection.title }}</h3>
    <div class="form__wrapper">
      <FormKit type="text" name="name" validation="?length:2" :validation-messages="{
        length: 'Введіть справжнє ім`я'
      }" placeholder="Введіть ваше ім'я" />
      <FormKit type="text" name="email" validation="email" :validation-messages="{
        email: 'Введіть корректний емейл'
      }" placeholder="Введіть ваш email" />
      <FormKit type="tel" name="phone" :validation="[['required'], ['matches', /^\d{3}\d{3}\d{2}\d{2}$/]]"
        :validation-messages="{
          matches: 'Введіть номер телефону у форматі 0505241332', required: 'Введіть номер телефону',
        }" placeholder="0505241332" />
      <FormKit type="textarea" text-area name="comment" placeholder="Залиште коментар або запитання" />
    </div>
  </FormKit>
</template>

<script>
import telegramBotSend from '@/services/fetchApi'
export default {
  data() {
    return {
    }
  },
  methods: {
    handleSubmit(order) {
      const submitBtn = document.querySelector('.form__button');
      submitBtn.classList.remove('form__button');
      submitBtn.classList.add('form__send');
      submitBtn.textContent = 'Дякуємо, відправлено!';
      const message = `Нова заявка!%0AІ'мя клієнта: ${order.name}%0AНомер телефону: ${order.phone}%0AEmail: ${order.email}%0AПовідомлення: ${order.comment}`
      telegramBotSend(message);
      setTimeout(() => {
        this.$formkit.reset("form");
      }, 1000)
    }
  },
}
</script>

<style lang="scss">
.form {
  margin-top: 30px;
  background: #fff;
  padding: 40px 10px;

  &__title {
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 54px;
    text-align: center;
    font-weight: 600;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
  }

  &__label {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  &__input {
    padding: 10px 5px;
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid #333333;
    font-weight: 400;
    font-size: 18px;
    line-height: 144%;
    color: #6C6C6C;
  }

  &__button {
    border-bottom: none;
    display: block;
    width: 292px;
    text-align: center;
    margin: 30px auto 25px;
    text-decoration: none;
    padding: 18px 90px 18px 90px;
    border: 1px solid #fff;
    color: #000;
    font-size: 18px;
    font-weight: 600;
    line-height: 1;
    background: #fff;
    transition: all 250ms linear;
    cursor: pointer;
    position: relative;
    border: 1px solid #000;

    &::after {
      content: '';
      width: 38px;
      height: 42px;
      display: inline-block;
      background: url(../assets/images/press.png);
      background-size: cover;
      position: absolute;
      top: 5px;
      right: 11px;
    }

    &:hover {
      background: #000;
      color: #fff;
    }
  }

  &__send {
    border-bottom: none;
    display: block;
    width: 270px;
    text-align: center;
    margin: 20px auto;
    text-decoration: none;
    padding: 20px 40px;
    border: 1px solid #000;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    background: green;
    transition: all 250ms linear;
    cursor: pointer;
  }
}

.formkit-inner [text-area] {
  resize: none;
}

.formkit-message {
  font-size: 11px;
  margin: 5px 0;
  color: red;
}

@media (min-width: 767px) {
  .form {
    padding: 40px 40px;
  }
}

@media (min-width: 1200px) {
  .form {
    margin: 0;
    flex-grow: 1;
  }
}
</style>