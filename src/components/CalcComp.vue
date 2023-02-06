<template>
  <Form class="calcForm" id="calcForm" @submit="submitOrder">
    <ul class="calcForm__list">
      <label :class="[{'checked': checkedService.name === service.name },'calcForm__label','calcForm__label-radio']" v-for="(service,i) of servicesList" :key="i">{{service.name}}
        <input 
          type="radio" 
          :value="service"
          name="service" 
          class="calcForm__item" 
          v-model="checkedService"
        />
      </label>
    </ul>
    <label class="calcForm__label">ID тендеру 
      <input type="text" name="tender" placeholder="ID тендеру" class="calcForm__input" v-model="tenderName" />
    </label>
    <label class="calcForm__label">Сума тендеру, грн
      <input type="text" name="amount" placeholder="Загальна вартість закупівлі" class="calcForm__input" v-model="tenderAmount" />
    </label>
    <button v-if="!loading" class="calcForm__button" @click.prevent="countOrder">Розрахувати</button>
    <RadialProgressBar
      v-if="loading && loading !== 100"
      :diameter="75"
      :total-steps="100"
      :completed-steps="loading"
      start-color="#1550e7"
      stop-color="#000"
      style="margin: 0 auto"
    >
    {{ loading }}%
    </RadialProgressBar>
    <div class="calcForm__footer" v-if="loading === 100 && price && !orderSended">
      <p>Вартість тендеру: {{price}},00 грн</p>
      <label>
        <input type="tel" name="phone" placeholder="Ваш телефон" class="calcForm__input" v-model="usersNumber" v-mask="'(000)-000-00-00'">
      </label>
      <button class="calcForm__button" @click.prevent="sendOrder">Замовити</button>
    </div>
  </Form>
</template>

<script setup>
import {ref} from 'vue'
import Swal from 'sweetalert2'
const tenderName = ref(null);
const tenderAmount = ref(null);
const price = ref(null)
const loading = ref(0)
const usersNumber = ref(null)
// import telegramBotSend from '@/services/fetchApi'

const checkedService = ref(
  {
    name: '',
  },
)

const orderSended = ref(false)

const servicesList = [
    {
        name: 'Участь у тендері',
        firstLevel: 100000,
        secondLevel: 200000,
        thirdLevel: 3000000,
    },
    {
        name: 'Оскарження в АМКУ',
    },
    {
        name: 'Вимога на тендер',
    }
]

const countOrder = () => {
  if (!tenderAmount.value && checkedService.value) {
    Swal.fire({
      title: 'Помилка!',
      text: 'Ви не ввели обов\'язкові дані',
      icon: 'error',
      confirmButtonText: 'ОК',
    })

    return
  }
  const load = setInterval(()=>{
    if (loading.value !== 100) {
      loading.value++
    } else {
      clearInterval(load)
    }
  }, 15)
  if (checkedService.value.name === 'Участь у тендері') {
    if (tenderAmount.value <= checkedService.value.firstLevel) {
      price.value = 1200;
    }
    if (tenderAmount.value > checkedService.value.firstLevel && tenderAmount.value <= checkedService.value.secondLevel) {
      price.value = 1600;
    }
    if (tenderAmount.value > checkedService.value.secondLevel && tenderAmount.value <= checkedService.value.thirdLevel) {
      price.value = 2900;
    }
    if (tenderAmount.value > checkedService.value.thirdLevel) {
      price.value = 6000
    }
  } else if (checkedService.value.name === 'Оскарження в АМКУ') {
    price.value = 3500
  } else if (checkedService.value.name === 'Вимога на тендер') {
    price.value = 1500
  }
}

const sendOrder = () => {
  if (!usersNumber.value) {
    Swal.fire({
      title: 'Помилка!',
      text: 'Введіть ваш номер телефону',
      icon: 'error',
      confirmButtonText: 'ОК',
    })

    return
  }
  
  const message = `Нова заявка!%0AНомер телефону: ${usersNumber.value}%0AТендер: ${tenderName.value}`
  // telegramBotSend(message)
  orderSended.value = true
  Swal.fire(
    'Дякуємо!',
    `Ми отримали Ваше змовлення по тендеру ${tenderName.value || ''} і зв'яжемось з Вами у найближчий час!`,
    'success'
  )
}

</script>

<script>
import RadialProgressBar from 'vue-radial-progress'
export default {
  components: {
    RadialProgressBar
  }
}
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
      background: #1551e783;
      color: #fff;
      text-align: center;
      font-size: 12px;
      cursor: pointer;
      transition: all .25s linear;
      
      &:hover,
        &:checked {
          background: #1550e7;
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