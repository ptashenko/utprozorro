<template>
    <div class="buttonWrapper">
        <div class="button" v-for="item of text" :key="item.id">
            <a class="button__link" @click="calcOpen()">{{ item.name }}</a>
            <p class="button__more">Детальніше</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ["text"],
    data() {
        return {
        }
    },
    methods: {
        calcOpen() {
            
        }
    },
}
</script>

<style lang="scss">


.buttonWrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    width: 300px;
    height: 300px;
    background: #1550e7;
    transition: all 250ms linear;
    margin: 0 auto;
    cursor: pointer;
    &:not(:last-child) {
        margin-bottom: 20px;
    }
    &__link {
        display: flex;
        align-items: center;
        text-align: center;
        color: #fff;
        text-decoration: none;
        flex-grow: 1;
        font-size: 24px;
        font-weight: 600;
        text-transform: uppercase;
    }
    &__more {
        display: flex;
        width: 100%;
        margin: 0;
        justify-content: end;
        color: #fff;
        &::after {
            content: '>';
            display: block;
            width: 10px;
            height: 10px;
            transform: translateX(-10px);
            opacity: 0;
            transition: all 250ms linear;
        }
    }
    &:hover {
        background: #0034b8;
    }
    &:hover > .button__more::after {
        opacity: 1;
        transform: translateX(5px);
    }
}

@media (min-width: 768px) {
    .buttonWrapper {
        flex-direction: row;
    }
}

@media (min-width: 1200px) {
    .button {
        width: 370px;
        height: 370px;
        &__link {
            font-size: 26px;
        }
    }
}
</style>