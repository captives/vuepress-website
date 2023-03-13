import { r as resolveComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, e as createTextVNode, f as createVNode, j as createStaticVNode } from "./app-46e25049.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="vscode-前端常用配置" tabindex="-1"><a class="header-anchor" href="#vscode-前端常用配置" aria-hidden="true">#</a> vscode 前端常用配置</h1><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><h2 id="常用插件" tabindex="-1"><a class="header-anchor" href="#常用插件" aria-hidden="true">#</a> 常用插件</h2><h3 id="vue-3-snippets" tabindex="-1"><a class="header-anchor" href="#vue-3-snippets" aria-hidden="true">#</a> Vue 3 Snippets</h3><blockquote><p>这个插件基于最新的 Vue 2 及 Vue 3 的 API 添加了代码片段。</p></blockquote>', 5);
const _hoisted_6 = { class: "tip-block details" };
const _hoisted_7 = /* @__PURE__ */ createStaticVNode('<summary>查看 Vue 2、Vue 3 代码片段</summary><h4 id="vue-3-代码片段" tabindex="-1"><a class="header-anchor" href="#vue-3-代码片段" aria-hidden="true">#</a> Vue 3 代码片段</h4><p>包含常用 Vue3 代码片段，比如你输入 <code>reactive</code>，选择 <code>reactive</code> 的代码片段，则编辑器会自动帮你生成 <code>const data = reactive({...})</code> 代码，提高你的开发效率。</p><table><thead><tr><th>关键字</th><th>JavaScript 代码片段</th></tr></thead><tbody><tr><td><code>import</code></td><td><code>import {...} from &quot;@vue/composition-api&quot;</code></td></tr><tr><td><code>import</code></td><td><code>import {...} from &#39;vue&#39;</code></td></tr><tr><td><code>newVue</code></td><td><code>newVue({...})</code></td></tr><tr><td><code>defineComponent</code></td><td><code>defineComponent({...})</code></td></tr><tr><td><code>export</code></td><td><code>export default { ... }</code></td></tr><tr><td><code>setup</code></td><td><code>setup(${...}) {...}</code></td></tr><tr><td><code>reactive</code></td><td><code>const data = reactive({...})</code></td></tr><tr><td><code>watch</code></td><td><code>watch(..., ...)</code></td></tr><tr><td><code>watchFn</code></td><td><code>watch(() =&gt; {...})</code></td></tr><tr><td><code>watchArray</code></td><td><code>watch([...]) =&gt; {...}</code></td></tr><tr><td><code>watchEffect</code></td><td><code>watchEffect(() =&gt; {...})</code></td></tr><tr><td><code>computed</code></td><td><code>computed(() =&gt; { get: () =&gt; {...}, set: () =&gt; {...}})</code></td></tr><tr><td><code>toRefs</code></td><td><code>toRefs(...)</code></td></tr><tr><td><code>ref</code></td><td><code>ref(...)</code></td></tr><tr><td><code>props</code></td><td><code>props(...)</code></td></tr><tr><td><code>onBeforeMount</code></td><td><code>onBeforeMount(...)</code></td></tr><tr><td><code>onMounted</code></td><td><code>onMounted(...)</code></td></tr><tr><td><code>onBeforeUpdate</code></td><td><code>onBeforeUpdate(...)</code></td></tr><tr><td><code>onUpdated</code></td><td><code>onUpdated(...)</code></td></tr><tr><td><code>onBeforeUnmount</code></td><td><code>onBeforeUnmount(...)</code></td></tr><tr><td><code>onUnmounted</code></td><td><code>onUnmounted(...)</code></td></tr><tr><td><code>onErrorCaptured</code></td><td><code>onErrorCaptured(...)</code></td></tr></tbody></table><h4 id="vue-2-代码片段" tabindex="-1"><a class="header-anchor" href="#vue-2-代码片段" aria-hidden="true">#</a> Vue 2 代码片段</h4><p>兼容所有常用 Vue 2 代码片段，如下：</p><table><thead><tr><th>关键字</th><th>JavaScript 代码片段</th></tr></thead><tbody><tr><td><code>import</code></td><td><code>import ... from ...</code></td></tr><tr><td><code>newVue</code></td><td><code>new Vue({...})</code></td></tr><tr><td><code>VueConfigSilent</code></td><td><code>Vue.config.silent = true</code></td></tr><tr><td><code>VueConfigOptionMergeStrategies</code></td><td><code>Vue.config.optionMergeStrategies</code></td></tr><tr><td><code>VueConfigDevtools</code></td><td><code>Vue.config.devtools = true</code></td></tr><tr><td><code>VueConfigErrorHandler</code></td><td><code>Vue.config.errorHandler = function (err, vm, info) {...}</code></td></tr><tr><td><code>VueConfigWarnHandler</code></td><td><code>Vue.config.warnHandler = function (msg, vm, trace) {...}</code></td></tr><tr><td><code>VueConfigIgnoredElements</code></td><td><code>Vue.config.ignoredElements = [&#39;&#39;]</code> \\</td></tr><tr><td><code>VueConfigKeyCodes</code></td><td><code>Vue.config.keyCodes</code></td></tr><tr><td><code>VueConfigPerformance</code></td><td><code>Vue.config.performance = true</code></td></tr><tr><td><code>VueConfigProductionTip</code></td><td><code>Vue.config.productionTip = false</code></td></tr><tr><td><code>vueExtend</code></td><td><code>Vue.extend( options )</code></td></tr><tr><td><code>VueNextTick</code></td><td><code>Vue.nextTick( callback, [context] )</code></td></tr><tr><td><code>VueNextTickThen</code></td><td><code>Vue.nextTick( callback, [context] ).then(function(){ })</code></td></tr><tr><td><code>VueSet</code></td><td><code>Vue.set( target, key, value )</code></td></tr><tr><td><code>VueDelete</code></td><td><code>Vue.delete( target, key )</code></td></tr><tr><td><code>VueDirective</code></td><td><code>Vue.directive( id, [definition] )</code></td></tr><tr><td><code>VueFilter</code></td><td><code>Vue.filter( id, [definition] )</code></td></tr><tr><td><code>VueComponent</code></td><td><code>Vue.component( id, [definition] )</code></td></tr><tr><td><code>VueUse</code></td><td><code>Vue.use( plugin )</code></td></tr><tr><td><code>VueMixin</code></td><td><code>Vue.mixin({ mixin })</code></td></tr><tr><td><code>VueCompile</code></td><td><code>Vue.compile( template )</code></td></tr><tr><td><code>VueVersion</code></td><td><code>Vue.version</code></td></tr><tr><td><code>data</code></td><td><code>data() { return {} }</code></td></tr><tr><td><code>watchWithOptions</code></td><td><code>key: { deep: true, immediate: true, handler: function () { } }</code></td></tr><tr><td><code>vmData</code></td><td><code>${this, vm}.$data</code></td></tr><tr><td><code>vmProps</code></td><td><code>${this, vm}.$props</code></td></tr><tr><td><code>vmEl</code></td><td><code>${this, vm}.$el</code></td></tr><tr><td><code>vmOptions</code></td><td><code>${this, vm}.$options</code></td></tr><tr><td><code>vmParent</code></td><td><code>${this, vm}.$parent</code></td></tr><tr><td><code>vmRoot</code></td><td><code>${this, vm}.$root</code></td></tr><tr><td><code>vmChildren</code></td><td><code>${this, vm}.$children</code></td></tr><tr><td><code>vmSlots</code></td><td><code>${this, vm}.$slots</code></td></tr><tr><td><code>vmScopedSlots</code></td><td><code>${this, vm}.$scopedSlots.default({})</code></td></tr><tr><td><code>vmRefs</code></td><td><code>${this, vm}.$refs</code></td></tr><tr><td><code>vmIsServer</code></td><td><code>${this, vm}.$isServer</code></td></tr><tr><td><code>vmAttrs</code></td><td><code>${this, vm}.$attrs</code></td></tr><tr><td><code>vmListeners</code></td><td><code>${this, vm}.listeners</code></td></tr><tr><td><code>vmWatch</code></td><td><code>${this, vm}.$watch( expOrFn, callback, [options] )</code></td></tr><tr><td><code>vmSet</code></td><td><code>${this, vm}.$set( object, key, value )</code></td></tr><tr><td><code>vmDelete</code></td><td><code>${this, vm}.$delete( object, key )</code></td></tr><tr><td><code>vmOn</code></td><td><code>${this, vm}.$on( event, callback )</code></td></tr><tr><td><code>vmOnce</code></td><td><code>${this, vm}.$once( event, callback )</code></td></tr><tr><td><code>vmOff</code></td><td><code>${this, vm}.$off( [event, callback] )</code></td></tr><tr><td><code>vmEmit</code></td><td><code>${this, vm}.$emit( event, […args] )</code></td></tr><tr><td><code>vmMount</code></td><td><code>${this, vm}.$mount( [elementOrSelector] )</code></td></tr><tr><td><code>vmForceUpdate</code></td><td><code>${this, vm}.$forceUpdate()</code></td></tr><tr><td><code>vmNextTick</code></td><td><code>${this, vm}.$nextTick( callback )</code></td></tr><tr><td><code>vmDestroy</code></td><td><code>${this, vm}.$destroy()</code></td></tr><tr><td><code>renderer</code></td><td><code>const renderer = require(&#39;vue-server-renderer&#39;).createRenderer()</code></td></tr><tr><td><code>createRenderer</code></td><td><code>createRenderer({ })</code></td></tr><tr><td><code>preventDefault</code></td><td><code>preventDefault();</code></td></tr><tr><td><code>stopPropagation</code></td><td><code>stopPropagation();</code></td></tr></tbody></table><br><table><thead><tr><th>关键字</th><th>HTML 代码片段</th></tr></thead><tbody><tr><td><code>template</code></td><td><code>&lt;template&gt;&lt;/template&gt;</code></td></tr><tr><td><code>script</code></td><td><code>&lt;script&gt;&lt;/script&gt;</code></td></tr><tr><td><code>style</code></td><td><code>&lt;style&gt;&lt;/style&gt;</code></td></tr><tr><td><code>vText</code></td><td><code>v-text=msg</code></td></tr><tr><td><code>vHtml</code></td><td><code>v-html=html</code></td></tr><tr><td><code>vShow</code></td><td><code>v-show</code></td></tr><tr><td><code>vIf</code></td><td><code>v-if</code></td></tr><tr><td><code>vElse</code></td><td><code>v-else</code></td></tr><tr><td><code>vElseIf</code></td><td><code>v-else-if</code></td></tr><tr><td><code>vForWithoutKey</code></td><td><code>v-for</code></td></tr><tr><td><code>vFor</code></td><td><code>v-for=&quot;&quot; :key=&quot;&quot;</code></td></tr><tr><td><code>vOn</code></td><td><code>v-on</code></td></tr><tr><td><code>vBind</code></td><td><code>v-bind</code></td></tr><tr><td><code>vModel</code></td><td><code>v-model</code></td></tr><tr><td><code>vPre</code></td><td><code>v-pre</code></td></tr><tr><td><code>vCloak</code></td><td><code>v-cloak</code></td></tr><tr><td><code>vOnce</code></td><td><code>v-once</code></td></tr><tr><td><code>key</code></td><td><code>:key</code></td></tr><tr><td><code>ref</code></td><td><code>ref</code></td></tr><tr><td><code>slotA</code></td><td><code>slot=&quot;&quot;</code></td></tr><tr><td><code>slotE</code></td><td><code>&lt;slot&gt;&lt;/slot&gt;</code></td></tr><tr><td><code>slotScope</code></td><td><code>slot-scope=&quot;&quot;</code></td></tr><tr><td><code>component</code></td><td><code>&lt;component :is=&#39;&#39;&gt;&lt;/component&gt;</code></td></tr><tr><td><code>keepAlive</code></td><td><code>&lt;keep-alive&gt;&lt;/keep-alive&gt;</code></td></tr><tr><td><code>transition</code></td><td><code>&lt;transition&gt;&lt;/transition&gt;</code></td></tr><tr><td><code>transitionGroup</code></td><td><code>&lt;transition-group&gt;&lt;/transition-group&gt;</code></td></tr><tr><td><code>enterClass</code></td><td><code>enter-class=&#39;&#39;</code></td></tr><tr><td><code>leaveClass</code></td><td><code>leave-class=&#39;&#39;</code></td></tr><tr><td><code>appearClass</code></td><td><code>appear-class=&#39;&#39;</code></td></tr><tr><td><code>enterToClass</code></td><td><code>enter-to-class=&#39;&#39;</code></td></tr><tr><td><code>leaveToClass</code></td><td><code>leave-to-class=&#39;&#39;</code></td></tr><tr><td><code>appearToClass</code></td><td><code>appear-to-class=&#39;&#39;</code></td></tr><tr><td><code>enterActiveClass</code></td><td><code>enter-active-class=&#39;&#39;</code></td></tr><tr><td><code>leaveActiveClass</code></td><td><code>leave-active-class=&#39;&#39;</code></td></tr><tr><td><code>appearActiveClass</code></td><td><code>appear-active-class=&#39;&#39;</code></td></tr><tr><td><code>beforeEnterEvent</code></td><td><code>@before-enter=&#39;&#39;</code></td></tr><tr><td><code>beforeLeaveEvent</code></td><td><code>@before-leave=&#39;&#39;</code></td></tr><tr><td><code>beforeAppearEvent</code></td><td><code>@before-appear=&#39;&#39;</code></td></tr><tr><td><code>enterEvent</code></td><td><code>@enter=&#39;&#39;</code></td></tr><tr><td><code>leaveEvent</code></td><td><code>@leave=&#39;&#39;</code></td></tr><tr><td><code>appearEvent</code></td><td><code>@appear=&#39;&#39;</code></td></tr><tr><td><code>afterEnterEvent</code></td><td><code>@after-enter=&#39;&#39;</code></td></tr><tr><td><code>afterLeaveEvent</code></td><td><code>@after-leave=&#39;&#39;</code></td></tr><tr><td><code>afterAppearEvent</code></td><td><code>@after-appear=&#39;&#39;</code></td></tr><tr><td><code>enterCancelledEvent</code></td><td><code>@enter-cancelled=&#39;&#39;</code></td></tr><tr><td><code>leaveCancelledEvent</code></td><td><code>@leave-cancelled=&#39;&#39;</code></td></tr><tr><td><code>appearCancelledEvent</code></td><td><code>@appear-cancelled=&#39;&#39;</code></td></tr></tbody></table><br><table><thead><tr><th>关键字</th><th>Vue Router 代码片段</th></tr></thead><tbody><tr><td><code>routerLink</code></td><td><code>&lt;router-link&gt;&lt;/router-link&gt;</code></td></tr><tr><td><code>routerView</code></td><td><code>&lt;router-view&gt;&lt;/router-view&gt;</code></td></tr><tr><td><code>to</code></td><td><code>to=&quot;&quot;</code></td></tr><tr><td><code>tag</code></td><td><code>tag=&quot;&quot;</code></td></tr><tr><td><code>newVueRouter</code></td><td><code>const router = newVueRouter({ })</code></td></tr><tr><td><code>routerBeforeEach</code></td><td><code>router.beforeEach((to, from, next) =&gt; { }</code></td></tr><tr><td><code>routerBeforeResolve</code></td><td><code>router.beforeResolve((to, from, next) =&gt; { }</code></td></tr><tr><td><code>routerAfterEach</code></td><td><code>router.afterEach((to, from) =&gt; { }</code></td></tr><tr><td><code>routerPush</code></td><td><code>router.push()</code></td></tr><tr><td><code>routerReplace</code></td><td><code>router.replace()</code></td></tr><tr><td><code>routerGo</code></td><td><code>router.back()</code></td></tr><tr><td><code>routerBack</code></td><td><code>router.push()</code></td></tr><tr><td><code>routerForward</code></td><td><code>router.forward()</code></td></tr><tr><td><code>routerGetMatchedComponents</code></td><td><code>router.getMatchedComponents()</code></td></tr><tr><td><code>routerResolve</code></td><td><code>router.resolve()</code></td></tr><tr><td><code>routerAddRoutes</code></td><td><code>router.addRoutes()</code></td></tr><tr><td><code>routerOnReady</code></td><td><code>router.onReady()</code></td></tr><tr><td><code>routerOnError</code></td><td><code>router.onError()</code></td></tr><tr><td><code>routes</code></td><td><code>routes: []</code></td></tr><tr><td><code>beforeEnter</code></td><td><code>beforeEnter: (to, from, next) =&gt; { }</code></td></tr><tr><td><code>beforeRouteEnter</code></td><td><code>beforeRouteEnter (to, from, next) { }</code></td></tr><tr><td><code>beforeRouteLeave</code></td><td><code>beforeRouteLeave (to, from, next) { }</code></td></tr><tr><td><code>scrollBehavior</code></td><td><code>scrollBehavior (to, from, savedPosition) { }</code></td></tr></tbody></table><br><table><thead><tr><th>关键字</th><th>Vuex 代码片段</th></tr></thead><tbody><tr><td><code>newVuexStore</code></td><td><code>const store = new Vuex.Store({})</code></td></tr><tr><td><code>mapGetters</code></td><td><code>import { mapGetters } from &#39;vuex&#39;</code></td></tr><tr><td><code>mapMutations</code></td><td><code>import { mapMutations } from &#39;vuex&#39;</code></td></tr><tr><td><code>mapActions</code></td><td><code>import { mapActions } from &#39;vuex&#39;</code></td></tr><tr><td><code>state</code></td><td><code>state</code></td></tr><tr><td><code>mutations</code></td><td><code>mutations</code></td></tr><tr><td><code>actions</code></td><td><code>actions</code></td></tr><tr><td><code>modules</code></td><td><code>modules</code></td></tr><tr><td><code>plugins</code></td><td><code>plugins</code></td></tr><tr><td><code>dispatch</code></td><td><code>dispatch</code></td></tr><tr><td><code>subscribe</code></td><td><code>subscribe</code></td></tr><tr><td><code>registerModule</code></td><td><code>registerModule</code></td></tr><tr><td><code>unregisterModule</code></td><td><code>unregisterModule</code></td></tr><tr><td><code>hotUpdate</code></td><td><code>hotUpdate</code></td></tr></tbody></table><br><table><thead><tr><th>关键字</th><th>Nuxt.js 代码片段</th></tr></thead><tbody><tr><td><code>nuxt</code></td><td><code>&lt;nuxt/&gt;</code></td></tr><tr><td><code>nuxtChild</code></td><td><code>&lt;nuxt-child/&gt;</code></td></tr><tr><td><code>nuxtLink</code></td><td><code>&lt;nuxt-link to=&quot;&quot;/&gt;</code></td></tr><tr><td><code>asyncData</code></td><td><code>asyncData() {}</code></td></tr></tbody></table><h4 id="插件设置" tabindex="-1"><a class="header-anchor" href="#插件设置" aria-hidden="true">#</a> 插件设置</h4><p>你可以在插件的选项中自定义代码格式化的格式，便于定制你的 <code>vue</code> 代码格式，配置参数如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>vue3snippets.arrowParens\nvue3snippets.bracketSpacing\nvue3snippets.endOfLine\nvue3snippets.htmlWhitespaceSensitivity\nvue3snippets.insertPragma\nvue3snippets.jsxBracketSameLine\nvue3snippets.jsxSingleQuote\nvue3snippets.printWidth\nvue3snippets.proseWrap\nvue3snippets.quoteProps\nvue3snippets.requirePragma\nvue3snippets.semi\nvue3snippets.singleQuote\nvue3snippets.tabWidth\nvue3snippets.trailingComma\nvue3snippets.useTabs\nvue3snippets.vueIndentScriptAndStyle\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>键值</th><th>例子</th><th>默认值</th></tr></thead><tbody><tr><td>vue3snippets.printWidth</td><td>10/20/30/40/n</td><td>80</td></tr><tr><td>vue3snippets.tabWidth</td><td>1/2/3/4/n</td><td>2</td></tr><tr><td>vue3snippets.singleQuote</td><td>false/true</td><td>false</td></tr><tr><td>vue3snippets.trailingComma</td><td>none/es5/all</td><td>es5</td></tr><tr><td>vue3snippets.bracketSpacing</td><td>true</td><td>true</td></tr><tr><td>vue3snippets.jsxBracketSameLine</td><td>false/true</td><td>false</td></tr><tr><td>vue3snippets.semi</td><td>false/true</td><td>true</td></tr><tr><td>vue3snippets.requirePragma</td><td>false/true</td><td>false</td></tr><tr><td>vue3snippets.insertPragma</td><td>false/true</td><td>false</td></tr><tr><td>vue3snippets.useTabs</td><td>false/true</td><td>false</td></tr><tr><td>vue3snippets.proseWrap</td><td>preserve/always/never</td><td>preserve</td></tr><tr><td>vue3snippets.arrowParens</td><td>avoid/always</td><td>always</td></tr><tr><td>vue3snippets.jsxSingleQuote</td><td>false/true</td><td>false</td></tr><tr><td>vue3snippets.htmlWhitespaceSensitivity</td><td>css/strict/ignore</td><td>css</td></tr><tr><td>vue3snippets.vueIndentScriptAndStyle</td><td>false/true</td><td>false</td></tr><tr><td>vue3snippets.endOfLine</td><td>auto/lf/crlf/cr</td><td>lf</td></tr><tr><td>vue3snippets.quoteProps</td><td>as-needed/consistent/preserve</td><td>as-needed</td></tr></tbody></table><h4 id="vue-2-3-详细教程" tabindex="-1"><a class="header-anchor" href="#vue-2-3-详细教程" aria-hidden="true">#</a> Vue 2/3 详细教程</h4><p>附赠一些 Vue 中文教程，希望能帮助你快速上手：</p>', 21);
const _hoisted_28 = {
  href: "https://github.com/Wscats/vue-cli",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_29 = {
  href: "https://github.com/Wscats/vue-tutorial",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_30 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "vscode-vue-peek",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#vscode-vue-peek",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" vscode-vue-peek")
  ],
  -1
  /* HOISTED */
);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode(
  "blockquote",
  null,
  [
    /* @__PURE__ */ createBaseVNode("p", null, "为.Vue的单文件组件中的组件和文件名提供了Go To Definition和Peek Definition支持。它允许快速跳转到或浏览作为组件（来自模板）或模块导入（来自脚本）引用的文件。")
  ],
  -1
  /* HOISTED */
);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "vetur",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#vetur",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Vetur")
  ],
  -1
  /* HOISTED */
);
const _hoisted_33 = {
  href: "https://vuejs.github.io/vetur/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_34 = /* @__PURE__ */ createStaticVNode('<h3 id="eslint" tabindex="-1"><a class="header-anchor" href="#eslint" aria-hidden="true">#</a> EsLint</h3><blockquote><p>语法纠错</p></blockquote><h3 id="path-intellisense" tabindex="-1"><a class="header-anchor" href="#path-intellisense" aria-hidden="true">#</a> Path Intellisense</h3><blockquote><p>自动路径补全</p></blockquote><h3 id="html-css-support" tabindex="-1"><a class="header-anchor" href="#html-css-support" aria-hidden="true">#</a> HTML CSS Support</h3>', 5);
const _hoisted_39 = {
  href: "https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_40 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "git-history",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#git-history",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Git History")
  ],
  -1
  /* HOISTED */
);
const _hoisted_41 = {
  href: "https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_42 = /* @__PURE__ */ createBaseVNode(
  "hr",
  null,
  null,
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("details", _hoisted_6, [
      _hoisted_7,
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createBaseVNode("a", _hoisted_28, [
            createTextVNode("《Vue 3.0 教程》"),
            createVNode(_component_ExternalLinkIcon)
          ])
        ]),
        createBaseVNode("li", null, [
          createBaseVNode("a", _hoisted_29, [
            createTextVNode("《Vue 2.0 教程》"),
            createVNode(_component_ExternalLinkIcon)
          ])
        ])
      ])
    ]),
    _hoisted_30,
    _hoisted_31,
    _hoisted_32,
    createBaseVNode("blockquote", null, [
      createBaseVNode("p", null, [
        createBaseVNode("a", _hoisted_33, [
          createTextVNode("Vetur"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode("支持.vue文件的语法高亮显示，除了支持template模板以外，还支持大多数主流的前端开发脚本和插件，比如Sass和TypeScript。")
      ])
    ]),
    _hoisted_34,
    createBaseVNode("blockquote", null, [
      createBaseVNode("p", null, [
        createTextVNode("让 html 标签上写class 智能提示当前项目所支持的样式, "),
        createBaseVNode("a", _hoisted_39, [
          createTextVNode("查看详细信息 >>"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    _hoisted_40,
    createBaseVNode("blockquote", null, [
      createBaseVNode("p", null, [
        createTextVNode("Git History 是一个可以轻松快速浏览 GitHub 文件操作历史记录的工具，该工具的功能和使用方法简洁明了，只要将任何文件的 URL 中的“github.com”替换成“github.githistory.xyz”即可以动画的方式快速查看该文件的修改历史记录。 "),
        createBaseVNode("a", _hoisted_41, [
          createTextVNode("查看详细信息 >>"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    _hoisted_42
  ]);
}
const vscodeGuide_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "vscode-guide.html.vue"]]);
export {
  vscodeGuide_html as default
};
