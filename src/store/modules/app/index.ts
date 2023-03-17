import { defineStore } from 'pinia';
import type { AppState, StateType } from './types';

const useAppStore = defineStore('app', {
  state: (): AppState => ({
    "theme": "light",
    "themeColor": "#165DFF",
    "language": "en-US",
    "singleIndex": 0,
    "siteIndex": 0,
    "colorWeek": false,
    "navbar": true,
    "tabBar": false,
    "menuCollapse": false,
    "footer": true,
    "menuWidth": 220,
    "globalSettings": false,
    "device": "desktop",
  }),

  getters: {
    appCurrentSetting(state: AppState): AppState {
      return { ...state };
    },
    lang(state: AppState): string {
      return String(state.language).split("-")[0] || "en";
    }
  },

  actions: {
    toggerLanguage(language: string) {
      this.language = language;
    },
    toggleTheme(dark: boolean) {
      if (dark) {
        this.theme = 'dark';
        document.body.setAttribute('arco-theme', 'dark');
      } else {
        this.theme = 'light';
        document.body.removeAttribute('arco-theme');
      }
    },
    toggleDevice(device: string) {
      this.device = device;
    },
    toggleState(key: string, value: any) {
      this[key] = value;
    }
  },
  persist: {
    enabled: true,
    strategies: [
      { storage: sessionStorage, paths: ['theme', 'singleIndex', 'siteIndex'] },
      { storage: localStorage, paths: ['*'] },
    ],
  }
});

export default useAppStore;
