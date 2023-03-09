import { x as defineComponent, d as defineAsyncComponent, _ as __vitePreload, z as ref, G as reactive, c as computed, H as provide, r as resolveComponent, o as openBlock, n as createBlock, g as withCtx, f as createVNode, u as unref, I as isRef, a as createElementBlock, F as Fragment, h as renderList, e as createTextVNode, t as toDisplayString, i as createCommentVNode, B as mergeProps, J as resolveDynamicComponent } from "./app-9194e199.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Component",
  setup(__props) {
    let list = [
      { label: "组件A", item: defineAsyncComponent(() => __vitePreload(() => import("./ItemA-a91aa1b2.js"), true ? ["assets/ItemA-a91aa1b2.js","assets/app-9194e199.js","assets/framework-cc2b3d55.js"] : void 0)) },
      { label: "组件B", item: defineAsyncComponent(() => __vitePreload(() => import("./ItemB-a6cfaf6c.js"), true ? ["assets/ItemB-a6cfaf6c.js","assets/app-9194e199.js","assets/framework-cc2b3d55.js"] : void 0)) },
      { label: "组件C", item: defineAsyncComponent(() => __vitePreload(() => import("./ItemC-3204a7c7.js"), true ? ["assets/ItemC-3204a7c7.js","assets/app-9194e199.js","assets/framework-cc2b3d55.js"] : void 0)) },
      { label: "组件D", item: defineAsyncComponent(() => __vitePreload(() => import("./ItemD-a21a0cc0.js"), true ? ["assets/ItemD-a21a0cc0.js","assets/app-9194e199.js","assets/framework-cc2b3d55.js","assets/vue-class-component.esm-bundler-64e4d0d2.js"] : void 0)) },
      { label: "组件E", item: defineAsyncComponent(() => __vitePreload(() => import("./ItemE-604d311e.js"), true ? ["assets/ItemE-604d311e.js","assets/app-9194e199.js","assets/framework-cc2b3d55.js","assets/vue-class-component.esm-bundler-64e4d0d2.js"] : void 0)) }
    ];
    let seasons = [
      { label: "春天", code: "Spring", value: "1" },
      { label: "夏天", code: "Summer ", value: "2" },
      { label: "秋天", code: "Autumn", value: "3" },
      { label: "冬天", code: "Winter", value: "4" }
    ];
    let selectTabIndex = ref(1);
    let tabIndex = ref(0);
    let selectSeason = ref();
    let selectSeasonValue = ref();
    let selectValue = ref();
    let form = reactive({ likes: [], date: new Date() });
    let solarTerms = [
      "立春",
      "雨水",
      "惊蛰",
      "春分",
      "清明",
      "谷雨",
      "立夏",
      "小满",
      "芒种",
      "夏至",
      "小暑",
      "大暑",
      "立秋",
      "处暑",
      "白露",
      "秋分",
      "寒露",
      "霜降",
      "立冬",
      "小雪",
      "大雪",
      "冬至",
      "小寒",
      "大寒"
    ];
    const currentTabItem = computed(() => list[tabIndex.value]);
    provide("solarTerms", solarTerms);
    provide("season", selectSeason);
    const tabChangeHandler = (value = 0) => {
      if (value != -1) {
        tabIndex.value = value;
      } else {
        tabIndex.value = tabIndex.value == list.length - 1 ? 0 : tabIndex.value + 1;
      }
    };
    const seasonChangeHandler = (label) => {
      selectSeason.value = seasons.find((item) => item.label === label);
    };
    return (_ctx, _cache) => {
      const _component_el_radio_button = resolveComponent("el-radio-button");
      const _component_el_radio_group = resolveComponent("el-radio-group");
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_date_picker = resolveComponent("el-date-picker");
      const _component_el_checkbox = resolveComponent("el-checkbox");
      const _component_el_checkbox_group = resolveComponent("el-checkbox-group");
      const _component_el_radio = resolveComponent("el-radio");
      const _component_el_form = resolveComponent("el-form");
      const _component_el_col = resolveComponent("el-col");
      const _component_el_row = resolveComponent("el-row");
      return openBlock(), createBlock(_component_el_row, null, {
        default: withCtx(() => [
          createVNode(_component_el_col, {
            span: 24,
            md: 10
          }, {
            default: withCtx(() => [
              createVNode(_component_el_form, {
                model: unref(form),
                "label-width": "90px"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_form_item, { label: "组件" }, {
                    default: withCtx(() => [
                      createVNode(_component_el_radio_group, {
                        modelValue: unref(selectTabIndex),
                        "onUpdate:modelValue": [
                          _cache[0] || (_cache[0] = ($event) => isRef(selectTabIndex) ? selectTabIndex.value = $event : selectTabIndex = $event),
                          tabChangeHandler
                        ]
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(
                            Fragment,
                            null,
                            renderList(unref(list), (item, index) => {
                              return openBlock(), createBlock(_component_el_radio_button, {
                                key: index,
                                label: index
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(
                                    toDisplayString(item.label),
                                    1
                                    /* TEXT */
                                  )
                                ]),
                                _: 2
                                /* DYNAMIC */
                              }, 1032, ["label"]);
                            }),
                            128
                            /* KEYED_FRAGMENT */
                          )),
                          createVNode(_component_el_radio_button, { label: -1 }, {
                            default: withCtx(() => [
                              createTextVNode(
                                toDisplayString(unref(selectTabIndex) == unref(list).length - 1 ? "|<<" : ">>"),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createCommentVNode(" props 传输复杂对象 "),
                  createVNode(_component_el_form_item, { label: "日期" }, {
                    default: withCtx(() => [
                      createVNode(_component_el_date_picker, {
                        modelValue: unref(form).date,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).date = $event),
                        type: "date",
                        placeholder: "请选择"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createCommentVNode(" props传输数组 "),
                  createVNode(_component_el_form_item, { label: "喜欢的节气" }, {
                    default: withCtx(() => [
                      createVNode(_component_el_checkbox_group, {
                        modelValue: unref(form).likes,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).likes = $event),
                        style: { "width": "300px" }
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(
                            Fragment,
                            null,
                            renderList(unref(solarTerms), (item, index) => {
                              return openBlock(), createBlock(_component_el_checkbox, {
                                key: index,
                                label: item,
                                name: "type"
                              }, null, 8, ["label"]);
                            }),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createCommentVNode(" provide index/object 响应式数据 "),
                  createVNode(_component_el_form_item, { label: "季节" }, {
                    default: withCtx(() => [
                      createVNode(_component_el_radio_group, {
                        modelValue: unref(selectSeasonValue),
                        "onUpdate:modelValue": [
                          _cache[3] || (_cache[3] = ($event) => isRef(selectSeasonValue) ? selectSeasonValue.value = $event : selectSeasonValue = $event),
                          seasonChangeHandler
                        ],
                        placeholder: "请选择"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(
                            Fragment,
                            null,
                            renderList(unref(seasons), (item) => {
                              return openBlock(), createBlock(
                                _component_el_radio,
                                mergeProps({
                                  key: item.code
                                }, item),
                                null,
                                16
                                /* FULL_PROPS */
                              );
                            }),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createVNode(_component_el_form_item, { label: "选中的季节" }, {
                    default: withCtx(() => [
                      createTextVNode(
                        toDisplayString(unref(selectSeason)),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createVNode(_component_el_form_item, { label: "选中的节气" }, {
                    default: withCtx(() => [
                      createTextVNode(
                        toDisplayString(unref(selectValue)),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["model"])
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_el_col, {
            span: 24,
            md: 14
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(unref(currentTabItem).item), mergeProps(unref(form), {
                modelValue: unref(selectValue),
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isRef(selectValue) ? selectValue.value = $event : selectValue = $event),
                label: unref(currentTabItem).label
              }), null, 16, ["modelValue", "label"]))
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
const Component = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "Component.vue"]]);
export {
  Component as default
};
