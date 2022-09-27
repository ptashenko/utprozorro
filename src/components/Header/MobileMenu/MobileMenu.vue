<template>
    <transition name="slideOn">
        <div v-if="store.mobileMenu" class="mobileMenu">
            <img @click="mobileMenuToggle" src="../../../assets/svg/cross.svg" alt="Закрыть" class="mobileMenu__close" />
            <ul class="mobileMenu__menuList mobileMenu__menuList--navigation">
                <li class="mobileMenu__menuItem" v-for="(item, idx) of text.navigation" :key="idx">
                    <a class="mobileMenu__menuLink">
                        {{item.name}}
                    </a>
                </li>
            </ul>
            <ul class="mobileMenu__contactsList">
                <li class="mobileMenu__contactsItem" v-for="(item, idx) of text.contacts" :key="idx">
                    <a :href="item.link" class="mobileMenu__contactsLink">
                        {{item.text}}
                    </a>
                </li>
                <li class="mobileMenu__contactsItem mobileMenu__contactsLink">
                    Графік роботи: Пн-Пт, з 9:00 до 19:00
                </li>
            </ul>
        </div>
    </transition>
</template>

<script>
export default {
    props: ['text', 'store'],
    setup(_, context) {
        const mobileMenuToggle = () => {
            context.emit('mobileMenuToggle');
        }
        return { mobileMenuToggle }
    }
}
</script>

<style lang="scss">
@keyframes showOn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes slide {
    0% {
        right: -100%;
    }

    100% {
        right: 0;
    }
}

.slideOn-enter-active {
    animation: slide 0.5s;
}

.slideOn-leave-active {
    animation: slide 0.5s reverse;
}

.mobileMenu {
    padding: 42px 20px;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    box-sizing: border-box;
    background: #000;
    display: flex;
    flex-direction: column;
    max-width: 600px;
    z-index: 10;

    &__close {
        right: 15px;
        top: 15px;
        position: absolute;
        width: 18px;
        height: 18px;
    }

    &__menuList {
        &--navigation {
            flex-grow: 1;
        }
    }

    &__menuItem {
        &:not(:last-child) {
            margin-bottom: 15px;
        }
    }

    &__menuLink {
        font-size: 18px;
        text-decoration: none;
        color: #fff;
        font-weight: 500;
    }

    &__contactsLink {
        font-size: 13px;
        color: #fff;
        text-decoration: none;
    }
}
ul {
    padding: 0;
    margin: 0;
    list-style: none;
}
</style>