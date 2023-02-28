var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { A as inject, d as defineAsyncComponent, _ as __vitePreload, r as resolveComponent, o as openBlock, n as createBlock, g as withCtx, f as createVNode, e as createTextVNode, t as toDisplayString, a as createElementBlock, F as Fragment, h as renderList } from "./app-3aff2739.js";
import { c as createDecorator, V as Vue, O as Options } from "./vue-class-component.esm-bundler-da1a97ad.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = (str) => str.replace(hyphenateRE, "-$1").toLowerCase();
function Emit(event) {
  return createDecorator((componentOptions, propertyKey) => {
    const emitName = event || hyphenate(propertyKey);
    componentOptions.emits || (componentOptions.emits = []);
    componentOptions.emits.push(emitName);
    const original = componentOptions.methods[propertyKey];
    componentOptions.methods[propertyKey] = function emitter(...args) {
      const emit = (returnValue2) => {
        if (returnValue2 === void 0) {
          if (args.length === 0) {
            this.$emit(emitName);
          } else if (args.length === 1) {
            this.$emit(emitName, args[0]);
          } else {
            this.$emit(emitName, ...args);
          }
        } else {
          args.unshift(returnValue2);
          this.$emit(emitName, ...args);
        }
      };
      const returnValue = original.apply(this, args);
      if (isPromise(returnValue)) {
        returnValue.then(emit);
      } else {
        emit(returnValue);
      }
      return returnValue;
    };
  });
}
function isPromise(obj) {
  return obj instanceof Promise || obj && typeof obj.then === "function";
}
function Inject(options = /* @__PURE__ */ Object.create(null)) {
  return createDecorator((componentOptions, key) => {
    const originalSetup = componentOptions.setup;
    componentOptions.setup = (props, ctx) => {
      const result = originalSetup === null || originalSetup === void 0 ? void 0 : originalSetup(props, ctx);
      const injectedValue = inject(options.from || key, options.default);
      return Object.assign(Object.assign({}, result), { [key]: injectedValue });
    };
  });
}
function Model(propName, propOptions) {
  return createDecorator((componentOptions, key) => {
    const eventName = `update:${propName}`;
    componentOptions.props || (componentOptions.props = /* @__PURE__ */ Object.create(null));
    componentOptions.props[propName] = propOptions;
    componentOptions.emits || (componentOptions.emits = []);
    componentOptions.emits.push(eventName);
    componentOptions.computed || (componentOptions.computed = /* @__PURE__ */ Object.create(null));
    componentOptions.computed[key] = {
      get() {
        return this[propName];
      },
      set(newValue) {
        this.$emit(eventName, newValue);
      }
    };
  });
}
function Prop(propOptions) {
  return createDecorator((componentOptions, key) => {
    componentOptions.props || (componentOptions.props = /* @__PURE__ */ Object.create(null));
    componentOptions.props[key] = propOptions;
  });
}
function Watch(path, watchOptions) {
  return createDecorator((componentOptions, handler) => {
    componentOptions.watch || (componentOptions.watch = /* @__PURE__ */ Object.create(null));
    const watch = componentOptions.watch;
    if (typeof watch[path] === "object" && !Array.isArray(watch[path])) {
      watch[path] = [watch[path]];
    } else if (typeof watch[path] === "undefined") {
      watch[path] = [];
    }
    watch[path].push(Object.assign({ handler }, watchOptions));
  });
}
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
    __publicField(this, "solarTerms");
    __publicField(this, "season");
    __publicField(this, "value");
    __publicField(this, "date");
    __publicField(this, "likes");
    //必须有值
    // 当前组件的私有属性
    __publicField(this, "title", "Hello ");
  }
  valueHandler(value, oldVal) {
    this.requestRemoteData();
  }
  dateHandler(value, oldVal) {
    this.requestRemoteData();
  }
  likesHandler(value, oldVal) {
    this.requestRemoteData();
  }
  //自定义事件，等于 this.$emit('change', "更新的值");
  changeHandler() {
    return "更新的值";
  }
  selectHandler(name) {
    this.value = name;
  }
  requestRemoteData() {
    console.log("远程数据请求已经发送");
  }
};
__decorateClass([
  Inject({ default: () => [] })
], Winter.prototype, "solarTerms", 2);
__decorateClass([
  Inject({ default: () => {
  } })
], Winter.prototype, "season", 2);
__decorateClass([
  Model("modelValue", String)
], Winter.prototype, "value", 2);
__decorateClass([
  Prop([String, Number, Date])
], Winter.prototype, "date", 2);
__decorateClass([
  Prop({ default: () => [] })
], Winter.prototype, "likes", 2);
__decorateClass([
  Watch("value")
], Winter.prototype, "valueHandler", 1);
__decorateClass([
  Watch("date")
], Winter.prototype, "dateHandler", 1);
__decorateClass([
  Watch("likes")
], Winter.prototype, "likesHandler", 1);
__decorateClass([
  Emit("change")
], Winter.prototype, "changeHandler", 1);
Winter = __decorateClass([
  Options({
    name: "ItemE",
    components: {
      // 异步组件
      DateString: defineAsyncComponent(() => __vitePreload(() => import("./DateString-f7aec856.js"), true ? ["assets/DateString-f7aec856.js","assets/vue-class-component.esm-bundler-da1a97ad.js","assets/app-3aff2739.js","assets/framework-cc2b3d55.js"] : void 0))
    },
    computed: {
      currentSolarTerms() {
        let index = this.season && this.season.value || 0;
        index--;
        return this.solarTerms.slice(index * 6, index * 6 + 6);
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
const ItemE = /* @__PURE__ */ _export_sfc(Winter, [["render", _sfc_render], ["__file", "ItemE.vue"]]);
export {
  ItemE as default
};
