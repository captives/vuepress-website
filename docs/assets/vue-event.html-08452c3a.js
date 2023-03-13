import { r as resolveComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, f as createVNode, g as withCtx, e as createTextVNode, j as createStaticVNode } from "./app-46e25049.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "vue-event",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#vue-event",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Vue Event")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = { class: "table-of-contents" };
const _hoisted_3 = /* @__PURE__ */ createStaticVNode('<h2 id="event" tabindex="-1"><a class="header-anchor" href="#event" aria-hidden="true">#</a> Event</h2><h3 id="javascript事件的三阶段" tabindex="-1"><a class="header-anchor" href="#javascript事件的三阶段" aria-hidden="true">#</a> JavaScript事件的三阶段</h3><ul><li>捕获阶段</li><li>目标阶段：执行当前对象的事件处理程序</li><li>冒泡阶段</li></ul><div class="tip-block tip"><p class="title">提示</p><ul><li>阻止事件冒泡： <code>event.stopPropagation()</code> 或 <code>event.cancelBubble = true (IE)</code></li><li>阻止浏览器默认行为：<code>event.preventDefault()</code></li></ul></div><h2 id="事件修饰符" tabindex="-1"><a class="header-anchor" href="#事件修饰符" aria-hidden="true">#</a> 事件修饰符</h2>', 5);
const _hoisted_8 = {
  href: "https://cn.vuejs.org/v2/guide/events.html#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_9 = /* @__PURE__ */ createStaticVNode('<p>在事件处理程序中调用<code>event.preventDefault()</code>或<code>event.stopPropagation()</code>是非常常见的需求。尽管我们可以在方法中轻松实现这点，但更好的方式是：<strong>方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节</strong>。</p><p>为了解决这个问题，Vue.js 为<code>v-on</code>提供了事件修饰符。修饰符是由点开头的指令后缀来表示的。</p><ul><li><code>.stop</code> 阻止单击事件继续传播</li><li><code>.prevent</code> 提交事件不再重载页面</li><li><code>.capture</code> 内部元素触发的事件先在此处理，然后才交由内部元素进行处理</li><li><code>.self</code> 只当在 event.target 是当前元素自身时触发处理函数</li><li><code>.once</code> 点击事件将只会触发一次</li><li><code>.passive</code> 滚动事件的默认行为 (即滚动行为) 将会立即触发</li><li><code>.enter</code> 只有在<code>key</code>是<code>Enter</code>时调用<code>vm.submit()</code></li></ul><div class="tip-block tip"><p class="title">键盘事件修饰符</p><p><code>.tab</code>、<code>.esc</code>、<code>.space</code>、<code>.up</code>、<code>.down</code>、<code>.left</code>、<code>.right</code>、<code>.delete</code> (捕获“删除”和“退格”键)等等</p></div><p>示例：</p><ul><li>@click.stop : 阻止事件冒泡</li><li>@click.prevent : 阻止事件默认行为</li><li>@click.self : 事件只作用在元素本身，而不是其子元素</li><li>@click.capture : 使用事件捕获模式</li><li>@click.once : 事件只触发一次 2.1.4新增</li><li>@scroll.passive : 告诉浏览器这个事件的默认行为不会被取消 2.3.0新增</li><li>@keyup.enter : 按键修饰符，enter被按下的时候触发</li><li>@click.ctrl : 系统修饰符，Ctrl 被按下的时候触发 2.1.0新增</li><li>@click.ctrl.exact : 有且只有 Ctrl 被按下的时候才触发 2.5.0新增</li></ul><div class="tip-block danger"><p class="title">错误</p><p>使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用<code>v-on:click.prevent.self</code>会阻止所有的点击，而<code>v-on:click.self.prevent</code>只会阻止对元素自身的点击。</p></div><h2 id="自定义事件" tabindex="-1"><a class="header-anchor" href="#自定义事件" aria-hidden="true">#</a> 自定义事件</h2>', 8);
const _hoisted_17 = {
  href: "https://v3.cn.vuejs.org/guide/component-custom-events.html#%E5%AE%9A%E4%B9%89%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BA%8B%E4%BB%B6",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_18 = /* @__PURE__ */ createStaticVNode('<p>可以通过<code>emits</code>选项在组件上定义已发出的事件。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;custom-form&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">emits</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;inFocus&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;submit&#39;</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><div class="tip-block tip"><p class="title">Tip</p><p>建议定义所有发出的事件，以便更好地记录组件应该如何工作。</p></div><h3 id="验证抛出的事件" tabindex="-1"><a class="header-anchor" href="#验证抛出的事件" aria-hidden="true">#</a> 验证抛出的事件</h3><p>与<code>prop</code>类型验证类似，如果使用<strong>对象语法</strong>而不是<strong>数组语法</strong>定义发出的事件，则可以验证它。</p><p>要添加验证，将为事件分配一个函数，该函数接收传递给<code>$emit</code>调用的参数，并返回一个布尔值以指示事件是否有效。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;custom-form&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">emits</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 没有验证</span>\n    <span class="token literal-property property">click</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// 验证submit 事件</span>\n    <span class="token function-variable function">submit</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> email<span class="token punctuation">,</span> password <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>email <span class="token operator">&amp;&amp;</span> password<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token boolean">true</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;Invalid submit event payload!&#39;</span><span class="token punctuation">)</span>\n        <span class="token keyword">return</span> <span class="token boolean">false</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">submitForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;submit&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> email<span class="token punctuation">,</span> password <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 7);
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#event" }, {
            default: withCtx(() => [
              createTextVNode("Event")
            ]),
            _: 1
            /* STABLE */
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#javascript事件的三阶段" }, {
                default: withCtx(() => [
                  createTextVNode("JavaScript事件的三阶段")
                ]),
                _: 1
                /* STABLE */
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#事件修饰符" }, {
            default: withCtx(() => [
              createTextVNode("事件修饰符")
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#自定义事件" }, {
            default: withCtx(() => [
              createTextVNode("自定义事件")
            ]),
            _: 1
            /* STABLE */
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#验证抛出的事件" }, {
                default: withCtx(() => [
                  createTextVNode("验证抛出的事件")
                ]),
                _: 1
                /* STABLE */
              })
            ])
          ])
        ])
      ])
    ]),
    _hoisted_3,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_8, [
        createTextVNode("查看文档"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_9,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_17, [
        createTextVNode("查看文档"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_18
  ]);
}
const vueEvent_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "vue-event.html.vue"]]);
export {
  vueEvent_html as default
};
