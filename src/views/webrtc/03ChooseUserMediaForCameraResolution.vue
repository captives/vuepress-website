<template>
  <WebRTC ref="webrtc" title="使用摄像头约束" @completed="webrtcCompletd" @stream="streamHanlder">
    <template #video="{ stream }">
      <el-row :gutter="50">
        <el-col class="center" :xs="24" :sm="24" :md="12">
          <el-divider content-position="left">User media</el-divider>
          <StreamPlayer :stream="stream" :autoplay="true"></StreamPlayer>
        </el-col>
        <el-col class="center" :xs="24" :sm="24" :md="12">
          <el-divider content-position="left">Track</el-divider>
          <StreamTracks :value="stream" class="mt-20"></StreamTracks>

          <el-divider content-position="left" class="mt-20">Setup</el-divider>
          <el-slider v-model="widthValue" :min="0" :max="7680" style="width:220px" />
          <div class="h-justify__align">
            <el-checkbox v-model="lockSize">Lock video size</el-checkbox>
            <el-checkbox v-model="lockRatio">Lock aspect ratio</el-checkbox>
            <el-link href="https://webrtc.github.io/samples/src/content/getusermedia/resolution/"
                     target="_blank">查看更多</el-link>
          </div>
        </el-col>
      </el-row>
    </template>
    <template #error="{ data }">
      <MediaError :error="data.error"></MediaError>
    </template>
    <template #list="{ data }">
      <el-space :size="50" class="mb-20">
        <el-select v-model="videoInput" placeholder="请选择摄像头" @change="deviceChangeHandler">
          <el-option v-for="item in data.videoInput" :key="item.deviceId" :label="item.label" :value="item.deviceId" />
        </el-select>

        <el-select v-model="selectIndex" placeholder="请选择分辨率" @change="changeHandler">
          <el-option v-for="(item, index) in constraints" :key="index" :label="item.label" :value="index" />
        </el-select>
      </el-space>
    </template>
  </WebRTC>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import WebRTC from './WebRTC.vue';
import StreamPlayer from './components/StreamPlayer.vue';
import StreamTracks from './components/StreamTracks.vue';
import MediaError from './components/MediaError.vue';

const webrtc = ref<typeof WebRTC>();
const videoInput = ref<string | undefined>();
const localStream = ref<MediaStream>();
const widthValue = ref<number>(0);
const lockSize = ref<boolean>(false);
const lockRatio = ref<boolean>(false);

const constraints = [
  { label: 'QVGA', width: '320', height: "240" },
  { label: 'VGA', width: '640', height: "480" },
  { label: 'HD', width: '1280', height: "720" },
  { label: 'FHD', width: '1920', height: "1080" },
  { label: '2K', width: '1920', height: "1080" },
  { label: '电视 4K', width: '3840', height: "2160" },
  { label: '电影 4K ', width: '4096', height: "2160" },
  { label: '8K ', width: '7680', height: "4320" },
];

const selectIndex = ref<number>(-1);

const webrtcCompletd = (list: Array<MediaDeviceInfo>, data: any) => {
  console.log('stream player completed', list);
  selectIndex.value = 0;
  changeHandler();
}

const streamHanlder = (stream: MediaStream) => {
  localStream.value = stream;
  const tracks: Array<MediaStreamTrack> = stream.getVideoTracks();
  tracks.forEach((track: MediaStreamTrack) => {
    const constraints: MediaTrackConstraints = track.getConstraints();
    console.log('Result constraints: ' + JSON.stringify(constraints));
    if (constraints && constraints.width) {
      widthValue.value = typeof constraints.width === 'number' ? constraints.width : (constraints.width.exact || constraints.width.min || 0);
    }
  });
}

const deviceChangeHandler = () => {
  const constraints = {
    audio: false,
    video: videoInput.value ? {
      deviceId: { exact: videoInput.value },
      width: { exact: 720 },
      height: { exact: 405 },
    } : false,
  };

  webrtc.value?.close();
  webrtc.value?.getUserMedia(constraints);
}

const changeHandler = () => {
  localStream.value?.getTracks().forEach(track => {
    track.stop();
  });

  const item = constraints[selectIndex.value];
  webrtc.value?.getUserMedia({
    audio: false,
    video: {
      deviceId: { exact: videoInput.value },
      width: { exact: item.width },
      height: { exact: item.height },
    },
  });
  console.log('选择', item.label, "width: %s, height: %s", item.width, item.height);
}
</script>

<style lang="scss" scoped>
.video-item {
  height: 270px;
  width: 480px;
  background: #333;
}
</style>
