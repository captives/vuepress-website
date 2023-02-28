import { r as resolveComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, e as createTextVNode, f as createVNode, j as createStaticVNode } from "./app-7cdc0156.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const index_html_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "web-api",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#web-api",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Web API")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = {
  href: "https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = {
  href: "https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<blockquote><p>获取随机颜色</p></blockquote><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code> <span class="token string">&quot;#&quot;</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token number">0xFFFFFF</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>\n</code></pre></div>', 2);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          createBaseVNode("a", _hoisted_2, [
            createTextVNode("Intersection Observer API"),
            createVNode(_component_ExternalLinkIcon)
          ]),
          createTextVNode(" 提供了一种异步检测目标元素与祖先元素或 viewport 相交情况变化的方法。 过去，要检测一个元素是否可见或者两个元素是否相交并不容易，很多解决办法不可靠或性能很差。然而，随着互联网的发展，这种需求却与日俱增，比如，下面这些情况都需要用到相交检测：")
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          createBaseVNode("a", _hoisted_3, [
            createTextVNode("Fetch API"),
            createVNode(_component_ExternalLinkIcon)
          ]),
          createTextVNode(" 提供了一个获取资源的接口（包括跨域请求）。任何使用过 XMLHttpRequest 的人都能轻松上手，而且新的 API 提供了更强大和灵活的功能集。")
        ])
      ])
    ]),
    _hoisted_4
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
