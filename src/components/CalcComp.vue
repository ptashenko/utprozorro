<template>
  <Form
    class="form"
    @submit="submitData"
    id="calcForm">
    <h1 class="form__title">Розрахувати вартість послуг</h1>
    <div class="form__body">
      <div class="form__radio">
        <label
          v-for="(service, i) of serviceName"
          :key="i"
          :class="{ selected: service === selectedService }">
          <span>{{ service }}</span>
          <input
            type="radio"
            :value="service"
            v-model="selectedService"
            ref="radioInput" />
        </label>
      </div>
      <label class="form__label"
        >ID тендеру
        <input
          type="text"
          v-model="tenderID"
          placeholder="наприклад UA-2020-05-27-001286-b" />
      </label>
      <label class="form__label"
        >Загальна вартість тендеру, грн
        <input
          type="number"
          placeholder="наприклад 1 000 000,00"
          step="1000"
          name="tenderAmount"
          v-model="tenderAmount"
          @keyup.enter="calcPrice" />
      </label>
    </div>
    <div class="result">
      <button
        v-if="!progressStarted || progressStarted === 2"
        class="result__button"
        @click="calcPrice"
        ref="calcButton">
        {{
          progressStarted === 2 ? 'Розрахувати ще раз' : 'Розрахувати вартість'
        }}
      </button>
      <p
        v-if="warning"
        class="warning">
        Ви повинні вибрати послугу яка вас цікавить та вказати вартість тендеру
      </p>
      <p
        v-show="progressStarted === 1"
        class="result__analyze"
        ref="analyzeText">
        Аналізуємо дані...
      </p>
      <div
        v-show="progressStarted === 1"
        class="progress"
        ref="progressBar">
        {{ progress > 15 ? progress + '%' : '...' }}
      </div>
      <p
        v-if="progressStarted === 2"
        class="result__text">
        Дякуємо, вартість послуги:
        <span class="result__text--blue">{{ price }} грн</span>
      </p>
      <label class="form__label" v-if="progressStarted === 2"
        >Ваш номер телефону:
        <input
          type="phone"
          placeholder="наприклад 0505742362"
          v-model="phone"
        />
      </label>
    </div>
    <input
      v-if="progressStarted === 2"
      type="submit"
      value="Замовити послугу"
      class="form__submit" />
  </Form>
</template>

