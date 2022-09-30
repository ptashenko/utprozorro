<template>
    <section class="services">
        <h2 class="services__title">{{text.title}}</h2>
        <ul class="services__list">
            <CalcComp />
        </ul>
    </section>
</template>

<script>
import CalcComp from "@/components/CalcComp.vue";
import { inject } from '@vue/runtime-core';
export default {
    components: { CalcComp },
    setup() {
        const text = inject('store').texts.services;
        return {text}
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
            background: #1550e7;
            transform: translateY(-50%);
        }
    }

    &__list {
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        max-width: 320px;
        margin: 20px auto 0;
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
        font-size: 15px;
        line-height: 1;
        cursor: pointer;
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