<template>
  <WebRTC ref="webrtc"
          title="视频流来自屏幕共享">
    <template #video="{ stream }">
      <StreamPlayer :stream="stream"
                    :autoplay="true"></StreamPlayer>
      <StreamTracks :value="stream"
                    class="mt-20"></StreamTracks>
    </template>
    <template #error="{ data }">
      <MediaError :error="data.error"></MediaError>
    </template>
    <template #list="{ support }">
      <div class="mb-20">
        <el-select v-model="selectValue"
                   placeholder="请选择共享源"
                   :disabled="!support.supDisplayMedia">
          <el-option v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value" />
        </el-select>
        <el-button type="primary"
                   class="ml-20"
                   :disabled="!support.supDisplayMedia"
                   @click="startHandler">开始</el-button>

        <el-button type="danger"
                   class="ml-20"
                   :disabled="!support.supDisplayMedia"
                   @click="stopHandler">停止</el-button>
      </div>
    </template>
  </WebRTC>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue';
import WebRTC from './WebRTC.vue';
import StreamPlayer from './components/StreamPlayer.vue';
import StreamTracks from './components/StreamTracks.vue';
import MediaError from './components/MediaError.vue';

const selectValue = ref<string>();
const options = [
  { label: "默认显示设备", value: "default" },
  { label: "共享浏览器选项卡", value: "browser" },
  { label: "共享App窗口", value: "window" },
  { label: "共享系统屏幕", value: "monitor" },
];

const webrtc = ref<typeof WebRTC>();

const startHandler = () => {
  const options: MediaStreamConstraints = { video: true, audio: true };
  if (selectValue.value !== 'default' && !!selectValue.value) {
    //@ts-ignore;
    options.video = { displaySurface: selectValue.value };
  }
  webrtc.value?.getDisplayMedia(options);
}

const stopHandler = () => {
  webrtc.value?.close();
}
</script>

<style lang="scss" scoped>
.video-item {
  height: 270px;
  width: 480px;
  background: #333;
}
</style>

