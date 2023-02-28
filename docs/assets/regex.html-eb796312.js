import { o as openBlock, a as createElementBlock, j as createStaticVNode } from "./app-c3a13116.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="常用正则表达语句" tabindex="-1"><a class="header-anchor" href="#常用正则表达语句" aria-hidden="true">#</a> 常用正则表达语句</h1><h2 id="高亮段落内关键字" tabindex="-1"><a class="header-anchor" href="#高亮段落内关键字" aria-hidden="true">#</a> 高亮段落内关键字</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>keyword<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token string">&#39;ig&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> html <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token string">&quot;&lt;span style=&#39;color:#F43874;&#39;&gt;$1&lt;/span&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div>', 3);
const _hoisted_4 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_4);
}
const regex_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "regex.html.vue"]]);
export {
  regex_html as default
};
