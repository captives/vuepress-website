<template>
    <URLInput :list="$videoList"
              v-model="url"></URLInput>

    <VideoPlayer :src="$oss(url)"
                 class="mt-20"
                 autoplay
                 @canplay="videoCanplayHandler"></VideoPlayer>

    <StreamPlayer :stream="videoStream"
                  class="mt-20"
                  :autoplay="true"></StreamPlayer>

    <StreamTracks :value="videoStream"
                  class="mt-20"></StreamTracks>

    <MediaError :error="error"></MediaError>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import StreamPlayer from './components/StreamPlayer.vue';
import StreamTracks from './components/StreamTracks.vue';
import MediaError from './components/MediaError.vue';

const error = ref<ErrorEvent>();
const url = ref<string>('');
const videoStream = ref<MediaStream>();

const videoCanplayHandler = (event: Event, videoElement?: HTMLMediaElement) => {
    const fps = 0;

    //@ts-ignore; TODO:创建流异常
    const captureStream: (fps: number) => MediaStream = videoElement?.captureStream || videoElement?.mozCaptureStream || undefined;

    //@ts-ignore;
    if (videoElement?.captureStream) {
        //@ts-ignore;
        videoStream.value = videoElement?.captureStream(fps);
        //@ts-ignore;
    } else if (videoElement?.mozCaptureStream) {
        //@ts-ignore;
        videoStream.value = videoElement?.mozCaptureStream(fps);
    } else {
        console.error("Stream capture is not supported");
        videoStream.value = undefined;
    }

    console.log('Capture stream', videoStream.value);
}

</script>