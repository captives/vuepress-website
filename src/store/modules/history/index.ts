import { defineStore } from 'pinia';
import type { HistoryState, HistoryType, HistoryItemType } from './types';

const useHistoryStore = defineStore('history', {
    state: (): HistoryState => ({
        list: [],
        current: []
    }),
    actions: {
        set(list: Array<HistoryItemType>) {
            this.current.splice(0, this.current.length, ...list);
            this.list.push(list);
        },
        //当前路由中推送新的
        push(list: HistoryType) {
            this.list.push(list);
        }
    }
});

export default useHistoryStore;