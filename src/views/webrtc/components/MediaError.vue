<template>
    <div>
        <b>{{ message.name }} </b>
        <p>{{ message.desc }}</p>
    </div>
</template>
<script lang="ts" setup>
import { toRefs, computed } from 'vue';
import { ErrorMessage } from './../hooks/webrtc';
const emit = defineEmits<{
    (e: "change", value: string): void
}>();
const props = withDefaults(defineProps<{
    error?: DOMException | ErrorEvent
}>(), {
    error: undefined
});
const { error } = toRefs(props);

const message = computed(() => {
    return ErrorMessage[error.value instanceof DOMException ? error.value?.name : error.value?.type];
});
</script>