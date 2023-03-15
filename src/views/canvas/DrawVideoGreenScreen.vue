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
                <el-row>
                    <el-slider v-model="color.R" size="small" :min="0" :max="255" show-input label="R"></el-slider>
                    <el-slider v-model="color.G" size="small" :min="0" :max="255" show-input label="G"></el-slider>
                    <el-slider v-model="color.B" size="small" :min="0" :max="255" show-input label="B"></el-slider>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
import { ref, inject, reactive } from 'vue';
import onAnimationFrame from '@/hooks/requestAnimationFrame';

const videolist = inject<Array<any>>('videoList') || [];
const url = ref<string>(videolist[4]?.value);
const canvasElement = ref<HTMLCanvasElement>();
const context = ref<CanvasRenderingContext2D>();
const color = reactive({ R: 10, G: 35, B: 200 });

const videoCanplayHandler = (event: Event, videoElement: HTMLMediaElement) => {
    if (canvasElement.value) {
        context.value = canvasElement.value.getContext('2d') || undefined;
        canvasElement.value.setAttribute("width", videoElement.offsetWidth + "px");
        canvasElement.value.setAttribute("height", videoElement.offsetHeight + "px");
    }

    onAnimationFrame(() => {
        if (context.value && videoElement instanceof HTMLVideoElement) {
            context.value.clearRect(0, 0, videoElement.offsetWidth, videoElement.offsetHeight);
            // 绘制图形
            context.value.drawImage(videoElement, 0, 0, videoElement.offsetWidth, videoElement.offsetHeight);
            //获取图形元数据
            let imageData: ImageData = context.value.getImageData(0, 0, videoElement.offsetWidth, videoElement.offsetHeight);
            let points = imageData.data.length / 4;
            console.log('Pixel points', points);

            for (let i = 0; i < points; i++) {
                let r = imageData.data[i * 4 + 0];//Red
                let g = imageData.data[i * 4 + 1];//Green
                let b = imageData.data[i * 4 + 2];//Blue

                if (r > color.R && g > color.G && b < color.B) {
                    imageData.data[i * 4 + 3] = 0;//Alpha
                }
            }

            context.value.clearRect(0, 0, videoElement.offsetWidth, videoElement.offsetHeight);
            context.value.putImageData(imageData, 0, 0);
        }
    });
}
</script>
<style lang="scss" scoped>
canvas {
    background-color: rgb(10, 35, 200);
}
</style>