<template>
    <template v-if="readied">
        <h3>{{ title }}</h3>
        <slot name="list"
              :list="list"
              :data="{ audioInput, audioOutput, videoInput }"
              :support="{supUserMedia, supDisplayMedia}"></slot>

        <slot name="video"
              :stream="localStream">
            <video ref="localVideo"
                   :srcObject.prop="localStream"
                   autoplay></video>
        </slot>
        <slot></slot>
        <slot name="error"
              :data="{ error, supUserMedia, supDisplayMedia}"></slot>
    </template>
</template>@/utils/helper

<script setup lang="ts">
import { ref, type Ref, reactive, inject, toRefs } from 'vue';
import helper from '@/utils/helper';

const { appendScript } = helper;
const oss = inject('oss') as Function;

const emits = defineEmits<{
    (e: 'error', error: DOMException | ErrorEvent): void;
    (e: 'ready', ready: boolean): void;
    (e: 'completed', list: Array<MediaDeviceInfo>, data: {
        audioInput: Array<MediaDeviceInfo>,
        audioOutput: Array<MediaDeviceInfo>,
        videoInput: Array<MediaDeviceInfo>,
    }): void;
    (e: 'stream', stream: MediaStream): void;
    (e: 'add', stream: MediaStream): void;
    (e: 'remove', stream: MediaStream): void;
    (e: 'change', device: MediaDeviceInfo): void;
}>();

const props = withDefaults(defineProps<{
    title?: string;
}>(), {
    title: '',
});

const { title } = toRefs(props);
const readied = ref(false);
const error = ref<DOMException | ErrorEvent>();
const supUserMedia = ref<boolean>(false);
const supDisplayMedia = ref<boolean>(false);
const localStream: Ref<MediaStream | undefined> = ref();

const list = reactive<Array<MediaDeviceInfo>>([]);
const audioInput = reactive<Array<MediaDeviceInfo>>([]);
const audioOutput = reactive<Array<MediaDeviceInfo>>([]);
const videoInput = reactive<Array<MediaDeviceInfo>>([]);

const close = () => {
    error.value = undefined;
    localStream.value?.getTracks().forEach((track) => {
        track.stop();
    });
};

const gotDevices = (deviceInfos: Array<MediaDeviceInfo>) => {
    list.splice(0, list.length, ...deviceInfos);
    audioInput.splice(0, audioInput.length, ...deviceInfos.filter((device: MediaDeviceInfo) => device.kind === "audioinput"));
    audioOutput.splice(0, audioOutput.length, ...deviceInfos.filter((device: MediaDeviceInfo) => device.kind === "audiooutput"));
    videoInput.splice(0, videoInput.length, ...deviceInfos.filter((device: MediaDeviceInfo) => device.kind === "videoinput"));

    close();
    emits('completed', list, { audioInput, audioOutput, videoInput });
};

const handleError = (err:DOMException | ErrorEvent) => {
    console.log("Error #", err.message);
    error.value = err;
    emits('error', err);
};

const listenStrem = (stream: MediaStream) => {
    stream.addEventListener('inactive', () => {
        console.log("Stream inactive");
    });

    stream.addEventListener('active', () => {
        console.log("Stream active");
    });
}

const getUserMedia = (options: MediaStreamConstraints = { audio: true, video: true }) => {
    error.value = undefined;
    navigator.mediaDevices.getUserMedia(options)
        .then((stream: MediaStream) => {
            console.log('localstream', stream);
            listenStrem(stream);
            localStream.value = stream;
            emits('stream', stream);
        })
        .catch(handleError);
}

const getDisplayMedia = (options: DisplayMediaStreamConstraints = { audio: true, video: true }) => {
    error.value = undefined;
    if(supDisplayMedia.value){
        navigator.mediaDevices.getDisplayMedia(options)
            .then((stream)=>{
                localStream.value = stream;
            })
            .catch(handleError);
    }
}


const initLocalDevice = () => {
    supUserMedia.value = 'getUserMedia' in navigator.mediaDevices;
    supDisplayMedia.value = 'getDisplayMedia' in navigator.mediaDevices;

    if (supUserMedia.value) {
        navigator.mediaDevices.getUserMedia({ audio: true, video: true })
            .then((stream: MediaStream) => {
                console.log('localstream', stream);
                listenStrem(stream);
                localStream.value = stream;
                emits('stream', stream);
                return navigator.mediaDevices.enumerateDevices();
            })
            .then(gotDevices)
            .catch(handleError);
    }
}

appendScript(oss('wertc-adapter/adapter.js'))
    .then(value => {
        readied.value = !!value;
        emits('ready', readied.value);
        if (navigator.mediaDevices) {
            initLocalDevice();
        }
    })
    .catch(err => handleError);

defineExpose({
    close,
    getUserMedia,
    getDisplayMedia
})
</script>