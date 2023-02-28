import { r as resolveComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, e as createTextVNode, f as createVNode, g as withCtx, j as createStaticVNode } from "./app-7cdc0156.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "vue3-组合式api-composition-api",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#vue3-组合式api-composition-api",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Vue3 组合式API(Composition API)")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = {
  href: "https://v3.cn.vuejs.org/guide/composition-api-introduction.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = { class: "tip-block details" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "summary",
  null,
  "目录导航",
  -1
  /* HOISTED */
);
const _hoisted_5 = { class: "table-of-contents" };
const _hoisted_6 = /* @__PURE__ */ createStaticVNode('<p>使用 (<code>data</code>、<code>computed</code>、<code>methods</code>、<code>watch</code>) 组件选项来组织逻辑通常都很有效。然而，当我们的组件开始变得更大时，逻辑关注点的列表也会增长。尤其对于那些一开始没有编写这些组件的人来说，这会导致组件难以阅读和理解。处理这样的大型应用时，<strong>共享和重用</strong>代码变得尤为重要。</p><h2 id="setup-组件选项" tabindex="-1"><a class="header-anchor" href="#setup-组件选项" aria-hidden="true">#</a> setup 组件选项</h2><p>我们需要做的是把<strong>同一个逻辑关注点</strong>相关代码收集在一起,而这正是<em>组合式 API</em>使我们能够做到的; 在Vue组件中，我们将此位置称为<code>setup</code>。 新的<code>setup</code>选项在组件创建之前执行，一旦<code>props</code>被解析，就将作为组合式API的入口。 处理大型应用时，共享和重用代码</p><p><code>setup</code>选项是一个接收<code>props</code>和<code>context</code>的函数，我们将<code>setup</code>返回的所有内容都暴露给组件的其余部分 (计算属性<code>computed</code>、方法<code>methods</code>、生命周期钩子等等) 以及组件的模板。</p><h2 id="带ref的响应式变量" tabindex="-1"><a class="header-anchor" href="#带ref的响应式变量" aria-hidden="true">#</a> 带<code>ref</code>的响应式变量</h2><p>在 Vue 3.0 中，我们可以通过一个新的<code>ref</code>函数使任何响应式变量在任何地方起作用。</p><p><code>ref</code>接收参数并将其包裹在一个带有<code>value</code> <em>property</em>的对象中返回，然后使用该<em>property</em>访问或更改响应式变量的值：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>counter<span class="token punctuation">)</span> <span class="token comment">// { value: 1 }</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>counter<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// 1</span>\n\n        count<span class="token punctuation">.</span>value <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>counter<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// 2</span>\n        <span class="token comment">// 这里返回的任何内容都可以用于组件的其余部分</span>\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            count\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{count}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>为了保持JavaScript 中不同数据类型的行为统一，我们需要把基本数据类型（<code>Number</code>、<code>Boolean</code>、<code>String</code>）转换为引用类型，所以才会封装到一个对象中。 <img src="https://blog.penjee.com/wp-content/uploads/2015/02/pass-by-reference-vs-pass-by-value-animation.gif" alt="基本数据类型引用"></p><div class="tip-block tip"><p class="title">提示</p><p>通过<code>ref</code>可以创建了一个<strong>响应式引用</strong>。在整个组合式 API 中会经常使用<strong>引用</strong>的概念。</p></div><h2 id="在setup内注册生命周期钩子" tabindex="-1"><a class="header-anchor" href="#在setup内注册生命周期钩子" aria-hidden="true">#</a> 在<code>setup</code>内注册生命周期钩子</h2>', 12);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "setup",
  -1
  /* HOISTED */
);
const _hoisted_19 = {
  href: "https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_20 = /* @__PURE__ */ createStaticVNode('<ul><li><strong>beforeCreate</strong> 在实例初始化之后、进行数据侦听和事件/侦听器的配置之前同步调用。</li><li><strong>created</strong> 在实例创建完成后被立即同步调用。数据侦听、计算属性、方法、事件/侦听器的回调函数已被配置完毕, 挂载阶段还没开始，且<code>$el</code> <em>property</em>目前尚不可用</li><li><strong>beforeMount</strong> 在挂载开始之前被调用：相关的<code>render</code>函数首次被调用。</li><li><strong>mounted</strong> 在实例挂载完成后被调用，这时候传递给 app.mount 的元素已经被新创建的 vm.$el 替换了。</li><li><strong>beforeUpdate</strong> 在数据发生改变后，DOM 被更新之前被调用。</li><li><strong>updated</strong> 在数据更改导致的虚拟 DOM 重新渲染和更新完毕之后被调用。</li><li><strong>activated</strong> 被<code>keep-alive</code>缓存的组件激活时调用。</li><li><strong>deactivated</strong> 被<code>keep-alive</code>缓存的组件失活时调用。</li><li><strong>beforeUnmount</strong> 在卸载组件实例之前调用。在这个阶段，实例仍然是完全正常的。</li><li><strong>unmounted</strong> 卸载组件实例后调用。此钩子调用时，组件实例的所有指令都被解除绑定，所有事件侦听器都被移除，所有子组件实例被卸载。</li><li><strong>errorCaptured</strong> 在捕获一个来自后代组件的错误时被调用。</li><li><strong>renderTracked</strong> 跟踪虚拟 DOM 重新渲染时调用。</li><li><strong>renderTriggere</strong> 当虚拟 DOM 重新渲染被触发时调用。</li></ul><p><strong>组合式API</strong>上的生命周期钩子与<strong>选项式API</strong>的名称相同，但前缀为<code>on:</code>即<code>mounted</code>看起来会像<code>onMounted</code>。</p><p>这些函数接受一个回调，当钩子被组件调用时，该回调将被执行。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted<span class="token punctuation">,</span> onUpdated <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> enabled <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            enabled<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token operator">!</span>enabled<span class="token punctuation">.</span>value<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;初始化完成...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n        <span class="token function">onUpdated</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;视图更新了~~~~&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n        <span class="token keyword">return</span> <span class="token punctuation">{</span> enabled <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="watch响应式更改" tabindex="-1"><a class="header-anchor" href="#watch响应式更改" aria-hidden="true">#</a> <code>watch</code>响应式更改</h2><p>就像我们在组件中使用<code>watch</code>选项并在属性上设置侦听器一样，我们也可以使用从 Vue 导入的<code>watch</code>函数执行相同的操作。 它接受 3 个参数：</p><ul><li>一个想要侦听的响应式引用或 getter 函数</li><li>一个回调</li><li>可选的配置选项</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">const</span> counter <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n<span class="token function">watch</span><span class="token punctuation">(</span>counter<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;The new counter value is: &#39;</span> <span class="token operator">+</span> counter<span class="token punctuation">.</span>value<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p>等效的选项式API：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            <span class="token literal-property property">counter</span><span class="token operator">:</span> <span class="token number">0</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token function">counter</span> <span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;The new counter value is: &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>counter<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 10);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "watch",
  -1
  /* HOISTED */
);
const _hoisted_31 = {
  href: "https://v3.cn.vuejs.org/guide/reactivity-computed-watchers.html#watch",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_32 = /* @__PURE__ */ createStaticVNode('<h2 id="独立的-computed-属性" tabindex="-1"><a class="header-anchor" href="#独立的-computed-属性" aria-hidden="true">#</a> 独立的 computed 属性</h2><p>与<code>ref</code>和<code>watch</code>类似，也可以使用从Vue导入的<code>computed</code>函数在<code>Vue</code>组件外部创建计算属性。让我们回到<code>counter</code>的例子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> counter <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> twiceTheCounter <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> counter<span class="token punctuation">.</span>value <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ncounter<span class="token punctuation">.</span>value<span class="token operator">++</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>counter<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>twiceTheCounter<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="defineprops-和-defineemits" tabindex="-1"><a class="header-anchor" href="#defineprops-和-defineemits" aria-hidden="true">#</a> defineProps 和 defineEmits</h2><p>在<code>&lt;script setup&gt;</code>中必须使用<code>defineProps</code>和<code>defineEmits</code>API来声明<code>props</code>和<code>emits</code>，它们具备完整的类型推断并且在<code>&lt;script setup&gt;</code>中是直接可用的：</p>', 5);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("blockquote", null, [
      createBaseVNode("p", null, [
        createTextVNode("文档参考"),
        createBaseVNode("a", _hoisted_2, [
          createTextVNode("可复用 & 组合 > 组合式API"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    createBaseVNode("details", _hoisted_3, [
      _hoisted_4,
      createBaseVNode("nav", _hoisted_5, [
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_router_link, { to: "#setup-组件选项" }, {
              default: withCtx(() => [
                createTextVNode("setup 组件选项")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_router_link, { to: "#带ref的响应式变量" }, {
              default: withCtx(() => [
                createTextVNode("带ref的响应式变量")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_router_link, { to: "#在setup内注册生命周期钩子" }, {
              default: withCtx(() => [
                createTextVNode("在setup内注册生命周期钩子")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_router_link, { to: "#watch响应式更改" }, {
              default: withCtx(() => [
                createTextVNode("watch响应式更改")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_router_link, { to: "#独立的-computed-属性" }, {
              default: withCtx(() => [
                createTextVNode("独立的 computed 属性")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          createBaseVNode("li", null, [
            createVNode(_component_router_link, { to: "#defineprops-和-defineemits" }, {
              default: withCtx(() => [
                createTextVNode("defineProps 和 defineEmits")
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ])
    ]),
    _hoisted_6,
    createBaseVNode("p", null, [
      createTextVNode("为了使组合式 API 的功能和选项式 API 一样完整，我们还需要一种在"),
      _hoisted_18,
      createTextVNode("中注册"),
      createBaseVNode("a", _hoisted_19, [
        createTextVNode("生命周期钩子"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("的方法。")
    ]),
    _hoisted_20,
    createBaseVNode("p", null, [
      createTextVNode("有关"),
      _hoisted_30,
      createTextVNode("的详细信息，请参阅"),
      createBaseVNode("a", _hoisted_31, [
        createTextVNode("深入指南"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("。")
    ]),
    _hoisted_32
  ]);
}
const vue3CompositionApi_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "vue3-composition-api.html.vue"]]);
export {
  vue3CompositionApi_html as default
};
