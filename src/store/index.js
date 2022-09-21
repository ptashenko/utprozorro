import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            showModal: false,
            scrollHeight: window.pageYOffset
        }
    },
    mutations: {
        toggleModal(state) {
            state.showModal = !state.showModal;
        },
        watchScrollHeight(state) {
            state.scrollHeight = window.pageYOffset;
        }
    }
})

export default store