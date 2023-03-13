<template>
    <div>
        <b>{{ message.type }} </b>
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
    error?: OverconstrainedError | DOMException | ErrorEvent
}>(), {
    error: undefined
});
const { error } = toRefs(props);

const message = computed(() => {
    //@ts-ignore;
    return ErrorMessage[error.value?.name || error.value?.type];
});
</script>