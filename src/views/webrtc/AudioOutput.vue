<template>
    <WebRTC title="选择输出设备">
        <URLInput v-model="url"
                  :list="$videoList"></URLInput>
        <video ref="videoElement"
               class="mt-30 mb-30 video-item"
               :src="$oss(url)"
               controls
               loop
               autoplay></video>

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
const videoElement = ref(null);

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