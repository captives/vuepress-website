/**
 * 这是一个自定义开发的插件，使用mermaid解析markdown文件中的流程图
 */
import mermaid, { type MermaidConfig } from 'mermaid';
import type { Plugin } from '@vuepress/core';

const mermaidChart = async (code: string) => {
    try {
        mermaid.parseError = function (err, hash) {
            console.log('err', hash);
        };

        const html = await mermaid.parse(code);
        console.log(html);
        return `<div class="mermaid">${code}</div>`
    } catch ({ str, hash }) {
        return `<pre>${str}</pre>`
    }
}

const MermaidPlugin2 = (md) => {
    md.mermaid = mermaid;
    const temp = md.renderer.rules.fence.bind(md.renderer.rules)
    md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
        const token = tokens[idx]
        const code = token.content.trim();

        if (token.info === 'mermaid') {
            console.log('\n\n 0000', code);
            return mermaidChart(code)
        }

        const firstLine = code.split(/\n/)[0].trim()
        if (firstLine === 'gantt' || firstLine === 'sequenceDiagram' || firstLine.match(/^graph (?:TB|BT|RL|LR|TD);?$/)) {
            return mermaidChart(code)
        }

        return temp(tokens, idx, options, env, slf)
    }
}

export const mermaidPlugin = (options = {}): Plugin => {
    return {
        name: "vuepress-plugin-mermaid",
        extendsMarkdown(md: any) {
            // md.use(MermaidPlugin2);
        }
    };
};
