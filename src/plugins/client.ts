import { App, AppConfig, defineAsyncComponent } from 'vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import '@/theme/index.scss';
import helper from "../utils/helper";

export default {
    install(app: App<AppConfig>, options?: any) {
        app.use(ElementPlus, { zIndex: 3000 });
        //注册所有ele 图标
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component('Icon' + key, component);
        }

        Object.assign(app.config.globalProperties, helper);

        console.log('env', import.meta.env);

        app.config.globalProperties.$videoList = [
            { label: "樱花小镇 1080P MP4", value: "/assets/medias/cherry_town.mp4" },
            { label: "森林 1080P MP4", value: "/assets/medias/forest.mp4" },
            { label: "Piper 720P", value: "/assets/medias/Piper_720P.mp4" },
            { label: "Piper 1080P", value: "/assets/medias/Piper_1080P.mp4" },
            { label: "汽车 绿幕 720P", value: "/assets/medias/green-screen-car.mp4" },
            { label: "锦里 音频 mp3", value: "/assets/medias/jinli.mp3" },
        ];

        // 静态存储
        app.config.globalProperties.$oss = (filePath?: string | null) => {
            const url = new URL(window.location.href);
            const isSSL: boolean = window.location.protocol.indexOf('https') != -1;
            if (import.meta.env.DEV) {
                url.port = isSSL ? window.location.port : '2013';
                url.pathname = (isSSL ? "/vuepress-website/app/" : "") + filePath;
            } else {
                url.pathname = (isSSL ? "/vuepress-website/app/" : "dist/") + filePath;
            }
            return url.href;
        };

        app.provide('videoList', app.config.globalProperties.$videoList);
        app.provide('oss', app.config.globalProperties.$oss);

        /**
         * 注册目录内的所有组件为全局组件
         * https://cn.vitejs.dev/guide/features.html#glob-import
         */
        const components = import.meta.glob('@/components/**/*.vue');
        for (let [path, value] of Object.entries(components)) {
            const name: string = path.slice(path.lastIndexOf('/') + 1, path.indexOf('.vue'));
            // @ts-ignore;
            app.component(name, defineAsyncComponent(value));
        }

        /**
         * 追踪运行时错误
         * https://cn.vuejs.org/guide/best-practices/production-deployment.html#tracking-runtime-errors
         */
        // app.config.warnHandler = (err, instance, info) => {
        //     // 追踪错误服务报告
        // }
        // app.config.errorHandler = (err, instance, info) => {
        //     // 追踪错误服务报告
        // }
    },
};
