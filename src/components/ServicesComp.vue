<template>
    <section class="services">
        <h2 class="services__title">Наші послуги</h2>
        <ul class="services__list">
            <ButtonComp v-for="button of buttonsNames" :key="button" :service="button" />
        </ul>
        <a class="services__button" href="#">Замовити наші послуги</a>
    </section>
</template>

<script>
import ButtonComp from "./ButtonComp.vue";
export default {
    components: { ButtonComp },
    data() {
        return {
            buttonsNames: ["Послуги для учасників", "Послуги в оскарженні вимог/рішень"],
        }
    }
}
</script>

<style lang="scss">


.services {
    max-width: 320px;
    padding: 60px 0;
    margin: 0 auto;

    @media (min-width: 767px) {
        max-width: 640px;
    }

    @media (min-width: 1200px) {
        max-width: 1200px;
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

    &__list {
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    &__button {
        display: block;
        width: 280px;
        text-align: center;
        margin: 20px auto;
        text-decoration: none;
        padding: 20px 40px;
        border: 1px solid #000;
        color: #000;
        font-size: 16px;
        line-height: 1;
    }
}
@media (min-width: 767px) {
    .services {
        &__title {
            margin: 0 0 0 60px;
        }
    }
}

@media (min-width: 1200px) {
    .services {
        &__list {
            flex-direction: row;
        }
    }
}
</style>