import { o as openBlock, a as createElementBlock, b as createBaseVNode, t as toDisplayString, B as renderSlot } from "./app-3aff2739.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _sfc_main = {
  __name: "VueSite",
  setup(__props) {
    const msg = "这是全局自定义组件" + new Date().toLocaleDateString();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("b", null, toDisplayString(msg)),
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
};
const VueSite = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "VueSite.vue"]]);
export {
  VueSite as default
};
