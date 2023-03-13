import { q as defineComponent, x as ref, r as resolveComponent, o as openBlock, a as createElementBlock, f as createVNode, g as withCtx, e as createTextVNode, n as createBlock, i as createCommentVNode, F as Fragment, b as createBaseVNode } from "./app-46e25049.js";
import { S as StreamTracks } from "./StreamTracks-53cd32a8.js";
import { M as MediaError } from "./MediaError-043920b9.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
import "./webrtc-faffc1a5.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "a",
  {
    href: "https://developer.mozilla.org/zh-CN/docs/Web/API/AudioContext",
    target: "_blank"
  },
  "Audio Workers",
  -1
  /* HOISTED */
);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "09AudioStreamVolume",
  setup(__props) {
    const error = ref();
    const url = ref("");
    const videoStream = ref();
    const soundMeter = ref();
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
      const _component_el_divider = resolveComponent("el-divider");
      const _component_VideoPlayer = resolveComponent("VideoPlayer");
      const _component_el_col = resolveComponent("el-col");
      const _component_el_progress = resolveComponent("el-progress");
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_form = resolveComponent("el-form");
      const _component_el_row = resolveComponent("el-row");
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
                      createTextVNode("Audio Stream")
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
                      createTextVNode("Audio Stream Volume")
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createTextVNode(" AudioContext.createScriptProcessor() 已经弃用，此示例搁置。 "),
                  _hoisted_1,
                  createTextVNode(" 后续研究 "),
                  _hoisted_2,
                  soundMeter.value ? (openBlock(), createBlock(_component_el_form, {
                    key: 0,
                    "label-width": "80px"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_form_item, { label: "Instant:" }, {
                        default: withCtx(() => [
                          createVNode(_component_el_progress, {
                            "stroke-width": 20,
                            "text-inside": true,
                            percentage: Math.floor(soundMeter.value.instant * 500)
                          }, null, 8, ["percentage"])
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      createVNode(_component_el_form_item, { label: "Slow:" }, {
                        default: withCtx(() => [
                          createVNode(_component_el_progress, {
                            "stroke-width": 20,
                            "text-inside": true,
                            percentage: Math.floor(soundMeter.value.slow * 500),
                            color: "#67C23A"
                          }, null, 8, ["percentage"])
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      createVNode(_component_el_form_item, { label: "Clip:" }, {
                        default: withCtx(() => [
                          createVNode(_component_el_progress, {
                            "stroke-width": 20,
                            "text-inside": true,
                            percentage: Math.floor(soundMeter.value.clip * 500),
                            color: "#F56C6C"
                          }, null, 8, ["percentage"])
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  })) : createCommentVNode("v-if", true)
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
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
const _09AudioStreamVolume = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "09AudioStreamVolume.vue"]]);
export {
  _09AudioStreamVolume as default
};