<script>
export default {
  data() {
    return {
      serviceName: [
        'Участь у тендері',
        'Оскарження в АМКУ',
        'Вимога на тендер',
      ],
      warning: false,
      selectedService: '',
      tenderID: '',
      tenderAmount: '',
      price: null,
      phone: '',
      progress: 0,
      progressStarted: null,
    };
  },
  methods: {
    calcPrice(e) {
      e.preventDefault();
      if (this.selectedService.length > 0 && this.tenderAmount > 0) {
        this.warning = false;
        this.startProgress();
        switch (this.selectedService) {
          case 'Участь у тендері':
            if (this.tenderAmount <= 100000) {
              this.price = 1200;
            } else if (
              this.tenderAmount > 100000 &&
              this.tenderAmount <= 200000
            ) {
              this.price = 2500;
            } else if (
              this.tenderAmount > 200000 &&
              this.tenderAmount <= 3000000
            ) {
              this.price = 2900;
            } else if (this.tenderAmount > 3000000) {
              this.price = 6000;
            }
            break;
          case 'Оскарження в АМКУ':
            this.price = 2400;
            break;
          case 'Вимога на тендер':
            this.price = 1000;
            break;
          default:
            this.price = 0;
            break;
        }
      } else {
        this.warning = true;
      }
    },
    submitData(e) {
      e.preventDefault();
      const serviceName = this.selectedService;
      const iD = this.tenderID;
      const tenderAmount = this.tenderAmount;
      const orderPrice = this.price;
      const clientsPhone = this.phone.trim().replaceAll('(', '').replaceAll(')', '').replaceAll('-', '').replaceAll(' ', '').replaceAll('+', '').replace('38', '');
      if (clientsPhone.length === 10) {
        e.target[7].style.background = 'transparent';
        e.target[7].style.color = '#000';
        e.target[7].value = 'Відправляємо...';
        setTimeout(() => {
          e.target[7].value = 'Відправлено!';
          e.target[7].style.background = 'green';
          e.target[7].style.color = '#fff';
          setTimeout(() => {
            this.tenderID = '';
            this.tenderAmount = '';
            this.selectedService = '';
            this.progressStarted = null;
          },1000)
        }, 1000)
          const data = {
            serviceName,
            iD,
            tenderAmount,
            orderPrice,
            clientsPhone
        };
        console.log(data);
      } else {
        e.target[7].value = 'Введіть номер телефону!';
        e.target[7].style.background = 'red';
        e.target[7].style.color = '#fff';
      }
    },
    startTextBlink() {
      const analyzeText = this.$refs.analyzeText;
      let blinkCount = 0;
      let opacityToggle = setInterval(() => {
        if (blinkCount !== 1) {
          blinkCount += 1;
        } else {
          blinkCount = 0;
        }
        this.progressStarted === 2 && clearInterval(opacityToggle);
        analyzeText.style.opacity = blinkCount;
      }, 1000);
    },
    startProgress() {
      this.progressStarted = 1;
      let count = 0;
      const progressBar = this.$refs.progressBar;
      progressBar.style.padding = '0 5px';
      this.startTextBlink();
      let progressCount = setInterval(() => {
        if (count < 100) {
          count += 1;
          this.progress = count;
          progressBar.style.width = `${count}%`;
        } else {
          this.progressStarted = 2;
          clearInterval(progressCount);
        }
      }, 50);
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  &__title {
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 10px;
  }
  &__body {
    display: flex;
    flex-direction: column;
    width: 280px;
    margin: 0 auto 20px;
    justify-content: center;
    align-items: center;
  }
  &__radio {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    width: 100%;
    // text-align: center;
    & > label {
      display: flex;
      position: relative;
      flex-direction: row-reverse;
      align-items: center;
      width: 100%;
      cursor: pointer;
      & span {
        flex-grow: 1;
        margin-left: 25px;
      }
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
    & > label > input[type='radio'] {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      outline: none;
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: -5px;
        width: 20px;
        height: 20px;
        background: #fff;
        transform: translateY(-50%);
        border: 1px solid rgba(0, 0, 0, 0.199);
        border-radius: 50%;
      }
      &:checked::after {
        content: '';
        background: radial-gradient(circle, rgba(21,80,231,1) 21%, rgba(255,255,255,1) 22%, rgba(255,255,255,1) 80%);
      }
    }
  }
  &__label {
    display: flex;
    flex-direction: column;
    width: 100%;
    & input {
      padding: 10px 10px;
      border: none;
      background: #edf2ff;
      border-radius: 10px;
      margin-top: 10px;
      &::placeholder {
        color: rgba(0, 0, 0, 0.171);
      }
    }
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

.result {
  &__button {
    display: block;
    background: transparent;
    border: 2px groove rgb(192, 192, 192);
    padding: 5px 10px;
    margin: 0 auto;
    border-radius: 10px;
  }
  &__text {
    text-align: center;
    &--blue {
      color: #1550e7;
      font-weight: 600;
    }
  }
  &__analyze {
    color: #1550e7;
    font-weight: 600;
    transition: opacity 0.5s linear;
    opacity: 0;
  }
}

.hidden {
  display: none;
}

.progress {
  display: flex;
  align-items: center;
  margin-top: 10px;
  justify-content: end;
  width: 0%;
  height: 30px;
  background: #1550e7;
  color: #fff;
  font-weight: 600;
}

.selected {
  color: #1550e7;
  font-weight: 600;
  transition: color 0.25s linear;
}

.warning {
  color: red;
  font-size: 12px;
  text-align: center;
}

</style>