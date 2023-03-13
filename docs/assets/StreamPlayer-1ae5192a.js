import { q as defineComponent, A as toRefs, o as openBlock, a as createElementBlock, b as createBaseVNode, C as mergeProps, u as unref } from "./app-46e25049.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _hoisted_1 = ["autoplay", "muted", ".srcObject"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StreamPlayer",
  props: {
    stream: { default: void 0 },
    autoplay: { type: Boolean, default: false },
    muted: { type: Boolean, default: false }
  },
  emits: ["change"],
  setup(__props, { emit }) {
    const props = __props;
    const { stream, autoplay } = toRefs(props);
    const loadedMetaDataHandler = () => {
      var _a, _b;
      console.log("AudioTracks", (_a = stream.value) == null ? void 0 : _a.getAudioTracks());
      console.log("VideoTracks", (_b = stream.value) == null ? void 0 : _b.getVideoTracks());
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("video", mergeProps({
          class: "video-item",
          autoplay: unref(autoplay),
          muted: __props.muted,
          controls: ""
        }, _ctx.$attrs, {
          ".srcObject": unref(stream),
          onLoadedmetadata: loadedMetaDataHandler
        }), null, 16, _hoisted_1)
      ]);
    };
  }
});
const StreamPlayer_vue_vue_type_style_index_0_scoped_35e5e0d1_lang = "";
const StreamPlayer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-35e5e0d1"], ["__file", "StreamPlayer.vue"]]);
export {
  StreamPlayer as S
};
