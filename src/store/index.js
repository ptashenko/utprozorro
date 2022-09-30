import { reactive } from "vue";
import hero from '../components/MainPage/hero';
import header from '../components/Header/headerTexts';
import contacts from '../components/Contacts/contacts';
import about from '@/texts/aboutUs';
import benefits from '@/texts/benefits';
import services from '@/texts/services';
import exp from '@/texts/exp';

const state = reactive({
    showModal: false,
    texts: { hero, header, about, benefits, services, exp, contacts },
    mobileMenu: false,
    currentScroll: 0,
    order: null,
    servicesList: [
        {
            name: 'Участь у тендері',
            price: [
                {   
                    level: 100000,
                    amount: 1200,
                },
                {
                    level: 200000,
                    amount: 1600,
                },
                {
                    level: 3000000,
                    amount: 2900,
                },
                {
                    level: 3000001,
                    amount: 6000,
                },
            ]
        },
        {
            name: 'Оскарження в АМКУ',
            price: 3500,
        },
        {
            name: 'Вимога на тендер',
            price: 1500,
        }
    ]
})

export default { state };