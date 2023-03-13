import { q as defineComponent, x as ref, o as openBlock, n as createBlock, g as withCtx, f as createVNode } from "./app-46e25049.js";
import WebRTC from "./WebRTC-f4f73f77.js";
import { S as StreamPlayer } from "./StreamPlayer-1ae5192a.js";
import { S as StreamTracks } from "./StreamTracks-53cd32a8.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "02VideoStreamFromUserMedia",
  setup(__props) {
    const webrtc = ref();
    const webrtcCompletd = (list) => {
      var _a;
      console.log("stream player completed", list);
      (_a = webrtc.value) == null ? void 0 : _a.getUserMedia({
        audio: true,
        video: {
          width: { exact: 720 },
          height: { exact: 405 }
        }
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(
        WebRTC,
        {
          ref_key: "webrtc",
          ref: webrtc,
          title: "视频流来自用户设备",
          onCompleted: webrtcCompletd
        },
        {
          video: withCtx(({ stream }) => [
            createVNode(StreamPlayer, {
              stream,
              autoplay: true
            }, null, 8, ["stream"]),
            createVNode(StreamTracks, {
              value: stream,
              class: "mt-20"
            }, null, 8, ["value"])
          ]),
          _: 1
          /* STABLE */
        },
        512
        /* NEED_PATCH */
      );
    };
  }
});
const _02VideoStreamFromUserMedia_vue_vue_type_style_index_0_scoped_b6ce7dda_lang = "";
const _02VideoStreamFromUserMedia = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b6ce7dda"], ["__file", "02VideoStreamFromUserMedia.vue"]]);
export {
  _02VideoStreamFromUserMedia as default
};
