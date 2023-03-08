<template>
    <!-- Demo see https://webrtc.github.io/samples/src/content/capture/canvas-video/ -->
    <CanvasSample @ready="canvasReadyHandler"></CanvasSample>

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
import CanvasSample from '@/views/web/CanvasSample3DForest.vue';

const error = ref<ErrorEvent>();
const videoStream = ref<MediaStream>();

const canvasReadyHandler = (canvas?: HTMLCanvasElement) => {
    videoStream.value = canvas?.captureStream();
}

</script>