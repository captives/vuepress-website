<script setup lang="ts">
import { ref } from 'vue';
import WebRTCSample from '@/views/canvas/index.vue';
</script>

<template>
  <div class="banner">
    <a href="https://cn.vitejs.dev" target="_blank" class="logo">
      <img src="https://cn.vitejs.dev/logo.svg" alt="Vite logo" />
    </a>
    <a href="https://pinia.vuejs.org" target="_blank" class="pinia logo">
      <img src="https://pinia.vuejs.org/logo.svg" alt="Pinia logo" />
    </a>
    <a href="#" target="_blank" class="logo vue">
      <img src="./assets/vue.svg" alt="Vue logo" />
    </a>
  </div>
  <hr>
  <LottieWeb :value="$oss('assets/lottie/lf20_ae4gsm8c.json')"></LottieWeb>
</template>

<style lang="scss" scoped>
.banner {
  text-align: center;
  height: 100vh;
  padding-top: 30vh;
}

.logo {
  position: relative;
  display: inline-block;

  &:hover {
    filter: drop-shadow(0 0 30px #646cffaa);
  }

  img {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }

  &.vue:hover {
    filter: drop-shadow(0 0 30px #42b883aa);
  }

  &.pinia:hover {
    &::before {
      content: "";
      display: inline-block;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-image: linear-gradient(15deg, #f7d336 65%, #8ae99c 30%);
      filter: blur(30px);
    }
  }

}
</style>
