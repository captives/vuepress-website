<!-- 当前组件主要作用播放视频和产生媒体流，后续需要优化 -->
<!-- 视频获得流可以用 videoElement?.captureStream -->
<!-- 音频获得流可以用 Audio Track 创建新的MediaStream -->
<template>
    <audio v-if="src?.endsWith('.mp3')" v-bind="$attrs" :src="src" ref="audioElement" autoplay
           @canplay="canplayHandler">不支持Audio元素播放音频</audio>

    <video v-else v-bind="$attrs" controls :src="src" class="video-item" ref="videoElement" @canplay="canplayHandler">
        不支持Video元素播放音频
    </video>
    <slot :data="{ mediaElement: audioElement || videoElement }"></slot>
</template>
<script lang="ts" setup>
import { toRefs, ref } from 'vue';

const emit = defineEmits<{
    (e: "canplay", value: any, mediaElement: HTMLMediaElement | undefined): void
}>();

const props = withDefaults(defineProps<{
    src?: string
}>(), {
    src: undefined
});

const { src } = toRefs(props);
const audioElement = ref<HTMLAudioElement>();
const videoElement = ref<HTMLVideoElement>();
const canplayHandler = (event: Event) => {
    console.log('video player', (audioElement.value || videoElement.value)?.currentTime);
    if((audioElement.value || videoElement.value)?.currentTime === 0){
        emit('canplay', event, audioElement.value || videoElement.value);
    }
}
</script>

<style lang="scss" scoped>
.video-item {
    background: #333;
    margin: 0 auto;
    max-width: 100%;
}
</style>