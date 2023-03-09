import { o as openBlock, a as createElementBlock, b as createBaseVNode, k as withDirectives, v as vModelText, t as toDisplayString, e as createTextVNode, j as createStaticVNode } from "./app-9194e199.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _sfc_main = {
  el: "#example",
  data() {
    return {
      text: ""
    };
  },
  computed: {
    html() {
      let lines = this.text.split("\n");
      return lines.filter((item) => item.trim() != "").join("<br/>");
    }
  }
};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "n-和-br-互转",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#n-和-br-互转",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" \\n 和 <br/> 互转")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = { id: "example" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "输入",
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "text输出",
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "html输出",
  -1
  /* HOISTED */
);
const _hoisted_6 = ["innerHTML"];
const _hoisted_7 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//回车换行符转换成HTML格式</span>\n<span class="token function">formatTextToHtml</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">let</span> lines <span class="token operator">=</span> value<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    lines <span class="token operator">=</span> lines<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">//去除空行</span>\n    <span class="token keyword">return</span> lines<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item <span class="token operator">!=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;br/&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n<span class="token comment">//HTML格式转换成回车换行符</span>\n<span class="token function">formatHtmlToText</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">let</span> lines <span class="token operator">=</span> value<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;br/&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    lines <span class="token operator">=</span> lines<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">//去除空行</span>\n    <span class="token keyword">return</span> lines<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item <span class="token operator">!=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("div", _hoisted_2, [
      _hoisted_3,
      withDirectives(createBaseVNode(
        "textarea",
        {
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.text = $event)
        },
        " ",
        512
        /* NEED_PATCH */
      ), [
        [vModelText, $data.text]
      ]),
      _hoisted_4,
      createBaseVNode(
        "div",
        null,
        toDisplayString($data.text),
        1
        /* TEXT */
      ),
      _hoisted_5,
      createBaseVNode("div", { innerHTML: $options.html }, null, 8, _hoisted_6)
    ]),
    _hoisted_7
  ]);
}
const linefeedBrTransform_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "linefeed-br-transform.html.vue"]]);
export {
  linefeedBrTransform_html as default
};
