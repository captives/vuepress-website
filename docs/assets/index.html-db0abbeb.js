import { o as openBlock, a as createElementBlock, i as createCommentVNode, b as createBaseVNode } from "./app-c3a13116.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "注释： 全局组件",
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, [
    createCommentVNode(" <h2>{{title}}</h2> "),
    createCommentVNode(" <NpmBadge></NpmBadge> "),
    _hoisted_1,
    createCommentVNode(" <VueSite>{{title}}</VueSite> ")
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
