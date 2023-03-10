<template>
    <URLInput :list="$videoList"
              v-model="url"></URLInput>
    <el-row :gutter="50">
        <el-col class="center"
                :xs="24"
                :sm="24"
                :md="12">
            <el-divider content-position="left">Audio Stream</el-divider>
            <VideoPlayer :src="$oss(url)"
                         class="mt-20"
                         autoplay
                         @canplay="videoCanplayHandler"></VideoPlayer>
        </el-col>
        <el-col class="center"
                :xs="24"
                :sm="24"
                :md="12">
            <el-divider content-position="left">Audio Stream Volume</el-divider>
            AudioContext.createScriptProcessor() 已经弃用，此示例搁置。
            <br>
            后续研究 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/AudioContext"
               target="_blank">Audio Workers</a>

            <el-form v-if="soundMeter"
                     label-width="80px">
                <el-form-item label="Instant:">
                    <el-progress :stroke-width="20"
                                 :text-inside="true"
                                 :percentage="Math.floor(soundMeter.instant * 500)"></el-progress>
                </el-form-item>
                <el-form-item label="Slow:">
                    <el-progress :stroke-width="20"
                                 :text-inside="true"
                                 :percentage="Math.floor(soundMeter.slow * 500)"
                                 color="#67C23A"></el-progress>
                </el-form-item>
                <el-form-item label="Clip:">
                    <el-progress :stroke-width="20"
                                 :text-inside="true"
                                 :percentage="Math.floor(soundMeter.clip * 500)"
                                 color="#F56C6C"></el-progress>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>

    <StreamTracks :value="videoStream"
                  class="mt-20"></StreamTracks>

    <MediaError :error="error"></MediaError>
</template>

<script lang="ts" setup >
import { ref } from 'vue';
import StreamPlayer from './components/StreamPlayer.vue';
import StreamTracks from './components/StreamTracks.vue';
import MediaError from './components/MediaError.vue';
import SoundMeter from '@/utils/SoundMeter';

const error = ref<DOMException | ErrorEvent>();
const url = ref<string>('');
const videoStream = ref<MediaStream>();
const soundMeter = ref();

const videoCanplayHandler = (event: Event, videoElement?: HTMLMediaElement) => {
    const fps = 0;

    //@ts-ignore; TODO:创建流异常
    const captureStream: (fps: number) => MediaStream = videoElement?.captureStream || videoElement?.mozCaptureStream || undefined;

    //@ts-ignore;
    if (videoElement?.captureStream) {
        //@ts-ignore;
        videoStream.value = videoElement?.captureStream(fps);
        //@ts-ignore;
    } else if (videoElement?.mozCaptureStream) {
        //@ts-ignore;
        videoStream.value = videoElement?.mozCaptureStream(fps);
    } else {
        console.error("Stream capture is not supported");
        videoStream.value = undefined;
    }

    console.log('Capture stream', videoStream.value);
}
</script>