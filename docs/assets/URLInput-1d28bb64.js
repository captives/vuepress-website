import { y as defineComponent, z as toRefs, x as ref, l as onMounted, r as resolveComponent, o as openBlock, n as createBlock, g as withCtx, u as unref, a as createElementBlock, F as Fragment, h as renderList, f as createVNode, D as position_default, E as mergeProps, G as ElMessage } from "./app-e6eab0de.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _hoisted_1 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "URLInput",
  props: {
    modelValue: { default: "" },
    list: { default: () => [] }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit }) {
    const props = __props;
    const { modelValue, list } = toRefs(props);
    const text = ref(modelValue.value);
    const selectValue = ref();
    const changeHandler = (event) => {
      text.value = selectValue.value;
    };
    const requestURL = () => {
      if (text.value) {
        emit("update:modelValue", text.value);
        emit("change", selectValue.value);
      } else {
        ElMessage({ type: "warning", message: "请输入内容" });
      }
    };
    onMounted(() => {
      if (list.value.length) {
        text.value = list.value[0].value;
        selectValue.value = text.value;
        emit("update:modelValue", text.value);
      }
    });
    return (_ctx, _cache) => {
      const _component_el_option = resolveComponent("el-option");
      const _component_el_select = resolveComponent("el-select");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_input = resolveComponent("el-input");
      return openBlock(), createBlock(_component_el_input, mergeProps({
        modelValue: text.value,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => text.value = $event),
        placeholder: "请输入内容",
        clearable: ""
      }, _ctx.$attrs), {
        prepend: withCtx(() => [
          unref(list).length ? (openBlock(), createBlock(_component_el_select, {
            key: 0,
            modelValue: selectValue.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectValue.value = $event),
            placeholder: "请选择",
            onChange: changeHandler
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(unref(list), (item) => {
                  return openBlock(), createBlock(_component_el_option, {
                    key: item.value,
                    label: item.label,
                    value: item.value
                  }, null, 8, ["label", "value"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])) : (openBlock(), createElementBlock("span", _hoisted_1, "URL："))
        ]),
        append: withCtx(() => [
          createVNode(_component_el_button, {
            type: "success",
            icon: unref(position_default),
            onClick: requestURL
          }, null, 8, ["icon"])
        ]),
        _: 1
        /* STABLE */
      }, 16, ["modelValue"]);
    };
  }
});
const URLInput_vue_vue_type_style_index_0_scoped_e536fece_lang = "";
const URLInput = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e536fece"], ["__file", "URLInput.vue"]]);
export {
  URLInput as default
};
