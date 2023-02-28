import { r as resolveComponent, o as openBlock, a as createElementBlock, f as createVNode, b as createBaseVNode, e as createTextVNode, j as createStaticVNode } from "./app-e6eab0de.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "window-浏览器页面事件",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#window-浏览器页面事件",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" window 浏览器页面事件")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "浏览器选项卡获取焦点和失去焦点",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#浏览器选项卡获取焦点和失去焦点",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 浏览器选项卡获取焦点和失去焦点")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;visibilitychange&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>visibilityState <span class="token operator">==</span> <span class="token string">&quot;hidden&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        document<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">&quot;选项卡被隐藏&quot;</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n        document<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">&quot;选项卡被激活&quot;</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="浏览器选项卡关闭" tabindex="-1"><a class="header-anchor" href="#浏览器选项卡关闭" aria-hidden="true">#</a> 浏览器选项卡关闭</h2>', 2);
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;beforeunload&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>listened<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> confirmationMessage <span class="token operator">=</span> <span class="token string">&quot;要记得保存！你确定要离开我吗？&quot;</span><span class="token punctuation">;</span>\n        <span class="token punctuation">(</span>e <span class="token operator">||</span> window<span class="token punctuation">.</span>event<span class="token punctuation">)</span><span class="token punctuation">.</span>returnValue <span class="token operator">=</span> confirmationMessage<span class="token punctuation">;</span> <span class="token comment">// 兼容 Gecko + IE</span>\n        <span class="token keyword">return</span> confirmationMessage<span class="token punctuation">;</span> <span class="token comment">// 兼容 Gecko + Webkit, Safari, Chrome</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="页面开始打印-打印结束后事件" tabindex="-1"><a class="header-anchor" href="#页面开始打印-打印结束后事件" aria-hidden="true">#</a> 页面开始打印/打印结束后事件</h2>', 2);
const _hoisted_7 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;beforeprint&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;准备打印&#39;</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nwindow<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;afterprint&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;打印完成/取消&#39;</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其它页面更改存储触发" tabindex="-1"><a class="header-anchor" href="#其它页面更改存储触发" aria-hidden="true">#</a> 其它页面更改存储触发</h2>', 2);
const _hoisted_9 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;storage&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;其它页面更新存储&quot;</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>key <span class="token operator">+</span> <span class="token string">&#39; 键已经从 &#39;</span> <span class="token operator">+</span> event<span class="token punctuation">.</span>oldValue <span class="token operator">+</span> <span class="token string">&#39; 改变为 &#39;</span> <span class="token operator">+</span> event<span class="token punctuation">.</span>newValue <span class="token operator">+</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div>', 1);
function _sfc_render(_ctx, _cache) {
  const _component_WindowVisibilityState = resolveComponent("WindowVisibilityState");
  const _component_WindowEventChange = resolveComponent("WindowEventChange");
  const _component_WindowBeforePrint = resolveComponent("WindowBeforePrint");
  const _component_WindowEventStorage = resolveComponent("WindowEventStorage");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    createVNode(_component_WindowVisibilityState),
    _hoisted_3,
    createVNode(_component_WindowEventChange),
    _hoisted_5,
    createVNode(_component_WindowBeforePrint),
    _hoisted_7,
    createVNode(_component_WindowEventStorage),
    _hoisted_9
  ]);
}
const windowEvent_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "window-event.html.vue"]]);
export {
  windowEvent_html as default
};
