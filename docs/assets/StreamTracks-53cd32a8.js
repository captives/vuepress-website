import { q as defineComponent, A as toRefs, H as reactive, w as watch, r as resolveComponent, o as openBlock, a as createElementBlock, h as renderList, F as Fragment, k as withDirectives, N as vShow, b as createBaseVNode, t as toDisplayString, n as createBlock, g as withCtx, f as createVNode, e as createTextVNode, i as createCommentVNode, O as pushScopeId, P as popScopeId } from "./app-46e25049.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _hoisted_1$1 = ["title"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "StreamTrackSetup",
  props: {
    track: { default: void 0 }
  },
  emits: ["change"],
  setup(__props, { emit }) {
    const props = __props;
    const { track } = toRefs(props);
    const list = reactive([
      { label: "曝光模式", key: "exposureMode", disabled: false, value: null },
      { label: "曝光时间", key: "exposureTime", disabled: false, value: null },
      { label: "曝光补偿", key: "exposureCompensation", disabled: false, value: null },
      { label: "亮度", key: "brightness", disabled: false, value: null },
      { label: "白平衡模式", key: "whiteBalanceMode", disabled: false, value: null },
      /**
       * 控制视频 平移、倾斜、缩放
       * https://webrtc.github.io/samples/src/content/getusermedia/pan-tilt-zoom/
       **/
      { label: "平移", key: "pan", disabled: false, value: null },
      { label: "倾斜", key: "tilt", disabled: false, value: null },
      { label: "变焦", key: "zoom", disabled: false, value: null }
    ]);
    watch(track, () => {
      if (!track.value) {
        return;
      }
      const capabilities = track.value.getCapabilities();
      const settings = track.value.getSettings();
      for (const item of list) {
        item.disabled = !(item.key in settings);
        if (!(item.key in settings)) {
          console.log(`Camera does not support ${item.key}.`);
          continue;
        }
        item.value = settings[item.key];
        if (Array.isArray(capabilities[item.key])) {
          item.options = capabilities[item.key];
        } else {
          Object.assign(item, capabilities[item.key]);
        }
      }
    }, { immediate: true });
    const changeHandler = (item) => {
      const advanced = [{ [item.key]: item.value }];
      track.value.applyConstraints({ advanced }).then(() => {
        console.log("Did successfully apply new constraints: ", { advanced });
        console.log("New settings: ", track.value.getSettings());
      }).catch((err) => {
        console.error("applyConstraints() failed: ", err);
      });
    };
    return (_ctx, _cache) => {
      const _component_el_option = resolveComponent("el-option");
      const _component_el_select = resolveComponent("el-select");
      const _component_el_slider = resolveComponent("el-slider");
      return openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList(list, (item, index) => {
          return withDirectives((openBlock(), createElementBlock("div", {
            class: "h-justify__left mt-10",
            key: index
          }, [
            createBaseVNode("span", {
              class: "title mr-20",
              title: item.key
            }, toDisplayString(item.label), 9, _hoisted_1$1),
            item.options instanceof Array ? (openBlock(), createBlock(_component_el_select, {
              key: 0,
              modelValue: item.value,
              "onUpdate:modelValue": ($event) => item.value = $event,
              class: "m-2",
              onChange: ($event) => changeHandler(item)
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(item.options, (option) => {
                    return openBlock(), createBlock(_component_el_option, {
                      key: option,
                      label: option,
                      value: option
                    }, null, 8, ["label", "value"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["modelValue", "onUpdate:modelValue", "onChange"])) : (openBlock(), createBlock(_component_el_slider, {
              key: 1,
              min: item.min,
              max: item.max,
              modelValue: item.value,
              "onUpdate:modelValue": ($event) => item.value = $event,
              onChange: ($event) => changeHandler(item)
            }, null, 8, ["min", "max", "modelValue", "onUpdate:modelValue", "onChange"]))
          ])), [
            [vShow, !item.disabled]
          ]);
        }),
        128
        /* KEYED_FRAGMENT */
      );
    };
  }
});
const StreamTrackSetup_vue_vue_type_style_index_0_scoped_865ef83a_lang = "";
const StreamTrackSetup = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-865ef83a"], ["__file", "StreamTrackSetup.vue"]]);
const StreamTracks_vue_vue_type_style_index_0_scoped_bc799ef5_lang = "";
const _sfc_main = {
  name: "StreamTracks",
  components: { StreamTrackSetup },
  props: {
    value: {
      type: MediaStream,
      default: null
    },
    edited: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      id: null,
      tableData: []
    };
  },
  watch: {
    value(stream) {
      this.id = stream.id;
      this.tableData = [];
      this.tableData = this.tableData.concat(
        stream.getVideoTracks(),
        stream.getAudioTracks()
      );
    }
  },
  methods: {
    removeTrack(track) {
      if (this.value) {
        track.stop();
        this.value.removeTrack(track);
        console.log("remove track id", track.label, track.id);
        this.$emit("input", this.value);
      }
    }
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-bc799ef5"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "h4",
  null,
  "Base:",
  -1
  /* HOISTED */
));
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "h4",
  null,
  "Constraints:",
  -1
  /* HOISTED */
));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "h4",
  null,
  "Settings:",
  -1
  /* HOISTED */
));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "h4",
  null,
  "Capabilities:",
  -1
  /* HOISTED */
));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_table_column = resolveComponent("el-table-column");
  const _component_el_link = resolveComponent("el-link");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _component_StreamTrackSetup = resolveComponent("StreamTrackSetup");
  const _component_el_col = resolveComponent("el-col");
  const _component_el_row = resolveComponent("el-row");
  const _component_el_main = resolveComponent("el-main");
  const _component_el_table = resolveComponent("el-table");
  return openBlock(), createBlock(_component_el_table, {
    data: $data.tableData,
    stripe: ""
  }, {
    default: withCtx(() => [
      createVNode(_component_el_table_column, { label: "媒体流ID" }, {
        default: withCtx(() => [
          createVNode(_component_el_table_column, { label: "名称" }, {
            default: withCtx(({ row }) => [
              createTextVNode(
                toDisplayString(row.label.substr(0, 8)) + "... ",
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
      }),
      createVNode(_component_el_table_column, {
        label: $props.value && $props.value.id
      }, {
        default: withCtx(() => [
          createVNode(_component_el_table_column, {
            prop: "kind",
            label: "类型"
          }),
          createVNode(_component_el_table_column, { label: "id" }, {
            default: withCtx(({ row }) => [
              createTextVNode(
                toDisplayString(row.id.substr(0, 8)) + "... ",
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_el_table_column, { label: "state" }, {
            default: withCtx(({ row }) => [
              createTextVNode(
                toDisplayString(row.readyState),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_el_table_column, { label: "enabled" }, {
            default: withCtx(({ row }) => [
              createTextVNode(
                toDisplayString(row.enabled),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_el_table_column, { label: "muted" }, {
            default: withCtx(({ row }) => [
              createTextVNode(
                toDisplayString(row.muted),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }),
          $props.edited ? (openBlock(), createBlock(_component_el_table_column, {
            key: 0,
            label: "操作"
          }, {
            default: withCtx(({ row }) => [
              createVNode(
                _component_el_tooltip,
                {
                  class: "item",
                  content: "移除轨道",
                  placement: "top"
                },
                {
                  default: withCtx(() => [
                    createVNode(_component_el_link, {
                      class: "el-icon-minus",
                      onClick: ($event) => $options.removeTrack(row)
                    }, {
                      default: withCtx(() => [
                        createTextVNode("移除")
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["onClick"])
                  ]),
                  _: 2
                  /* DYNAMIC */
                },
                1024
                /* DYNAMIC_SLOTS */
              )
            ]),
            _: 1
            /* STABLE */
          })) : createCommentVNode("v-if", true),
          createVNode(_component_el_table_column, { type: "expand" }, {
            default: withCtx(({ row }) => [
              row.kind === "video" ? (openBlock(), createBlock(_component_StreamTrackSetup, {
                key: 0,
                track: row
              }, null, 8, ["track"])) : createCommentVNode("v-if", true),
              createVNode(
                _component_el_main,
                { class: "table-expand" },
                {
                  default: withCtx(() => [
                    _hoisted_1,
                    createVNode(
                      _component_el_row,
                      null,
                      {
                        default: withCtx(() => [
                          createVNode(
                            _component_el_col,
                            { span: 12 },
                            {
                              default: withCtx(() => [
                                createTextVNode(
                                  "label: " + toDisplayString(row.label),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              _: 2
                              /* DYNAMIC */
                            },
                            1024
                            /* DYNAMIC_SLOTS */
                          ),
                          createVNode(
                            _component_el_col,
                            { span: 12 },
                            {
                              default: withCtx(() => [
                                createTextVNode(
                                  "ID: " + toDisplayString(row.id),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              _: 2
                              /* DYNAMIC */
                            },
                            1024
                            /* DYNAMIC_SLOTS */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    ),
                    _hoisted_2,
                    createVNode(
                      _component_el_row,
                      null,
                      {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(
                            Fragment,
                            null,
                            renderList(row.getConstraints(), (item, key) => {
                              return openBlock(), createBlock(
                                _component_el_col,
                                {
                                  key,
                                  span: 12
                                },
                                {
                                  default: withCtx(() => [
                                    createTextVNode(
                                      toDisplayString(key) + " : " + toDisplayString(item),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  _: 2
                                  /* DYNAMIC */
                                },
                                1024
                                /* DYNAMIC_SLOTS */
                              );
                            }),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    ),
                    _hoisted_3,
                    createVNode(
                      _component_el_row,
                      null,
                      {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(
                            Fragment,
                            null,
                            renderList(row.getSettings(), (item, key) => {
                              return openBlock(), createBlock(
                                _component_el_col,
                                {
                                  key,
                                  span: 12
                                },
                                {
                                  default: withCtx(() => [
                                    createTextVNode(
                                      toDisplayString(key) + " : " + toDisplayString(item),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  _: 2
                                  /* DYNAMIC */
                                },
                                1024
                                /* DYNAMIC_SLOTS */
                              );
                            }),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    ),
                    _hoisted_4,
                    createVNode(
                      _component_el_row,
                      null,
                      {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(
                            Fragment,
                            null,
                            renderList(row.getCapabilities(), (item, key) => {
                              return openBlock(), createBlock(
                                _component_el_col,
                                {
                                  key,
                                  span: 12
                                },
                                {
                                  default: withCtx(() => [
                                    createTextVNode(
                                      toDisplayString(key) + " : " + toDisplayString(item),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  _: 2
                                  /* DYNAMIC */
                                },
                                1024
                                /* DYNAMIC_SLOTS */
                              );
                            }),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                },
                1024
                /* DYNAMIC_SLOTS */
              )
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["label"])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["data"]);
}
const StreamTracks = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-bc799ef5"], ["__file", "StreamTracks.vue"]]);
export {
  StreamTracks as S
};
