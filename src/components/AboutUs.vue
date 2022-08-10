<template>
    <section class="about">
        <div class="about__container">
            <h2 class="about__title">В яких випадках ми можемо бути корисними для Вас?</h2>
            <ul class="about__list">
                <li class="about__item">
                    <img class="about__icon" src="../assets/svg/deny_logo.svg" alt="">
                    <p class="about__text">Замовники часто відхиляють Ваші пропозиції</p>
                </li>
                <li class="about__item">
                    <img class="about__icon" src="../assets/svg/money_lose_logo.svg" alt="">
                    <p class="about__text">Ваша пропозиція програє по ціні</p>
                </li>
                <li class="about__item">
                    <img class="about__icon" src="../assets/svg/idea_logo.svg" alt="">
                    <p class="about__text">Ви тільки плануєте почати роботу в Prozorro</p>
                </li>
                <li class="about__item">
                    <img class="about__icon" src="../assets/svg/time_logo.svg" alt="">
                    <p class="about__text">Не вистачає часу для оформлення документів на тендери</p>
                </li>
                <li class="about__item">
                    <img class="about__icon" src="../assets/svg/docs_logo.svg" alt="">
                    <p class="about__text">Необхідно підготувати "ідеальний" пакет документів</p>
                </li>
                <li class="about__item">
                    <img class="about__icon" src="../assets/svg/increase_logo.svg" alt="">
                    <p class="about__text">Необхідно провести процедуру закупівлі без помилок, згідно законодавства</p>
                </li>
            </ul>
            <ul class="about__wrapper">
                <li class="about__bottomItem about__bottomItem--wrapper">
                    <img class="about__image" src="../assets/hummer-sub.jpg" alt="">
                </li>
                <li class="about__bottomItem">
                    <p class="about__bottomText">Організований тендерний відділ з чітким регламентом роботи,
                        налаштованою
                        взаємодією з
                        іншими відділами компанії, співробітниками, здатними готувати переможні тендерні пропозиції,
                        проводити
                        процедури закупівель без порушень та здатними взаємодіяти з АМКУ.
                    </p>
                    <p class="about__bottomText">Завдяки досвіду в організації
                        успішної
                        тендерної агенції, здатної обробляти близько 150 тендерів різної складності за місяць, маємо
                        можливість
                        запропонувати Вам послугу з організації кваліфікованого тендерного відділу Вашої компанії як з
                        "нуля"
                        так і підвищення ефективності вже існуючого відділу.
                    </p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {

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
            background: blue;
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
                background: blue;
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
            justify-content: space-between;
            align-items: flex-start;
            width: 75%;
        }
        &__bottomItem {
            &--wrapper {
                margin: 0;
            }
        }
        &__bottomText {
            font-size: 18px;
            margin: 0 0 20px 0;
        }
    }
}
</style>