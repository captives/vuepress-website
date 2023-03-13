import { q as defineComponent, A as toRefs, x as ref, o as openBlock, a as createElementBlock, u as unref, C as mergeProps, z as renderSlot, F as Fragment } from "./app-46e25049.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _hoisted_1 = ["src"];
const _hoisted_2 = ["src"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VideoPlayer",
  props: {
    src: { default: void 0 }
  },
  emits: ["canplay"],
  setup(__props, { emit }) {
    const props = __props;
    const { src } = toRefs(props);
    const audioElement = ref();
    const videoElement = ref();
    const canplayHandler = (event) => {
      var _a;
      console.log("video player", (_a = audioElement.value || videoElement.value) == null ? void 0 : _a.currentTime);
      emit("canplay", event, audioElement.value || videoElement.value);
    };
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          ((_a = unref(src)) == null ? void 0 : _a.endsWith(".mp3")) ? (openBlock(), createElementBlock("audio", mergeProps({ key: 0 }, _ctx.$attrs, {
            src: unref(src),
            ref_key: "audioElement",
            ref: audioElement,
            autoplay: "",
            onCanplay: canplayHandler
          }), "不支持Audio元素播放音频", 16, _hoisted_1)) : (openBlock(), createElementBlock("video", mergeProps({ key: 1 }, _ctx.$attrs, {
            controls: "",
            src: unref(src),
            class: "video-item",
            ref_key: "videoElement",
            ref: videoElement,
            onCanplay: canplayHandler
          }), " 不支持Video元素播放音频 ", 16, _hoisted_2)),
          renderSlot(_ctx.$slots, "default", {
            data: { mediaElement: audioElement.value || videoElement.value }
          }, void 0, true)
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
const VideoPlayer_vue_vue_type_style_index_0_scoped_c1522638_lang = "";
const VideoPlayer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c1522638"], ["__file", "VideoPlayer.vue"]]);
export {
  VideoPlayer as default
};
