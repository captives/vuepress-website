import { App, AppConfig, defineAsyncComponent } from 'vue';
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import helper from "./helper";

export default {
    install(app: App<AppConfig>, options?: any) {
        app.use(ElementPlus, { zIndex: 3000 });
        Object.assign(app.config.globalProperties, helper);

        app.config.globalProperties.$videoList = [
            { label: "樱花小镇 1080P MP4", value: "/assets/medias/cherry_town.mp4" },
            { label: "森林 1080P MP4", value: "/assets/medias/forest.mp4" },
            { label: "Piper 720P", value: "/assets/medias/Piper_720P.mp4" },
            { label: "Piper 1080P", value: "/assets/medias/Piper_1080P.mp4" },
            { label: "汽车 绿幕 720P", value: "/assets/medias/green-screen-car.mp4" },
            { label: "锦里 音频 mp3", value: "/assets/medias/jinli.mp3" },
        ];

        // 静态存储
        app.config.globalProperties.$oss = (filePath: string) => {
            const url = new URL(window.location.href);
            if (import.meta.env.DEV) {
                url.port = window.location.protocol.indexOf('https') !=-1 ? window.location.port : '2013';
                url.pathname = filePath;
            } else {
                if(window.location.protocol.indexOf('https') !=-1){
                    url.pathname = "/vuepress-website/app/" + filePath;
                }else{
                    url.pathname = "dist/" + filePath;
                }
            }
            return url.href;
        };

        app.provide('videoList', app.config.globalProperties.$videoList);
        app.provide('oss', app.config.globalProperties.$oss);

        if (!!options?.isVue) {
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
        }

        /**
         * 追踪运行时错误
         * https://cn.vuejs.org/guide/best-practices/production-deployment.html#tracking-runtime-errors
         */
        app.config.warnHandler = (err, instance, info) => {
            // 追踪错误服务报告
        }
        app.config.errorHandler = (err, instance, info) => {
            // 追踪错误服务报告
        }
    },
};
