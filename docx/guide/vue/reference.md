# Vue3

## 缩略语

### SPA Single-Page application 单页应用程序

- 是一种特殊的 Web 应用。它将所有的活动局限于一个Web页面中，浏览器在加载该页面时会加载相应的HTML、JavaScript和CSS。
- 一旦页面加载完成了，SPA不会因为用户的操作而进行页面的重新加载或跳转。而是利用JavaScript动态的变换HTML的内容，从而实现UI与用户的交互。
- 由于避免了页面的重新加载，SPA可以提供较为流畅的用户体验。
- 得益于XMLHttpRequest(ActiveXObject | IE)，可以实现无跳转刷新，依赖浏览器的histroy机制，就可以根据hash的变化可以实现界面变化。
> [Vue 3.x](https://cn.vuejs.org/)、[vite 4.x](https://cn.vitejs.dev/)

### SSR Server-Side Rendering 服务端渲染

- 将一个组件在服务器端渲染为带有数据的HTML字符串，再发送到客户端浏览器上。
- 更快的首屏加载：服务端渲染的HTML无需等到所有的JavaScript都下载并执行完成之后才显示，所以可以更快地看到完整渲染的页面。
- 更好的 SEO：搜索引擎爬虫可以直接看到完全渲染的页面
> [vue 服务端渲染 (SSR)](https://cn.vuejs.org/guide/scaling-up/ssr.html)、[Nuxt](https://nuxt.com/)

### SSG Static-Site Generation 静态站点生成

- 构建过程中就完成渲染的方式
- 预渲染的页面生成后作为**静态HTML**文件被Web服务器托管。
- 更快的首屏加载
- 在多次部署期间不会改变。每当数据变化时，都需要重新部署。
> [Nuxt](https://nuxt.com/)、[Vuepress](https://v2.vuepress.vuejs.org/zh/)、[VitePress](https://vitepress.vuejs.org/)


### PWA Progressive Web Apps 渐进式Web应用

- 运用现代的 Web API 以及传统的渐进式增强策略来创建跨平台 Web 应用程序。
- PWA 是可被发现、易安装、可链接、独立于网络、渐进式、可重用、响应性和安全的。
> [渐进式Web应用(PWA)](https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps)

## 框架

## 命名

## 组件拆分规则
- 一个单独的业务,可以完成一个闭环的功能,不需要强制拆分多个,有**复用的组件除外**

## 书写规则

### 组件内class书写顺序
 `[全局样式]`+`局部样式`
### `script setup` 语法糖书写
- `export interface` 导出相关声明
- `import` Vue 相关的外部库
- `import` 外部库、样式
- `import` 全局组件
- `import` 局部组件
- `import` 全局公共处理类
- `import` 局部公共处理类
- `import api`
```js
// 导出声明
export interface ListItemType {
    label?: string, value: any, icon?: any
};
// Vue 相关的外部库
import { ref, reactive } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router'
// 外部库、样式
import { ElMessage } from 'element-plus';
// 全局组件
import HelloWorld from '@/components/HelloWorld.vue'; 
// 局部组件
import CopyRight from './CopyRight.vue'; 
// 全局公共处理类
import { loadScript } from '@/utils/common';
// 局部公共处理类
import { list } form './MocData';

```
- 挂载插件
- `useStore`、 `usrRoute`、`useRouter`实例化
```js
const store = useStore();
const route = useRoute();
const router = useRouter();
```
- `emit` 定义
```js
const emit = defineEmits<{
    (e: 'update:modelValue', value: any): void,
    (e: 'change', item: ListItem): void,
}>();
```
- `props` 声明和解构
```js
const props = withDefaults(defineProps<{
    modelValue?: String,
    list: Array<ListItem>
}>(), {
    list: () => []
});

const { modelValue = "", list } = toRefs(props);
```
- `computed`基数属性
```js
let list = computed(() => {
    let value = route.matched.map((item: any) => ({ label: item.meta && item.meta.title, path: item.path }))
    return toRaw(value);
})
```



- `router` 路由钩子
```js
router.beforeEach((to: any) => {
    document.title = String(to.meta.hasOwnProperty('title') ? to.meta.title : to.name || document.title);
})
```

- 组件内的事件方法
```js
// 对应选项式API的`methods`
```

- `watch` 函数监听处理
```js
watch([list, modelValue], ([_list, _value]) => {
    console.log('change', _list, _value);
});
```

- `Vue 3.x` 生命周期钩子
```js
console.log('created');
onMounted(() => {
    console.log('mounted');
});
```
## 