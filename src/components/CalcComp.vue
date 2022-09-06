<template>
    <FormKit type="form"
    submit-label="Відправити заявку"
    :classes="{form: '$reset calcForm'}"
    :submit-attrs="{
        inputClass: progressStarted === 2 ? 'form__button' : 'hidden',
    }"
    >
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
            <button class="result__button" @click="calcPrice">Розрахувати</button>
            <div v-show="progressStarted === 1" class="progress" ref="progressBar">{{progress}}%</div>
            <p v-if="progressStarted === 2" class="result__text">Вартість послуги: <span>{{price}} грн</span></p>
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
            progress: 0,
            progressStarted: null,
        }
    },
    methods: {
        calcPrice(e) {
            e.preventDefault();
            this.startProgress();
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
        },
        startProgress() {
            this.progressStarted = 1;
            let count = 0;
            const progressBar = this.$refs.progressBar;
            progressBar.style.padding = '0 5px';
            let progressCount = setInterval(() => {
                if (count < 100) {
                    count += 1;
                    this.progress = count;
                    progressBar.style.width = `${count}%`;
                } else {
                    this.progressStarted = 2;
                    clearInterval(progressCount);
                }
            },50)
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

.result {
    &__button {
        display: block;
        background: transparent;
        border: 2px groove rgb(192, 192, 192);
        padding: 5px 10px;
        margin: 0 auto;
    }
    &__text {
        text-align: center;
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
</style>