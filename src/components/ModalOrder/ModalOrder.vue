<template>
    <div class="modalWrapper" @click="closeModal($event)">
        <div class="modal">
            <FormKit type="form" id="modalForm" @submit="handleSubmit"
                :config="{ classes: { form: 'modalForm', input: 'modalForm__input', wrapper: 'modalForm__wrapper', outer: 'modalForm__outer', inner: 'modalForm__inner', label: 'modalForm__label' } }"
                :submit-attrs="{ inputClass: 'modalForm__button' }" submit-label="Відправити">
                <h2 class="modalForm__title">Отримати консультацію спеціаліста</h2>
                <p class="modalForm__description">Залиште ваші дані та отримайте консультацію у найближчий час</p>
                <FormKit type="text" label="Ваше ім'я" />
                <FormKit type="tel" label="Ваш телефон" />
                <FormKit type="text" placeholder="UA-2022-07-26-000262-a" label="ID тендеру" />
                <FormKit type="textarea" rows="2" label="Є запитання?" />
            </FormKit>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        handleSubmit() {
            this.$emit('openModal');
            this.$formkit.reset("modalForm");
        },
        closeModal($event) {
            const clickOnModal = $event.target.classList.contains('modal'); 
            if (clickOnModal) {
                this.$emit('openModal');
            }
        }
    }
}
</script>

<style lang="scss">
.modalWrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    z-index: 2;
}

.modal {
    position: absolute;
    width: 100%;
    display: flex;
    top: 50%;
    left: 50%;
    justify-content: center;
    transform: translate(-50%, -50%);
}

.modalForm {
    width: 350px;
    padding: 20px;
    background: #fff;
    &__title {
        margin: 0;
        text-align: center;
        font-size: 20px;
    }
    &__description {
        margin: 40px auto;
        text-align: center;
    }
    &__outer {
        margin: 0 auto;
        max-width: 300px;
        &:not(:last-child) {
            margin-bottom: 30px;
        }
    }
    &__inner {
        margin-top: 5px;
    }
    &__input {
        width: 100%;
        max-width: 300px;
        padding: 5px 5px; 
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        outline: none;
        resize: none;
    }
    &__label {
        font-weight: 600;
    }
    &__button {
        display: block;
        width: 100%;
        max-width: 300px;
        padding: 15px 20px;
        margin: 0 auto;
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

@media (min-width: 767px) {
    .modalForm {
        width: 500px;
        padding: 40px 50px;
    }
}

</style>