import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persistedstate';
import useAppStore from './modules/app';
import useUserStore from './modules/user';
import useHistoryStore from './modules/history';

const pinia = createPinia();
pinia.use(piniaPersist);

export { useAppStore, useUserStore, useHistoryStore };
export default pinia;
