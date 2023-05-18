import { createApp } from 'vue';
import App from './App.vue';
import { plugin, defaultConfig } from '@formkit/vue';
import VueMask from '@devindex/vue-mask';
import textMixin from './mixins/textMixin';

const app = createApp(App);

app.config.devtools = true;

app.use(plugin, defaultConfig());
app.use(VueMask);
app.mixin(textMixin);
app.mount('#app');
