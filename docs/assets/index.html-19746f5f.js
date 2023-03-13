import { q as defineComponent, x as ref, d as defineAsyncComponent, _ as __vitePreload, r as resolveComponent, o as openBlock, a as createElementBlock, f as createVNode, g as withCtx, F as Fragment, h as renderList, n as createBlock, y as resolveDynamicComponent, b as createBaseVNode, e as createTextVNode } from "./app-46e25049.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const selectIndex = ref(0);
    const list = [{
      path: "index",
      name: "WebRTC 知识点",
      icon: "el-icon-s-flag",
      component: defineAsyncComponent(() => __vitePreload(() => import("./WebRTC-f4f73f77.js"), true ? ["assets/WebRTC-f4f73f77.js","assets/app-46e25049.js","assets/framework-cc2b3d55.js"] : void 0))
    }, {
      path: "list",
      name: "用户设备列表",
      icon: "el-icon-notebook-2",
      component: defineAsyncComponent(() => __vitePreload(() => import("./01MediaDevices-e22c9da4.js"), true ? ["assets/01MediaDevices-e22c9da4.js","assets/app-46e25049.js","assets/framework-cc2b3d55.js","assets/webrtc-faffc1a5.js"] : void 0))
    }, {
      path: "stream-from-usermedia",
      name: "视频流来自用户设备",
      icon: "el-icon-camera",
      component: defineAsyncComponent(() => __vitePreload(() => import("./02VideoStreamFromUserMedia-ff4e4d90.js"), true ? ["assets/02VideoStreamFromUserMedia-ff4e4d90.js","assets/app-46e25049.js","assets/framework-cc2b3d55.js","assets/WebRTC-f4f73f77.js","assets/StreamPlayer-1ae5192a.js","assets/StreamTracks-53cd32a8.js"] : void 0))
    }, {
      path: "dynamic-selection-usermedia",
      name: "动态选择用户设备",
      icon: "el-icon-orange",
      component: defineAsyncComponent(() => __vitePreload(() => import("./03ChooseUserMedia-12b73a50.js"), true ? ["assets/03ChooseUserMedia-12b73a50.js","assets/app-46e25049.js","assets/framework-cc2b3d55.js","assets/WebRTC-f4f73f77.js","assets/StreamPlayer-1ae5192a.js","assets/StreamTracks-53cd32a8.js","assets/MediaError-043920b9.js","assets/webrtc-faffc1a5.js"] : void 0))
    }, {
      path: "dynamic-selection-usermedia",
      name: "动态选择用户摄像头分辨率约束",
      icon: "el-icon-orange",
      component: defineAsyncComponent(() => __vitePreload(() => import("./03ChooseUserMediaForCameraResolution-4626dbed.js"), true ? ["assets/03ChooseUserMediaForCameraResolution-4626dbed.js","assets/app-46e25049.js","assets/framework-cc2b3d55.js","assets/WebRTC-f4f73f77.js","assets/StreamPlayer-1ae5192a.js","assets/StreamTracks-53cd32a8.js","assets/MediaError-043920b9.js","assets/webrtc-faffc1a5.js"] : void 0))
    }, {
      path: "stream-from-displaymedia",
      name: "视频流来自显示设备",
      icon: "el-icon-monitor",
      component: defineAsyncComponent(() => __vitePreload(() => import("./04VideoStreamFromDisplayMedia-696b07ab.js"), true ? ["assets/04VideoStreamFromDisplayMedia-696b07ab.js","assets/app-46e25049.js","assets/framework-cc2b3d55.js","assets/WebRTC-f4f73f77.js","assets/StreamPlayer-1ae5192a.js","assets/StreamTracks-53cd32a8.js","assets/MediaError-043920b9.js","assets/webrtc-faffc1a5.js"] : void 0))
    }, {
      path: "stream-from-video",
      name: "视频流来自Video",
      icon: "el-icon-film",
      component: defineAsyncComponent(() => __vitePreload(() => import("./05VideoStreamFromVideo-a2f34f3c.js"), true ? ["assets/05VideoStreamFromVideo-a2f34f3c.js","assets/app-46e25049.js","assets/framework-cc2b3d55.js","assets/StreamPlayer-1ae5192a.js","assets/StreamTracks-53cd32a8.js","assets/MediaError-043920b9.js","assets/webrtc-faffc1a5.js"] : void 0))
    }, {
      path: "stream-from-canvas",
      name: "视频流来自Canvas",
      icon: "el-icon-picture-outline",
      component: defineAsyncComponent(() => __vitePreload(() => import("./06VideoStreamFromCanvas-3d02a20b.js"), true ? ["assets/06VideoStreamFromCanvas-3d02a20b.js","assets/app-46e25049.js","assets/framework-cc2b3d55.js","assets/StreamPlayer-1ae5192a.js","assets/StreamTracks-53cd32a8.js","assets/MediaError-043920b9.js","assets/webrtc-faffc1a5.js"] : void 0))
    }, {
      path: "audiooutput",
      name: "音频输出到指定设备",
      icon: "el-icon-headset",
      component: defineAsyncComponent(() => __vitePreload(() => import("./07AudioOutput-270ec833.js"), true ? ["assets/07AudioOutput-270ec833.js","assets/app-46e25049.js","assets/framework-cc2b3d55.js","assets/webrtc-faffc1a5.js","assets/WebRTC-f4f73f77.js"] : void 0))
    }, {
      path: "visualizer",
      name: "媒体流可视化",
      icon: "el-icon-data-line",
      component: defineAsyncComponent(() => __vitePreload(() => import("./08MediaStreamVisualizer-1c6c0852.js"), true ? ["assets/08MediaStreamVisualizer-1c6c0852.js","assets/app-46e25049.js","assets/framework-cc2b3d55.js","assets/StreamPlayer-1ae5192a.js","assets/StreamTracks-53cd32a8.js","assets/MediaError-043920b9.js","assets/webrtc-faffc1a5.js"] : void 0))
    }, {
      path: "audio-volume",
      name: "媒体流音量测算",
      icon: "el-icon-odometer",
      component: defineAsyncComponent(() => __vitePreload(() => import("./09AudioStreamVolume-c94031e8.js"), true ? ["assets/09AudioStreamVolume-c94031e8.js","assets/app-46e25049.js","assets/framework-cc2b3d55.js","assets/StreamTracks-53cd32a8.js","assets/MediaError-043920b9.js","assets/webrtc-faffc1a5.js"] : void 0))
    }, {
      path: "mixer",
      name: "媒体流混音",
      icon: "el-icon-set-up",
      component: defineAsyncComponent(() => __vitePreload(() => import("./10MediaStreamMixer-d2a7a82c.js"), true ? ["assets/10MediaStreamMixer-d2a7a82c.js","assets/app-46e25049.js","assets/framework-cc2b3d55.js","assets/StreamPlayer-1ae5192a.js","assets/StreamTracks-53cd32a8.js","assets/StreamRecorder-179080fb.js","assets/MediaError-043920b9.js","assets/webrtc-faffc1a5.js"] : void 0))
    }, {
      path: "pc",
      name: "对等连接",
      icon: "el-icon-connection",
      component: defineAsyncComponent(() => __vitePreload(() => import("./11PeerConnection-eea9c719.js"), true ? ["assets/11PeerConnection-eea9c719.js","assets/app-46e25049.js","assets/framework-cc2b3d55.js"] : void 0))
    }, {
      path: "remote",
      name: "对等连接传输流",
      icon: "el-icon-money",
      component: defineAsyncComponent(() => __vitePreload(() => import("./12AudioVideoCall-58f810e0.js"), true ? ["assets/12AudioVideoCall-58f810e0.js","assets/app-46e25049.js","assets/framework-cc2b3d55.js","assets/WebRTC-f4f73f77.js","assets/StreamPlayer-1ae5192a.js","assets/StreamTracks-53cd32a8.js"] : void 0))
    }, {
      path: "recorder",
      name: "用户设备流录制",
      icon: "el-icon-video-camera",
      component: defineAsyncComponent(() => __vitePreload(() => import("./13UserMediaRecorder-8148e112.js"), true ? ["assets/13UserMediaRecorder-8148e112.js","assets/app-46e25049.js","assets/framework-cc2b3d55.js","assets/WebRTC-f4f73f77.js","assets/StreamPlayer-1ae5192a.js","assets/StreamTracks-53cd32a8.js","assets/StreamRecorder-179080fb.js"] : void 0))
    }, {
      path: "display-media-recorder",
      name: "显示设备录制流",
      icon: "el-icon-video-camera-solid",
      component: defineAsyncComponent(() => __vitePreload(() => import("./14DisplayMediaRecorder-2cc01a17.js"), true ? ["assets/14DisplayMediaRecorder-2cc01a17.js","assets/app-46e25049.js","assets/framework-cc2b3d55.js","assets/WebRTC-f4f73f77.js","assets/StreamPlayer-1ae5192a.js","assets/StreamTracks-53cd32a8.js","assets/MediaError-043920b9.js","assets/webrtc-faffc1a5.js","assets/StreamRecorder-179080fb.js"] : void 0))
    }, {
      path: "display-media-recorder-to-file",
      name: "显示设备录制流到文件",
      icon: "el-icon-video-camera-solid",
      component: defineAsyncComponent(() => __vitePreload(() => import("./StreamRecorder-179080fb.js"), true ? ["assets/StreamRecorder-179080fb.js","assets/app-46e25049.js","assets/framework-cc2b3d55.js"] : void 0))
    }];
    return (_ctx, _cache) => {
      const _component_el_option = resolveComponent("el-option");
      const _component_el_select = resolveComponent("el-select");
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          createVNode(_component_el_select, {
            modelValue: selectIndex.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectIndex.value = $event),
            placeholder: "请选择"
          }, {
            default: withCtx(() => [
              (openBlock(), createElementBlock(
                Fragment,
                null,
                renderList(list, (item, index) => {
                  return createVNode(_component_el_option, {
                    key: index,
                    label: item.name,
                    value: index
                  }, null, 8, ["label", "value"]);
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          (openBlock(), createBlock(resolveDynamicComponent(list[selectIndex.value].component)))
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
const WebRTCSample = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "index.vue"]]);
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index.html",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        _hoisted_2,
        createVNode(WebRTCSample)
      ]);
    };
  }
});
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "index.html.vue"]]);
export {
  index_html as default
};
