<template>
    <section class="services" id="services">
        <h2 class="services__title">{{text.title}}</h2>
        <ul class="services__list">
            <ButtonComp :services="text.buttons" />
        </ul>
        <a class="services__button" @click="openModalWindow">{{text.buttonOrder}}</a>
    </section>
</template>

<script>
import ButtonComp from "../ButtonComp.vue";
import service from "./services";
export default {
    components: { ButtonComp },
    computed: {
        text() {
            return service;
        }
    },
    methods: {
        openModalWindow() {
            this.$emit('openModal');
        }
    }
}
</script>

<style lang="scss">



.services {
    max-width: 320px;
    padding: 30px 0;
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
        margin: 30px auto 0;
        text-decoration: none;
        padding: 20px 40px;
        border: 1px solid #000;
        color: #000;
        font-size: 16px;
        line-height: 1;
        transition: all 250ms linear;
        &:hover {
            background: #000;
            color: #fff;
        }
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