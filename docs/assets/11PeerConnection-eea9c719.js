import { q as defineComponent, x as ref, Q as onBeforeMount, L as onUnmounted, r as resolveComponent, o as openBlock, a as createElementBlock, f as createVNode, g as withCtx, e as createTextVNode, b as createBaseVNode, F as Fragment } from "./app-46e25049.js";
import { _ as _export_sfc } from "./framework-cc2b3d55.js";
const _hoisted_1 = ["innerHTML"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "11PeerConnection",
  setup(__props) {
    const inputText = ref("");
    const outputText = ref("");
    let servers;
    let dataChannel;
    let publisherPeerConnection;
    let subscriberPeerConnection;
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
      dataChannel = publisherPeerConnection.createDataChannel("sendDataChannel");
      dataChannel.addEventListener("open", function(event) {
        console.log("Send channel state is: " + (dataChannel == null ? void 0 : dataChannel.readyState));
      });
      dataChannel.addEventListener("close", function(event) {
        console.log("Send channel state is: " + (dataChannel == null ? void 0 : dataChannel.readyState));
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
      subscriberPeerConnection.addEventListener("datachannel", function(event) {
        var channel = event.channel;
        channel.addEventListener("message", function(evt) {
          outputText.value = evt.data;
        });
        channel.addEventListener("open", function(evt) {
          console.log(`Receive channel state is: ${channel.readyState}`);
        });
        channel.addEventListener("close", function(evt) {
          console.log(`Receive channel state is: ${channel.readyState}`);
        });
      });
    };
    const inputHandler = (event) => {
      inputText.value = event.target.innerHTML;
      if ((dataChannel == null ? void 0 : dataChannel.readyState) === "open") {
        dataChannel.send(inputText.value);
      }
    };
    onBeforeMount(() => {
      createPublisher();
      createSubscriber();
    });
    onUnmounted(() => {
      publisherPeerConnection == null ? void 0 : publisherPeerConnection.close();
      subscriberPeerConnection == null ? void 0 : subscriberPeerConnection.close();
    });
    return (_ctx, _cache) => {
      const _component_el_divider = resolveComponent("el-divider");
      const _component_el_col = resolveComponent("el-col");
      const _component_el_row = resolveComponent("el-row");
      const _component_el_tag = resolveComponent("el-tag");
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          createVNode(_component_el_row, { gutter: 50 }, {
            default: withCtx(() => [
              createVNode(_component_el_col, {
                class: "center",
                xs: 24,
                sm: 24,
                md: 12
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_divider, { "content-position": "left" }, {
                    default: withCtx(() => [
                      createTextVNode("Publisher")
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createBaseVNode(
                    "div",
                    {
                      class: "textarea",
                      contenteditable: "",
                      onInput: inputHandler
                    },
                    null,
                    32
                    /* HYDRATE_EVENTS */
                  )
                ]),
                _: 1
                /* STABLE */
              }),
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
                  createBaseVNode("div", {
                    class: "textarea",
                    innerHTML: outputText.value
                  }, null, 8, _hoisted_1)
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_el_tag, { class: "error" }, {
            default: withCtx(() => [
              createTextVNode("左侧输入信息，右侧同步显示")
            ]),
            _: 1
            /* STABLE */
          })
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
const _11PeerConnection_vue_vue_type_style_index_0_scoped_7dd4a23f_lang = "";
const _11PeerConnection = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7dd4a23f"], ["__file", "11PeerConnection.vue"]]);
export {
  _11PeerConnection as default
};
