import { y as defineComponent, d as defineAsyncComponent, _ as __vitePreload, x as ref, A as inject, z as toRefs, M as toRef, c as computed, w as watch, l as onMounted, r as resolveComponent, o as openBlock, n as createBlock, g as withCtx, f as createVNode, e as createTextVNode, t as toDisplayString, u as unref, a as createElementBlock, F as Fragment, h as renderList } from "./app-e6eab0de.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ItemC",
  props: {
    modelValue: null,
    likes: { default: () => [] },
    date: { default: () => Date.now() }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit }) {
    const props = __props;
    expose({
      toLocalString() {
        console.log({ type: "error", message: " - toLocalString 方法触发 ~" });
      }
    });
    const DateString = defineAsyncComponent(() => __vitePreload(() => import("./DateString-6949d39e.js"), true ? ["assets/DateString-6949d39e.js","assets/vue-class-component.esm-bundler-fcf04cfd.js","assets/app-e6eab0de.js","assets/framework-cc2b3d55.js"] : void 0));
    let title = ref("Hello ");
    const solarTerms = inject("solarTerms") || [];
    const season = inject("season");
    const { date, likes } = toRefs(props);
    const modelValue = toRef(props, "modelValue");
    let currentSolarTerms = computed(() => {
      let index = season.value ? season.value.value : 0;
      index--;
      return solarTerms.slice(index * 6, index * 6 + 6);
    });
    watch(modelValue, () => {
      requestRemoteData();
    }, {
      immediate: true
    });
    watch([date, likes], (state, prevState) => {
      requestRemoteData();
    });
    const requestRemoteData = () => {
      console.log("远程数据请求已经发送", date, likes, modelValue);
    };
    const selectHandler = (name) => {
      emit("update:modelValue", name);
    };
    console.log("created - 组合式API对应选项式API的created函数是setup ~");
    onMounted(() => {
      console.log("mounted  - 虚拟DOM挂载完成 ~");
    });
    return (_ctx, _cache) => {
      const _component_el_descriptions_item = resolveComponent("el-descriptions-item");
      const _component_el_link = resolveComponent("el-link");
      const _component_el_descriptions = resolveComponent("el-descriptions");
      return openBlock(), createBlock(_component_el_descriptions, {
        title: unref(title),
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
                toDisplayString(unref(date)),
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
                toDisplayString(unref(likes)),
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
                toDisplayString(unref(solarTerms)),
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
                toDisplayString(unref(season)),
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
                renderList(unref(currentSolarTerms), (item, index) => {
                  return openBlock(), createElementBlock(
                    Fragment,
                    { key: index },
                    [
                      createTextVNode("    "),
                      createVNode(_component_el_link, {
                        type: unref(modelValue) === item ? "danger" : "primary",
                        onClick: ($event) => selectHandler(item)
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
                toDisplayString(unref(modelValue)),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_el_descriptions_item, { label: "异步组件: " }, {
            default: withCtx(() => [
              createVNode(unref(DateString), { value: unref(date) }, null, 8, ["value"])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["title"]);
    };
  }
});
const ItemC = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "ItemC.vue"]]);
export {
  ItemC as default
};
