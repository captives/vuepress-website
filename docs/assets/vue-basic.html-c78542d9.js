import { r as resolveComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, f as createVNode, g as withCtx, e as createTextVNode, j as createStaticVNode } from "./app-46e25049.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "vue-知识点总结",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#vue-知识点总结",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Vue 知识点总结")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = { class: "tip-block details" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "summary",
  null,
  "导航目录",
  -1
  /* HOISTED */
);
const _hoisted_4 = { class: "table-of-contents" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "vue-父子组件通讯",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#vue-父子组件通讯",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" vue 父子组件通讯")
  ],
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "方式一-事件类型",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#方式一-事件类型",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 方式一：事件类型")
  ],
  -1
  /* HOISTED */
);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("事件类型基本是通过"),
    /* @__PURE__ */ createBaseVNode("code", null, "prop"),
    /* @__PURE__ */ createTextVNode("向子组件注入数据，子组件通过实例上"),
    /* @__PURE__ */ createBaseVNode("code", null, "$emit"),
    /* @__PURE__ */ createTextVNode("方法向父组件派发数据，来完成交互。")
  ],
  -1
  /* HOISTED */
);
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<li><p><code>v-model</code> 是 <code>v-bind:value</code>与<code>v-on:input</code>的语法糖</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n//等价于\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">v-on:</span>input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name = $event<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n//简写\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name = $event<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre></div></li>', 1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "visible.sync",
  -1
  /* HOISTED */
);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "v-bind:visible",
  -1
  /* HOISTED */
);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "v-on:update.visible",
  -1
  /* HOISTED */
);
const _hoisted_12 = /* @__PURE__ */ createStaticVNode('<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>visible.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> \n//等价于\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">v-on:</span>update.visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show = $event<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> \n//简写\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@update.visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show = $event<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> \n</code></pre></div><div class="tip-block warning"><p class="title">注意：</p><p>带有<code>.sync</code>修饰符的<code>v-bind</code>不能和表达式一起使用 (例如<code>v-bind:title.sync=&quot;doc.title + &#39;!&#39;&quot;</code>是无效的)。取而代之的是，你只能提供你想要绑定的属性名，类似<code>v-model</code>。</p></div>', 2);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  [
    /* @__PURE__ */ createBaseVNode("p", null, [
      /* @__PURE__ */ createBaseVNode("code", null, "eventBus"),
      /* @__PURE__ */ createTextVNode(" 在全局的Vue实例上添加一个"),
      /* @__PURE__ */ createBaseVNode("code", null, "EventEmitter"),
      /* @__PURE__ */ createTextVNode("实例，通过事件的派发、监听实现（后代组件和祖先组件之间、兄弟组件之间）数据交互；")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_15 = /* @__PURE__ */ createStaticVNode('<h3 id="方式二-provide和inject-提供注入-高阶组件库使用-。" tabindex="-1"><a class="header-anchor" href="#方式二-provide和inject-提供注入-高阶组件库使用-。" aria-hidden="true">#</a> 方式二：<code>provide</code>和<code>inject</code> 提供注入（高阶组件库使用）。</h3><blockquote><p>这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。</p></blockquote><p>默认提供的属性是非响应的，可通过<strong>提供函数</strong>，而函数的参数是<code>callback</code>方式，后代组件和祖先组件之间实现数据交互。</p><h3 id="方式三-原型链" tabindex="-1"><a class="header-anchor" href="#方式三-原型链" aria-hidden="true">#</a> 方式三：原型链</h3><p>通过Vue组件树实例进行的传值，常见通过<code>this.$root</code> 、<code>this.$parent</code>和<code>this.$refs</code>、<code>this.$children</code>进行组件实例引用；</p><ul><li><code>$root</code> 当前组件树的根Vue实例，如果当前实例没有父实例，此实例将会是自己。</li><li><code>$parent</code> 当前子组件父级实例</li><li><code>$refs</code> 当前组件下持有注册过<code>ref</code>属性的所有DOM元素和组件实例</li></ul><p>获取到组件实例后，访问实例的</p>', 7);
const _hoisted_22 = {
  href: "https://cn.vuejs.org/v2/api/#%E5%AE%9E%E4%BE%8B-property",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_23 = /* @__PURE__ */ createStaticVNode("<li><code>$el</code> Vue 实例使用的DOM元素。</li><li><code>$data</code> Vue 实例观察的数据对象。Vue 实例代理了对其 data 对象<code>property</code>的访问。</li><li><code>$options</code> 用于当前 Vue 实例的初始化选项。需要在选项中包含自定义<code>property</code>时会有用处：</li><li><code>$props</code> 当前组件接收到的 props 对象。Vue 实例代理了对其 props 对象<code>property</code>的访问。</li><li><code>$parent</code> 父实例，如果当前实例有的话。</li><li><code>$root</code> 当前组件树的根 Vue 实例。如果当前实例没有父实例，此实例将会是其自己。</li><li><code>$children</code> 当前实例的直接子组件。需要注意<code>$children</code>并不保证顺序，也不是响应式的。如果你发现自己正在尝试使用<code>$children</code>来进行数据绑定，考虑使用一个数组配合<code>v-for</code>来生成子组件，并且使用<code>Array</code>作为真正的来源。</li>", 7);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "$slots",
  -1
  /* HOISTED */
);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "property",
  -1
  /* HOISTED */
);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "property",
  -1
  /* HOISTED */
);
const _hoisted_33 = {
  href: "https://cn.vuejs.org/v2/api/#vm-data",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_34 = /* @__PURE__ */ createStaticVNode("<li><code>$scopedSlots</code> 用来访问作用域插槽。对于包括默认<code>slot</code>在内的每一个插槽，该对象都包含一个返回相应<code>VNode</code>的函数。<code>vm.$scopedSlots</code>在使用渲染函数开发一个组件时特别有用。</li><li><code>$refs</code> 一个对象，持有注册过<code>ref</code>属性的所有DOM元素和组件实例。</li><li><code>$attrs</code> 包含了父作用域中不作为 prop 被识别 (且获取) 的 attribute 绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过<code>v-bind=&quot;$attrs&quot;</code>传入内部组件——在创建高级别的组件时非常有用。</li><li><code>$listeners</code> 包含了父作用域中的 (不含<code>.native</code>修饰器的)<code>v-on</code>事件监听器。它可以通过<code>v-on=&quot;$listeners&quot;</code>传入内部组件——在创建更高层次的组件时非常有用。</li>", 4);
const _hoisted_38 = {
  href: "https://cn.vuejs.org/v2/api/#%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95-%E6%95%B0%E6%8D%AE",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_39 = /* @__PURE__ */ createStaticVNode("<ul><li><code>$watch(expOrFn, callback, [options])</code> 观察<code>Vue</code>实例上的一个表达式或者一个函数计算结果的变化。</li><li><code>$set(target, propertyName/index, value)</code> 是<code>Vue.set</code>的<strong>别名</strong>。 向响应式对象中添加一个<code>property</code>，并确保这个新<code>property</code>同样是响应式的，且触发视图更新。</li><li><code>$delete(target, propertyName/index)</code> 是<code>Vue.delete</code>的<strong>别名</strong>。删除对象的<code>property</code>。如果对象是响应式的，确保删除能触发更新视图。</li></ul>", 1);
const _hoisted_40 = {
  href: "https://cn.vuejs.org/v2/api/#%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95-%E4%BA%8B%E4%BB%B6",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_41 = /* @__PURE__ */ createStaticVNode("<ul><li><code>$on(event, callback)</code> 监听当前实例上的自定义事件。事件可以由 vm.$emit 触发。回调函数会接收所有传入事件触发函数的额外参数。</li><li><code>$once(event, callback)</code> 监听一个自定义事件，但是只触发一次。一旦触发之后，监听器就会被移除。</li><li><code>$off([event, callback])</code> 移除自定义事件监听器。 <ul><li>如果没有提供参数，则移除所有的事件监听器；</li><li>如果只提供了事件，则移除该事件所有的监听器；</li><li>如果同时提供了事件与回调，则只移除这个回调的监听器。</li></ul></li><li><code>$emit(eventName, […args])</code> 触发当前实例上的事件。附加参数都会传给监听器回调。</li></ul>", 1);
const _hoisted_42 = /* @__PURE__ */ createStaticVNode('<h3 id="方式四-vuex-状态管理" tabindex="-1"><a class="header-anchor" href="#方式四-vuex-状态管理" aria-hidden="true">#</a> 方式四：Vuex 状态管理</h3><h3 id="方式五-attrs和listeners" tabindex="-1"><a class="header-anchor" href="#方式五-attrs和listeners" aria-hidden="true">#</a> 方式五：<code>attrs</code>和<code>listeners</code></h3><div class="tip-block tip"><p class="title">attrs 官网说明</p><p>包含了父作用域中不作为 prop 被识别 (且获取) 的特性绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind=&quot;$attrs&quot; 传入内部组件——在创建高级别的组件时非常有用</p></div><div class="tip-block tip"><p class="title">listeners 官网说明</p><p>包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on=&quot;$listeners&quot; 传入内部组件——在创建更高层次的组件时非常有用。</p></div>', 4);
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("details", _hoisted_2, [
      _hoisted_3,
      createBaseVNode("nav", _hoisted_4, [
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_router_link, { to: "#vue-父子组件通讯" }, {
              default: withCtx(() => [
                createTextVNode("vue 父子组件通讯")
              ]),
              _: 1
              /* STABLE */
            }),
            createBaseVNode("ul", null, [
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#方式一-事件类型" }, {
                  default: withCtx(() => [
                    createTextVNode("方式一：事件类型")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#方式二-provide和inject-提供注入-高阶组件库使用-。" }, {
                  default: withCtx(() => [
                    createTextVNode("方式二：provide和inject 提供注入（高阶组件库使用）。")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#方式三-原型链" }, {
                  default: withCtx(() => [
                    createTextVNode("方式三：原型链")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#方式四-vuex-状态管理" }, {
                  default: withCtx(() => [
                    createTextVNode("方式四：Vuex 状态管理")
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "#方式五-attrs和listeners" }, {
                  default: withCtx(() => [
                    createTextVNode("方式五：attrs和listeners")
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
    _hoisted_6,
    _hoisted_7,
    createBaseVNode("ol", null, [
      _hoisted_8,
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          _hoisted_9,
          createTextVNode(" 是 "),
          _hoisted_10,
          createTextVNode("与"),
          _hoisted_11,
          createTextVNode("的语法糖 "),
          createVNode(_component_RouterLink, { to: "/guide/vue/vue-event.html" }, {
            default: withCtx(() => [
              createTextVNode(".sync")
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _hoisted_12
      ]),
      _hoisted_14
    ]),
    _hoisted_15,
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_22, [
          createTextVNode("实例属性"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createBaseVNode("ul", null, [
          _hoisted_23,
          createBaseVNode("li", null, [
            _hoisted_30,
            createTextVNode(" 用来访问被插槽分发的内容。每个具名插槽有其相应的"),
            _hoisted_31,
            createTextVNode("(例如：v-slot:foo 中的内容将会在 vm.$slots.foo 中被找到)。default"),
            _hoisted_32,
            createTextVNode("包括了所有没有被包含在具名插槽中的节点，或 v-slot:default 的内容。"),
            createBaseVNode("a", _hoisted_33, [
              createTextVNode("查看更多vm-data"),
              createVNode(_component_ExternalLinkIcon)
            ])
          ]),
          _hoisted_34
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_38, [
          createTextVNode("实例方法"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _hoisted_39
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_40, [
          createTextVNode("实例事件"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _hoisted_41
      ])
    ]),
    _hoisted_42
  ]);
}
const vueBasic_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "vue-basic.html.vue"]]);
export {
  vueBasic_html as default
};
