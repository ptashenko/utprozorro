const refs = {
    navigation: {
        aboutUs: 'Про нас',
        services: 'Послуги',
        benefits: 'Наші переваги',
        contacts: 'Контакти',
    },
    contacts: {
        phone: '38(050) 574-23-62',
        email: 'client.utprozorron@gmail.com',
    }
}

const { aboutUs, services, benefits, contacts } = refs.navigation;
const { phone, email } = refs.contacts;

export default {
    buttons: [aboutUs, services, benefits, contacts],
    contacts: [phone, email],
}