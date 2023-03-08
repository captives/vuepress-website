<template>
    <WebRTC ref="webrtc"
            title="视频流来自用户设备"
            @completed="webrtcCompletd">
        <template #video="{ stream }">
            <StreamPlayer :stream="stream"
                          :autoplay="true"></StreamPlayer>
            <StreamTracks :value="stream"  class="mt-20"></StreamTracks>
        </template>
    </WebRTC>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import WebRTC from './WebRTC.vue';
import StreamPlayer from './components/StreamPlayer.vue';
import StreamTracks from './components/StreamTracks.vue';

const webrtc = ref<typeof WebRTC>();

const webrtcCompletd = (list: Array<MediaDeviceInfo>) => {
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

<style lang="scss" scoped>
.video-item {
    height: 270px;
    width: 480px;
    background: #333;
    margin-right: 10px;
}
</style>
