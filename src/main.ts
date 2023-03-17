import { createApp } from 'vue';
import router from '@/router';
import store, { useUserStore } from '@/store';
import client from './plugins/client';
import App from '@/layout/Main.vue';
import '@/theme/index.scss';

const app = createApp(App)
    .use(router)
    .use(store)
    .use(client, { isVue: true })


console.log('请求远程数据');

setTimeout(() => {
    console.log('请求远程数据完成');
    const userStore = useUserStore();
    console.log(userStore.$state.nickName);
    userStore.$state.nickName = "Seven啊";
    console.log(userStore.$state.nickName);
    app.mount('#app');
}, 200);
