import { reactive } from "vue";
import hero from '../components/MainPage/hero';
import header from '../components/Header/headerTexts';

const state = reactive({
    showModal: false,
    texts: { hero, header },
    mobileMenu: false,
})

export default { state };