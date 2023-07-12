<template>
  <section class="about" id="about">
    <div class="about__container">
      <h2 class="about__title">
        {{ aboutPageSection.title }}
      </h2>
      <ul class="about__list">
        <li class="about__item" v-for="(item, i) of aboutPageSection.list" :key="i">
          <img class="about__icon" :src="require(`../../assets/svg/${item.icon}_logo.svg`)" alt="">
          <p class="about__text">{{ item.text }}</p>
        </li>
      </ul>
      <ul class="about__wrapper">
        <li class="about__bottomItem about__bottomItem--wrapper">
          <img class="about__image" src="../../assets/images/hummer-sub.jpg" alt="">
        </li>
        <li class="about__column">
          <h3 class="about__second-title">
            {{ aboutPageSection.secondTitle }}
          </h3>
          <div class="about__bottomItem">
            <p class="about__bottomText">
              <span class="bold">{{ aboutPageSection.bottom[0].split(' ').slice(0, 2).join(' ').concat(' ') }} </span>
              <span class="blue">{{ aboutPageSection.bottom[0].split(' ').slice(2, 6).join(' ') }}</span>
              {{ aboutPageSection.bottom[0].split(' ').slice(6).join(' ') }}
            </p>
            <p class="about__bottomText">
              <span class="bold">{{ aboutPageSection.bottom[1].split(' ').slice(0, 2).join(' ') }}</span>
              <span>{{ aboutPageSection.bottom[1].split(' ').slice(2, 17).join(' ').concat(' ') }}</span>
              <span class="blue">{{ aboutPageSection.bottom[1].split(' ').slice(17, 22).join(' ').concat(' ') }}</span>
              <span>{{ aboutPageSection.bottom[1].split(' ').slice(22).join(' ') }}</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss">
.about {
  background: #fafafa;

  &__container {
    max-width: 320px;
    margin: 0 auto;
    padding: 30px 0 30px;

    @media (min-width: 441px) and (max-width: 1024px) {
      padding: 30px 0 50px;
      max-width: 640px;
    }

    @media (min-width: 1200px) {
      max-width: 1440px;
      padding: 50px 50px 66px 50px;
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

    @media (min-width: 767px) {
      width: 312px;
    }
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__column {
    width: 100%;

    @media (min-width: 441px) and (max-width: 1024px) {
      width: 100%;
    }

    @media (min-width: 1025px) {
      width: 56%;
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
      padding-top: 20px;
      margin-bottom: 61px;
    }

    &::after {
      content: "";
      position: absolute;
      left: -35px;
      bottom: -7px;
      width: 110%;
      height: 1px;
      background-color: #000;

      @media (min-width: 767px) {
        width: 111%;
      }
    }
  }

  &__bottomItem {
    position: relative;

    &:first-child {
      margin-bottom: 30px;
    }

    @media (min-width: 767px) {
      margin-bottom: 0;
    }

    &--wrapper {

      &::before {
        content: '';
        position: absolute;
        bottom: -6px;
        left: -6px;
        width: 155px;
        height: 155px;
        z-index: 0;
        background: #1550e7;
      }
    }
  }

  &__bottomText {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.2;
    color: #333333;

    &:first-child {
      margin-bottom: 20px;
    }

    @media (min-width: 441px) and (max-width: 1024px) {
      font-size: 16px;
    }
  }

  &__image {
    position: relative;
    display: block;
    width: 503px;

    @media (max-width: 767px) {
      width: 300px;
    }
  }

  &__list {
    display: flex;
    width: 100%;
    flex-direction: column;
    flex-wrap: wrap;
    margin-bottom: 30px;
  }

  &__item {
    display: flex;
    font-size: 13px;
    margin-bottom: 15px;
  }

  &__icon {
    width: 13%;

    @media (min-width: 441px) and (max-width: 1024px) {
      justify-content: space-between;
      margin-bottom: 10px;
    }
  }

  &__text {
    margin-left: 20px;
    display: flex;
    align-items: center;
  }
}

@media (min-width: 767px) {
  .about {
    &__title {
      margin: 0 0 67px 60px;
      font-size: 20px;
      line-height: 130%;
      width: 312px;

      &::before {
        left: -60px;
        width: 40px;
      }
    }

    &__list {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      flex-direction: row;

      @media (min-width: 441px) and (max-width: 1024px) {
        justify-content: space-between;
       }
    }

    &__item {
      display: block;
      with: calc(100%/2);

      @media (min-width: 441px) and (max-width: 1024px) {
        width: 48%;
      }
    }

    &__text {
      font-weight: 400;
      font-size: 18px;
      line-height: 144%;
      color: #333333;
      margin-left: 0;
      display: block;
    }
  }
}

@media (min-width: 1200px) {
  .about {
    &__item {
      width: calc((100% - 173px)/3);
      margin-bottom: 62px;
      margin-right: 86px;

      &:nth-child(3) {
        margin-right: 0;
      }

      &:nth-child(6) {
        margin-right: 0;
      }

      &:nth-child(2) .about__icon {
        margin-bottom: 30px;
      }

      &:nth-child(3) .about__icon {
        margin-bottom: 25px;
      }

      &:nth-child(5) .about__icon {
        margin-bottom: 15px;
      }

      &:nth-child(6) .about__icon {
        margin-bottom: 36px;
      }
    }

    &__list {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      margin-bottom: 48px;
    }

    &__icon {
      margin-bottom: 20px;
      width: 14%;
    }

    &__wrapper {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
    }

    &__bottomText {
      margin: 0 0 20px 0;
      font-weight: 400;
      font-size: 22px;
      line-height: 26px;
      color: #333333;
    }
  }
}

.bold {
  font-weight: 700;
  color: #1550E7;
  font-size: 16px;
  line-height: 118%;

  @media (min-width: 767px) {
    font-size: 22px;
  }
}

.blue {
  color: #1550E7;
}
</style>