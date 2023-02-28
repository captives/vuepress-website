import { r as resolveComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, f as createVNode, g as withCtx, e as createTextVNode, j as createStaticVNode } from "./app-c3a13116.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "javascript-知识点",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#javascript-知识点",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" JavaScript 知识点")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = { class: "tip-block details" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "summary",
  null,
  "目录",
  -1
  /* HOISTED */
);
const _hoisted_4 = { class: "table-of-contents" };
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<h2 id="基础部分" tabindex="-1"><a class="header-anchor" href="#基础部分" aria-hidden="true">#</a> 基础部分</h2><h3 id="js有哪些内置对象" tabindex="-1"><a class="header-anchor" href="#js有哪些内置对象" aria-hidden="true">#</a> js有哪些内置对象？</h3><p><code>String</code>、<code>Number</code>、<code>Boolean</code>、<code>Array</code>、<code>Object</code>、<code>Math</code>、<code>Date</code>、<code>RegExp</code> ....</p><h3 id="js有哪些数据类型" tabindex="-1"><a class="header-anchor" href="#js有哪些数据类型" aria-hidden="true">#</a> js有哪些数据类型</h3><ol><li>基本类型：String、Number、Boolean、null、undefined、Symbol</li><li>引用类型：Object（Array、Map、Function）</li></ol><p>Symbol：ES6引入了一种新的原始数据类型<code>Symbol</code>，表示独一无二的值，最大的用法是用来定义对象的唯一属性名。 <code>Symbol</code>函数栈不能用<code>new</code>命令，因为<code>Symbol</code>是原始数据类型，不是对象。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    data<span class="token punctuation">[</span><span class="token function">Symbol</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>				<span class="token comment">//</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>			<span class="token comment">//[]</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Reflect<span class="token punctuation">.</span><span class="token function">ownKeys</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>		 <span class="token comment">//[Symbol(0),Symbol(1) ...]</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertySymbols</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[Symbol(0),Symbol(1) ...]</span>\n\nReflect<span class="token punctuation">.</span><span class="token function">ownKeys</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> data<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Symbol(0) 0 ....</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 7);
const _hoisted_12 = { class: "tip-block warning" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "title" },
  "注意：",
  -1
  /* HOISTED */
);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "for...in",
  -1
  /* HOISTED */
);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "for...of",
  -1
  /* HOISTED */
);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "Object.keys()",
  -1
  /* HOISTED */
);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "Object.getOwnPropertyNames()",
  -1
  /* HOISTED */
);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "Object.getOwnPropertySymbols()",
  -1
  /* HOISTED */
);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "Reflect.ownKeys()",
  -1
  /* HOISTED */
);
const _hoisted_20 = {
  href: "https://www.runoob.com/w3cnote/es6-symbol.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_21 = /* @__PURE__ */ createStaticVNode('<h3 id="javascript有几种类型的值" tabindex="-1"><a class="header-anchor" href="#javascript有几种类型的值" aria-hidden="true">#</a> JavaScript有几种类型的值</h3><ol><li>栈：原始(基本)数据类型（String、Number、Boolean、null、undefined、Symbol）</li><li>堆：引用数据类型（对象、数组、函数）</li></ol><h3 id="栈和堆的区别" tabindex="-1"><a class="header-anchor" href="#栈和堆的区别" aria-hidden="true">#</a> 栈和堆的区别</h3><ul><li>堆：动态分配内存，内存大小不一，也不会自动释放</li><li>栈：自动分配相对固定大小的内存空间，并由系统自动释放</li><li>基本类型都是存储在栈中，每种类型的数据占用的空间的大小是确定的，并由系统自动分配和释放。内存可以及时回收。</li><li>引用类型的数据都是存储在堆中。准确说是栈中会存储这些数据的地址指针，并指向堆中的具体数据。</li></ul><h3 id="undefined-和-null-区别" tabindex="-1"><a class="header-anchor" href="#undefined-和-null-区别" aria-hidden="true">#</a> undefined 和 null 区别</h3><ol><li><p><code>null</code> 语义表示空值，定义了，但是为空值；空对象指针类型</p><ul><li>作为函数的参数，表示该函数的参数不是对象。</li><li>作为对象原型链的终点。</li></ul></li><li><p><code>undefined</code> 表示未定义。声明了一个变量未初始化时，得到的就是 <code>undefined</code>。</p><ul><li>变量被声明了，但没有赋值时，就等于undefined。</li><li>调用函数时，应该提供的参数没有提供，该参数就等于undefined。</li><li>对象没有赋值的属性，该属性的值为undefined。</li><li>函数没有返回值时，默认返回undefined。</li></ul></li><li><p><code>null</code>和<code>undefined</code>区别</p></li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">typeof</span> <span class="token keyword">undefined</span>             <span class="token comment">// undefined</span>\n<span class="token keyword">typeof</span> <span class="token keyword">null</span>                  <span class="token comment">// object</span>\n<span class="token keyword">null</span> <span class="token operator">===</span> <span class="token keyword">undefined</span>           <span class="token comment">// false</span>\n<span class="token keyword">null</span> <span class="token operator">==</span> <span class="token keyword">undefined</span>            <span class="token comment">// true</span>\n</code></pre></div><h3 id="对this的理解" tabindex="-1"><a class="header-anchor" href="#对this的理解" aria-hidden="true">#</a> 对this的理解</h3><ol><li>单独使用，<code>this</code>表示全局对象</li><li>在函数中，<code>this</code>表示全局对象</li><li>在对象的一个函数方法中，<code>this</code>表示这个对象</li><li>可以通过<code>apply</code>、<code>bind</code>、<code>call</code>来更改函数<code>this</code>的指向</li></ol><div class="tip-block warning"><p class="title">注意：</p><p>this永远指向的是最后调用它的对象，仅当它在对象的一个函数方法中时会有差异</p></div><h3 id="if语句有作用域吗" tabindex="-1"><a class="header-anchor" href="#if语句有作用域吗" aria-hidden="true">#</a> <code>if</code>语句有作用域吗?</h3><p>只有函数有作用域，<code>if</code>是没有作用域的。</p><p>但是在<code>if { }</code>语句中，使用<code>const</code>、<code>let</code>他们会有块级作用域。</p><h3 id="原型链和作用域链的区别" tabindex="-1"><a class="header-anchor" href="#原型链和作用域链的区别" aria-hidden="true">#</a> 原型链和作用域链的区别</h3><ol><li>原型链</li></ol><p>当访问一个对象的某个属性时，会先在这个对象本身的属性上找，如果没有找到，会去这个属性的<code>__proto__</code>属性上找，即这个构造函数的<code>prototype</code>；如果还没找到，就会继续在<code>__proto__</code>上查找，直到最顶层，找不到即为<code>undefined</code>。这样一层一层往上找，彷佛是一条链子串起来，所以叫做原型链。</p><ul><li>对象 obj --&gt; Object.prototype --&gt; null;</li><li>函数 fun --&gt; Function.prototype --&gt; Object.prototype --&gt; null</li><li>数组 arr --&gt; Array.prototype --&gt; Object.prototype --&gt; null</li></ul><ol start="2"><li>作用域链</li></ol><p>变量取值会到创建这个变量的函数的作用域中取值。 如果找不到，就会向上级作用域去查，直到查到全局作用域，这么一个查找过程形成的链条就叫做作用域链。</p><ol start="3"><li>区别 <ul><li>作用域是对<strong>变量</strong>而言，原型链是对于<strong>对象的属性</strong>而言</li><li>作用域链的顶层是<code>window</code>，原型链的顶层是<code>Object</code></li></ul></li></ol><details class="tip-block details"><summary>示例：写出代码的打印结果</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> <span class="token function-variable function">F</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token string">&quot;value a&quot;</span><span class="token punctuation">;</span>\n<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token string">&quot;value b&quot;</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> 	<span class="token comment">//value a</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//undefined</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">F</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//value a</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">F</span><span class="token punctuation">.</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//value b</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="js-判断对象类型-typeof、instanceof-区别" tabindex="-1"><a class="header-anchor" href="#js-判断对象类型-typeof、instanceof-区别" aria-hidden="true">#</a> js 判断对象类型(<code>typeof</code>、<code>instanceOf</code>)区别</h3><ol><li><code>typeof</code> 可以用此来判断 <code>number</code>, <code>string</code>, <code>boolean</code>, <code>undefined</code>, <code>symbol</code>, <code>object</code>, <code>function</code></li></ol><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">结果</th></tr></thead><tbody><tr><td style="text-align:left;">String</td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;">Number</td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;">Boolean</td><td style="text-align:left;"><code>boolean</code></td></tr><tr><td style="text-align:left;">Undefined</td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;">Symbol</td><td style="text-align:left;"><code>symbol</code></td></tr><tr><td style="text-align:left;">Object</td><td style="text-align:left;"><code>object</code></td></tr><tr><td style="text-align:left;">function</td><td style="text-align:left;"><code>function</code></td></tr></tbody></table><p>检测不出<code>null</code>和<code>Array</code>， <code>Object</code>，因为结果都为<code>object</code></p><details class="tip-block details"><summary>示例</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span> <span class="token string">&quot;number&quot;</span>\n<span class="token number">124</span> string\n<span class="token keyword">null</span> <span class="token string">&quot;object&quot;</span> <span class="token comment">//null值表示一个空对象指针</span>\n<span class="token boolean">true</span> <span class="token string">&quot;boolean&quot;</span>\n<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token string">&quot;object&quot;</span>\n<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token string">&quot;object&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><ol start="2"><li><code>instanceof</code></li></ol><p><code>instanceof</code>运算符用于检测构造函数的<code>prototype</code>属性是否出现在某个实例对象的原型链上,返回值为布尔值；用于检测一个变量是否属于某个对象的实例。</p><p>其语法如下所示：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>object <span class="token keyword">instanceof</span> <span class="token class-name">constructor</span>\n</code></pre></div><p><code>instanceof</code>主要的实现原理就是只要右边变量的<code>prototype</code>在左边变量的原型链上即可。因此，<code>instanceof</code>在查找的过程中会遍历左边变量的原型链，直到找到右边变量的<code>prototype</code>; 如果查找失败，则会返回<code>false</code>.</p><p>不能检测出<code>number</code>、<code>boolean</code>、<code>string</code>、<code>undefined</code>、<code>null</code>、<code>symbol</code>类型，所以<code>instancof</code>常用于检测复杂类型以及级成关系。</p><details class="tip-block details"><summary>示例</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> f <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> h <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> i <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> f <span class="token keyword">instanceof</span> <span class="token class-name">Boolean</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>h<span class="token punctuation">,</span> h <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> i <span class="token keyword">instanceof</span> <span class="token class-name">Date</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>代码实现<code>instanceOf</code></p>', 34);
const _hoisted_55 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-javascript line-numbers-mode",
    "data-ext": "js"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "instanceOf"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token parameter" }, [
          /* @__PURE__ */ createTextVNode("s"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(" t")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "var"),
        /* @__PURE__ */ createTextVNode(" p "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" s"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "while"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("p"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "if"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("p "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "==="),
        /* @__PURE__ */ createTextVNode(" t"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("prototype"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n	"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "return"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token boolean" }, "true"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n    p "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" p"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("__proto__"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
        /* @__PURE__ */ createTextVNode("\n  "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "return"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token boolean" }, "false"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", {
      class: "line-numbers",
      "aria-hidden": "true"
    }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_56 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-javascript line-numbers-mode",
    "data-ext": "js"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "function"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "instanceOf"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token parameter" }, [
          /* @__PURE__ */ createTextVNode("left"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
          /* @__PURE__ */ createTextVNode(" right")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "let"),
        /* @__PURE__ */ createTextVNode(" leftVal "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" Object"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "getPrototypeOf"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("left"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" rightVal "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" right"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("prototype"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
        /* @__PURE__ */ createTextVNode("\n\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "while"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("leftVal "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "!=="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "null"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "if"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("leftVal "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "==="),
        /* @__PURE__ */ createTextVNode(" rightVal"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n            "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "return"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token boolean" }, "true"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
        /* @__PURE__ */ createTextVNode("\n        leftVal "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" Object"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "getPrototypeOf"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("leftVal"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "return"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token boolean" }, "false"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", {
      class: "line-numbers",
      "aria-hidden": "true"
    }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_57 = /* @__PURE__ */ createStaticVNode('<ol start="3"><li><code>constructor</code></li></ol><p><code>null</code>、<code>undefined</code>没有<code>construstor</code>方法，因此<code>constructor</code>不能判断<code>undefined</code>和<code>null</code>。但是<code>contructor</code>的指向是可以被改变，所以不安全</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> Array<span class="token punctuation">)</span> <span class="token comment">// ture</span>\n</code></pre></div><ol start="4"><li><code>Object.prototype.toString.call</code></li></ol><p>全类型都可以判断</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// [object Array]</span>\n</code></pre></div><h3 id="普通函数和箭头函数的区别" tabindex="-1"><a class="header-anchor" href="#普通函数和箭头函数的区别" aria-hidden="true">#</a> 普通函数和箭头函数的区别</h3><ol><li><p>普通函数</p><ul><li>可以通过bind、call、apply改变this指向</li><li>可以使用new</li></ul></li><li><p>箭头函数</p><ul><li>本身没有<code>this</code>指向，它的<code>this</code>在定义的时候继承自外层第一个普通函数的<code>this</code>,被继承的普通函数的<code>this</code>指向改变时，箭头函数的this指向也会跟着改变。</li><li>箭头函数外层没有普通函数时，<code>this</code>指向<code>window</code>, 不能通过<code>bind</code>、<code>call</code>、<code>apply</code>改变<code>this</code>指向;</li><li>使用<code>new</code>调用箭头函数会报错，因为箭头函数没有<code>constructor</code>;</li></ul></li></ol><h3 id="document-write和document-innerhtml的区别" tabindex="-1"><a class="header-anchor" href="#document-write和document-innerhtml的区别" aria-hidden="true">#</a> <code>document.write</code>和<code>document.innerHTML</code>的区别</h3><p><code>document.write</code>将内容写入页面，清空替换掉原来的内容，会导致重绘 <code>document.innerHTML</code>将内容写入某个DOM节点，不会重绘页面;</p><h3 id="bind、call、apply的区别" tabindex="-1"><a class="header-anchor" href="#bind、call、apply的区别" aria-hidden="true">#</a> <code>bind</code>、<code>call</code>、<code>apply</code>的区别</h3><p>三者均可以更改<code>this</code>指向, 可以编写<strong>能够在不同对象上</strong>使用的方法。</p><ol><li>bind <ul><li><code>bind(thisArg, arg...)</code>方法<strong>创建</strong>一个新的函数，在<code>bind()</code>被调用时，这个新函数的<code>this</code>被指定为<code>bind()</code>的第一个参数，而其余参数将作为新函数的参数，供调用时使用;(例如，<code>f.bind(obj)</code>，可以理解为<code>obj.f()</code>，这时f函数体内的this自然指向的是obj)。</li><li>返回一个原函数的拷贝，并拥有指定的 this 值和初始参数。</li></ul></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Seven&quot;</span><span class="token punctuation">,</span>\n    <span class="token function-variable function">fullName</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">city</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot; in &quot;</span> <span class="token operator">+</span> city<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span><span class="token function">fullName</span><span class="token punctuation">(</span><span class="token string">&#39;HZ&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n\n<span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&quot;window&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> func <span class="token operator">=</span> person<span class="token punctuation">.</span><span class="token function">fullName</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">&#39;CH&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//更改指向到Window</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span><span class="token function">fullName</span><span class="token punctuation">(</span><span class="token string">&#39;HZ&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//Seven in HZ</span>\n<span class="token comment">//window in CH</span>\n<span class="token comment">//Seven in HZ</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="tip-block details"><summary>代码实现bind</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">bind1</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">this</span> <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;The bound object needs to be a function&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> <span class="token function-variable function">fNOP</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> <span class="token function-variable function">fBound</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>fBoundArgs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 指定this</span>\n        <span class="token comment">// 当作为构造函数时，this 指向实例，此时 this instanceof fBound 结果为 true</span>\n        <span class="token keyword">return</span> <span class="token function">self</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">fNOP</span> <span class="token operator">?</span> <span class="token keyword">this</span> <span class="token operator">:</span> context<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">...</span>args<span class="token punctuation">,</span> <span class="token operator">...</span>fBoundArgs<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">//  修改返回函数的 prototype 为绑定函数的 prototype,为了避免直接修改this的原型，所以新建了一个fNOP函数作为中介</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        fNOP<span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    fBound<span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fNOP</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> fBound<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><ol start="2"><li><code>call</code><ul><li>使用<code>call(thisArg, arg...)</code>方法，您可以编写<strong>能够在不同对象上</strong>使用的方法。</li><li>使用一个指定的<code>this</code>对象和给出的参数来调用函数；</li></ul></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">firstName</span><span class="token operator">:</span><span class="token string">&quot;Seven&quot;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span>\n    <span class="token function-variable function">fullName</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">city</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastName <span class="token operator">+</span> <span class="token string">&quot; at &quot;</span> <span class="token operator">+</span> city<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> person1 <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">firstName</span><span class="token operator">:</span><span class="token string">&quot;Bill&quot;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&quot;Gates&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> person2 <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">firstName</span><span class="token operator">:</span><span class="token string">&quot;Steve&quot;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&quot;Jobs&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\nperson<span class="token punctuation">.</span><span class="token function">fullName</span><span class="token punctuation">(</span><span class="token string">&#39;SH&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 将返回 &quot;Seven A in SH&quot;</span>\nperson<span class="token punctuation">.</span><span class="token function">fullName</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person1<span class="token punctuation">,</span> <span class="token string">&quot;HZ&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 将返回 &quot;Bill Gates in HZ&quot;</span>\nperson<span class="token punctuation">.</span><span class="token function">fullName</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">,</span> <span class="token string">&quot;HN&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 将返回 &quot;Steve Jobs in HN&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="tip-block warning"><p class="title">注意：</p><p><code>thisArg</code>可以为<code>null</code>，<code>undefined</code>，此时函数内的<code>this</code>指向<code>Window</code>。 <code>thisArg</code>可以传基本数据类型，原生<code>call</code>会自动用<code>Object()</code>转换 函数可以有返回值，没有返回值，返回<code>undefined</code> 将函数添加到指定对象中，并用delete删除(消除副作用)</p></div><details class="tip-block details"><summary>代码实现call</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">call1</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 获取第一个参数（注意第一个参数为null或undefined，this指向window），构建对象</span>\n    context <span class="token operator">=</span> context <span class="token operator">?</span> <span class="token function">Object</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token operator">:</span> window<span class="token punctuation">;</span>\n    <span class="token comment">// 将对应函数传入该对象中</span>\n    context<span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n    <span class="token comment">// 获取参数并执行相应函数</span>\n    <span class="token keyword">let</span> result <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// 删除该对象中的函数，消除副作用</span>\n    <span class="token keyword">delete</span> context<span class="token punctuation">.</span>fn<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><ol start="3"><li><code>apply</code></li></ol><ul><li>使用<code>apply(thisArg, [])</code>方法，您可以编写<strong>能够在不同对象上</strong>使用的方法。</li><li><code>apply()</code>方法与<code>call()</code>方法非常相似，不同之处： <ul><li><code>call()</code>方法分别接受参数。</li><li><code>apply()</code>方法接受数组形式的参数。</li></ul></li><li>如果要使用数组而不是参数列表，则<code>apply()</code>方法非常方便。</li></ul><div class="tip-block tip"><p class="title">提示</p><p>bind方法可以让函数想什么时候调用就什么时候调用。 apply、call方法只是临时改变了this指向。</p></div><details class="tip-block details"><summary>代码实现</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">apply1</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 获取第一个参数（注意第一个参数为null或undefined，this指向window），构建对象</span>\n    context <span class="token operator">=</span> context <span class="token operator">?</span> <span class="token function">Object</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token operator">:</span> window<span class="token punctuation">;</span>\n    \n    <span class="token comment">// 将对应函数传入该对象中</span>\n    context<span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 获取参数并执行相应函数</span>\n    <span class="token keyword">let</span> result <span class="token operator">=</span> arr <span class="token operator">?</span> context<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>arr<span class="token punctuation">)</span> <span class="token operator">:</span> context<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n     \n    <span class="token comment">// 删除该对象中的函数，消除副作用</span>\n    <span class="token keyword">delete</span> context<span class="token punctuation">.</span>fn<span class="token punctuation">;</span>\n\n    <span class="token comment">//返回值</span>\n    <span class="token keyword">return</span> result<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>', 23);
const _hoisted_80 = {
  href: "https://mp.weixin.qq.com/s?__biz=MzIxMjExNzQxMQ==&mid=2247483892&idx=1&chksm=https://mp.weixin.qq.com/s?__biz=MzIxMjExNzQxMQ==&mid=2247483892&idx=1&sn=049ee4a8dfee3a03e253a13e96ef5f54&chksm=974bb338a03c3a2eba3eb528161be4155f9d7153beefd9f02f07d8e997acd3bcaf5b9f193453&scene=21&scene=21",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_81 = /* @__PURE__ */ createStaticVNode('<h3 id="eval-计算函数" tabindex="-1"><a class="header-anchor" href="#eval-计算函数" aria-hidden="true">#</a> eval()计算函数</h3><p><code>eval(string)</code>函数计算<code>JavaScript</code>字符串，并把它作为脚本代码来执行</p><ul><li>如果参数是一个表达式，<code>eval()</code>函数将执行表达式；</li><li>如果参数是<code>Javascript</code>语句，<code>eval()</code>将执行<code>Javascript</code>语句；</li><li>如果执行结果是一个值就返回，不是就返回undefined</li><li>如果参数不是一个字符串，则直接返回该参数。</li></ul><p>特殊情况：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&quot;{b:2}&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 返回 2</span>\n<span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&quot;({b:2})&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 返回对象{b:2}</span>\n</code></pre></div><h3 id="js哪些操作会造成内存泄露" tabindex="-1"><a class="header-anchor" href="#js哪些操作会造成内存泄露" aria-hidden="true">#</a> JS哪些操作会造成内存泄露</h3>', 6);
const _hoisted_87 = {
  href: "https://www.jianshu.com/p/763ba9562864",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_88 = /* @__PURE__ */ createStaticVNode('<ol><li>意外的全局变量</li><li>闭包</li><li>没有清理的dom元素；dom元素赋值给变量，又通过removeChild移除dom元素。但是dom元素的引用还在内存中</li><li>被遗忘的定时器或者回调</li></ol><h3 id="什么是闭包-如何使用它-为什么要使用它" tabindex="-1"><a class="header-anchor" href="#什么是闭包-如何使用它-为什么要使用它" aria-hidden="true">#</a> 什么是闭包，如何使用它，为什么要使用它？</h3><ol><li>闭包就是能够读取其它函数内部变量的函数</li><li>使用方法：在一个函数内部创建另一个函数</li><li>最大用处有两个：读取其他函数的变量值，让这些变量始终保存在内存中</li><li>缺点：会引起内存泄漏（引用无法被销毁，一直存在）</li></ol><h3 id="请解释jsonp的工作原理-以及它为什么不是真正的ajax" tabindex="-1"><a class="header-anchor" href="#请解释jsonp的工作原理-以及它为什么不是真正的ajax" aria-hidden="true">#</a> 请解释JSONP的工作原理，以及它为什么不是真正的AJAX</h3><p><code>JSONP</code>是一种非正式传输协议，允许用户传递一个<code>callback</code>给服务端，然后服务端返回数据时会将这个<code>callback</code>参数作为函数名来包裹住<code>JSON</code>数据，这样客户端就可以随意定制自己的函数来自动处理返回数据了。</p><p>当GET请求从后台页面返回时，可以返回一段JavaScript代码，这段代码会自动执行，可以用来负责调用后台页面中的一个callback函数。</p><p>它们的实质不同:</p><ul><li>ajax的核心是通过<code>XMLHttpRequest</code>获取非本页内容</li><li>jsonp的核心是动态添加script标签调用服务器提供的js脚本</li><li>jsonp只支持get请求，ajax支持get和post请求</li></ul><h3 id="请解释一下javascript的同源策略" tabindex="-1"><a class="header-anchor" href="#请解释一下javascript的同源策略" aria-hidden="true">#</a> 请解释一下JavaScript的同源策略</h3><p>同源指<strong>协议</strong>，<strong>域名</strong>，<strong>端口</strong>相同， 同源策略是一种安全协议，指一段脚本只能读取来自同一来源的窗口和文档的属性。</p><h3 id="介绍暂时性死区" tabindex="-1"><a class="header-anchor" href="#介绍暂时性死区" aria-hidden="true">#</a> 介绍暂时性死区</h3><p>在代码块内，使用let、const命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”</p><h3 id="两个对象如何比较" tabindex="-1"><a class="header-anchor" href="#两个对象如何比较" aria-hidden="true">#</a> 两个对象如何比较</h3><p>思路步骤：</p><ul><li>1、判断两个类型是否对象</li><li>2、判断两个对象key的长度是否一致</li><li>3、判断属性value值的数据类型，根据不同数据类型做比较 a、是对象，重复这个步骤 b、是数组，转字符串比较 c、是基本类型，直接判断</li></ul><h3 id="promise和async处理失败的时候有什么区别" tabindex="-1"><a class="header-anchor" href="#promise和async处理失败的时候有什么区别" aria-hidden="true">#</a> Promise和Async处理失败的时候有什么区别</h3><ol><li>Promise错误可以在构造体里面被捕获，而async/await返回的是promise,可以通过catch直接捕获错误。</li><li>await 后接的Promise.reject都必须被捕获，否则会中断执行</li></ol><h3 id="settimeout-0-和settimeout-2-之间的区别" tabindex="-1"><a class="header-anchor" href="#settimeout-0-和settimeout-2-之间的区别" aria-hidden="true">#</a> setTimeout(0)和setTimeout(2)之间的区别</h3><p>定时器表面意思是过指定时间后执行，但是真正的含义是每过指定时间后，会有fn进入事件队列</p><ol><li><code>setTimeout(fn,0)</code>的含义是，指定某个任务在主线程最早可得的空闲时间执行，意思就是不用再等多少秒了，只要主线程执行栈内的同步任务全部执行完成，栈为空就马上执行</li><li><code>setTimeout(fn,1)</code> 1毫秒后执行，但是因为要先执行前面的宏任务，所以不一定就是在一毫秒后执行，取决于队列里任务执行的速度</li></ol><h3 id="for-in和object-keys的区别" tabindex="-1"><a class="header-anchor" href="#for-in和object-keys的区别" aria-hidden="true">#</a> <code>for..in</code>和<code>object.keys</code>的区别</h3><ol><li><code>Object.keys</code>不会遍历继承的原型属性</li><li><code>for...in</code>会遍历继承的原型属性</li></ol><h3 id="说说你对amd和commonjs的理解" tabindex="-1"><a class="header-anchor" href="#说说你对amd和commonjs的理解" aria-hidden="true">#</a> 说说你对AMD和Commonjs的理解</h3><p>两者都是为了实现模块化编程而出现的</p><ol><li>commonjs 通常被应用于服务器，在服务器端，模块的加载和执行都在本地完成，因此，CommonJS并不要求模块加载的异步化。 核心思想：一个单独文件就是一个模块，通过require方法来同步加载要依赖的模块，然后通过extports或则module.exports来导出需要暴露的接口。</li><li>AMD 可以实现异步加载依赖模块，预加载，在并行加载js文件同时，还会解析执行该模块。虽然可以并行加载，异步处理，但是加载顺序不一定</li><li>CMD 懒加载，虽然会一开始就并行加载js文件，但是不会执行，而是在需要的时候才执行。</li></ol><h2 id="看代码-给结果" tabindex="-1"><a class="header-anchor" href="#看代码-给结果" aria-hidden="true">#</a> 看代码，给结果</h2><h3 id="_1-写出如下代码的打印结果" tabindex="-1"><a class="header-anchor" href="#_1-写出如下代码的打印结果" aria-hidden="true">#</a> 1. 写出如下代码的打印结果</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">;</span>\n<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> name <span class="token operator">==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;Jack&#39;</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Goodbye &#39;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello &#39;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// name undefined</span>\n<span class="token comment">// typeof name undefined</span>\n<span class="token comment">// Goodbye Jack</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第四行<code>var</code>声明的变量没有块作用域，变量会提升到最近的<code>function</code>作用域的上层，但此时只是声明了变量，并没有赋值，到实际运行了赋值语句之后才有值，在之前值为<code>undefined</code>;</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">;</span>\n<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> name <span class="token operator">==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  name <span class="token operator">=</span> <span class="token string">&#39;Jack&#39;</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Goodbye &#39;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello &#39;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Hello Tom</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1、首先在进入函数作用域当中，获取name属性 2、在当前作用域没有找到name 3、通过作用域链找到最外层，得到name属性 4、执行else的内容，得到Hello Tom</p><h3 id="_2-输出以下代码运行结果" tabindex="-1"><a class="header-anchor" href="#_2-输出以下代码运行结果" aria-hidden="true">#</a> 2. 输出以下代码运行结果</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span> <span class="token operator">+</span> <span class="token string">&quot;1&quot;</span>				<span class="token comment">// &#39;11&#39;</span>\n\n<span class="token number">2</span> <span class="token operator">*</span> <span class="token string">&quot;2&quot;</span>				<span class="token comment">// 4</span>\n	\n<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>			<span class="token comment">// &#39;1,22,1&#39;</span>\n\n<span class="token string">&quot;a&quot;</span> <span class="token operator">+</span> <span class="token operator">+</span> <span class="token string">&quot;b&quot;</span>			<span class="token comment">// &#39;aNaN&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 + &quot;1&quot; 加性操作符：如果只有一个操作数是字符串，则将另一个操作数转换为字符串，然后再将两个字符串拼接起来 所以值为：“11”</p><p>2 * &quot;2&quot; 乘性操作符：如果有一个操作数不是数值，则在后台调用 Number()将其转换为数值</p><p>[1, 2] + [2, 1] Javascript中所有对象基本都是先调用valueOf方法，如果不是数值，再调用toString方法。 所以两个数组对象的toString方法相加，值为：&quot;1,22,1&quot;</p><p>&quot;a&quot; + + &quot;b&quot; 后边的“+”将作为一元操作符，如果操作数是字符串，将调用Number方法将该操作数转为数值，如果操作数无法转为数值，则为NaN。 所以值为：&quot;aNaN&quot;</p><p>以上均参考：《Javascript高级程序设计》</p><h3 id="_3-1-2-3-map-parseint-答案是多少" tabindex="-1"><a class="header-anchor" href="#_3-1-2-3-map-parseint-答案是多少" aria-hidden="true">#</a> 3. [&quot;1&quot;, &quot;2&quot;, &quot;3&quot;].map(parseInt) 答案是多少？</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> el\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\nel：遍历过程中的当前项，\nindex：遍历过程中的当前下标\n<span class="token literal-property property">arr</span><span class="token operator">:</span> 原数组\n\n<span class="token function">parseInt</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> redix<span class="token punctuation">)</span>\n<span class="token literal-property property">str</span><span class="token operator">:</span> 要解析的字符串，如果字符第一个数不能被转换，返回<span class="token number">NaN</span>。\n<span class="token literal-property property">redix</span><span class="token operator">:</span> 基数，介于 <span class="token number">2</span> <span class="token operator">~</span> <span class="token number">36</span> 之间进制数，如果传<span class="token number">0</span>，则默认用<span class="token number">10</span>计算。num不在区间内，返回<span class="token number">NaN</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>[&quot;1&quot;, &quot;2&quot;, &quot;3&quot;].map(parseInt)</code> 等价于 <code>[&quot;1&quot;, &quot;2&quot;, &quot;3&quot;].map((item,index) =&gt; parseInt(item, index)); //[1, NaN, NaN]</code></p><h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h2><h3 id="js设计模式" tabindex="-1"><a class="header-anchor" href="#js设计模式" aria-hidden="true">#</a> js设计模式</h3>', 43);
const _hoisted_131 = /* @__PURE__ */ createStaticVNode("<li>单例模式</li><li>策略模式</li><li>代理模式</li><li>迭代器模式</li><li>发布—订阅模式</li><li>命令模式</li><li>组合模式</li><li>模板方法模式</li><li>享元模式</li><li>职责链模式</li><li>中介者模式</li><li>装饰者模式</li><li>状态模式</li><li>适配器模式</li>", 14);
const _hoisted_145 = {
  href: "https://www.cnblogs.com/imwtr/p/9451129.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_146 = /* @__PURE__ */ createStaticVNode('<h3 id="常见兼容性问题" tabindex="-1"><a class="header-anchor" href="#常见兼容性问题" aria-hidden="true">#</a> 常见兼容性问题？</h3><ul><li>1、事件对象兼容</li></ul><blockquote><p>e = e || window.event;</p></blockquote><ul><li>2、阻止事件冒泡兼容</li></ul><blockquote><p>event.stopPropagation? event.stopPropagation():event.cancelBubble=true;</p></blockquote><ul><li>3、阻止默认行为兼容</li></ul><blockquote><p>evt.preventDefault?evt.preventDefault():evt.returnValue=false;</p></blockquote><ul><li>4、事件监听兼容</li></ul><blockquote><p>addEventListener ? addEventListener : attachEvent() removeEventListener() ? removeEventListener() : detachEvent()</p></blockquote><ul><li>5、事件目标对象兼容</li></ul><blockquote><p>var src = event.target || event.srcElement;</p></blockquote><h3 id="js为什么要区分微任务和宏任务" tabindex="-1"><a class="header-anchor" href="#js为什么要区分微任务和宏任务" aria-hidden="true">#</a> JS为什么要区分微任务和宏任务</h3><p>1、js是单线程的，但是分同步异步 2、微任务和宏任务皆为异步任务，它们都属于一个队列 3、宏任务一般是：script，setTimeout，setInterval、setImmediate 4、微任务：原生Promise 5、遇到微任务，先执行微任务，执行完后如果没有微任务，就执行下一个宏任务，如果有微任务，就按顺序一个一个执行微任务</p><hr>', 14);
const _hoisted_160 = {
  href: "https://mp.weixin.qq.com/s?__biz=MzIxMjExNzQxMQ==&mid=2247484353&idx=1&sn=f00f78052b30d16497cbba10bd39bb1d&chksm=974bb10da03c381bca279aaf8a317b98e119d00b5696691f53978d39518a2231c15d4a2ca05e",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_161 = /* @__PURE__ */ createBaseVNode(
  "hr",
  null,
  null,
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_CodeGroupItem = resolveComponent("CodeGroupItem");
  const _component_CodeGroup = resolveComponent("CodeGroup");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("details", _hoisted_2, [
      _hoisted_3,
      createBaseVNode("nav", _hoisted_4, [
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_router_link, { to: "#基础部分" }, {
              default: withCtx(() => [
                createTextVNode("基础部分")
              ]),
              _: 1
              /* STABLE */
            }),
            createBaseVNode("ul", null, [
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#js有哪些内置对象" }, {
                  default: withCtx(() => [
                    createTextVNode("js有哪些内置对象？")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#js有哪些数据类型" }, {
                  default: withCtx(() => [
                    createTextVNode("js有哪些数据类型")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#javascript有几种类型的值" }, {
                  default: withCtx(() => [
                    createTextVNode("JavaScript有几种类型的值")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#栈和堆的区别" }, {
                  default: withCtx(() => [
                    createTextVNode("栈和堆的区别")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#undefined-和-null-区别" }, {
                  default: withCtx(() => [
                    createTextVNode("undefined 和 null 区别")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#对this的理解" }, {
                  default: withCtx(() => [
                    createTextVNode("对this的理解")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#if语句有作用域吗" }, {
                  default: withCtx(() => [
                    createTextVNode("if语句有作用域吗?")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#原型链和作用域链的区别" }, {
                  default: withCtx(() => [
                    createTextVNode("原型链和作用域链的区别")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#js-判断对象类型-typeof、instanceof-区别" }, {
                  default: withCtx(() => [
                    createTextVNode("js 判断对象类型(typeof、instanceOf)区别")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#普通函数和箭头函数的区别" }, {
                  default: withCtx(() => [
                    createTextVNode("普通函数和箭头函数的区别")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#document-write和document-innerhtml的区别" }, {
                  default: withCtx(() => [
                    createTextVNode("document.write和document.innerHTML的区别")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#bind、call、apply的区别" }, {
                  default: withCtx(() => [
                    createTextVNode("bind、call、apply的区别")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#eval-计算函数" }, {
                  default: withCtx(() => [
                    createTextVNode("eval()计算函数")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#js哪些操作会造成内存泄露" }, {
                  default: withCtx(() => [
                    createTextVNode("JS哪些操作会造成内存泄露")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#什么是闭包-如何使用它-为什么要使用它" }, {
                  default: withCtx(() => [
                    createTextVNode("什么是闭包，如何使用它，为什么要使用它？")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#请解释jsonp的工作原理-以及它为什么不是真正的ajax" }, {
                  default: withCtx(() => [
                    createTextVNode("请解释JSONP的工作原理，以及它为什么不是真正的AJAX")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#请解释一下javascript的同源策略" }, {
                  default: withCtx(() => [
                    createTextVNode("请解释一下JavaScript的同源策略")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#介绍暂时性死区" }, {
                  default: withCtx(() => [
                    createTextVNode("介绍暂时性死区")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#两个对象如何比较" }, {
                  default: withCtx(() => [
                    createTextVNode("两个对象如何比较")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#promise和async处理失败的时候有什么区别" }, {
                  default: withCtx(() => [
                    createTextVNode("Promise和Async处理失败的时候有什么区别")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#settimeout-0-和settimeout-2-之间的区别" }, {
                  default: withCtx(() => [
                    createTextVNode("setTimeout(0)和setTimeout(2)之间的区别")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#for-in和object-keys的区别" }, {
                  default: withCtx(() => [
                    createTextVNode("for..in和object.keys的区别")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#说说你对amd和commonjs的理解" }, {
                  default: withCtx(() => [
                    createTextVNode("说说你对AMD和Commonjs的理解")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])
            ])
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_router_link, { to: "#看代码-给结果" }, {
              default: withCtx(() => [
                createTextVNode("看代码，给结果")
              ]),
              _: 1
              /* STABLE */
            }),
            createBaseVNode("ul", null, [
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#_1-写出如下代码的打印结果" }, {
                  default: withCtx(() => [
                    createTextVNode("1. 写出如下代码的打印结果")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#_2-输出以下代码运行结果" }, {
                  default: withCtx(() => [
                    createTextVNode("2. 输出以下代码运行结果")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#_3-1-2-3-map-parseint-答案是多少" }, {
                  default: withCtx(() => [
                    createTextVNode('3. ["1", "2", "3"].map(parseInt) 答案是多少？')
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])
            ])
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_router_link, { to: "#扩展" }, {
              default: withCtx(() => [
                createTextVNode("扩展")
              ]),
              _: 1
              /* STABLE */
            }),
            createBaseVNode("ul", null, [
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#js设计模式" }, {
                  default: withCtx(() => [
                    createTextVNode("js设计模式")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#常见兼容性问题" }, {
                  default: withCtx(() => [
                    createTextVNode("常见兼容性问题？")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#js为什么要区分微任务和宏任务" }, {
                  default: withCtx(() => [
                    createTextVNode("JS为什么要区分微任务和宏任务")
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
    _hoisted_5,
    createBaseVNode("div", _hoisted_12, [
      _hoisted_13,
      createBaseVNode("p", null, [
        createTextVNode("Symbol 值作为属性名时，该属性是公有属性不是私有属性，可以在类的外部访问。但是不会出现在 "),
        _hoisted_14,
        createTextVNode("、 "),
        _hoisted_15,
        createTextVNode("的循环中，也不会被"),
        _hoisted_16,
        createTextVNode("、"),
        _hoisted_17,
        createTextVNode(" 返回。如果要读取到一个对象的 Symbol 属性，可以通过"),
        _hoisted_18,
        createTextVNode("和"),
        _hoisted_19,
        createTextVNode("取到。"),
        createBaseVNode("a", _hoisted_20, [
          createTextVNode("ES6 Symbol API"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    _hoisted_21,
    createVNode(_component_CodeGroup, null, {
      default: withCtx(() => [
        createVNode(_component_CodeGroupItem, { title: "方法一：" }, {
          default: withCtx(() => [
            _hoisted_55
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_CodeGroupItem, { title: "方法二：" }, {
          default: withCtx(() => [
            _hoisted_56
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_57,
    createBaseVNode("p", null, [
      createTextVNode("参考"),
      createBaseVNode("a", _hoisted_80, [
        createTextVNode("图解JavaScript——代码实现（Object.create()、flat()等十四种代码原理）"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_81,
    createBaseVNode("p", null, [
      createTextVNode("内存泄漏是指一块被分配的内存既不能使用，也不能回收，直到浏览器进程结束。"),
      createBaseVNode("a", _hoisted_87, [
        createTextVNode("扩展文章"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_88,
    createBaseVNode("ul", null, [
      _hoisted_131,
      createBaseVNode("li", null, [
        createTextVNode("外观模式 以上均参考："),
        createBaseVNode("a", _hoisted_145, [
          createTextVNode("《JavaScript中常见的十五种设计模式》"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    _hoisted_146,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_160, [
        createTextVNode("前端高频手撕算法题36道"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_161
  ]);
}
const jsBasic_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "js-basic.html.vue"]]);
export {
  jsBasic_html as default
};
