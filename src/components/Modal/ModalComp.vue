<template>
    <transition name="modal">
        <div class="modal-mask" >
          <div class="modal-wrapper" @click="handleModal">
            <div class="modal-container" >
              <div class="modal-header">
                  <h2>Залишити заявку</h2>
                  <button class="modal-default-button" @click="handleModal">X</button>
              </div>

              <div class="modal-body">
                  <Form class="modalForm" @submit="handeSubmitModal">
                    <label class="modalForm__label">
                      Ваше ім'я:
                      <input class="modalForm__input" type="text" placeholder="Ваше ім'я" v-model="name">
                    </label>
                    <label class="modalForm__label">
                      Номер телефону:
                      <input class="modalForm__input" type="tel" placeholder="Ваш телефон" v-model="phone">
                    </label>
                    <label class="modalForm__label">
                      Email:
                      <input class="modalForm__input" type="email" placeholder="Ваш email" v-model="email">
                    </label>
                    <label class="modalForm__label">
                      Ваше запитання (за наявності)
                      <textarea maxlength="320" class="modalForm__textarea" cols="30" rows="5" v-model="message"></textarea>
                    </label>
                    <input type="submit" value="Відправити" class="modalForm__submit">
                  </Form>
              </div>

              <div class="modal-footer">
                  <p class="modal-footer__failed">Введіть Ваш номер телефону у форматі 0505742362</p>
              </div>
            </div>
          </div>
        </div>
    </transition>
</template>

<script>
// import telegramBotSend from '@/services/fetchApi'
export default {
  setup(_, {emit}) {
    const handleModal = (e) => e.target === e.currentTarget && emit('toggleModal');
    const handeSubmitModal = (e) => {
      e.preventDefault();
      console.log(e);
      emit('handleSubmit');
    }    

    return { handleModal, handeSubmitModal }
  }
  // data() {
  //   return {
  //     // name: '',
  //     // phone: '',
  //     // email: '',
  //     // message: '',
  //     // validation: true,
  //   }
  // },
  // methods: {
  //   handleSubmitModal(e) {
  //     this.$emit('handleSubmit', e)
  //   }
  //   // submitOrder(e) {
  //   //   e.preventDefault();
  //   //   const buttonStyle = e.target[4].style;
  //   //   const button = e.target[4];
  //   //   const prettyPhone = this.phone.trim().replaceAll('(','').replaceAll(')','').replaceAll('-','').replaceAll(' ', '').replaceAll('+', '').replace('38','');
  //   //   if (prettyPhone.length === 10) {
  //   //     this.validation = true;
  //   //     button.value = 'Відправляємо...';
  //   //     const clientsData = {
  //   //       name: this.name,
  //   //       phone: prettyPhone,
  //   //       email: this.email,
  //   //       message: this.message,
  //   //     }
  //   //     const message = `Нова заявка!%0AІм'я клієнта: ${clientsData.name}%0AКонтактний телефон: ${clientsData.phone}%0AEmail: ${clientsData.email}%0AКоментар: ${clientsData.message}`
  //   //     telegramBotSend(message);
  //   //     setTimeout(() => {
  //   //       buttonStyle.background = 'green';
  //   //       buttonStyle.color = '#fff';
  //   //       button.value = 'Відправлено!';
  //   //       setTimeout(() => {
  //   //         this.$store.state.showModal = false;
  //   //       },1500)
  //   //     }, 1000)
  //   //   } else {
  //   //     this.validation = false;
  //   //   }
  //   }
  }
</script>

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
    background: rgba(8,0, 255, 0.04);
    border-radius: 15px;
  }
  &__textarea {
    resize: none;
    margin-top: 10px;
    border: none;
    outline: none;
    padding: 10px;
    background: rgba(8,0, 255, 0.04);
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
}

</style>