<template>
    <!-- 对等连接传输流 -->
    <WebRTC ref="webrtc" title="动态选择用户设备" @completed="webrtcCompletd" @stream="webrtcStreamHanlder">
        <template #video="{ stream }">
            <el-row :gutter="50">
                <el-col class="center" :xs="24" :sm="24" :md="12">
                    <el-divider content-position="left">Publisher</el-divider>
                    <StreamPlayer :stream="stream" autoplay :controls="false"></StreamPlayer>
                    <StreamTracks :value="stream"></StreamTracks>
                </el-col>
                <el-col class="center" :xs="24" :sm="24" :md="12">
                    <el-divider content-position="left">Subscriber</el-divider>
                    <StreamPlayer :stream="remoteStream" autoplay :controls="false"></StreamPlayer>
                    <StreamTracks :value="remoteStream"></StreamTracks>
                </el-col>
            </el-row>
        </template>
    </WebRTC>
</template>
<script lang="ts" setup>
import { ref, onBeforeMount, onUnmounted } from 'vue';
import WebRTC from './WebRTC.vue';
import StreamPlayer from './components/StreamPlayer.vue';
import StreamTracks from './components/StreamTracks.vue';

const webrtc = ref<typeof WebRTC>();
const localStream = ref<MediaStream>();
const remoteStream = ref<MediaStream>();

let servers: RTCConfiguration = { iceServers: [{ urls: "stun:stun.l.google.com:19302" }] };
let publisherPeerConnection: RTCPeerConnection;
let subscriberPeerConnection: RTCPeerConnection;

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

const handleCandidate = (candidate: RTCIceCandidate, dest: RTCPeerConnection, prefix: string, type: string) => {
    dest.addIceCandidate(candidate).then(() => {
        console.log("AddIceCandidate success.");
    }).catch(function (error) {
        console.log("Failed to add ICE candidate: " + error.toString());
    });
    console.log(prefix + "New " + type + " ICE candidate: " + (candidate ? candidate.candidate : "(null)"));
}

const createPublisher = () => {
    //创建对等连接 RTCPeerConnection
    publisherPeerConnection = new RTCPeerConnection(servers);

    localStream.value!.getTracks().forEach((track) => {
        publisherPeerConnection.addTrack(track, localStream.value!);
    });

    publisherPeerConnection.addEventListener('icecandidate', (event: RTCPeerConnectionIceEvent) => {
        if (event.candidate && subscriberPeerConnection) {
            handleCandidate(event.candidate, subscriberPeerConnection, "localPeer#:", "local");
        }
    });

    publisherPeerConnection.createOffer({
        offerToReceiveAudio: true,
        offerToReceiveVideo: true,
    }).then((desc) => {
        publisherPeerConnection.setLocalDescription(desc);
        console.log("Offer from publisherPeerConnection \n" + desc.sdp);
        subscriberPeerConnection.setRemoteDescription(desc);
        subscriberPeerConnection.createAnswer().then((desc2) => {
            subscriberPeerConnection.setLocalDescription(desc2);
            console.log(`Answer from subscriberPeerConnection \n${desc2.sdp}`);
            publisherPeerConnection.setRemoteDescription(desc2);
        }).catch(function (error) {
            console.log(`Failed to create session description: ${error.toString()}`);
        });
    })
        .catch(function (error) {
            console.log(`Failed to create session description: ${error.toString()}`);
        });
}

const createSubscriber = () => {
    subscriberPeerConnection = new RTCPeerConnection(servers);
    subscriberPeerConnection.addEventListener('icecandidate', function (event: RTCPeerConnectionIceEvent) {
        if (event.candidate && publisherPeerConnection) {
            handleCandidate(event.candidate, publisherPeerConnection, "remotePeer#:", "remote");
        }
    });

    subscriberPeerConnection.addEventListener('track', function (event: RTCTrackEvent) {
        remoteStream.value = event.streams[0];
        console.log("received remote stream", event.streams);
    })
}

const webrtcStreamHanlder = (stream: MediaStream) => {
    localStream.value = stream;
    createPublisher();
    createSubscriber();
}

onUnmounted(() => {
    publisherPeerConnection?.close();
    subscriberPeerConnection?.close();
});
</script>