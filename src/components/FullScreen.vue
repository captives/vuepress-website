<template>
  <div ref="container" :class="{ 'container': true, 'fullscreen': modelValue }">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, ref, onMounted, watch } from 'vue';

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void
  (e: "change", value: boolean): void
}>();

const props = withDefaults(defineProps<{
  modelValue?: boolean,
}>(), {
  modelValue: false,
});

const { modelValue } = toRefs(props);
const fullscreen = ref<boolean>(false);
const container = ref<HTMLElement>();

const isFullScreen = () => {
  return !!(
    document.fullscreen ||
    document['mozFullScreen'] ||
    document['webkitIsFullScreen'] ||
    document['webkitFullScreen'] ||
    document['msFullScreen']
  );
}

const isFullscreenEnabled = () => {
  return !!(
    document.fullscreenEnabled ||
    document['mozFullScreenEnabled'] ||
    document['webkitFullscreenEnabled'] ||
    document['msFullscreenEnabled'] || false
  );
}

const toggleFullScreen = () => {
  if (modelValue.value) {
    exitFullScreen();
  } else {
    enterFullScreen(container.value!);
  }

  emit("update:modelValue", isFullScreen());
}

const enterFullScreen = (element: HTMLElement) => {
  if (element.requestFullscreen) {
    //W3C
    element.requestFullscreen();
  } else if ('mozRequestFullScreen' in element) {
    //FireFox
    element['mozRequestFullScreen']();
  } else if ('webkitRequestFullScreen' in element) {
    //Chrome等
    element['webkitRequestFullScreen']();
  } else if ('msRequestFullscreen' in element) {
    //IE11
    element['msRequestFullscreen']();
  }
}

const exitFullScreen = () => {
  if (!isFullScreen()) {
    return;
  }

  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if ('mozCancelFullScreen' in document) {
    document['mozCancelFullScreen']();
  } else if ('webkitCancelFullScreen' in document) {
    document['webkitCancelFullScreen']();
  } else if ('msExitFullscreen' in document) {
    document['msExitFullscreen']();
  }
}

const getFullscreenElement = () => {
  return (document.fullscreenElement ||
    document['mozFullScreenElement'] ||
    document['msFullScreenElement'] ||
    document['webkitFullscreenElement'] ||
    null);
}

watch(modelValue, (full: boolean) => {
  fullscreen.value = full;
  full ? enterFullScreen(container.value!) : exitFullScreen();
});

onMounted(() => {
  document.addEventListener("fullscreenchange", (event) => {
    emit("update:modelValue", isFullScreen());
    emit("change", isFullScreen());
  });
})
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  border: 1px solid orange;
  box-sizing: content-box;
  transition: all 0.2s;
}
</style>