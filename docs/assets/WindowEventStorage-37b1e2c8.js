import { o as openBlock, a as createElementBlock, e as createTextVNode, k as withDirectives, H as vModelCheckbox, b as createBaseVNode, F as Fragment, h as renderList, t as toDisplayString } from "./app-7cdc0156.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _sfc_main = {
  name: "WindowStorage",
  data() {
    return {
      listened: false,
      list: []
    };
  },
  mounted() {
    window.addEventListener("storage", (event) => {
      if (this.listened) {
        this.list.push(event.key + " 键已经从 " + event.oldValue + " 改变为 " + event.newValue + ".");
        console.log("其它页面更新存储", event.key + " 键已经从 " + event.oldValue + " 改变为 " + event.newValue + ".");
      }
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
    ]),
    createBaseVNode("ul", null, [
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
  ]);
}
const WindowEventStorage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "WindowEventStorage.vue"]]);
export {
  WindowEventStorage as default
};
