import { reactive } from "vue";
import hero from '../components/MainPage/hero';
import header from '../components/Header/headerTexts';
import about from '@/texts/aboutUs';
import benefits from '@/texts/benefits';
import services from '@/texts/services';
import exp from '@/texts/exp';

const state = reactive({
    showModal: false,
    texts: { hero, header, about, benefits, services, exp },
    mobileMenu: false,
    currentScroll: 0,
})

export default { state };