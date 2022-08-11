<template>
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
                :validation="[['required'], ['matches', /^\d{3} \d{3} \d{2} \d{2}$/]]"
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
            data: {},
        }
    },
    methods: {
        handleSubmit() {
            console.log(this.data);
            this.$formkit.reset("myForm");
        }
    },
}
</script>

<style>

</style>