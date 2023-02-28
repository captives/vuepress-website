import { r as resolveComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, e as createTextVNode, f as createVNode, j as createStaticVNode } from "./app-7cdc0156.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "发布代码到npm库",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#发布代码到npm库",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 发布代码到npm库")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "账号",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#账号",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 账号")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = {
  href: "http://npmjs.org/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "strong",
  null,
  "务必",
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<h2 id="代码库名称" tabindex="-1"><a class="header-anchor" href="#代码库名称" aria-hidden="true">#</a> 代码库名称</h2><p>命名之前，一定要在npm库搜索，是否被使用</p><h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h2><h2 id="新建目录" tabindex="-1"><a class="header-anchor" href="#新建目录" aria-hidden="true">#</a> 新建目录</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> captive-admin-ui\n<span class="token builtin class-name">cd</span> captive-admin-ui\n</code></pre></div><p>配置package.json，不仅仅用来标明依赖和npm script脚本，也是npm包被外界识别的配置文件。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> init\n</code></pre></div><p>根据提示进行操作，即可</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;captive-admin-ui&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.1&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;基于element-ui库开发对后台UI库&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token string">&quot;element-ui&quot;</span><span class="token punctuation">,</span>\n        <span class="token string">&quot;admin&quot;</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;captives&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;element-ui&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.15.1&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="本地测试" tabindex="-1"><a class="header-anchor" href="#本地测试" aria-hidden="true">#</a> 本地测试</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> pack\n</code></pre></div><p>会生成一个 tgz版本文件 打开一个新的项目，路径为刚刚生成的路径,即可安装使用</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token variable">${path}</span>/captive-admin-ui-1.0.0.tgz\n</code></pre></div><h2 id="登陆" tabindex="-1"><a class="header-anchor" href="#登陆" aria-hidden="true">#</a> 登陆</h2><p>在本地命令行下，登陆账号</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code> <span class="token function">npm</span> adduser \n</code></pre></div><p>按照提示，输入账户名，密码，以及账户的email邮箱地址；这时候看一下package.json中author尽量与npm账户一致。</p><p>检查是否登录成功</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">who</span> am i\n</code></pre></div><p>如果不成功则重新登录一下</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> login\n</code></pre></div><h2 id="提交发布" tabindex="-1"><a class="header-anchor" href="#提交发布" aria-hidden="true">#</a> 提交发布</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> publish\n</code></pre></div><h2 id="测试提交" tabindex="-1"><a class="header-anchor" href="#测试提交" aria-hidden="true">#</a> 测试提交</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i captive-admin-ui <span class="token parameter variable">--save</span>\n</code></pre></div><h2 id="撤销当前提交" tabindex="-1"><a class="header-anchor" href="#撤销当前提交" aria-hidden="true">#</a> 撤销当前提交</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> unpublish  <span class="token parameter variable">--force</span> //删除包\n</code></pre></div><hr>', 28);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    createBaseVNode("p", null, [
      createTextVNode("登陆"),
      createBaseVNode("a", _hoisted_3, [
        createTextVNode("npm"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("注册账号，结束后"),
      _hoisted_4,
      createTextVNode("进入邮箱进行验证账号；")
    ]),
    _hoisted_5
  ]);
}
const publishProjectToNpm_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "publish-project-to-npm.html.vue"]]);
export {
  publishProjectToNpm_html as default
};
