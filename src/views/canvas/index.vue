<template>
    <el-select v-model="selectIndex" placeholder="请选择">
        <el-option v-for="(item, index) in list" :key="index" :label="item.name" :value="index" />
    </el-select>
    <component :is="list[selectIndex].component"></component>
</template>

<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue';
const selectIndex = ref<number>(0);

const list = [{
    path: "index",
    name: "视频绘图",
    icon: "el-icon-s-flag",
    component: defineAsyncComponent(() => import("./DrawVideo.vue")),
}, {
    path: "video-split",
    name: "克隆视频画面",
    icon: "el-icon-printer",
    component: defineAsyncComponent(() => import("./DrawVideoSplitScreen.vue")),
}, {
    path: "video-splicing",
    name: "视频画面拼接",
    icon: "el-icon-printer",
    component: defineAsyncComponent(() => import("./DrawVideoSplicing.vue")),
}, {
    path: "video-split-copy",
    name: "视频画面分割拷贝",
    icon: "el-icon-printer",
    component: defineAsyncComponent(() => import("./DrawVideoSplitCopy.vue")),
}, {
    path: "video-split-copy",
    name: "视频画面分割拷贝",
    icon: "el-icon-printer",
    component: defineAsyncComponent(() => import("./DrawVideoGreenScreen.vue")),
}];
</script>