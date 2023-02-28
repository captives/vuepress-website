/// <reference types="vite/client" />

declare interface ImportMetaEnv {
    readonly VITE_APP_LABEL: string,
    readonly VUE_VITE_BASE_URL: string,
    readonly VUE_VITE_WEBSITE_URL: string
  }
  
  declare interface ImportMeta {
    readonly env: ImportMetaEnv
  }