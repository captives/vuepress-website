<template>
    <div class="sample">
        <URLInput v-model="url" :list="$videoList"></URLInput>
        <el-row :gutter="50">
            <el-col class="center" :xs="24" :sm="24" :md="12">
                <el-divider content-position="left">Video</el-divider>
                <VideoPlayer :src="$oss(url)" autoplay loop muted @canplay="videoCanplayHandler"></VideoPlayer>
            </el-col>

            <el-col class="center" :xs="24" :sm="24" :md="12">
                <el-divider content-position="left">Canvas</el-divider>
                <canvas ref="canvasElement" class="video-item"></canvas>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import onAnimationFrame from '@/hooks/requestAnimationFrame';
const url = ref<string>('');
const canvasElement = ref<HTMLCanvasElement>();
const context = ref<CanvasRenderingContext2D>();

const videoCanplayHandler = (event: Event, videoElement: HTMLMediaElement) => {
    if (canvasElement.value) {
        context.value = canvasElement.value.getContext('2d') || undefined;
        canvasElement.value.setAttribute("width", videoElement.offsetWidth + "px");
        canvasElement.value.setAttribute("height", videoElement.offsetHeight + "px");
    }

    onAnimationFrame(() => {
        if (context.value && videoElement instanceof HTMLVideoElement) {
            context.value.clearRect(0, 0, videoElement.offsetWidth, videoElement.offsetHeight);
            context.value.drawImage(videoElement, 0, 0, videoElement.offsetWidth, videoElement.offsetHeight);
        }
    });
}
</script>