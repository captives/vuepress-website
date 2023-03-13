<template>
    <el-row v-if="stream">
        <el-col v-if="recording">
            <el-tag type="danger">Rec ....</el-tag>
            <small class="ml-20 mr-20">{{ recordBlobs.length }}</small>
            <el-button type="danger" size="mini" @click="stopRecoder">停止录制</el-button>
        </el-col>
        <el-col v-else>
            <template v-if="recordBlobs.length">
                <el-button type="primary" size="mini" @click="playHandler">预览</el-button>
                <el-button type="danger" size="mini" @click="downloadfile">下载视频</el-button>
            </template>
            <el-button v-else type="success" size="mini" @click="startRecoding">开始录制</el-button>
        </el-col>
    </el-row>
</template>

<script lang="ts" setup>
import { toRefs, ref, reactive } from 'vue';

const props = withDefaults(defineProps<{
    stream?: MediaStream,
    video?: HTMLMediaElement
}>(), {
    stream: undefined,
    video: undefined
});

const { stream, video } = toRefs(props);

const recording = ref<boolean>(false);
const mediaRecorder = ref<MediaRecorder>();
const recordBlobs = reactive<Array<Blob>>([]);

/**
 * 将blob文件转换成二进制流发送到服务器上
 */
const blobToBinaryString = (value: Blob) => {
    const reader = new FileReader();
    reader.onerror = (error) => {
        console.error("媒体流转换到blob数据失败", error);
    };

    reader.onloadend = () => {
        // 发送到服务器端进行存储为文件
        // ws.sendMessage({ event: "REC_BLOB", blob: reader.result, uid: "user.id" });
    };
    reader.readAsBinaryString(value);
}

const startRecoding = () => {
    var options = { mimeType: "video/webm;codecs=h264" };
    if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        console.log(options.mimeType + " is not Supported");
        options = { mimeType: "video/webm;codecs=vp9" };

        if (!MediaRecorder.isTypeSupported(options.mimeType)) {
            console.log(options.mimeType + " is not Supported");
            options = { mimeType: "video/webm;codecs=vp8" };

            if (!MediaRecorder.isTypeSupported(options.mimeType)) {
                console.log(options.mimeType + " is not Supported");
                options = { mimeType: "video/webm" };

                if (!MediaRecorder.isTypeSupported(options.mimeType)) {
                    console.log(options.mimeType + " is not Supported");
                    options = { mimeType: "" };
                }
            }
        }
    }

    try {
        if (stream.value) {
            mediaRecorder.value = new MediaRecorder(stream.value, options);
            recordBlobs.length = 0;
            console.log("Created MediaRecorder", mediaRecorder.value, "with options", options);

            mediaRecorder.value.addEventListener('start', function (event: Event) {
                console.log("Recorder start ...");
                recording.value = true;
            })

            mediaRecorder.value.addEventListener('stop', function (event: Event) {
                console.log("Recorder stopped: ", event);
                recording.value = false;
            })

            mediaRecorder.value.addEventListener('error', function (event: Event) {
                console.error('media recorder error', event);
                recording.value = false;
            });

            mediaRecorder.value.addEventListener('dataavailable', function (event: BlobEvent) {
                if (event.data && event.data.size > 0) {
                    blobToBinaryString(event.data);
                    recordBlobs.push(event.data);
                }
            });

            mediaRecorder.value.start(10); // 数据收集10ms
            console.log("MediaRecorder started", mediaRecorder.value);
        }
    } catch (e) {
        alert(`Exception while creating MediaRecorder: ${e}. mimeType: ${options.mimeType}`);
    }
}

const stopRecoder = () => {
    if (mediaRecorder.value && recording.value) {
        recording.value = false;
        mediaRecorder.value.stop();
    }
}

const downloadfile = () => {
    if (recordBlobs && recordBlobs.length) {
        const blob = new Blob(recordBlobs, { type: "video/webm" });
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = "Rec_" + Date.now() + ".webm";
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 100);
    }
}

const playHandler = () => {
    const videoElement: HTMLMediaElement | undefined = video.value;
    if (!!videoElement) {

        const timeupdate = function () {
            videoElement.currentTime = 0;
            videoElement.play();
        }

        const loadedmetadata = function (event) {
            console.log("loadedmetadata", videoElement.currentTime, videoElement.duration);
            if (videoElement.duration === Infinity) {
                videoElement.currentTime = 1e101;
                videoElement.addEventListener('timeupdate', timeupdate);
            }
        }

        videoElement.removeEventListener('timeupdate', timeupdate);
        videoElement.removeEventListener("loadedmetadata", loadedmetadata);
        videoElement.addEventListener("loadedmetadata", loadedmetadata);
    }

    if (recordBlobs && recordBlobs.length) {
        const blob: Blob = new Blob(recordBlobs, { type: "video/webm" });
        const url: string = window.URL.createObjectURL(blob);
        window.open(url);
    }
}
</script>