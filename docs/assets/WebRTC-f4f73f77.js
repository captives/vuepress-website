import { q as defineComponent, K as inject, A as toRefs, x as ref, H as reactive, L as onUnmounted, o as openBlock, a as createElementBlock, b as createBaseVNode, t as toDisplayString, u as unref, z as renderSlot, F as Fragment, i as createCommentVNode, M as helper } from "./app-46e25049.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _hoisted_1 = [".srcObject"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "WebRTC",
  props: {
    title: { default: "" }
  },
  emits: ["error", "ready", "completed", "stream", "add", "remove", "change"],
  setup(__props, { expose, emit: emits }) {
    const props = __props;
    const { appendScript } = helper;
    const oss = inject("oss");
    const { title } = toRefs(props);
    const readied = ref(false);
    const error = ref();
    const supUserMedia = ref(false);
    const supDisplayMedia = ref(false);
    const localStream = ref();
    const list = reactive([]);
    const audioInput = reactive([]);
    const audioOutput = reactive([]);
    const videoInput = reactive([]);
    const close = () => {
      var _a;
      error.value = void 0;
      (_a = localStream.value) == null ? void 0 : _a.getTracks().forEach((track) => {
        track.stop();
      });
      localStream.value = void 0;
      console.log("rtc closed !");
    };
    const gotDevices = (deviceInfos) => {
      list.splice(0, list.length, ...deviceInfos);
      audioInput.splice(0, audioInput.length, ...deviceInfos.filter((device) => device.kind === "audioinput"));
      audioOutput.splice(0, audioOutput.length, ...deviceInfos.filter((device) => device.kind === "audiooutput"));
      videoInput.splice(0, videoInput.length, ...deviceInfos.filter((device) => device.kind === "videoinput"));
      close();
      emits("completed", list, { audioInput, audioOutput, videoInput });
    };
    const handleError = (err) => {
      console.log("Error #", err);
      error.value = err;
      emits("error", err);
    };
    const listenStrem = (stream) => {
      stream.addEventListener("inactive", () => {
        console.log("Stream inactive");
      });
      stream.addEventListener("active", () => {
        console.log("Stream active");
      });
    };
    const getUserMedia = (options = { audio: true, video: true }) => {
      error.value = void 0;
      navigator.mediaDevices.getUserMedia(options).then((stream) => {
        console.log("localstream", stream);
        listenStrem(stream);
        localStream.value = stream;
        emits("stream", stream);
      }).catch(handleError);
    };
    const getDisplayMedia = (options = { audio: true, video: true }) => {
      error.value = void 0;
      if (supDisplayMedia.value) {
        navigator.mediaDevices.getDisplayMedia(options).then((stream) => {
          localStream.value = stream;
        }).catch(handleError);
      }
    };
    const initLocalDevice = () => {
      supUserMedia.value = "getUserMedia" in navigator.mediaDevices;
      supDisplayMedia.value = "getDisplayMedia" in navigator.mediaDevices;
      if (supUserMedia.value) {
        navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then((stream) => {
          console.log("localstream", stream);
          listenStrem(stream);
          localStream.value = stream;
          emits("stream", stream);
          return navigator.mediaDevices.enumerateDevices();
        }).then(gotDevices).catch(handleError);
      }
    };
    appendScript(oss("wertc-adapter/adapter.js")).then((value) => {
      readied.value = !!value;
      emits("ready", readied.value);
      if (navigator.mediaDevices) {
        initLocalDevice();
      }
    }).catch((err) => handleError);
    onUnmounted(() => close());
    expose({
      close,
      getUserMedia,
      getDisplayMedia
    });
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
          renderSlot(_ctx.$slots, "list", {
            list,
            data: { audioInput, audioOutput, videoInput },
            support: { supUserMedia: supUserMedia.value, supDisplayMedia: supDisplayMedia.value }
          }),
          renderSlot(_ctx.$slots, "video", { stream: localStream.value }, () => [
            createBaseVNode("video", {
              ref: "localVideo",
              ".srcObject": localStream.value,
              autoplay: ""
            }, null, 8, _hoisted_1)
          ]),
          renderSlot(_ctx.$slots, "default"),
          renderSlot(_ctx.$slots, "error", {
            data: { error: error.value, supUserMedia: supUserMedia.value, supDisplayMedia: supDisplayMedia.value }
          })
        ],
        64
        /* STABLE_FRAGMENT */
      )) : createCommentVNode("v-if", true);
    };
  }
});
const WebRTC = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "WebRTC.vue"]]);
export {
  WebRTC as default
};
