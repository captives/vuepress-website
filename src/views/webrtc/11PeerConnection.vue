<template>
    <el-row :gutter="50">
        <el-col class="center" :xs="24" :sm="24" :md="12">
            <el-divider content-position="left">Publisher</el-divider>
            <div class="textarea" contenteditable @input.prop="inputHandler"></div>
        </el-col>
        <el-col class="center" :xs="24" :sm="24" :md="12">
            <el-divider content-position="left">Subscriber</el-divider>
            <div class="textarea" v-html="outputText"></div>
        </el-col>
    </el-row>
    <el-tag class="error">左侧输入信息，右侧同步显示</el-tag>
</template>
<script lang="ts" setup>
import { ref, onBeforeMount, onUnmounted } from 'vue';

const inputText = ref<string>("");
const outputText = ref<string>("");

// {"iceServers": [{"urls": "stun:stun.l.google.com:19302"}]};
let servers: RTCConfiguration;
let dataChannel: RTCDataChannel;
let publisherPeerConnection: RTCPeerConnection;
let subscriberPeerConnection: RTCPeerConnection;

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
    //创建数据通道
    dataChannel = publisherPeerConnection.createDataChannel("sendDataChannel");

    dataChannel.addEventListener('open', function (event: Event) {
        console.log("Send channel state is: " + dataChannel?.readyState);
    });

    dataChannel.addEventListener('close', function (event: Event) {
        console.log("Send channel state is: " + dataChannel?.readyState);
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

    subscriberPeerConnection.addEventListener('datachannel', function (event: RTCDataChannelEvent) {
        var channel = event.channel;
        channel.addEventListener('message', function (evt: MessageEvent) {
            outputText.value = evt.data;
        });

        channel.addEventListener('open', function (evt: Event) {
            console.log(`Receive channel state is: ${channel.readyState}`);
        });

        channel.addEventListener('close', function (evt: Event) {
            console.log(`Receive channel state is: ${channel.readyState}`);
        })
    });
}

const inputHandler = (event: Event) => {
    inputText.value = (event.target as HTMLDivElement).innerHTML;
    if (dataChannel?.readyState === "open") {
        dataChannel.send(inputText.value);
    }
}

onBeforeMount(() => {
    createPublisher();
    createSubscriber();
});

onUnmounted(() => {
    publisherPeerConnection?.close();
    subscriberPeerConnection?.close();
});
</script>

<style lang="scss" scoped>
.textarea {
    padding: 20px;
    line-height: 25px;
    text-align: left;
    height: 270px;
    background: #eee;
    white-space: pre-wrap;
    overflow: auto;
}
</style>