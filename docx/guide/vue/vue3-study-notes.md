---
cover: '/assets/images/cover.jpeg'
---

<link rel="stylesheet" href="/css/animate.css/4.1.1/animate.min.css"> 

# Vue3 学习笔记

<div id="top"></div>

::: details 目录导航
@[toc]
::: 

## 全局API
### createApp
返回一个提供应用上下文的应用实例。应用实例挂载的整个组件树共享同一个上下文。
```js
const app = Vue.createApp({})
```
你可以在`createApp`之后链式调用其它方法，这些方法可以在[应用API](#应用API) 中找到。

参数：
该函数接收一个根组件选项对象作为第一个参数， 第二个参数，可以将根 prop 传递给应用程序：
```js
const app = Vue.createApp({
  props: ['username'],
  data() {
    return {
      ...
    }
  },
  methods: {...},
  computed: {...}
  ...
  },
  { username: 'Evan' }
)
```
```html
<div id="app">
  <!-- 会显示 'Evan' -->
  {{ username }}
</div>
```
[查看源文档](https://v3.cn.vuejs.org/api/global-api.html#createapp)

### h
返回一个”虚拟节点“，通常缩写为**VNode**：一个普通对象，其中包含向 Vue 描述它应在页面上渲染哪种节点的信息，包括所有子节点的描述。它的目的是用于手动编写的渲染函数：
```js
render() {
  return Vue.h('h1', {}, 'Some title')
}
```
[查看源文档](https://v3.cn.vuejs.org/api/global-api.html#h)

### createRenderer(HostNode, HostElement)
::: details 参数
- HostNode:Node 宿主环境中的节点。
- HostElement:Element 宿主环境中的元素。
::: 

`createRenderer`函数接受两个泛型参数：`HostNode`和`HostElement`，对应于宿主环境中的 ==Node==和==Element==类型。
自定义渲染器可以传入特定于平台的类型，如下所示：
```js
import { createRenderer } from 'vue'
const { render, createApp } = createRenderer<Node, Element>({
  patchProp,
  ...nodeOps
})
```
[查看源文档](https://v3.cn.vuejs.org/api/global-api.html#createRenderer)


### nextTick
将回调推迟到下一个 DOM 更新周期之后执行。在更改了一些数据以等待 DOM 更新后立即使用它。

```js
import { createApp, nextTick } from 'vue'

const app = createApp({
  setup() {
    const message = ref('Hello!')
    const changeMessage = async newMessage => {
      message.value = newMessage
      await nextTick()
      console.log('Now DOM is updated')
    }
  }
})
```

参考：`$nextTick`[实例方法](#$nextTick)

### mergeProps
将包含 VNode prop 的多个对象合并为一个单独的对象。其返回的是一个新创建的对象，而作为参数传递的对象则不会被修改。

可以传递不限数量的对象，后面参数的 property 优先。事件监听器被特殊处理，class 和 style 也是如此，这些 property 的值是被合并的而不是覆盖的。

```js
import { h, mergeProps } from 'vue'
export default {
  inheritAttrs: false,
  render() {
    const props = mergeProps({
      // 该 class 将与 $attrs 中的其他 class 合并。
      class: 'active'
    }, this.$attrs)
    return h('div', props)
  }
}
```

### defineComponent
从实现上看，`defineComponent`只返回传递给它的对象。但是，就类型而言，返回的值有一个合成类型的构造函数，用于手动渲染函数、TSX 和 IDE 工具支持。

```js
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return { count: 1 }
  },
  setup() { .... },
  methods: {
    increment() {
      this.count++
    }
  }
})
```

或者是一个`setup`函数，函数名称将作为**组件名称**来使用:

```js
import { defineComponent, ref } from 'vue'

export default defineComponent(function HelloWorld() {
  const count = ref(0)
  return { count }
})
```

defineComponent函数，对setup函数进行封装，返回options的对象；在TypeScript下，给予了组件正确的参数类型推断 。
[查看源文档](https://v3.cn.vuejs.org/api/global-api.html#defineComponent)

### defineAsyncComponent
创建一个只有在需要时才会加载的异步组件。
参数：
对于基本用法，`defineAsyncComponent`可以接受一个返回`Promise`的工厂函数。`Promise`的`resolve`回调应该在服务端返回组件定义后被调用。你也可以调用`reject(reason)`来表示加载失败。


```js
import { defineAsyncComponent } from 'vue'

const AsyncComp = defineAsyncComponent(() =>
  import('./components/AsyncComponent.vue')
)

app.component('async-component', AsyncComp)
```

当使用[局部注册](https://v3.cn.vuejs.org/guide/component-registration.html#%E5%B1%80%E9%83%A8%E6%B3%A8%E5%86%8C)时，你也可以直接提供一个返回`Promise`的函数：

```js
import { createApp, defineAsyncComponent } from 'vue'

createApp({
  // ...
  components: {
    AsyncComponent: defineAsyncComponent(() =>
      import('./components/AsyncComponent.vue')
    )
  }
})
```

更多高阶用法[查看源文档](https://v3.cn.vuejs.org/api/global-api.html#defineAsyncComponent)、[动态和异步组件](https://v3.cn.vuejs.org/guide/component-dynamic-async.html)

### resolveComponent
::: warning
resolveComponent 只能在`render`或`setup`函数中使用。
::: 

如果在当前应用实例中可用，则允许按名称解析component。

返回一个Component。如果没有找到，则返回接收的参数 name。

```js
const app = Vue.createApp({})
app.component('MyComponent', {
  /* ... */
})
```

```js
import { resolveComponent } from 'vue'
render() {
  const MyComponent = resolveComponent('MyComponent')
}
```
[查看源文档](https://v3.cn.vuejs.org/api/global-api.html#defineComponent)


### resolveDynamicComponent

::: warning
resolveDynamicComponent 只能在 render 或 setup 函数中使用。
::: 

允许使用与`<component :is="">`相同的机制来解析一个`component`。

返回已解析的`Component`或新创建的`VNode`，其中组件名称作为节点标签。如果找不到`Component`，将发出警告。

```js
import { resolveDynamicComponent } from 'vue'
render () {
  const MyComponent = resolveDynamicComponent('MyComponent')
}
```

详细信息[查看源文档](https://v3.cn.vuejs.org/api/global-api.html#defineComponent)、[动态组件](https://v3.cn.vuejs.org/guide/component-dynamic-async.html)

### resolveDirective
[查看源文档](https://v3.cn.vuejs.org/api/global-api.html#resolveDirective)

### withDirectives
[查看源文档](https://v3.cn.vuejs.org/api/global-api.html#withDirectives)



## 应用API
## 组合式API

文档参考 [可复用 & 组合 > 组合式API](https://v3.cn.vuejs.org/guide/composition-api-introduction.html)

学习笔记参考 [组合式API(Composition API)](vue3-composition-api.html)


## 响应式API


# 深入响应原理

当你把一个普通的`JavaScript`对象传入`Vue`实例作为`data`选项，`Vue`将遍历此对象所有的`property`，并使用 `Object.defineProperty`把这些`property`全部转为`getter/setter`。`Object.defineProperty`是`ES5`中一个无法 shim 的特性，这也就是**Vue不支持IE8以及更低版本浏览器**的原因。

这些`getter/setter`对用户来说是不可见的，但是在内部它们让`Vue`能够追踪依赖，在`property`被访问和修改时通知变更。?
 >这里需要注意的是不同浏览器在控制台打印数据对象时对 getter/setter 的格式化并不同，所以建议安装 vue-devtools 来获取对检查数据更加友好的用户界面。


## 检测变化的注意事项
由于`JavaScript`的限制，`Vue`不能检测数组和对象的变化。尽管如此我们还是有一些办法来回避这些限制并保证它们的响应性。
[v2 深入响应式原理](https://cn.vuejs.org/v2/guide/reactivity.html)
[v3 深入响应性原理](https://v3.cn.vuejs.org/guide/reactivity.html)

## 数组

## 对象
Vue无法检测`property`的添加或移除。由于`Vue`会在初始化实例时对`property`执行`getter/setter`转化，所以`property`必须在`data`对象上存在才能让`Vue`将它转换为响应式的。

对于已经创建的实例，Vue不允许动态添加根级别的响应式`property`。但是，可以使用`Vue.set(object, propertyName, value) `方法向嵌套对象添加响应式`property`。
```js
Vue.$set(this.menuTreeData, 'newKey', 'newValue');
```
您还可以使用`vm.$set`实例方法，这也是全局`Vue.set`方法的别名：
```js
this.$set(this.menuTreeData, 'newKey', 'newValue');
```

移除属性可以使用
```js
this.$delete(this.menuTreeData, key);
//或
Vue.$delete(this.menuTreeData, key);
```



# 方法
## 实例方法
### $watch
::: details 参数：
- source：string | Function
- callback：Function | Object
- [options]：Object
- - deep：boolean
- - immediate：boolean
- - flush：string

返回：
- {Function} unwatch  取消侦听函数，用来停止触发回调
::: 

参考 [$watch](https://v3.cn.vuejs.org/api/instance-methods.html#watch)、[Watchers](https://v3.cn.vuejs.org/guide/computed.html#%E4%BE%A6%E5%90%AC%E5%99%A8)、

侦听组件实例上的响应式 property 或函数计算结果的变化。回调函数得到的参数为新值和旧值。我们只能将顶层的 `data`、`prop`或`computed`property 名作为字符串传递。对于更复杂的表达式，用一个函数取代。

当侦听的值是一个对象或者数组时，对其属性或元素的任何更改都不会触发侦听器，因为它们引用相同的对象/数组：
```js
const app = Vue.createApp({
  data() {
    return {
      article: {
        text: 'Vue is awesome!'
      },
      comments: ['Indeed!', 'I agree']
    }
  },
  created() {
    this.$watch('article', () => {
      console.log('Article changed!')
    })

    this.$watch('comments', () => {
      console.log('Comments changed!')
    })
  },
  methods: {
    // 这些方法不会触发侦听器，因为我们只更改了Object/Array的一个property，
    // 不是对象/数组本身
    changeArticleText() {
      this.article.text = 'Vue 3 is awesome'
    },
    addComment() {
      this.comments.push('New comment')
    },

    // 这些方法将触发侦听器，因为我们完全替换了对象/数组
    changeWholeArticle() {
      this.article = { text: 'Vue 3 is awesome' }
    },
    clearComments() {
      this.comments = []
    }
  }
}).mount('#app')

const unwatch = vm.$watch('a', cb)
// 停掉观察者
unwatch()
```

***option.deep***
为了发现对象内部值的变化，可以在选项参数中指定 deep: true。这个选项同样适用于监听数组变更。
::: warning 注意: 
当变更(不是替换)对象或数组并使用 deep 选项时，**旧值**将与**新值**相同，因为它们的引用指向同一个对象/数组。Vue 不会保留变更之前值的副本。
::: 

***option.immediate***
在参数中指定`immediate: true`将立即以表达式当前的值来触发回调：
```js
vm.$watch('a', callback, {
  immediate: true
})
// 立即以 `a` 的当前值触发 `callback`
```
::: warning 注意：
在带有`immediate`选项时，你不能在第一次回调时取消侦听给定的property。

参考：[$watch](https://v3.cn.vuejs.org/api/instance-methods.html#watch)
::: 
***option. flush***
==flush==选项可以更好地控制回调的时间。它可以设置为`pre`、`post`或`sync`。
默认值是`pre`，指定的回调应该在渲染前被调用。它允许回调在模板运行前更新其他值。
`post`值是可以用来将回调推迟到渲染之后的。如果回调需要通过`$refs`访问更新的DOM或子组件，那么则使用该值。
如果==flush==被设置为`sync`，一旦值发生了变化，回调将被同步调用。
对于 `pre`、`post`回调使用队列进行缓冲。回调只被添加到队列中一次，即使观察值变化了多次。值的中间变化将被跳过，不会传递给回调。

缓冲回调不仅可以提高性能，还有助于保证数据的一致性。在执行数据更新的代码完成之前，侦听器不会被触发。

`sync`侦听器应少用，因为它们没有这些好处。
更多关于 flush 的信息，请参阅[副作用刷新时机](https://v3.cn.vuejs.org/guide/reactivity-computed-watchers.html#%E5%89%AF%E4%BD%9C%E7%94%A8%E5%88%B7%E6%96%B0%E6%97%B6%E6%9C%BA).

### $emit
::: details 参数
- eventName：string
- [...args]
::: 
触发当前实例上的事件。附加参数都会传给监听器回调。
```js
app.component('welcome-button', {
  emits: ['welcome'],
  template: `<button v-on:click="$emit('welcome')"> Click me </button>`
})
```
::: warning
自定义事件时，建议定义所有发出的事件；参考：[自定义事件](https://v3.cn.vuejs.org/guide/component-custom-events.html)、[使用事件抛出一个值](https://v3.cn.vuejs.org/guide/component-basics.html#%E4%BD%BF%E7%94%A8%E4%BA%8B%E4%BB%B6%E6%8A%9B%E5%87%BA%E4%B8%80%E4%B8%AA%E5%80%BC)
::: 

### $forceUpdate
迫使组件实例重新渲染。
::: warning 注意：
它仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。
::: 
### $nextTick
::: details 参数
- callback：Function
::: 
将回调延迟到下次 DOM 更新循环之后执行。
::: warning 注意：
组件内`nextTick`跟全局方法`nextTick`一样，不同的是回调的`this`自动绑定到调用它的实例上。
::: 

参考：[nextTick](https://v3.cn.vuejs.org/api/global-api.html#nexttick)


# 指令

## 常用指令
1. [v-text](https://v3.cn.vuejs.org/api/directives.html#v-text)
```js
<span v-text="msg"></span>
<!-- 和下面的一样 -->
<span>{{msg}}</span>
```
2. [v-html](https://v3.cn.vuejs.org/api/directives.html#v-html)
3. [v-show](https://v3.cn.vuejs.org/api/directives.html#v-show)
4. [v-if](https://v3.cn.vuejs.org/api/directives.html#v-if)
5. [v-else](https://v3.cn.vuejs.org/api/directives.html#v-else)
6. [v-else-if](https://v3.cn.vuejs.org/api/directives.html#v-else-if)
7. [v-for](https://v3.cn.vuejs.org/api/directives.html#v-for)
8. [v-on](https://v3.cn.vuejs.org/api/directives.html#v-on) （abbr:`@`）
9. [v-bind](https://v3.cn.vuejs.org/api/directives.html#v-bind) （abbr:`:`）
10. [v-model](https://v3.cn.vuejs.org/api/directives.html#v-model) [整理笔记](vue-model.html)
11. [v-once](https://v3.cn.vuejs.org/api/directives.html#v-once)
12. [v-is](https://v3.cn.vuejs.org/api/directives.html#v-is)

**[v-slot](https://v3.cn.vuejs.org/api/directives.html#v-slot)** （abbr:`#`）
可放置在函数参数位置的 JavaScript 表达式 (在支持的环境下可使用解构)。可选，即只需要在为插槽传入 prop 的时候使用。
提供具名插槽或需要接收 prop 的插槽。

```vue
<!-- 具名插槽 -->
<base-layout>
  <template v-slot:header>
    Header content
  </template>

  <template v-slot:default>
    Default slot content
  </template>

  <template v-slot:footer>
    Footer content
  </template>
</base-layout>

<!-- 接收 prop 的具名插槽 -->
<infinite-scroll>
  <template v-slot:item="slotProps">
    <div class="item">
      {{ slotProps.item.text }}
    </div>
  </template>
</infinite-scroll>

<!-- 接收 prop 的默认插槽，使用了解构 -->
<mouse-position v-slot="{ x, y }">
  Mouse position: {{ x }}, {{ y }}
</mouse-position>
```

扩展阅读：[组件 - 插槽](https://v3.cn.vuejs.org/guide/component-slots.html)

```js
v-slot:abc="scope" 
```
等价于
```js
slot="abc" slot-scope="scope"
```

```vue
<template v-slot:abc="scope">
    A： {{scope.data}}
</template>

<ul slot="abc" slot-scope="scope">
   <li>B：{{scope.data}}</li>
</ul>
```


**[v-pre](https://v3.cn.vuejs.org/api/directives.html#v-pre)**
跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。

::: tip
不需要表达式；跳过大量没有指令的节点会加快编译。
::: 

```html
<!-- 抛出错误 -->
<span>{ { this will not be compiled } }</span>

<!-- 正常运行，不编译表达式直接显示内容 -->
<span v-pre>{ { this will not be compiled } }</span>

<!-- 正常运行，不编译表达式，HTML正常被浏览器解析 -->
<span v-pre> { { title } } <font color="red">文字</font> </span>
```


**[v-cloak](https://v3.cn.vuejs.org/api/directives.html#v-cloak)**
cloak(英 [kləʊk]) 遮盖; 掩盖; 伪装; 幌子
这个指令保持和元素实例的关联，直到关联组件实例结束被移除。
::: tip
不需要表达式。
::: 
```html
<div v-cloak>
  {{ message }}
</div>
```
```css
[v-cloak] {
  display: none;
}
```

当网络较慢，网页还在加载 Vue.js ，而导致 Vue 来不及渲染，这时页面就会显示出 Vue 源代码`{{ message }}`。
我们可以使用 v-cloak 指令来解决差值表达式闪烁的问题（即：可以隐藏未编译的标签直到实例准备完毕）。

例子：页面加载完成后，延迟3秒挂载vue.js，观察v-cloak修饰的组件区别

:::: code-group
:::code-group-item style
```css
<style>
[v-cloak] {
    color: red;
    opacity: 0.25;
    font-weight: bold;
    font-size: 2em;
}
</style>
```
:::

:::code-group-item html
```html
<div id="example3">
    使用 v-cloak：
    <span v-cloak>{{title}}</span>
    未使用v-cloak：
    <span>{{title}}</span>
</div>
```
:::

:::code-group-item script
```js
<script setup>
const app3 = Vue.createApp({
    data() {
        return {
            title: "helloword",
        }
    }
});

setTimeout(()=>{
  app3.mount('#example3')
}, 3000);
</script>
```
:::
::::



## 特殊指令

### key : number | string

[查看文档](https://v3.cn.vuejs.org/api/special-attributes.html#key)

key 的特殊 attribute 主要用在 Vue 的虚拟 DOM 算法，在新旧 nodes 对比时辨识 VNodes。
有相同父元素的子元素必须有独特的 key。重复的 key 会造成渲染错误。

最常见的用例是结合 v-for：

```js
<ul>
  <li v-for="item in items" :key="item.id">...</li>
</ul>
```

它也可以用于强制替换元素/组件而不是重复使用它。当你遇到如下场景时它可能会很有用：
- 完整地触发组件的生命周期钩子
- 触发过渡

例如：

```js
<transition>
  <span :key="text">{{ text }}</span>
</transition>
```

::: tip
当 text 发生改变时，总是会被替换而不是被修改，因此会触发过渡。
::: 


例子：
<div id="example1" class="clock">
    <transition mode="in-out" 
        enter-active-class="animate__animated animate__flipInX" 
        leave-active-class="animate__animated animate__flipInX">
        <span :key="time">{{time}}</span>
    </transition>
</div>

<style>
.clock {
    display: block;
    position: relative;
    height: 50px;
    margin:0;
}

.clock span {
    display: inline-block;
    position: absolute;
    background: #fff;
    padding: 5px 20px;
}
</style>

```js
<script setup>
Vue.createApp({
    data() {
        return {
            time: "00:00"
        }
    },
    created() {
        setInterval(() => {
            this.time = new Date().toLocaleString("chinese", { hour12: false });
        }, 500);
    }
}).mount('#example1');
</script>
```

### ref : string | Function

[查看文档](https://v3.cn.vuejs.org/api/special-attributes.html#ref)

`ref`被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的`$refs`对象上。如果在普通的==DOM==元素上使用，引用指向的就是==DOM==元素；如果用在子组件上，引用就指向组件实例：
```js
<!-- vm.$refs.p 会是 DOM 节点 -->
<p ref="p">hello</p>

<!-- vm.$refs.child 会是子组件实例 -->
<child-component ref="child"></child-component>

<!-- 当动态绑定时，我们可以将ref定义为回调函数，显式地传递元素或组件实例 -->
<child-component :ref="(el) => child = el"></child-component>
```
当 v-for 用于元素或组件的时候，引用信息将是包含 DOM 节点或组件实例的数组。

::: warning 关于 ref 注册时间的重要说明
因为 ref 本身是作为渲染结果被创建的，在初始渲染的时候你不能访问它们 - **它们还不存在**！
`$refs`也是非响应式的，因此你不应该试图用它在模板中做数据绑定。
::: 
参考[子组件Refs](https://v3.cn.vuejs.org/api/special-attributes.html#key)

### is : string | Object (component’s options object)
[查看文档](https://v3.cn.vuejs.org/api/special-attributes.html#is) 、[动态组件基础](https://v3.cn.vuejs.org/guide/component-basics.html#%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6)、[动态组件 & 异步组件](https://v3.cn.vuejs.org/guide/component-dynamic-async.html)。

扩展 html标签的限制, 动态切换并渲染指定的组件



# 组件

## 内置组件

### Teleport

[查看文档](https://v3.cn.vuejs.org/guide/teleport.html)

Vue 鼓励我们通过将 UI 和相关行为封装到组件中来构建 UI。我们可以将它们嵌套在另一个内部，以构建一个组成应用程序 UI 的树。

- `to` - ==string==。需要`prop`，必须是有效的查询选择器或`HTMLElement`(如果在浏览器环境中使用)。指定将在其中移动 `<teleport>` 内容的目标元素
```js
<!-- 正确 -->
<teleport to="#some-id" />
<teleport to=".some-class" />
<teleport to="[data-teleport]" />

<!-- 错误 -->
<teleport to="h1" />
<teleport to="some-string" />
```

- `disabled` - ==boolean==。此可选属性可用于禁用 `<teleport>` 的功能，这意味着其插槽内容将不会移动到任何位置，而是在您在周围父组件中指定了 `<teleport>` 的位置渲染。

```js
<teleport to="#popup" :disabled="displayVideoInline">
  <video src="./my-movie.mp4">
</teleport>
```
::: warning
请注意，将移动实际的 DOM 节点，而不是被销毁和重新创建，并且它还将保持任何组件实例的活动状态。所有有状态的 HTML 元素 (即播放的视频) 都将保持其状态。
::: 

例子：

<style>
.video-item {
    position: relative;
    width: 240px;
    height: 135px;
    display: inline-block;
    margin-top: 5px;
    margin-left: 5px;
    background: #eee;
    z-index: 999;
}

.video-item video {
    padding: 0;
    margin: 0;
}

.video-item::before {
    content: 'come here';
    color: #bababa;
    width: 100%;
    display: block;
    text-align: center;
    position: absolute;
}
</style>

<div id="example2">
    <div id="seat" class="video-item" @click.self="goHandler"> </div>
    <div class="video-item" @click.self="goHandler"></div>
    <teleport :to="target">
        <video :src="$withBase('/assets/medias/Piper_720P.mp4')" class="video-item" controls loop webkit-playsinline="webkit-playsinline" playsinline="true"></video>
    </teleport>
    <div class="video-item" @click.self="goHandler"></div>
    <div class="video-item" @click.self="goHandler"></div>
    <div>
        <button @click="moveHandler('body')">移动到body</button>
        <button @click="moveHandler('#top')">移动到顶部</button>
        <button @click="moveHandler('#example1')">移动到中间</button>
        <button @click="moveHandler('.bottom')">移动到底部</button>
        <small>video在移动后播放状态不会暂停</small>
    </div>
</div>

<script>
export default {
    name: "Vue3Example",
    data () {
        return {
            message:"Hello Vue 3 ~",
            time: "00:00",
            target: "#app",
        }
    },
    methods: {
        goHandler (event) {
            this.moveHandler(event.target);
        },
        moveHandler (el) {
            this.target = el;
        },
    },
    created() {
        setInterval(() => {
            this.time = new Date().toLocaleString("chinese", { hour12: false });
        }, 500);
    }
}
</script>

<div class="bottom"></div>

```js
Vue.createApp({
    data() {
        return {
            target: "#seat",
        }
    },
    methods: {
        goHandler(event) {
          this.moveHandler(event.target);
        },
        moveHandler(el) {
          this.target = el;
        },
    }
}).mount('#example2');
```
## 函数式组件
更多阅读参考 [函数式组件](https://vue-loader.vuejs.org/zh/guide/functional.html)
[函数式渲染上下文](https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6)

特点：
- 没有管理任何状态
- 没有实例 (没有`this`上下文)
- 内部没有生命周期方法
- 轻量,渲染性能高, 适合只依赖于外部数据传递而变化的组件(展示组件，无逻辑和状态修改)
- 在`template`标签里标明`functional`属性
- 被引用时组件上的所有属性，可以通过`props.xxx`的形式访问
- 不需要`script`标签
- 子组件`parent`是被引用时的父组件对象实例

::::code-group
:::code-group-item Page.vue
```vue
 <template>
      <div>
        <List :items="['Wonderwoman', 'Ironman']" :itemClick="item => (selectedValue = item)" ></List>
        <p>select value: {{ selectedValue }}</p>
      </div>
</template>
<script>
import List from './List.vue'
export default {
      name: "App",
      data: () => ({ selectedValue: "" }),
      components: { List },
      methods: {
          clickHandler (event) {
              console.log('-------', event);
          }
      }
};
</script>
```
:::

:::code-group-item List.vue
```vue
<template functional>
      <div>
            <!-- 调用组件引用时属性下的方法 -->
            <p v-for="(item,index) in props.items" :key="index" @click="props.itemClick(item)" />
            <!-- 调用父组件下的方法 -->
            <button @click="parent.clickHandler(1111)"> 调用父组件方法 </button>
      </div>
</template>
```
:::
:::



## 资源加载

### vite 配置下加载指定目录下的文件

```js
 const modules = import.meta.globEager('/src/**/*.{png,svg,jpg,jpeg}')
```