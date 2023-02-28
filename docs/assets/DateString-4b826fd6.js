var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { V as Vue, O as Options } from "./vue-class-component.esm-bundler-d9d0d3b8.js";
import { r as resolveComponent, o as openBlock, n as createBlock, g as withCtx, e as createTextVNode, t as toDisplayString } from "./app-c3a13116.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp2(target, key, result);
  return result;
};
let LocalDateString = class extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "prefix", "本地时间：");
  }
};
LocalDateString = __decorateClass([
  Options({
    name: "DateString",
    props: {
      value: [String, Number, Date, null]
    },
    computed: {
      dateString() {
        return new Date(this.value).toLocaleString();
      }
    }
  })
], LocalDateString);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_alert = resolveComponent("el-alert");
  return openBlock(), createBlock(_component_el_alert, {
    title: _ctx.prefix,
    type: "error"
  }, {
    default: withCtx(() => [
      createTextVNode(
        toDisplayString(_ctx.dateString),
        1
        /* TEXT */
      )
    ]),
    _: 1
    /* STABLE */
  }, 8, ["title"]);
}
const DateString = /* @__PURE__ */ _export_sfc(LocalDateString, [["render", _sfc_render], ["__file", "DateString.vue"]]);
export {
  DateString as default
};
