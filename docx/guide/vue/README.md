---
home: true
title: Home
heroText: Vue 3.x
heroImage: ./assets/images/logo.svg
tagline: Vue 3.x 入门demo
footer: <b1>captives.github.io</b1>
footerHtml: true
---

<h2>{{title}}</h2>

<Component/>

<script  setup>
import {computed, defineAsyncComponent, onMounted} from 'vue';
//使用全局常量
const title = computed(()=> "API：" + VUE_APP_API);
// 异步组件
const Component = defineAsyncComponent(() => import('@/views/Component.vue'));
console.log("created - 组合式API对应选项式API的created函数是setup ~");
onMounted(()=>{
  console.log('mounted  - 虚拟DOM挂载完成 ~');
})
</script>

::::code-group
:::code-group-item Page.vue
@[code](@src/views/Component.vue)
:::
:::code-group-item ItemA.vue
@[code](@src/views/components/ItemA.vue)
:::
:::code-group-item ItemB.vue
@[code](@src/views/components/ItemB.vue)
:::
:::code-group-item ItemC.vue
@[code](@src/views/components/ItemC.vue)
:::
:::code-group-item ItemD.vue
@[code](@src/views/components/ItemD.vue)
:::
:::code-group-item ItemE.vue
@[code](@src/views/components/ItemE.vue)
:::
::::
