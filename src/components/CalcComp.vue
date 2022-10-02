<template>
  <Form class="calcForm" id="calcForm" @submit="submitOrder">
    <ul class="calcForm__list">
      <label :class="[{'checked': picked === service.name },'calcForm__label','calcForm__label-radio']" v-for="(service,i) of servicesList" :key="i">{{service.name}}
        <input type="radio" :value="service.name" name="service" class="calcForm__item" v-model="picked" />
      </label>
    </ul>
    <label class="calcForm__label">ID тендеру 
      <input type="text" name="tender" placeholder="ID тендеру" class="calcForm__input" />
    </label>
    <label class="calcForm__label">Сума тендеру, грн
      <input type="text" name="amount" placeholder="Загальна вартість закупівлі" class="calcForm__input" v-model="amount" />
    </label>
    <a type="button" :disabled="price" :class="[{'disabledButton': price}, 'calcForm__button']" @click="countOrder">Розрахувати</a>
    <div v-for="(error,i) of errors" :key="i">
      <p v-if="error.status" class="errors">{{error.name}}</p>
    </div>
    <div class="calcForm__footer" v-if="price && progressBar === 100">
      <p>Вартість тендеру: {{price}},00 грн</p>
      <label>
        <input type="tel" name="phone" placeholder="Ваш телефон" class="calcForm__input" v-model="phone" v-mask="'(000)-000-00-00'">
      </label>
      <button :class="['calcForm__button', {'calcForm__submit': orderSended }]">{{buttonMessage}}</button>
    </div>
  </Form>
  <div class="progress" v-show="progressBar > 0 && progressBar !== 100">
    <div class="progress__bar" :style="{width: progressBar + '%'}">{{progressBar > 30 ? progressBar + '%' : ''}}</div>
  </div>
</template>

<script>
import { computed, inject, reactive, ref } from '@vue/runtime-core';
import '../assets/style/animations.css';
export default {
  setup() {
    const servicesList = inject('store').servicesList;
    const calc = inject('calcService');
    const gatherData = inject('formDataGather');
    const picked = ref('');
    const price = ref(null);
    const phone = ref(null);
    const progressBar = ref(0);
    const amount = ref('');
    const errors = reactive([]);
    const orderSended = ref(null)

    const calcPrice = (order, price) => {
      if (order.value <= servicesList[0].price[0].level) {
        price.value = servicesList[0].price[0].amount
      } else if (order.value > servicesList[0].price[0].level && order.amount <= servicesList[0].price[1].level) {
        price.value = servicesList[0].price[1].amount
      } else if (order.value > servicesList[0].price[1].level && order.amount <= servicesList[0].price[2].level) {
        price.value = servicesList[0].price[2].amount
      } else if (order.value >= servicesList[0].price[3].level) {
        price.value = servicesList[0].price[3].amount
      }
    }

    const secondCalc = (pickedService) => {
      price.value = pickedService.value === servicesList[1].name ? servicesList[1].price : servicesList[2].price; 
    }

    const startLoading = () => {
      let i = setInterval(() => {
        if (progressBar.value < 100) {
          progressBar.value++
        } else {
          clearInterval(i);
        }
      },20)
    }

    const orderValidation = (opOne, opTwo) => {
      if (!opOne.value) {
          errors.push({ name: 'Виберіть послугу', status: true, });
        return false;
      } else {
        errors.map(err => err.status = false);
      }
      if (!opTwo.value) {
        errors.push({ name: 'Введіть оголошену вартість тендеру', status: true });
        return false;
      } else {
        errors.map(error => error.status = false);
      }

      return true;
    }

    const countOrder = () => {
      orderValidation(picked, amount);
      if (errors.every(item => !item.status)) {
        if (/^[0-9]+$/.test(amount.value)) {
          startLoading();
          picked.value === servicesList[0].name ? calcPrice(amount, price) : secondCalc(picked);
        } else {
          errors.push({ name: 'Сума тендеру повинна містити тільки цифри без пробілів', status: true });
        }
      }
    }

    const buttonMessage = computed(() => {
      if (orderSended.value === null) {
        return 'Відправити заявку'
      } else if (orderSended.value === true) {
        return 'Відправляємо'
      } else if (orderSended.value === false) {
        return 'Ваша заявка отримана!'
      }
    })

    const resetForm = () => {
      orderSended.value = true;
      setTimeout(() => {
        orderSended.value = false;
        setTimeout(() => {
          picked.value = '';
          amount.value = null;
          price.value = null;
          progressBar.value = 0;
          orderSended.value = null;
        }, 1000)
      },1000)
    }

    const submitOrder = (e) => {
      e.preventDefault();
      if (phone.value && phone.value.length === 15) {
        const order = gatherData(e.target);
        order.service = picked.value;
        errors.forEach(error => error.status = false);
        resetForm();
        const message = `Нова заявка!%0AПослуга: ${picked.value}%0AID тендеру: ${e.target[3].value}%0AКонтактний телефон: ${phone.value}`;
        calc(message);
      } else {
        errors.push({ name: 'Введіть правильний номер телефону', status: true });
      }
    }
    

    return { amount, countOrder, servicesList, submitOrder, picked, price, progressBar, errors, phone, orderSended, buttonMessage }
  }
};
</script>

<style lang="scss" scoped>
.calcForm {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  transition: all .25s linear;
  &__list {
    display: flex;
    justify-content: space-between;
  }
  &__label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    transition: all .25ms linear;
    &-radio {
      display: flex;
      padding: 10px;
      justify-content: center;
      align-items: center;
      width: 90px;
      height: 90px;
      background: #1550e7;
      color: #fff;
      text-align: center;
      font-size: 12px;
      cursor: pointer;
      transition: all .25s linear;
      
      &:hover,
        &:checked {
          transform: scale(1.2);
          transition: all .25s linear;
        }
    }
  }
  &__item {
    appearance: none;
  }
  &__input {
    margin-top: 5px;
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 10px 15px;
    background: rgba(128, 128, 128, 0.158);
  }
  &__button {
    padding: 10px;
    margin-top: 10px;
    border-radius: 10px;
    border: none;
    background: #1550e7;
    color: #fff;
    text-align: center;
    cursor: pointer;
    &:hover, &:active {
      box-shadow: inset 0px 0px 29px -10px rgba(0, 0, 0, 0.75);
    }
  }
  &__submit {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .25s linear;
        &::before {
          content: '';
          border: 12px solid;
          margin-right: 10px;
          border-color: rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          display: inline-block;
          box-sizing: border-box;
          animation: animloader 1s linear infinite;
        }
  }
  &__footer {
    display: flex;
    flex-direction: column;
  }
}

.checked {
  transform: scale(1.2);
  border-radius: 10px;
  transition: all .25s linear;
  background: #0032af;
}

.progress {
  margin-top: 10px;
  width: 100%;
  height: 25px;
  background: rgba(128, 128, 128, 0.137);
  &__bar {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1550e7;
    height: 100%;
    transition: all .25s ease;
    color: #fff;
  }
}

.disabledButton {
  background: #1551e764;
  pointer-events: none;
  cursor: auto;
      &:hover,
        &:active {
          box-shadow: unset;
        }
}

@media (min-width: 767px) {
  .calcForm {
    &__label {
      &-radio {
        width: 120px;
        height: 120px;
        font-size: 14px;
      }
    }
  }
}

@media (min-width: 1200px) {
  .calcForm {
    &__label {
      &-radio {
        width: 200px;
        height: 200px;
        font-size: 16px;
      }
    }
  }
}

.errors {
  margin: 5px;
  color: red;
  font-size: 10px;
}
</style>