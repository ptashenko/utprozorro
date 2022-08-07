import { createApp } from 'vue';
import App from './App.vue';
import { plugin, defaultConfig } from '@formkit/vue'
import router from './router'


createApp(App).use(router).use(plugin, defaultConfig({
    config: {
        classes: {
            form: 'form',
            input: 'form__input',
            outer: 'form__label',
        }
    }
})).mount('#app');
