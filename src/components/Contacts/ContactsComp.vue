<template>
    <footer class="footer" id="contacts">
        <div class="footer__container">
            <h2 class="footer__title">
                {{  contactsSection.title }}
            </h2>
            <div class="footer__wrapper">
                <ul class="footer__contacts">
                    <li class="footer__item" v-for="(item,i) of contactsSection.contacts" :key="i">
                        <img class="footer__icon" :src="require(`../../assets/svg/${item.icon}.svg`)" alt="">
                        <a :href="item.link" class="footer__contact">{{ item.text }}</a>
                    </li>
                </ul>
                <FormComp />
            </div>
        </div>
    </footer>
</template>

<script>
</script>

<script>
import FormComp from '../Form/FormComp.vue';
export default {
  components: { FormComp },
}
</script>

<style lang="scss">
.footer {
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
        &__contacts {
            margin-top: 20px;
        }
        &__item {
            display: flex;
            align-items: center;
            &:not(:last-child) {
                margin-bottom: 20px;
            }
        }
        &__icon {
            margin-right: 10px;
        }
        &__contact {
            margin: 0;
            font-size: 18px;
            text-decoration: none;
            color: #000;
        }
}

@media (min-width: 767px) {
    .footer {
        &__title {
            margin: 0 0 0 60px;
        }
        &__contacts {
            width: 375px;
            margin: 20px auto 0;
        }
    }
    .form {
        padding: 40px 40px;
    }
}

@media (min-width: 1200px) {
    .footer {
        &__wrapper {
            display: flex;
            margin-top: 30px;
        }
        &__contacts {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 0;
        }
        &__contact {
            font-size: 22px;
        }
    }
    .form {
        margin: 0;
        flex-grow:  1;
    }
}

</style>