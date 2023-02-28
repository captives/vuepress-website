---
sidebar: auto
title: "Markdown 样式模板"
cover: '/assets/images/cover.jpeg'
description: "这是文档的描述内容"
---

# 样式模板

## 目录
[`[toc]`组件使用](https://v2.vuepress.vuejs.org/zh/reference/plugin/toc.html)
``` html
::: details 目录导航
[[toc]] 目录大纲
:::

::: details 目录导航
@[toc] 目录大纲
:::
```


::: details 目录导航
[[toc]] 目录大纲
:::

::: details 目录导航
@[toc] 目录大纲
:::


## 标题
```md
# 标题1
标题1
====

## 标题2
标题2
----

### 标题3
#### 标题4
##### 标题5
###### 标题6
```
# 标题1
标题1
====

## 标题2
标题2
----
### 标题3
#### 标题4
##### 标题5
###### 标题6


## 粗体
```md
**粗体**   __粗体__
```
**粗体**  __粗体__
## 斜体
```md
*斜体*   _斜体_
```
*斜体*  _斜体_

## 标记

```md
==标记==
```
==标记==

## 上下角标
```md
上角标 x^2^
下角标 H~2~0
```
上角标 x^2^
下角标 H~2~0

## 下划线,中划线
```md
++下划线++    ~~中划线~~
```
++下划线++   ~~中划线~~

## 分割线
```md
***
---
```
***
---



## 链接
```md
[链接文本](captives.github.com)
[链接网站](https://captives.github.io)
![网站logo图](/assets/logo.png)
```
[链接文本](captives.github.com)
[链接网站](https://captives.github.io)
![网站logo图](/assets/logo.png)


## 有序列表
```md
1. 任务准备
2. 任务准备
3. 任务准备
```
1. 任务准备
2. 任务准备
3. 任务准备

## 无序列表
```md
- 任务准备
- 任务准备
- 任务准备
```
- 任务准备
- 任务准备
- 任务准备

## 任务清单
```md
**购物清单**

- [ ] 一次性水杯
- [x] 西瓜
- [ ] 豆浆
- [x] 可口可乐
- [ ] 小茗同学
```

**购物清单**

- [ ] 一次性水杯
- [x] 西瓜
- [ ] 豆浆
- [x] 可口可乐
- [ ] 小茗同学

## 段落引用
```md
> 一级
>> 二级
>>> 三级

```
> 一级
>> 二级
>>> 三级

## 容器语法
```md
::: <type> [info]
[content]
:::
```
type 是必须的，支持：提示[`tip`]、建议[`success`]、警告[`warning`]、危险[`danger`]、折叠块[`details`]

```md {1,4,6,9,11,14,16,19}
::: tip
- 阻止事件冒泡： `event.stopPropagation()` 或 `event.cancelBubble = true (IE)`
- 阻止浏览器默认行为：`event.preventDefault()`
:::

::: success
- 阻止事件冒泡： `event.stopPropagation()` 或 `event.cancelBubble = true (IE)`
- 阻止浏览器默认行为：`event.preventDefault()`
:::

::: warning
- 阻止事件冒泡： `event.stopPropagation()` 或 `event.cancelBubble = true (IE)`
- 阻止浏览器默认行为：`event.preventDefault()`
:::

::: danger
- 阻止事件冒泡： `event.stopPropagation()` 或 `event.cancelBubble = true (IE)`
- 阻止浏览器默认行为：`event.preventDefault()`
:::
``` 

::: tip
- 阻止事件冒泡： `event.stopPropagation()` 或 `event.cancelBubble = true (IE)`
- 阻止浏览器默认行为：`event.preventDefault()`
:::

::: success
- 阻止事件冒泡： `event.stopPropagation()` 或 `event.cancelBubble = true (IE)`
- 阻止浏览器默认行为：`event.preventDefault()`
:::

::: warning
- 阻止事件冒泡： `event.stopPropagation()` 或 `event.cancelBubble = true (IE)`
- 阻止浏览器默认行为：`event.preventDefault()`
:::

::: danger
- 阻止事件冒泡： `event.stopPropagation()` 或 `event.cancelBubble = true (IE)`
- 阻止浏览器默认行为：`event.preventDefault()`
:::

## 折叠块
```md
::: details 查看更多
- 阻止事件冒泡： `event.stopPropagation()` 或 `event.cancelBubble = true (IE)`
- 阻止浏览器默认行为：`event.preventDefault()`
:::
```

::: details 查看更多
- 阻止事件冒泡： `event.stopPropagation()` 或 `event.cancelBubble = true (IE)`
- 阻止浏览器默认行为：`event.preventDefault()`
:::

## 代码
````html
```html
  代码段落
```
`代码块`
````
```html
代码段落
```
`代码块`

### 代码高亮行
你可以在代码块添加`:line-numbers` / `:no-line-numbers`标记来覆盖配置项中的设置。
除了单行以外，你也可指定多行，行数区间，或是两者都指定。
- 行数区间: 例如 {5-8}, {3-10}, {10-17}
- 多个单行: 例如 {4,7,9}
- 行数区间与多个单行: 例如 {4,7-13,16,23-27,40}
- 数字和`,`前后不可以有空格

``` js {2,9-11,17}
//需求：编写方法，实现冒泡
var arr = [2, 12, 32, 31, 65, 45, 3, 6, 12, 43, 35];
//外层循环，控制趟数，每一次找到一个最大值
for (var i = 0; i < arr.length - 1; i++) {
    // 内层循环,控制比较的次数，并且判断两个数的大小
    for (var j = 0; j < arr.length - 1 - i; j++) {
        // 如果前面的数大，放到后面(当然是从小到大的冒泡排序)
        if (arr[j] > arr[j + 1]) {
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log(arr);  
// [2, 3, 6, 12, 12, 31, 32, 35, 43, 45, 65]
```

## 导入代码块
你可以使用下面的语法，从文件中导入代码块：
```md
<!-- 最简单的语法 -->
@[code](../foo.js)
```
如果你只想导入这个文件的一部分：
```md
<!-- 仅导入第 1 行至第 10 行 -->
@[code{1-10}](../foo.js)
```
代码语言会根据文件扩展名进行推断，但我们建议你显式指定：
```md
<!-- 指定代码语言 -->
@[code js](../foo.js)
```
实际上，[] 内的第二部分会被作为代码块标记来处理，因此在上面 代码块 章节中提到的语法在这里都可以支持：
```md
<!-- 行高亮 -->
@[code js{2,4-5}](../foo.js)
```

在配置文件`config.js`中添加：
```js
markdown: {
    importCode: {
        handleImportPath: (str) =>
            str.replace(/^@src/, path.resolve(__dirname, './../../')),
    },
}
```
文档中使用：
```md
@[code](@src/views/Vuepress.vue)
```
即可加载源码,内容如下
@[code](@src/views/Vuepress.vue)

更多使用方式参考[VuePress 导入代码块](https://v2.vuepress.vuejs.org/zh/guide/markdown.html#%E5%AF%BC%E5%85%A5%E4%BB%A3%E7%A0%81%E5%9D%97)


## 表格
```html
| 表格标题1 | 表格标题2 | 表格标题3 |
| :-------- | :-------: | --------: |
| 左对齐    |   居中    |    右对齐 |
| --\|--       |    --\|--    |      --\|-- |
```
| 表格标题1 | 表格标题2 | 表格标题3 |
| :-------- | :-------: | --------: |
| 左对齐    |   居中    |    右对齐 |
| --\|--       |    --\|--    |      --\|-- |


# Vue 语法
Vuepress可以直接使用Vue语法
## Vue表达式
``` js
一加一等于： {{ 1 + 1 }}
<span v-for="i in 3"> span: {{ i }} </span>
```

一加一等于： {{ 1 + 1 }}
<span v-for="i in 3"> span: {{ i }} </span>

## Vue模块

参考 [高级配置 > Vue环境变量](#vue环境变量)

## Vue 模块内Sass语法
Vuepress默认使用sass，可以在文档内通过`<style></style>`标签对直接书写sass语法，不支持 `scoped`

```scss
<!-- 注释： 页面内样式 -->
<style lang="scss">
    .poetry-home .home > header {
        margin-top: 20%;
        h1 {
            font-family: "华文行楷";
            font-size: 6rem;
        }
    }
</style>
```
<style lang="scss">
    .poetry-home .home > header {
        margin-top: 20%;
        h1 {
            font-family: "华文行楷";
            font-size: 6rem;
        }
    }
</style>

## 注释

```htmD
<!-- 注释： 此段区域内容不输出，但显示在DOM结构内 -->
```
<!-- 注释： 此段区域内容不输出，但显示在DOM结构内 -->

<hr/>

# 分组

## 代码组合
````md
:::: code-group
::: code-group-item utils/foo.js
```js
const foo = 'foo'
```
:::
::: code-group-item utils/bar.ts
```ts
const bar:string = 'bar'
```
:::
::::
````

:::: code-group
::: code-group-item utils/foo.js
```js
const foo = 'foo'
```
:::
::: code-group-item utils/bar.ts
```ts
const bar:string = 'bar'
```
:::
::::

## HTML分组

```html
<div style="columns: 3;">
严格地说，这个集子很难说是“自选集”。“自选集”应该是从大量的作品里选出自己认为比较满意的。我不能做到这一点。一则是我的作品数量本来就少，挑得严了，就更会所剩无几；二则，我对自己得作品无偏爱。有以为外国的汉学家发给我一张调查表，其中一栏是：“你认为自己最具有代表性的作品是哪几篇”，我实在不知道如何填。我的自选集不是选出了多少篇，而是从我的作品里剔除了一些篇。这不像农民田间选种，倒有点像老太太择（zhai）菜。老太太择菜是很宽容的，往往把择掉的黄叶、桔梗拿起来再看看，觉得凑活着还能吃，于是又搁回到好菜的一堆里。常言说：剪刀篮里的都是菜，我对自选集就有一点是这样。
<br><br>
汪曾祺先生 一九八六年十二月十四日序于北京蒲黄榆路寓居~
</div>
```

<div style="columns: 3;">
严格地说，这个集子很难说是“自选集”。“自选集”应该是从大量的作品里选出自己认为比较满意的。我不能做到这一点。一则是我的作品数量本来就少，挑得严了，就更会所剩无几；二则，我对自己得作品无偏爱。有以为外国的汉学家发给我一张调查表，其中一栏是：“你认为自己最具有代表性的作品是哪几篇”，我实在不知道如何填。我的自选集不是选出了多少篇，而是从我的作品里剔除了一些篇。这不像农民田间选种，倒有点像老太太择（zhai）菜。老太太择菜是很宽容的，往往把择掉的黄叶、桔梗拿起来再看看，觉得凑活着还能吃，于是又搁回到好菜的一堆里。常言说：剪刀篮里的都是菜，我对自选集就有一点是这样。
<br><br>
汪曾祺先生 一九八六年十二月十四日序于北京蒲黄榆路寓居~
</div>

## Frontmatter

本章节中的 Frontmatter 会在所有类型的页面中生效。
继承[Vuepress > 参考 > 默认主题 > Frontmatter](https://v2.vuepress.vuejs.org/zh/reference/frontmatter.html)下所有功能，以下属性为官方功能的扩展

### cover
页面头图，添加图片地址，可自动在页面顶部显示

### cover-fit/coverFit
页面头图填充模式，参考css样式`background-size`属性

## 高级配置

### Vue环境变量

<b>{{ title }}</b>

<script  setup>
    import { computed, defineAsyncComponent } from 'vue';
    const DateString = defineAsyncComponent(() => import('@/views/components/DateString.vue'));
    //使用全局常量
    const title = computed(()=> "API：" + VUE_APP_API);
</script>

脚本源码：
```vue
<b>{{ title }}</b>
<script  setup>
import { computed } from 'vue';
const title = computed(()=> "API：" + VUE_APP_API);
</script>
```

在`config.js`配置中添加`define`字段：
```js
  define: {
    __GLOBAL_BOOLEAN__: true,
    __GLOBAL_STRING__: 'foobar',
    __GLOBAL_OBJECT__: { foo: 'bar' },
  },
```
在文档的`<script>`中,即可访问：
```js
console.log(__GLOBAL_BOOLEAN__); // true
console.log(__GLOBAL_STRING__); // 'foobar'
console.log(__GLOBAL_OBJECT__); // "{ foo: 'bar' }"
```
文章参考[插件API > 开发Hooks > define](https://v2.vuepress.vuejs.org/zh/reference/plugin-api.html#define)
[向客户端代码传递数据 > 使用`define`Hook](https://v2.vuepress.vuejs.org/zh/advanced/cookbook/passing-data-to-client-code.html)

### 路径别名
在配置文件中设置的路径别名`alias`：
```js
alias: {
    '~': path.resolve(__dirname, './../../assets/'),
    '@': path.resolve(__dirname, './../../'),
},
```
这样就很方便的在文档的`<script>`中导入异步组件：
<date-string :value="Date.now()"></date-string>

```vue
<date-string :value="Date.now()"></date-string>

<script  setup>
    import { defineAsyncComponent } from 'vue';
    const DateString = defineAsyncComponent(() => import('@/views/components/DateString.vue'));
</script>
```

图片资源，可以如下使用：
```md
![vuepress](@/assets/hero.png)
```
即可如下呈现出来

![vuepress](@/assets/hero.png)

文章参考[插件API > 开发Hooks > alias](https://v2.vuepress.vuejs.org/zh/reference/plugin-api.html#alias)
[静态资源 > 依赖包和路径别名](https://v2.vuepress.vuejs.org/zh/guide/assets.html)
