<template>
    <section class="benefits">
        <h2 class="benefits__title">Наші переваги</h2>
        <ul class="benefits__list">
            <li class="benefits__item">
                <img class="benefits__icon" src="../assets/svg/price_icon.svg" alt="">
                <h3 class="benefits__name">Відсутність передплат</h3>
                <p class="benefits__text">Ви оплачуєте тільки за фактично надані послуги.</p>
            </li>
            <li class="benefits__item">
                <img class="benefits__icon" src="../assets/svg/folder_icon.svg" alt="">
                <h3 class="benefits__name">Електронні документи</h3>
                <p class="benefits__text">Більше Вам не потрібно роздруковувати гору паперів, проставляти печатки,
                    підписувати та сканувати документи. Ми підготуємо Вашу тендерну пропозицію в електронному вигляді та
                    збережемо Ваш час.</p>
            </li>
            <li class="benefits__item">
                <img class="benefits__icon" src="../assets/svg/bonus_icon.svg" alt="">
                <h3 class="benefits__name">Гнучкі умови співпраці</h3>
                <p class="benefits__text">Для постійних та корпоративних клієнтів діють гнучкі умови співпраці та
                    додаткові бонуси</p>
            </li>
        </ul>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">


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
            background: blue;
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
@media (min-width: 768px) {
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