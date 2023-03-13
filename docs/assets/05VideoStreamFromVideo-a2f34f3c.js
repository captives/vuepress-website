import { q as defineComponent, x as ref, r as resolveComponent, o as openBlock, a as createElementBlock, f as createVNode, F as Fragment } from "./app-46e25049.js";
import { S as StreamPlayer } from "./StreamPlayer-1ae5192a.js";
import { S as StreamTracks } from "./StreamTracks-53cd32a8.js";
import { M as MediaError } from "./MediaError-043920b9.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
import "./webrtc-faffc1a5.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "05VideoStreamFromVideo",
  setup(__props) {
    const error = ref();
    const url = ref("");
    const videoStream = ref();
    const videoCanplayHandler = (event, videoElement) => {
      const fps = 0;
      (videoElement == null ? void 0 : videoElement.captureStream) || (videoElement == null ? void 0 : videoElement.mozCaptureStream) || void 0;
      if (videoElement == null ? void 0 : videoElement.captureStream) {
        videoStream.value = videoElement == null ? void 0 : videoElement.captureStream(fps);
      } else if (videoElement == null ? void 0 : videoElement.mozCaptureStream) {
        videoStream.value = videoElement == null ? void 0 : videoElement.mozCaptureStream(fps);
      } else {
        console.error("Stream capture is not supported");
        videoStream.value = void 0;
      }
      console.log("Capture stream", videoStream.value);
    };
    return (_ctx, _cache) => {
      const _component_URLInput = resolveComponent("URLInput");
      const _component_VideoPlayer = resolveComponent("VideoPlayer");
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          createVNode(_component_URLInput, {
            list: _ctx.$videoList,
            modelValue: url.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => url.value = $event)
          }, null, 8, ["list", "modelValue"]),
          createVNode(_component_VideoPlayer, {
            src: _ctx.$oss(url.value),
            class: "mt-20",
            autoplay: "",
            onCanplay: videoCanplayHandler
          }, null, 8, ["src"]),
          createVNode(StreamPlayer, {
            stream: videoStream.value,
            class: "mt-20",
            autoplay: true
          }, null, 8, ["stream"]),
          createVNode(StreamTracks, {
            value: videoStream.value,
            class: "mt-20"
          }, null, 8, ["value"]),
          createVNode(MediaError, { error: error.value }, null, 8, ["error"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
const _05VideoStreamFromVideo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "05VideoStreamFromVideo.vue"]]);
export {
  _05VideoStreamFromVideo as default
};
