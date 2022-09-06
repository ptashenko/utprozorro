<template>
    <FormKit type="form"
    submit-label="Відправити заявку">
        <FormKit
            type="radio"
            :options="['Підготовка тендерної пропозиція', 'Оскарження в АМКУ', 'Вимога замовнику']"
            help="Яка послуга Вас цікавить?"
            name="service"
            v-model="serviceName"
            />
        <FormKit
            type="text"
            placeholder="ID тендеру"
            name="tender_ID"
            v-model="tenderID"
            />
        <FormKit
            type="number"
            placeholder="Сума оголошенного тендеру"
            step="1"
            name="tenderAmount"
            v-model="tenderAmount"
            />
        <div class="result">
            <button @click="calcPrice">Розрахувати</button>
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

<style lang="scss" scoped>
</style>