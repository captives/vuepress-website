import { r as resolveComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, e as createTextVNode, f as createVNode, j as createStaticVNode } from "./app-e6eab0de.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="go-基本入门" tabindex="-1"><a class="header-anchor" href="#go-基本入门" aria-hidden="true">#</a> Go 基本入门</h1><h2 id="环境安装" tabindex="-1"><a class="header-anchor" href="#环境安装" aria-hidden="true">#</a> 环境安装</h2><h3 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h3>', 3);
const _hoisted_4 = {
  href: "https://golang.org/dl/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = {
  href: "https://studygolang.com/dl",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_6 = /* @__PURE__ */ createStaticVNode("<p>安装后目录说明 Go语言安装之后，Go目录下一共有9个目录与9个文件，如下图：</p><ul><li>api — 目录，包含所有API列表，方便IDE使用</li><li>bin — 目录，存放编译后的可执行文件</li><li>blog — 目录，</li><li>doc — 目录，帮助文档</li><li>lib — 目录，</li><li>misc — 目录，</li><li>pkg — 目录，存放编译后的包文件。pkg中的文件是Go编译生成的</li><li>src — 目录，存放项目源文件</li></ul><p>注：一般，bin和pkg目录可以不创建，go命令会自动创建（如 go install），只需要创建src目录即可。</p>", 3);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "Authors — 文件，作者列表，用记事本打开",
  -1
  /* HOISTED */
);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "CONTRIBUTING.md — 文件，",
  -1
  /* HOISTED */
);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "CONTRIBUTORS — 文件，",
  -1
  /* HOISTED */
);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "favicon.ico — 文件，",
  -1
  /* HOISTED */
);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "LICENSE — 文件，license，用记事本打开",
  -1
  /* HOISTED */
);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "PATENTS — 文件，",
  -1
  /* HOISTED */
);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "README.md — 文件，",
  -1
  /* HOISTED */
);
const _hoisted_16 = {
  href: "https://support.google.com/webmasters/answer/6062608?hl=zh-Hans",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_17 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "VERSION — 文件，版本信息，用记事本打开",
  -1
  /* HOISTED */
);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "配置go-proxy",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#配置go-proxy",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 配置Go Proxy")
  ],
  -1
  /* HOISTED */
);
const _hoisted_19 = {
  href: "https://goproxy.cn/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_20 = /* @__PURE__ */ createStaticVNode('<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>go <span class="token function">env</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">GO111MODULE</span><span class="token operator">=</span>on\ngo <span class="token function">env</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span>https://goproxy.cn,direct\n</code></pre></div><p>查看环境变量</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>go <span class="token function">env</span>\n</code></pre></div><h3 id="vs-code-安装go插件" tabindex="-1"><a class="header-anchor" href="#vs-code-安装go插件" aria-hidden="true">#</a> VS Code 安装Go插件</h3><p>搜索插件<code>Go</code>并安装即可，然后VSCode会提示缺少<code>Go</code>的工具，由于上面已经配置了GoProxy，因此这里可以在VSCode的提示框中选择全部安装。</p><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3><p>在$GOPATH对应的目录中创建一个Hello.go</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main\n\n<span class="token keyword">import</span> <span class="token punctuation">(</span>\n    <span class="token string">&quot;fmt&quot;</span>\n<span class="token punctuation">)</span>\n\n<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello world, go!&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令行执行即可看到输出信息：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>go run Hello.go\n</code></pre></div><h2 id="语言基础" tabindex="-1"><a class="header-anchor" href="#语言基础" aria-hidden="true">#</a> 语言基础</h2>', 11);
const _hoisted_31 = {
  href: "https://www.runoob.com/go/go-basic-syntax.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_32 = {
  href: "http://c.biancheng.net/golang/intro/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_33 = /* @__PURE__ */ createStaticVNode('<h3 id="import" tabindex="-1"><a class="header-anchor" href="#import" aria-hidden="true">#</a> import</h3><h4 id="默认导入的写法" tabindex="-1"><a class="header-anchor" href="#默认导入的写法" aria-hidden="true">#</a> 默认导入的写法</h4><p>导入有两种基本格式，即单行导入和多行导入，导入代码效果是一致的。</p><ul><li>单行导入</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>\n</code></pre></div><ul><li>多行导入</li></ul><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>\n	<span class="token string">&quot;fmt&quot;</span>\n	<span class="token string">&quot;time&quot;</span>\n<span class="token punctuation">)</span>\n</code></pre></div><h4 id="导入包后自定义引用的包名" tabindex="-1"><a class="header-anchor" href="#导入包后自定义引用的包名" aria-hidden="true">#</a> 导入包后自定义引用的包名</h4><p>文件层级,使用cmd命令<code>tree /f</code>查看目录层级：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>people\n │  go.mod\n │  main.go\n ├─man\n │    man.go\n └─woman\n      woman.go\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="tip-block details"><summary>源代码</summary><p>main.go</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main\n\n<span class="token keyword">import</span> <span class="token punctuation">(</span>\n	logger <span class="token string">&quot;fmt&quot;</span> <span class="token comment">//增加别名</span>\n	<span class="token string">&quot;people/man&quot;</span>\n	<span class="token string">&quot;people/woman&quot;</span>\n<span class="token punctuation">)</span>\n\n<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n	logger<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;index main&quot;</span><span class="token punctuation">)</span>\n	man<span class="token punctuation">.</span><span class="token function">Say</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n	woman<span class="token punctuation">.</span><span class="token function">Say</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>people/man/man.go</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> man\n\n<span class="token keyword">import</span> <span class="token punctuation">(</span>\n	<span class="token string">&quot;fmt&quot;</span>\n<span class="token punctuation">)</span>\n\n<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;男人出生了&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token function">Say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;我是男人&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>people/woman/woman.go</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> woman\n\n<span class="token keyword">import</span> <span class="token punctuation">(</span>\n	<span class="token punctuation">.</span> <span class="token string">&quot;fmt&quot;</span>        <span class="token comment">//（.）开始的包,使用时候,可以省略前缀</span>\n	<span class="token boolean">_</span> <span class="token string">&quot;people/man&quot;</span> <span class="token comment">//匿名导入包（_）前缀；只执行man包中的init,不能调用其他方法</span>\n<span class="token punctuation">)</span>\n\n<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n	<span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;女人出生了&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token function">Say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n	<span class="token comment">// Say()</span>\n	<span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;我是女人&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>go run main.go</code>输出:</p><div class="language-console" data-ext="console"><pre class="language-console"><code>男人出生了\n女人出生了\nindex main\n我是男人\n我是女人\n</code></pre></div></details><h1 id="学习资料" tabindex="-1"><a class="header-anchor" href="#学习资料" aria-hidden="true">#</a> 学习资料</h1>', 12);
const _hoisted_45 = {
  href: "http://xueyuan.coder55.com/read/go-senior-learn/go_intro_start",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_46 = {
  href: "https://www.topgoer.cn/docs/golang/",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createTextVNode("推荐"),
      createBaseVNode("a", _hoisted_4, [
        createTextVNode("Go官网"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("，也可以在"),
      createBaseVNode("a", _hoisted_5, [
        createTextVNode("Go中文网"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("找到适合你系统的版本下载")
    ]),
    _hoisted_6,
    createBaseVNode("ul", null, [
      _hoisted_9,
      _hoisted_10,
      _hoisted_11,
      _hoisted_12,
      _hoisted_13,
      _hoisted_14,
      _hoisted_15,
      createBaseVNode("li", null, [
        createTextVNode("robots.txt — 文件，使用robots.txt阻止对网址的访问，"),
        createBaseVNode("a", _hoisted_16, [
          createTextVNode("详情查看"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      _hoisted_17
    ]),
    _hoisted_18,
    createBaseVNode("p", null, [
      createTextVNode("参考七牛云的说明，是最简单的："),
      createBaseVNode("a", _hoisted_19, [
        createTextVNode("七牛云 - Goproxy.cn"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" 只需要在命令行输入：")
    ]),
    _hoisted_20,
    createBaseVNode("blockquote", null, [
      createBaseVNode("p", null, [
        createBaseVNode("a", _hoisted_31, [
          createTextVNode("Go语言基础教程"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createBaseVNode("a", _hoisted_32, [
          createTextVNode("Go语言中文教程"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    _hoisted_33,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_45, [
          createTextVNode("Go 语言教程"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_46, [
          createTextVNode("o语言中文文档"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ])
  ]);
}
const goBasic_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "go-basic.html.vue"]]);
export {
  goBasic_html as default
};
