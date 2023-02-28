import { o as openBlock, a as createElementBlock, e as createTextVNode, k as withDirectives, H as vModelCheckbox, b as createBaseVNode } from "./app-e6eab0de.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _sfc_main = {
  name: "WindowVisibilityState",
  data() {
    return {
      listened: false
    };
  },
  methods: {
    changeHandler() {
      if (this.listened) {
        if (document.visibilityState == "hidden") {
          document.title = "选项卡被隐藏";
        } else {
          document.title = "选项卡被激活";
        }
      }
    }
  },
  mounted() {
    document.addEventListener("visibilitychange", this.changeHandler);
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
const WindowVisibilityState = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "WindowVisibilityState.vue"]]);
export {
  WindowVisibilityState as default
};
