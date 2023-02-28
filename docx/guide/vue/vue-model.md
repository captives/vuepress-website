# Vue v-model

你可以用`v-model`指令在表单`<input>`、`<textarea>`及`<select>`元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但`v-model`本质上不过是语法糖。它负责监听用户的输入事件来更新数据，并在某种极端场景下进行一些特殊处理。

`v-model`在内部为不同的输入元素使用不同的`property`并抛出不同的事件：
- `text`和`textarea`元素使用`value` property 和`input`事件；
- `checkbox`和`radio`使用`checked`property和`change`事件；
- `select`字段将`value`作为`prop`并将`change`作为事件。

## 表单输入绑定
自定义事件也可以用于创建支持`v-model`的自定义输入组件。记住：
```html
<input v-model="searchText" />
```
等价于
```html
<input :value="searchText" @input="searchText = $event.target.value" />
```
> 更多用法参考[表单输入绑定](https://v3.cn.vuejs.org/guide/forms.html)

## 自定义组件上使用`v-model`
当用在自定义组件上使用`v-model`时：
```html
<custom-input v-model="searchText"></custom-input>
```
等价于: [Vue2 在组件上使用 v-model](#vue2在组件上使用v-model)
```html
<custom-input 
    :value="searchText" 
    @input="searchText = $event">
</custom-input>
```

或者: [Vue3 在组件上使用 v-model](#vue3在组件上使用v-model)
```html
<custom-input 
    :model-value="searchText"
    @update:model-value="searchText = $event">
</custom-input>
```

## Vue2在组件上使用v-model
当用在自定义组件上使用`v-model`时：
```html
<custom-input v-model="searchText"></custom-input>
```
等价于: 
```html
<custom-input 
    :value="searchText" 
    @input="searchText = $event">
</custom-input>
```
为了让它正常工作，这个组件内的`<input>`必须：
- 将其`value`**attribute**绑定到一个名叫`value`的**prop**上
- 在其`input`事件被触发时，将新的值通过自定义的`input`事件抛出

写成代码之后是这样的：
```js
Vue.component('custom-input', {
  props: ['value'],
  template: `<input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >`
})
```
> 更多用法参考 [在组件上使用 v-model](https://cn.vuejs.org/v2/guide/components.html#%E5%9C%A8%E7%BB%84%E4%BB%B6%E4%B8%8A%E4%BD%BF%E7%94%A8-v-model)

## Vue3在组件上使用v-model
当用在自定义组件上使用`v-model`时：
```html
<custom-input v-model="searchText"></custom-input>
```
等价于: 
```html
<custom-input 
    :model-value="searchText"
    @update:model-value="searchText = $event">
</custom-input>
```
为了让它正常工作，这个组件内的`<input>`必须：
- 将其`value`**attribute**绑定到一个名叫`modelValue`的**prop**上
- 在其`input`事件被触发时，将新的值通过自定义的`update:modelValue`事件抛出

写成代码之后是这样的：
```js
app.component('custom-input', {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  template: `<input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >`
})
```

在该组件中实现`v-model`的另一种方法是使用`computed`**property**的功能来定义`getter`和`setter`。get方法应返回`modelValue`**property**，set方法应该触发相应的事件。
```js
app.component('custom-input', {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  template: `<input v-model="value">`,
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) { 
        this.$emit('update:modelValue', value)
      }
    }
  }
})
```

> 更多用法参考 [在组件上使用-v-model](https://v3.cn.vuejs.org/guide/component-basics.html#%E5%9C%A8%E7%BB%84%E4%BB%B6%E4%B8%8A%E4%BD%BF%E7%94%A8-v-model)


## `v-model`参数

默认情况下，组件上的`v-model`使用`modelValue`作为`prop`和`update:modelValue`作为事件。我们可以通过向`v-model`传递参数来修改这些名称：
```html
<my-component v-model:title="bookTitle"></my-component>
```
在本例中，子组件将需要一个`title`**prop**并发出`update:title`事件来进行同步：
```js
app.component('my-component', {
  props: {
    title: String
  },
  emits: ['update:title'],
  template: `<input type="text"
      :value="title"
      @input="$emit('update:title', $event.target.value)"
    >`
})
```

> 更多用法参考 [v-model 参数](https://v3.cn.vuejs.org/guide/component-custom-events.html#v-model-%E5%8F%82%E6%95%B0)


## 多个`v-model`绑定
通过利用以特定 prop 和事件为目标的能力，正如我们之前在`v-model`参数中所学的那样，我们现在可以在单个组件实例上创建多个`v-model`绑定。
每个`v-model`将同步到不同的 prop，而不需要在组件中添加额外的选项：
```html
<user-name
  v-model:first-name="firstName"
  v-model:last-name="lastName"
></user-name>
```
组件写成代码之后是这样的：
```js
app.component('user-name', {
  props: {
    firstName: String,
    lastName: String
  },
  emits: ['update:firstName', 'update:lastName'],
  template: `
    <input type="text"
      :value="firstName"
      @input="$emit('update:firstName', $event.target.value)">

    <input type="text"
      :value="lastName"
      @input="$emit('update:lastName', $event.target.value)">
  `
})
```
> 更多用法参考 [多个v-model绑定](https://v3.cn.vuejs.org/guide/component-custom-events.html#%E5%A4%9A%E4%B8%AA-v-model-%E7%BB%91%E5%AE%9A)

## 处理`v-model`修饰符

学习表单输入绑定时，我们看到`v-model`有内置修饰符
- `.lazy ` - 监听 change 而不是 input 事件
- `.number` - 输入字符串转为有效的数字
- `.trim` - 输入首尾空格过滤

但是，在某些情况下，你可能还需要添加自己的自定义修饰符。

```html
<div id="app">
  <my-component v-model.capitalize="myText"></my-component>
  {{ myText }}
</div>
```

```js
const app = Vue.createApp({
  data() {
    return {
      myText: ''
    }
  }
})

app.component('my-component', {
  props: {
    modelValue: String,
    modelModifiers: {
      default: () => ({})
    }
  },
  emits: ['update:modelValue'],
  methods: {
    emitValue(e) {
      let value = e.target.value
      if (this.modelModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
      }
      this.$emit('update:modelValue', value)
    }
  },
  template: `<input
    type="text"
    :value="modelValue"
    @input="emitValue">`
})

app.mount('#app')
```

添加到组件`v-model`的修饰符将通过`modelModifiers` prop 提供给组件。每当` <input/>`元素触发`input`事件时，我们都将字符串大写。
请注意，当组件的 created 生命周期钩子触发时，`modelModifiers`prop 会包含`capitalize`，且其值为 true 
 ——因为`capitalize`被设置在了写为`v-model`绑定上。

::: tip
对于带参数的 v-model 绑定，生成的 prop 名称将为 arg + "Modifiers"：
::: 

```html
<my-component v-model:description.capitalize="myText"></my-component>
```

```js
app.component('my-component', {
  props: ['description', 'descriptionModifiers'],
  emits: ['update:description'],
  template: `
    <input type="text"
      :value="description"
      @input="$emit('update:description', $event.target.value)">
  `,
  created() {
    console.log(this.descriptionModifiers) // { capitalize: true }
  }
})
```
> 更多用法参考 [处理v-model修饰符](https://v3.cn.vuejs.org/guide/component-custom-events.html#%E5%A4%84%E7%90%86-v-model-%E4%BF%AE%E9%A5%B0%E7%AC%A6)

## Vue .sync

```html
<el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

<el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>

<script>
  export default {
    data() {
      return {
        dialogVisible: false
      };
    }
  };
</script>
```

> :visible指的是属性绑定，表示弹框的显示隐藏，当:visible的值为ture的时候，弹框显示，当为false的时候，弹框隐藏
> 后面的.sync是什么意思呢，指的就是同步动态双向的来表示visible的值，当我们关闭窗口的时候，这个弹框隐藏了，visible的值发生了变化，但是关闭窗口这个动作，我们没法用确定的动作去判断这个值，所以用到了vue中的双向绑定的原则，在vue中统一加上了.sync来表示同步的修改了visible的值。

在有些情况下，我们可能需要对一个 prop 进行“双向绑定”。不幸的是，真正的双向绑定会带来维护上的问题，因为子组件可以变更父组件，且在父组件和子组件都没有明显的变更来源。

这也是为什么我们推荐以 update:myPropName 的模式触发事件取而代之。举个例子，在一个包含 title prop 的假设的组件中，我们可以用以下方法表达对其赋新值的意图：

```js
this.$emit('update:visible', newTitle)
```
然后父组件可以监听那个事件, 并根据需要更新一个本地的数据 property。例如：

```html
<vue-alert
  v-bind:title="dialog.visible"
  v-on:update:title="dialog.visible = $event"
></vue-alert>
```
为了方便起见，我们为这种模式提供一个缩写，即 .sync 修饰符：

```html
<vue-alert v-bind:visible.sync="dialog.visible"></vue-alert>
//简写
<vue-alert :visible.sync="dialog.visible"></vue-alert>
```

当我们用一个对象同时设置多个`prop`的时候，也可以将这个`.sync`修饰符和`v-bind`配合使用：

```html
<vue-alert v-bind.sync="dialog.visible"></vue-alert>
```

这样会把dialog对象中的每一个`property`(如visible) 都作为一个独立的`prop`传进去，然后各自添加用于更新的`v-on`监听器。

::: warning
将`v-bind.sync`用在一个字面量的对象上，例如`v-bind.sync="{ visible: dialog.visible }"`，是无法正常工作的，因为在解析一个像这样的复杂表达式的时候，有很多边缘情况需要考虑。
::: 

