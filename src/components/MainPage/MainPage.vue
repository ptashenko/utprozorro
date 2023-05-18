<template>
    <main class="hero">
        <div :class="heroClass">
            <h1 class="hero__title">
                {{ mainPageSection.titles[0] }} <span class="hero__title--bold">{{ mainPageSection.titles[1] }}</span><span class="hero__title--underline">{{ mainPageSection.titles[2] }}</span>
            </h1>
            <ul class="hero__benefits">
                <li class="hero__benefitsItem" v-for="(item, i) of mainPageSection.benefits" :key="i">{{ item }}</li>
            </ul>
            <p class="hero__subtitle">
              {{ mainPageSection.subtitle }}
            </p>
            <a class="hero__button" @click="$emit('openModal')">
              {{ mainPageSection.button }}
            </a>
            <span class="hero__image--wrapper">
                <img class="hero__image" src="../../assets/images/hummer-main.jpg" alt="" />
            </span>
        </div>
    </main>
</template>

<script>
export default {
  data() {
    return {
      heroClass: '',
    }
  },
  mounted() {
    this.heroClass = window.innerWidth >= 1199 ? 'hero__desktop' : 'hero__mobile';
  }
};
</script>

<style lang="scss">
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
}
</style>