
# 课程列表

## Vue 3 Reactivity(响应式原理) - Vue Mastery

<video-list class="mt-20 mb-20" :list="list" @change="changeHandler"></video-list>

## Vue 3 + Typescript - Vue Mastery

<video-list class="mt-20 mb-20" :list="list2" @change="changeHandler"></video-list>


<script lang="ts" setup>
import VideoList, { type ListItemRecord } from '@/components/VideoList.vue';
const list:Array<ListItemRecord> = [
    {"title":"1 - Vue 3 Reactivity","href":"https://www.bilibili.com/video/BV1SZ4y1x7a9?p=1","durction":"09:54"},
    {"title":"2 - Proxy and Reflect","href":"https://www.bilibili.com/video/BV1SZ4y1x7a9?p=2","durction":"08:58"},
    {"title":"3 - activeEffect & ref","href":"https://www.bilibili.com/video/BV1SZ4y1x7a9?p=3","durction":"07:14"},
    {"title":"4 - Computed & Vue 3 Source","href":"https://www.bilibili.com/video/BV1SZ4y1x7a9?p=4","durction":"06:56"},
    {"title":"5 - Q&A with Evan You","href":"https://www.bilibili.com/video/BV1SZ4y1x7a9?p=5","durction":"08:39"},
    {"title":"6 - Reading Source Code with Evan You","href":"https://www.bilibili.com/video/BV1SZ4y1x7a9?p=6","durction":"20:13"}
];

const list2:Array<ListItemRecord> = [
    {"title":"Typescript- 1 - Why Vue & TypeScript","href":"https://www.bilibili.com/video/BV1Cy4y1J7Ww?p=1","durction":"09:29"},
    {"title":"Typescript- 2 - Setting Up Vue 3 + TS","href":"https://www.bilibili.com/video/BV1Cy4y1J7Ww?p=2","durction":"06:08"},
    {"title":"Typescript- 3 - Creating Components with TypeScript","href":"https://www.bilibili.com/video/BV1Cy4y1J7Ww?p=3","durction":"04:15"},
    {"title":"Typescript- 4 - Type Fundamentals","href":"https://www.bilibili.com/video/BV1Cy4y1J7Ww?p=4","durction":"07:52"},
    {"title":"Typescript- 5 - Defining Custom Types","href":"https://www.bilibili.com/video/BV1Cy4y1J7Ww?p=5","durction":"05:56"},
    {"title":"Typescript- 6 - Data with Custom Types","href":"https://www.bilibili.com/video/BV1Cy4y1J7Ww?p=6","durction":"06:31"},
    {"title":"Typescript- 7 - Props with Types","href":"https://www.bilibili.com/video/BV1Cy4y1J7Ww?p=7","durction":"04:10"},
    {"title":"Typescript- 8 - Computed & Methods with Custom Types","href":"https://www.bilibili.com/video/BV1Cy4y1J7Ww?p=8","durction":"03:46"},
    {"title":"Typescript- 9 - Next Steps","href":"https://www.bilibili.com/video/BV1Cy4y1J7Ww?p=9","durction":"01:44"},
    {"title":"Typescript- 10 - Bonus- Composition API","href":"https://www.bilibili.com/video/BV1Cy4y1J7Ww?p=10","durction":"06:23"}
];

const changeHandler = (item: ListItemRecord) => {
    window.open(item.href);
}
</script>