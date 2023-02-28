import { o as openBlock, a as createElementBlock, j as createStaticVNode } from "./app-7cdc0156.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="ffmpeg-使用笔记" tabindex="-1"><a class="header-anchor" href="#ffmpeg-使用笔记" aria-hidden="true">#</a> ffmpeg 使用笔记</h1><h2 id="录制" tabindex="-1"><a class="header-anchor" href="#录制" aria-hidden="true">#</a> 录制</h2><h3 id="转录网络媒体流" tabindex="-1"><a class="header-anchor" href="#转录网络媒体流" aria-hidden="true">#</a> 转录网络媒体流</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>ffmpeg <span class="token parameter variable">-i</span> <span class="token punctuation">{</span>input_url<span class="token punctuation">}</span> <span class="token parameter variable">-c</span> copy <span class="token punctuation">{</span>output_file<span class="token punctuation">}</span>\n</code></pre></div><p>示例 录制hls,rtmp,http文件流</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>ffmpeg <span class="token parameter variable">-i</span> https://tencent.avalive.cn/8cf3a1e9vodcq1256803167/1613cd155285890819181394384/playlist_eof.m3u8 <span class="token parameter variable">-c</span> copy record_1.flv\n</code></pre></div><h2 id="转码" tabindex="-1"><a class="header-anchor" href="#转码" aria-hidden="true">#</a> 转码</h2><hr>', 8);
const _hoisted_9 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_9);
}
const ffmpeg_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "ffmpeg.html.vue"]]);
export {
  ffmpeg_html as default
};
