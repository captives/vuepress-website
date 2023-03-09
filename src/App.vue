<script setup lang="ts">
import WebRTCSample from '@/views/webrtc/09AudioStreamVolume.vue';
// import CanvasSample from '@/views/web/CanvasSample3DForest.vue';
</script>

<template>
  <div class="banner">
    <a href="#" target="_blank">
      <img src="./assets/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="#" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <hr>
  <!-- <CanvasSample></CanvasSample> -->
  <WebRTCSample></WebRTCSample>
</template>

<style scoped>
.banner{
    text-align: center;
    height: 100vh;
    padding-top: 30vh;
  }

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
