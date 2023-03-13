import { q as defineComponent, x as ref, r as resolveComponent, o as openBlock, a as createElementBlock, i as createCommentVNode, f as createVNode, g as withCtx, e as createTextVNode, F as Fragment } from "./app-46e25049.js";
import WebRTC from "./WebRTC-f4f73f77.js";
import { S as StreamPlayer } from "./StreamPlayer-1ae5192a.js";
import { S as StreamTracks } from "./StreamTracks-53cd32a8.js";
import StreamRecorder from "./StreamRecorder-179080fb.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "13UserMediaRecorder",
  setup(__props) {
    const webrtc = ref();
    const webrtcCompletd = (list, data) => {
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
      const _component_el_divider = resolveComponent("el-divider");
      const _component_el_col = resolveComponent("el-col");
      const _component_el_row = resolveComponent("el-row");
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          createCommentVNode(" 用户设备流录制 "),
          createVNode(
            WebRTC,
            {
              ref_key: "webrtc",
              ref: webrtc,
              title: "用户设备流录制",
              onCompleted: webrtcCompletd
            },
            {
              video: withCtx(({ stream }) => [
                createVNode(
                  _component_el_row,
                  { gutter: 50 },
                  {
                    default: withCtx(() => [
                      createVNode(
                        _component_el_col,
                        {
                          class: "center",
                          xs: 24,
                          sm: 24,
                          md: 12
                        },
                        {
                          default: withCtx(() => [
                            createVNode(_component_el_divider, { "content-position": "left" }, {
                              default: withCtx(() => [
                                createTextVNode("User media recorder")
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            createVNode(StreamPlayer, {
                              stream,
                              muted: true,
                              autoplay: true
                            }, null, 8, ["stream"]),
                            createVNode(StreamRecorder, { stream }, null, 8, ["stream"])
                          ]),
                          _: 2
                          /* DYNAMIC */
                        },
                        1024
                        /* DYNAMIC_SLOTS */
                      ),
                      createVNode(
                        _component_el_col,
                        {
                          class: "center",
                          xs: 24,
                          sm: 24,
                          md: 12
                        },
                        {
                          default: withCtx(() => [
                            createVNode(_component_el_divider, { "content-position": "left" }, {
                              default: withCtx(() => [
                                createTextVNode("Tracks")
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            createVNode(StreamTracks, { value: stream }, null, 8, ["value"])
                          ]),
                          _: 2
                          /* DYNAMIC */
                        },
                        1024
                        /* DYNAMIC_SLOTS */
                      )
                    ]),
                    _: 2
                    /* DYNAMIC */
                  },
                  1024
                  /* DYNAMIC_SLOTS */
                )
              ]),
              _: 1
              /* STABLE */
            },
            512
            /* NEED_PATCH */
          )
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      );
    };
  }
});
const _13UserMediaRecorder = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "13UserMediaRecorder.vue"]]);
export {
  _13UserMediaRecorder as default
};
