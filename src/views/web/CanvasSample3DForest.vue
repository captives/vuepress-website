<template>
    <div ref="element"
         class="container">
        <canvas></canvas>
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { start, reset } from '@/utils/3d-forest';

const emit = defineEmits<{
    (e: "ready", canvas: HTMLCanvasElement | undefined): void
}>();

const element = ref<HTMLElement>();

onMounted(() => {
    start(element.value);
    emit('ready', element.value?.querySelector('canvas') || undefined);
    window.addEventListener('resize', () => {
        reset();
    })
});

</script>

<style lang="scss" scoped>
.container {
    background: #313;
    color: white;
    cursor: move;
    max-width: 100%;
    height: 450px;

    canvas {
        display: block;
        width: 100%;
        height: 100%;
        margin: 0 auto;
    }
}
</style>