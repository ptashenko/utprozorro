<template>
    <FormKit type="form" @submit="sendOrder" >
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
            @input="show"
            />
        <FormKit
            type="number"
            placeholder="Сума оголошенного тендеру"
            step="1"
            name="tenderAmount"
            v-model="tenderAmount"
            @input="show"
            />
        <div class="result">
            <button>Розрахувати</button>
            <p>Вартість послуги: <span>{{price}}</span></p>
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
        sendOrder() {
            alert('Ваші дані відправлені');
        },
    },
    mounted() {
    }
}
</script>

<style lang="scss">
</style>