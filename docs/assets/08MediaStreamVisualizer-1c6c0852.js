import { q as defineComponent, x as ref, r as resolveComponent, o as openBlock, a as createElementBlock, f as createVNode, b as createBaseVNode, F as Fragment } from "./app-46e25049.js";
import { S as StreamPlayer } from "./StreamPlayer-1ae5192a.js";
import { S as StreamTracks } from "./StreamTracks-53cd32a8.js";
import { M as MediaError } from "./MediaError-043920b9.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
import "./webrtc-faffc1a5.js";
var WIDTH = 308;
var HEIGHT = 231;
var SMOOTHING = 0.8;
var FFT_SIZE = 2048;
function StreamVisualizer(stream, canvas) {
  console.log("Creating StreamVisualizer with stream and canvas: ", stream, canvas);
  this.canvas = canvas;
  window.addEventListener("resize", this.resize.bind(this), false);
  this.resize();
  this.drawContext = this.canvas.getContext("2d");
  if (typeof AudioContext === "function") {
    this.context = new AudioContext();
  } else if (typeof webkitAudioContext === "function") {
    this.context = new webkitAudioContext();
  } else {
    alert("Sorry! Web Audio is not supported by this browser");
  }
  this.source = this.context.createMediaStreamSource(stream);
  console.log("Created Web Audio source from remote stream: ", this.source);
  this.analyser = this.context.createAnalyser();
  this.analyser.minDecibels = -140;
  this.analyser.maxDecibels = 0;
  this.freqs = new Uint8Array(this.analyser.frequencyBinCount);
  this.times = new Uint8Array(this.analyser.frequencyBinCount);
  this.source.connect(this.analyser);
  this.startTime = 0;
  this.startOffset = 0;
}
StreamVisualizer.prototype.resize = function() {
  var _a;
  if (this.canvas) {
    const rect = (_a = this.canvas.parentElement) == null ? void 0 : _a.getBoundingClientRect();
    if (rect) {
      WIDTH = rect.width;
      HEIGHT = rect.height;
      this.canvas.width = rect.width;
      this.canvas.height = rect.height;
      this.canvas.style.width = rect.width + "px";
      this.canvas.style.height = rect.height + "px";
    }
  }
};
StreamVisualizer.prototype.start = function() {
  requestAnimationFrame(this.draw.bind(this));
};
StreamVisualizer.prototype.draw = function() {
  this.analyser.smoothingTimeConstant = SMOOTHING;
  this.analyser.fftSize = FFT_SIZE;
  this.analyser.getByteFrequencyData(this.freqs);
  this.analyser.getByteTimeDomainData(this.times);
  this.canvas.width = WIDTH;
  this.canvas.height = HEIGHT;
  for (var i = 0; i < this.analyser.frequencyBinCount; i++) {
    var value = this.freqs[i];
    var percent = value / 256;
    var height = HEIGHT * percent;
    var offset = HEIGHT - height - 1;
    var barWidth = WIDTH / this.analyser.frequencyBinCount;
    var hue = i / this.analyser.frequencyBinCount * 360;
    this.drawContext.fillStyle = "hsl(" + hue + ", 100%, 50%)";
    this.drawContext.fillRect(i * barWidth, offset, barWidth, height);
  }
  for (i = 0; i < this.analyser.frequencyBinCount; i++) {
    value = this.times[i];
    percent = value / 256;
    height = HEIGHT * percent;
    offset = HEIGHT - height - 1;
    barWidth = WIDTH / this.analyser.frequencyBinCount;
    this.drawContext.fillStyle = "white";
    this.drawContext.fillRect(i * barWidth, offset, 1, 2);
  }
  requestAnimationFrame(this.draw.bind(this));
};
StreamVisualizer.prototype.getFrequencyValue = function(freq) {
  var nyquist = this.context.sampleRate / 2;
  var index = Math.round(freq / nyquist * this.freqs.length);
  return this.freqs[index];
};
const _hoisted_1 = { class: "container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "08MediaStreamVisualizer",
  setup(__props) {
    const error = ref();
    const url = ref("");
    const videoStream = ref();
    const canvas = ref();
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
      const streamVisualizer = new StreamVisualizer(
        videoStream.value,
        canvas.value
      );
      streamVisualizer.start();
      console.log("Capture stream", videoStream.value);
    };
    return (_ctx, _cache) => {
      const _component_URLInput = resolveComponent("URLInput");
      const _component_VideoPlayer = resolveComponent("VideoPlayer");
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          createVNode(_component_URLInput, {
            list: _ctx.$videoList,
            modelValue: url.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => url.value = $event)
          }, null, 8, ["list", "modelValue"]),
          createVNode(_component_VideoPlayer, {
            src: _ctx.$oss(url.value),
            class: "mt-20",
            autoplay: "",
            loop: "",
            onCanplay: videoCanplayHandler
          }, null, 8, ["src"]),
          createVNode(StreamPlayer, {
            stream: videoStream.value,
            class: "mt-20",
            muted: "",
            autoplay: true
          }, null, 8, ["stream"]),
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode(
              "canvas",
              {
                ref_key: "canvas",
                ref: canvas,
                calss: "canvas"
              },
              null,
              512
              /* NEED_PATCH */
            )
          ]),
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
const _08MediaStreamVisualizer_vue_vue_type_style_index_0_scoped_81d234e4_lang = "";
const _08MediaStreamVisualizer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-81d234e4"], ["__file", "08MediaStreamVisualizer.vue"]]);
export {
  _08MediaStreamVisualizer as default
};
