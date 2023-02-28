<template>
  <WebRTC ref="webrtc" class="center">
    <el-container style="padding:20px; flex:none">
      <el-aside class="video"
                width="480px">
        <div class="video-item">
          <video ref="localVideo"
                 :srcObject.prop="localStream"
                 autoplay></video>
          <p class="user-name">摄像头</p>
        </div>
      </el-aside>
      <el-main>
        <!-- 媒体流轨道 -->
        <StreamTracks v-model="localStream"></StreamTracks>
      </el-main>
    </el-container>

    <el-footer>
      <!-- 媒体设备列表 -->
      <el-table :data="list"
                style="width: 100%"
                :row-class-name="tableRowClassName">
        <el-table-column prop="label"
                         label="名称"></el-table-column>
        <el-table-column label="类型"
                         width="100">
          <template #default="scope">
            {{ deviceLabel[scope.row.kind] }}
          </template>
        </el-table-column>
        <el-table-column prop="deviceId"
                         label="设备ID"></el-table-column>
        <el-table-column label="操作"
                         width="100">
          <template #default="scope">
            <el-button type="danger"
                       size="mini"
                       @click="changeDevice(scope.row)">选择</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-tag v-if="error"
              class="error"
              type="danger">{{ error }}</el-tag>
    </el-footer>
  </WebRTC>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { useDevices } from '@/hooks/webrtc';
import WebRTC from './WebRTC.vue';
import StreamTracks from "./StreamTracks.vue";

const { list, playback, error } = useDevices();

let localStream: MediaStream | null = null;
const localVideo = ref<HTMLVideoElement>();
const deviceLabel = reactive({
  audioinput: "音频输入",
  audiooutput: "音频输出",
  videoinput: "视频输入",
});

const selectDevice: { [key: string]: MediaDeviceInfo | undefined } = reactive<{
  audioinput?: MediaDeviceInfo,
  audiooutput?: MediaDeviceInfo,
  videoinput?: MediaDeviceInfo,
}>({
  audioinput: undefined,
  audiooutput: undefined,
  videoinput: undefined,
});

const options = reactive({
  audio: true,
  video: {
    width: { exact: 720 },
    height: { exact: 405 },
  }
});


const tableRowClassName = ({ row, rowIndex }: any) => {
  return "row-" + row.kind;
}

const closeDevice = () => {
  if (!!localStream) {
    localStream.getTracks().forEach((track: MediaStreamTrack) => {
      track.stop();
    });
  }
}

const start = (videoElement: HTMLMediaElement) => {
  const audioSource = selectDevice.audioinput;
  const videoSource = selectDevice.videoinput;
  const constraints: MediaStreamConstraints = {
    //mode A
    // audio: { deviceId: audioSource ? { exact: audioSource.deviceId } : undefined },
    // video: { deviceId: videoSource ? { exact: videoSource.deviceId } : undefined }

    //mode B
    audio: audioSource ? { deviceId: { exact: audioSource.deviceId } } : false,
    video: videoSource ? { deviceId: { exact: videoSource.deviceId } } : false,
  };

  console.log("constraints", constraints);
  closeDevice();

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream: MediaStream) => {
      localStream = stream;

      stream.addEventListener('inactive', () => {
        console.log("Stream inactive");
      });

      stream.addEventListener('active', () => {
        console.log("Stream active");
      });

      videoElement.addEventListener("loadedmetadata", (e) => {
        console.log("AudioTracks", stream.getAudioTracks());
        console.log("VideoTracks", stream.getVideoTracks());
      });
    })
    .catch((err) => {
      error.value = err.message;
      console.log("navigator.getUserMedia error: ", err.message);
    });
}

const changeDevice = (device: MediaDeviceInfo) => {
  const videoElement: HTMLMediaElement = localVideo.value as HTMLMediaElement;
  if (device.kind === "audiooutput") {
    const deviceId = selectDevice.audiooutput!.deviceId;
    playback(videoElement, deviceId);
  } else {
    selectDevice[device.kind] = device;
    if (videoElement) {
      start(videoElement);
    }
  }
}
</script>

<style lang="scss">
.row-videoinput {
  background-color: #f0f9eb !important;
}
</style>

<style lang="scss" scoped>
.video {
  .video-item {
    position: relative;
    height: 270px;
    width: 480px;
    overflow: hidden;
  }

  video {
    position: absolute;
    height: 270px;
    width: 480px;
    left: 0;
    background: #333;
    margin-right: 10px;
  }

  p.user-name {
    position: absolute;
    height: 22px;
    line-height: 22px;
    max-width: 120px;
    padding: 2px 18px;
    margin: 0;
    color: #fff;
    font-size: 12px;
    vertical-align: middle;
    border-top-right-radius: 20px;
    background: rgba(0, 0, 0, 0.45);
    bottom: 0;
    left: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
