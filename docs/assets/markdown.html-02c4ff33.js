import { d as defineAsyncComponent, _ as __vitePreload, c as computed, r as resolveComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, e as createTextVNode, f as createVNode, g as withCtx, t as toDisplayString, F as Fragment, h as renderList, i as createCommentVNode, u as unref, j as createStaticVNode } from "./app-c3a13116.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _imports_0 = "/vuepress-website/assets/logo.png";
const _imports_1 = "/vuepress-website/assets/hero-3c1981fd.png";
const markdown_html_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "样式模板",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#样式模板",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 样式模板")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "目录",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#目录",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 目录")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = {
  href: "https://v2.vuepress.vuejs.org/zh/reference/plugin/toc.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "[toc]",
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>::: details 目录导航\n[[toc]] 目录大纲\n:::\n\n::: details 目录导航\n@[toc] 目录大纲\n:::\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 1);
const _hoisted_6 = { class: "tip-block details" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "summary",
  null,
  "目录导航",
  -1
  /* HOISTED */
);
const _hoisted_8 = { class: "table-of-contents" };
const _hoisted_9 = { class: "tip-block details" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "summary",
  null,
  "目录导航",
  -1
  /* HOISTED */
);
const _hoisted_11 = { class: "table-of-contents" };
const _hoisted_12 = /* @__PURE__ */ createStaticVNode('<h2 id="标题" tabindex="-1"><a class="header-anchor" href="#标题" aria-hidden="true">#</a> 标题</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> 标题1</span>\n<span class="token title important">标题1\n<span class="token punctuation">====</span></span>\n\n<span class="token title important"><span class="token punctuation">##</span> 标题2</span>\n<span class="token title important">标题2\n<span class="token punctuation">----</span></span>\n\n<span class="token title important"><span class="token punctuation">###</span> 标题3</span>\n<span class="token title important"><span class="token punctuation">####</span> 标题4</span>\n<span class="token title important"><span class="token punctuation">#####</span> 标题5</span>\n<span class="token title important"><span class="token punctuation">######</span> 标题6</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="标题1" tabindex="-1"><a class="header-anchor" href="#标题1" aria-hidden="true">#</a> 标题1</h1><h1 id="标题1-1" tabindex="-1"><a class="header-anchor" href="#标题1-1" aria-hidden="true">#</a> 标题1</h1><h2 id="标题2" tabindex="-1"><a class="header-anchor" href="#标题2" aria-hidden="true">#</a> 标题2</h2><h2 id="标题2-1" tabindex="-1"><a class="header-anchor" href="#标题2-1" aria-hidden="true">#</a> 标题2</h2><h3 id="标题3" tabindex="-1"><a class="header-anchor" href="#标题3" aria-hidden="true">#</a> 标题3</h3><h4 id="标题4" tabindex="-1"><a class="header-anchor" href="#标题4" aria-hidden="true">#</a> 标题4</h4><h5 id="标题5" tabindex="-1"><a class="header-anchor" href="#标题5" aria-hidden="true">#</a> 标题5</h5><h6 id="标题6" tabindex="-1"><a class="header-anchor" href="#标题6" aria-hidden="true">#</a> 标题6</h6><h2 id="粗体" tabindex="-1"><a class="header-anchor" href="#粗体" aria-hidden="true">#</a> 粗体</h2><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token bold"><span class="token punctuation">**</span><span class="token content">粗体</span><span class="token punctuation">**</span></span>   <span class="token bold"><span class="token punctuation">__</span><span class="token content">粗体</span><span class="token punctuation">__</span></span>\n</code></pre></div><p><strong>粗体</strong> <strong>粗体</strong></p><h2 id="斜体" tabindex="-1"><a class="header-anchor" href="#斜体" aria-hidden="true">#</a> 斜体</h2><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token italic"><span class="token punctuation">*</span><span class="token content">斜体</span><span class="token punctuation">*</span></span>   <span class="token italic"><span class="token punctuation">_</span><span class="token content">斜体</span><span class="token punctuation">_</span></span>\n</code></pre></div><p><em>斜体</em> <em>斜体</em></p><h2 id="标记" tabindex="-1"><a class="header-anchor" href="#标记" aria-hidden="true">#</a> 标记</h2><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>==标记==\n</code></pre></div><p>==标记==</p><h2 id="上下角标" tabindex="-1"><a class="header-anchor" href="#上下角标" aria-hidden="true">#</a> 上下角标</h2><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>上角标 x^2^\n下角标 H<span class="token strike"><span class="token punctuation">~</span><span class="token content">2</span><span class="token punctuation">~</span></span>0\n</code></pre></div><p>上角标 x^2^ 下角标 H~2~0</p><h2 id="下划线-中划线" tabindex="-1"><a class="header-anchor" href="#下划线-中划线" aria-hidden="true">#</a> 下划线,中划线</h2><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>++下划线++    <span class="token strike"><span class="token punctuation">~~</span><span class="token content">中划线</span><span class="token punctuation">~~</span></span>\n</code></pre></div><p>++下划线++ <s>中划线</s></p><h2 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h2><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token title important">***\n<span class="token punctuation">---</span></span>\n</code></pre></div><hr><hr><h2 id="链接" tabindex="-1"><a class="header-anchor" href="#链接" aria-hidden="true">#</a> 链接</h2><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token url">[<span class="token content">链接文本</span>](<span class="token url">captives.github.com</span>)</span>\n<span class="token url">[<span class="token content">链接网站</span>](<span class="token url">https://captives.github.io</span>)</span>\n<span class="token url"><span class="token operator">!</span>[<span class="token content">网站logo图</span>](<span class="token url">/assets/logo.png</span>)</span>\n</code></pre></div>', 31);
const _hoisted_43 = /* @__PURE__ */ createBaseVNode(
  "a",
  { href: "captives.github.com" },
  "链接文本",
  -1
  /* HOISTED */
);
const _hoisted_44 = {
  href: "https://captives.github.io",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_45 = /* @__PURE__ */ createBaseVNode(
  "img",
  {
    src: _imports_0,
    alt: "网站logo图"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_46 = /* @__PURE__ */ createStaticVNode('<h2 id="有序列表" tabindex="-1"><a class="header-anchor" href="#有序列表" aria-hidden="true">#</a> 有序列表</h2><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">1.</span> 任务准备\n<span class="token list punctuation">2.</span> 任务准备\n<span class="token list punctuation">3.</span> 任务准备\n</code></pre></div><ol><li>任务准备</li><li>任务准备</li><li>任务准备</li></ol><h2 id="无序列表" tabindex="-1"><a class="header-anchor" href="#无序列表" aria-hidden="true">#</a> 无序列表</h2><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">-</span> 任务准备\n<span class="token list punctuation">-</span> 任务准备\n<span class="token list punctuation">-</span> 任务准备\n</code></pre></div><ul><li>任务准备</li><li>任务准备</li><li>任务准备</li></ul><h2 id="任务清单" tabindex="-1"><a class="header-anchor" href="#任务清单" aria-hidden="true">#</a> 任务清单</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token bold"><span class="token punctuation">**</span><span class="token content">购物清单</span><span class="token punctuation">**</span></span>\n\n<span class="token list punctuation">-</span> [ ] 一次性水杯\n<span class="token list punctuation">-</span> [x] 西瓜\n<span class="token list punctuation">-</span> [ ] 豆浆\n<span class="token list punctuation">-</span> [x] 可口可乐\n<span class="token list punctuation">-</span> [ ] 小茗同学\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>购物清单</strong></p><ul><li>[ ] 一次性水杯</li><li>[x] 西瓜</li><li>[ ] 豆浆</li><li>[x] 可口可乐</li><li>[ ] 小茗同学</li></ul><h2 id="段落引用" tabindex="-1"><a class="header-anchor" href="#段落引用" aria-hidden="true">#</a> 段落引用</h2><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token blockquote punctuation">&gt;</span> 一级\n<span class="token blockquote punctuation">&gt;&gt;</span> 二级\n<span class="token blockquote punctuation">&gt;&gt;&gt;</span> 三级\n\n</code></pre></div><blockquote><p>一级</p><blockquote><p>二级</p><blockquote><p>三级</p></blockquote></blockquote></blockquote><h2 id="容器语法" tabindex="-1"><a class="header-anchor" href="#容器语法" aria-hidden="true">#</a> 容器语法</h2><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>::: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">&gt;</span></span> [info]\n[content]\n:::\n</code></pre></div><p>type 是必须的，支持：提示[<code>tip</code>]、建议[<code>success</code>]、警告[<code>warning</code>]、危险[<code>danger</code>]、折叠块[<code>details</code>]</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tip\n<span class="token list punctuation">-</span> 阻止事件冒泡： <span class="token code-snippet code keyword">`event.stopPropagation()`</span> 或 <span class="token code-snippet code keyword">`event.cancelBubble = true (IE)`</span>\n<span class="token list punctuation">-</span> 阻止浏览器默认行为：<span class="token code-snippet code keyword">`event.preventDefault()`</span>\n:::\n\n::: success\n<span class="token list punctuation">-</span> 阻止事件冒泡： <span class="token code-snippet code keyword">`event.stopPropagation()`</span> 或 <span class="token code-snippet code keyword">`event.cancelBubble = true (IE)`</span>\n<span class="token list punctuation">-</span> 阻止浏览器默认行为：<span class="token code-snippet code keyword">`event.preventDefault()`</span>\n:::\n\n::: warning\n<span class="token list punctuation">-</span> 阻止事件冒泡： <span class="token code-snippet code keyword">`event.stopPropagation()`</span> 或 <span class="token code-snippet code keyword">`event.cancelBubble = true (IE)`</span>\n<span class="token list punctuation">-</span> 阻止浏览器默认行为：<span class="token code-snippet code keyword">`event.preventDefault()`</span>\n:::\n\n::: danger\n<span class="token list punctuation">-</span> 阻止事件冒泡： <span class="token code-snippet code keyword">`event.stopPropagation()`</span> 或 <span class="token code-snippet code keyword">`event.cancelBubble = true (IE)`</span>\n<span class="token list punctuation">-</span> 阻止浏览器默认行为：<span class="token code-snippet code keyword">`event.preventDefault()`</span>\n:::\n</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><br><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><br><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><br><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="tip-block tip"><p class="title">TIPS</p><ul><li>阻止事件冒泡： <code>event.stopPropagation()</code> 或 <code>event.cancelBubble = true (IE)</code></li><li>阻止浏览器默认行为：<code>event.preventDefault()</code></li></ul></div><div class="tip-block success"><p class="title">SUCCESS</p><ul><li>阻止事件冒泡： <code>event.stopPropagation()</code> 或 <code>event.cancelBubble = true (IE)</code></li><li>阻止浏览器默认行为：<code>event.preventDefault()</code></li></ul></div><div class="tip-block warning"><p class="title">WARNING</p><ul><li>阻止事件冒泡： <code>event.stopPropagation()</code> 或 <code>event.cancelBubble = true (IE)</code></li><li>阻止浏览器默认行为：<code>event.preventDefault()</code></li></ul></div><div class="tip-block danger"><p class="title">ERROR</p><ul><li>阻止事件冒泡： <code>event.stopPropagation()</code> 或 <code>event.cancelBubble = true (IE)</code></li><li>阻止浏览器默认行为：<code>event.preventDefault()</code></li></ul></div><h2 id="折叠块" tabindex="-1"><a class="header-anchor" href="#折叠块" aria-hidden="true">#</a> 折叠块</h2><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>::: details 查看更多\n<span class="token list punctuation">-</span> 阻止事件冒泡： <span class="token code-snippet code keyword">`event.stopPropagation()`</span> 或 <span class="token code-snippet code keyword">`event.cancelBubble = true (IE)`</span>\n<span class="token list punctuation">-</span> 阻止浏览器默认行为：<span class="token code-snippet code keyword">`event.preventDefault()`</span>\n:::\n</code></pre></div><details class="tip-block details"><summary>查看更多</summary><ul><li>阻止事件冒泡： <code>event.stopPropagation()</code> 或 <code>event.cancelBubble = true (IE)</code></li><li>阻止浏览器默认行为：<code>event.preventDefault()</code></li></ul></details><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-html" data-ext="html"><pre class="language-html"><code>```html\n  代码段落\n```\n`代码块`\n</code></pre></div><div class="language-html" data-ext="html"><pre class="language-html"><code>代码段落\n</code></pre></div><p><code>代码块</code></p><h3 id="代码高亮行" tabindex="-1"><a class="header-anchor" href="#代码高亮行" aria-hidden="true">#</a> 代码高亮行</h3><p>你可以在代码块添加<code>:line-numbers</code> / <code>:no-line-numbers</code>标记来覆盖配置项中的设置。 除了单行以外，你也可指定多行，行数区间，或是两者都指定。</p><ul><li>行数区间: 例如 {5-8}, {3-10}, {10-17}</li><li>多个单行: 例如 {4,7,9}</li><li>行数区间与多个单行: 例如 {4,7-13,16,23-27,40}</li><li>数字和<code>,</code>前后不可以有空格</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//需求：编写方法，实现冒泡</span>\n<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">,</span> <span class="token number">65</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">43</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token comment">//外层循环，控制趟数，每一次找到一个最大值</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 内层循环,控制比较的次数，并且判断两个数的大小</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 如果前面的数大，放到后面(当然是从小到大的冒泡排序)</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">var</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>\n            arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n            arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>  \n<span class="token comment">// [2, 3, 6, 12, 12, 31, 32, 35, 43, 45, 65]</span>\n</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导入代码块" tabindex="-1"><a class="header-anchor" href="#导入代码块" aria-hidden="true">#</a> 导入代码块</h2><p>你可以使用下面的语法，从文件中导入代码块：</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 最简单的语法 --&gt;</span>\n@<span class="token url">[<span class="token content">code</span>](<span class="token url">../foo.js</span>)</span>\n</code></pre></div><p>如果你只想导入这个文件的一部分：</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 仅导入第 1 行至第 10 行 --&gt;</span>\n@<span class="token url">[<span class="token content">code{1-10}</span>](<span class="token url">../foo.js</span>)</span>\n</code></pre></div><p>代码语言会根据文件扩展名进行推断，但我们建议你显式指定：</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 指定代码语言 --&gt;</span>\n@<span class="token url">[<span class="token content">code js</span>](<span class="token url">../foo.js</span>)</span>\n</code></pre></div><p>实际上，[] 内的第二部分会被作为代码块标记来处理，因此在上面 代码块 章节中提到的语法在这里都可以支持：</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 行高亮 --&gt;</span>\n@<span class="token url">[<span class="token content">code js{2,4-5}</span>](<span class="token url">../foo.js</span>)</span>\n</code></pre></div><p>在配置文件<code>config.js</code>中添加：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">importCode</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token function-variable function">handleImportPath</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>\n            str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^@src</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./../../&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文档中使用：</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>@<span class="token url">[<span class="token content">code</span>](<span class="token url">@src/views/Vuepress.vue</span>)</span>\n</code></pre></div><p>即可加载源码,内容如下</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n        Hello, Vue Press ~~\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;VuePress&quot;</span><span class="token punctuation">,</span>\n    <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Hello VuePress ~&quot;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 47);
const _hoisted_93 = {
  href: "https://v2.vuepress.vuejs.org/zh/guide/markdown.html#%E5%AF%BC%E5%85%A5%E4%BB%A3%E7%A0%81%E5%9D%97",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_94 = /* @__PURE__ */ createStaticVNode('<h2 id="表格" tabindex="-1"><a class="header-anchor" href="#表格" aria-hidden="true">#</a> 表格</h2><div class="language-html" data-ext="html"><pre class="language-html"><code>| 表格标题1 | 表格标题2 | 表格标题3 |\n| :-------- | :-------: | --------: |\n| 左对齐    |   居中    |    右对齐 |\n| --\\|--       |    --\\|--    |      --\\|-- |\n</code></pre></div><table><thead><tr><th style="text-align:left;">表格标题1</th><th style="text-align:center;">表格标题2</th><th style="text-align:right;">表格标题3</th></tr></thead><tbody><tr><td style="text-align:left;">左对齐</td><td style="text-align:center;">居中</td><td style="text-align:right;">右对齐</td></tr><tr><td style="text-align:left;">--|--</td><td style="text-align:center;">--|--</td><td style="text-align:right;">--|--</td></tr></tbody></table><h1 id="vue-语法" tabindex="-1"><a class="header-anchor" href="#vue-语法" aria-hidden="true">#</a> Vue 语法</h1><p>Vuepress可以直接使用Vue语法</p><h2 id="vue表达式" tabindex="-1"><a class="header-anchor" href="#vue表达式" aria-hidden="true">#</a> Vue表达式</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>一加一等于： <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n<span class="token operator">&lt;</span>span v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;i in 3&quot;</span><span class="token operator">&gt;</span> span<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> i <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>\n</code></pre></div>', 7);
const _hoisted_101 = /* @__PURE__ */ createStaticVNode('<h2 id="vue模块" tabindex="-1"><a class="header-anchor" href="#vue模块" aria-hidden="true">#</a> Vue模块</h2><p>参考 <a href="#vue%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F">高级配置 &gt; Vue环境变量</a></p><h2 id="vue-模块内sass语法" tabindex="-1"><a class="header-anchor" href="#vue-模块内sass语法" aria-hidden="true">#</a> Vue 模块内Sass语法</h2><p>Vuepress默认使用sass，可以在文档内通过<code>&lt;style&gt;&lt;/style&gt;</code>标签对直接书写sass语法，不支持 <code>scoped</code></p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">&lt;!-- 注释： 页面内样式 --&gt;\n&lt;style lang=&quot;scss&quot;&gt;\n    .poetry-home .home &gt; header </span><span class="token punctuation">{</span>\n        <span class="token property">margin-top</span><span class="token punctuation">:</span> 20%<span class="token punctuation">;</span>\n        <span class="token selector">h1 </span><span class="token punctuation">{</span>\n            <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;华文行楷&quot;</span><span class="token punctuation">;</span>\n            <span class="token property">font-size</span><span class="token punctuation">:</span> 6rem<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n&lt;/style&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2><div class="language-htmD" data-ext="htmD"><pre class="language-htmD"><code>&lt;!-- 注释： 此段区域内容不输出，但显示在DOM结构内 --&gt;\n</code></pre></div>', 7);
const _hoisted_108 = /* @__PURE__ */ createStaticVNode('<hr><h1 id="分组" tabindex="-1"><a class="header-anchor" href="#分组" aria-hidden="true">#</a> 分组</h1><h2 id="代码组合" tabindex="-1"><a class="header-anchor" href="#代码组合" aria-hidden="true">#</a> 代码组合</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>:::: code-group\n::: code-group-item utils/foo.js\n<span class="token code"><span class="token punctuation">```</span><span class="token code-language">js</span>\n<span class="token code-block language-js"><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span></span>\n<span class="token punctuation">```</span></span>\n:::\n::: code-group-item utils/bar.ts\n<span class="token code"><span class="token punctuation">```</span><span class="token code-language">ts</span>\n<span class="token code-block language-ts"><span class="token keyword">const</span> bar<span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span></span>\n<span class="token punctuation">```</span></span>\n:::\n::::\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 4);
const _hoisted_112 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-javascript",
    "data-ext": "js"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" foo "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'foo'"),
        /* @__PURE__ */ createTextVNode("\n")
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_113 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-typescript",
    "data-ext": "ts"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-typescript" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" bar"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token builtin" }, "string"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'bar'"),
        /* @__PURE__ */ createTextVNode("\n")
      ])
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_114 = /* @__PURE__ */ createStaticVNode('<h2 id="html分组" tabindex="-1"><a class="header-anchor" href="#html分组" aria-hidden="true">#</a> HTML分组</h2><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">columns</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n严格地说，这个集子很难说是“自选集”。“自选集”应该是从大量的作品里选出自己认为比较满意的。我不能做到这一点。一则是我的作品数量本来就少，挑得严了，就更会所剩无几；二则，我对自己得作品无偏爱。有以为外国的汉学家发给我一张调查表，其中一栏是：“你认为自己最具有代表性的作品是哪几篇”，我实在不知道如何填。我的自选集不是选出了多少篇，而是从我的作品里剔除了一些篇。这不像农民田间选种，倒有点像老太太择（zhai）菜。老太太择菜是很宽容的，往往把择掉的黄叶、桔梗拿起来再看看，觉得凑活着还能吃，于是又搁回到好菜的一堆里。常言说：剪刀篮里的都是菜，我对自选集就有一点是这样。\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>\n汪曾祺先生 一九八六年十二月十四日序于北京蒲黄榆路寓居~\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div style="columns:3;"> 严格地说，这个集子很难说是“自选集”。“自选集”应该是从大量的作品里选出自己认为比较满意的。我不能做到这一点。一则是我的作品数量本来就少，挑得严了，就更会所剩无几；二则，我对自己得作品无偏爱。有以为外国的汉学家发给我一张调查表，其中一栏是：“你认为自己最具有代表性的作品是哪几篇”，我实在不知道如何填。我的自选集不是选出了多少篇，而是从我的作品里剔除了一些篇。这不像农民田间选种，倒有点像老太太择（zhai）菜。老太太择菜是很宽容的，往往把择掉的黄叶、桔梗拿起来再看看，觉得凑活着还能吃，于是又搁回到好菜的一堆里。常言说：剪刀篮里的都是菜，我对自选集就有一点是这样。 <br><br> 汪曾祺先生 一九八六年十二月十四日序于北京蒲黄榆路寓居~ </div><h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> Frontmatter</h2>', 4);
const _hoisted_118 = {
  href: "https://v2.vuepress.vuejs.org/zh/reference/frontmatter.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_119 = /* @__PURE__ */ createStaticVNode('<h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> cover</h3><p>页面头图，添加图片地址，可自动在页面顶部显示</p><h3 id="cover-fit-coverfit" tabindex="-1"><a class="header-anchor" href="#cover-fit-coverfit" aria-hidden="true">#</a> cover-fit/coverFit</h3><p>页面头图填充模式，参考css样式<code>background-size</code>属性</p><h2 id="高级配置" tabindex="-1"><a class="header-anchor" href="#高级配置" aria-hidden="true">#</a> 高级配置</h2><h3 id="vue环境变量" tabindex="-1"><a class="header-anchor" href="#vue环境变量" aria-hidden="true">#</a> Vue环境变量</h3>', 6);
const _hoisted_125 = /* @__PURE__ */ createStaticVNode('<p>脚本源码：</p><div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>{{ title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span>  <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token string">&quot;API：&quot;</span> <span class="token operator">+</span> <span class="token constant">V<wbr>UE_APP_API</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>在<code>config.js</code>配置中添加<code>define</code>字段：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>  <span class="token literal-property property">define</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">__GLOBAL_BOOLEAN__</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">__GLOBAL_STRING__</span><span class="token operator">:</span> <span class="token string">&#39;foobar&#39;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">__GLOBAL_OBJECT__</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre></div><p>在文档的<code>&lt;script&gt;</code>中,即可访问：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>__GLOBAL_BOOLEAN__<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>__GLOBAL_STRING__<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;foobar&#39;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>__GLOBAL_OBJECT__<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;{ foo: &#39;bar&#39; }&quot;</span>\n</code></pre></div>', 6);
const _hoisted_131 = {
  href: "https://v2.vuepress.vuejs.org/zh/reference/plugin-api.html#define",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_132 = {
  href: "https://v2.vuepress.vuejs.org/zh/advanced/cookbook/passing-data-to-client-code.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_133 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "define",
  -1
  /* HOISTED */
);
const _hoisted_134 = /* @__PURE__ */ createStaticVNode('<h3 id="路径别名" tabindex="-1"><a class="header-anchor" href="#路径别名" aria-hidden="true">#</a> 路径别名</h3><p>在配置文件中设置的路径别名<code>alias</code>：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string-property property">&#39;~&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./../../assets/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./../../&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre></div><p>这样就很方便的在文档的<code>&lt;script&gt;</code>中导入异步组件：</p>', 4);
const _hoisted_138 = /* @__PURE__ */ createStaticVNode('<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>date-string</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Date.now()<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>date-string</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span>  <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n    <span class="token keyword">import</span> <span class="token punctuation">{</span> defineAsyncComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> DateString <span class="token operator">=</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/components/DateString.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>图片资源，可以如下使用：</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">vuepress</span>](<span class="token url">@/assets/hero.png</span>)</span>\n</code></pre></div><p>即可如下呈现出来</p><p><img src="' + _imports_1 + '" alt="vuepress"></p>', 5);
const _hoisted_143 = {
  href: "https://v2.vuepress.vuejs.org/zh/reference/plugin-api.html#alias",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_144 = {
  href: "https://v2.vuepress.vuejs.org/zh/guide/assets.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _sfc_main = {
  __name: "markdown.html",
  setup(__props) {
    const DateString = defineAsyncComponent(() => __vitePreload(() => import("./DateString-4b826fd6.js"), true ? ["assets/DateString-4b826fd6.js","assets/vue-class-component.esm-bundler-d9d0d3b8.js","assets/app-c3a13116.js","assets/framework-cc2b3d55.js"] : void 0));
    const title = computed(() => "API：https://captives.github.io/api");
    return (_ctx, _cache) => {
      const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
      const _component_router_link = resolveComponent("router-link");
      const _component_CodeGroupItem = resolveComponent("CodeGroupItem");
      const _component_CodeGroup = resolveComponent("CodeGroup");
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        _hoisted_2,
        createBaseVNode("p", null, [
          createBaseVNode("a", _hoisted_3, [
            _hoisted_4,
            createTextVNode("组件使用"),
            createVNode(_component_ExternalLinkIcon)
          ])
        ]),
        _hoisted_5,
        createBaseVNode("details", _hoisted_6, [
          _hoisted_7,
          createBaseVNode("nav", _hoisted_8, [
            createBaseVNode("ul", null, [
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#目录" }, {
                  default: withCtx(() => [
                    createTextVNode("目录")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#标题" }, {
                  default: withCtx(() => [
                    createTextVNode("标题")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#标题2" }, {
                  default: withCtx(() => [
                    createTextVNode("标题2")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#标题2-1" }, {
                  default: withCtx(() => [
                    createTextVNode("标题2")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createBaseVNode("ul", null, [
                  createBaseVNode("li", null, [
                    createVNode(_component_router_link, { to: "#标题3" }, {
                      default: withCtx(() => [
                        createTextVNode("标题3")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createBaseVNode("ul", null, [
                      createBaseVNode("li", null, [
                        createVNode(_component_router_link, { to: "#标题4" }, {
                          default: withCtx(() => [
                            createTextVNode("标题4")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createBaseVNode("ul", null, [
                          createBaseVNode("li", null, [
                            createVNode(_component_router_link, { to: "#标题5" }, {
                              default: withCtx(() => [
                                createTextVNode("标题5")
                              ]),
                              _: 1
                              /* STABLE */
                            })
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#粗体" }, {
                  default: withCtx(() => [
                    createTextVNode("粗体")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#斜体" }, {
                  default: withCtx(() => [
                    createTextVNode("斜体")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#标记" }, {
                  default: withCtx(() => [
                    createTextVNode("标记")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#上下角标" }, {
                  default: withCtx(() => [
                    createTextVNode("上下角标")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#下划线-中划线" }, {
                  default: withCtx(() => [
                    createTextVNode("下划线,中划线")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#分割线" }, {
                  default: withCtx(() => [
                    createTextVNode("分割线")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#链接" }, {
                  default: withCtx(() => [
                    createTextVNode("链接")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#有序列表" }, {
                  default: withCtx(() => [
                    createTextVNode("有序列表")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#无序列表" }, {
                  default: withCtx(() => [
                    createTextVNode("无序列表")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#任务清单" }, {
                  default: withCtx(() => [
                    createTextVNode("任务清单")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#段落引用" }, {
                  default: withCtx(() => [
                    createTextVNode("段落引用")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#容器语法" }, {
                  default: withCtx(() => [
                    createTextVNode("容器语法")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#折叠块" }, {
                  default: withCtx(() => [
                    createTextVNode("折叠块")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#代码" }, {
                  default: withCtx(() => [
                    createTextVNode("代码")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createBaseVNode("ul", null, [
                  createBaseVNode("li", null, [
                    createVNode(_component_router_link, { to: "#代码高亮行" }, {
                      default: withCtx(() => [
                        createTextVNode("代码高亮行")
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ])
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#导入代码块" }, {
                  default: withCtx(() => [
                    createTextVNode("导入代码块")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#表格" }, {
                  default: withCtx(() => [
                    createTextVNode("表格")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#vue表达式" }, {
                  default: withCtx(() => [
                    createTextVNode("Vue表达式")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#vue模块" }, {
                  default: withCtx(() => [
                    createTextVNode("Vue模块")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#vue-模块内sass语法" }, {
                  default: withCtx(() => [
                    createTextVNode("Vue 模块内Sass语法")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#注释" }, {
                  default: withCtx(() => [
                    createTextVNode("注释")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#代码组合" }, {
                  default: withCtx(() => [
                    createTextVNode("代码组合")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#html分组" }, {
                  default: withCtx(() => [
                    createTextVNode("HTML分组")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#frontmatter" }, {
                  default: withCtx(() => [
                    createTextVNode("Frontmatter")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createBaseVNode("ul", null, [
                  createBaseVNode("li", null, [
                    createVNode(_component_router_link, { to: "#cover" }, {
                      default: withCtx(() => [
                        createTextVNode("cover")
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  createBaseVNode("li", null, [
                    createVNode(_component_router_link, { to: "#cover-fit-coverfit" }, {
                      default: withCtx(() => [
                        createTextVNode("cover-fit/coverFit")
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ])
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#高级配置" }, {
                  default: withCtx(() => [
                    createTextVNode("高级配置")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createBaseVNode("ul", null, [
                  createBaseVNode("li", null, [
                    createVNode(_component_router_link, { to: "#vue环境变量" }, {
                      default: withCtx(() => [
                        createTextVNode("Vue环境变量")
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  createBaseVNode("li", null, [
                    createVNode(_component_router_link, { to: "#路径别名" }, {
                      default: withCtx(() => [
                        createTextVNode("路径别名")
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ])
              ])
            ])
          ])
        ]),
        createBaseVNode("details", _hoisted_9, [
          _hoisted_10,
          createBaseVNode("nav", _hoisted_11, [
            createBaseVNode("ul", null, [
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#目录" }, {
                  default: withCtx(() => [
                    createTextVNode("目录")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#标题" }, {
                  default: withCtx(() => [
                    createTextVNode("标题")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#标题2" }, {
                  default: withCtx(() => [
                    createTextVNode("标题2")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#标题2-1" }, {
                  default: withCtx(() => [
                    createTextVNode("标题2")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createBaseVNode("ul", null, [
                  createBaseVNode("li", null, [
                    createVNode(_component_router_link, { to: "#标题3" }, {
                      default: withCtx(() => [
                        createTextVNode("标题3")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createBaseVNode("ul", null, [
                      createBaseVNode("li", null, [
                        createVNode(_component_router_link, { to: "#标题4" }, {
                          default: withCtx(() => [
                            createTextVNode("标题4")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createBaseVNode("ul", null, [
                          createBaseVNode("li", null, [
                            createVNode(_component_router_link, { to: "#标题5" }, {
                              default: withCtx(() => [
                                createTextVNode("标题5")
                              ]),
                              _: 1
                              /* STABLE */
                            })
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#粗体" }, {
                  default: withCtx(() => [
                    createTextVNode("粗体")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#斜体" }, {
                  default: withCtx(() => [
                    createTextVNode("斜体")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#标记" }, {
                  default: withCtx(() => [
                    createTextVNode("标记")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#上下角标" }, {
                  default: withCtx(() => [
                    createTextVNode("上下角标")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#下划线-中划线" }, {
                  default: withCtx(() => [
                    createTextVNode("下划线,中划线")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#分割线" }, {
                  default: withCtx(() => [
                    createTextVNode("分割线")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#链接" }, {
                  default: withCtx(() => [
                    createTextVNode("链接")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#有序列表" }, {
                  default: withCtx(() => [
                    createTextVNode("有序列表")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#无序列表" }, {
                  default: withCtx(() => [
                    createTextVNode("无序列表")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#任务清单" }, {
                  default: withCtx(() => [
                    createTextVNode("任务清单")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#段落引用" }, {
                  default: withCtx(() => [
                    createTextVNode("段落引用")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#容器语法" }, {
                  default: withCtx(() => [
                    createTextVNode("容器语法")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#折叠块" }, {
                  default: withCtx(() => [
                    createTextVNode("折叠块")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#代码" }, {
                  default: withCtx(() => [
                    createTextVNode("代码")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createBaseVNode("ul", null, [
                  createBaseVNode("li", null, [
                    createVNode(_component_router_link, { to: "#代码高亮行" }, {
                      default: withCtx(() => [
                        createTextVNode("代码高亮行")
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ])
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#导入代码块" }, {
                  default: withCtx(() => [
                    createTextVNode("导入代码块")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#表格" }, {
                  default: withCtx(() => [
                    createTextVNode("表格")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#vue表达式" }, {
                  default: withCtx(() => [
                    createTextVNode("Vue表达式")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#vue模块" }, {
                  default: withCtx(() => [
                    createTextVNode("Vue模块")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#vue-模块内sass语法" }, {
                  default: withCtx(() => [
                    createTextVNode("Vue 模块内Sass语法")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#注释" }, {
                  default: withCtx(() => [
                    createTextVNode("注释")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#代码组合" }, {
                  default: withCtx(() => [
                    createTextVNode("代码组合")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#html分组" }, {
                  default: withCtx(() => [
                    createTextVNode("HTML分组")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#frontmatter" }, {
                  default: withCtx(() => [
                    createTextVNode("Frontmatter")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createBaseVNode("ul", null, [
                  createBaseVNode("li", null, [
                    createVNode(_component_router_link, { to: "#cover" }, {
                      default: withCtx(() => [
                        createTextVNode("cover")
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  createBaseVNode("li", null, [
                    createVNode(_component_router_link, { to: "#cover-fit-coverfit" }, {
                      default: withCtx(() => [
                        createTextVNode("cover-fit/coverFit")
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ])
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#高级配置" }, {
                  default: withCtx(() => [
                    createTextVNode("高级配置")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createBaseVNode("ul", null, [
                  createBaseVNode("li", null, [
                    createVNode(_component_router_link, { to: "#vue环境变量" }, {
                      default: withCtx(() => [
                        createTextVNode("Vue环境变量")
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  createBaseVNode("li", null, [
                    createVNode(_component_router_link, { to: "#路径别名" }, {
                      default: withCtx(() => [
                        createTextVNode("路径别名")
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ])
              ])
            ])
          ])
        ]),
        _hoisted_12,
        createBaseVNode("p", null, [
          _hoisted_43,
          createBaseVNode("a", _hoisted_44, [
            createTextVNode("链接网站"),
            createVNode(_component_ExternalLinkIcon)
          ]),
          _hoisted_45
        ]),
        _hoisted_46,
        createBaseVNode("p", null, [
          createTextVNode("更多使用方式参考"),
          createBaseVNode("a", _hoisted_93, [
            createTextVNode("VuePress 导入代码块"),
            createVNode(_component_ExternalLinkIcon)
          ])
        ]),
        _hoisted_94,
        createBaseVNode("p", null, [
          createTextVNode("一加一等于： " + toDisplayString(1 + 1) + " "),
          (openBlock(), createElementBlock(
            Fragment,
            null,
            renderList(3, (i) => {
              return createBaseVNode(
                "span",
                null,
                " span: " + toDisplayString(i),
                1
                /* TEXT */
              );
            }),
            64
            /* STABLE_FRAGMENT */
          ))
        ]),
        _hoisted_101,
        createCommentVNode(" 注释： 此段区域内容不输出，但显示在DOM结构内 "),
        _hoisted_108,
        createVNode(_component_CodeGroup, null, {
          default: withCtx(() => [
            createVNode(_component_CodeGroupItem, { title: "utils/foo.js" }, {
              default: withCtx(() => [
                _hoisted_112
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_CodeGroupItem, { title: "utils/bar.ts" }, {
              default: withCtx(() => [
                _hoisted_113
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        _hoisted_114,
        createBaseVNode("p", null, [
          createTextVNode("本章节中的 Frontmatter 会在所有类型的页面中生效。 继承"),
          createBaseVNode("a", _hoisted_118, [
            createTextVNode("Vuepress > 参考 > 默认主题 > Frontmatter"),
            createVNode(_component_ExternalLinkIcon)
          ]),
          createTextVNode("下所有功能，以下属性为官方功能的扩展")
        ]),
        _hoisted_119,
        createBaseVNode("p", null, [
          createBaseVNode(
            "b",
            null,
            toDisplayString(unref(title)),
            1
            /* TEXT */
          )
        ]),
        _hoisted_125,
        createBaseVNode("p", null, [
          createTextVNode("文章参考"),
          createBaseVNode("a", _hoisted_131, [
            createTextVNode("插件API > 开发Hooks > define"),
            createVNode(_component_ExternalLinkIcon)
          ]),
          createBaseVNode("a", _hoisted_132, [
            createTextVNode("向客户端代码传递数据 > 使用"),
            _hoisted_133,
            createTextVNode("Hook"),
            createVNode(_component_ExternalLinkIcon)
          ])
        ]),
        _hoisted_134,
        createVNode(unref(DateString), {
          value: Date.now()
        }, null, 8, ["value"]),
        _hoisted_138,
        createBaseVNode("p", null, [
          createTextVNode("文章参考"),
          createBaseVNode("a", _hoisted_143, [
            createTextVNode("插件API > 开发Hooks > alias"),
            createVNode(_component_ExternalLinkIcon)
          ]),
          createBaseVNode("a", _hoisted_144, [
            createTextVNode("静态资源 > 依赖包和路径别名"),
            createVNode(_component_ExternalLinkIcon)
          ])
        ])
      ]);
    };
  }
};
const markdown_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "markdown.html.vue"]]);
export {
  markdown_html as default
};
