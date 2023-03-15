/// <reference types="vite/client" />
import { ComponentCustomProperties } from 'vue'

/**
 * 识别vue中的全局属性
 * https://cn.vuejs.org/guide/typescript/options-api.html#augmenting-global-properties
 */
declare module 'vue' {
  interface ComponentCustomProperties {
    $videoList: Array<{ label: string, value: string }>;
    $oss: (value?: string | null) => string
  }
}

/**
 * 识别vue组件导入
 */
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare interface String {
  toCapitalizeString: Function
}

declare interface SoundMeter {
  instant: number;
  slow: number;
  clip: number;
}

declare module 'xgplayer-hls';