<template>
  <WebRTC ref="webrtc"
          title="动态选择用户设备"
          @completed="webrtcCompletd">
    <template #video="{ stream }">
      <el-row :gutter="50">
        <el-col class="center" :xs="24" :sm="24" :md="12">
          <el-divider content-position="left">User media</el-divider>
          <StreamPlayer :stream="stream" :autoplay="true"></StreamPlayer>
        </el-col>
        <el-col class="center" :xs="24" :sm="24" :md="12">
          <el-divider content-position="left">Track</el-divider>
          <StreamTracks :value="stream" class="mt-20"></StreamTracks>
        </el-col>
      </el-row>
    </template>
    <template #error="{ data }">
      <MediaError :error="data.error"></MediaError>
    </template>
    <template #list="{ data }">
      <el-space :size="50" class="mb-20">
        <template #default>
          <el-select v-model="videoInput"
                     placeholder="请选择摄像头"
                     @change="deviceChangeHandler">
            <el-option v-for="item in data.videoInput"
                       :key="item.deviceId"
                       :label="item.label"
                       :value="item.deviceId" />
          </el-select>
          <el-select v-model="audioInput"
                     placeholder="请选择音频输入"
                     @change="deviceChangeHandler">
            <el-option v-for="item in data.audioInput"
                       :key="item.deviceId"
                       :label="item.label"
                       :value="item.deviceId" />
          </el-select>
          <el-select v-model="audioOutput"
                     placeholder="请选择音频输出"
                     @change="deviceChangeHandler">
            <el-option v-for="item in data.audioOutput"
                       :key="item.deviceId"
                       :label="item.label"
                       :value="item.deviceId" />
          </el-select>
        </template>
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
const audioInput = ref<string | undefined>();
const audioOutput = ref<string | undefined>();
const videoInput = ref<string | undefined>();

const webrtcCompletd = (list: Array<MediaDeviceInfo>, data: any) => {

  console.log('stream player completed', list);
  webrtc.value?.getUserMedia({
    audio: true,
    video: {
      width: { exact: 720 },
      height: { exact: 405 },
    },
  });
}

const deviceChangeHandler = () => {
  const constraints = {
    //mode A
    // audio: { deviceId: audioInput.value ? { exact: audioInput.value } : undefined },
    // video: { deviceId: videoInput.value ? { exact: videoInput.value } : undefined }
    //mode B
    audio: audioInput.value ? { deviceId: { exact: audioInput.value } } : false,
    video: videoInput.value ? {
      deviceId: { exact: videoInput.value },
      width: { exact: 720 },
      height: { exact: 405 },
    } : false,
  };

  webrtc.value?.close();
  webrtc.value?.getUserMedia(constraints);
}
</script>

<style lang="scss" scoped>
.video-item {
  height: 270px;
  width: 480px;
  background: #333;
}
</style>
