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
    <div class="calcForm__footer" v-if="price && progressBar === 100">
      <p>Вартість тендеру: {{price}},00 грн</p>
      <label>
        <input type="tel" name="phone" placeholder="Ваш телефон" class="calcForm__input">
      </label>
      <button class="calcForm__button">Відправити замовлення</button>
    </div>
  </Form>
  <div class="progress" v-show="progressBar > 0">
    <div class="progress__bar" :style="{width: progressBar + '%'}">{{progressBar > 30 ? progressBar + '%' : ''}}</div>
  </div>
</template>

<script>
import { inject, ref } from '@vue/runtime-core';
export default {
  setup() {
    const servicesList = inject('store').servicesList;
    const calc = inject('calcService');
    const gatherData = inject('formDataGather');
    const picked = ref('');
    const price = ref(null);
    const progressBar = ref(0);
    const amount = ref(null);

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

    const countOrder = () => {
        startLoading();
        picked.value === servicesList[0].name ? calcPrice(amount, price) : secondCalc(picked);
    }

    const submitOrder = (e) => {
      e.preventDefault();
      const order = gatherData(e.target);
      order.service = picked.value;
      calc(e.target);
    }
    

    return { amount, countOrder, servicesList, submitOrder, picked, price, progressBar }
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
  &__footer {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
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
</style>