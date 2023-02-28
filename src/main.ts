import { createApp } from 'vue';
import './theme/style.scss';
import AppClient from './plugins/client';
import App from './App.vue';
import '@/theme/index.scss';

createApp(App)
    .use(AppClient, { isVue: true })
    .mount('#app');
