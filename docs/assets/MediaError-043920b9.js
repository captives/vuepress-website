import { q as defineComponent, A as toRefs, c as computed, o as openBlock, a as createElementBlock, b as createBaseVNode, t as toDisplayString, u as unref } from "./app-46e25049.js";
import { E as ErrorMessage } from "./webrtc-faffc1a5.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MediaError",
  props: {
    error: { default: void 0 }
  },
  emits: ["change"],
  setup(__props, { emit }) {
    const props = __props;
    const { error } = toRefs(props);
    const message = computed(() => {
      var _a, _b;
      return ErrorMessage[((_a = error.value) == null ? void 0 : _a.name) || ((_b = error.value) == null ? void 0 : _b.type)];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode(
          "b",
          null,
          toDisplayString(unref(message).type),
          1
          /* TEXT */
        ),
        createBaseVNode(
          "p",
          null,
          toDisplayString(unref(message).desc),
          1
          /* TEXT */
        )
      ]);
    };
  }
});
const MediaError = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "MediaError.vue"]]);
export {
  MediaError as M
};
