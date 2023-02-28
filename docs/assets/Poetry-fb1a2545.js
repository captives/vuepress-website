import { c as computed, o as openBlock, a as createElementBlock, b as createBaseVNode, i as createCommentVNode, t as toDisplayString, u as unref, B as renderSlot } from "./app-7cdc0156.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const Poetry_vue_vue_type_style_index_0_scoped_fcaa848c_lang = "";
const _hoisted_1 = { class: "home" };
const _hoisted_2 = { class: "hero" };
const _hoisted_3 = { class: "description" };
const _sfc_main = {
  __name: "Poetry",
  setup(__props) {
    const list = [
      "入门休问荣枯事，观看荣颜便得知",
      "君子安贫，达人知命。",
      "根深不怕风摇动，树正何怕月影斜",
      "他人生气本人不气 气出病来无人理",
      "人生本是一场梦 为了小事莫生气",
      "风起云涌年又年 得得失失要乐天",
      "万物有情心有爱 何惧别人笑本人痴",
      "纵然身处风雷雨 深信朝阳必再遇",
      "且将懊恼化烟云 风吹云散交好运",
      "知足常乐 终生不辱",
      "来如风 去如微尘。知福福常在 怡然自心安",
      "是非整天游 不听自然无",
      "人和自得乐 家和万事兴",
      "不经一番寒彻骨 怎得梅花扑鼻香。",
      "别人生气我不气，气出病来没人理",
      "人生本是一场梦，为了小事莫生气",
      "风起云过年有年，得得失失要乐天",
      "知福福常在，怡然自心安",
      "是非终日有，不听自然无",
      "人和自得乐，家和万事兴",
      "不经一番寒彻骨，怎得梅花扑鼻香",
      "海阔就凭鱼跃，天高就任鸟飞",
      "懒理雷声狂风雨，自求我心一片晴",
      "即是相依同林鸟，风雨同路见真心",
      "笑看世间事，前路我自行",
      "虽无家财万贯，喜有笑面开颜"
    ];
    const desc = computed(() => list[Math.floor(Math.random() * list.length)]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", _hoisted_1, [
        createBaseVNode("header", _hoisted_2, [
          createCommentVNode(' <h1 id="main-title">古诗词</h1> '),
          createBaseVNode(
            "p",
            _hoisted_3,
            toDisplayString(unref(desc)),
            1
            /* TEXT */
          )
        ]),
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]);
    };
  }
};
const Poetry = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fcaa848c"], ["__file", "Poetry.vue"]]);
export {
  Poetry as default
};
