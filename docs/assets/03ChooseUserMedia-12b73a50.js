import { q as defineComponent, x as ref, r as resolveComponent, o as openBlock, n as createBlock, g as withCtx, f as createVNode, e as createTextVNode, a as createElementBlock, F as Fragment, h as renderList } from "./app-46e25049.js";
import WebRTC from "./WebRTC-f4f73f77.js";
import { S as StreamPlayer } from "./StreamPlayer-1ae5192a.js";
import { S as StreamTracks } from "./StreamTracks-53cd32a8.js";
import { M as MediaError } from "./MediaError-043920b9.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
import "./webrtc-faffc1a5.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "03ChooseUserMedia",
  setup(__props) {
    const webrtc = ref();
    const audioInput = ref();
    const audioOutput = ref();
    const videoInput = ref();
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
    const deviceChangeHandler = () => {
      var _a, _b;
      const constraints = {
        //mode A
        // audio: { deviceId: audioInput.value ? { exact: audioInput.value } : undefined },
        // video: { deviceId: videoInput.value ? { exact: videoInput.value } : undefined }
        //mode B
        audio: audioInput.value ? { deviceId: { exact: audioInput.value } } : false,
        video: videoInput.value ? {
          deviceId: { exact: videoInput.value },
          width: { exact: 720 },
          height: { exact: 405 }
        } : false
      };
      (_a = webrtc.value) == null ? void 0 : _a.close();
      (_b = webrtc.value) == null ? void 0 : _b.getUserMedia(constraints);
    };
    return (_ctx, _cache) => {
      const _component_el_divider = resolveComponent("el-divider");
      const _component_el_col = resolveComponent("el-col");
      const _component_el_row = resolveComponent("el-row");
      const _component_el_option = resolveComponent("el-option");
      const _component_el_select = resolveComponent("el-select");
      const _component_el_space = resolveComponent("el-space");
      return openBlock(), createBlock(
        WebRTC,
        {
          ref_key: "webrtc",
          ref: webrtc,
          title: "动态选择用户设备",
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
                        }, null, 8, ["value"])
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
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => videoInput.value = $event),
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
                    modelValue: audioInput.value,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => audioInput.value = $event),
                    placeholder: "请选择音频输入",
                    onChange: deviceChangeHandler
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(
                        Fragment,
                        null,
                        renderList(data.audioInput, (item) => {
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
                    modelValue: audioOutput.value,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => audioOutput.value = $event),
                    placeholder: "请选择音频输出",
                    onChange: deviceChangeHandler
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(
                        Fragment,
                        null,
                        renderList(data.audioOutput, (item) => {
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
                  }, 1032, ["modelValue"])
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
const _03ChooseUserMedia_vue_vue_type_style_index_0_scoped_acfb39d5_lang = "";
const _03ChooseUserMedia = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-acfb39d5"], ["__file", "03ChooseUserMedia.vue"]]);
export {
  _03ChooseUserMedia as default
};
