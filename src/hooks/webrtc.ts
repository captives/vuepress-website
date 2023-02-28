import { computed, reactive, ref } from "vue";

export const useDevices = () => {
  const list = reactive<Array<MediaDeviceInfo>>([]);
  const audioInput = reactive<Array<MediaDeviceInfo>>([]);
  const audioOutput = reactive<Array<MediaDeviceInfo>>([]);
  const videoInput = reactive<Array<MediaDeviceInfo>>([]);
  const error = ref("");

  const gotStream = (stream?:MediaStream) => {
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
        .catch((error:Error) => {
          let errorMessage:string = error.message;
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
  navigator.mediaDevices.getUserMedia({audio:true, video:true})
  .then(gotStream)
  .then(gotDevices)
  .catch(handleError);
  return {error, list, audioInput, audioOutput, videoInput, playback };
};
