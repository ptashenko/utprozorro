<template>
    <div v-if="modal" class="modalWrapper" @click="closeModal">
        <div class="modal">
            <FormKit type="form" id="form" @submit="sendOrder" action="mail.php" method="POST" :config="{ classes: { form: 'modalForm', input: 'modalForm__input', wrapper: 'modalForm__wrapper', outer: 'modalForm__outer', inner: 'modalForm__inner', label: 'modalForm__label' } }"
                :submit-attrs="{ inputClass: 'modalForm__button' }" submit-label="Відправити"
                incomplete-message="Заповніть Ваш номер телефону">
                <h2 class="modalForm__title">Отримати консультацію спеціаліста</h2>
                <p class="modalForm__description">Залиште ваші дані та отримайте консультацію у найближчий час</p>
                <img class="modalForm__closeBtn" @click="this.$emit('closeModal')"
                    src="../../assets/svg/cross-black.svg" alt="">
                <FormKit type="text" name="name" label="Ваше ім'я" />
                <FormKit type="tel" name="phone" label="Ваш телефон" validation="required|number|length:10"
                    :validation-messages="{required: 'Необхідно заповнити', length: 'Поле повинно містити 10 цифр'}" />
                <FormKit type="text" name="tender" placeholder="UA-2022-07-26-000262-a" label="ID тендеру" />
                <FormKit type="textarea" name="comment" rows="2" label="Є запитання?" />
            </FormKit>
        </div>
    </div>
</template>

<script>
export default {
    props: ['modal'],
    data() {
        return {
            value: {},
        }
    },
    methods: {
        sendOrder(orderData) {
            const submitBtn = document.querySelector('.modalForm__button');
            submitBtn.classList.remove('modalForm__button');
            submitBtn.classList.add('modalForm__send');
            submitBtn.textContent = 'Дякуємо, відправлено!'
            this.value = orderData;
            setTimeout(() => {
                this.$emit('closeModal');
            }, 1000)
        },
        closeModal($event) {
            if ($event.target.classList.contains('modal')) {
                this.$emit('closeModal');
            }
        },
    },
    mounted() {
    }
}
</script>

<style>

</style>