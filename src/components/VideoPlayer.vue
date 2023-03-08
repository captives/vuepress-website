<template>
    <!-- 此元素不可视 -->
    <audio v-if="src?.endsWith('.mp3')"
           v-bind="$attrs"
           :src="src"
           autoplay>不支持Audio元素播放音频</audio>

    <video v-else
           v-bind="$attrs"
           controls
           :src="src"
           class="video-item"
           ref="videoElement"
           @canplay="canplayHandler">
           不支持Video元素播放音频
    </video>
</template>
<script lang="ts" setup>
import { toRefs, ref } from 'vue';

const emit = defineEmits<{
    (e: "canplay", value: any, videoElement: HTMLVideoElement | undefined): void
}>();

const props = withDefaults(defineProps<{
    src?: string
}>(), {
    src: undefined
});

const { src } = toRefs(props);
const videoElement = ref<HTMLVideoElement>();
const canplayHandler = (event: Event) => {
    console.log('video player', videoElement.value?.currentTime);
    emit('canplay', event, videoElement.value);
}
</script>

<style lang="scss" scoped>
.video-item {
    background: #333;
    margin: 0 auto;
    max-width: 100%;
}</style>