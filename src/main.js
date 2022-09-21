import { createApp } from 'vue';
import App from './App.vue';
import { plugin, defaultConfig } from '@formkit/vue';
import store from './store'

const app = createApp(App);

app.config.devtools = true;

app.use(plugin, defaultConfig());
app.use(store);
app.mount('#app')

