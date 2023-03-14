/**
 * 这是一个自定义开发的插件，使用mermaid解析markdown文件中的流程图
 */
import Mermaid from 'mermaid';
import type { Plugin } from '@vuepress/core';
import Murmur from './murmurhash3_32_gc';

const htmlEntities = (str) => String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const MermaidChart = (code) => {
    try {
        var needsUniqueId = "r-" + Murmur(code, 42).toString();
        console.log('id', needsUniqueId, code);

        // Mermaid.mermaidAPI.parse(code).then(data=>{
        //     console.log('- 3 ----',data);
        // });
        // TODO: 当前执行环境是node，document/window 无效
        // Mermaid.mermaidAPI.render(needsUniqueId, code).then(data => {
        //     console.log('- 4 ----',data);
        //     code = data.svg;
        // });
        return `<div class="mermaid"><pre>${code}</pre></div>`;
    } catch (err) {
        return `<pre>${htmlEntities(err.name)}: ${htmlEntities(err.message)}</pre>`;
    }
};

const MermaidPlugIn = (md, opts) => {
    Object.assign(MermaidPlugIn.default, opts);

    const { token: _token = "mermaid", ...dictionary } =
        MermaidPlugIn.default.dictionary;
    Mermaid.initialize(MermaidPlugIn.default);

    function replacer(_, p1, p2, p3) {
        p1 = dictionary[p1] ?? p1;
        p2 = dictionary[p2] ?? p2;
        return p2 === "" ? `${p1}\n` : `${p1} ${p2}${p3}`;
    }

    const defaultRenderer = md.renderer.rules.fence.bind(md.renderer.rules);
    md.renderer.rules.fence = (tokens, idx, opts, env, self) => {
        const token = tokens[idx];
        const code: string = token.content.trim();
        if (token.info.trim() === _token) {
            return MermaidChart(code.replace(/(.*?)[ \n](.*?)([ \n])/, replacer));
        }
        return defaultRenderer(tokens, idx, opts, env, self);
    };
};

MermaidPlugIn.default = {
    startOnLoad: false,
    securityLevel: "true",
    theme: "default",
    flowchart: {
        htmlLabels: false,
        useMaxWidth: true,
    },
    dictionary: {
        token: "mermaid",
    },
};


export const mermaidPlugin = (options = {}): Plugin => {
    return {
        name: "vuepress-plugin-mermaid",
        extendsMarkdown(md: any) {
            md.use(MermaidPlugIn);
        }
    };
};
