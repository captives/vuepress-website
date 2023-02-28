import { d as defineAsyncComponent, _ as __vitePreload, A as inject, c as computed, z as toRefs, M as toRef, w as watch, l as onMounted, r as resolveComponent, o as openBlock, n as createBlock, g as withCtx, f as createVNode, e as createTextVNode, t as toDisplayString, a as createElementBlock, F as Fragment, h as renderList } from "./app-c3a13116.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _sfc_main = {
  name: "ItemB",
  components: {
    // 异步组件
    DateString: defineAsyncComponent(() => __vitePreload(() => import("./DateString-4b826fd6.js"), true ? ["assets/DateString-4b826fd6.js","assets/vue-class-component.esm-bundler-d9d0d3b8.js","assets/app-c3a13116.js","assets/framework-cc2b3d55.js"] : void 0))
  },
  // props声明，必须和setup同级
  props: {
    modelValue: String,
    likes: { type: Array, require: true, default: () => [] },
    date: { type: [String, Number, Date], require: true, default: () => new Date() }
  },
  setup(props, { attrs, slots, emit, expose }) {
    const solarTerms = inject("solarTerms");
    const season = inject("season");
    let currentSolarTerms = computed(() => {
      let index = season.value ? season.value.value : 0;
      index--;
      return solarTerms.slice(index * 6, index * 6 + 6);
    });
    const { date, likes } = toRefs(props);
    const modelValue = toRef(props, "modelValue");
    const requestRemoteData = () => {
      console.log("远程数据请求已经发送", date, likes, modelValue);
    };
    watch(modelValue, () => {
      requestRemoteData();
    });
    watch([date, likes], (state, prevState) => {
      requestRemoteData();
    });
    console.log("created - 组合式API对应选项式API的created函数是setup ~", attrs);
    requestRemoteData();
    onMounted(() => {
      console.log("mounted  - 虚拟DOM挂载完成 ~");
    });
    return {
      title: "Hello ",
      season,
      solarTerms,
      currentSolarTerms,
      selectHandler(name) {
        emit("update:modelValue", name);
      }
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_descriptions_item = resolveComponent("el-descriptions-item");
  const _component_el_link = resolveComponent("el-link");
  const _component_DateString = resolveComponent("DateString");
  const _component_el_descriptions = resolveComponent("el-descriptions");
  return openBlock(), createBlock(_component_el_descriptions, {
    title: $setup.title + "-" + _ctx.$options.name,
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
            toDisplayString($setup.solarTerms),
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
            toDisplayString($setup.season),
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
            renderList($setup.currentSolarTerms, (item, index) => {
              return openBlock(), createElementBlock(
                Fragment,
                { key: index },
                [
                  createTextVNode("    "),
                  createVNode(_component_el_link, {
                    type: $props.modelValue === item ? "danger" : "primary",
                    onClick: ($event) => $setup.selectHandler(item)
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
const ItemB = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "ItemB.vue"]]);
export {
  ItemB as default
};
