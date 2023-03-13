import { q as defineComponent, r as resolveComponent, o as openBlock, a as createElementBlock, f as createVNode, g as withCtx, e as createTextVNode, t as toDisplayString, u as unref, n as createBlock, i as createCommentVNode, F as Fragment } from "./app-46e25049.js";
import { u as useDevices } from "./webrtc-faffc1a5.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "01MediaDevices",
  setup(__props) {
    const { list, error } = useDevices();
    return (_ctx, _cache) => {
      const _component_el_table_column = resolveComponent("el-table-column");
      const _component_el_table = resolveComponent("el-table");
      const _component_el_tag = resolveComponent("el-tag");
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          createVNode(_component_el_table, {
            data: unref(list),
            stripe: "",
            style: { "width": "100%" }
          }, {
            default: withCtx(() => [
              createVNode(_component_el_table_column, {
                prop: "label",
                label: "名称"
              }),
              createVNode(_component_el_table_column, {
                prop: "kind",
                label: "类型"
              }, {
                default: withCtx(({ row }) => [
                  createTextVNode(
                    toDisplayString({ audioinput: "音频输入", audiooutput: "音频输出", videoinput: "视频输入" }[row.kind]),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_el_table_column, {
                prop: "deviceId",
                label: "Device ID"
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["data"]),
          unref(error) ? (openBlock(), createBlock(_component_el_tag, {
            key: 0,
            class: "error",
            type: "danger"
          }, {
            default: withCtx(() => [
              createTextVNode(
                toDisplayString(unref(error)),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          })) : createCommentVNode("v-if", true)
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
const _01MediaDevices = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "01MediaDevices.vue"]]);
export {
  _01MediaDevices as default
};
