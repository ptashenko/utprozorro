<template>
    <FormKit type="form"
    submit-label="Відправити заявку"
    :classes="{form: '$reset calcForm'}">
        <FormKit
            type="radio"
            :options="['Підготовка тендерної пропозиція', 'Оскарження в АМКУ', 'Вимога замовнику']"
            help="Яка послуга Вас цікавить?"
            name="service"
            v-model="serviceName"
            :classes="{
               fieldset: '$reset servicesForm',
               help: '$reset servicesForm__title',
               options: '$reset servicesForm__list',
               option: '$reset servicesForm__item',
               wrapper: '$reset servicesForm__body'
            }"
            />
        <FormKit
            type="text"
            placeholder="ID тендеру"
            name="tender_ID"
            v-model="tenderID"
            :classes="{
                outer: '$reset idInput',
                input: '$reset idInput__input'
            }"
            />
        <FormKit
            type="number"
            placeholder="Сума оголошенного тендеру"
            step="1"
            name="tenderAmount"
            v-model="tenderAmount"
            :classes="{
                outer: '$reset amountInput',
                input: '$reset amountInput__input'
            }"
            />
        <div class="result">
            <button class="calcBtn" @click="calcPrice">Розрахувати</button>
            <p v-if="price">Вартість послуги: <span>{{price}} грн</span></p>
        </div>
    </FormKit>
</template>

<script>
export default {
    data(){
        return {
            serviceName: '',
            tenderID: '',
            tenderAmount: 0,
            price: null,
        }
    },
    methods: {
        calcPrice(e) {
            e.preventDefault();
            switch (this.serviceName) {
                case 'Підготовка тендерної пропозиція':
                    if (this.tenderAmount <= 100000) {
                        this.price = 1200;
                    } else if (this.tenderAmount > 100000 && this.tenderAmount <= 200000) {
                        this.price = 2400;
                    } else if (this.tenderAmount > 200000 && this.tenderAmount <= 3000000) {
                        this.price = 2900;
                    } else if (this.tenderAmount > 3000000) {
                        this.price = 6000;
                    }
                    break
                case 'Оскарження в АМКУ': this.price = 2400;
                    break
                case 'Вимога замовнику': this.price = 1000;
                    break
            }
        }
    },
    mounted() {
    }
}
</script>

<style lang="scss">
.servicesForm {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    &__title {
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        margin-bottom: 10px;
    }
    &__list {
        display: flex;
        flex-direction: column;
    }
    &__body {
        display: flex;
        align-item: center;
        & .formkit-inner {
            display: flex;
            margin-right: 5px;
        }
        & .formkit-label {
            font-size: 14px;
        }
    }
}
.idInput, .amountInput {
    margin: 10px auto;
    &__input {
        width: 100%;
        border-radius: 10px;
        border: 2px groove rgb(192, 192, 192);
        padding: 5px 10px;
    }
}

.calcBtn {
    display: block;
    background: transparent;
    border: 2px groove rgb(192, 192, 192);
    padding: 5px 10px;
    margin: 0 auto;
}
</style>