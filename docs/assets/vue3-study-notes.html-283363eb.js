import { r as resolveComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, f as createVNode, g as withCtx, e as createTextVNode, t as toDisplayString, T as Transition, m as withModifiers, n as createBlock, p as Teleport, j as createStaticVNode } from "./app-5c6fb363.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const vue3StudyNotes_html_vue_vue_type_style_index_0_lang = "";
const vue3StudyNotes_html_vue_vue_type_style_index_1_lang = "";
const _sfc_main = {
  name: "Vue3Example",
  data() {
    return {
      message: "Hello Vue 3 ~",
      time: "00:00",
      target: "#app"
    };
  },
  methods: {
    goHandler(event) {
      this.moveHandler(event.target);
    },
    moveHandler(el) {
      this.target = el;
    }
  },
  created() {
    setInterval(() => {
      this.time = new Date().toLocaleString("chinese", { hour12: false });
    }, 500);
  }
};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "link",
  {
    rel: "stylesheet",
    href: "/css/animate.css/4.1.1/animate.min.css"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "vue3-学习笔记",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#vue3-学习笔记",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Vue3 学习笔记")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "div",
  { id: "top" },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = { class: "tip-block details" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "summary",
  null,
  "目录导航",
  -1
  /* HOISTED */
);
const _hoisted_6 = { class: "table-of-contents" };
const _hoisted_7 = /* @__PURE__ */ createStaticVNode('<h2 id="全局api" tabindex="-1"><a class="header-anchor" href="#全局api" aria-hidden="true">#</a> 全局API</h2><h3 id="createapp" tabindex="-1"><a class="header-anchor" href="#createapp" aria-hidden="true">#</a> createApp</h3><p>返回一个提供应用上下文的应用实例。应用实例挂载的整个组件树共享同一个上下文。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p>你可以在<code>createApp</code>之后链式调用其它方法，这些方法可以在<a href="#%E5%BA%94%E7%94%A8API">应用API</a> 中找到。</p><p>参数： 该函数接收一个根组件选项对象作为第一个参数， 第二个参数，可以将根 prop 传递给应用程序：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;username&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      <span class="token operator">...</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>\n  <span class="token operator">...</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;Evan&#39;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token comment">&lt;!-- 会显示 &#39;Evan&#39; --&gt;</span>\n  {{ username }}\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>', 8);
const _hoisted_15 = {
  href: "https://v3.cn.vuejs.org/api/global-api.html#createapp",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_16 = /* @__PURE__ */ createStaticVNode('<h3 id="h" tabindex="-1"><a class="header-anchor" href="#h" aria-hidden="true">#</a> h</h3><p>返回一个”虚拟节点“，通常缩写为<strong>VNode</strong>：一个普通对象，其中包含向 Vue 描述它应在页面上渲染哪种节点的信息，包括所有子节点的描述。它的目的是用于手动编写的渲染函数：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> Vue<span class="token punctuation">.</span><span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;h1&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;Some title&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div>', 3);
const _hoisted_19 = {
  href: "https://v3.cn.vuejs.org/api/global-api.html#h",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_20 = /* @__PURE__ */ createStaticVNode('<h3 id="createrenderer-hostnode-hostelement" tabindex="-1"><a class="header-anchor" href="#createrenderer-hostnode-hostelement" aria-hidden="true">#</a> createRenderer(HostNode, HostElement)</h3><details class="tip-block details"><summary>参数</summary><ul><li>HostNode:Node 宿主环境中的节点。</li><li>HostElement:Element 宿主环境中的元素。</li></ul></details><p><code>createRenderer</code>函数接受两个泛型参数：<code>HostNode</code>和<code>HostElement</code>，对应于宿主环境中的 ==Node==和==Element==类型。 自定义渲染器可以传入特定于平台的类型，如下所示：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createRenderer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> createApp <span class="token punctuation">}</span> <span class="token operator">=</span> createRenderer<span class="token operator">&lt;</span>Node<span class="token punctuation">,</span> Element<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  patchProp<span class="token punctuation">,</span>\n  <span class="token operator">...</span>nodeOps\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div>', 4);
const _hoisted_24 = {
  href: "https://v3.cn.vuejs.org/api/global-api.html#createRenderer",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_25 = /* @__PURE__ */ createStaticVNode('<h3 id="nexttick" tabindex="-1"><a class="header-anchor" href="#nexttick" aria-hidden="true">#</a> nextTick</h3><p>将回调推迟到下一个 DOM 更新周期之后执行。在更改了一些数据以等待 DOM 更新后立即使用它。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp<span class="token punctuation">,</span> nextTick <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;Hello!&#39;</span><span class="token punctuation">)</span>\n    <span class="token keyword">const</span> <span class="token function-variable function">changeMessage</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token parameter">newMessage</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      message<span class="token punctuation">.</span>value <span class="token operator">=</span> newMessage\n      <span class="token keyword">await</span> <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Now DOM is updated&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考：<code>$nextTick</code><a href="#$nextTick">实例方法</a></p><h3 id="mergeprops" tabindex="-1"><a class="header-anchor" href="#mergeprops" aria-hidden="true">#</a> mergeProps</h3><p>将包含 VNode prop 的多个对象合并为一个单独的对象。其返回的是一个新创建的对象，而作为参数传递的对象则不会被修改。</p><p>可以传递不限数量的对象，后面参数的 property 优先。事件监听器被特殊处理，class 和 style 也是如此，这些 property 的值是被合并的而不是覆盖的。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> h<span class="token punctuation">,</span> mergeProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">inheritAttrs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">mergeProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token comment">// 该 class 将与 $attrs 中的其他 class 合并。</span>\n      <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">&#39;active&#39;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$attrs<span class="token punctuation">)</span>\n    <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> props<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="definecomponent" tabindex="-1"><a class="header-anchor" href="#definecomponent" aria-hidden="true">#</a> defineComponent</h3><p>从实现上看，<code>defineComponent</code>只返回传递给它的对象。但是，就类型而言，返回的值有一个合成类型的构造函数，用于手动渲染函数、TSX 和 IDE 工具支持。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span><span class="token punctuation">.</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者是一个<code>setup</code>函数，函数名称将作为<strong>组件名称</strong>来使用:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">HelloWorld</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span> count <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 13);
const _hoisted_38 = {
  href: "https://v3.cn.vuejs.org/api/global-api.html#defineComponent",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_39 = /* @__PURE__ */ createStaticVNode('<h3 id="defineasynccomponent" tabindex="-1"><a class="header-anchor" href="#defineasynccomponent" aria-hidden="true">#</a> defineAsyncComponent</h3><p>创建一个只有在需要时才会加载的异步组件。 参数： 对于基本用法，<code>defineAsyncComponent</code>可以接受一个返回<code>Promise</code>的工厂函数。<code>Promise</code>的<code>resolve</code>回调应该在服务端返回组件定义后被调用。你也可以调用<code>reject(reason)</code>来表示加载失败。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineAsyncComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n\n<span class="token keyword">const</span> AsyncComp <span class="token operator">=</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>\n  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./components/AsyncComponent.vue&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span>\n\napp<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;async-component&#39;</span><span class="token punctuation">,</span> AsyncComp<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 3);
const _hoisted_42 = {
  href: "https://v3.cn.vuejs.org/guide/component-registration.html#%E5%B1%80%E9%83%A8%E6%B3%A8%E5%86%8C",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_43 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "Promise",
  -1
  /* HOISTED */
);
const _hoisted_44 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp<span class="token punctuation">,</span> defineAsyncComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n\n<span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">AsyncComponent</span><span class="token operator">:</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>\n      <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./components/AsyncComponent.vue&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 1);
const _hoisted_45 = {
  href: "https://v3.cn.vuejs.org/api/global-api.html#defineAsyncComponent",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_46 = {
  href: "https://v3.cn.vuejs.org/guide/component-dynamic-async.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_47 = /* @__PURE__ */ createStaticVNode('<h3 id="resolvecomponent" tabindex="-1"><a class="header-anchor" href="#resolvecomponent" aria-hidden="true">#</a> resolveComponent</h3><div class="tip-block warning"><p class="title">警告</p><p>resolveComponent 只能在<code>render</code>或<code>setup</code>函数中使用。</p></div><p>如果在当前应用实例中可用，则允许按名称解析component。</p><p>返回一个Component。如果没有找到，则返回接收的参数 name。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\napp<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;MyComponent&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  <span class="token comment">/* ... */</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> resolveComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> MyComponent <span class="token operator">=</span> <span class="token function">resolveComponent</span><span class="token punctuation">(</span><span class="token string">&#39;MyComponent&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div>', 6);
const _hoisted_53 = {
  href: "https://v3.cn.vuejs.org/api/global-api.html#defineComponent",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_54 = /* @__PURE__ */ createStaticVNode('<h3 id="resolvedynamiccomponent" tabindex="-1"><a class="header-anchor" href="#resolvedynamiccomponent" aria-hidden="true">#</a> resolveDynamicComponent</h3><div class="tip-block warning"><p class="title">警告</p><p>resolveDynamicComponent 只能在 render 或 setup 函数中使用。</p></div><p>允许使用与<code>&lt;component :is=&quot;&quot;&gt;</code>相同的机制来解析一个<code>component</code>。</p><p>返回已解析的<code>Component</code>或新创建的<code>VNode</code>，其中组件名称作为节点标签。如果找不到<code>Component</code>，将发出警告。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> resolveDynamicComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> MyComponent <span class="token operator">=</span> <span class="token function">resolveDynamicComponent</span><span class="token punctuation">(</span><span class="token string">&#39;MyComponent&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div>', 5);
const _hoisted_59 = {
  href: "https://v3.cn.vuejs.org/api/global-api.html#defineComponent",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_60 = {
  href: "https://v3.cn.vuejs.org/guide/component-dynamic-async.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_61 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "resolvedirective",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#resolvedirective",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" resolveDirective")
  ],
  -1
  /* HOISTED */
);
const _hoisted_62 = {
  href: "https://v3.cn.vuejs.org/api/global-api.html#resolveDirective",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_63 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "withdirectives",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#withdirectives",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" withDirectives")
  ],
  -1
  /* HOISTED */
);
const _hoisted_64 = {
  href: "https://v3.cn.vuejs.org/api/global-api.html#withDirectives",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_65 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "应用api",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#应用api",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 应用API")
  ],
  -1
  /* HOISTED */
);
const _hoisted_66 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "组合式api",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#组合式api",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 组合式API")
  ],
  -1
  /* HOISTED */
);
const _hoisted_67 = {
  href: "https://v3.cn.vuejs.org/guide/composition-api-introduction.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_68 = /* @__PURE__ */ createStaticVNode('<h2 id="响应式api" tabindex="-1"><a class="header-anchor" href="#响应式api" aria-hidden="true">#</a> 响应式API</h2><h1 id="深入响应原理" tabindex="-1"><a class="header-anchor" href="#深入响应原理" aria-hidden="true">#</a> 深入响应原理</h1><p>当你把一个普通的<code>JavaScript</code>对象传入<code>Vue</code>实例作为<code>data</code>选项，<code>Vue</code>将遍历此对象所有的<code>property</code>，并使用 <code>Object.defineProperty</code>把这些<code>property</code>全部转为<code>getter/setter</code>。<code>Object.defineProperty</code>是<code>ES5</code>中一个无法 shim 的特性，这也就是<strong>Vue不支持IE8以及更低版本浏览器</strong>的原因。</p><p>这些<code>getter/setter</code>对用户来说是不可见的，但是在内部它们让<code>Vue</code>能够追踪依赖，在<code>property</code>被访问和修改时通知变更。?</p><blockquote><p>这里需要注意的是不同浏览器在控制台打印数据对象时对 getter/setter 的格式化并不同，所以建议安装 vue-devtools 来获取对检查数据更加友好的用户界面。</p></blockquote><h2 id="检测变化的注意事项" tabindex="-1"><a class="header-anchor" href="#检测变化的注意事项" aria-hidden="true">#</a> 检测变化的注意事项</h2>', 6);
const _hoisted_74 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "JavaScript",
  -1
  /* HOISTED */
);
const _hoisted_75 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "Vue",
  -1
  /* HOISTED */
);
const _hoisted_76 = {
  href: "https://cn.vuejs.org/v2/guide/reactivity.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_77 = {
  href: "https://v3.cn.vuejs.org/guide/reactivity.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_78 = /* @__PURE__ */ createStaticVNode('<h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2><h2 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h2><p>Vue无法检测<code>property</code>的添加或移除。由于<code>Vue</code>会在初始化实例时对<code>property</code>执行<code>getter/setter</code>转化，所以<code>property</code>必须在<code>data</code>对象上存在才能让<code>Vue</code>将它转换为响应式的。</p><p>对于已经创建的实例，Vue不允许动态添加根级别的响应式<code>property</code>。但是，可以使用<code>Vue.set(object, propertyName, value) </code>方法向嵌套对象添加响应式<code>property</code>。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">$set</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>menuTreeData<span class="token punctuation">,</span> <span class="token string">&#39;newKey&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;newValue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p>您还可以使用<code>vm.$set</code>实例方法，这也是全局<code>Vue.set</code>方法的别名：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$set</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>menuTreeData<span class="token punctuation">,</span> <span class="token string">&#39;newKey&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;newValue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p>移除属性可以使用</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$<span class="token keyword">delete</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>menuTreeData<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//或</span>\nVue<span class="token punctuation">.</span>$<span class="token keyword">delete</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>menuTreeData<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h1 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h1><h2 id="实例方法" tabindex="-1"><a class="header-anchor" href="#实例方法" aria-hidden="true">#</a> 实例方法</h2><h3 id="watch" tabindex="-1"><a class="header-anchor" href="#watch" aria-hidden="true">#</a> $watch</h3><details class="tip-block details"><summary>参数：</summary><ul><li>source：string | Function</li><li>callback：Function | Object</li><li>[options]：Object</li><li><ul><li>deep：boolean</li></ul></li><li><ul><li>immediate：boolean</li></ul></li><li><ul><li>flush：string</li></ul></li></ul><p>返回：</p><ul><li>{Function} unwatch 取消侦听函数，用来停止触发回调</li></ul></details>', 13);
const _hoisted_91 = {
  href: "https://v3.cn.vuejs.org/api/instance-methods.html#watch",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_92 = {
  href: "https://v3.cn.vuejs.org/guide/computed.html#%E4%BE%A6%E5%90%AC%E5%99%A8",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_93 = /* @__PURE__ */ createStaticVNode('<p>侦听组件实例上的响应式 property 或函数计算结果的变化。回调函数得到的参数为新值和旧值。我们只能将顶层的 <code>data</code>、<code>prop</code>或<code>computed</code>property 名作为字符串传递。对于更复杂的表达式，用一个函数取代。</p><p>当侦听的值是一个对象或者数组时，对其属性或元素的任何更改都不会触发侦听器，因为它们引用相同的对象/数组：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      <span class="token literal-property property">article</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Vue is awesome!&#39;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token literal-property property">comments</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Indeed!&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;I agree&#39;</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$watch</span><span class="token punctuation">(</span><span class="token string">&#39;article&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Article changed!&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$watch</span><span class="token punctuation">(</span><span class="token string">&#39;comments&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Comments changed!&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 这些方法不会触发侦听器，因为我们只更改了Object/Array的一个property，</span>\n    <span class="token comment">// 不是对象/数组本身</span>\n    <span class="token function">changeArticleText</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>article<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string">&#39;Vue 3 is awesome&#39;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">addComment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>comments<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;New comment&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// 这些方法将触发侦听器，因为我们完全替换了对象/数组</span>\n    <span class="token function">changeWholeArticle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>article <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Vue 3 is awesome&#39;</span> <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">clearComments</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>comments <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> unwatch <span class="token operator">=</span> vm<span class="token punctuation">.</span><span class="token function">$watch</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> cb<span class="token punctuation">)</span>\n<span class="token comment">// 停掉观察者</span>\n<span class="token function">unwatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>option.deep</strong></em> 为了发现对象内部值的变化，可以在选项参数中指定 deep: true。这个选项同样适用于监听数组变更。</p><div class="tip-block warning"><p class="title">注意:</p><p>当变更(不是替换)对象或数组并使用 deep 选项时，<strong>旧值</strong>将与<strong>新值</strong>相同，因为它们的引用指向同一个对象/数组。Vue 不会保留变更之前值的副本。</p></div><p><em><strong>option.immediate</strong></em> 在参数中指定<code>immediate: true</code>将立即以表达式当前的值来触发回调：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>vm<span class="token punctuation">.</span><span class="token function">$watch</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> callback<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token comment">// 立即以 `a` 的当前值触发 `callback`</span>\n</code></pre></div>', 7);
const _hoisted_100 = { class: "tip-block warning" };
const _hoisted_101 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "title" },
  "注意：",
  -1
  /* HOISTED */
);
const _hoisted_102 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("在带有"),
    /* @__PURE__ */ createBaseVNode("code", null, "immediate"),
    /* @__PURE__ */ createTextVNode("选项时，你不能在第一次回调时取消侦听给定的property。")
  ],
  -1
  /* HOISTED */
);
const _hoisted_103 = {
  href: "https://v3.cn.vuejs.org/api/instance-methods.html#watch",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_104 = /* @__PURE__ */ createStaticVNode("<p><em><strong>option. flush</strong></em> ==flush==选项可以更好地控制回调的时间。它可以设置为<code>pre</code>、<code>post</code>或<code>sync</code>。 默认值是<code>pre</code>，指定的回调应该在渲染前被调用。它允许回调在模板运行前更新其他值。 <code>post</code>值是可以用来将回调推迟到渲染之后的。如果回调需要通过<code>$refs</code>访问更新的DOM或子组件，那么则使用该值。 如果==flush==被设置为<code>sync</code>，一旦值发生了变化，回调将被同步调用。 对于 <code>pre</code>、<code>post</code>回调使用队列进行缓冲。回调只被添加到队列中一次，即使观察值变化了多次。值的中间变化将被跳过，不会传递给回调。</p><p>缓冲回调不仅可以提高性能，还有助于保证数据的一致性。在执行数据更新的代码完成之前，侦听器不会被触发。</p>", 2);
const _hoisted_106 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "sync",
  -1
  /* HOISTED */
);
const _hoisted_107 = {
  href: "https://v3.cn.vuejs.org/guide/reactivity-computed-watchers.html#%E5%89%AF%E4%BD%9C%E7%94%A8%E5%88%B7%E6%96%B0%E6%97%B6%E6%9C%BA",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_108 = /* @__PURE__ */ createStaticVNode('<h3 id="emit" tabindex="-1"><a class="header-anchor" href="#emit" aria-hidden="true">#</a> $emit</h3><details class="tip-block details"><summary>参数</summary><ul><li>eventName：string</li><li>[...args]</li></ul></details><p>触发当前实例上的事件。附加参数都会传给监听器回调。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;welcome-button&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">emits</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;welcome&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;button v-on:click=&quot;$emit(&#39;welcome&#39;)&quot;&gt; Click me &lt;/button&gt;</span><span class="token template-punctuation string">`</span></span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div>', 4);
const _hoisted_112 = { class: "tip-block warning" };
const _hoisted_113 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "title" },
  "警告",
  -1
  /* HOISTED */
);
const _hoisted_114 = {
  href: "https://v3.cn.vuejs.org/guide/component-custom-events.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_115 = {
  href: "https://v3.cn.vuejs.org/guide/component-basics.html#%E4%BD%BF%E7%94%A8%E4%BA%8B%E4%BB%B6%E6%8A%9B%E5%87%BA%E4%B8%80%E4%B8%AA%E5%80%BC",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_116 = /* @__PURE__ */ createStaticVNode('<h3 id="forceupdate" tabindex="-1"><a class="header-anchor" href="#forceupdate" aria-hidden="true">#</a> $forceUpdate</h3><p>迫使组件实例重新渲染。</p><div class="tip-block warning"><p class="title">注意：</p><p>它仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。</p></div><h3 id="nexttick-1" tabindex="-1"><a class="header-anchor" href="#nexttick-1" aria-hidden="true">#</a> $nextTick</h3><details class="tip-block details"><summary>参数</summary><ul><li>callback：Function</li></ul></details><p>将回调延迟到下次 DOM 更新循环之后执行。</p><div class="tip-block warning"><p class="title">注意：</p><p>组件内<code>nextTick</code>跟全局方法<code>nextTick</code>一样，不同的是回调的<code>this</code>自动绑定到调用它的实例上。</p></div>', 7);
const _hoisted_123 = {
  href: "https://v3.cn.vuejs.org/api/global-api.html#nexttick",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_124 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "指令",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#指令",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 指令")
  ],
  -1
  /* HOISTED */
);
const _hoisted_125 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "常用指令",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#常用指令",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 常用指令")
  ],
  -1
  /* HOISTED */
);
const _hoisted_126 = {
  href: "https://v3.cn.vuejs.org/api/directives.html#v-text",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_127 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>span v<span class="token operator">-</span>text<span class="token operator">=</span><span class="token string">&quot;msg&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 和下面的一样 <span class="token operator">--</span><span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span>span<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>msg<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>\n</code></pre></div>', 1);
const _hoisted_128 = { start: "2" };
const _hoisted_129 = {
  href: "https://v3.cn.vuejs.org/api/directives.html#v-html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_130 = {
  href: "https://v3.cn.vuejs.org/api/directives.html#v-show",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_131 = {
  href: "https://v3.cn.vuejs.org/api/directives.html#v-if",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_132 = {
  href: "https://v3.cn.vuejs.org/api/directives.html#v-else",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_133 = {
  href: "https://v3.cn.vuejs.org/api/directives.html#v-else-if",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_134 = {
  href: "https://v3.cn.vuejs.org/api/directives.html#v-for",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_135 = {
  href: "https://v3.cn.vuejs.org/api/directives.html#v-on",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_136 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "@",
  -1
  /* HOISTED */
);
const _hoisted_137 = {
  href: "https://v3.cn.vuejs.org/api/directives.html#v-bind",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_138 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  ":",
  -1
  /* HOISTED */
);
const _hoisted_139 = {
  href: "https://v3.cn.vuejs.org/api/directives.html#v-model",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_140 = {
  href: "https://v3.cn.vuejs.org/api/directives.html#v-once",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_141 = {
  href: "https://v3.cn.vuejs.org/api/directives.html#v-is",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_142 = {
  href: "https://v3.cn.vuejs.org/api/directives.html#v-slot",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_143 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "#",
  -1
  /* HOISTED */
);
const _hoisted_144 = /* @__PURE__ */ createStaticVNode('<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token comment">&lt;!-- 具名插槽 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base-layout</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>header</span><span class="token punctuation">&gt;</span></span>\n    Header content\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>default</span><span class="token punctuation">&gt;</span></span>\n    Default slot content\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>footer</span><span class="token punctuation">&gt;</span></span>\n    Footer content\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>base-layout</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token comment">&lt;!-- 接收 prop 的具名插槽 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>infinite-scroll</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slotProps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      {{ slotProps.item.text }}\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>infinite-scroll</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token comment">&lt;!-- 接收 prop 的默认插槽，使用了解构 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mouse-position</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ x, y }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  Mouse position: {{ x }}, {{ y }}\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mouse-position</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 1);
const _hoisted_145 = {
  href: "https://v3.cn.vuejs.org/guide/component-slots.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_146 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>v<span class="token operator">-</span>slot<span class="token operator">:</span>abc<span class="token operator">=</span><span class="token string">&quot;scope&quot;</span> \n</code></pre></div><p>等价于</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>slot<span class="token operator">=</span><span class="token string">&quot;abc&quot;</span> slot<span class="token operator">-</span>scope<span class="token operator">=</span><span class="token string">&quot;scope&quot;</span>\n</code></pre></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>abc</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scope<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    A： {{scope.data}}\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>abc<span class="token punctuation">&quot;</span></span> <span class="token attr-name">slot-scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scope<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>B：{{scope.data}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 4);
const _hoisted_150 = {
  href: "https://v3.cn.vuejs.org/api/directives.html#v-pre",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_151 = /* @__PURE__ */ createStaticVNode('<div class="tip-block tip"><p class="title">提示</p><p>不需要表达式；跳过大量没有指令的节点会加快编译。</p></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 抛出错误 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{ { this will not be compiled } }<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token comment">&lt;!-- 正常运行，不编译表达式直接显示内容 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-pre</span><span class="token punctuation">&gt;</span></span>{ { this will not be compiled } }<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token comment">&lt;!-- 正常运行，不编译表达式，HTML正常被浏览器解析 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-pre</span><span class="token punctuation">&gt;</span></span> { { title } } <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>font</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>red<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>文字<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>font</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 2);
const _hoisted_153 = {
  href: "https://v3.cn.vuejs.org/api/directives.html#v-cloak",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_154 = /* @__PURE__ */ createStaticVNode('<div class="tip-block tip"><p class="title">提示</p><p>不需要表达式。</p></div><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-cloak</span><span class="token punctuation">&gt;</span></span>\n  {{ message }}\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">[v-cloak]</span> <span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>当网络较慢，网页还在加载 Vue.js ，而导致 Vue 来不及渲染，这时页面就会显示出 Vue 源代码<code>{{ message }}</code>。 我们可以使用 v-cloak 指令来解决差值表达式闪烁的问题（即：可以隐藏未编译的标签直到实例准备完毕）。</p><p>例子：页面加载完成后，延迟3秒挂载vue.js，观察v-cloak修饰的组件区别</p>', 5);
const _hoisted_159 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-css line-numbers-mode",
    "data-ext": "css"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-css" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token selector" }, "<style>\n[v-cloak]"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, "color"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
        /* @__PURE__ */ createTextVNode(" red"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, "opacity"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
        /* @__PURE__ */ createTextVNode(" 0.25"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, "font-weight"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
        /* @__PURE__ */ createTextVNode(" bold"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token property" }, "font-size"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
        /* @__PURE__ */ createTextVNode(" 2em"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n</style>\n")
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_160 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-html line-numbers-mode",
    "data-ext": "html"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-html" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("div")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "id"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("example3"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n    使用 v-cloak：\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("span")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "v-cloak"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("{{title}}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("span")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n    未使用v-cloak：\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("span")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("{{title}}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("span")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("div")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_161 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-javascript line-numbers-mode",
    "data-ext": "js"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "<"),
        /* @__PURE__ */ createTextVNode("script setup"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ">"),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" app3 "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" Vue"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "createApp"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "data"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "return"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n            "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "title"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"helloword"'),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
        /* @__PURE__ */ createTextVNode("\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "setTimeout"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "=>"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n  app3"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "mount"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'#example3'"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token number" }, "3000"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "<"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "/"),
        /* @__PURE__ */ createTextVNode("script"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ">"),
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_162 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "特殊指令",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#特殊指令",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 特殊指令")
  ],
  -1
  /* HOISTED */
);
const _hoisted_163 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "key-number-string",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#key-number-string",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" key : number | string")
  ],
  -1
  /* HOISTED */
);
const _hoisted_164 = {
  href: "https://v3.cn.vuejs.org/api/special-attributes.html#key",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_165 = /* @__PURE__ */ createStaticVNode('<p>key 的特殊 attribute 主要用在 Vue 的虚拟 DOM 算法，在新旧 nodes 对比时辨识 VNodes。 有相同父元素的子元素必须有独特的 key。重复的 key 会造成渲染错误。</p><p>最常见的用例是结合 v-for：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>\n  <span class="token operator">&lt;</span>li v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;item in items&quot;</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;item.id&quot;</span><span class="token operator">&gt;</span><span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>\n</code></pre></div><p>它也可以用于强制替换元素/组件而不是重复使用它。当你遇到如下场景时它可能会很有用：</p><ul><li>完整地触发组件的生命周期钩子</li><li>触发过渡</li></ul><p>例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>transition<span class="token operator">&gt;</span>\n  <span class="token operator">&lt;</span>span <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;text&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> text <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>transition<span class="token operator">&gt;</span>\n</code></pre></div><div class="tip-block tip"><p class="title">提示</p><p>当 text 发生改变时，总是会被替换而不是被修改，因此会触发过渡。</p></div><p>例子：</p>', 9);
const _hoisted_174 = {
  id: "example1",
  class: "clock"
};
const _hoisted_175 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>\nVue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token string">&quot;00:00&quot;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span>time <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token string">&quot;chinese&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">hour12</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#example1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ref-string-function" tabindex="-1"><a class="header-anchor" href="#ref-string-function" aria-hidden="true">#</a> ref : string | Function</h3>', 2);
const _hoisted_177 = {
  href: "https://v3.cn.vuejs.org/api/special-attributes.html#ref",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_178 = /* @__PURE__ */ createStaticVNode('<p><code>ref</code>被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的<code>$refs</code>对象上。如果在普通的==DOM==元素上使用，引用指向的就是==DOM==元素；如果用在子组件上，引用就指向组件实例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> vm<span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>p 会是 <span class="token constant">DOM</span> 节点 <span class="token operator">--</span><span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span>p ref<span class="token operator">=</span><span class="token string">&quot;p&quot;</span><span class="token operator">&gt;</span>hello<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>\n\n<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> vm<span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>child 会是子组件实例 <span class="token operator">--</span><span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span>child<span class="token operator">-</span>component ref<span class="token operator">=</span><span class="token string">&quot;child&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>child<span class="token operator">-</span>component<span class="token operator">&gt;</span>\n\n<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 当动态绑定时，我们可以将ref定义为回调函数，显式地传递元素或组件实例 <span class="token operator">--</span><span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span>child<span class="token operator">-</span>component <span class="token operator">:</span>ref<span class="token operator">=</span><span class="token string">&quot;(el) =&gt; child = el&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>child<span class="token operator">-</span>component<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当 v-for 用于元素或组件的时候，引用信息将是包含 DOM 节点或组件实例的数组。</p><div class="tip-block warning"><p class="title">关于 ref 注册时间的重要说明</p><p>因为 ref 本身是作为渲染结果被创建的，在初始渲染的时候你不能访问它们 - <strong>它们还不存在</strong>！ <code>$refs</code>也是非响应式的，因此你不应该试图用它在模板中做数据绑定。</p></div>', 4);
const _hoisted_182 = {
  href: "https://v3.cn.vuejs.org/api/special-attributes.html#key",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_183 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "is-string-object-component-s-options-object",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#is-string-object-component-s-options-object",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" is : string | Object (component’s options object)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_184 = {
  href: "https://v3.cn.vuejs.org/api/special-attributes.html#is",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_185 = {
  href: "https://v3.cn.vuejs.org/guide/component-basics.html#%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_186 = {
  href: "https://v3.cn.vuejs.org/guide/component-dynamic-async.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_187 = /* @__PURE__ */ createStaticVNode('<p>扩展 html标签的限制, 动态切换并渲染指定的组件</p><h1 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h1><h2 id="内置组件" tabindex="-1"><a class="header-anchor" href="#内置组件" aria-hidden="true">#</a> 内置组件</h2><h3 id="teleport" tabindex="-1"><a class="header-anchor" href="#teleport" aria-hidden="true">#</a> Teleport</h3>', 4);
const _hoisted_191 = {
  href: "https://v3.cn.vuejs.org/guide/teleport.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_192 = /* @__PURE__ */ createStaticVNode('<p>Vue 鼓励我们通过将 UI 和相关行为封装到组件中来构建 UI。我们可以将它们嵌套在另一个内部，以构建一个组成应用程序 UI 的树。</p><ul><li><code>to</code> - ==string==。需要<code>prop</code>，必须是有效的查询选择器或<code>HTMLElement</code>(如果在浏览器环境中使用)。指定将在其中移动 <code>&lt;teleport&gt;</code> 内容的目标元素</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 正确 <span class="token operator">--</span><span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span>teleport to<span class="token operator">=</span><span class="token string">&quot;#some-id&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span>teleport to<span class="token operator">=</span><span class="token string">&quot;.some-class&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span>teleport to<span class="token operator">=</span><span class="token string">&quot;[data-teleport]&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>\n\n<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 错误 <span class="token operator">--</span><span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span>teleport to<span class="token operator">=</span><span class="token string">&quot;h1&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span>teleport to<span class="token operator">=</span><span class="token string">&quot;some-string&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>disabled</code> - ==boolean==。此可选属性可用于禁用 <code>&lt;teleport&gt;</code> 的功能，这意味着其插槽内容将不会移动到任何位置，而是在您在周围父组件中指定了 <code>&lt;teleport&gt;</code> 的位置渲染。</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>teleport to<span class="token operator">=</span><span class="token string">&quot;#popup&quot;</span> <span class="token operator">:</span>disabled<span class="token operator">=</span><span class="token string">&quot;displayVideoInline&quot;</span><span class="token operator">&gt;</span>\n  <span class="token operator">&lt;</span>video src<span class="token operator">=</span><span class="token string">&quot;./my-movie.mp4&quot;</span><span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>teleport<span class="token operator">&gt;</span>\n</code></pre></div><div class="tip-block warning"><p class="title">警告</p><p>请注意，将移动实际的 DOM 节点，而不是被销毁和重新创建，并且它还将保持任何组件实例的活动状态。所有有状态的 HTML 元素 (即播放的视频) 都将保持其状态。</p></div><p>例子：</p>', 7);
const _hoisted_199 = { id: "example2" };
const _hoisted_200 = ["src"];
const _hoisted_201 = /* @__PURE__ */ createBaseVNode(
  "small",
  null,
  "video在移动后播放状态不会暂停",
  -1
  /* HOISTED */
);
const _hoisted_202 = /* @__PURE__ */ createStaticVNode('<div class="bottom"></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&quot;#seat&quot;</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token function">goHandler</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">moveHandler</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token function">moveHandler</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword">this</span><span class="token punctuation">.</span>target <span class="token operator">=</span> el<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#example2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数式组件" tabindex="-1"><a class="header-anchor" href="#函数式组件" aria-hidden="true">#</a> 函数式组件</h2>', 3);
const _hoisted_205 = {
  href: "https://vue-loader.vuejs.org/zh/guide/functional.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_206 = {
  href: "https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_207 = /* @__PURE__ */ createStaticVNode("<p>特点：</p><ul><li>没有管理任何状态</li><li>没有实例 (没有<code>this</code>上下文)</li><li>内部没有生命周期方法</li><li>轻量,渲染性能高, 适合只依赖于外部数据传递而变化的组件(展示组件，无逻辑和状态修改)</li><li>在<code>template</code>标签里标明<code>functional</code>属性</li><li>被引用时组件上的所有属性，可以通过<code>props.xxx</code>的形式访问</li><li>不需要<code>script</code>标签</li><li>子组件<code>parent</code>是被引用时的父组件对象实例</li></ul>", 2);
const _hoisted_209 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-vue line-numbers-mode",
    "data-ext": "vue"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-vue" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("template")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("div")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("List")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, ":items"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("['Wonderwoman', 'Ironman']"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, ":itemClick"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("item => (selectedValue = item)"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("List")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n        "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("p")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("select value: {{ selectedValue }}"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("p")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("div")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("template")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("script")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token script" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token language-javascript" }, [
            /* @__PURE__ */ createTextVNode("\n"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
            /* @__PURE__ */ createTextVNode(" List "),
            /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "from"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'./List.vue'"),
            /* @__PURE__ */ createTextVNode("\n"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "export"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "default"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
            /* @__PURE__ */ createTextVNode("\n      "),
            /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "name"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"App"'),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
            /* @__PURE__ */ createTextVNode("\n      "),
            /* @__PURE__ */ createBaseVNode("span", { class: "token function-variable function" }, "data"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "=>"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "selectedValue"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '""'),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
            /* @__PURE__ */ createTextVNode("\n      "),
            /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "components"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
            /* @__PURE__ */ createTextVNode(" List "),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
            /* @__PURE__ */ createTextVNode("\n      "),
            /* @__PURE__ */ createBaseVNode("span", { class: "token literal-property property" }, "methods"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ":"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
            /* @__PURE__ */ createTextVNode("\n          "),
            /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "clickHandler"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
            /* @__PURE__ */ createBaseVNode("span", { class: "token parameter" }, "event"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
            /* @__PURE__ */ createTextVNode(),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
            /* @__PURE__ */ createTextVNode("\n              console"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
            /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "log"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
            /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'-------'"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
            /* @__PURE__ */ createTextVNode(" event"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
            /* @__PURE__ */ createTextVNode("\n          "),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
            /* @__PURE__ */ createTextVNode("\n      "),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
            /* @__PURE__ */ createTextVNode("\n"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
            /* @__PURE__ */ createTextVNode("\n")
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("script")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
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
const _hoisted_210 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-vue line-numbers-mode",
    "data-ext": "vue"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-vue" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("template")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "functional"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("div")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n            "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "<!-- 调用组件引用时属性下的方法 -->"),
        /* @__PURE__ */ createTextVNode("\n            "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("p")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "v-for"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("(item,index) in props.items"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, ":key"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("index"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "@click"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("props.itemClick(item)"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "/>")
        ]),
        /* @__PURE__ */ createTextVNode("\n            "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "<!-- 调用父组件下的方法 -->"),
        /* @__PURE__ */ createTextVNode("\n            "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "<"),
            /* @__PURE__ */ createTextVNode("button")
          ]),
          /* @__PURE__ */ createTextVNode(),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-name" }, "@click"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token attr-value" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation attr-equals" }, "="),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"'),
            /* @__PURE__ */ createTextVNode("parent.clickHandler(1111)"),
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, '"')
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode(" 调用父组件方法 "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("button")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n      "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("div")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
          /* @__PURE__ */ createBaseVNode("span", { class: "token tag" }, [
            /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "</"),
            /* @__PURE__ */ createTextVNode("template")
          ]),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ">")
        ]),
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_211 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  ":::",
  -1
  /* HOISTED */
);
const _hoisted_212 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "资源加载",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#资源加载",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 资源加载")
  ],
  -1
  /* HOISTED */
);
const _hoisted_213 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "vite-配置下加载指定目录下的文件",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#vite-配置下加载指定目录下的文件",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" vite 配置下加载指定目录下的文件")
  ],
  -1
  /* HOISTED */
);
const _hoisted_214 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-javascript",
    "data-ext": "js"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-javascript" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "const"),
        /* @__PURE__ */ createTextVNode(" modules "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "import"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createTextVNode("meta"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "globEager"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, "'/src/**/*.{png,svg,jpg,jpeg}'"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n")
      ])
    ])
  ],
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_CodeGroupItem = resolveComponent("CodeGroupItem");
  const _component_CodeGroup = resolveComponent("CodeGroup");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    createBaseVNode("details", _hoisted_4, [
      _hoisted_5,
      createBaseVNode("nav", _hoisted_6, [
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_router_link, { to: "#全局api" }, {
              default: withCtx(() => [
                createTextVNode("全局API")
              ]),
              _: 1
              /* STABLE */
            }),
            createBaseVNode("ul", null, [
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#createapp" }, {
                  default: withCtx(() => [
                    createTextVNode("createApp")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#h" }, {
                  default: withCtx(() => [
                    createTextVNode("h")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#createrenderer-hostnode-hostelement" }, {
                  default: withCtx(() => [
                    createTextVNode("createRenderer(HostNode, HostElement)")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#nexttick" }, {
                  default: withCtx(() => [
                    createTextVNode("nextTick")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#mergeprops" }, {
                  default: withCtx(() => [
                    createTextVNode("mergeProps")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#definecomponent" }, {
                  default: withCtx(() => [
                    createTextVNode("defineComponent")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#defineasynccomponent" }, {
                  default: withCtx(() => [
                    createTextVNode("defineAsyncComponent")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#resolvecomponent" }, {
                  default: withCtx(() => [
                    createTextVNode("resolveComponent")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#resolvedynamiccomponent" }, {
                  default: withCtx(() => [
                    createTextVNode("resolveDynamicComponent")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#resolvedirective" }, {
                  default: withCtx(() => [
                    createTextVNode("resolveDirective")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#withdirectives" }, {
                  default: withCtx(() => [
                    createTextVNode("withDirectives")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])
            ])
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_router_link, { to: "#应用api" }, {
              default: withCtx(() => [
                createTextVNode("应用API")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_router_link, { to: "#组合式api" }, {
              default: withCtx(() => [
                createTextVNode("组合式API")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_router_link, { to: "#响应式api" }, {
              default: withCtx(() => [
                createTextVNode("响应式API")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_router_link, { to: "#检测变化的注意事项" }, {
              default: withCtx(() => [
                createTextVNode("检测变化的注意事项")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_router_link, { to: "#数组" }, {
              default: withCtx(() => [
                createTextVNode("数组")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_router_link, { to: "#对象" }, {
              default: withCtx(() => [
                createTextVNode("对象")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_router_link, { to: "#实例方法" }, {
              default: withCtx(() => [
                createTextVNode("实例方法")
              ]),
              _: 1
              /* STABLE */
            }),
            createBaseVNode("ul", null, [
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#watch" }, {
                  default: withCtx(() => [
                    createTextVNode("$watch")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#emit" }, {
                  default: withCtx(() => [
                    createTextVNode("$emit")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#forceupdate" }, {
                  default: withCtx(() => [
                    createTextVNode("$forceUpdate")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#nexttick-1" }, {
                  default: withCtx(() => [
                    createTextVNode("$nextTick")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])
            ])
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_router_link, { to: "#常用指令" }, {
              default: withCtx(() => [
                createTextVNode("常用指令")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_router_link, { to: "#特殊指令" }, {
              default: withCtx(() => [
                createTextVNode("特殊指令")
              ]),
              _: 1
              /* STABLE */
            }),
            createBaseVNode("ul", null, [
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#key-number-string" }, {
                  default: withCtx(() => [
                    createTextVNode("key : number | string")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#ref-string-function" }, {
                  default: withCtx(() => [
                    createTextVNode("ref : string | Function")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#is-string-object-component-s-options-object" }, {
                  default: withCtx(() => [
                    createTextVNode("is : string | Object (component’s options object)")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])
            ])
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_router_link, { to: "#内置组件" }, {
              default: withCtx(() => [
                createTextVNode("内置组件")
              ]),
              _: 1
              /* STABLE */
            }),
            createBaseVNode("ul", null, [
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#teleport" }, {
                  default: withCtx(() => [
                    createTextVNode("Teleport")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])
            ])
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_router_link, { to: "#函数式组件" }, {
              default: withCtx(() => [
                createTextVNode("函数式组件")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ])
    ]),
    _hoisted_7,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_15, [
        createTextVNode("查看源文档"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_16,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_19, [
        createTextVNode("查看源文档"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_20,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_24, [
        createTextVNode("查看源文档"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_25,
    createBaseVNode("p", null, [
      createTextVNode("defineComponent函数，对setup函数进行封装，返回options的对象；在TypeScript下，给予了组件正确的参数类型推断 。 "),
      createBaseVNode("a", _hoisted_38, [
        createTextVNode("查看源文档"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_39,
    createBaseVNode("p", null, [
      createTextVNode("当使用"),
      createBaseVNode("a", _hoisted_42, [
        createTextVNode("局部注册"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("时，你也可以直接提供一个返回"),
      _hoisted_43,
      createTextVNode("的函数：")
    ]),
    _hoisted_44,
    createBaseVNode("p", null, [
      createTextVNode("更多高阶用法"),
      createBaseVNode("a", _hoisted_45, [
        createTextVNode("查看源文档"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("、"),
      createBaseVNode("a", _hoisted_46, [
        createTextVNode("动态和异步组件"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_47,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_53, [
        createTextVNode("查看源文档"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_54,
    createBaseVNode("p", null, [
      createTextVNode("详细信息"),
      createBaseVNode("a", _hoisted_59, [
        createTextVNode("查看源文档"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("、"),
      createBaseVNode("a", _hoisted_60, [
        createTextVNode("动态组件"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_61,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_62, [
        createTextVNode("查看源文档"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_63,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_64, [
        createTextVNode("查看源文档"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_65,
    _hoisted_66,
    createBaseVNode("p", null, [
      createTextVNode("文档参考 "),
      createBaseVNode("a", _hoisted_67, [
        createTextVNode("可复用 & 组合 > 组合式API"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    createBaseVNode("p", null, [
      createTextVNode("学习笔记参考 "),
      createVNode(_component_RouterLink, { to: "/guide/vue/vue3-composition-api.html" }, {
        default: withCtx(() => [
          createTextVNode("组合式API(Composition API)")
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_68,
    createBaseVNode("p", null, [
      createTextVNode("由于"),
      _hoisted_74,
      createTextVNode("的限制，"),
      _hoisted_75,
      createTextVNode("不能检测数组和对象的变化。尽管如此我们还是有一些办法来回避这些限制并保证它们的响应性。 "),
      createBaseVNode("a", _hoisted_76, [
        createTextVNode("v2 深入响应式原理"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createBaseVNode("a", _hoisted_77, [
        createTextVNode("v3 深入响应性原理"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_78,
    createBaseVNode("p", null, [
      createTextVNode("参考 "),
      createBaseVNode("a", _hoisted_91, [
        createTextVNode("$watch"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("、"),
      createBaseVNode("a", _hoisted_92, [
        createTextVNode("Watchers"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("、")
    ]),
    _hoisted_93,
    createBaseVNode("div", _hoisted_100, [
      _hoisted_101,
      _hoisted_102,
      createBaseVNode("p", null, [
        createTextVNode("参考："),
        createBaseVNode("a", _hoisted_103, [
          createTextVNode("$watch"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    _hoisted_104,
    createBaseVNode("p", null, [
      _hoisted_106,
      createTextVNode("侦听器应少用，因为它们没有这些好处。 更多关于 flush 的信息，请参阅"),
      createBaseVNode("a", _hoisted_107, [
        createTextVNode("副作用刷新时机"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(".")
    ]),
    _hoisted_108,
    createBaseVNode("div", _hoisted_112, [
      _hoisted_113,
      createBaseVNode("p", null, [
        createTextVNode("自定义事件时，建议定义所有发出的事件；参考："),
        createBaseVNode("a", _hoisted_114, [
          createTextVNode("自定义事件"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode("、"),
        createBaseVNode("a", _hoisted_115, [
          createTextVNode("使用事件抛出一个值"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    _hoisted_116,
    createBaseVNode("p", null, [
      createTextVNode("参考："),
      createBaseVNode("a", _hoisted_123, [
        createTextVNode("nextTick"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_124,
    _hoisted_125,
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_126, [
          createTextVNode("v-text"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    _hoisted_127,
    createBaseVNode("ol", _hoisted_128, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_129, [
          createTextVNode("v-html"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_130, [
          createTextVNode("v-show"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_131, [
          createTextVNode("v-if"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_132, [
          createTextVNode("v-else"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_133, [
          createTextVNode("v-else-if"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_134, [
          createTextVNode("v-for"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_135, [
          createTextVNode("v-on"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" （abbr:"),
        _hoisted_136,
        createTextVNode("）")
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_137, [
          createTextVNode("v-bind"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" （abbr:"),
        _hoisted_138,
        createTextVNode("）")
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_139, [
          createTextVNode("v-model"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(),
        createVNode(_component_RouterLink, { to: "/guide/vue/vue-model.html" }, {
          default: withCtx(() => [
            createTextVNode("整理笔记")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_140, [
          createTextVNode("v-once"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_141, [
          createTextVNode("v-is"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    createBaseVNode("p", null, [
      createBaseVNode("strong", null, [
        createBaseVNode("a", _hoisted_142, [
          createTextVNode("v-slot"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createTextVNode(" （abbr:"),
      _hoisted_143,
      createTextVNode("） 可放置在函数参数位置的 JavaScript 表达式 (在支持的环境下可使用解构)。可选，即只需要在为插槽传入 prop 的时候使用。 提供具名插槽或需要接收 prop 的插槽。")
    ]),
    _hoisted_144,
    createBaseVNode("p", null, [
      createTextVNode("扩展阅读："),
      createBaseVNode("a", _hoisted_145, [
        createTextVNode("组件 - 插槽"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_146,
    createBaseVNode("p", null, [
      createBaseVNode("strong", null, [
        createBaseVNode("a", _hoisted_150, [
          createTextVNode("v-pre"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createTextVNode(" 跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。")
    ]),
    _hoisted_151,
    createBaseVNode("p", null, [
      createBaseVNode("strong", null, [
        createBaseVNode("a", _hoisted_153, [
          createTextVNode("v-cloak"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createTextVNode(" cloak(英 [kləʊk]) 遮盖; 掩盖; 伪装; 幌子 这个指令保持和元素实例的关联，直到关联组件实例结束被移除。")
    ]),
    _hoisted_154,
    createVNode(_component_CodeGroup, null, {
      default: withCtx(() => [
        createVNode(_component_CodeGroupItem, { title: "style" }, {
          default: withCtx(() => [
            _hoisted_159
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_CodeGroupItem, { title: "html" }, {
          default: withCtx(() => [
            _hoisted_160
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_CodeGroupItem, { title: "script" }, {
          default: withCtx(() => [
            _hoisted_161
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_162,
    _hoisted_163,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_164, [
        createTextVNode("查看文档"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_165,
    createBaseVNode("div", _hoisted_174, [
      createVNode(Transition, {
        mode: "in-out",
        "enter-active-class": "animate__animated animate__flipInX",
        "leave-active-class": "animate__animated animate__flipInX"
      }, {
        default: withCtx(() => [
          (openBlock(), createElementBlock(
            "span",
            { key: $data.time },
            toDisplayString($data.time),
            1
            /* TEXT */
          ))
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_175,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_177, [
        createTextVNode("查看文档"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_178,
    createBaseVNode("p", null, [
      createTextVNode("参考"),
      createBaseVNode("a", _hoisted_182, [
        createTextVNode("子组件Refs"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_183,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_184, [
        createTextVNode("查看文档"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" 、"),
      createBaseVNode("a", _hoisted_185, [
        createTextVNode("动态组件基础"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("、"),
      createBaseVNode("a", _hoisted_186, [
        createTextVNode("动态组件 & 异步组件"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("。")
    ]),
    _hoisted_187,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_191, [
        createTextVNode("查看文档"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_192,
    createBaseVNode("div", _hoisted_199, [
      createBaseVNode("div", {
        id: "seat",
        class: "video-item",
        onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.goHandler && $options.goHandler(...args), ["self"]))
      }),
      createBaseVNode("div", {
        class: "video-item",
        onClick: _cache[1] || (_cache[1] = withModifiers((...args) => $options.goHandler && $options.goHandler(...args), ["self"]))
      }),
      (openBlock(), createBlock(Teleport, { to: $data.target }, [
        createBaseVNode("video", {
          src: _ctx.$withBase("/assets/medias/Piper_720P.mp4"),
          class: "video-item",
          controls: "",
          loop: "",
          "webkit-playsinline": "webkit-playsinline",
          playsinline: "true"
        }, null, 8, _hoisted_200)
      ], 8, ["to"])),
      createBaseVNode("div", {
        class: "video-item",
        onClick: _cache[2] || (_cache[2] = withModifiers((...args) => $options.goHandler && $options.goHandler(...args), ["self"]))
      }),
      createBaseVNode("div", {
        class: "video-item",
        onClick: _cache[3] || (_cache[3] = withModifiers((...args) => $options.goHandler && $options.goHandler(...args), ["self"]))
      }),
      createBaseVNode("div", null, [
        createBaseVNode("button", {
          onClick: _cache[4] || (_cache[4] = ($event) => $options.moveHandler("body"))
        }, "移动到body"),
        createBaseVNode("button", {
          onClick: _cache[5] || (_cache[5] = ($event) => $options.moveHandler("#top"))
        }, "移动到顶部"),
        createBaseVNode("button", {
          onClick: _cache[6] || (_cache[6] = ($event) => $options.moveHandler("#example1"))
        }, "移动到中间"),
        createBaseVNode("button", {
          onClick: _cache[7] || (_cache[7] = ($event) => $options.moveHandler(".bottom"))
        }, "移动到底部"),
        _hoisted_201
      ])
    ]),
    _hoisted_202,
    createBaseVNode("p", null, [
      createTextVNode("更多阅读参考 "),
      createBaseVNode("a", _hoisted_205, [
        createTextVNode("函数式组件"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createBaseVNode("a", _hoisted_206, [
        createTextVNode("函数式渲染上下文"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_207,
    createVNode(_component_CodeGroup, null, {
      default: withCtx(() => [
        createVNode(_component_CodeGroupItem, { title: "Page.vue" }, {
          default: withCtx(() => [
            _hoisted_209
          ]),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_CodeGroupItem, { title: "List.vue" }, {
          default: withCtx(() => [
            _hoisted_210
          ]),
          _: 1
          /* STABLE */
        }),
        _hoisted_211,
        _hoisted_212,
        _hoisted_213,
        _hoisted_214
      ]),
      _: 1
      /* STABLE */
    })
  ]);
}
const vue3StudyNotes_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "vue3-study-notes.html.vue"]]);
export {
  vue3StudyNotes_html as default
};
