import { o as openBlock, a as createElementBlock, e as createTextVNode, k as withDirectives, H as vModelCheckbox, b as createBaseVNode } from "./app-e6eab0de.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _sfc_main = {
  name: "WindowBeforePrint",
  data() {
    return {
      listened: false
    };
  },
  mounted() {
    window.addEventListener("beforeprint", (event) => {
      if (this.listened) {
        document.title = "打印开始，准备点什么";
      }
      console.log("beforeprint", event);
    });
    window.addEventListener("afterprint", (event) => {
      if (this.listened) {
        document.title = "打印完成，做点什么";
      }
      console.log("打印完成", event);
    });
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createTextVNode(" 监听 "),
    withDirectives(createBaseVNode(
      "input",
      {
        type: "checkbox",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.listened = $event)
      },
      null,
      512
      /* NEED_PATCH */
    ), [
      [vModelCheckbox, $data.listened]
    ])
  ]);
}
const WindowBeforePrint = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "WindowBeforePrint.vue"]]);
export {
  WindowBeforePrint as default
};
