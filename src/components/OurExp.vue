<template>
  <section class="experience">
    <div class="experience__container">
      <h2 class="experience__title">Про нас</h2>
      <div class="experience__top">
        <div class="experience__textWrapper">
          <p class="experience__text"><span class="experience__text--title">Тендерна агенція «Ptashenko»</span>
            розпочала
            свою
            діяльність у сфері публічних закупівель з 2016 року.
          </p>
          <p class="experience__text--fontsize">Наші експерти – провідні фахівці з великим практичним досвідом у сфері
            публічних
            закупівель. Ми знаємо всі тонкощі процесу проведенння торгів та готові використовувати свій досвід для
            досягнення поставлених цілей наших клієнітв.
          </p>
        </div>
        <ul class="experience__topList">
          <li class="experience__topItem">
            <h2 class="experience__number"><span class="experience__number--symbol">></span> 5 років</h2>
            <p class="experience__description">досвіду у сфері публічних закупівель</p>
          </li>
          <li class="experience__topItem">
            <h2 class="experience__number"><span class="experience__number--symbol">></span> 120</h2>
            <p class="experience__description">консультацій щомісячно</p>
          </li>
          <li class="experience__topItem">
            <h2 class="experience__number"><span class="experience__number--symbol">></span> 3,7 тис</h2>
            <p class="experience__description">підготовлених тендерів</p>
          </li>
          <li class="experience__topItem">
            <h2 class="experience__number"><span class="experience__number--symbol">~</span> 95%</h2>
            <p class="experience__description">середній коефіцієнт переможних торгів</p>
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
              <h2 class="experience__name">Пташенко Артем Олегович</h2>
              <p class="experience__position">Засновник, провідний фахівець агенції</p>
              <ul class="experience__achivements">
                <li class="experience__achivement">
                  - досвід у сфері публічних закупівель більше 5 років
                </li>
                <li class="experience__achivement">
                  - підготовлено більше 2 тис. тендерних пропозицій
                </li>
                <li class="experience__achivement">
                  - середній коефіцієнт перемог 95% (інші 5% успішно оскаржено в АМКУ)
                </li>
                <li class="experience__achivement">
                  - виграв більше 90 скарг в АМКУ
                </li>
              </ul>
            </div>
          </li>
          <li class="experience__bottomItem experience__bottomItem--reverse">
            <span class="experience__image--wrapperBottom">
              <img class="experience__image" src="../assets/certificate.jpg" alt="">
            </span>
            <div class="experience__textWrapper">
              <h2 class="experience__name">Систематично підвищує знання та кваліфікацію у сфері публічних закупівель
              </h2>
              <p class="experience__achivement">Приватна установа "Університет "Київська школа економіки"</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">




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
        background: blue;
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
      & p, h2 {
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
              background: blue;
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
              background: blue;
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
@media (min-width: 768px) {
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
}
@media (min-width: 1200px) {
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
      &--wrapper, &--wrapperBottom {
        margin: 0;
      }
    }
    &__textWrapper {
      width: 400px;
    }
  }
}
</style>