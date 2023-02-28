import { path, logger } from "@vuepress/utils";
const src = path.resolve(__dirname, "./../../../src/");

export default {
    headers: {
        level: [2, 3, 4],
    },
    toc: {
        level: [2, 3, 4, 5],
        pattern: /\@\[toc\]|\[\[toc\]\]/i, //匹配[[toc]]或@[toc]
    },
    code: {
        lineNumbers: 6, //显示行号
    },
    // extractHeaders: {
    //     level: ['h1', 'h2', 'h3', 'h4'] //提取出来缓存的标题
    // },
    importCode: {
        //导入代码块
        handleImportPath: (str) => str.replace(/^@src/, src),
    },
}