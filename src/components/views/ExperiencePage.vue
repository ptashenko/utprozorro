<template>
  <section class="experience">
    <div class="experience__container">
      <h2 class="experience__title">
        {{ experiencePageSection.title }}
      </h2>
      <div class="experience__top">
        <div class="experience__textWrapper">
          <p class="experience__text">
            <span class="experience__text--title">{{ experiencePageSection.text[0] }}</span>
            {{ experiencePageSection.text[1] }}
          </p>
          <p class="experience__text--fontsize">
            <span class="experience__text--title">{{ experiencePageSection.text[2] }}</span>
            <span>{{ experiencePageSection.text[3].split(' ').slice(0, 2).join(' ').concat(' ') }}</span>
            <span class="experience__text--blue">{{ experiencePageSection.text[3].split(' ').slice(2, 7).join('').concat(' ') }}</span>
            <span>{{ experiencePageSection.text[3].split(' ').slice(7).join(' ') }}</span>
          </p>
        </div>
        <ul class="experience__topList">
          <li class="experience__topItem" v-for="(item, i) of experiencePageSection.experience" :key="i">
            <h2 class="experience__number"><span class="experience__number--symbol">{{ item.symbol }}</span>{{ item.count
            }}
            </h2>
            <p class="experience__description">{{ item.description }}</p>
          </li>
        </ul>
      </div>
      <div class="experience__bottom">
        <ul class="experience__bottomList">
          <li class="experience__bottomItem experience__bottomItem--reverse">
            <span class="experience__image--wrapper">
              <img class="experience__image" src="../../assets/images/creator.jpg" alt="">
            </span>
            <div class="experience__second-textWrapper">
              <h3 class="experience__second-title">{{ experiencePageSection.secondTitle }}</h3>
              <h2 class="experience__name">{{ experiencePageSection.founder.name }}</h2>
              <p class="experience__position">{{ experiencePageSection.founder.position }}</p>
              <ul class="experience__achivements">
                <li class="experience__achivement" v-for="(item, i) of experiencePageSection.founder.exp" :key="i">
                  {{ item }}
                </li>
              </ul>
            </div>
          </li>
          <li class="experience__bottomItem">
            <span class="experience__image-certificate--wrapperBottom">
              <img class="experience__image-certificate" src="../../assets/images/certificate.jpg" alt="">
            </span>
            <div class="experience__third-textWrapper">
              <h3 class="experience__third-title">{{ experiencePageSection.thirdTitle }}</h3>
              <h2 class="experience__third-name">
                {{ experiencePageSection.name }}
              </h2>
              <p class="experience__third-achivement">
                {{ experiencePageSection.school }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss">
.experience {
  background: #fafafa;

  &__container {
    max-width: 320px;
    margin: 0 auto;
    padding: 30px 0;

    @media (min-width: 767px) {
      max-width: 640px;
    }

    @media (min-width: 1200px) {
      max-width: 1440px;
      padding: 50px 50px 56px;
    }
  }

  &__title {
    position: relative;
    font-weight: 600;
    font-size: 16px;
    line-height: 130%;
    color: #000;
    width: 290px;
    margin: 0 0 30px 30px;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: -30px;
      width: 22px;
      height: 6px;
      background: #1550e7;
      transform: translateY(-50%);
    }
  }

  &__textWrapper {
    width: 100%;
    background: #FFFFFF;
    border: 0.75px solid #000000;
    padding: 10px;
  }

  &__top {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 30px;
  }

  &__text {
    line-height: 1.2;
    font-size: 14px;
    color: #333333;

    &--title {
      font-weight: 700;
      color: #1550E7;
      font-size: 14px;
    }

    &--blue {
      color: #1550E7;
    }

    &--fontsize {
      font-size: 14px;
      line-height: 1.2;
      color: #333333;
    }

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  &__topList {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    @media (min-width: 767px) {
      flex-direction: row;
      margin-bottom: 50px;
    }
  }

  &__topItem {
    width: 100%;
    padding: 30px;
    background: #1550E7;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  &__number {
    font-weight: 800;
    font-size: 24px;
    line-height: 1.2;
    margin-bottom: 20px;

    @media (min-width: 767px) {
      font-size: 32px;
      line-height: 81%;
    }
  }

  &__description {
    font-weight: 800;
    font-size: 14px;
    line-height: 1.2;
    text-align: center;

    @media (min-width: 767px) {
      font-size: 18px;
      line-height: 144%;
    }
  }

  &__image {
    position: relative;
    display: block;
    margin: 0 auto;
    z-index: 1;
    height: 398px;

    @media (min-width: 767px) {
      height: 645px;
    }

    &--wrapper {
      display: block;
      margin: 0 auto;
      position: relative;
      margin-bottom: 30px;

      @media (min-width: 767px) {
        margin-bottom: 0;
      }

      &::before {
        content: '';
        position: absolute;
        top: -6px;
        right: -6px;
        width: 161px;
        height: 161px;
        z-index: 0;
        background: #1550e7;
      }
    }
  }

  &__image-certificate {
    position: relative;
    display: block;
    margin: 0 auto;
    z-index: 1;
    height: 210px;

    @media (min-width: 767px) {
      height: 348px;
    }

    &--wrapperBottom {
      display: block;
      margin: 0 auto;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        bottom: -6px;
        left: -6px;
        width: 126px;
        height: 126px;
        z-index: 0;
        background: #1550e7;
      }
    }
  }

  &__bottomItem {
    display: flex;
    flex-direction: column-reverse;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  &__second-title {
    font-weight: 600;
    font-size: 26px;
    line-height: 72%;
    color: #1550E7;
    position: relative;
    margin-bottom: 30px;

    @media (min-width: 767px) {
      font-size: 36px;
      margin-bottom: 61px;
      padding-top: 140px;
    }

    &::after {
      content: "";
      position: absolute;
      left: -55px;
      bottom: -7px;
      width: 110%;
      height: 1px;
      background-color: #1550E7;
    }
  }

  &__third-title {
    font-weight: 600;
    font-size: 26px;
    line-height: 72%;
    color: #1550E7;
    position: relative;
    margin-bottom: 30px;

    @media (min-width: 767px) {
      font-size: 36px;
      margin-bottom: 61px;
      padding-top: 47px;
    }

    &::after {
      content: "";
      position: absolute;
      left: -31px;
      bottom: -7px;
      width: 110%;
      height: 1px;
      background-color: #000;

      @media (min-width: 767px) {
        width: 100%;
      }
    }
  }

  &__name {
    font-weight: 600;
    font-size: 18px;
    line-height: 1.5;
    color: #000;

    @media (min-width: 767px) {
      font-size: 25px;
      line-height: 104%;
      margin-bottom: 5px;
    }
  }

  &__third-name {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.2;
    color: #000000;
    margin-bottom: 15px;

    @media (min-width: 767px) {
      font-size: 22px;
      line-height: 118%;
    }
  }

  &__position {
    font-weight: 400;
    font-size: 13px;
    line-height: 1.2;
    color: #333333;
    margin-bottom: 15px;

    @media (min-width: 767px) {
      margin-bottom: 30px;
      font-size: 15px;
      line-height: 173%;
    }
  }

  &__achivements {
    margin-bottom: 30px;

    @media (min-width: 767px) {
      margin-bottom: 0;
    }
  }

  &__achivement {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.3;
    color: #333333;
    padding-left: 23px;
    position: relative;

    &::before {
      content: '';
      display: block;
      position: absolute;
      width: 18px;
      height: 18px;
      background: url(../../assets/images/check.png);
      background-repeat: no-repeat;
      top: 2px;
      left: 0;
    }

    @media (min-width: 767px) {
      font-size: 18px;
      line-height: 144%;
      padding-left: 30px;
    }
  }

  &__third-achivement {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.3;
    color: #333333;
    margin-bottom: 30px;

    @media (min-width: 767px) {
      font-size: 18px;
      line-height: 144%;
      margin-bottom: 0;
    }
  }
}

@media (min-width: 767px) {
  .experience {
    &__title {
      margin: 0 0 0 60px;
    }

    &__top {
      flex-direction: row-reverse;
    }

    &__textWrapper {
      width: 320px;
    }

    &__text {
      font-weight: 400;
      font-size: 18px;
      line-height: 130%;
      color: #333333;

      &--title {
        font-weight: 700;
        color: #1550E7;
        font-size: 20px;
      }

      &--fontsize {
        font-weight: 400;
        font-size: 18px;
        line-height: 130%;
        color: #333333;
      }
    }

    &__bottomItem {}

    &__image {

      &--wrapper {}

      &--wrapperBottom {}
    }

    &__name {}

    &__position {}

    &__achivement {}
  }
}

@media (min-width: 1200px) {
  .experience {
    &__top {
      justify-content: space-around;
      flex-direction: column-reverse;
      margin-bottom: 0;
    }

    &__title {
      font-weight: 600;
      font-size: 20px;
      line-height: 130%;
      color: #000;
      margin-bottom: 50px;

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: -60px;
        width: 40px;
        height: 6px;
        background: #1550e7;
        transform: translateY(-50%);
      }
    }

    &__topItem {
      padding: 40px;

      &:not(:last-child) {
        margin-right: 40px;
        margin-bottom: 0;
      }
    }

    &__bottomList {
      display: flex;
      flex-direction: column;
    }

    &__bottomItem {
      display: flex;
      justify-content: space-between;
      max-width: 100%;
      flex-direction: row;

      &--reverse {
        flex-direction: row-reverse;
      }

      &:not(:last-child) {
        margin-bottom: 100px;
      }
    }

    &__image {

      &--wrapper,
      &--wrapperBottom {
        margin: 0;
      }
    }

    &__textWrapper {
      width: 100%;
      background: #FFFFFF;
      border: 0.75px solid #000000;
      padding: 47px;
      margin-bottom: 97px;
    }

    &__third-textWrapper {
      margin-left: 221px;
    }
  }
}
</style>