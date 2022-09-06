<template>
    <main class="hero">
        <div class="hero__mobile">
            <h1 class="hero__title">
                {{ heroText.title}}
                <span class="hero__title--bold">{{ heroText.titleMid }}</span>
                <span class="hero__title--underline">{{ heroText.titleEnd }}</span>
            </h1>
            <ul class="hero__benefits">
                <li class="hero__benefitsItem" v-for="(item, i) of heroText.benefits" :key="i">{{item}}</li>
            </ul>
            <p class="hero__subtitle">{{ heroText.subtitle}}</p>
            <a class="hero__button" @click="modalToggle()">{{ heroText.button}}</a>
            <span class="hero__image--wrapper"><img class="hero__image" src="../assets/hummer-main.jpg"
                    alt="" /></span>
        </div>
        <div class="hero__desktop">
            <h1 class="hero__title">
                {{ heroText.title}}<span class="hero__title--bold">{{ heroText.titleMid}}</span>
                <span class="hero__title--underline">{{ heroText.titleEnd}}</span>
            </h1>
            <ul class="hero__benefits">
                <li class="hero__benefitsItem" v-for="(item,i) of heroText.benefits" :key="i">{{item}}</li>
            </ul>
            <p class="hero__subtitle">{{ heroText.susbitle}}</p>
            <a class="hero__button" @click="modalToggle()">{{ heroText.button}}</a>
            <span class="hero__image--wrapper">
                <img class="hero__image" src="../assets/hummer-main.jpg" alt="" />
            </span>
        </div>
    </main>
    <section class="about">
        <div class="about__container">
            <h2 class="about__title">{{aboutText[0][0].title}}</h2>
            <ul class="about__list">
                <li class="about__item" v-for="(item, i) of aboutText[1]" :key="i">
                    <img class="about__icon" :src="require(`../assets/svg/${item.icon}_logo.svg`)" alt="">
                    <p class="about__text">{{item.text}}</p>
                </li>
            </ul>
            <ul class="about__wrapper">
                <li class="about__bottomItem about__bottomItem--wrapper">
                    <img class="about__image" src="../assets/hummer-sub.jpg" alt="">
                </li>
                <div>
                    <li class="about__bottomItem" v-for="(item, i) of aboutText[2]" :key="i">
                        <p class="about__bottomText">{{item.text}}</p>
                    </li>
                </div>
            </ul>
        </div>
    </section>
    <section class="services" id="services">
        <h2 class="services__title">{{serviceText.title}}</h2>
        <ul class="services__list">
            <CalcComp />
        </ul>
    </section>
    <section class="experience" id="about">
        <div class="experience__container">
            <h2 class="experience__title">{{ expText.title}}</h2>
            <div class="experience__top">
                <div class="experience__textWrapper">
                    <p class="experience__text"><span class="experience__text--title">{{
                    expText.description[0]}}</span>{{ expText.description[1]}}
                    </p>
                    <p class="experience__text--fontsize">{{ expText.description[2]}}</p>
                </div>
                <ul class="experience__topList">
                    <li class="experience__topItem" v-for="(item,i) of expText.experience" :key="i">
                        <h2 class="experience__number"><span
                                class="experience__number--symbol">{{item.symbol}}</span>{{item.count}}
                        </h2>
                        <p class="experience__description">{{item.description}}</p>
                    </li>
                </ul>
            </div>
            <div class="experience__bottom">
                <ul class="experience__bottomList">
                    <li class="experience__bottomItem">
                        <span class="experience__image--wrapper">
                            <img class="experience__image" src="../assets/creator.jpg" alt="">
                        </span>
                        <div class="experience__textWrapper">
                            <h2 class="experience__name">{{ expText.founder.name}}</h2>
                            <p class="experience__position">{{ expText.founder.position}}</p>
                            <ul class="experience__achivements">
                                <li class="experience__achivement" v-for="(item, i) of expText.founder.exp" :key="i">
                                    - {{item}}
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="experience__bottomItem experience__bottomItem--reverse">
                        <span class="experience__image--wrapperBottom">
                            <img class="experience__image" src="../assets/certificate.jpg" alt="">
                        </span>
                        <div class="experience__textWrapper">
                            <h2 class="experience__name">{{ expText.education.title}}</h2>
                            <p class="experience__achivement">{{ expText.education.name}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <section class="benefits" id="benefits">
        <h2 class="benefits__title">{{ benefitsText[0][0].title}}</h2>
        <ul class="benefits__list">
            <li class="benefits__item" v-for="(item, i) of benefitsText[1]" :key="i">
                <img class="benefits__icon" :src="require(`../assets/svg/${item.logo}_icon.svg`)" alt="">
                <h3 class="benefits__name">{{item.name}}</h3>
                <p class="benefits__text">{{item.text}}</p>
            </li>
        </ul>
    </section>
    <ToTopButton />
    <ModalComp v-if="showModal" @close="showModal = false" />
</template>

<script>
import hero from '../texts/hero';
import about from '../texts/aboutUs';
import service from "../texts/services";
import exp from '../texts/exp';
import benefits from '../texts/benefits';
import CalcComp from "@/components/CalcComp.vue";
import ToTopButton from '@/components/ToTopButton/ToTopButton.vue';
import ModalComp from './Modal/ModalComp.vue';

export default {
    components: { ToTopButton, CalcComp, ModalComp },
    data() {
        return {
            showModal: false,
            calcPriceOpen: false,
        }
    },
    computed: {
        heroText() {
            return hero;
        },
        aboutText() {
            return about;
        },
        serviceText() {
            return service;
        },
        expText() {
            return exp;
        },
        benefitsText() {
            return benefits;
        },
    },
    methods: {
        modalToggle() {
            this.showModal = !this.showModal;
        }
    },
    mounted() {
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
    background: rgba(0, 0, 0, 0.8);
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
    position: relative;
    width: 350px;
    padding: 20px;
    background: #fff;
    box-shadow: 0px 1px 3px rgb(0, 0, 0 / 12%), 0px 1px 1px rgb(0, 0, 0 / 14%),  0px 2px 1px rgb(0, 0, 0 / 20%);
    border-radius: 5px;

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
    &__send {
        display: block;
        width: 100%;
        max-width: 300px;
        padding: 15px 20px;
        margin: 0 auto;
        background: transparent;
        color: green;
        border: none;
        pointer-events: none;
        font-weight: 900;
    }
    &__closeBtn {
        width: 15px;
        height: 15px;
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
    }
}

.hero {
    max-width: 320px;
    padding: 30px 0 140px;
    margin: 0 auto;

    &__title {
        font-size: 28px;
        font-weight: 300;
        line-height: 1.3;

        &--bold {
            font-size: 25px;
            font-weight: 800;
        }

        &--underline {
            display: inline-block;
            font-size: 22px;

            &::after {
                content: '';
                display: flex;
                width: 100%;
                background: #1550e7;
                height: 5px;
            }
        }
    }

    &__benefitsItem {
        font-size: 13px;
        line-height: 1.3;
    }

    &__subtitle {
        font-size: 13px;
        font-weight: 500;
    }

    &__button {
        display: block;
        width: 270px;
        text-align: center;
        margin: 30px auto;
        text-decoration: none;
        padding: 20px 40px;
        border: 1px solid #000;
        color: #000;
        font-size: 14px;
        line-height: 1;
        transition: all 250ms linear;
        cursor: pointer;

        &:hover {
            background: #000;
            color: #fff;
        }
    }

    &__image {
        display: block;
        margin: 0 auto;
        max-width: 100%;

        &--wrapper {
            display: block;
            max-width: 522px;
            margin: 0 auto;
            position: relative;

            &::before {
                content: '';
                position: absolute;
                bottom: -5px;
                right: -5px;
                width: 100px;
                height: 100px;
                z-index: -1;
                background: #1550e7;
            }
        }
    }
}

.about {
    background: #fafafa;
    padding: 30px 0;

    &__container {
        max-width: 320px;
        margin: 0 auto;

        @media (min-width: 767px) {
            max-width: 640px;
        }

        @media (min-width: 1200px) {
            max-width: 1200px;
        }
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
    }

    &__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__bottomItem {
        position: relative;
        max-width: 440px;

        &--wrapper {
            margin: 20px 0;

            &::before {
                content: '';
                position: absolute;
                bottom: -5px;
                left: -5px;
                width: 100px;
                height: 100px;
                z-index: 0;
                background: #1550e7;
            }
        }
    }

    &__image {
        position: relative;
        display: block;
        width: 100%;
        max-width: 440px;
    }
}

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

.experience {
    background: #fafafa;
    padding: 30px 0;

    &__container {
        max-width: 320px;
        margin: 0 auto;

        @media (min-width: 767px) {
            max-width: 640px;
        }

        @media (min-width: 1200px) {
            max-width: 1200px;
        }
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

    &__text {
        line-height: 1.3;

        &--title {
            font-weight: 600;
        }

        &--fontsize {
            font-size: 14px;
        }
    }

    &__topList {
        display: flex;
        margin: 25px 0;
        flex-direction: column;

        & p,
        h2 {
            margin: 0;
        }
    }

    &__topItem {
        &:not(:last-child) {
            margin-bottom: 20px;
        }
    }

    &__number {
        font-size: 32px;
        font-weight: 900;

        &--symbol {
            color: #1550e7;
        }
    }

    &__image {
        position: relative;
        display: block;
        width: 100%;
        max-width: 320px;
        margin: 0 auto;
        z-index: 1;

        &--wrapper {
            display: block;
            margin: 0 auto;
            position: relative;
            max-width: 320px;

            &::before {
                content: '';
                position: absolute;
                top: -5px;
                left: -5px;
                width: 100px;
                height: 100px;
                z-index: 0;
                background: #1550e7;
            }
        }

        &--wrapperBottom {
            display: block;
            margin: 0 auto;
            position: relative;
            max-width: 320px;

            &::before {
                content: '';
                position: absolute;
                bottom: -5px;
                right: -5px;
                width: 100px;
                height: 100px;
                z-index: 0;
                background: #1550e7;
            }
        }
    }

    &__bottomItem {
        &:not(:last-child) {
            margin-bottom: 20px;
        }
    }

    &__name {
        margin-bottom: 0;
        font-size: 18px;
        font-weight: 600;
    }

    &__position {
        margin-top: 0;
        font-size: 14px;
        opacity: 0.9;
        font-weight: 300;
    }

    &__achivement {
        font-size: 15px;
        line-height: 1.3;
        opacity: 0.9;
    }
}

.benefits {
    max-width: 320px;
    padding: 30px 0;
    margin: 0 auto;

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
        margin-top: 20px;
    }

    &__item {
        display: flex;
        flex-direction: column;
        align-items: center;

        &:not(:last-child) {
            margin-bottom: 30px;
        }
    }

    &__icon {
        max-width: 80px;
    }

    &__text {
        margin: 0;
        text-align: center;
    }
}

@media (max-width: 1199px) {
    .hero__desktop {
        display: none;
    }
}

@media (min-width: 767px) {
    .hero {
        max-width: 640px;

        &__title {
            font-size: 56px;

            &--bold {
                font-size: 50px;
            }

            &--underline {
                font-size: 36px;
            }
        }

        &__benefitsItem {
            font-size: 18px;
        }

        &__subtitle {
            font-size: 16px;
        }

        &__button {
            font-size: 18px;
            width: 320px;
        }
    }
    .about {
        &__title {
            margin: 0 0 0 60px;
        }

        &__list {
            display: flex;
            width: 100%;
            flex-wrap: wrap;
        }

        &__item {
            width: calc((100% - 40px)/2);
            margin: 10px;
        }

        &__text {
            font-size: 18px;
        }
    }
    .services {
        &__title {
            margin: 0 0 0 60px;
        }
    }
    .experience {
        &__title {
            margin: 0 0 0 60px;
        }

        &__top {
            display: flex;
            flex-direction: row-reverse;
            margin-top: 20px;
        }

        &__textWrapper {
            width: 320px;
        }

        &__text {
            font-size: 18px;

            &--fontsize {
                font-size: 16px;
            }
        }

        &__bottomItem {
            max-width: 440px;
            margin: 0 auto;
        }

        &__image {
            max-width: 440px;

            &--wrapper {
                max-width: 440px;
            }

            &--wrapperBottom {
                max-width: 440px;
            }
        }

        &__name {
            font-size: 24px;
        }

        &__position {
            font-size: 14px;
        }

        &__achivement {
            font-size: 18px;
        }
    }

    .benefits {
        max-width: 640px;

        &__title {
            margin: 0 0 0 60px;
        }

        &__item {
            margin: 0 auto;
            max-width: 400px;
        }
    }
}

@media (min-width: 1200px) {
    .hero {
        max-width: 1200px;

        &__mobile {
            display: none;
        }

        &__desktop {
            position: relative;
        }

        &__title {
            font-size: 64px;

            &--bold {
                display: block;
                font-size: 64px;
                text-shadow: 1px 1px 10px #fff;
            }

            &--underline {
                display: inline-block;
                font-size: 42px;
            }
        }

        &__image {
            &--wrapper {
                position: absolute;
                top: -20px;
                right: 0;
                z-index: -1;
            }
        }

        &__button {
            margin: 0;
        }
    }
    .modalForm {
        width: 500px;
        padding: 40px 50px;
    }
    .about {
        &__item {
            width: calc((100% - 60px)/3);
            margin: 10px;
        }
        &__wrapper {
            margin-top: 20px;
            flex-direction: row;
            align-items: flex-start;
        }
        &__bottomItem {
            &--wrapper {
                margin: 0 20px 0 0;
            }
        }
        &__bottomText {
            font-size: 18px;
            margin: 0 0 20px 0;
        }
    }
    .services {
        &__list {
            flex-direction: row;
        }
    }
    .experience {
        &__top {
            justify-content: space-around;
        }
        &__bottomList {
            display: flex;
            flex-direction: column;
        }
        &__bottomItem {
            display: flex;
            justify-content: space-around;
            width: 100%;
            max-width: 100%;

            &--reverse {
                flex-direction: row-reverse;
            }

            &:not(:last-child) {
                margin-bottom: 40px;
            }
        }
        &__image {
            &--wrapper,
            &--wrapperBottom {
                margin: 0;
            }
        }

        &__textWrapper {
            width: 400px;
        }
    }
    .benefits {
        max-width: 1200px;
        &__list {
            display: flex;
            align-items: baseline;
            margin-top: 50px;
        }

        &__item {
            &:not(:last-child) {
                margin-bottom: 0;
                margin-right: 20px;
            }
        }

        &__text {
            flex-grow: 1;
        }
    }
}
</style>