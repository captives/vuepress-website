<template>
    <video class="video-item"
           :autoplay="autoplay"
           :muted="muted"
           controls
           :srcObject.prop="stream"
           @loadedmetadata.prop="loadedMetaDataHandler"></video>
</template>

<script lang="ts" setup>
import { toRefs, watch } from 'vue';
const emit = defineEmits<{
    (e: "change", value: string): void
}>();
const props = withDefaults(defineProps<{
    stream?: MediaStream,
    autoplay: boolean,
    muted?:boolean
}>(), {
    stream: undefined,
    autoplay: false,
    muted:false
});

const { stream, autoplay } = toRefs(props);

const loadedMetaDataHandler = () => {
    console.log("AudioTracks", stream.value?.getAudioTracks());
    console.log("VideoTracks", stream.value?.getVideoTracks());
}
</script>

<style lang="scss" scoped>

.video-item {
    height: 270px;
    width: 480px;
    background: #333;
    margin: 0 auto;
    max-width: 100%;
}
</style>