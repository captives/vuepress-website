import { q as reactive, x as ref, y as defineComponent, z as toRefs, A as inject, o as openBlock, a as createElementBlock, b as createBaseVNode, t as toDisplayString, u as unref, B as renderSlot, F as Fragment, i as createCommentVNode, C as helper, r as resolveComponent, n as createBlock, g as withCtx, f as createVNode, e as createTextVNode } from "./app-c3a13116.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const useDevices = () => {
  const list = reactive([]);
  const audioInput = reactive([]);
  const audioOutput = reactive([]);
  const videoInput = reactive([]);
  const error = ref("");
  const gotDevices = (deviceInfos) => {
    list.splice(0, list.length, ...deviceInfos);
    audioInput.splice(0, audioInput.length, ...deviceInfos.filter((device) => device.kind === "audioinput"));
    audioOutput.splice(0, audioOutput.length, ...deviceInfos.filter((device) => device.kind === "audiooutput"));
    videoInput.splice(0, videoInput.length, ...deviceInfos.filter((device) => device.kind === "videoinput"));
  };
  const handleError = (err) => {
    console.log(err);
    error.value = err.message;
  };
  const playback = (videoElement, deviceId) => {
    console.log("videoElement", deviceId, typeof videoElement);
    if (typeof videoElement.sinkId !== "undefined") {
      videoElement.setSinkId(deviceId).then(() => {
        console.log(`Success, audio output device attached: ${deviceId}`);
      }).catch((error2) => {
        let errorMessage = error2.message;
        if (error2.name === "SecurityError") {
          errorMessage = `You need to use HTTPS for selecting audio output device: ${error2}`;
        }
        console.error(errorMessage);
      });
    } else {
      console.warn("Browser does not support output device selection.");
    }
  };
  navigator.mediaDevices.enumerateDevices().then(gotDevices).catch(handleError);
  return { list, audioInput, audioOutput, videoInput, playback };
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "BaseView",
  props: {
    title: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const { title } = toRefs(props);
    const readied = ref(false);
    const { appendScript } = helper;
    const oss = inject("oss");
    appendScript(oss("wertc-adapter/adapter.js")).then((value) => readied.value = value).catch((err) => console.log(err));
    return (_ctx, _cache) => {
      return readied.value ? (openBlock(), createElementBlock(
        Fragment,
        { key: 0 },
        [
          createBaseVNode(
            "h3",
            null,
            toDisplayString(unref(title)),
            1
            /* TEXT */
          ),
          renderSlot(_ctx.$slots, "default")
        ],
        64
        /* STABLE_FRAGMENT */
      )) : createCommentVNode("v-if", true);
    };
  }
});
const BaseView = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "BaseView.vue"]]);
const _hoisted_1$1 = ["src"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AudioOutput",
  setup(__props) {
    const { audioOutput, playback } = useDevices();
    const url = ref("");
    const videoElement = ref(null);
    const changeDevice = (device) => {
      if (device.kind === "audiooutput") {
        playback(videoElement.value, device.deviceId);
      }
    };
    return (_ctx, _cache) => {
      const _component_URLInput = resolveComponent("URLInput");
      const _component_el_table_column = resolveComponent("el-table-column");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_table = resolveComponent("el-table");
      return openBlock(), createBlock(BaseView, { title: "选择输出设备" }, {
        default: withCtx(() => [
          createVNode(_component_URLInput, {
            modelValue: url.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => url.value = $event),
            list: _ctx.$videoList
          }, null, 8, ["modelValue", "list"]),
          createBaseVNode("video", {
            ref_key: "videoElement",
            ref: videoElement,
            class: "mt-30 mb-30 video-item",
            src: _ctx.$oss(url.value),
            controls: "",
            loop: "",
            autoplay: ""
          }, null, 8, _hoisted_1$1),
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
const AudioOutput_vue_vue_type_style_index_0_lang = "";
const AudioOutput = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "AudioOutput.vue"]]);
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "webrtc-媒体服务",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#webrtc-媒体服务",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" WebRTC 媒体服务")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "获取设备列表",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#获取设备列表",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 获取设备列表")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "使用以下代码获取设备列表",
  -1
  /* HOISTED */
);
const _sfc_main = {
  __name: "index.html",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        _hoisted_2,
        _hoisted_3,
        createVNode(AudioOutput)
      ]);
    };
  }
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "index.html.vue"]]);
export {
  index_html as default
};
