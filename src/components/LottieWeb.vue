<template>
    <div ref="lottieDom" class="lottie-dom" alt="lottie-dom"></div>
</template>

<script lang="ts" setup>
import { onMounted, watch, ref, toRefs } from 'vue';
import lottie, { type AnimationItem, type AnimationConfigWithPath } from "lottie-web";

let lottieInstance: AnimationItem;
const lottieDom = ref<HTMLDivElement>();
const props = withDefaults(defineProps<{
    value: string,
    options: object
}>(), {
    value: "",
    options: () => ({})
});
const { value, options } = toRefs(props);

/**
 * 使用Howler库加载音频
 * see: https://github.com/airbnb/lottie-web/wiki
 * */
const createAudio = (assetPath: string) => {
    // 播放音频
    const audio = new Audio();
    audio.src = assetPath;
    return audio;
}

const stop = () => {
    if (lottieInstance) {
        lottieInstance.destroy();
    }
}

const play = () => {
    stop();
    lottieInstance = lottie.loadAnimation({
        container: lottieDom.value as HTMLElement,
        renderer: "svg",
        loop: true,
        autoplay: true,
        name: "Hello World",
        ...options.value,
        path: value.value,
        // audioFactory: (assetPath: string) => createAudio(assetPath),
    });
}

onMounted(play);
watch(value, play);

defineExpose({
    play,
    stop,
});
</script>

<style lang="scss" scoped>
.lottie-dom {
    width: 800px;
    height: 500px;
}
</style>