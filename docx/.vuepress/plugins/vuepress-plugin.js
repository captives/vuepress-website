import { getDirname, path, logger } from "@vuepress/utils";
import { searchPlugin } from "@vuepress/plugin-search";
import { containerPlugin } from "@vuepress/plugin-container";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { mermaidPlugin } from "./markdown-it-mermaid";

const __dirname = getDirname(import.meta.url);
const __workdir = path.resolve(__dirname, "./../../../src");
logger.info("src", __workdir);

export default [
    mermaidPlugin({
        name: "图表参数配置",
    }),
    // 使用本地简易搜索
    searchPlugin({
        locales: {
            "/": {
                placeholder: "Search",
            },
            "/guide/": {
                placeholder: "输入关键字",
            },
            "/poetry/": {
                placeholder: "输入古诗词名",
            },
        },
        isSearchable: (page) => page.path !== "/",
        maxSuggestions: 7,
        getExtraFields: (page) => page.frontmatter.tags ?? [],
    }),
    registerComponentsPlugin({
        // 把这个目录/子目录下的所有组件注册成全局组件
        componentsDir: path.resolve(__workdir, "./components"),
        componentsPatterns: ["**/*.vue"],
        getComponentName: (fileName) => {
            // const name = path.trimExt(fileName.replace(/\/|\\/g, "-"));
            const list = fileName.split("/");
            return path.trimExt(list[list.length - 1]);
        },
    }),
    containerPlugin({
        type: "tip",
        locales: {
            "/": { defaultInfo: "TIPS" },
            "/guide": { defaultInfo: "提示" },
        },
        before: (info) => `<div class="tip-block tip"><p class="title">${info}</p>`,
        after: () => "</div>\n",
    }),
    containerPlugin({
        type: "success",
        locales: {
            "/": { defaultInfo: "SUCCESS" },
            "/guide": { defaultInfo: "成功" },
        },
        before: (info) => `<div class="tip-block success"><p class="title">${info}</p>`,
        after: () => "</div>\n",
    }),
    containerPlugin({
        type: "warning",
        locales: {
            "/": { defaultInfo: "WARNING" },
            "/guide": { defaultInfo: "警告" },
        },
        before: (info) => `<div class="tip-block warning"><p class="title">${info}</p>`,
        after: () => "</div>\n",
    }),
    containerPlugin({
        type: "danger",
        locales: {
            "/": { defaultInfo: "ERROR" },
            "/guide": { defaultInfo: "错误" },
        },
        before: (info) => `<div class="tip-block danger"><p class="title">${info}</p>`,
        after: () => "</div>\n",
    }),
    containerPlugin({
        type: "details",
        before: (info) => `<details class="tip-block details"><summary>${info}</summary>`,
        after: () => "</details>\n",
    }),
];
