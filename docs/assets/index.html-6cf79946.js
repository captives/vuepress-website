import { o as openBlock, a as createElementBlock, i as createCommentVNode, b as createBaseVNode, e as createTextVNode } from "./app-9194e199.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "webrtc-媒体服务",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#webrtc-媒体服务",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" WebRTC 媒体服务")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "获取设备列表",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#获取设备列表",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 获取设备列表")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "使用以下代码获取设备列表",
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    createCommentVNode(` <ChooseUserMedia></ChooseUserMedia>

<script lang="ts" setup>
    import ChooseUserMedia from '@/views/webrtc/03ChooseUserMedia.vue';
<\/script> `)
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
