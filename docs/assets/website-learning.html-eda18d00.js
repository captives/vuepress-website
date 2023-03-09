import { r as resolveComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, e as createTextVNode, f as createVNode, j as createStaticVNode } from "./app-9194e199.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="vue-学习资源收藏" tabindex="-1"><a class="header-anchor" href="#vue-学习资源收藏" aria-hidden="true">#</a> Vue 学习资源收藏</h1><h2 id="vue-2-生态相关" tabindex="-1"><a class="header-anchor" href="#vue-2-生态相关" aria-hidden="true">#</a> Vue 2 生态相关</h2><h2 id="vue-3-生态相关" tabindex="-1"><a class="header-anchor" href="#vue-3-生态相关" aria-hidden="true">#</a> Vue 3 生态相关</h2>', 3);
const _hoisted_4 = { class: "tip-block details" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "summary",
  null,
  "Vite介绍",
  -1
  /* HOISTED */
);
const _hoisted_6 = {
  href: "https://cn.vitejs.dev/guide/why.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Vite 有多快？在 Repl.it 上从零启动一个基于 Vite 的 React 应用，浏览器页面加载完毕的时候，CRA（create-react-app）甚至还没有装完依赖。",
  -1
  /* HOISTED */
);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "如果你还没听说过 Vite 到底是什么，可以到这里了解一下项目的设计初衷。如果你想要了解 Vite 跟其它一些类似的工具有什么区别，可以参考这里的对比。",
  -1
  /* HOISTED */
);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "ppt模板下载站点",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#ppt模板下载站点",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" PPT模板下载站点")
  ],
  -1
  /* HOISTED */
);
const _hoisted_10 = {
  href: "http://www.1ppt.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_11 = {
  href: "http://www.51pptmoban.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_12 = /* @__PURE__ */ createBaseVNode(
  "hr",
  null,
  null,
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("details", _hoisted_4, [
      _hoisted_5,
      createBaseVNode("p", null, [
        createBaseVNode("a", _hoisted_6, [
          createTextVNode("Vite"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode("（法语意思是 “快”，发音为 /vit/，类似 veet）是一种全新的前端构建工具。你可以把它理解为一个开箱即用的开发服务器 + 打包工具的组合，但是更轻更快。Vite 利用浏览器原生的 ES 模块支持和用编译到原生的语言开发的工具（如 esbuild）来提供一个快速且现代的开发体验。")
      ]),
      _hoisted_7,
      _hoisted_8
    ]),
    _hoisted_9,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_10, [
        createTextVNode("www.1ppt.com"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createBaseVNode("a", _hoisted_11, [
        createTextVNode("www.51pptmoban.com"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_12
  ]);
}
const websiteLearning_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "website-learning.html.vue"]]);
export {
  websiteLearning_html as default
};
