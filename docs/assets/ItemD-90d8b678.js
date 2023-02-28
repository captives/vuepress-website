var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { d as defineAsyncComponent, _ as __vitePreload, r as resolveComponent, o as openBlock, n as createBlock, g as withCtx, f as createVNode, e as createTextVNode, t as toDisplayString, a as createElementBlock, F as Fragment, h as renderList } from "./app-3aff2739.js";
import { V as Vue, O as Options } from "./vue-class-component.esm-bundler-da1a97ad.js";
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
let Winter = class extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "title", "Hello ");
  }
  requestRemoteData() {
    console.log("远程数据请求已经发送");
  }
  selectHandler(name) {
    this.$emit("update:modelValue", name);
  }
};
Winter = __decorateClass([
  Options({
    name: "ItemD",
    components: {
      DateString: defineAsyncComponent(() => __vitePreload(() => import("./DateString-f7aec856.js"), true ? ["assets/DateString-f7aec856.js","assets/vue-class-component.esm-bundler-da1a97ad.js","assets/app-3aff2739.js","assets/framework-cc2b3d55.js"] : void 0))
    },
    props: {
      modelValue: String,
      likes: { type: Array, require: true, default: () => [] },
      date: { type: [String, Number, Date], require: true, default: () => new Date() }
    },
    inject: [
      "solarTerms",
      //常量
      "season"
      //响应性数据
    ],
    computed: {
      currentSolarTerms() {
        let index = this.season.value ? this.season.value.value : 0;
        index--;
        return this.solarTerms.slice(index * 6, index * 6 + 6);
      }
    },
    watch: {
      likes(value) {
        this.requestRemoteData();
      },
      date(value) {
        this.requestRemoteData();
      }
    },
    created() {
      console.log("created - 二十四节气", this.season, this.solarTerms);
      this.requestRemoteData();
    },
    mounted() {
      console.log("mounted  - 虚拟DOM挂载完成 ~");
    }
  })
], Winter);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_descriptions_item = resolveComponent("el-descriptions-item");
  const _component_el_link = resolveComponent("el-link");
  const _component_DateString = resolveComponent("DateString");
  const _component_el_descriptions = resolveComponent("el-descriptions");
  return openBlock(), createBlock(_component_el_descriptions, {
    title: _ctx.title + "-" + _ctx.$options.name,
    column: 1
  }, {
    default: withCtx(() => [
      createVNode(_component_el_descriptions_item, { label: "组件名称（$attrs）" }, {
        default: withCtx(() => [
          createTextVNode(
            toDisplayString(_ctx.$attrs.label),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_el_descriptions_item, { label: "日期（props）: " }, {
        default: withCtx(() => [
          createTextVNode(
            toDisplayString(_ctx.date),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_el_descriptions_item, { label: "喜欢列表（props）: " }, {
        default: withCtx(() => [
          createTextVNode(
            toDisplayString(_ctx.likes),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_el_descriptions_item, { label: "节气列表（provide）: " }, {
        default: withCtx(() => [
          createTextVNode(
            toDisplayString(_ctx.solarTerms),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_el_descriptions_item, { label: "选择季节（provide）: " }, {
        default: withCtx(() => [
          createTextVNode(
            toDisplayString(_ctx.season),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_el_descriptions_item, { label: "包含节气（computed）: " }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(_ctx.currentSolarTerms, (item, index) => {
              return openBlock(), createElementBlock(
                Fragment,
                { key: index },
                [
                  createTextVNode("    "),
                  createVNode(_component_el_link, {
                    type: _ctx.modelValue === item ? "danger" : "primary",
                    onClick: ($event) => _ctx.selectHandler(item)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(
                        toDisplayString(item),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["type", "onClick"])
                ],
                64
                /* STABLE_FRAGMENT */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_el_descriptions_item, { label: "选择节气（v-model）: " }, {
        default: withCtx(() => [
          createTextVNode(
            toDisplayString(_ctx.modelValue),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_el_descriptions_item, { label: "异步组件: " }, {
        default: withCtx(() => [
          createVNode(_component_DateString, { value: _ctx.date }, null, 8, ["value"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  }, 8, ["title"]);
}
const ItemD = /* @__PURE__ */ _export_sfc(Winter, [["render", _sfc_render], ["__file", "ItemD.vue"]]);
export {
  ItemD as default
};
