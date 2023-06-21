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
            <span class="experience__text--blue">{{ experiencePageSection.text[3].split(' ').slice(2, 7).join(' ').concat(' ') }}</span>
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

    @media (min-width: 767px) {
      max-width: 640px;
    }

    @media (min-width: 1200px) {
      max-width: 100%;
      padding: 50px 50px 56px;
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
      height: 6px;
      background: #1550e7;
      transform: translateY(-50%);
    }
  }

  &__text {
    line-height: 1.3;

    &--title {
      font-weight: 700;
      color: #1550E7;
      font-size: 20px;
    }

    &--blue {
      color: #1550E7;
    }

    &--fontsize {
      font-size: 14px;
    }

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  &__topList {
    display: flex;
    margin-bottom: 50px;
  }

  &__topItem {
    width: 100%;
    padding: 40px;
    background: #1550E7;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:not(:last-child) {
      margin-right: 40px;
    }
  }

  &__number {
    font-weight: 800;
    font-size: 32px;
    line-height: 81%;
    margin-bottom: 20px;
  }

  &__description {
    font-weight: 700;
    font-size: 18px;
    line-height: 144%;
    text-align: center;
  }

  &__image {
    position: relative;
    display: block;
    margin: 0 auto;
    z-index: 1;
    height: 645px;

    &--wrapper {
      display: block;
      margin: 0 auto;
      position: relative;

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
    height: 348px;

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
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  &__second-title {
    font-weight: 600;
    font-size: 36px;
    line-height: 72%;
    color: #1550E7;
    padding-top: 140px;
    position: relative;
    margin-bottom: 61px;

    &::after {
      content: "";
      position: absolute;
      left: -55px;
      bottom: -7px;
      width: 720px;
      height: 1px;
      background-color: #1550E7;
    }
  }

  &__third-title {
    font-weight: 600;
    font-size: 36px;
    line-height: 72%;
    color: #1550E7;
    padding-top: 47px;
    position: relative;
    margin-bottom: 61px;

    &::after {
      content: "";
      position: absolute;
      left: -31px;
      bottom: -7px;
      width: 665px;
      height: 1px;
      background-color: #000;
    }
  }

  &__name {
    font-weight: 600;
    font-size: 25px;
    line-height: 104%;
    color: #000;
    margin-bottom: 5px;
  }

  &__third-name {
    font-weight: 600;
    font-size: 22px;
    line-height: 118%;
    color: #000000;
    margin-bottom: 15px;
  }

  &__position {
    font-weight: 400;
    font-size: 15px;
    line-height: 173%;
    color: #333333;
    margin-bottom: 30px;
  }

  &__achivements {
    width: 632px;
  }

  &__achivement {
    font-weight: 400;
    font-size: 18px;
    line-height: 144%;
    color: #333333;
    padding-left: 30px;
    position: relative;

      &::before {
        content: '';
        display: block;
        position: absolute;
        width: 18px;
        height: 18px;
        background: url(../../assets/images/check.png);
        background-repeat: no-repeat;
        top: 4px;
        left: 4px;
      }
  }

  &__third-achivement {
    font-weight: 400;
    font-size: 18px;
    line-height: 144%;
    color: #333333;
  }
}

@media (min-width: 767px) {
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
      font-weight: 400;
      font-size: 18px;
      line-height: 130%;
      color: #333333;

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

    &__achivement {
    }
  }
}

@media (min-width: 1200px) {
  .experience {
    &__top {
      justify-content: space-around;
      flex-direction: column-reverse;
    }

    &__title {
      font-weight: 600;
      font-size: 20px;
      line-height: 130%;
      color: #000;
      margin-bottom: 50px;
    }

    &__bottomList {
      display: flex;
      flex-direction: column;
    }

    &__bottomItem {
      display: flex;
      justify-content: space-between;
      max-width: 100%;

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