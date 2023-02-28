# Vue 知识点总结
::: details 导航目录
@[toc]
:::

## vue 父子组件通讯
### 方式一：事件类型
事件类型基本是通过`prop`向子组件注入数据，子组件通过实例上`$emit`方法向父组件派发数据，来完成交互。
1. `v-model` 是 `v-bind:value`与`v-on:input`的语法糖
    ```html
    <input v-model="name">
    //等价于
    <input v-bind:value="name" v-on:input="name = $event">
    //简写
    <input :value="name" @input="name = $event">
    ```

2. `visible.sync` 是 `v-bind:visible`与`v-on:update.visible`的语法糖 [.sync](vue-event.html)
    ```html
    <div v-bind:visible.sync="show"> 
    //等价于
    <div v-bind:visible="show" v-on:update.visible="show = $event"> 
    //简写
    <div :visible="show" @update.visible="show = $event"> 
    ```
    :::warning 注意：
     带有`.sync`修饰符的`v-bind`不能和表达式一起使用 (例如`v-bind:title.sync="doc.title + '!'"`是无效的)。取而代之的是，你只能提供你想要绑定的属性名，类似`v-model`。
    :::
3. `eventBus` 在全局的Vue实例上添加一个`EventEmitter`实例，通过事件的派发、监听实现（后代组件和祖先组件之间、兄弟组件之间）数据交互；

###  方式二：`provide`和`inject` 提供注入（高阶组件库使用）。
> 这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。

默认提供的属性是非响应的，可通过**提供函数**，而函数的参数是`callback`方式，后代组件和祖先组件之间实现数据交互。

### 方式三：原型链
通过Vue组件树实例进行的传值，常见通过`this.$root` 、`this.$parent`和`this.$refs`、`this.$children`进行组件实例引用；
- `$root` 当前组件树的根Vue实例，如果当前实例没有父实例，此实例将会是自己。
- `$parent` 当前子组件父级实例
- `$refs` 当前组件下持有注册过`ref`属性的所有DOM元素和组件实例

获取到组件实例后，访问实例的
1. [实例属性](https://cn.vuejs.org/v2/api/#%E5%AE%9E%E4%BE%8B-property)
    - `$el` Vue 实例使用的DOM元素。
    - `$data` Vue 实例观察的数据对象。Vue 实例代理了对其 data 对象`property`的访问。
    - `$options` 用于当前 Vue 实例的初始化选项。需要在选项中包含自定义`property`时会有用处：
    - `$props` 当前组件接收到的 props 对象。Vue 实例代理了对其 props 对象`property`的访问。
    - `$parent` 父实例，如果当前实例有的话。
    - `$root` 当前组件树的根 Vue 实例。如果当前实例没有父实例，此实例将会是其自己。
    - `$children` 当前实例的直接子组件。需要注意`$children`并不保证顺序，也不是响应式的。如果你发现自己正在尝试使用`$children`来进行数据绑定，考虑使用一个数组配合`v-for`来生成子组件，并且使用`Array`作为真正的来源。
    - `$slots` 用来访问被插槽分发的内容。每个具名插槽有其相应的`property`(例如：v-slot:foo 中的内容将会在 vm.$slots.foo 中被找到)。default`property`包括了所有没有被包含在具名插槽中的节点，或 v-slot:default 的内容。[查看更多vm-data](https://cn.vuejs.org/v2/api/#vm-data)
    - `$scopedSlots` 用来访问作用域插槽。对于包括默认`slot`在内的每一个插槽，该对象都包含一个返回相应`VNode`的函数。`vm.$scopedSlots`在使用渲染函数开发一个组件时特别有用。
    - `$refs` 一个对象，持有注册过`ref`属性的所有DOM元素和组件实例。
    - `$attrs` 包含了父作用域中不作为 prop 被识别 (且获取) 的 attribute 绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过`v-bind="$attrs"`传入内部组件——在创建高级别的组件时非常有用。
    - `$listeners` 包含了父作用域中的 (不含`.native`修饰器的)`v-on`事件监听器。它可以通过`v-on="$listeners"`传入内部组件——在创建更高层次的组件时非常有用。
2. [实例方法](https://cn.vuejs.org/v2/api/#%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95-%E6%95%B0%E6%8D%AE)
    - `$watch(expOrFn, callback, [options])` 观察`Vue`实例上的一个表达式或者一个函数计算结果的变化。
    - `$set(target, propertyName/index, value)` 是`Vue.set`的**别名**。 向响应式对象中添加一个`property`，并确保这个新`property`同样是响应式的，且触发视图更新。
    - `$delete(target, propertyName/index)` 是`Vue.delete`的**别名**。删除对象的`property`。如果对象是响应式的，确保删除能触发更新视图。
3. [实例事件](https://cn.vuejs.org/v2/api/#%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95-%E4%BA%8B%E4%BB%B6)
    - `$on(event, callback)`     监听当前实例上的自定义事件。事件可以由 vm.$emit 触发。回调函数会接收所有传入事件触发函数的额外参数。
    - `$once(event, callback)`   监听一个自定义事件，但是只触发一次。一旦触发之后，监听器就会被移除。
    - `$off([event, callback])`    移除自定义事件监听器。
        - 如果没有提供参数，则移除所有的事件监听器；
        - 如果只提供了事件，则移除该事件所有的监听器；
        - 如果同时提供了事件与回调，则只移除这个回调的监听器。
    - `$emit(eventName, […args])`   触发当前实例上的事件。附加参数都会传给监听器回调。

### 方式四：Vuex 状态管理

### 方式五：`attrs`和`listeners`
:::tip attrs 官网说明
包含了父作用域中不作为 prop 被识别 (且获取) 的特性绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件——在创建高级别的组件时非常有用
:::

:::tip listeners 官网说明
包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件——在创建更高层次的组件时非常有用。
:::