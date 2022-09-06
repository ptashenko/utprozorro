<template>
    <FormKit type="form"
    submit-label="Відправити заявку"
    id="calcPriceForm"
    :classes="{form: '$reset calcForm'}"
    incomplete-message="Ви не заповнили обов'язкові поля!"
    @submit="submitOrder"
    :submit-attrs="{
        inputClass: progressStarted === 2 ? 'form__button' : 'hidden',
    }"
    >
        <FormKit
            type="radio"
            :options="['Підготовка тендерної пропозиція', 'Оскарження в АМКУ', 'Вимога замовнику']"
            help="Яка послуга Вас цікавить?"
            name="service"
            validation="required"
            :validation-messages="{
            required: 'Оберіть послугу, яка Вас цікавить',
            }"
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
            placeholder="UA-2020-05-27-001286-b"
            label="ID тендеру"
            name="tender_ID"
            v-model="tenderID"
            :classes="{
                outer: '$reset idInput',
                input: '$reset idInput__input',
                label: '$reset idInput__label',
                inner: '$reset idInput__inner'
            }"
            />
        <FormKit
            type="number"
            placeholder="Сума оголошенного тендеру"
            step="1"
            name="tenderAmount"
            label="Вартість тендеру"
            v-model="tenderAmount"
            :classes="{
                outer: '$reset amountInput',
                input: '$reset amountInput__input',
                label: '$reset amountInput__label',
                inner: '$reset amountInput__inner'
            }"
            />
        <div class="result">
            <button v-if="!progressStarted || progressStarted === 2" class="result__button" @click="calcPrice" @keyup.enter="calcPrice" ref="calcButton">{{progressStarted === 2 ? 'Розрахувати ще раз' : 'Розрахувати вартість'}}</button>
            <p v-show="progressStarted === 1" class="result__analyze" ref="analyzeText">Аналізуємо дані...</p>
            <div v-show="progressStarted === 1" class="progress" ref="progressBar">{{progress}}%</div>
            <p v-if="progressStarted === 2" class="result__text">Вартість послуги: <span class="result__text--blue">{{price}} грн</span></p>
        </div>
    </FormKit>
</template>

<script>
export default {
    data(){
        return {
            serviceName: '',
            tenderID: '',
            tenderAmount: '',
            price: null,
            progress: 0,
            progressStarted: null,
            complete: false,
        }
    },
    methods: {
        submitOrder(data) {
            data.service ? this.complete = true : this.complete = false;
        },
        calcPrice(e) {
            e.preventDefault();
            this.$formkit.submit('calcPriceForm');
            if (this.complete) {
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
            }, 1000)
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
    transition: box-shadow .25s linear;
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
    &__label {
        font-weight: 600;
    }
    &__inner {
        margin-top: 5px;
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
        &--blue {
            color: #1550e7;
            font-weight: 600;
        }
    }
    &__analyze {
        color: #1550e7;
        font-weight: 600;
        transition: opacity .5s linear;
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
</style>