import { computed, reactive, ref } from "vue";

/**
 * 错误类型
 */
export const ErrorMessage = {
  'InvalidStateError': { type: '拒绝错误', desc: "调用getDisplayMedia()的 context 中的 document 不是完全激活的; 例如，也许它不是最前面的标签" },
  'NotAllowedError': { type: '拒绝错误', desc: "用户拒绝授予访问屏幕区域的权限，或者不允许当前浏览实例访问屏幕共享。" },
  'NotFoundError': { type: '拒绝错误', desc: "没有可用于捕获的屏幕视频源。" },
  'NotReadableError': { type: '拒绝错误', desc: "用户选择了屏幕，窗口，标签或其他屏幕数据源，但发生了硬件或操作系统级别错误或锁定，从而预先占用了共享所选源。" },
  'OverconstrainedError': { type: '转换错误', desc: "创建流后，由于无法生成兼容的流导致应用指定的 constraints 失效。" },
  'TypeError': { type: '类型错误', desc: "指定的 constraints 包括调用 getDisplayMedia() 时不允许的constraints。这些不受支持的constraints是 advanced 的，任何约束又有一个名为 min 或 exact 的成员。" },
  // 发生以上为匹配到的错误和故障
  'AbortError': { type: '中止错误', desc: "发生未知错误或故障" },
}

export const useDevices = () => {
  const list = reactive<Array<MediaDeviceInfo>>([]);
  const audioInput = reactive<Array<MediaDeviceInfo>>([]);
  const audioOutput = reactive<Array<MediaDeviceInfo>>([]);
  const videoInput = reactive<Array<MediaDeviceInfo>>([]);
  const error = ref("");

  const gotStream = (stream?: MediaStream) => {
    // if(stream){
    //   videoElement.srcObject = stream;
    // }
    // Refresh button list in case labels have become available
    return navigator.mediaDevices.enumerateDevices();
  }

  const gotDevices = (deviceInfos: Array<MediaDeviceInfo>) => {
    list.splice(0, list.length, ...deviceInfos);
    audioInput.splice(0, audioInput.length, ...deviceInfos.filter((device: MediaDeviceInfo) => device.kind === "audioinput"));
    audioOutput.splice(0, audioOutput.length, ...deviceInfos.filter((device: MediaDeviceInfo) => device.kind === "audiooutput"));
    videoInput.splice(0, videoInput.length, ...deviceInfos.filter((device: MediaDeviceInfo) => device.kind === "videoinput"));
  };

  const handleError = (err: ErrorEvent) => {
    console.log(err);
    error.value = err.message;
  };

  //https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
  const playback = (videoElement: HTMLMediaElement, deviceId: string) => {
    console.log("videoElement", deviceId, typeof videoElement);
    //@ts-ignore;
    if (typeof videoElement.sinkId !== "undefined") {
      //@ts-ignore;
      videoElement.setSinkId(deviceId).then(() => {
        console.log(`Success, audio output device attached: ${deviceId}`);
      })
        .catch((error: Error) => {
          let errorMessage: string = error.message;
          if (error.name === "SecurityError") {
            errorMessage = `You need to use HTTPS for selecting audio output device: ${error}`;
          }
          console.error(errorMessage);
          // Use default device
        });
    } else {
      console.warn("Browser does not support output device selection.");
    }
  }

  // navigator.mediaDevices.enumerateDevices()
  navigator.mediaDevices.getUserMedia({ audio: true, video: true })
    .then(gotStream)
    .then(gotDevices)
    .catch(handleError);
  return { error, list, audioInput, audioOutput, videoInput, playback };
};
