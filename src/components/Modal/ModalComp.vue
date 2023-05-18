<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" @click="handleModal">
        <div class="modal-container">
          <div class="modal-header">
            <h2>{{ modalSection.header }}</h2>
            <button class="modal-default-button" @click="handleModal">X</button>
          </div>

          <div class="modal-body">
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
          </div>

          <div class="modal-footer" v-show="validMessage">
            <p class="modal-footer__failed">{{ validMessage }}</p>
          </div>
        </div>
      </div>
    </div>
  </transition>
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
      }).then(() => this.$emit('toggleModal'));
    },
    handleModal(e) {
      if (e.target === e.currentTarget) {
        this.$emit('toggleModal');
      }
    },
  },
  emits: ['toggleModal'],
};
</script>

<!-- <script>
import { computed, inject, ref } from "vue";
export default {
  setup(_, { emit }) {
    let success = ref(false);
    let validMessage = ref('');
    const buttonValue = computed(() => {
      return success.value ? 'Заявку відправлено' : 'Відправити';
    });
    const buttonClass = computed(() => {
      return success.value ? 'modal-footer__success' : 'modalForm__submit';
    });
    const handleModal = (e) => e.target === e.currentTarget && emit('toggleModal');

    const gatherData = inject('formDataGather');
    
    const handeSubmitModal = (e) => {
      e.preventDefault();
      if (e.target[1].value.length >= 10) {
        validMessage.value = '';
        const order = gatherData(e.target);
        success.value = true;
        emit('handleSubmit', order);
        setTimeout(() => {
          emit('toggleModal');
        },2500)
      } else {
        validMessage.value = 'Введіть Ваш номер телефону у форматі 0505742362';
      }
    }    

    return { handleModal, handeSubmitModal, validMessage, success, buttonValue, buttonClass }
  }
  }
</script> -->

<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-header {
  display: flex;

  & h2 {
    text-align: center;
    flex-grow: 1;
  }
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  display: flex;
  flex-direction: column;
  max-width: 450px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
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

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
  height: 25px;
  width: 25px;
  background: transparent;
  border: 1px groove rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  cursor: pointer;
  transition: all .25s linear;

  &:hover {
    background: #000;
    color: #fff;
  }
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}</style>