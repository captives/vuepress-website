import { q as defineComponent, x as ref, r as resolveComponent, o as openBlock, a as createElementBlock, i as createCommentVNode, f as createVNode, g as withCtx, e as createTextVNode, b as createBaseVNode, F as Fragment, h as renderList } from "./app-46e25049.js";
import WebRTC from "./WebRTC-f4f73f77.js";
import { S as StreamPlayer } from "./StreamPlayer-1ae5192a.js";
import { S as StreamTracks } from "./StreamTracks-53cd32a8.js";
import { M as MediaError } from "./MediaError-043920b9.js";
import StreamRecorder from "./StreamRecorder-179080fb.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
import "./webrtc-faffc1a5.js";
const _hoisted_1 = { class: "mb-20" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "14DisplayMediaRecorder",
  setup(__props) {
    const webrtc = ref();
    const selectValue = ref();
    const options = [
      { label: "默认显示设备", value: "default" },
      { label: "共享浏览器选项卡", value: "browser" },
      { label: "共享App窗口", value: "window" },
      { label: "共享系统屏幕", value: "monitor" }
    ];
    const startHandler = () => {
      var _a;
      const options2 = { video: true, audio: true };
      if (selectValue.value !== "default" && !!selectValue.value) {
        options2.video = { displaySurface: selectValue.value };
      }
      (_a = webrtc.value) == null ? void 0 : _a.getDisplayMedia(options2);
    };
    const stopHandler = () => {
      var _a;
      (_a = webrtc.value) == null ? void 0 : _a.close();
    };
    return (_ctx, _cache) => {
      const _component_el_divider = resolveComponent("el-divider");
      const _component_el_col = resolveComponent("el-col");
      const _component_el_row = resolveComponent("el-row");
      const _component_el_option = resolveComponent("el-option");
      const _component_el_select = resolveComponent("el-select");
      const _component_el_button = resolveComponent("el-button");
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          createCommentVNode(" 显示设备录制流 "),
          createVNode(
            WebRTC,
            {
              ref_key: "webrtc",
              ref: webrtc,
              title: "显示设备录制流"
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
                                createTextVNode("Display media recorder")
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
              error: withCtx(({ data }) => [
                createVNode(MediaError, {
                  error: data.error
                }, null, 8, ["error"])
              ]),
              list: withCtx(({ support }) => [
                createBaseVNode("div", _hoisted_1, [
                  createVNode(_component_el_select, {
                    modelValue: selectValue.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectValue.value = $event),
                    placeholder: "请选择共享源",
                    disabled: !support.supDisplayMedia
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createElementBlock(
                        Fragment,
                        null,
                        renderList(options, (item) => {
                          return createVNode(_component_el_option, {
                            key: item.value,
                            label: item.label,
                            value: item.value
                          }, null, 8, ["label", "value"]);
                        }),
                        64
                        /* STABLE_FRAGMENT */
                      ))
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["modelValue", "disabled"]),
                  createVNode(_component_el_button, {
                    type: "primary",
                    class: "ml-20",
                    disabled: !support.supDisplayMedia,
                    onClick: startHandler
                  }, {
                    default: withCtx(() => [
                      createTextVNode("开始")
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["disabled"]),
                  createVNode(_component_el_button, {
                    type: "danger",
                    class: "ml-20",
                    disabled: !support.supDisplayMedia,
                    onClick: stopHandler
                  }, {
                    default: withCtx(() => [
                      createTextVNode("停止")
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["disabled"])
                ])
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
const _14DisplayMediaRecorder = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "14DisplayMediaRecorder.vue"]]);
export {
  _14DisplayMediaRecorder as default
};
