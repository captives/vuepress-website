import { q as defineComponent, x as ref, r as resolveComponent, o as openBlock, a as createElementBlock, f as createVNode, g as withCtx, e as createTextVNode, t as toDisplayString, n as createBlock, F as Fragment } from "./app-46e25049.js";
import { S as StreamPlayer } from "./StreamPlayer-1ae5192a.js";
import { S as StreamTracks } from "./StreamTracks-53cd32a8.js";
import StreamRecorder from "./StreamRecorder-179080fb.js";
import { M as MediaError } from "./MediaError-043920b9.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
import "./webrtc-faffc1a5.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "10MediaStreamMixer",
  setup(__props) {
    const error = ref();
    const url = ref("");
    const mixing = ref(false);
    const videoStream = ref();
    const audioStream = ref();
    const remixStream = ref();
    const createMediaStream = (mediaElement) => {
      let stream = null;
      const fps = 0;
      (mediaElement == null ? void 0 : mediaElement.captureStream) || (mediaElement == null ? void 0 : mediaElement.mozCaptureStream) || void 0;
      if (mediaElement) {
        if (mediaElement.captureStream) {
          stream = mediaElement.captureStream(fps);
        } else if (mediaElement.mozCaptureStream) {
          stream = mediaElement.mozCaptureStream(fps);
        } else {
          console.error("Stream capture is not supported");
          stream = null;
        }
      }
      console.log("Capture stream", stream);
      return stream;
    };
    const startMixing = () => {
      var _a, _b, _c;
      remixStream.value = new MediaStream();
      (_a = videoStream.value) == null ? void 0 : _a.getVideoTracks().forEach((track) => {
        var _a2;
        (_a2 = remixStream.value) == null ? void 0 : _a2.addTrack(track.clone());
      });
      if (mixing.value) {
        (_b = audioStream.value) == null ? void 0 : _b.getAudioTracks().forEach((track) => {
          var _a2;
          (_a2 = remixStream.value) == null ? void 0 : _a2.addTrack(track.clone());
        });
      } else {
        (_c = videoStream.value) == null ? void 0 : _c.getAudioTracks().forEach((track) => {
          var _a2;
          (_a2 = remixStream.value) == null ? void 0 : _a2.addTrack(track.clone());
        });
      }
    };
    const stopMixing = () => {
      var _a;
      (_a = remixStream.value) == null ? void 0 : _a.getTracks().forEach((track) => {
        track.stop();
      });
      remixStream.value = void 0;
    };
    const videoCanplayHandler = (event, mediaElement) => {
      videoStream.value = createMediaStream(mediaElement) || void 0;
    };
    const audioCanplayHandler = (event, mediaElement) => {
      audioStream.value = createMediaStream(mediaElement) || void 0;
    };
    return (_ctx, _cache) => {
      const _component_URLInput = resolveComponent("URLInput");
      const _component_el_divider = resolveComponent("el-divider");
      const _component_VideoPlayer = resolveComponent("VideoPlayer");
      const _component_el_col = resolveComponent("el-col");
      const _component_el_row = resolveComponent("el-row");
      const _component_el_checkbox = resolveComponent("el-checkbox");
      const _component_el_button = resolveComponent("el-button");
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          createVNode(_component_URLInput, {
            list: _ctx.$videoList,
            modelValue: url.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => url.value = $event)
          }, null, 8, ["list", "modelValue"]),
          createVNode(_component_el_row, { gutter: 50 }, {
            default: withCtx(() => [
              createVNode(_component_el_col, {
                class: "center",
                xs: 24,
                sm: 24,
                md: 12
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_divider, { "content-position": "left" }, {
                    default: withCtx(() => [
                      createTextVNode("Video")
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createVNode(_component_VideoPlayer, {
                    src: _ctx.$oss(url.value),
                    class: "mt-20",
                    autoplay: "",
                    onCanplay: videoCanplayHandler
                  }, null, 8, ["src"])
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_col, {
                class: "center",
                xs: 24,
                sm: 24,
                md: 12
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_divider, { "content-position": "left" }, {
                    default: withCtx(() => [
                      createTextVNode("Tracks")
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createVNode(StreamTracks, { value: videoStream.value }, null, 8, ["value"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_el_row, { gutter: 50 }, {
            default: withCtx(() => [
              createVNode(_component_el_col, {
                class: "center",
                xs: 24,
                sm: 24,
                md: 12
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_divider, { "content-position": "left" }, {
                    default: withCtx(() => [
                      createTextVNode("Audio")
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createVNode(_component_VideoPlayer, {
                    src: _ctx.$oss("/assets/medias/jinli.mp3"),
                    autoplay: "",
                    controls: "",
                    onCanplay: audioCanplayHandler
                  }, null, 8, ["src"]),
                  createVNode(_component_el_row, { class: "mt-20" }, {
                    default: withCtx(() => [
                      createVNode(_component_el_checkbox, {
                        modelValue: mixing.value,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => mixing.value = $event),
                        class: "pr-20"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(
                            toDisplayString(mixing.value ? "替换声道" : "原声道"),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["modelValue"]),
                      !remixStream.value ? (openBlock(), createBlock(_component_el_button, {
                        key: 0,
                        type: "success",
                        onClick: startMixing
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 开始混入 ")
                        ]),
                        _: 1
                        /* STABLE */
                      })) : (openBlock(), createBlock(_component_el_button, {
                        key: 1,
                        type: "danger",
                        onClick: stopMixing
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 停止混入 ")
                        ]),
                        _: 1
                        /* STABLE */
                      }))
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_col, {
                class: "center",
                xs: 24,
                sm: 24,
                md: 12
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_divider, { "content-position": "left" }, {
                    default: withCtx(() => [
                      createTextVNode("Tracks")
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createVNode(StreamTracks, { value: audioStream.value }, null, 8, ["value"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_el_row, { gutter: 50 }, {
            default: withCtx(() => [
              createVNode(_component_el_col, {
                class: "center",
                xs: 24,
                sm: 24,
                md: 12
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_divider, { "content-position": "left" }, {
                    default: withCtx(() => [
                      createTextVNode("Remix stream & Recorder")
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createVNode(StreamPlayer, {
                    stream: remixStream.value,
                    muted: true,
                    autoplay: true
                  }, null, 8, ["stream"]),
                  createVNode(StreamRecorder, { stream: remixStream.value }, null, 8, ["stream"])
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_col, {
                class: "center",
                xs: 24,
                sm: 24,
                md: 12
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_divider, { "content-position": "left" }, {
                    default: withCtx(() => [
                      createTextVNode("Tracks")
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createVNode(StreamTracks, { value: remixStream.value }, null, 8, ["value"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(MediaError, { error: error.value }, null, 8, ["error"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
const _10MediaStreamMixer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "10MediaStreamMixer.vue"]]);
export {
  _10MediaStreamMixer as default
};
