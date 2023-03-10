<template>
    <!-- 用户设备流录制 -->
    <WebRTC ref="webrtc" title="用户设备流录制" @completed="webrtcCompletd">
        <template #video="{ stream }">
            <el-row :gutter="50">
                <el-col class="center" :xs="24" :sm="24" :md="12">
                    <el-divider content-position="left">User media recorder</el-divider>
                    <StreamPlayer :stream="stream" :muted="true" :autoplay="true"></StreamPlayer>
                    <StreamRecorder :stream="stream"></StreamRecorder>
                </el-col>
                <el-col class="center" :xs="24" :sm="24" :md="12">
                    <el-divider content-position="left">Tracks</el-divider>
                    <StreamTracks :value="stream"></StreamTracks>
                </el-col>
            </el-row>
        </template>
    </WebRTC>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import WebRTC from './WebRTC.vue';
import StreamPlayer from './components/StreamPlayer.vue';
import StreamTracks from './components/StreamTracks.vue';
import StreamRecorder from './components/StreamRecorder.vue';

const webrtc = ref<typeof WebRTC>();
const webrtcCompletd = (list: Array<MediaDeviceInfo>, data: any) => {
    console.log('stream player completed', list);
    webrtc.value?.getUserMedia({
        audio: true,
        video: {
            width: { exact: 720 },
            height: { exact: 405 },
        },
    });
}
</script>