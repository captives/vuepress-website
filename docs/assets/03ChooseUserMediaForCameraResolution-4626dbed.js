import { q as defineComponent, x as ref, r as resolveComponent, o as openBlock, n as createBlock, g as withCtx, f as createVNode, e as createTextVNode, b as createBaseVNode, a as createElementBlock, F as Fragment, h as renderList } from "./app-46e25049.js";
import WebRTC from "./WebRTC-f4f73f77.js";
import { S as StreamPlayer } from "./StreamPlayer-1ae5192a.js";
import { S as StreamTracks } from "./StreamTracks-53cd32a8.js";
import { M as MediaError } from "./MediaError-043920b9.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
import "./webrtc-faffc1a5.js";
const _hoisted_1 = { class: "h-justify__align" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "03ChooseUserMediaForCameraResolution",
  setup(__props) {
    const webrtc = ref();
    const videoInput = ref();
    const localStream = ref();
    const widthValue = ref(0);
    const lockSize = ref(false);
    const lockRatio = ref(false);
    const constraints = [
      { label: "QVGA", width: "320", height: "240" },
      { label: "VGA", width: "640", height: "480" },
      { label: "HD", width: "1280", height: "720" },
      { label: "FHD", width: "1920", height: "1080" },
      { label: "2K", width: "1920", height: "1080" },
      { label: "电视 4K", width: "3840", height: "2160" },
      { label: "电影 4K ", width: "4096", height: "2160" },
      { label: "8K ", width: "7680", height: "4320" }
    ];
    const selectIndex = ref(-1);
    const webrtcCompletd = (list, data) => {
      console.log("stream player completed", list);
      selectIndex.value = 0;
      changeHandler();
    };
    const streamHanlder = (stream) => {
      localStream.value = stream;
      const tracks = stream.getVideoTracks();
      tracks.forEach((track) => {
        const constraints2 = track.getConstraints();
        console.log("Result constraints: " + JSON.stringify(constraints2));
        if (constraints2 && constraints2.width) {
          widthValue.value = typeof constraints2.width === "number" ? constraints2.width : constraints2.width.exact || constraints2.width.min || 0;
        }
      });
    };
    const deviceChangeHandler = () => {
      var _a, _b;
      const constraints2 = {
        audio: false,
        video: videoInput.value ? {
          deviceId: { exact: videoInput.value },
          width: { exact: 720 },
          height: { exact: 405 }
        } : false
      };
      (_a = webrtc.value) == null ? void 0 : _a.close();
      (_b = webrtc.value) == null ? void 0 : _b.getUserMedia(constraints2);
    };
    const changeHandler = () => {
      var _a, _b;
      (_a = localStream.value) == null ? void 0 : _a.getTracks().forEach((track) => {
        track.stop();
      });
      const item = constraints[selectIndex.value];
      (_b = webrtc.value) == null ? void 0 : _b.getUserMedia({
        audio: false,
        video: {
          deviceId: { exact: videoInput.value },
          width: { exact: item.width },
          height: { exact: item.height }
        }
      });
      console.log("选择", item.label, "width: %s, height: %s", item.width, item.height);
    };
    return (_ctx, _cache) => {
      const _component_el_divider = resolveComponent("el-divider");
      const _component_el_col = resolveComponent("el-col");
      const _component_el_slider = resolveComponent("el-slider");
      const _component_el_checkbox = resolveComponent("el-checkbox");
      const _component_el_link = resolveComponent("el-link");
      const _component_el_row = resolveComponent("el-row");
      const _component_el_option = resolveComponent("el-option");
      const _component_el_select = resolveComponent("el-select");
      const _component_el_space = resolveComponent("el-space");
      return openBlock(), createBlock(
        WebRTC,
        {
          ref_key: "webrtc",
          ref: webrtc,
          title: "使用摄像头约束",
          onCompleted: webrtcCompletd,
          onStream: streamHanlder
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
                            createTextVNode("User media")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(StreamPlayer, {
                          stream,
                          autoplay: true
                        }, null, 8, ["stream"])
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
                            createTextVNode("Track")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(StreamTracks, {
                          value: stream,
                          class: "mt-20"
                        }, null, 8, ["value"]),
                        createVNode(_component_el_divider, {
                          "content-position": "left",
                          class: "mt-20"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Setup")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_el_slider, {
                          modelValue: widthValue.value,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => widthValue.value = $event),
                          min: 0,
                          max: 7680,
                          style: { "width": "220px" }
                        }, null, 8, ["modelValue"]),
                        createBaseVNode("div", _hoisted_1, [
                          createVNode(_component_el_checkbox, {
                            modelValue: lockSize.value,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => lockSize.value = $event)
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Lock video size")
                            ]),
                            _: 1
                            /* STABLE */
                          }, 8, ["modelValue"]),
                          createVNode(_component_el_checkbox, {
                            modelValue: lockRatio.value,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => lockRatio.value = $event)
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Lock aspect ratio")
                            ]),
                            _: 1
                            /* STABLE */
                          }, 8, ["modelValue"]),
                          createVNode(_component_el_link, {
                            href: "https://webrtc.github.io/samples/src/content/getusermedia/resolution/",
                            target: "_blank"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("查看更多")
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ])
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
          error: withCtx(({ data }) => [
            createVNode(MediaError, {
              error: data.error
            }, null, 8, ["error"])
          ]),
          list: withCtx(({ data }) => [
            createVNode(
              _component_el_space,
              {
                size: 50,
                class: "mb-20"
              },
              {
                default: withCtx(() => [
                  createVNode(_component_el_select, {
                    modelValue: videoInput.value,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => videoInput.value = $event),
                    placeholder: "请选择摄像头",
                    onChange: deviceChangeHandler
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(
                        Fragment,
                        null,
                        renderList(data.videoInput, (item) => {
                          return openBlock(), createBlock(_component_el_option, {
                            key: item.deviceId,
                            label: item.label,
                            value: item.deviceId
                          }, null, 8, ["label", "value"]);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["modelValue"]),
                  createVNode(_component_el_select, {
                    modelValue: selectIndex.value,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => selectIndex.value = $event),
                    placeholder: "请选择分辨率",
                    onChange: changeHandler
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createElementBlock(
                        Fragment,
                        null,
                        renderList(constraints, (item, index) => {
                          return createVNode(_component_el_option, {
                            key: index,
                            label: item.label,
                            value: index
                          }, null, 8, ["label", "value"]);
                        }),
                        64
                        /* STABLE_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
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
      );
    };
  }
});
const _03ChooseUserMediaForCameraResolution_vue_vue_type_style_index_0_scoped_b922c070_lang = "";
const _03ChooseUserMediaForCameraResolution = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b922c070"], ["__file", "03ChooseUserMediaForCameraResolution.vue"]]);
export {
  _03ChooseUserMediaForCameraResolution as default
};
