# Vue3 组合式API(Composition API)

> 文档参考[可复用 & 组合 > 组合式API](https://v3.cn.vuejs.org/guide/composition-api-introduction.html)

::: details 目录导航
@[toc] 本文大纲
:::

使用 (`data`、`computed`、`methods`、`watch`) 组件选项来组织逻辑通常都很有效。然而，当我们的组件开始变得更大时，逻辑关注点的列表也会增长。尤其对于那些一开始没有编写这些组件的人来说，这会导致组件难以阅读和理解。处理这样的大型应用时，**共享和重用**代码变得尤为重要。

## setup 组件选项

我们需要做的是把**同一个逻辑关注点**相关代码收集在一起,而这正是*组合式 API*使我们能够做到的; 在Vue组件中，我们将此位置称为`setup`。
新的`setup`选项在组件创建之前执行，一旦`props`被解析，就将作为组合式API的入口。
处理大型应用时，共享和重用代码

`setup`选项是一个接收`props`和`context`的函数，我们将`setup`返回的所有内容都暴露给组件的其余部分 (计算属性`computed`、方法`methods`、生命周期钩子等等) 以及组件的模板。


## 带`ref`的响应式变量
在 Vue 3.0 中，我们可以通过一个新的`ref`函数使任何响应式变量在任何地方起作用。

`ref`接收参数并将其包裹在一个带有`value` *property*的对象中返回，然后使用该*property*访问或更改响应式变量的值：

```js{4-6,8-9}
import { ref } from 'vue';
export default {
    setup (props, context) {
        let count = ref(1);
        console.log(counter) // { value: 1 }
        console.log(counter.value) // 1

        count.value += 1;
        console.log(counter.value) // 2
        // 这里返回的任何内容都可以用于组件的其余部分
        return {
            count
        }
    }
}
```

```html
<h1>{{count}}</h1>
```
为了保持JavaScript 中不同数据类型的行为统一，我们需要把基本数据类型（`Number`、`Boolean`、`String`）转换为引用类型，所以才会封装到一个对象中。
![基本数据类型引用](https://blog.penjee.com/wp-content/uploads/2015/02/pass-by-reference-vs-pass-by-value-animation.gif)
:::tip 提示
通过`ref`可以创建了一个**响应式引用**。在整个组合式 API 中会经常使用**引用**的概念。
:::

## 在`setup`内注册生命周期钩子
为了使组合式 API 的功能和选项式 API 一样完整，我们还需要一种在`setup`中注册[生命周期钩子](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html)的方法。

- **beforeCreate** 在实例初始化之后、进行数据侦听和事件/侦听器的配置之前同步调用。
- **created** 在实例创建完成后被立即同步调用。数据侦听、计算属性、方法、事件/侦听器的回调函数已被配置完毕, 挂载阶段还没开始，且`$el` *property*目前尚不可用
- **beforeMount** 在挂载开始之前被调用：相关的`render`函数首次被调用。
- **mounted** 在实例挂载完成后被调用，这时候传递给 app.mount 的元素已经被新创建的 vm.$el 替换了。
- **beforeUpdate** 在数据发生改变后，DOM 被更新之前被调用。
- **updated** 在数据更改导致的虚拟 DOM 重新渲染和更新完毕之后被调用。
- **activated** 被`keep-alive`缓存的组件激活时调用。
- **deactivated** 被`keep-alive`缓存的组件失活时调用。
- **beforeUnmount** 在卸载组件实例之前调用。在这个阶段，实例仍然是完全正常的。
- **unmounted** 卸载组件实例后调用。此钩子调用时，组件实例的所有指令都被解除绑定，所有事件侦听器都被移除，所有子组件实例被卸载。
- **errorCaptured** 在捕获一个来自后代组件的错误时被调用。
- **renderTracked** 跟踪虚拟 DOM 重新渲染时调用。
- **renderTriggere** 当虚拟 DOM 重新渲染被触发时调用。

**组合式API**上的生命周期钩子与**选项式API**的名称相同，但前缀为`on:`即`mounted`看起来会像`onMounted`。

这些函数接受一个回调，当钩子被组件调用时，该回调将被执行。
```js{9-11,13-15}
import { ref, onMounted, onUpdated } from 'vue';
export default {
    setup (props, context) {
        let enabled = ref(true);
        setInterval(() => {
            enabled.value = !enabled.value;
        }, 1000);

        onMounted(() => {
            console.log('初始化完成...');
        })

        onUpdated(() => {
            console.log('视图更新了~~~~');
        })

        return { enabled }
    }
}
```

## `watch`响应式更改
就像我们在组件中使用`watch`选项并在属性上设置侦听器一样，我们也可以使用从 Vue 导入的`watch`函数执行相同的操作。
它接受 3 个参数：
- 一个想要侦听的响应式引用或 getter 函数
- 一个回调
- 可选的配置选项

```js
import { ref, watch } from 'vue'
const counter = ref(0)
watch(counter, (newValue, oldValue) => {
    console.log('The new counter value is: ' + counter.value)
})
```
等效的选项式API：
```js
export default {
    data () {
        return {
            counter: 0
        }
    },
    watch: {
        counter (newValue, oldValue) {
            console.log('The new counter value is: ' + this.counter)
        }
    }
}
```
有关`watch`的详细信息，请参阅[深入指南](https://v3.cn.vuejs.org/guide/reactivity-computed-watchers.html#watch)。

## 独立的 computed 属性
与`ref`和`watch`类似，也可以使用从Vue导入的`computed`函数在`Vue`组件外部创建计算属性。让我们回到`counter`的例子：
```js
import { ref, computed } from 'vue';
const counter = ref(0);
const twiceTheCounter = computed(() => counter.value * 2);

counter.value++;
console.log(counter.value); // 1
console.log(twiceTheCounter.value); // 2
```

## defineProps 和 defineEmits
在`<script setup>`中必须使用`defineProps`和`defineEmits`API来声明`props`和`emits`，它们具备完整的类型推断并且在`<script setup>`中是直接可用的：
