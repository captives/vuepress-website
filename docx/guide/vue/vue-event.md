# Vue Event

@[toc]

## Event

### JavaScript事件的三阶段

- 捕获阶段
- 目标阶段：执行当前对象的事件处理程序
- 冒泡阶段

::: tip
- 阻止事件冒泡： `event.stopPropagation()` 或 `event.cancelBubble = true (IE)`
- 阻止浏览器默认行为：`event.preventDefault()`
::: 

## 事件修饰符
[查看文档](https://cn.vuejs.org/v2/guide/events.html#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6)

在事件处理程序中调用`event.preventDefault()`或`event.stopPropagation()`是非常常见的需求。尽管我们可以在方法中轻松实现这点，但更好的方式是：**方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节**。

为了解决这个问题，Vue.js 为`v-on`提供了事件修饰符。修饰符是由点开头的指令后缀来表示的。

- `.stop`  阻止单击事件继续传播
- `.prevent`   提交事件不再重载页面
- `.capture`  内部元素触发的事件先在此处理，然后才交由内部元素进行处理
- `.self`   只当在 event.target 是当前元素自身时触发处理函数 
- `.once`   点击事件将只会触发一次
- `.passive`   滚动事件的默认行为 (即滚动行为) 将会立即触发
- `.enter`    只有在`key`是`Enter`时调用`vm.submit()`

::: tip 键盘事件修饰符
`.tab`、`.esc`、`.space`、`.up`、`.down`、`.left`、`.right`、`.delete` (捕获“删除”和“退格”键)等等
::: 
 
示例：
- @click.stop : 阻止事件冒泡
- @click.prevent : 阻止事件默认行为
- @click.self : 事件只作用在元素本身，而不是其子元素
- @click.capture : 使用事件捕获模式
- @click.once : 事件只触发一次 2.1.4新增
- @scroll.passive : 告诉浏览器这个事件的默认行为不会被取消 2.3.0新增
- @keyup.enter : 按键修饰符，enter被按下的时候触发
- @click.ctrl : 系统修饰符，Ctrl 被按下的时候触发 2.1.0新增
- @click.ctrl.exact : 有且只有 Ctrl 被按下的时候才触发 2.5.0新增

::: danger 
使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用`v-on:click.prevent.self`会阻止所有的点击，而`v-on:click.self.prevent`只会阻止对元素自身的点击。
::: 


## 自定义事件
[查看文档](https://v3.cn.vuejs.org/guide/component-custom-events.html#%E5%AE%9A%E4%B9%89%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BA%8B%E4%BB%B6)

可以通过`emits`选项在组件上定义已发出的事件。
```js
app.component('custom-form', {
  emits: ['inFocus', 'submit']
})
```

::: tip Tip
建议定义所有发出的事件，以便更好地记录组件应该如何工作。
::: 

### 验证抛出的事件
与`prop`类型验证类似，如果使用**对象语法**而不是**数组语法**定义发出的事件，则可以验证它。

要添加验证，将为事件分配一个函数，该函数接收传递给`$emit`调用的参数，并返回一个布尔值以指示事件是否有效。

```js
app.component('custom-form', {
  emits: {
    // 没有验证
    click: null,

    // 验证submit 事件
    submit: ({ email, password }) => {
      if (email && password) {
        return true
      } else {
        console.warn('Invalid submit event payload!')
        return false
      }
    }
  },
  methods: {
    submitForm() {
      this.$emit('submit', { email, password })
    }
  }
})
```