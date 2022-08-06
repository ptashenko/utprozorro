<template>
    <footer class="footer">
        <div class="footer__container">
            <h2 class="footer__title">Контакти</h2>
            <div class="footer__wrapper">
                <ul class="footer__contacts">
                    <li class="footer__item">
                        <img class="footer__icon" src="../assets/svg/phone.svg" alt="">
                        <p class="footer__contact">38(050) 574-23-62</p>
                    </li>
                    <li class="footer__item">
                        <img class="footer__icon" src="../assets/svg/email.svg" alt="">
                        <p class="footer__contact">client.utprozorro@gmail.com</p>
                    </li>
                    <li class="footer__item">
                        <img class="footer__icon" src="../assets/svg/telegram.svg" alt="">
                        <p class="footer__contact">@aptashenko</p>
                    </li>
                    <li class="footer__item">
                        <img class="footer__icon" src="../assets/svg/schedule.svg" alt="">
                        <p class="footer__contact">Графік роботи: Пн-Пт, з 9:00 до 19:00</p>
                    </li>
                </ul>
                <FormKit type="form" v-model="data" id="myForm" @submit="handleSubmit" submit-label="Відправити">
                    <h3 class="form__title">Залиште своє запитання</h3>
                    <div class="form__wrapper">
                        <FormKit type="text" name="name" validation="?length:2" :validation-messages="{
                            length: 'Введіть справжнє ім`я'
                        }" placeholder="Введіть ваше ім'я" />
                        <FormKit type="text" name="email" validation="email" :validation-messages="{
                            email: 'Ввеліть корректний емейл'
                        }" placeholder="Введіть ваш email" />
                        <FormKit type="tel" name="phone"
                            :validation="[['required'], ['matches', /^[\(]\d{3}[\)] \d{3}-\d{2}-\d{2}$/]]"
                            :validation-messages="{
    matches: 'Введіть номер телефону у форматі (050) 574-23-62', required: 'Номер телефона обязателен!',}"
                            placeholder="(050) 000-00-00" />
                        <FormKit type="textarea" text-area name="comment"
                            placeholder="Залиште коментар або запитання" />
                    </div>
                </FormKit>
            </div>
        </div>
    </footer>
</template>

<script>

export default {
    data() {
        return {
            data: {},
        }
    },
    methods: {
        handleSubmit() {
            console.log(this.data);
            this.$formkit.reset('myForm')
        }
    }
}
</script>

<style lang="scss">



.footer {
    background: #fafafa;
    padding: 60px 0;
        &__container {
            max-width: 320px;
            margin: 0 auto;
    
            @media (min-width: 767px) {
                max-width: 640px;
            }
    
            @media (min-width: 1200px) {
                max-width: 1200px;
            }
        }
        &__title {
            position: relative;
            margin: 0 auto;
            font-size: 16px;
            line-height: 1.3;
            color: #111111;
            width: 255px;

            &::before {
                content: '';
                position: absolute;
                top: 50%;
                left: -60px;
                width: 40px;
                height: 5px;
                background: blue;
                transform: translateY(-50%);
            }
        }
        &__contacts {
            margin-top: 20px;
        }
        &__item {
            display: flex;
            align-items: center;
            &:not(:last-child) {
                margin-bottom: 20px;
            }
        }
        &__icon {
            margin-right: 10px;
        }
        &__contact {
            margin: 0;
            font-size: 18px;
        }
}
.form {
    margin-top: 30px;
    background: #fff;
    padding: 40px 10px;
    &__title {
        font-size: 16px;
        margin-top: 0;
        margin-bottom: 40px;
        text-align: center;
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
        border-bottom: 1px solid #000;
    }
}

.formkit-wrapper > [type=submit] {
    border-bottom: none;
    display: block;
    width: 270px;
    text-align: center;
    margin: 20px auto;
    text-decoration: none;
    padding: 20px 40px;
    border: 1px solid #000;
    color: #000;
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    background: transparent;
}

.formkit-inner  [text-area] {
    resize: none;
}

.formkit-message {
    font-size: 11px;
    margin: 5px 0;
    color: red;
}

@media (min-width: 767px) {
    .footer {
        &__title {
            margin: 0 0 0 60px;
        }
        &__contacts {
            width: 375px;
            margin: 20px auto 0;
        }
    }
    .form {
        padding: 40px 40px;
    }
}

@media (min-width: 1200px) {
    .footer {
        &__wrapper {
            display: flex;
            margin-top: 30px;
        }
        &__contacts {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 0;
        }
        &__contact {
            font-size: 22px;
        }
    }
    .form {
        margin: 0;
        flex-grow:  1;
    }
}

</style>