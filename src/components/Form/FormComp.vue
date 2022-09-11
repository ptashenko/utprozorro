<template>
    <FormKit type="form" id="form" @submit="handleSubmit" submit-label="Відправити" :classes="{
    form: 'form',
    }"
    :submit-attrs="{inputClass:'form__button'}" 
    :config="{
    classes: {
        input: 'form__input',
                outer: 'form__label',
        }
    }">
        <h3 class="form__title">Залиште своє запитання</h3>
        <div class="form__wrapper">
            <FormKit type="text" name="name" validation="?length:2" :validation-messages="{
    length: 'Введіть справжнє ім`я'
            }" placeholder="Введіть ваше ім'я" />
            <FormKit type="text" name="email" validation="email" :validation-messages="{
                email: 'Ввеліть корректний емейл'
            }" placeholder="Введіть ваш email" />
            <FormKit type="tel" name="phone" :validation="[['required'], ['matches', /^\d{3} \d{3} \d{2} \d{2}$/]]"
                :validation-messages="{
                    matches: 'Введіть номер телефону у форматі 050 574 23 62', required: 'Номер телефона обязателен!',
                }" placeholder="050 000 00 00" />
            <FormKit type="textarea" text-area name="comment" placeholder="Залиште коментар або запитання" />
        </div>
    </FormKit>
</template>

<script>
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
            fetch(`https://api.telegram.org/bot5606182556:AAFLcO-Oh1wjXJKuR3clpNmKycRSSGQ2biI/sendMessage?chat_id=-566337237&text=${message}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
            })
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
    &__button {
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
            transition: all 250ms linear;
            cursor: pointer;
        
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