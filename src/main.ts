import { createApp } from 'vue';
import router from '@/router';
import i18n, { i18Config, setLocale } from '@/locale';
import store, { useUserStore } from '@/store';
import client from './plugins/client';
import lazy from '@/directives/lazy';
import App from '@/layout/Main.vue';

const app = createApp(App)
    .use(router)
    .use(store)
    .use(i18n)
    .use(client)
    .use(lazy)


console.log('请求远程数据');

import { fetch } from '@/utils/helper';

// Promise.all([
//     fetch('/lang/vi-VN.json'),
//     fetch('/lang/th-TH.json')
// ]).then(([VN, TH]:[string, string]) => {
//     setLocale('vi-VN', JSON.parse(VN));
//     setLocale('th-TH', JSON.parse(TH));
// });

//@ts-ignore
fetch('/lang/vi-VN.json').then((text: string) => {
    setLocale('vi-VN', JSON.parse(text));
    // app.use(i18n);
    console.log('i18Config',i18Config);
})

setTimeout(() => {
    console.log('请求远程数据完成');
    const userStore = useUserStore();
    console.log(userStore.$state.nickName);
    userStore.$state.nickName = "Seven啊";
    console.log(userStore.$state.nickName);
    app.mount('#app');
}, 200);
