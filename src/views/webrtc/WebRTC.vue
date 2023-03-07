<template>
    <template v-if="readied">
        <h3>{{ title }}</h3>
        <slot name="video"
              :stream="localStream">
            <video ref="localVideo"
                   :srcObject.prop="localStream"
                   autoplay></video>
        </slot>

        <slot name="error"
              :data="error"></slot>
        <slot></slot>

        <slot name="list"
              :list="list"
              :data="{ audioInput, audioOutput, videoInput }"></slot>
    </template>
</template>

<script setup lang="ts">
import { ref, type Ref, reactive, inject, toRefs } from 'vue';
import helper from '@/plugins/helper';

const { appendScript } = helper;
const oss = inject('oss') as Function;

const emits = defineEmits<{
    (e: 'error', error: ErrorEvent): void;
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
const error = ref("");
const localStream: Ref<MediaStream | undefined> = ref();

const list = reactive<Array<MediaDeviceInfo>>([]);
const audioInput = reactive<Array<MediaDeviceInfo>>([]);
const audioOutput = reactive<Array<MediaDeviceInfo>>([]);
const videoInput = reactive<Array<MediaDeviceInfo>>([]);

const close = () => {
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

const handleError = (err: ErrorEvent) => {
    console.log("Error #", err.message);
    error.value = err.message;
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
    navigator.mediaDevices.getUserMedia(options)
        .then((stream: MediaStream) => {
            console.log('localstream', stream);
            listenStrem(stream);
            localStream.value = stream;
            emits('stream', stream);
        })
        .catch(handleError);
}


appendScript(oss('wertc-adapter/adapter.js'))
    .then(value => {
        readied.value = !!value;
        emits('ready', readied.value);
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
    })
    .catch(err => handleError);

defineExpose({
    close,
    getUserMedia
})
</script>