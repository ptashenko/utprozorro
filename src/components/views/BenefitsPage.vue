<template>
  <section class="benefits" id="benefits">
    <h2 class="benefits__title">
      {{ benefitsPageSection.title }}
    </h2>
    <ul class="benefits__list">
      <li class="benefits__item" v-for="(item, i) of benefitsPageSection.benefits" :key="i">
        <img class="benefits__icon" :src="require(`../../assets/svg/${item.logo}_icon.svg`)" alt="">
        <h3 class="benefits__name">{{ item.name }}</h3>
        <p class="benefits__text">{{ item.text }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
</script>

<style lang="scss">
.benefits {
  max-width: 320px;
  padding: 30px 0;
  margin: 0 auto;

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

  &__list {}

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }

  &__icon {
    max-width: 13%;
    margin-bottom: 20px
  }

  &__text {
    margin: 0;
    text-align: center;
    color: #333333;
    font-weight: 400;
    font-size: 13px;
    line-height: 1.2;

    @media (min-width: 441px) and (max-width: 1024px) {
      font-size: 18px;
    }
  }

    &__name {
      font-weight: 600;
      font-size: 13px;
      line-height: 1.2;
      color: #000;
      margin-bottom: 15px;
      
      @media (min-width: 441px) and (max-width: 1024px) {
        font-size: 18px;
      }
    }
}

@media(min-width: 767px) {
  .benefits {
    max-width: 640px;

    &__title {
      margin: 0 0 60px 60px;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 130%;
      color: #000;

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

    &__item {
      margin: 0 auto;
      max-width: 400px;
    }

    &__icon {
      max-width: 80px;
    }
  }
}

@media (min-width: 1200px) {
  .benefits {
    max-width: 1440px;
    padding: 50px;

    &__list {
      display: flex;
      align-items: baseline;
    }

    &__item {
      &:not(:last-child) {
        margin-bottom: 0;
        margin-right: 20px;
      }
    }

    &__text {
      flex-grow: 1;
      font-weight: 400;
      font-size: 18px;
      line-height: 144%;
      color: #333333;
    }

    &__name {
      font-weight: 600;
      font-size: 18px;
      line-height: 144%;
      color: #000;
      margin-bottom: 15px;
    }

    &__item {
      max-width: 438px;
    }
  }
}
</style>