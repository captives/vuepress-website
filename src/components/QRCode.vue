<template>
    <el-card style="width:max-content">
        <div ref="qrElement"></div>
        <div class="h-justify__align mt-10">
            <span style="font-size:14px; padding-right:5px">{{ time }}</span>
            <el-button type="success" text @click="refreshHanlder">刷新</el-button>
        </div>
    </el-card>
</template>
<script lang="ts" setup>
import { toRefs, inject, ref, watch } from 'vue';
import { ElMessage } from 'element-plus';
import helper from '@/utils/helper';

const oss = inject('oss') as Function;
const { appendScript } = helper;
const emit = defineEmits<{
    (e: "change", value: any): void
}>();
const props = withDefaults(defineProps<{
    value?: string,
    width?: string | number,
    height?: string | number,
}>(), {
    value: '',
    width: 200,
    height: 200
});
const { value, width, height } = toRefs(props);
const qrElement = ref<HTMLDivElement>();
const time = ref('');
let qrcode;

const makeCode = () => {
    if (!value.value) {
        ElMessage({ type: "error", message: "请输入内容" });
    } else {
        time.value = new Date().toLocaleString();
        qrcode?.clear();
        qrcode?.makeCode(value.value);
    }
}

watch(value, makeCode);

appendScript(oss('js/libs/qrcode.min.js'))
    .then(value => {
        qrcode = new window['QRCode'](qrElement.value, {
            width: width.value,
            height: height.value,
        });
        console.log('qr----code', qrcode);
        makeCode();
    })
    .catch(err => {
        console.warn('加载失败');
    });
const refreshHanlder = () => {
    emit('change', qrcode);
}
</script>