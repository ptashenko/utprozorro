import { createApp } from 'vue';
import App from './App.vue';
import { plugin, defaultConfig } from '@formkit/vue'


createApp(App).use(plugin, defaultConfig({
    config: {
        classes: {
            form: 'form',
            input: 'form__input',
            outer: 'form__label',
        }
    }
})).mount('#app');
