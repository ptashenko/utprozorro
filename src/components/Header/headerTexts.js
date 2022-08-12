const refs = {
    navigation: {
        aboutUs: {
            name: 'Про нас',
            id: 'about',
        },
        services: {
            name: 'Послуги',
            id: 'services',
        },
        benefits: {
            name: 'Наші переваги',
            id: 'benefits',
        },
        contacts: {
            name: 'Контакти',
            id: 'contacts',
        }
    },
    contacts: {
        phone: {
            name: 'phone',
            text: '38(050) 574-23-62',
            link: '0505742362'
        },
        email: {
            name: 'email',
            text: 'client.utprozorron@gmail.com',
            link: 'client.utprozorron@gmail.com'
        },
    }
}

const { aboutUs, services, benefits, contacts } = refs.navigation;
const { phone, email } = refs.contacts;

export default {
    buttons: [aboutUs, services, benefits, contacts],
    contacts: [phone, email],
}