import { d as defineAsyncComponent, _ as __vitePreload, r as resolveComponent, o as openBlock, n as createBlock, g as withCtx, f as createVNode, e as createTextVNode, t as toDisplayString, a as createElementBlock, F as Fragment, h as renderList } from "./app-e6eab0de.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _sfc_main = {
  name: "ItemA",
  components: {
    // 异步组件
    DateString: defineAsyncComponent(() => __vitePreload(() => import("./DateString-6949d39e.js"), true ? ["assets/DateString-6949d39e.js","assets/vue-class-component.esm-bundler-fcf04cfd.js","assets/app-e6eab0de.js","assets/framework-cc2b3d55.js"] : void 0))
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
  data() {
    return {
      title: "Hello "
    };
  },
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
    },
    season(value) {
      console.log("inject - update");
      this.requestRemoteData();
    }
  },
  methods: {
    requestRemoteData() {
      console.log("远程数据请求已经发送");
    },
    selectHandler(name) {
      this.$emit("update:modelValue", name);
    }
  },
  created() {
    console.log("created - 二十四节气", this.season, this.solarTerms);
    this.requestRemoteData();
  },
  mounted() {
    console.log("mounted  - 虚拟DOM挂载完成 ~");
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_descriptions_item = resolveComponent("el-descriptions-item");
  const _component_el_link = resolveComponent("el-link");
  const _component_DateString = resolveComponent("DateString");
  const _component_el_descriptions = resolveComponent("el-descriptions");
  return openBlock(), createBlock(_component_el_descriptions, {
    title: $data.title + "-" + _ctx.$options.name,
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
            toDisplayString($props.date),
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
            toDisplayString($props.likes),
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
            toDisplayString($options.solarTerms),
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
            toDisplayString($options.season),
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
            renderList($options.currentSolarTerms, (item, index) => {
              return openBlock(), createElementBlock(
                Fragment,
                { key: index },
                [
                  createTextVNode("    "),
                  createVNode(_component_el_link, {
                    type: $props.modelValue === item ? "danger" : "primary",
                    onClick: ($event) => $options.selectHandler(item)
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
            toDisplayString($props.modelValue),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_el_descriptions_item, { label: "异步组件: " }, {
        default: withCtx(() => [
          createVNode(_component_DateString, { value: $props.date }, null, 8, ["value"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  }, 8, ["title"]);
}
const ItemA = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "ItemA.vue"]]);
export {
  ItemA as default
};
