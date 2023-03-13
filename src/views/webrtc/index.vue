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
    name: "WebRTC 知识点",
    icon: "el-icon-s-flag",
    component: defineAsyncComponent(() => import("./WebRTC.vue")),
}, {
    path: "list",
    name: "用户设备列表",
    icon: "el-icon-notebook-2",
    component: defineAsyncComponent(() => import("./01MediaDevices.vue")),
}, {
    path: "stream-from-usermedia",
    name: "视频流来自用户设备",
    icon: "el-icon-camera",
    component: defineAsyncComponent(() => import("./02VideoStreamFromUserMedia.vue")),
}, {
    path: "dynamic-selection-usermedia",
    name: "动态选择用户设备",
    icon: "el-icon-orange",
    component: defineAsyncComponent(() => import("./03ChooseUserMedia.vue")),
}, {
    path: "dynamic-selection-usermedia",
    name: "动态选择用户摄像头分辨率约束",
    icon: "el-icon-orange",
    component: defineAsyncComponent(() => import("./03ChooseUserMediaForCameraResolution.vue")),
}, {
    path: "stream-from-displaymedia",
    name: "视频流来自显示设备",
    icon: "el-icon-monitor",
    component: defineAsyncComponent(() =>
        import("./04VideoStreamFromDisplayMedia.vue")),
}, {
    path: "stream-from-video",
    name: "视频流来自Video",
    icon: "el-icon-film",
    component: defineAsyncComponent(() => import("./05VideoStreamFromVideo.vue")),
}, {
    path: "stream-from-canvas",
    name: "视频流来自Canvas",
    icon: "el-icon-picture-outline",
    component: defineAsyncComponent(() => import("./06VideoStreamFromCanvas.vue")),
}, {
    path: "audiooutput",
    name: "音频输出到指定设备",
    icon: "el-icon-headset",
    component: defineAsyncComponent(() => import("./07AudioOutput.vue")),
}, {
    path: "visualizer",
    name: "媒体流可视化",
    icon: "el-icon-data-line",
    component: defineAsyncComponent(() => import("./08MediaStreamVisualizer.vue")),
}, {
    path: "audio-volume",
    name: "媒体流音量测算",
    icon: "el-icon-odometer",
    component: defineAsyncComponent(() => import("./09AudioStreamVolume.vue")),
}, {
    path: "mixer",
    name: "媒体流混音",
    icon: "el-icon-set-up",
    component: defineAsyncComponent(() => import("./10MediaStreamMixer.vue")),
}, {
    path: "pc",
    name: "对等连接",
    icon: "el-icon-connection",
    component: defineAsyncComponent(() => import("./11PeerConnection.vue")),
}, {
    path: "remote",
    name: "对等连接传输流",
    icon: "el-icon-money",
    component: defineAsyncComponent(() => import("./12AudioVideoCall.vue")),
}, {
    path: "recorder",
    name: "用户设备流录制",
    icon: "el-icon-video-camera",
    component: defineAsyncComponent(() => import("./13UserMediaRecorder.vue")),
}, {
    path: "display-media-recorder",
    name: "显示设备录制流",
    icon: "el-icon-video-camera-solid",
    component: defineAsyncComponent(() => import("./14DisplayMediaRecorder.vue")),
}, {
    path: "display-media-recorder-to-file",
    name: "显示设备录制流到文件",
    icon: "el-icon-video-camera-solid",
    component: defineAsyncComponent(() => import("./components/StreamRecorder.vue")),
}];
</script>