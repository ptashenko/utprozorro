<template>
    <section class="about">
        <div class="about__container">
            <h2 class="about__title">{{text.title}}</h2>
            <ul class="about__list">
                <li class="about__item" v-for="(item, i) of text.reasons" :key="i">
                    <img class="about__icon" :src="require(`../../assets/svg/${item.icon}_logo.svg`)" alt="">
                    <p class="about__text">{{item.text}}</p>
                </li>
            </ul>
            <ul class="about__wrapper">
                <li class="about__bottomItem about__bottomItem--wrapper">
                    <img class="about__image" src="../../assets/images/hummer-sub.jpg" alt="">
                </li>
                <div>
                    <li class="about__bottomItem" v-html="text.text">
                    </li>
                </div>
            </ul>
        </div>
    </section>
</template>

<script>
import { inject } from '@vue/runtime-core'
export default {
    setup() {
        const text = inject('store').texts.about;
        return { text }
    }
}
</script>

<style lang="scss">
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

@media (min-width: 767px) {
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
}

@media (min-width: 1200px) {
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
}
</style>