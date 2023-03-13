import { q as defineComponent, x as ref, r as resolveComponent, o as openBlock, n as createBlock, g as withCtx, f as createVNode, u as unref, e as createTextVNode } from "./app-46e25049.js";
import { u as useDevices } from "./webrtc-faffc1a5.js";
import WebRTC from "./WebRTC-f4f73f77.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "07AudioOutput",
  setup(__props) {
    const { audioOutput, playback } = useDevices();
    const url = ref("");
    const videoElement = ref();
    const videoCanplayHandler = (event, element) => {
      videoElement.value = element;
    };
    const changeDevice = (device) => {
      if (device.kind === "audiooutput") {
        playback(videoElement.value, device.deviceId);
      }
    };
    return (_ctx, _cache) => {
      const _component_URLInput = resolveComponent("URLInput");
      const _component_VideoPlayer = resolveComponent("VideoPlayer");
      const _component_el_table_column = resolveComponent("el-table-column");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_table = resolveComponent("el-table");
      return openBlock(), createBlock(WebRTC, { title: "音频输出到指定设备" }, {
        video: withCtx(() => [
          createVNode(_component_VideoPlayer, {
            src: _ctx.$oss(url.value),
            class: "mt-20",
            autoplay: "",
            loop: "",
            onCanplay: videoCanplayHandler
          }, null, 8, ["src"])
        ]),
        default: withCtx(() => [
          createVNode(_component_URLInput, {
            modelValue: url.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => url.value = $event),
            list: _ctx.$videoList
          }, null, 8, ["modelValue", "list"]),
          createVNode(_component_el_table, {
            data: unref(audioOutput),
            width: "100%"
          }, {
            default: withCtx(() => [
              createVNode(_component_el_table_column, {
                prop: "label",
                label: "名称"
              }),
              createVNode(_component_el_table_column, {
                prop: "kind",
                label: "类型"
              }),
              createVNode(_component_el_table_column, {
                prop: "deviceId",
                label: "设备ID"
              }),
              createVNode(_component_el_table_column, { label: "操作" }, {
                default: withCtx((scope) => [
                  createVNode(_component_el_button, {
                    type: "danger",
                    onClick: ($event) => changeDevice(scope.row)
                  }, {
                    default: withCtx(() => [
                      createTextVNode("选择")
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["onClick"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["data"])
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
const _07AudioOutput_vue_vue_type_style_index_0_lang = "";
const _07AudioOutput = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "07AudioOutput.vue"]]);
export {
  _07AudioOutput as default
};
