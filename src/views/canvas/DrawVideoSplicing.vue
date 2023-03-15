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
                <div>
                    行
                    <el-input-number v-model="row" :min="1" :max="10" size="small"></el-input-number>列
                    <el-input-number v-model="column" :min="1" :max="10" size="small"></el-input-number>
                </div>
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

const row = ref<number>(3);
const column = ref<number>(3);

const drawText = (x: number, y: number, text: string | number) => {
    if (context.value) {
        context.value.font = "16px 微软雅黑";
        context.value.fillStyle = "#FFF";
        context.value.fillText("video " + text, x, y);
    }
}

const drawLine = (x: number, y: number, tx: number, ty: number, width: number) => {
    width = width || 2;
    if (context.value) {
        context.value.beginPath();
        context.value.moveTo(x - width / 2, y);
        context.value.lineTo(tx - width / 2, ty);
        context.value.lineWidth = width;
        context.value.strokeStyle = "#FFF";
        context.value.stroke();
    }
}

const videoCanplayHandler = (event: Event, videoElement: HTMLMediaElement) => {
    if (canvasElement.value) {
        context.value = canvasElement.value.getContext('2d') || undefined;
        canvasElement.value.setAttribute("width", videoElement.offsetWidth + "px");
        canvasElement.value.setAttribute("height", videoElement.offsetHeight + "px");
    }

    onAnimationFrame(() => {
        if (context.value && videoElement instanceof HTMLVideoElement) {
            const sourceWidth = Math.floor(videoElement.videoWidth / column.value); //单个元素的宽
            const sourceHeight = Math.floor(videoElement.videoHeight / row.value); //单个元素的高

            const drawWidth = Math.floor(canvasElement.value!.width / column.value); //单个元素的宽
            const drawHeight = Math.floor(canvasElement.value!.height / row.value); //单个元素的高
            context.value.clearRect(0, 0, canvasElement.value!.offsetWidth, canvasElement.value!.offsetHeight);

            for (let i: number = 0; i < column.value; i++) {
                for (let k: number = 0; k < row.value; k++) {
                    context.value.drawImage(videoElement,
                        i * sourceWidth,
                        k * sourceHeight,
                        sourceWidth,
                        sourceHeight,
                        i * drawWidth + 1,
                        k * drawHeight + 1,
                        drawWidth - 1,
                        drawHeight - 1
                    );
                    drawText((i + 1) * drawWidth - 70, k * drawHeight + 20, k * column.value + i + 1);
                }
            }

            // for (let i = 1; i < column.value; i++) {
            //   drawLine(i * drawWidth, 0, i * drawWidth, canvasElement.value!.height);
            // }

            // for (let k = 1; k < row.value; k++) {
            //   drawLine(0, k * drawHeight, canvasElement.value!.width, k * drawHeight);
            // }

            //获取区域数据像素操作
            // image = context.value.getImageData(0, 0, canvas.width, canvas.height);

            //base64
            // image = canvasElement.toDataURL("image/png");

            // 直接用canvas将画布上的图片转为blob,不需要经过base64
            // canvasElement.toBlob(callback, type, encoderOptions);
            // 参数1为转换后的回调，回调参数为转换后的blob;必选
            // 参数2为指定图片格式，默认为image/png，即png；可为image/jpeg或者image/webp；可选
            // 参数3为值在0与1之间的数值，当请求图片格式为image/jpeg或者image/webp时用来指定图片展示质量; 可选
            // canvasElement.toBlob((blob) => {
            //  image = window.URL.createObjectURL(blob);
            // });
        }
    });
}
</script>