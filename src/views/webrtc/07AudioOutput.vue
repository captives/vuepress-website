<template>
    <WebRTC title="音频输出到指定设备">
        <URLInput v-model="url"
                  :list="$videoList"></URLInput>

        <template #video>
            <VideoPlayer :src="$oss(url)"
                         class="mt-20"
                         autoplay
                         loop
                         @canplay="videoCanplayHandler"></VideoPlayer>
        </template>

        <el-table :data="audioOutput"
                  width="100%">
            <el-table-column prop="label"
                             label="名称"></el-table-column>
            <el-table-column prop="kind"
                             label="类型"></el-table-column>
            <el-table-column prop="deviceId"
                             label="设备ID"></el-table-column>
            <el-table-column label="操作">
                <template #default="scope">
                    <el-button type="danger"
                               @click="changeDevice(scope.row)">选择</el-button>
                </template>
            </el-table-column>
        </el-table>
    </WebRTC>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useDevices } from './hooks/webrtc';

import WebRTC from './WebRTC.vue';

const { audioOutput, playback } = useDevices();
const url = ref("");

const videoElement = ref<HTMLMediaElement>();
const videoCanplayHandler = (event: Event, element?: HTMLMediaElement) => {
    videoElement.value = element;
}

const changeDevice = (device: MediaDeviceInfo) => {
    if (device.kind === "audiooutput") {
        playback(videoElement.value! as HTMLVideoElement, device.deviceId);
    }
}
</script>
<style lang="scss">
.video-item {
    width: 960px;
    height: 540px;
}
</style>