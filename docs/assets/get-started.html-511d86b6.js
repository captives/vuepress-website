import { r as resolveComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, e as createTextVNode, f as createVNode, j as createStaticVNode } from "./app-7cdc0156.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "快速开始",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#快速开始",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 快速开始")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "环境",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#环境",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 环境")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = {
  href: "https://code.visualstudio.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  [
    /* @__PURE__ */ createTextVNode("安装Visual Studio Code的插件"),
    /* @__PURE__ */ createBaseVNode("code", null, "TypeScript"),
    /* @__PURE__ */ createTextVNode("、"),
    /* @__PURE__ */ createBaseVNode("code", null, "Code Runner")
  ],
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "安装编译环境",
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createStaticVNode('<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> typescript\n</code></pre></div><p>编译<code>ts</code>文件</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>tsc index.ts\n</code></pre></div><ul><li>安装运行环境</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> ts-node tslib @types/node\n</code></pre></div><p>运行<code>ts</code>文件</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>ts-node index.ts\n</code></pre></div>', 7);
const _hoisted_13 = {
  href: "https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createTextVNode("安装 "),
        createBaseVNode("a", _hoisted_3, [
          createTextVNode("Visual Studio Code"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      _hoisted_4,
      _hoisted_5
    ]),
    _hoisted_6,
    createBaseVNode("p", null, [
      createTextVNode("更多参考"),
      createBaseVNode("a", _hoisted_13, [
        createTextVNode("5分钟上手TypeScript"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
const getStarted_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "get-started.html.vue"]]);
export {
  getStarted_html as default
};
