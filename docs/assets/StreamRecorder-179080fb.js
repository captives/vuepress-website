import { q as defineComponent, A as toRefs, x as ref, H as reactive, r as resolveComponent, u as unref, o as openBlock, n as createBlock, g as withCtx, f as createVNode, e as createTextVNode, b as createBaseVNode, t as toDisplayString, a as createElementBlock, F as Fragment, i as createCommentVNode } from "./app-46e25049.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _hoisted_1 = { class: "ml-20 mr-20" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StreamRecorder",
  props: {
    stream: { default: void 0 },
    video: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const { stream, video } = toRefs(props);
    const recording = ref(false);
    const mediaRecorder = ref();
    const recordBlobs = reactive([]);
    const blobToBinaryString = (value) => {
      const reader = new FileReader();
      reader.onerror = (error) => {
        console.error("媒体流转换到blob数据失败", error);
      };
      reader.onloadend = () => {
      };
      reader.readAsBinaryString(value);
    };
    const startRecoding = () => {
      var options = { mimeType: "video/webm;codecs=h264" };
      if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        console.log(options.mimeType + " is not Supported");
        options = { mimeType: "video/webm;codecs=vp9" };
        if (!MediaRecorder.isTypeSupported(options.mimeType)) {
          console.log(options.mimeType + " is not Supported");
          options = { mimeType: "video/webm;codecs=vp8" };
          if (!MediaRecorder.isTypeSupported(options.mimeType)) {
            console.log(options.mimeType + " is not Supported");
            options = { mimeType: "video/webm" };
            if (!MediaRecorder.isTypeSupported(options.mimeType)) {
              console.log(options.mimeType + " is not Supported");
              options = { mimeType: "" };
            }
          }
        }
      }
      try {
        if (stream.value) {
          mediaRecorder.value = new MediaRecorder(stream.value, options);
          recordBlobs.length = 0;
          console.log("Created MediaRecorder", mediaRecorder.value, "with options", options);
          mediaRecorder.value.addEventListener("start", function(event) {
            console.log("Recorder start ...");
            recording.value = true;
          });
          mediaRecorder.value.addEventListener("stop", function(event) {
            console.log("Recorder stopped: ", event);
            recording.value = false;
          });
          mediaRecorder.value.addEventListener("error", function(event) {
            console.error("media recorder error", event);
            recording.value = false;
          });
          mediaRecorder.value.addEventListener("dataavailable", function(event) {
            if (event.data && event.data.size > 0) {
              blobToBinaryString(event.data);
              recordBlobs.push(event.data);
            }
          });
          mediaRecorder.value.start(10);
          console.log("MediaRecorder started", mediaRecorder.value);
        }
      } catch (e) {
        alert(`Exception while creating MediaRecorder: ${e}. mimeType: ${options.mimeType}`);
      }
    };
    const stopRecoder = () => {
      if (mediaRecorder.value && recording.value) {
        recording.value = false;
        mediaRecorder.value.stop();
      }
    };
    const downloadfile = () => {
      if (recordBlobs && recordBlobs.length) {
        const blob = new Blob(recordBlobs, { type: "video/webm" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = "Rec_" + Date.now() + ".webm";
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
        }, 100);
      }
    };
    const playHandler = () => {
      const videoElement = video.value;
      if (!!videoElement) {
        const timeupdate = function() {
          videoElement.currentTime = 0;
          videoElement.play();
        };
        const loadedmetadata = function(event) {
          console.log("loadedmetadata", videoElement.currentTime, videoElement.duration);
          if (videoElement.duration === Infinity) {
            videoElement.currentTime = 1e101;
            videoElement.addEventListener("timeupdate", timeupdate);
          }
        };
        videoElement.removeEventListener("timeupdate", timeupdate);
        videoElement.removeEventListener("loadedmetadata", loadedmetadata);
        videoElement.addEventListener("loadedmetadata", loadedmetadata);
      }
      if (recordBlobs && recordBlobs.length) {
        const blob = new Blob(recordBlobs, { type: "video/webm" });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      }
    };
    return (_ctx, _cache) => {
      const _component_el_tag = resolveComponent("el-tag");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_col = resolveComponent("el-col");
      const _component_el_row = resolveComponent("el-row");
      return unref(stream) ? (openBlock(), createBlock(_component_el_row, { key: 0 }, {
        default: withCtx(() => [
          recording.value ? (openBlock(), createBlock(_component_el_col, { key: 0 }, {
            default: withCtx(() => [
              createVNode(_component_el_tag, { type: "danger" }, {
                default: withCtx(() => [
                  createTextVNode("Rec ....")
                ]),
                _: 1
                /* STABLE */
              }),
              createBaseVNode(
                "small",
                _hoisted_1,
                toDisplayString(recordBlobs.length),
                1
                /* TEXT */
              ),
              createVNode(_component_el_button, {
                type: "danger",
                size: "mini",
                onClick: stopRecoder
              }, {
                default: withCtx(() => [
                  createTextVNode("停止录制")
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })) : (openBlock(), createBlock(_component_el_col, { key: 1 }, {
            default: withCtx(() => [
              recordBlobs.length ? (openBlock(), createElementBlock(
                Fragment,
                { key: 0 },
                [
                  createVNode(_component_el_button, {
                    type: "primary",
                    size: "mini",
                    onClick: playHandler
                  }, {
                    default: withCtx(() => [
                      createTextVNode("预览")
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createVNode(_component_el_button, {
                    type: "danger",
                    size: "mini",
                    onClick: downloadfile
                  }, {
                    default: withCtx(() => [
                      createTextVNode("下载视频")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ],
                64
                /* STABLE_FRAGMENT */
              )) : (openBlock(), createBlock(_component_el_button, {
                key: 1,
                type: "success",
                size: "mini",
                onClick: startRecoding
              }, {
                default: withCtx(() => [
                  createTextVNode("开始录制")
                ]),
                _: 1
                /* STABLE */
              }))
            ]),
            _: 1
            /* STABLE */
          }))
        ]),
        _: 1
        /* STABLE */
      })) : createCommentVNode("v-if", true);
    };
  }
});
const StreamRecorder = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "StreamRecorder.vue"]]);
export {
  StreamRecorder as default
};
