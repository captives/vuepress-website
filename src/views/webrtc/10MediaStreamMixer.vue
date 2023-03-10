<template>
    <URLInput :list="$videoList" v-model="url"></URLInput>
    <el-row :gutter="50">
        <el-col class="center" :xs="24" :sm="24" :md="12">
            <el-divider content-position="left">Video</el-divider>
            <VideoPlayer :src="$oss(url)" class="mt-20" autoplay @canplay="videoCanplayHandler"></VideoPlayer>
        </el-col>
        <el-col class="center" :xs="24" :sm="24" :md="12">
            <el-divider content-position="left">Tracks</el-divider>
            <StreamTracks :value="videoStream"></StreamTracks>
        </el-col>
    </el-row>

    <el-row :gutter="50">
        <el-col class="center" :xs="24" :sm="24" :md="12">
            <el-divider content-position="left">Audio</el-divider>
            <VideoPlayer :src="$oss('/assets/medias/jinli.mp3')" autoplay controls @canplay="audioCanplayHandler">
            </VideoPlayer>
            <el-row class="mt-20">
                <el-checkbox v-model="mixing" class="pr-20">
                    {{ mixing ? "替换声道" : "原声道" }}
                </el-checkbox>
                <el-button v-if="!remixStream" type="success" @click="startMixing">
                    开始混入
                </el-button>
                <el-button v-else type="danger" @click="stopMixing">
                    停止混入
                </el-button>
            </el-row>
        </el-col>
        <el-col class="center" :xs="24" :sm="24" :md="12">
            <el-divider content-position="left">Tracks</el-divider>
            <StreamTracks :value="audioStream"></StreamTracks>
        </el-col>
    </el-row>

    <el-row :gutter="50">
        <el-col class="center" :xs="24" :sm="24" :md="12">
            <el-divider content-position="left">Remix stream & Recorder</el-divider>
            <StreamPlayer :stream="remixStream" :muted="true" :autoplay="true"></StreamPlayer>
            <StreamRecorder :stream="remixStream"></StreamRecorder>
        </el-col>
        <el-col class="center" :xs="24" :sm="24" :md="12">
            <el-divider content-position="left">Tracks</el-divider>
            <StreamTracks :value="remixStream"></StreamTracks>
        </el-col>
    </el-row>
    <MediaError :error="error"></MediaError>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import StreamPlayer from './components/StreamPlayer.vue';
import StreamTracks from './components/StreamTracks.vue';
import StreamRecorder from './components/StreamRecorder.vue';
import MediaError from './components/MediaError.vue';

const error = ref<ErrorEvent>();
const url = ref<string>('');
const mixing = ref<boolean>(false);
const videoStream = ref<MediaStream>();
const audioStream = ref<MediaStream>();
const remixStream = ref<MediaStream>();

const createMediaStream = (mediaElement?: HTMLMediaElement) => {
    let stream: MediaStream | null = null;
    const fps = 0;

    //@ts-ignore; TODO:创建流异常
    const captureStream: (fps: number) => MediaStream = mediaElement?.captureStream || mediaElement?.mozCaptureStream || undefined;

    if (mediaElement) {
        //@ts-ignore;
        if (mediaElement.captureStream) {
            //@ts-ignore;
            stream = mediaElement.captureStream(fps);
            //@ts-ignore;
        } else if (mediaElement.mozCaptureStream) {
            //@ts-ignore;
            stream = mediaElement.mozCaptureStream(fps);
        } else {
            console.error("Stream capture is not supported");
            stream = null;
        }
    }

    console.log('Capture stream', stream);
    return stream;
}

const startMixing = () => {
    remixStream.value = new MediaStream();
    videoStream.value?.getVideoTracks().forEach((track: MediaStreamTrack) => {
        remixStream.value?.addTrack(track.clone());
    });

    if (mixing.value) {
        audioStream.value?.getAudioTracks().forEach((track: MediaStreamTrack) => {
            remixStream.value?.addTrack(track.clone());
        });
    } else {
        videoStream.value?.getAudioTracks().forEach((track: MediaStreamTrack) => {
            remixStream.value?.addTrack(track.clone());
        });
    }
}

const stopMixing = () => {
    remixStream.value?.getTracks().forEach((track: MediaStreamTrack) => {
        track.stop();
    });
    remixStream.value = undefined;
}

const videoCanplayHandler = (event: Event, mediaElement?: HTMLMediaElement) => {
    videoStream.value = createMediaStream(mediaElement) || undefined;
}

const audioCanplayHandler = (event: Event, mediaElement?: HTMLMediaElement) => {
    audioStream.value = createMediaStream(mediaElement) || undefined;
}
</script>