//vuepress 配置文件
import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { path } from "@vuepress/utils";
import plugins from "./plugins/vuepress-plugin";
import markdown from "./plugins/vuepress-markdown";
import locales from "./config/locales";
import theme from "./theme";

export default defineUserConfig({
    lang: "/",
    title: "你好， VuePress ！",
    description: "这是我的第一个 VuePress 站点",
    dest: path.resolve(__dirname, "./../../docs"),
    port: 2023,
    alias: {
        "@": path.resolve(__dirname, "./../../src"),
        "@/assets": path.resolve(__dirname, "./../../src/assets"),
        "@/views": path.resolve(__dirname, "./../../src/views"),
        "@/pages": path.resolve(__dirname, "./../../src/pages"),
    },
    define: {
        VUE_APP_API: "https://captives.github.io/api",
    },
    debug: true,
    theme: defaultTheme(theme),
    locales,
    plugins,
    markdown,
});
