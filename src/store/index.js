import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            showModal: false,
            scrollHeight: window.pageYOffset,
            mobileMenu: false,
        }
    },
    mutations: {
        toggleModal(state) {
            state.showModal = !state.showModal;
        },
        watchScrollHeight(state) {
            state.scrollHeight = window.pageYOffset;
        },
        mobileMenuOpen(state) {
            state.mobileMenu = !state.mobileMenu
        },
        scrollDown(state, el) {
            state.mobileMenu = !state.mobileMenu;
            document.getElementById(el).scrollIntoView({behavior: "smooth"})
        }
    }
})

export default store