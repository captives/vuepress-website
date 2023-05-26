---
home: true
title: Home
heroText: Vue 3.x
heroImage: ./assets/images/logo.svg
tagline: Vue 3.x 入门demo
footer: <b1>captives.github.io</b1>
footerHtml: true
---
# Vue 生态
<video-list :list="list" @change="changeHandler"></video-list>

# 工具集
<video-list :list="tools" @change="changeHandler"></video-list>


<h2>{{title}}</h2>
<Guide/>

<script lang="ts"  setup>
import {computed, defineAsyncComponent, onMounted} from 'vue';
import Guide from '@/views/vue3/index.vue';

//使用全局常量
const title = computed(()=> "API：" + VITE_APP_GITHUB_API);

// 异步组件
// const Guide = defineAsyncComponent(() => import('@/views/vue3/index.vue'));

console.log("created - 组合式API对应选项式API的created函数是setup ~");
onMounted(()=>{
  console.log('mounted  - 虚拟DOM挂载完成 ~');
})

const list = [
    { title: "Vue", href: "https://cn.vuejs.org/" },
    { title: "Vue Router", href: "https://router.vuejs.org/" },
    { title: "Vue I18n", href: "https://vue-i18n.intlify.dev/" },
    { title: "Pinia", href: "https://pinia.vuejs.org/" },
    { title: "Vite", href: "https://cn.vitejs.dev/" },
    { title: "VueFire", href: "https://vuefire.vuejs.org/" },
    { title: "Nuxt", href: "https://nuxtjs.org/" },
    { title: "Nuxt Content", href: "https://content.nuxtjs.org/" },
];

const tools = [
    { title: "VueUse", href: "https://www.vueusejs.com/" },
];

const changeHandler = (item:any) => {
    window.open(item.href);
}
</script>


::::code-group
:::code-group-item Page.vue
@[code](@src/views/vue3/index.vue)
:::
:::code-group-item ItemA.vue
@[code](@src/views/vue3/ItemA.vue)
:::
:::code-group-item ItemB.vue
@[code](@src/views/vue3/ItemB.vue)
:::
:::code-group-item ItemC.vue
@[code](@src/views/vue3/ItemC.vue)
:::
:::code-group-item ItemD.vue
@[code](@src/views/vue3/ItemD.vue)
:::
:::code-group-item ItemE.vue
@[code](@src/views/vue3/ItemE.vue)
:::
::::


<style lang="scss">
    header.hero{
        min-height: 100vh;
    }
</style>