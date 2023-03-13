import { q as defineComponent, x as ref, L as onUnmounted, r as resolveComponent, o as openBlock, a as createElementBlock, i as createCommentVNode, f as createVNode, g as withCtx, e as createTextVNode, F as Fragment } from "./app-46e25049.js";
import WebRTC from "./WebRTC-f4f73f77.js";
import { S as StreamPlayer } from "./StreamPlayer-1ae5192a.js";
import { S as StreamTracks } from "./StreamTracks-53cd32a8.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "12AudioVideoCall",
  setup(__props) {
    const webrtc = ref();
    const localStream = ref();
    const remoteStream = ref();
    let servers = { iceServers: [{ urls: "stun:stun.l.google.com:19302" }] };
    let publisherPeerConnection;
    let subscriberPeerConnection;
    const webrtcCompletd = (list, data) => {
      var _a;
      console.log("stream player completed", list);
      (_a = webrtc.value) == null ? void 0 : _a.getUserMedia({
        audio: true,
        video: {
          width: { exact: 720 },
          height: { exact: 405 }
        }
      });
    };
    const handleCandidate = (candidate, dest, prefix, type) => {
      dest.addIceCandidate(candidate).then(() => {
        console.log("AddIceCandidate success.");
      }).catch(function(error) {
        console.log("Failed to add ICE candidate: " + error.toString());
      });
      console.log(prefix + "New " + type + " ICE candidate: " + (candidate ? candidate.candidate : "(null)"));
    };
    const createPublisher = () => {
      publisherPeerConnection = new RTCPeerConnection(servers);
      localStream.value.getTracks().forEach((track) => {
        publisherPeerConnection.addTrack(track, localStream.value);
      });
      publisherPeerConnection.addEventListener("icecandidate", (event) => {
        if (event.candidate && subscriberPeerConnection) {
          handleCandidate(event.candidate, subscriberPeerConnection, "localPeer#:", "local");
        }
      });
      publisherPeerConnection.createOffer({
        offerToReceiveAudio: true,
        offerToReceiveVideo: true
      }).then((desc) => {
        publisherPeerConnection.setLocalDescription(desc);
        console.log("Offer from publisherPeerConnection \n" + desc.sdp);
        subscriberPeerConnection.setRemoteDescription(desc);
        subscriberPeerConnection.createAnswer().then((desc2) => {
          subscriberPeerConnection.setLocalDescription(desc2);
          console.log(`Answer from subscriberPeerConnection 
${desc2.sdp}`);
          publisherPeerConnection.setRemoteDescription(desc2);
        }).catch(function(error) {
          console.log(`Failed to create session description: ${error.toString()}`);
        });
      }).catch(function(error) {
        console.log(`Failed to create session description: ${error.toString()}`);
      });
    };
    const createSubscriber = () => {
      subscriberPeerConnection = new RTCPeerConnection(servers);
      subscriberPeerConnection.addEventListener("icecandidate", function(event) {
        if (event.candidate && publisherPeerConnection) {
          handleCandidate(event.candidate, publisherPeerConnection, "remotePeer#:", "remote");
        }
      });
      subscriberPeerConnection.addEventListener("track", function(event) {
        remoteStream.value = event.streams[0];
        console.log("received remote stream", event.streams);
      });
    };
    const webrtcStreamHanlder = (stream) => {
      localStream.value = stream;
      createPublisher();
      createSubscriber();
    };
    onUnmounted(() => {
      publisherPeerConnection == null ? void 0 : publisherPeerConnection.close();
      subscriberPeerConnection == null ? void 0 : subscriberPeerConnection.close();
    });
    return (_ctx, _cache) => {
      const _component_el_divider = resolveComponent("el-divider");
      const _component_el_col = resolveComponent("el-col");
      const _component_el_row = resolveComponent("el-row");
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          createCommentVNode(" 对等连接传输流 "),
          createVNode(
            WebRTC,
            {
              ref_key: "webrtc",
              ref: webrtc,
              title: "动态选择用户设备",
              onCompleted: webrtcCompletd,
              onStream: webrtcStreamHanlder
            },
            {
              video: withCtx(({ stream }) => [
                createVNode(
                  _component_el_row,
                  { gutter: 50 },
                  {
                    default: withCtx(() => [
                      createVNode(
                        _component_el_col,
                        {
                          class: "center",
                          xs: 24,
                          sm: 24,
                          md: 12
                        },
                        {
                          default: withCtx(() => [
                            createVNode(_component_el_divider, { "content-position": "left" }, {
                              default: withCtx(() => [
                                createTextVNode("Publisher")
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            createVNode(StreamPlayer, {
                              stream,
                              autoplay: "",
                              controls: false
                            }, null, 8, ["stream"]),
                            createVNode(StreamTracks, { value: stream }, null, 8, ["value"])
                          ]),
                          _: 2
                          /* DYNAMIC */
                        },
                        1024
                        /* DYNAMIC_SLOTS */
                      ),
                      createVNode(_component_el_col, {
                        class: "center",
                        xs: 24,
                        sm: 24,
                        md: 12
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_divider, { "content-position": "left" }, {
                            default: withCtx(() => [
                              createTextVNode("Subscriber")
                            ]),
                            _: 1
                            /* STABLE */
                          }),
                          createVNode(StreamPlayer, {
                            stream: remoteStream.value,
                            autoplay: "",
                            controls: false
                          }, null, 8, ["stream"]),
                          createVNode(StreamTracks, { value: remoteStream.value }, null, 8, ["value"])
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 2
                    /* DYNAMIC */
                  },
                  1024
                  /* DYNAMIC_SLOTS */
                )
              ]),
              _: 1
              /* STABLE */
            },
            512
            /* NEED_PATCH */
          )
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      );
    };
  }
});
const _12AudioVideoCall = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "12AudioVideoCall.vue"]]);
export {
  _12AudioVideoCall as default
};
