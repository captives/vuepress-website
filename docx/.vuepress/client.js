// 客户端配置文件
import { provide, ref } from "vue";
import { defineClientConfig } from "@vuepress/client";
import AppClient from "./../../src/plugins/client";
import Layout  from './layouts/Layout.vue';
import HomeLayout  from './layouts/HomeLayout.vue';

//See:https://v2.vuepress.vuejs.org/zh/advanced/cookbook/usage-of-client-config.html
export default defineClientConfig({
    enhance({ app, router, siteData }) {
        console.log(app, router, siteData);
        app.use(AppClient);
    },
    setup() {
        // 供给一个值，可以被布局、页面和其他组件注入
        const count = ref(0);
        provide("count", count);
    },
    //组件数组，它们将会直接被放置在客户端 Vue 应用的根节点下。
    rootComponents: [],
    layouts:{
        Layout, 
        HomeLayout
    },
});
