import { o as openBlock, a as createElementBlock, b as createBaseVNode, k as withDirectives, v as vModelText, t as toDisplayString, F as Fragment, h as renderList, e as createTextVNode, j as createStaticVNode } from "./app-3aff2739.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _sfc_main = {
  el: "#example",
  data() {
    return {
      textInput: "",
      textOutput: "",
      list: []
    };
  },
  methods: {
    urlEncodeHandler() {
      this.value = encodeURIComponent(this.textInput);
      this.list = [];
    },
    urlDecodeHandler() {
      this.textOutput = decodeURIComponent(this.textInput);
      this.list = this.textOutput.match(/(\w+):\/\/([^/:]+):(\d*)([^?]*)([^&].*)(#[^#]*)/);
    },
    clean() {
      this.textInput = this.textOutput = null;
    }
  }
};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "url-编解码",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#url-编解码",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" url 编解码")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = { id: "example" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "输入 ",
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "输出",
  -1
  /* HOISTED */
);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "参数解析",
  -1
  /* HOISTED */
);
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<details class="tip-block details"><summary>正则说明</summary><ul><li>实例中的数组包含 7 个元素，索引 0 对应的是整个字符串，索引 1 对应第一个匹配符（括号内），以此类推。</li><li>第一个括号子表达式捕获 Web 地址的协议部分。该子表达式匹配在冒号和两个正斜杠前面的任何单词。</li><li>第二个括号子表达式捕获地址的域地址部分。子表达式匹配非 : 和 / 之后的一个或多个字符。</li><li>第三个括号子表达式捕获端口号（如果指定了的话）。该子表达式匹配冒号后面的零个或多个数字。只能重复一次该子表达式。</li><li>第四个括号子表达式捕获 Web 地址指定的路径和 / 或页信息。该子表达式能匹配不包括 # 或空格字符的任何字符序列。</li><li>第五个括号表达式捕获query参数 第六个括号表达式捕获hash参数</li></ul></details><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>textInput<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">decodeURIComponent</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>textInput<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div>', 2);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("div", _hoisted_2, [
      _hoisted_3,
      withDirectives(createBaseVNode(
        "textarea",
        {
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.textInput = $event),
          style: { "width": "80%", "height": "100px" }
        },
        " ",
        512
        /* NEED_PATCH */
      ), [
        [vModelText, $data.textInput]
      ]),
      _hoisted_4,
      createBaseVNode("button", {
        onClick: _cache[1] || (_cache[1] = (...args) => $options.urlEncodeHandler && $options.urlEncodeHandler(...args))
      }, "URL编码"),
      createBaseVNode("button", {
        onClick: _cache[2] || (_cache[2] = (...args) => $options.urlDecodeHandler && $options.urlDecodeHandler(...args))
      }, "URL解码"),
      createBaseVNode("button", {
        onClick: _cache[3] || (_cache[3] = (...args) => $options.clean && $options.clean(...args))
      }, "清空"),
      _hoisted_5,
      createBaseVNode("div", null, [
        _hoisted_6,
        createBaseVNode(
          "p",
          null,
          toDisplayString($data.textOutput),
          1
          /* TEXT */
        )
      ]),
      createBaseVNode("div", null, [
        _hoisted_7,
        createBaseVNode("ol", null, [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($data.list, (item, index) => {
              return openBlock(), createElementBlock(
                "li",
                { key: index },
                toDisplayString(item),
                1
                /* TEXT */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ])
    ]),
    _hoisted_8
  ]);
}
const urlDecode_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "url-decode.html.vue"]]);
export {
  urlDecode_html as default
};
