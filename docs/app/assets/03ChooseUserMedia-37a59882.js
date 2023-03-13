import{_ as y}from"./WebRTC.vue_vue_type_script_setup_true_lang-933a8b67.js";import{S as U}from"./StreamPlayer-0a851912.js";import{S as M}from"./StreamTracks-c1359b8a.js";import{_ as S}from"./MediaError.vue_vue_type_script_setup_true_lang-7241cc78.js";import{d as B,f as i,o as s,h as p,w as l,k as a,l as C,a as x,j as b,F as h,i as r,_ as T}from"./index-1833767a.js";import"./webrtc-841bc7c7.js";const F=B({__name:"03ChooseUserMedia",setup(N){const d=i(),u=i(),I=i(),c=i(),V=(_,o)=>{var t;console.log("stream player completed",_),(t=d.value)==null||t.getUserMedia({audio:!0,video:{width:{exact:720},height:{exact:405}}})},m=()=>{var o,t;const _={audio:u.value?{deviceId:{exact:u.value}}:!1,video:c.value?{deviceId:{exact:c.value},width:{exact:720},height:{exact:405}}:!1};(o=d.value)==null||o.close(),(t=d.value)==null||t.getUserMedia(_)};return(_,o)=>{const t=r("el-divider"),g=r("el-col"),k=r("el-row"),v=r("el-option"),f=r("el-select"),w=r("el-space");return s(),p(y,{ref_key:"webrtc",ref:d,title:"动态选择用户设备",onCompleted:V},{video:l(({stream:n})=>[a(k,{gutter:50},{default:l(()=>[a(g,{class:"center",xs:24,sm:24,md:12},{default:l(()=>[a(t,{"content-position":"left"},{default:l(()=>[C("User media")]),_:1}),a(U,{stream:n,autoplay:!0},null,8,["stream"])]),_:2},1024),a(g,{class:"center",xs:24,sm:24,md:12},{default:l(()=>[a(t,{"content-position":"left"},{default:l(()=>[C("Track")]),_:1}),a(M,{value:n,class:"mt-20"},null,8,["value"])]),_:2},1024)]),_:2},1024)]),error:l(({data:n})=>[a(S,{error:n.error},null,8,["error"])]),list:l(({data:n})=>[a(w,{size:50,class:"mb-20"},{default:l(()=>[a(f,{modelValue:c.value,"onUpdate:modelValue":o[0]||(o[0]=e=>c.value=e),placeholder:"请选择摄像头",onChange:m},{default:l(()=>[(s(!0),x(h,null,b(n.videoInput,e=>(s(),p(v,{key:e.deviceId,label:e.label,value:e.deviceId},null,8,["label","value"]))),128))]),_:2},1032,["modelValue"]),a(f,{modelValue:u.value,"onUpdate:modelValue":o[1]||(o[1]=e=>u.value=e),placeholder:"请选择音频输入",onChange:m},{default:l(()=>[(s(!0),x(h,null,b(n.audioInput,e=>(s(),p(v,{key:e.deviceId,label:e.label,value:e.deviceId},null,8,["label","value"]))),128))]),_:2},1032,["modelValue"]),a(f,{modelValue:I.value,"onUpdate:modelValue":o[2]||(o[2]=e=>I.value=e),placeholder:"请选择音频输出",onChange:m},{default:l(()=>[(s(!0),x(h,null,b(n.audioOutput,e=>(s(),p(v,{key:e.deviceId,label:e.label,value:e.deviceId},null,8,["label","value"]))),128))]),_:2},1032,["modelValue"])]),_:2},1024)]),_:1},512)}}});const L=T(F,[["__scopeId","data-v-6c10e16c"]]);export{L as default};
