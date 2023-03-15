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
                <div ref="container" class="video-item"> </div>
                <div>
                    行
                    <el-input-number v-model="row" :min="1" :max="10" size="small" @change="changeHandler"></el-input-number>列
                    <el-input-number v-model="column" :min="1" :max="10" size="small" @change="changeHandler"></el-input-number>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, watch } from 'vue';
import { useAnimationFrame } from '@/hooks/requestAnimationFrame';
let videoElement: HTMLVideoElement | null = null;

const url = ref<string>('');
const list = reactive<Array<CanvasRenderingContext2D>>([]);
const container = ref<HTMLDivElement>();
const row = ref<number>(3);
const column = ref<number>(3);

const frameId = ref<Number>(0);
const { onAnimationFrame, cancelAnimationFrame } = useAnimationFrame();

const drawVideoClip = () => {
    if (videoElement) {
        //TODO: 可以优化，此处应该是当前单个canvas的宽高
        const drawWidth = Math.floor(container.value!.clientWidth / column.value); //单个元素的宽
        const drawHeight = Math.floor(container.value!.clientHeight / row.value); //单个元素的高

        const sourceWidth = Math.floor(videoElement.videoWidth / column.value); //单个元素的宽
        const sourceHeight = Math.floor(videoElement.videoHeight / row.value); //单个元素的高
        for (let i = 0; i < column.value; i++) {
            //逐列
            for (var k = 0; k < row.value; k++) {
                //逐行
                let context = list[k * column.value + i];
                context.drawImage(videoElement, i * sourceWidth, k * sourceHeight, sourceWidth, sourceHeight, 0, 0, drawWidth, drawHeight);
            }
        }
    }
}

const createCanvasElement = () => {
    if (!container.value) {
        console.warn('Container not created!');
        return;
    }
    list.length = 0;
    container.value.innerText = "";
    console.log('绘图容器重置', column.value, row.value);
    //container宽高等于视频宽高，后续优化可以移除
    Object.assign(container.value.style, {
        width: videoElement?.offsetWidth + "px",
        height: videoElement?.offsetHeight + "px",
    });
    const drawWidth: number = Math.floor(container.value!.clientWidth / column.value); //单个元素的宽
    const drawHeight: number = Math.floor(container.value!.clientHeight / row.value); //单个元素的高
    for (let k: number = 0; k < row.value; k++) {
        //逐行
        for (let i: number = 0; i < column.value; i++) {
            //逐列
            let canvas: HTMLCanvasElement = document.createElement("canvas");
            let context: CanvasRenderingContext2D | null = canvas.getContext("2d");

            if (context) {
                canvas.setAttribute("width", `${drawWidth - 1}px`);
                canvas.setAttribute("height", `${drawHeight - 1}px`);
                canvas.style.position = "absolute";
                canvas.style.left = `${i * drawWidth + 1}px`;
                canvas.style.top = `${k * drawHeight + 1}px`;
                container.value!.appendChild(canvas);
                list.push(context);
            }
        }
    }
}

const videoCanplayHandler = (event: Event, _videoElement: HTMLVideoElement) => {
    videoElement = _videoElement;
    createCanvasElement();
    frameId.value = onAnimationFrame(drawVideoClip);
}

const changeHandler = () => {
    if (frameId.value) {
        // @ts-ignore;
        cancelAnimationFrame(frameId.value);
        createCanvasElement();
        frameId.value = onAnimationFrame(drawVideoClip);
    }
}
</script>

<style lang="scss" scoped>
.video-item {
    position: relative;

    ::v-deep(canvas) {
        cursor: pointer;
        filter: grayscale(1) saturate(0.5);

        &:hover {
            filter: blur(0px) drop-shadow(2px 4px 6px #fff);
        }
    }
}
</style>