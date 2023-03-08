<template>
    <URLInput :list="$videoList"
              v-model="url"></URLInput>

    <VideoPlayer :src="$oss(url)"
                 class="mt-20"
                 autoplay
                 loop
                 @canplay="videoCanplayHandler"></VideoPlayer>
    <StreamPlayer :stream="videoStream"
                  class="mt-20"
                  muted
                  :autoplay="true"></StreamPlayer>
    <div class="container">
        <canvas ref="canvas"
                calss="canvas"></canvas>
    </div>

    <StreamTracks :value="videoStream"
                  class="mt-20"></StreamTracks>

    <MediaError :error="error"></MediaError>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import StreamPlayer from './components/StreamPlayer.vue';
import StreamTracks from './components/StreamTracks.vue';
import MediaError from './components/MediaError.vue';
import StreamVisualizer from '@/utils/streamvisualizer'

const error = ref<ErrorEvent>();
const url = ref<string>('');
const videoStream = ref<MediaStream>();
const canvas = ref<HTMLCanvasElement>();

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

    //绘图
    const streamVisualizer = new StreamVisualizer(
        videoStream.value,
        canvas.value
    );

    streamVisualizer.start();
    console.log('Capture stream', videoStream.value);
}
</script>
<style lang="scss" scoped>
.container {
    height: 270px;
    min-width: 480px;

    & canvas {
        background: #a0cfff;
    }
}
</style>