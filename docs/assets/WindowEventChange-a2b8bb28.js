import { o as openBlock, a as createElementBlock, e as createTextVNode, k as withDirectives, H as vModelCheckbox, b as createBaseVNode } from "./app-3aff2739.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _sfc_main = {
  name: "WindowEventState",
  data() {
    return {
      listened: false
    };
  },
  methods: {
    changeHandler(e) {
      if (this.listened) {
        var confirmationMessage = "要记得保存！你确定要离开我吗？";
        (e || window.event).returnValue = confirmationMessage;
        return confirmationMessage;
      }
    }
  },
  mounted() {
    window.addEventListener("beforeunload", this.changeHandler);
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
const WindowEventChange = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "WindowEventChange.vue"]]);
export {
  WindowEventChange as default
};
