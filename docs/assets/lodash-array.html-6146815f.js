import { r as resolveComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, e as createTextVNode, f as createVNode, g as withCtx, j as createStaticVNode } from "./app-46e25049.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="lodash-数组-array" tabindex="-1"><a class="header-anchor" href="#lodash-数组-array" aria-hidden="true">#</a> lodash 数组 Array</h1><h2 id="检索" tabindex="-1"><a class="header-anchor" href="#检索" aria-hidden="true">#</a> 检索</h2><h3 id="indexof-array-value-fromindex-0" tabindex="-1"><a class="header-anchor" href="#indexof-array-value-fromindex-0" aria-hidden="true">#</a> _.indexOf(array, value, [fromIndex = 0])</h3><details class="tip-block details"><summary>参数</summary><ul><li>array (Array): 需要查找的数组。</li><li>value (*): 需要查找的值。</li><li>[fromIndex=0] (number): 开始查询的位置。 返回值</li><li>(number): 返回 值value在数组中的索引位置, 没有找到为返回-1。</li></ul></details>', 4);
const _hoisted_5 = {
  href: "http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "value",
  -1
  /* HOISTED */
);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "array",
  -1
  /* HOISTED */
);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "fromIndex",
  -1
  /* HOISTED */
);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "array",
  -1
  /* HOISTED */
);
const _hoisted_10 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; 1</span>\n \n<span class="token comment">// Search from the `fromIndex`.</span>\n_<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; 3</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="findindex-array-predicate-identity-fromindex-0" tabindex="-1"><a class="header-anchor" href="#findindex-array-predicate-identity-fromindex-0" aria-hidden="true">#</a> _.findIndex(array, [predicate = _.identity], [fromIndex=0])</h3><details class="tip-block details"><summary>参数</summary><ul><li>array (Array): 要搜索的数组。</li><li>[predicate=_.identity] (Array|Function|Object|string): 这个函数会在每一次迭代调用。</li><li>[fromIndex=0] (number): The index to search from.</li></ul><p>返回值</p><ul><li>(number): 返回找到元素的 索引值（index），否则返回 -1</li></ul></details><p>该方法类似<code>_.find</code>，区别是该方法返回第一个通过<code>predicate</code>判断为真值的元素的索引值（index），而不是元素本身。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> users <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> <span class="token string-property property">&#39;user&#39;</span><span class="token operator">:</span> <span class="token string">&#39;barney&#39;</span><span class="token punctuation">,</span>  <span class="token string-property property">&#39;active&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> <span class="token string-property property">&#39;user&#39;</span><span class="token operator">:</span> <span class="token string">&#39;fred&#39;</span><span class="token punctuation">,</span>    <span class="token string-property property">&#39;active&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> <span class="token string-property property">&#39;user&#39;</span><span class="token operator">:</span> <span class="token string">&#39;pebbles&#39;</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;active&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n \n_<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token parameter">item</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>user <span class="token operator">==</span> <span class="token string">&#39;barney&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; 0</span>\n \n<span class="token comment">// The `_.matches` iteratee shorthand.</span>\n_<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;user&#39;</span><span class="token operator">:</span> <span class="token string">&#39;fred&#39;</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;active&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; 1</span>\n \n<span class="token comment">// The `_.matchesProperty` iteratee shorthand.</span>\n_<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;active&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; 0</span>\n \n<span class="token comment">// The `_.property` iteratee shorthand.</span>\n_<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token string">&#39;active&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; 2</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="findlastindex-array-predicate-identity-fromindex-array-length-1" tabindex="-1"><a class="header-anchor" href="#findlastindex-array-predicate-identity-fromindex-array-length-1" aria-hidden="true">#</a> _.findLastIndex(array, [predicate = _.identity], [fromIndex=array.length-1])</h3><details class="tip-block details"><summary>参数</summary><ul><li>array (Array): 要搜索的数组。</li><li>[predicate=_.identity] (Array|Function|Object|string): 这个函数会在每一次迭代调用。</li><li>[fromIndex=array.length-1] (number): The index to search from.</li></ul><p>返回值</p><ul><li>(number): 返回找到元素的 索引值（index），否则返回 -1</li></ul></details><p>这个方式类似<code>_.findIndex</code>，区别是它是从右到左的迭代集合array中的元素。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> users <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> <span class="token string-property property">&#39;user&#39;</span><span class="token operator">:</span> <span class="token string">&#39;barney&#39;</span><span class="token punctuation">,</span>  <span class="token string-property property">&#39;active&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> <span class="token string-property property">&#39;user&#39;</span><span class="token operator">:</span> <span class="token string">&#39;fred&#39;</span><span class="token punctuation">,</span>    <span class="token string-property property">&#39;active&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> <span class="token string-property property">&#39;user&#39;</span><span class="token operator">:</span> <span class="token string">&#39;pebbles&#39;</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;active&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n \n_<span class="token punctuation">.</span><span class="token function">findLastIndex</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> o<span class="token punctuation">.</span>user <span class="token operator">==</span> <span class="token string">&#39;pebbles&#39;</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; 2</span>\n \n<span class="token comment">// The `_.matches` iteratee shorthand.</span>\n_<span class="token punctuation">.</span><span class="token function">findLastIndex</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;user&#39;</span><span class="token operator">:</span> <span class="token string">&#39;barney&#39;</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;active&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; 0</span>\n \n<span class="token comment">// The `_.matchesProperty` iteratee shorthand.</span>\n_<span class="token punctuation">.</span><span class="token function">findLastIndex</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;active&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; 2</span>\n \n<span class="token comment">// The `_.property` iteratee shorthand.</span>\n_<span class="token punctuation">.</span><span class="token function">findLastIndex</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token string">&#39;active&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; 0</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lastindexof-array-value-fromindex-array-length-1" tabindex="-1"><a class="header-anchor" href="#lastindexof-array-value-fromindex-array-length-1" aria-hidden="true">#</a> _.lastIndexOf(array, value, [fromIndex=array.length-1])</h3><p>这个方法类似<code>_.indexOf</code>，区别是它是从右到左遍历<code>array</code>的元素。</p><details class="tip-block details"><summary>参数</summary><ul><li>array (Array): 要搜索的数组。</li><li>value (*): 要搜索的值。</li><li>[fromIndex=array.length-1] (number): 开始搜索的索引值。</li></ul><p>返回值</p><ul><li>(number): 返回匹配值的索引值，否则返回 -1。</li></ul></details><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>_.lastIndexOf([1, 2, 1, 2], 2);\n// =&gt; 3\n \n// Search from the `fromIndex`.\n_.lastIndexOf([1, 2, 1, 2], 2, 2);\n// =&gt; 1\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="head-array" tabindex="-1"><a class="header-anchor" href="#head-array" aria-hidden="true">#</a> _.head(array)</h3><p>获取数组 array 的第一个元素。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">head</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; 1</span>\n \n_<span class="token punctuation">.</span><span class="token function">head</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; undefined</span>\n</code></pre></div><h3 id="last-array" tabindex="-1"><a class="header-anchor" href="#last-array" aria-hidden="true">#</a> _.last(array)</h3><p>获取array中的最后一个元素。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">last</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; 3</span>\n</code></pre></div><h3 id="initial-array" tabindex="-1"><a class="header-anchor" href="#initial-array" aria-hidden="true">#</a> _.initial(array)</h3><p>获取数组<code>array</code>中除了最后一个元素之外的所有元素（去除数组array中的最后一个元素）。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">initial</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [1, 2]</span>\n</code></pre></div><h3 id="tail-array" tabindex="-1"><a class="header-anchor" href="#tail-array" aria-hidden="true">#</a> _.tail(array)</h3><p>返回 array 数组的切片，除了array数组第一个元素以外的全部元素。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">tail</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [2, 3]</span>\n</code></pre></div><h3 id="nth-array-n-0" tabindex="-1"><a class="header-anchor" href="#nth-array-n-0" aria-hidden="true">#</a> _.nth(array, [n=0])</h3><p>获取array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n \n_<span class="token punctuation">.</span><span class="token function">nth</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; &#39;b&#39;</span>\n \n_<span class="token punctuation">.</span><span class="token function">nth</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; &#39;c&#39;;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="take-array-n-1" tabindex="-1"><a class="header-anchor" href="#take-array-n-1" aria-hidden="true">#</a> _.take(array, [n=1])</h3><p>创建一个数组切片，从array数组的起始元素开始提取n个元素。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [1]</span>\n \n_<span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [1, 2]</span>\n \n_<span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [1, 2, 3]</span>\n \n_<span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; []</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="takeright-array-n-1" tabindex="-1"><a class="header-anchor" href="#takeright-array-n-1" aria-hidden="true">#</a> _.takeRight(array, [n=1])</h3><p>创建一个数组切片，从array数组的最后一个元素开始提取n个元素。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">takeRight</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [3]</span>\n \n_<span class="token punctuation">.</span><span class="token function">takeRight</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [2, 3]</span>\n \n_<span class="token punctuation">.</span><span class="token function">takeRight</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [1, 2, 3]</span>\n \n_<span class="token punctuation">.</span><span class="token function">takeRight</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; []</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="takerightwhile-array-predicate-identity" tabindex="-1"><a class="header-anchor" href="#takerightwhile-array-predicate-identity" aria-hidden="true">#</a> _.takeRightWhile(array, [predicate = _.identity])</h3><details class="tip-block details"><summary>参数</summary><ul><li>array (Array): 要检索的数组。</li><li>[predicate = _.identity] (Array|Function|Object|string): 每次迭代调用的函数。</li></ul><p>返回 -(Array): 返回 array 数组的切片。</p></details><p>从array数组的最后一个元素开始提取元素，直到<code>predicate</code>返回假值。<code>predicate</code>会传入三个参数： <code>(value, index, array)</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> users <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> <span class="token string-property property">&#39;user&#39;</span><span class="token operator">:</span> <span class="token string">&#39;barney&#39;</span><span class="token punctuation">,</span>  <span class="token string-property property">&#39;active&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> <span class="token string-property property">&#39;user&#39;</span><span class="token operator">:</span> <span class="token string">&#39;fred&#39;</span><span class="token punctuation">,</span>    <span class="token string-property property">&#39;active&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> <span class="token string-property property">&#39;user&#39;</span><span class="token operator">:</span> <span class="token string">&#39;pebbles&#39;</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;active&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n \n_<span class="token punctuation">.</span><span class="token function">takeRightWhile</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span>item<span class="token punctuation">.</span>active<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; objects for [&#39;fred&#39;, &#39;pebbles&#39;]</span>\n \n<span class="token comment">// The `_.matches` iteratee shorthand.</span>\n_<span class="token punctuation">.</span><span class="token function">takeRightWhile</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;user&#39;</span><span class="token operator">:</span> <span class="token string">&#39;pebbles&#39;</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;active&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; objects for [&#39;pebbles&#39;]</span>\n \n<span class="token comment">// The `_.matchesProperty` iteratee shorthand.</span>\n_<span class="token punctuation">.</span><span class="token function">takeRightWhile</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;active&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; objects for [&#39;fred&#39;, &#39;pebbles&#39;]</span>\n \n<span class="token comment">// The `_.property` iteratee shorthand.</span>\n_<span class="token punctuation">.</span><span class="token function">takeRightWhile</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token string">&#39;active&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; []</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="takewhile-array-predicate-identity" tabindex="-1"><a class="header-anchor" href="#takewhile-array-predicate-identity" aria-hidden="true">#</a> _.takeWhile(array, [predicate = _.identity])</h3><details class="tip-block details"><summary>参数</summary><ul><li>array (Array): 要检索的数组。</li><li>[predicate = _.identity] (Array|Function|Object|string): 每次迭代调用的函数。</li></ul><p>返回 -(Array): 返回 array 数组的切片。</p></details><p>从<code>array</code>数组的起始元素开始提取元素，直到<code>predicate</code>返回假值。<code>predicate</code>会传入三个参数：<code>(value, index, array)</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> users <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> <span class="token string-property property">&#39;user&#39;</span><span class="token operator">:</span> <span class="token string">&#39;barney&#39;</span><span class="token punctuation">,</span>  <span class="token string-property property">&#39;active&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> <span class="token string-property property">&#39;user&#39;</span><span class="token operator">:</span> <span class="token string">&#39;fred&#39;</span><span class="token punctuation">,</span>    <span class="token string-property property">&#39;active&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> <span class="token string-property property">&#39;user&#39;</span><span class="token operator">:</span> <span class="token string">&#39;pebbles&#39;</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;active&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n \n_<span class="token punctuation">.</span><span class="token function">takeWhile</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span>item<span class="token punctuation">.</span>active<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; objects for [&#39;barney&#39;, &#39;fred&#39;]</span>\n \n<span class="token comment">// The `_.matches` iteratee shorthand.</span>\n_<span class="token punctuation">.</span><span class="token function">takeWhile</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;user&#39;</span><span class="token operator">:</span> <span class="token string">&#39;barney&#39;</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;active&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; objects for [&#39;barney&#39;]</span>\n \n<span class="token comment">// The `_.matchesProperty` iteratee shorthand.</span>\n_<span class="token punctuation">.</span><span class="token function">takeWhile</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;active&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; objects for [&#39;barney&#39;, &#39;fred&#39;]</span>\n \n<span class="token comment">// The `_.property` iteratee shorthand.</span>\n_<span class="token punctuation">.</span><span class="token function">takeWhile</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token string">&#39;active&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; []</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="slice-array-start-0-end-array-length" tabindex="-1"><a class="header-anchor" href="#slice-array-start-0-end-array-length" aria-hidden="true">#</a> _.slice(array, [start=0], [end=array.length])</h3><details class="tip-block details"><summary>参数</summary><ul><li>array (Array): 要裁剪数组。</li><li>[start=0] (number): 开始位置。</li><li>[end=array.length] (number): 结束位置。</li></ul><p>返回</p><ul><li>(Array): 返回 数组array 裁剪部分的新数组。</li></ul></details><p>裁剪数组<code>array</code>，从<code>start</code>位置开始到<code>end</code>结束，但不包括<code>end</code>本身的位置。</p>', 45);
const _hoisted_55 = {
  href: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_56 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> evens <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt;  [1, 2, 3, 4]</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>evens<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [2, 3]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分组" tabindex="-1"><a class="header-anchor" href="#分组" aria-hidden="true">#</a> 分组</h2><h3 id="chunk-array-size-1" tabindex="-1"><a class="header-anchor" href="#chunk-array-size-1" aria-hidden="true">#</a> _.chunk(array, [size=1])</h3><p>将数组<code>array</code>拆分成多个<code>size</code>长度的区块，并将这些区块组成一个新数组。 如果<code>array</code>无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">chunk</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [[&#39;a&#39;, &#39;b&#39;], [&#39;c&#39;, &#39;d&#39;]]</span>\n \n_<span class="token punctuation">.</span><span class="token function">chunk</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [[&#39;a&#39;, &#39;b&#39;, &#39;c&#39;], [&#39;d&#39;]]</span>\n</code></pre></div><h3 id="zip-arrays" tabindex="-1"><a class="header-anchor" href="#zip-arrays" aria-hidden="true">#</a> _.zip([arrays])</h3><p>创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">zip</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;fred&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;barney&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [[&#39;fred&#39;, 30, true], [&#39;barney&#39;, 40, false]]</span>\n</code></pre></div><h3 id="unzip-array" tabindex="-1"><a class="header-anchor" href="#unzip-array" aria-hidden="true">#</a> _.unzip(array)</h3><p>这个方法类似于<code>_.zip</code>，除了它接收分组元素的数组，并且创建一个数组，分组元素到打包前的结构。（返回数组的第一个元素包含所有的输入数组的第一元素，第一个元素包含了所有的输入数组的第二元素，依此类推。）</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> zipped <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">zip</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;fred&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;barney&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [[&#39;fred&#39;, 30, true], [&#39;barney&#39;, 40, false]]</span>\n \n_<span class="token punctuation">.</span><span class="token function">unzip</span><span class="token punctuation">(</span>zipped<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [[&#39;fred&#39;, &#39;barney&#39;], [30, 40], [true, false]]</span>\n</code></pre></div><h3 id="zipwith-arrays-iteratee-identity" tabindex="-1"><a class="header-anchor" href="#zipwith-arrays-iteratee-identity" aria-hidden="true">#</a> _.zipWith([arrays], [iteratee = _.identity])</h3><details class="tip-block details"><summary>参数</summary><ul><li>[arrays] (...Array): 要处理的数组。</li><li>[iteratee=_.identity] (Function): 函数用来组合分组的值。</li></ul><p>返回</p><ul><li>(Array): 返回分组元素的新数组。</li></ul></details><p>这个方法类似于<code>_.zip</code>，不同之处在于它接受一个 iteratee（迭代函数），来 指定分组的值应该如何被组合。 该iteratee调用每个组的元素： (...group).</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">zipWith</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> b <span class="token operator">+</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [111, 222]</span>\n</code></pre></div><h3 id="unzipwith-array-iteratee-identity" tabindex="-1"><a class="header-anchor" href="#unzipwith-array-iteratee-identity" aria-hidden="true">#</a> _.unzipWith(array, [iteratee = _.identity])</h3><details class="tip-block details"><summary>参数</summary><ul><li>[arrays] (...Array): 要处理的数组。</li><li>[iteratee=_.identity] (Function): 函数用来组合分组的值。</li></ul><p>返回</p><ul><li>(Array): 返回分组元素的新数组。</li></ul></details><p>此方法类似于<code>_.unzip</code>，除了它接受一个iteratee指定重组值应该如何被组合。iteratee 调用时会传入每个分组的值： (...group)。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> zipped <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">zip</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [[1, 10, 100], [2, 20, 200]]</span>\n \n_<span class="token punctuation">.</span><span class="token function">unzipWith</span><span class="token punctuation">(</span>zipped<span class="token punctuation">,</span> _<span class="token punctuation">.</span>add<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [3, 30, 300]</span>\n</code></pre></div><h2 id="合并" tabindex="-1"><a class="header-anchor" href="#合并" aria-hidden="true">#</a> 合并</h2><h3 id="join-array-separator" tabindex="-1"><a class="header-anchor" href="#join-array-separator" aria-hidden="true">#</a> _.join(array, [separator=&#39;,&#39;])</h3><p>将 array 中的所有元素转换为由 separator 分隔的字符串</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;~&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; &#39;a~b~c&#39;</span>\n</code></pre></div><h3 id="concat-array-values" tabindex="-1"><a class="header-anchor" href="#concat-array-values" aria-hidden="true">#</a> _.concat(array, [values])</h3><p>创建一个新数组，将<code>array</code>与任何数组 或 值连接在一起。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> other <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n \nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>other<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [1, 2, 3, [4]]</span>\n \nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [1]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="union-arrays" tabindex="-1"><a class="header-anchor" href="#union-arrays" aria-hidden="true">#</a> _.union([arrays])</h3>', 27);
const _hoisted_83 = {
  href: "http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_84 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">union</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token comment">// =&gt; [2, 1, 3]</span>\n</code></pre></div><h3 id="unionby-arrays-iteratee-identity" tabindex="-1"><a class="header-anchor" href="#unionby-arrays-iteratee-identity" aria-hidden="true">#</a> _.unionBy([arrays], [iteratee = _.identity])</h3>', 2);
const _hoisted_86 = {
  href: "https://www.lodashjs.com/docs/lodash.union",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_87 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "iteratee",
  -1
  /* HOISTED */
);
const _hoisted_88 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">unionBy</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2.1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1.2</span><span class="token punctuation">,</span> <span class="token number">2.3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span>floor<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [2.1, 1.2]</span>\n \n<span class="token comment">// The `_.property` iteratee shorthand.</span>\n_<span class="token punctuation">.</span><span class="token function">unionBy</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;x&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [{ &#39;x&#39;: 1 }, { &#39;x&#39;: 2 }]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="unionwith-arrays-comparator" tabindex="-1"><a class="header-anchor" href="#unionwith-arrays-comparator" aria-hidden="true">#</a> _.unionWith([arrays], [comparator])</h3><details class="tip-block details"><summary>参数</summary><ul><li>[arrays] (...Array): 要检查的数组。</li><li>[comparator] (Function): 比较函数，调用每个元素。</li></ul><p>返回</p><ul><li>(Array): 返回一个新的联合数组。</li></ul></details>', 3);
const _hoisted_91 = {
  href: "https://www.lodashjs.com/docs/lodash.union",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_92 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "comparator",
  -1
  /* HOISTED */
);
const _hoisted_93 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "arrays",
  -1
  /* HOISTED */
);
const _hoisted_94 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "comparator",
  -1
  /* HOISTED */
);
const _hoisted_95 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "(arrVal, othVal)",
  -1
  /* HOISTED */
);
const _hoisted_96 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> objects <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;y&#39;</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;y&#39;</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> others <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;y&#39;</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;y&#39;</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n \n_<span class="token punctuation">.</span><span class="token function">unionWith</span><span class="token punctuation">(</span>objects<span class="token punctuation">,</span> others<span class="token punctuation">,</span> _<span class="token punctuation">.</span>isEqual<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [{ &#39;x&#39;: 1, &#39;y&#39;: 2 }, { &#39;x&#39;: 2, &#39;y&#39;: 1 }, { &#39;x&#39;: 1, &#39;y&#39;: 1 }]</span>\n</code></pre></div><h2 id="过滤" tabindex="-1"><a class="header-anchor" href="#过滤" aria-hidden="true">#</a> 过滤</h2><h3 id="difference-array-values" tabindex="-1"><a class="header-anchor" href="#difference-array-values" aria-hidden="true">#</a> _.difference(array, [values])</h3><p>创建一个具有唯一<code>array</code>值的数组，每个值不包含在其他给定的数组中。该方法使用SameValueZero做相等比较。结果值是从第一数组中选择, 顺序是由第一个数组中的顺序确定。</p><div class="tip-block warning"><p class="title">注意：</p><p>创建一个新数组，这个数组中的值，为第一个参数（array）排除了给定数组中的值。</p></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">difference</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [3, 1]</span>\n</code></pre></div><h3 id="differenceby-array-values-iteratee-identity" tabindex="-1"><a class="header-anchor" href="#differenceby-array-values-iteratee-identity" aria-hidden="true">#</a> _.differenceBy(array, [values], [iteratee = _.identity])</h3><details class="tip-block details"><summary>参数</summary><ul><li>array (Array): 要检查的数组。</li><li>[values] (...Array): 排除的值。</li><li>[iteratee=_.identity] (Array|Function|Object|string): iteratee 调用每个元素。</li></ul><p>返回： (Array): 返回一个过滤值后的新数组。</p></details><p>这个方法类似<code>_.difference</code> ，增加一个 <code>iteratee</code>（注：迭代器）， 调用<code>array</code>和<code>values</code>中的每个元素以产生比较的标准。 结果值是从第一数组中选择。<code>iteratee</code>会调用一个参数：(value)。</p><blockquote><p>首先使用迭代器分别迭代array 和 values中的每个元素，返回的值作为比较值</p></blockquote>', 10);
const _hoisted_106 = { class: "tip-block warning" };
const _hoisted_107 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "title" },
  "注意：",
  -1
  /* HOISTED */
);
const _hoisted_108 = {
  href: "https://www.lodashjs.com/docs/lodash.differenceBy#pullAllBy",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_109 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//迭代器把值Math.floor后进行比较，返回的原值</span>\n_<span class="token punctuation">.</span><span class="token function">differenceBy</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3.1</span><span class="token punctuation">,</span> <span class="token number">2.2</span><span class="token punctuation">,</span> <span class="token number">1.3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4.4</span><span class="token punctuation">,</span> <span class="token number">2.5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span>floor<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [3.1, 1.3]</span>\n \n<span class="token comment">// 指定对象属性排除</span>\n_<span class="token punctuation">.</span><span class="token function">differenceBy</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;y&#39;</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;y&#39;</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;x&#39;</span><span class="token punctuation">)</span>\n<span class="token comment">// =&gt; [{x: 2, y: 3}]</span>\n\n_<span class="token punctuation">.</span><span class="token function">differenceBy</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;y&#39;</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;y&#39;</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;x&#39;</span><span class="token punctuation">)</span>\n<span class="token comment">// =&gt; [{x: 2, y: 3}, { &#39;x&#39;: 1, &#39;y&#39;: 3 }]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="differencewith-array-values-comparator" tabindex="-1"><a class="header-anchor" href="#differencewith-array-values-comparator" aria-hidden="true">#</a> _.differenceWith(array, [values], [comparator])</h3><details class="tip-block details"><summary>参数</summary><ul><li>array (Array): 要检查的数组。</li><li>[values] (...Array): 排除的值。</li><li>[comparator] (Function): comparator 调用每个元素。</li></ul><p>返回值</p><ul><li>返回一个过滤值后的新数组。</li></ul></details><p>这个方法类似<code>_.difference</code>，除了它接受一个<code>comparator</code>（比较器），它调用比较<code>array</code>，<code>values</code>中的元素。 结果值是从第一数组中选择。<code>comparator</code>调用参数有两个：<code>(arrVal, othVal)</code>。</p>', 4);
const _hoisted_113 = { class: "tip-block warning" };
const _hoisted_114 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "title" },
  "注意：",
  -1
  /* HOISTED */
);
const _hoisted_115 = {
  href: "https://www.lodashjs.com/docs/lodash.differenceWith#pullAllWith",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_116 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>\n_<span class="token punctuation">.</span><span class="token function">differenceWith</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;y&#39;</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;y&#39;</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;y&#39;</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> _<span class="token punctuation">.</span>isEqual<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [{ &#39;x&#39;: 2, &#39;y&#39;: 1 }]</span>\n\n_<span class="token punctuation">.</span><span class="token function">differenceWith</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;y&#39;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;z&#39;</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;y&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;y&#39;</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> _<span class="token punctuation">.</span>isEqual<span class="token punctuation">)</span>\n<span class="token comment">// =&gt; [{ &#39;x&#39;: 1, &#39;y&#39;: 2, &#39;z&#39;: 4 }, { &#39;x&#39;: 2, &#39;y&#39;: 1}]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="compact-array" tabindex="-1"><a class="header-anchor" href="#compact-array" aria-hidden="true">#</a> _.compact(array)</h3><p>创建一个新数组，包含原数组中所有的非假值元素。例如<code>false</code>, <code>null</code>, <code>0</code>, <code>&quot;&quot;</code>, <code>undefined</code>, <code>NaN</code> 等都是被认为是“假值”</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">compact</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [1, 2, 3]</span>\n</code></pre></div><h3 id="intersection-arrays" tabindex="-1"><a class="header-anchor" href="#intersection-arrays" aria-hidden="true">#</a> _.intersection([arrays])</h3>', 5);
const _hoisted_121 = {
  href: "http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_122 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">intersection</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [2]</span>\n</code></pre></div><h3 id="intersectionby-arrays-iteratee-identity" tabindex="-1"><a class="header-anchor" href="#intersectionby-arrays-iteratee-identity" aria-hidden="true">#</a> _.intersectionBy([arrays], [iteratee = _.identity])</h3><p>这个方法类似<code>_.intersection</code>，区别是它接受一个<code>iteratee</code>调用每一个<code>arrays</code>的每个值以产生一个值，通过产生的值进行了比较。结果值是从第一数组中选择。<code>iteratee</code>会传入一个参数：<code>(value)</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//迭代器把值Math.floor后进行比较，返回的原值</span>\n_<span class="token punctuation">.</span><span class="token function">intersectionBy</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2.1</span><span class="token punctuation">,</span> <span class="token number">1.2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4.3</span><span class="token punctuation">,</span> <span class="token number">2.4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span>floor<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [2.1]</span>\n \n<span class="token comment">// The `_.property` iteratee shorthand.</span>\n_<span class="token punctuation">.</span><span class="token function">intersectionBy</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;x&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [{ &#39;x&#39;: 1 }]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="intersectionwith-arrays-comparator" tabindex="-1"><a class="header-anchor" href="#intersectionwith-arrays-comparator" aria-hidden="true">#</a> _.intersectionWith([arrays], [comparator])</h3><details class="tip-block details"><summary>参数</summary><ul><li>[arrays] (...Array): 待检查的数组。</li><li>[comparator] (Function): comparator（比较器）调用每个元素。</li></ul><p>返回值</p><ul><li>(Array): 返回一个包含所有传入数组交集元素的新数组。</li></ul></details><p>这个方法类似<code>_.intersection</code>，区别是它接受一个<code>comparator</code>调用比较<code>arrays</code>中的元素。结果值是从第一数组中选择。<code>comparator</code>会传入两个参数:<code>(arrVal, othVal)</code>。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> objects <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;y&#39;</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;y&#39;</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> others <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;y&#39;</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;y&#39;</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n \n_<span class="token punctuation">.</span><span class="token function">intersectionWith</span><span class="token punctuation">(</span>objects<span class="token punctuation">,</span> others<span class="token punctuation">,</span> _<span class="token punctuation">.</span>isEqual<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [{ &#39;x&#39;: 1, &#39;y&#39;: 2 }]</span>\n</code></pre></div><h2 id="移除" tabindex="-1"><a class="header-anchor" href="#移除" aria-hidden="true">#</a> 移除</h2><h3 id="remove-array-predicate-identity" tabindex="-1"><a class="header-anchor" href="#remove-array-predicate-identity" aria-hidden="true">#</a> _.remove(array, [predicate = _.identity])</h3><details class="tip-block details"><summary>参数</summary><ul><li>array (Array): 要修改的数组。</li><li>[predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。</li></ul><p>返回</p><ul><li>(Array): 返回移除元素组成的新数组。</li></ul></details><p>移除数组中<code>predicate</code>（断言）返回为真值的所有元素，并返回移除元素组成的数组。<code>predicate</code>（断言）会传入3个参数：<code>(value, index, array)</code>。</p>', 12);
const _hoisted_134 = { class: "tip-block warning" };
const _hoisted_135 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "title" },
  "注意：",
  -1
  /* HOISTED */
);
const _hoisted_136 = {
  href: "https://www.lodashjs.com/docs/lodash.filter",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_137 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "array",
  -1
  /* HOISTED */
);
const _hoisted_138 = {
  href: "https://www.lodashjs.com/docs/lodash.pull",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_139 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "value",
  -1
  /* HOISTED */
);
const _hoisted_140 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> evens <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token parameter">n</span> <span class="token operator">=&gt;</span> n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n \nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [1, 3]</span>\n \nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>evens<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [2, 4]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="drop-array-n-1" tabindex="-1"><a class="header-anchor" href="#drop-array-n-1" aria-hidden="true">#</a> _.drop(array, [n=1])</h3><details class="tip-block details"><summary>参数</summary><ul><li>array (Array): 要查询的数组。</li><li>[n=1] (number): 要去除的元素个数。</li></ul><p>返回值</p><ul><li>(Array): 返回array剩余切片。</li></ul></details><p>创建一个切片数组，去除array前面的n个元素；n默认值为1。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">drop</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [2, 3]</span>\n \n_<span class="token punctuation">.</span><span class="token function">drop</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [3]</span>\n \n_<span class="token punctuation">.</span><span class="token function">drop</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; []</span>\n \n_<span class="token punctuation">.</span><span class="token function">drop</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [1, 2, 3]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dropright-array-n-1" tabindex="-1"><a class="header-anchor" href="#dropright-array-n-1" aria-hidden="true">#</a> _.dropRight(array, [n=1])</h3><p>创建一个切片数组，去除array尾部的n个元素；n默认值为1。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">dropRight</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [1, 2]</span>\n \n_<span class="token punctuation">.</span><span class="token function">dropRight</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [1]</span>\n \n_<span class="token punctuation">.</span><span class="token function">dropRight</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; []</span>\n \n_<span class="token punctuation">.</span><span class="token function">dropRight</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [1, 2, 3]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="droprightwhile-array-predicate-identity" tabindex="-1"><a class="header-anchor" href="#droprightwhile-array-predicate-identity" aria-hidden="true">#</a> _.dropRightWhile(array, [predicate = _.identity])</h3><details class="tip-block details"><summary>参数</summary><ul><li>array (Array): 要查询的数组。</li><li>[predicate=_.identity] (Function): 这个函数会在每一次迭代调用。</li></ul><p>返回值</p><ul><li>(Array): 返回array剩余切片。</li></ul></details><p>创建一个切片数组，去除array中从<code>predicate</code>返回值开始到尾部的部分。<code>predicate</code>会传入3个参数： <code>(value, index, array)</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> users <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> <span class="token string-property property">&#39;user&#39;</span><span class="token operator">:</span> <span class="token string">&#39;barney&#39;</span><span class="token punctuation">,</span>  <span class="token string-property property">&#39;active&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> <span class="token string-property property">&#39;user&#39;</span><span class="token operator">:</span> <span class="token string">&#39;fred&#39;</span><span class="token punctuation">,</span>    <span class="token string-property property">&#39;active&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> <span class="token string-property property">&#39;user&#39;</span><span class="token operator">:</span> <span class="token string">&#39;pebbles&#39;</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;active&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n \n_<span class="token punctuation">.</span><span class="token function">dropRightWhile</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token operator">!</span>o<span class="token punctuation">.</span>active<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; objects for [&#39;barney&#39;]</span>\n \n<span class="token comment">// The `_.matches` iteratee shorthand.</span>\n_<span class="token punctuation">.</span><span class="token function">dropRightWhile</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;user&#39;</span><span class="token operator">:</span> <span class="token string">&#39;pebbles&#39;</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;active&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; objects for [&#39;barney&#39;, &#39;fred&#39;]</span>\n \n<span class="token comment">// The `_.matchesProperty` iteratee shorthand.</span>\n_<span class="token punctuation">.</span><span class="token function">dropRightWhile</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;active&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; objects for [&#39;barney&#39;]</span>\n \n<span class="token comment">// The `_.property` iteratee shorthand.</span>\n_<span class="token punctuation">.</span><span class="token function">dropRightWhile</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token string">&#39;active&#39;</span><span class="token punctuation">)</span>\n<span class="token operator">=&gt;</span>  objects <span class="token keyword">for</span> <span class="token punctuation">[</span><span class="token string">&#39;barney&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;fred&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;pebbles&#39;</span><span class="token punctuation">]</span>\n\n_<span class="token punctuation">.</span><span class="token function">isEqual</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">dropRightWhile</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token string">&#39;active&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> users<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; true</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dropwhile-array-predicate-identity" tabindex="-1"><a class="header-anchor" href="#dropwhile-array-predicate-identity" aria-hidden="true">#</a> _.dropWhile(array, [predicate = _.identity])</h3><details class="tip-block details"><summary>参数</summary><ul><li>array (Array): 要查询的数组。</li><li>[predicate=_.identity] (Function): 这个函数会在每一次迭代调用。</li></ul><p>返回值</p><ul><li>(Array): 返回array剩余切片。</li></ul></details><p>创建一个切片数组，去除array中从起点开始到<code>predicate</code>返回值结束部分。<code>predicate</code>会传入3个参数：<code>(value, index, array)</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> users <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> <span class="token string-property property">&#39;user&#39;</span><span class="token operator">:</span> <span class="token string">&#39;barney&#39;</span><span class="token punctuation">,</span>  <span class="token string-property property">&#39;active&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> <span class="token string-property property">&#39;user&#39;</span><span class="token operator">:</span> <span class="token string">&#39;fred&#39;</span><span class="token punctuation">,</span>    <span class="token string-property property">&#39;active&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> <span class="token string-property property">&#39;user&#39;</span><span class="token operator">:</span> <span class="token string">&#39;pebbles&#39;</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;active&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n \n_<span class="token punctuation">.</span><span class="token function">dropWhile</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token operator">!</span>o<span class="token punctuation">.</span>active<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; objects for [&#39;pebbles&#39;]</span>\n \n<span class="token comment">// The `_.matches` iteratee shorthand.</span>\n_<span class="token punctuation">.</span><span class="token function">dropWhile</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;user&#39;</span><span class="token operator">:</span> <span class="token string">&#39;barney&#39;</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;active&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; objects for [&#39;fred&#39;, &#39;pebbles&#39;]</span>\n \n<span class="token comment">// The `_.matchesProperty` iteratee shorthand.</span>\n_<span class="token punctuation">.</span><span class="token function">dropWhile</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;active&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; objects for [&#39;pebbles&#39;]</span>\n \n<span class="token comment">// The `_.property` iteratee shorthand.</span>\n_<span class="token punctuation">.</span><span class="token function">dropWhile</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token string">&#39;active&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; objects for [&#39;barney&#39;, &#39;fred&#39;, &#39;pebbles&#39;]</span>\n\n_<span class="token punctuation">.</span><span class="token function">isEqual</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">dropWhile</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token string">&#39;active&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> users<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; true</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pull-array-values" tabindex="-1"><a class="header-anchor" href="#pull-array-values" aria-hidden="true">#</a> _.pull(array, [values])</h3>', 17);
const _hoisted_157 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "array",
  -1
  /* HOISTED */
);
const _hoisted_158 = {
  href: "http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_159 = { class: "tip-block warning" };
const _hoisted_160 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "title" },
  "注意：",
  -1
  /* HOISTED */
);
const _hoisted_161 = {
  href: "https://www.lodashjs.com/docs/lodash.without",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_162 = {
  href: "https://www.lodashjs.com/docs/lodash.remove",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_163 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n \n_<span class="token punctuation">.</span><span class="token function">pull</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [1, 1]</span>\n</code></pre></div><h3 id="pullall-array-values" tabindex="-1"><a class="header-anchor" href="#pullall-array-values" aria-hidden="true">#</a> _.pullAll(array, values)</h3>', 2);
const _hoisted_165 = {
  href: "https://www.lodashjs.com/docs/lodash.pull",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_166 = { class: "tip-block warning" };
const _hoisted_167 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "title" },
  "注意：",
  -1
  /* HOISTED */
);
const _hoisted_168 = {
  href: "https://www.lodashjs.com/docs/lodash.difference",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_169 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "array",
  -1
  /* HOISTED */
);
const _hoisted_170 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n \n_<span class="token punctuation">.</span><span class="token function">pullAll</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [1, 1]</span>\n</code></pre></div><h3 id="pullallby-array-values-iteratee-identity" tabindex="-1"><a class="header-anchor" href="#pullallby-array-values-iteratee-identity" aria-hidden="true">#</a> _.pullAllBy(array, values, [iteratee = _.identity])</h3><details class="tip-block details"><summary>参数</summary><ul><li>array (Array): 要修改的数组。</li><li>values (Array): 要移除值的数组。</li><li>[iteratee=_.identity] (Array|Function|Object|string): iteratee（迭代器）调用每个元素。</li></ul><p>返回值</p><ul><li>(Array): 返回 array.</li></ul></details>', 3);
const _hoisted_173 = {
  href: "https://www.lodashjs.com/docs/lodash.pullAll",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_174 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "iteratee",
  -1
  /* HOISTED */
);
const _hoisted_175 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "array",
  -1
  /* HOISTED */
);
const _hoisted_176 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "values",
  -1
  /* HOISTED */
);
const _hoisted_177 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "iteratee",
  -1
  /* HOISTED */
);
const _hoisted_178 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "(value)",
  -1
  /* HOISTED */
);
const _hoisted_179 = { class: "tip-block warning" };
const _hoisted_180 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "title" },
  "注意：",
  -1
  /* HOISTED */
);
const _hoisted_181 = {
  href: "https://www.lodashjs.com/docs/lodash.differenceBy",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_182 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "array",
  -1
  /* HOISTED */
);
const _hoisted_183 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n \n_<span class="token punctuation">.</span><span class="token function">pullAllBy</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;x&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [{ &#39;x&#39;: 2 }]</span>\n</code></pre></div><h3 id="pullallwith-array-values-comparator" tabindex="-1"><a class="header-anchor" href="#pullallwith-array-values-comparator" aria-hidden="true">#</a> _.pullAllWith(array, values, [comparator])</h3><details class="tip-block details"><summary>参数</summary><ul><li>array (Array): 要修改的数组。</li><li>values (Array): 要移除值的数组。</li><li>[comparator] (Function): comparator（比较器）调用每个元素。</li></ul><p>返回值</p><ul><li>(Array): 返回 array。</li></ul></details>', 3);
const _hoisted_186 = {
  href: "https://www.lodashjs.com/docs/lodash.pullAll",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_187 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "comparator",
  -1
  /* HOISTED */
);
const _hoisted_188 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "array",
  -1
  /* HOISTED */
);
const _hoisted_189 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "values",
  -1
  /* HOISTED */
);
const _hoisted_190 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "comparator",
  -1
  /* HOISTED */
);
const _hoisted_191 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "(arrVal, othVal)",
  -1
  /* HOISTED */
);
const _hoisted_192 = { class: "tip-block warning" };
const _hoisted_193 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "title" },
  "注意：",
  -1
  /* HOISTED */
);
const _hoisted_194 = {
  href: "https://www.lodashjs.com/docs/lodash.differenceWith",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_195 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "array",
  -1
  /* HOISTED */
);
const _hoisted_196 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;y&#39;</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;y&#39;</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;y&#39;</span><span class="token operator">:</span> <span class="token number">6</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n \n_<span class="token punctuation">.</span><span class="token function">pullAllWith</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;y&#39;</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> _<span class="token punctuation">.</span>isEqual<span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [{ &#39;x&#39;: 1, &#39;y&#39;: 2 }, { &#39;x&#39;: 5, &#39;y&#39;: 6 }]</span>\n</code></pre></div><h3 id="pullat-array-indexes" tabindex="-1"><a class="header-anchor" href="#pullat-array-indexes" aria-hidden="true">#</a> _.pullAt(array, [indexes])</h3><details class="tip-block details"><summary>参数</summary><ul><li>array (Array): 要修改的数组。</li><li>[indexes] (...(number|number[])): 要移除元素的索引。</li></ul><p>返回值</p><ul><li>(Array): 返回移除元素组成的新数组。</li></ul></details><p>根据索引<code>indexes</code>，移除<code>array</code>中对应的元素，并返回被移除元素的数组。</p>', 4);
const _hoisted_200 = { class: "tip-block warning" };
const _hoisted_201 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "title" },
  "注意：",
  -1
  /* HOISTED */
);
const _hoisted_202 = {
  href: "https://www.lodashjs.com/docs/lodash.at",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_203 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> evens <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">pullAt</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n \nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [5, 15]</span>\n \nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>evens<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [10, 20]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="without-array-values" tabindex="-1"><a class="header-anchor" href="#without-array-values" aria-hidden="true">#</a> _.without(array, [values])</h3>', 2);
const _hoisted_205 = { class: "tip-block warning" };
const _hoisted_206 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "title" },
  "注意:",
  -1
  /* HOISTED */
);
const _hoisted_207 = {
  href: "https://www.lodashjs.com/docs/lodash.pull",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_208 = /* @__PURE__ */ createStaticVNode('<h2 id="增加" tabindex="-1"><a class="header-anchor" href="#增加" aria-hidden="true">#</a> 增加</h2><h3 id="fill-array-value-start-0-end-array-length" tabindex="-1"><a class="header-anchor" href="#fill-array-value-start-0-end-array-length" aria-hidden="true">#</a> _.fill(array, value, [start=0], [end = array.length])</h3><details class="tip-block details"><summary>参数</summary><ul><li>array (Array): 要填充改变的数组。</li><li>value (*): 填充给 array 的值。</li><li>[start=0] (number): 开始位置（默认0）。</li><li>[end=array.length] (number):结束位置（默认array.length）。</li></ul><p>返回值</p><ul><li>(Array): 返回 array。</li></ul></details><p>使用<code>value</code>值来填充（替换）<code>array</code>，从<code>start</code>位置开始, 到<code>end</code>位置结束（但不包含end位置）</p><div class="tip-block warning"><p class="title">警告</p><p>这个方法会改变<code>array</code>(不是创建新数组）</p></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n \n_<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [&#39;a&#39;, &#39;a&#39;, &#39;a&#39;]</span>\n \n_<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [2, 2, 2]</span>\n \n_<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [4, &#39;*&#39;, &#39;*&#39;, 10]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="排序" tabindex="-1"><a class="header-anchor" href="#排序" aria-hidden="true">#</a> 排序</h2><h3 id="sortedindex-array-value" tabindex="-1"><a class="header-anchor" href="#sortedindex-array-value" aria-hidden="true">#</a> _.sortedIndex(array, value)</h3><p>使用二进制的方式检索，来决定<code>value</code>值应该插入到数组中尽可能小的索引位置，以保证array的排序。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">sortedIndex</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; 2</span>\n</code></pre></div><h3 id="sortedindexby-array-value-iteratee-identity" tabindex="-1"><a class="header-anchor" href="#sortedindexby-array-value-iteratee-identity" aria-hidden="true">#</a> _.sortedIndexBy(array, value, [iteratee = _.identity])</h3><details class="tip-block details"><summary>参数</summary><ul><li>array (Array): 要检查的排序数组。</li><li>value (*): 要评估的值。</li><li>[iteratee=_.identity] (Array|Function|Object|string): 迭代函数，调用每个元素。</li></ul><p>返回</p><ul><li>(number): 返回 value值 应该在数组array中插入的索引位置 index。</li></ul></details>', 12);
const _hoisted_220 = {
  href: "https://www.lodashjs.com/docs/lodash.sortedIndex",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_221 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "iteratee",
  -1
  /* HOISTED */
);
const _hoisted_222 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">6</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n_<span class="token punctuation">.</span><span class="token function">sortedIndexBy</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token parameter">item</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; 1</span>\n\n<span class="token comment">// The `_.property` iteratee shorthand.</span>\n_<span class="token punctuation">.</span><span class="token function">sortedIndexBy</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;x&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; 1</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sortedindexof-array-value" tabindex="-1"><a class="header-anchor" href="#sortedindexof-array-value" aria-hidden="true">#</a> _.sortedIndexOf(array, value)</h3>', 2);
const _hoisted_224 = {
  href: "https://www.lodashjs.com/docs/lodash.indexOf",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_225 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "array",
  -1
  /* HOISTED */
);
const _hoisted_226 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">sortedIndexOf</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; 1</span>\n</code></pre></div><h3 id="sortedlastindex-array-value" tabindex="-1"><a class="header-anchor" href="#sortedlastindex-array-value" aria-hidden="true">#</a> _.sortedLastIndex(array, value)</h3>', 2);
const _hoisted_228 = {
  href: "https://www.lodashjs.com/docs/lodash.sortedIndex",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_229 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "value",
  -1
  /* HOISTED */
);
const _hoisted_230 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "array",
  -1
  /* HOISTED */
);
const _hoisted_231 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">sortedLastIndex</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; 4</span>\n</code></pre></div><h3 id="sortedlastindexby-array-value-iteratee-identity" tabindex="-1"><a class="header-anchor" href="#sortedlastindexby-array-value-iteratee-identity" aria-hidden="true">#</a> _.sortedLastIndexBy(array, value, [iteratee = _.identity])</h3><details class="tip-block details"><summary>参数</summary><ul><li>array (Array): 要检查的排序数组。</li><li>value (*): 要评估的值。</li><li>[iteratee = _.identity] (Array|Function|Object|string): 迭代函数，调用每个元素。</li></ul><p>返回</p><ul><li>(number): 返回 value值 应该在数组array中插入的索引位置 index。</li></ul></details>', 3);
const _hoisted_234 = {
  href: "https://www.lodashjs.com/docs/lodash.sortedLastIndex",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_235 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "iteratee",
  -1
  /* HOISTED */
);
const _hoisted_236 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "array",
  -1
  /* HOISTED */
);
const _hoisted_237 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "value",
  -1
  /* HOISTED */
);
const _hoisted_238 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "iteratee ",
  -1
  /* HOISTED */
);
const _hoisted_239 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "value",
  -1
  /* HOISTED */
);
const _hoisted_240 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">6</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n_<span class="token punctuation">.</span><span class="token function">sortedLastIndexBy</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token parameter">item</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; 2</span>\n\n<span class="token comment">// The `_.property` iteratee shorthand.</span>\n_<span class="token punctuation">.</span><span class="token function">sortedLastIndexBy</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;x&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; 2</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sortedlastindexof-array-value" tabindex="-1"><a class="header-anchor" href="#sortedlastindexof-array-value" aria-hidden="true">#</a> _.sortedLastIndexOf(array, value)</h3>', 2);
const _hoisted_242 = {
  href: "https://www.lodashjs.com/docs/lodash.lastIndexOf",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_243 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">sortedLastIndexOf</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; 3</span>\n</code></pre></div><h3 id="sorteduniq-array" tabindex="-1"><a class="header-anchor" href="#sorteduniq-array" aria-hidden="true">#</a> _.sortedUniq(array)</h3>', 2);
const _hoisted_245 = {
  href: "https://www.lodashjs.com/docs/lodash.uniq",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_246 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">sortedUniq</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [1, 2]</span>\n</code></pre></div><h3 id="sorteduniqby-array-iteratee" tabindex="-1"><a class="header-anchor" href="#sorteduniqby-array-iteratee" aria-hidden="true">#</a> _.sortedUniqBy(array, [iteratee])</h3>', 2);
const _hoisted_248 = {
  href: "https://www.lodashjs.com/docs/lodash.uniqBy",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_249 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">sortedUniqBy</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1.1</span><span class="token punctuation">,</span> <span class="token number">1.2</span><span class="token punctuation">,</span> <span class="token number">2.3</span><span class="token punctuation">,</span> <span class="token number">2.4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span>floor<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [1.1, 2.3]</span>\n</code></pre></div><h2 id="去重" tabindex="-1"><a class="header-anchor" href="#去重" aria-hidden="true">#</a> 去重</h2><h3 id="uniq-array" tabindex="-1"><a class="header-anchor" href="#uniq-array" aria-hidden="true">#</a> _.uniq(array)</h3>', 3);
const _hoisted_252 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">uniq</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [2, 1]</span>\n</code></pre></div><h3 id="uniqby-array-iteratee-identity" tabindex="-1"><a class="header-anchor" href="#uniqby-array-iteratee-identity" aria-hidden="true">#</a> _.uniqBy(array, [iteratee = _.identity])</h3><p>这个方法类似_.uniq ，除了它接受一个 iteratee（迭代函数），调用每一个数组（array）的每个元素以产生唯一性计算的标准。iteratee 调用时会传入一个参数：(value)。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">uniqBy</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2.1</span><span class="token punctuation">,</span> <span class="token number">1.2</span><span class="token punctuation">,</span> <span class="token number">2.3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span>floor<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [2.1, 1.2]</span>\n \n<span class="token comment">// The `_.property` iteratee shorthand.</span>\n_<span class="token punctuation">.</span><span class="token function">uniqBy</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;x&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [{ &#39;x&#39;: 1 }, { &#39;x&#39;: 2 }]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uniqwith-array-comparator" tabindex="-1"><a class="header-anchor" href="#uniqwith-array-comparator" aria-hidden="true">#</a> _.uniqWith(array, [comparator])</h3><p>这个方法类似_.uniq， 除了它接受一个 comparator 调用比较arrays数组的每一个元素。 comparator 调用时会传入2个参数： (arrVal, othVal)。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> objects <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;y&#39;</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;y&#39;</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;y&#39;</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n \n_<span class="token punctuation">.</span><span class="token function">uniqWith</span><span class="token punctuation">(</span>objects<span class="token punctuation">,</span> _<span class="token punctuation">.</span>isEqual<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [{ &#39;x&#39;: 1, &#39;y&#39;: 2 }, { &#39;x&#39;: 2, &#39;y&#39;: 1 }]</span>\n</code></pre></div><h3 id="xor-arrays" tabindex="-1"><a class="header-anchor" href="#xor-arrays" aria-hidden="true">#</a> _.xor([arrays])</h3><p>创建一个给定数组唯一值的数组，使用symmetric difference[^2]做等值比较。 返回一个值的顺序取决于他们数组的出现顺序。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">xor</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [1, 3]</span>\n</code></pre></div><h3 id="xorby-arrays-iteratee-identity" tabindex="-1"><a class="header-anchor" href="#xorby-arrays-iteratee-identity" aria-hidden="true">#</a> _.xorBy([arrays], [iteratee = _.identity])</h3><details class="tip-block details"><summary>参数</summary><ul><li>[arrays] (...Array): 要检查的数组。</li><li>[iteratee=_.identity] (Array|Function|Object|string): 调用每一个元素的迭代函数。</li></ul><p>返回</p><ul><li>(Array): 返回过滤值后的新数组。</li></ul></details><p>这个方法类似<code>_.xor</code>，除了它接受 iteratee（迭代器），这个迭代器 调用每一个 arrays（数组）的每一个值，以生成比较的新值。iteratee 调用一个参数：(value).</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">xorBy</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2.1</span><span class="token punctuation">,</span> <span class="token number">1.2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2.3</span><span class="token punctuation">,</span> <span class="token number">3.4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span>floor<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [1.2, 3.4]</span>\n \n<span class="token comment">// The `_.property` iteratee shorthand.</span>\n_<span class="token punctuation">.</span><span class="token function">xorBy</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;x&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [{ &#39;x&#39;: 2 }]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="xorwith-arrays-comparator" tabindex="-1"><a class="header-anchor" href="#xorwith-arrays-comparator" aria-hidden="true">#</a> _.xorWith([arrays], [comparator])</h3><p>该方法是像<code>_.xor</code>，除了它接受一个<code>comparator</code>，以调用比较数组的元素。 <code>comparator</code>调用2个参数：<code>(arrVal, othVal)</code>.</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> objects <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;y&#39;</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;y&#39;</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> others <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;y&#39;</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;y&#39;</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n \n_<span class="token punctuation">.</span><span class="token function">xorWith</span><span class="token punctuation">(</span>objects<span class="token punctuation">,</span> others<span class="token punctuation">,</span> _<span class="token punctuation">.</span>isEqual<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [{ &#39;x&#39;: 2, &#39;y&#39;: 1 }, { &#39;x&#39;: 1, &#39;y&#39;: 1 }]</span>\n</code></pre></div><h2 id="转换" tabindex="-1"><a class="header-anchor" href="#转换" aria-hidden="true">#</a> 转换</h2><h3 id="reverse-array" tabindex="-1"><a class="header-anchor" href="#reverse-array" aria-hidden="true">#</a> _.reverse(array)</h3><p>反转<code>array</code>，使得第一个元素变为最后一个元素，第二个元素变为倒数第二个元素，依次类推。</p>', 20);
const _hoisted_272 = { class: "tip-block warning" };
const _hoisted_273 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "title" },
  "注意：",
  -1
  /* HOISTED */
);
const _hoisted_274 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "array",
  -1
  /* HOISTED */
);
const _hoisted_275 = {
  href: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_276 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n \n_<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [3, 2, 1]</span>\n \nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [3, 2, 1]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flatten-array" tabindex="-1"><a class="header-anchor" href="#flatten-array" aria-hidden="true">#</a> _.flatten(array)</h3><p>减少一级array嵌套深度。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">flatten</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [1, 2, [3, [4]], 5]</span>\n</code></pre></div><h3 id="flattendeep-array" tabindex="-1"><a class="header-anchor" href="#flattendeep-array" aria-hidden="true">#</a> _.flattenDeep(array)</h3><p>将array递归为一维数组。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">flattenDeep</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [1, 2, 3, 4, 5]</span>\n</code></pre></div><h3 id="flattendepth-array-depth-1" tabindex="-1"><a class="header-anchor" href="#flattendepth-array-depth-1" aria-hidden="true">#</a> _.flattenDepth(array, [depth=1])</h3><p>根据 depth 递归减少<code>array</code>的嵌套层级。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n \n_<span class="token punctuation">.</span><span class="token function">flattenDepth</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [1, 2, [3, [4]], 5]</span>\n \n_<span class="token punctuation">.</span><span class="token function">flattenDepth</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [1, 2, 3, [4], 5]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="frompairs-pairs" tabindex="-1"><a class="header-anchor" href="#frompairs-pairs" aria-hidden="true">#</a> _.fromPairs(pairs)</h3>', 11);
const _hoisted_287 = {
  href: "https://www.lodashjs.com/docs/lodash.toPairs",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_288 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">fromPairs</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;fred&#39;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;barney&#39;</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; { &#39;fred&#39;: 30, &#39;barney&#39;: 40 }</span>\n</code></pre></div><h3 id="zipobject-props-values" tabindex="-1"><a class="header-anchor" href="#zipobject-props-values" aria-hidden="true">#</a> _.zipObject([props=[]], [values=[]])</h3><p>这个方法类似<code>_.fromPairs</code>，除了它接受2个数组，第一个数组中的值作为属性标识符（属性名），第二个数组中的值作为相应的属性值。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">zipObject</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; { &#39;a&#39;: 1, &#39;b&#39;: 2 }</span>\n</code></pre></div><h3 id="zipobjectdeep-props-values" tabindex="-1"><a class="header-anchor" href="#zipobjectdeep-props-values" aria-hidden="true">#</a> _.zipObjectDeep([props=[]], [values=[]])</h3><p>这个方法类似<code>_.zipObject</code>，除了它支持属性路径。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">zipObjectDeep</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a.b[0].c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a.b[1].d&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; { &#39;a&#39;: { &#39;b&#39;: [{ &#39;c&#39;: 1 }, { &#39;d&#39;: 2 }] } }</span>\n</code></pre></div>', 7);
const _hoisted_295 = {
  href: "https://en.wikipedia.org/wiki/Symmetric_difference",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_296 = /* @__PURE__ */ createBaseVNode(
  "hr",
  null,
  null,
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createTextVNode("使用"),
      createBaseVNode("a", _hoisted_5, [
        createTextVNode("SameValueZero"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" 等值比较，返回首次"),
      _hoisted_6,
      createTextVNode("在数组"),
      _hoisted_7,
      createTextVNode("中被找到的索引值， 如果"),
      _hoisted_8,
      createTextVNode("为负值，将从数组"),
      _hoisted_9,
      createTextVNode("尾端索引进行匹配。")
    ]),
    _hoisted_10,
    createBaseVNode("p", null, [
      createTextVNode(":::info 这个方法用于代替"),
      createBaseVNode("a", _hoisted_55, [
        createTextVNode("Array#slice"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("来确保数组正确返回。 :::")
    ]),
    _hoisted_56,
    createBaseVNode("p", null, [
      createTextVNode("创建一个按顺序返回一个新的联合数组,并且数组的元素是唯一的。所有给定数组的元素值使用"),
      createBaseVNode("a", _hoisted_83, [
        createTextVNode("SameValueZero"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("做等值比较。")
    ]),
    _hoisted_84,
    createBaseVNode("p", null, [
      createTextVNode("这个方法类似"),
      createBaseVNode("a", _hoisted_86, [
        createTextVNode("_.union"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("，除了它接受一个"),
      _hoisted_87,
      createTextVNode("（迭代函数），调用每一个数组（array）的每个元素以产生唯一性计算的标准。iteratee 会传入一个参数：(value)。")
    ]),
    _hoisted_88,
    createBaseVNode("p", null, [
      createTextVNode("这个方法类似"),
      createBaseVNode("a", _hoisted_91, [
        createTextVNode("_.union"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("，除了它接受一个"),
      _hoisted_92,
      createTextVNode("调用比较"),
      _hoisted_93,
      createTextVNode("数组的每一个元素。"),
      _hoisted_94,
      createTextVNode("调用时会传入2个参数："),
      _hoisted_95,
      createTextVNode("。")
    ]),
    _hoisted_96,
    createBaseVNode("div", _hoisted_106, [
      _hoisted_107,
      createBaseVNode("p", null, [
        createTextVNode("不像"),
        createBaseVNode("a", _hoisted_108, [
          createTextVNode("_.pullAllBy"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode("，这个方法会返回一个新数组。")
      ])
    ]),
    _hoisted_109,
    createBaseVNode("div", _hoisted_113, [
      _hoisted_114,
      createBaseVNode("p", null, [
        createTextVNode("不像"),
        createBaseVNode("a", _hoisted_115, [
          createTextVNode("_.pullAllWith"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode("，这个方法会返回一个新数组。")
      ])
    ]),
    _hoisted_116,
    createBaseVNode("p", null, [
      createTextVNode("创建唯一值的数组，这个数组包含所有给定数组都包含的元素，使用"),
      createBaseVNode("a", _hoisted_121, [
        createTextVNode("SameValueZero"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("进行相等性比较。（可以理解为给定数组的交集）")
    ]),
    _hoisted_122,
    createBaseVNode("div", _hoisted_134, [
      _hoisted_135,
      createBaseVNode("p", null, [
        createTextVNode("和"),
        createBaseVNode("a", _hoisted_136, [
          createTextVNode("_.filter"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode("不同, 这个方法会改变数组"),
        _hoisted_137,
        createTextVNode("。使用"),
        createBaseVNode("a", _hoisted_138, [
          createTextVNode("_.pull"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode("来根据提供的"),
        _hoisted_139,
        createTextVNode("值从数组中移除元素。")
      ])
    ]),
    _hoisted_140,
    createBaseVNode("p", null, [
      createTextVNode("移除数组"),
      _hoisted_157,
      createTextVNode("中所有和给定值相等的元素，使用"),
      createBaseVNode("a", _hoisted_158, [
        createTextVNode("SameValueZero"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("进行全等比较。")
    ]),
    createBaseVNode("div", _hoisted_159, [
      _hoisted_160,
      createBaseVNode("p", null, [
        createTextVNode("和"),
        createBaseVNode("a", _hoisted_161, [
          createTextVNode("_.without"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" 方法不同，这个方法会改变数组。使用"),
        createBaseVNode("a", _hoisted_162, [
          createTextVNode("_.remove"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" 从一个数组中移除元素。")
      ])
    ]),
    _hoisted_163,
    createBaseVNode("p", null, [
      createTextVNode("这个方法类似"),
      createBaseVNode("a", _hoisted_165, [
        createTextVNode("_.pull"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("，区别是这个方法接收一个要移除值的数组。")
    ]),
    createBaseVNode("div", _hoisted_166, [
      _hoisted_167,
      createBaseVNode("p", null, [
        createTextVNode("不同于"),
        createBaseVNode("a", _hoisted_168, [
          createTextVNode("_.difference"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(", 这个方法会改变数组"),
        _hoisted_169
      ])
    ]),
    _hoisted_170,
    createBaseVNode("p", null, [
      createTextVNode("这个方法类似于"),
      createBaseVNode("a", _hoisted_173, [
        createTextVNode("_.pullAll"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" ，区别是这个方法接受一个 "),
      _hoisted_174,
      createTextVNode("（迭代函数） 调用"),
      _hoisted_175,
      createTextVNode("和"),
      _hoisted_176,
      createTextVNode("的每个值以产生一个值，通过产生的值进行了比较。"),
      _hoisted_177,
      createTextVNode("会传入一个参数："),
      _hoisted_178,
      createTextVNode("。")
    ]),
    createBaseVNode("div", _hoisted_179, [
      _hoisted_180,
      createBaseVNode("p", null, [
        createTextVNode("不同于"),
        createBaseVNode("a", _hoisted_181, [
          createTextVNode("_.differenceBy"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(", 这个方法会改变数组 "),
        _hoisted_182
      ])
    ]),
    _hoisted_183,
    createBaseVNode("p", null, [
      createTextVNode("这个方法类似于"),
      createBaseVNode("a", _hoisted_186, [
        createTextVNode("_.pullAll"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("，区别是这个方法接受 "),
      _hoisted_187,
      createTextVNode("调用"),
      _hoisted_188,
      createTextVNode("中的元素和"),
      _hoisted_189,
      createTextVNode("比较。"),
      _hoisted_190,
      createTextVNode("会传入两个参数："),
      _hoisted_191,
      createTextVNode("。")
    ]),
    createBaseVNode("div", _hoisted_192, [
      _hoisted_193,
      createBaseVNode("p", null, [
        createTextVNode("不同于"),
        createBaseVNode("a", _hoisted_194, [
          createTextVNode("_.differenceWith"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(", 这个方法会改变数组 "),
        _hoisted_195
      ])
    ]),
    _hoisted_196,
    createBaseVNode("div", _hoisted_200, [
      _hoisted_201,
      createBaseVNode("p", null, [
        createTextVNode("和 "),
        createBaseVNode("a", _hoisted_202, [
          createTextVNode("_.at"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode("不同, 这个方法会改变数组 array。")
      ])
    ]),
    _hoisted_203,
    createBaseVNode("p", null, [
      createTextVNode("创建一个剔除所有给定值的新数组，剔除值的时候，使用SameValueZero"),
      createVNode(_component_RouterLink, { to: "/guide/javascript/%5BSameValueZero%5D(http:/ecma-international.org/ecma-262/6.0/#sec-samevaluezero)" }, {
        default: withCtx(() => [
          createTextVNode("^1")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode("做相等比较。")
    ]),
    createBaseVNode("div", _hoisted_205, [
      _hoisted_206,
      createBaseVNode("p", null, [
        createTextVNode("不像"),
        createBaseVNode("a", _hoisted_207, [
          createTextVNode("_.pull"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(", 这个方法会返回一个新数组。")
      ])
    ]),
    _hoisted_208,
    createBaseVNode("p", null, [
      createTextVNode("这个方法类似"),
      createBaseVNode("a", _hoisted_220, [
        createTextVNode("_.sortedIndex"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("，除了它接受一个"),
      _hoisted_221,
      createTextVNode("（迭代函数），调用每一个数组（array）元素，返回结果和value 值比较来计算排序。iteratee 会传入一个参数：(value)。")
    ]),
    _hoisted_222,
    createBaseVNode("p", null, [
      createTextVNode("这个方法类似"),
      createBaseVNode("a", _hoisted_224, [
        createTextVNode("_.indexOf"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("，除了它是在已经排序的数组 "),
      _hoisted_225,
      createTextVNode("上执行二进制检索。")
    ]),
    _hoisted_226,
    createBaseVNode("p", null, [
      createTextVNode("此方法类似于"),
      createBaseVNode("a", _hoisted_228, [
        createTextVNode("_.sortedIndex"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("，除了它返回"),
      _hoisted_229,
      createTextVNode("值在"),
      _hoisted_230,
      createTextVNode("中尽可能大的索引位置（index）。")
    ]),
    _hoisted_231,
    createBaseVNode("p", null, [
      createTextVNode("这个方法类似"),
      createBaseVNode("a", _hoisted_234, [
        createTextVNode("_.sortedLastIndex"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" ，除了它接受一个"),
      _hoisted_235,
      createTextVNode("（迭代函数），调用每一个数组"),
      _hoisted_236,
      createTextVNode("元素，返回结果和"),
      _hoisted_237,
      createTextVNode("值比较来计算排序。"),
      _hoisted_238,
      createTextVNode("会传入一个参数："),
      _hoisted_239,
      createTextVNode("。")
    ]),
    _hoisted_240,
    createBaseVNode("p", null, [
      createTextVNode("这个方法类似"),
      createBaseVNode("a", _hoisted_242, [
        createTextVNode("_.lastIndexOf"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("，除了它是在已经排序的数组array上执行二进制检索。")
    ]),
    _hoisted_243,
    createBaseVNode("p", null, [
      createTextVNode("这个方法类似"),
      createBaseVNode("a", _hoisted_245, [
        createTextVNode("_.uniq"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("；它会优化排序数组，返回一个新的不重复的数组。")
    ]),
    _hoisted_246,
    createBaseVNode("p", null, [
      createTextVNode("这个方法类似"),
      createBaseVNode("a", _hoisted_248, [
        createTextVNode("_.uniqBy"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("；它会优化排序数组，返回一个新的不重复的数组。")
    ]),
    _hoisted_249,
    createBaseVNode("p", null, [
      createTextVNode("返回一个去重后的array数组副本。使用了SameValueZero"),
      createVNode(_component_RouterLink, { to: "/guide/javascript/%5BSameValueZero%5D(http:/ecma-international.org/ecma-262/6.0/#sec-samevaluezero)" }, {
        default: withCtx(() => [
          createTextVNode("^1")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode(" 做等值比较。只有第一次出现的元素才会被保留。")
    ]),
    _hoisted_252,
    createBaseVNode("div", _hoisted_272, [
      _hoisted_273,
      createBaseVNode("p", null, [
        createTextVNode("这个方法会改变原数组"),
        _hoisted_274,
        createTextVNode("，基于"),
        createBaseVNode("a", _hoisted_275, [
          createTextVNode("Array#reverse"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(".")
      ])
    ]),
    _hoisted_276,
    createBaseVNode("p", null, [
      createTextVNode("与"),
      createBaseVNode("a", _hoisted_287, [
        createTextVNode("_.toPairs"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("正好相反；这个方法返回一个由键值对pairs构成的对象。")
    ]),
    _hoisted_288,
    createBaseVNode("p", null, [
      createTextVNode("[^2]:"),
      createBaseVNode("a", _hoisted_295, [
        createTextVNode("symmetric difference"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_296
  ]);
}
const lodashArray_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "lodash-array.html.vue"]]);
export {
  lodashArray_html as default
};
