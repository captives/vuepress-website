import{S as b}from"./StreamPlayer-0a851912.js";import{S}from"./StreamTracks-c1359b8a.js";import{_ as R}from"./StreamRecorder.vue_vue_type_script_setup_true_lang-d40a61c0.js";import{_ as U}from"./MediaError.vue_vue_type_script_setup_true_lang-7241cc78.js";import{d as z,f as i,o as x,a as A,k as e,w as o,F as B,i as c,l as n,t as L,h as C}from"./index-1833767a.js";import"./webrtc-841bc7c7.js";const q=z({__name:"10MediaStreamMixer",setup(P){const T=i(),_=i(""),p=i(!1),m=i(),v=i(),r=i(),y=t=>{let a=null;const u=0;return t!=null&&t.captureStream||t!=null&&t.mozCaptureStream,t&&(t.captureStream?a=t.captureStream(u):t.mozCaptureStream?a=t.mozCaptureStream(u):(console.error("Stream capture is not supported"),a=null)),console.log("Capture stream",a),a},V=()=>{var t,a,u;r.value=new MediaStream,(t=m.value)==null||t.getVideoTracks().forEach(l=>{var s;(s=r.value)==null||s.addTrack(l.clone())}),p.value?(a=v.value)==null||a.getAudioTracks().forEach(l=>{var s;(s=r.value)==null||s.addTrack(l.clone())}):(u=m.value)==null||u.getAudioTracks().forEach(l=>{var s;(s=r.value)==null||s.addTrack(l.clone())})},M=()=>{var t;(t=r.value)==null||t.getTracks().forEach(a=>{a.stop()}),r.value=void 0},h=(t,a)=>{m.value=y(a)||void 0},w=(t,a)=>{v.value=y(a)||void 0};return(t,a)=>{const u=c("URLInput"),l=c("el-divider"),s=c("VideoPlayer"),d=c("el-col"),f=c("el-row"),$=c("el-checkbox"),g=c("el-button");return x(),A(B,null,[e(u,{list:t.$videoList,modelValue:_.value,"onUpdate:modelValue":a[0]||(a[0]=k=>_.value=k)},null,8,["list","modelValue"]),e(f,{gutter:50},{default:o(()=>[e(d,{class:"center",xs:24,sm:24,md:12},{default:o(()=>[e(l,{"content-position":"left"},{default:o(()=>[n("Video")]),_:1}),e(s,{src:t.$oss(_.value),class:"mt-20",autoplay:"",onCanplay:h},null,8,["src"])]),_:1}),e(d,{class:"center",xs:24,sm:24,md:12},{default:o(()=>[e(l,{"content-position":"left"},{default:o(()=>[n("Tracks")]),_:1}),e(S,{value:m.value},null,8,["value"])]),_:1})]),_:1}),e(f,{gutter:50},{default:o(()=>[e(d,{class:"center",xs:24,sm:24,md:12},{default:o(()=>[e(l,{"content-position":"left"},{default:o(()=>[n("Audio")]),_:1}),e(s,{src:t.$oss("/assets/medias/jinli.mp3"),autoplay:"",controls:"",onCanplay:w},null,8,["src"]),e(f,{class:"mt-20"},{default:o(()=>[e($,{modelValue:p.value,"onUpdate:modelValue":a[1]||(a[1]=k=>p.value=k),class:"pr-20"},{default:o(()=>[n(L(p.value?"替换声道":"原声道"),1)]),_:1},8,["modelValue"]),r.value?(x(),C(g,{key:1,type:"danger",onClick:M},{default:o(()=>[n(" 停止混入 ")]),_:1})):(x(),C(g,{key:0,type:"success",onClick:V},{default:o(()=>[n(" 开始混入 ")]),_:1}))]),_:1})]),_:1}),e(d,{class:"center",xs:24,sm:24,md:12},{default:o(()=>[e(l,{"content-position":"left"},{default:o(()=>[n("Tracks")]),_:1}),e(S,{value:v.value},null,8,["value"])]),_:1})]),_:1}),e(f,{gutter:50},{default:o(()=>[e(d,{class:"center",xs:24,sm:24,md:12},{default:o(()=>[e(l,{"content-position":"left"},{default:o(()=>[n("Remix stream & Recorder")]),_:1}),e(b,{stream:r.value,muted:!0,autoplay:!0},null,8,["stream"]),e(R,{stream:r.value},null,8,["stream"])]),_:1}),e(d,{class:"center",xs:24,sm:24,md:12},{default:o(()=>[e(l,{"content-position":"left"},{default:o(()=>[n("Tracks")]),_:1}),e(S,{value:r.value},null,8,["value"])]),_:1})]),_:1}),e(U,{error:T.value},null,8,["error"])],64)}}});export{q as default};
