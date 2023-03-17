import { resolve, dirname } from 'node:path';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

const getBase = (src: string = './src') => {
  return fileURLToPath(new URL(src, import.meta.
    url));
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/vuepress-website/app/',
  build: {
    outDir: "./docs/app",
    //   // copyPublicDir:false
    //   rollupOptions: {
    //     output: {
    //       dir:"./docs/app",
    //       chunkFileNames: 'js/[name]-[hash].js',
    //       // entryFileNames: 'vuepress-website/app/js/[name]-[hash].js',
    //       // assetFileNames: '[ext]/[name]-[hash].[ext]',
    //       entryFileNames(chunkInfo) {
    //           console.log("entryFileNames", chunkInfo);
    //           return 'vuepress-website/app/js/[name]-[hash].js';
    //       },
    //       assetFileNames(chunkInfo) {
    //         console.log("assetFileNames", chunkInfo);
    //         return '[ext]/[name]-[hash].[ext]';
    //       },
    //       manualChunks: {
    //         //排除不需要打包的库
    //         // arcoDesign: ['@arco-design/web-vue'],
    //       },
    //     },
    //   }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@/assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      // 'vue-i18n': "vue-i18n/dist/vue-i18n.cjs.js",
    }
    // [{
    //   find: '@',
    //   replacement: fileURLToPath(new URL('./src', import.meta.url))
    // }, {
    //   find: '@/assets',
    //   replacement: fileURLToPath(new URL('./src/assets', import.meta.url))
    // }, {
    //   find: 'vue-i18n',
    //   replacement: 'vue-i18n/dist/vue-i18n.cjs.js'
    // }]
  },
  define: {
    "process.env": {}
  },
  server: {
    port: 2013, // 设置服务启动端口号
    // open: false, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    host: '0.0.0.0',
    // 设置代理
    proxy: {
      '/api': {
        target: 'https://captives.github.io/api',
        changeOrigin: true,
        secure: false,
        rewrite: (url: string) => url.replace('/api/', '/'),
      }
    }
  }
})
