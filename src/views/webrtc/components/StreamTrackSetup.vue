<template>
    <div v-show="!item.disabled" class="h-justify__left mt-10" v-for="(item, index) in list" :key="index">
        <span class="title mr-20" :title="item.key">{{ item.label }}</span>
        <el-select v-if="(item.options instanceof Array)" v-model="item.value" class="m-2" @change="changeHandler(item)">
            <el-option v-for="option in item.options" :key="option" :label="option" :value="option" />
        </el-select>
        <el-slider v-else :min="item.min" :max="item.max" v-model="item.value" @change="changeHandler(item)" />
    </div>
</template>
<script lang="ts" setup>
export interface TrackItemType {
    label: string,
    key: string,
    disabled: boolean,
    options?: Array<any>,
    min?: number,
    max?: number,
    step?: number,
    value: string | number | null
}
import { toRefs, reactive, watch } from 'vue';
const emit = defineEmits<{
    (e: "change", value: string): void
}>();

const props = withDefaults(defineProps<{
    track?: MediaStreamTrack
}>(), {
    track: undefined
});

const { track } = toRefs(props);

const list: Array<TrackItemType> = reactive([
    { label: "曝光模式", key: 'exposureMode', disabled: false, value: null },
    { label: "曝光时间", key: 'exposureTime', disabled: false, value: null },
    { label: "曝光补偿", key: 'exposureCompensation', disabled: false, value: null },
    { label: "亮度", key: 'brightness', disabled: false, value: null },
    { label: "白平衡模式", key: 'whiteBalanceMode', disabled: false, value: null },
    /**
     * 控制视频 平移、倾斜、缩放
     * https://webrtc.github.io/samples/src/content/getusermedia/pan-tilt-zoom/
     **/ 
    { label: "平移", key: 'pan', disabled: false, value: null },
    { label: "倾斜", key: 'tilt', disabled: false, value: null },
    { label: "变焦", key: 'zoom', disabled: false, value: null }
]);

watch(track, () => {
    if (!track.value) {
        return;
    }

    const capabilities = track.value.getCapabilities();
    const settings = track.value.getSettings();
    for (const item of list) {
        item.disabled = !(item.key in settings);
        if (!(item.key in settings)) {
            console.log(`Camera does not support ${item.key}.`);
            continue;
        }

        item.value = settings[item.key];
        if (Array.isArray(capabilities[item.key])) {
            item.options = capabilities[item.key];
        } else {
            Object.assign(item, capabilities[item.key]);
        }
    }
}, { immediate: true });


const changeHandler = (item: TrackItemType) => {
    const advanced = [{ [item.key]: item.value }];
    track.value!.applyConstraints({ advanced }).then(() => {
        console.log('Did successfully apply new constraints: ', { advanced });
        console.log('New settings: ', track.value!.getSettings());
    }).catch(err => {
        console.error('applyConstraints() failed: ', err);
    })
}
</script>
<style lang="scss" scoped>
.title {

    & ~ div {
        flex: 1;
    }
}
</style>