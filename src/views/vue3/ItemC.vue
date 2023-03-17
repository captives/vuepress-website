<template>
    <el-descriptions :title="title"
                     :column="1">
        <el-descriptions-item label="组件名称（$attrs）">{{ $attrs.label }} </el-descriptions-item>
        <el-descriptions-item label="日期（props）: ">{{ date }}</el-descriptions-item>
        <el-descriptions-item label="喜欢列表（props）: ">{{ likes }}</el-descriptions-item>
        <el-descriptions-item label="节气列表（provide）: ">{{ solarTerms }}</el-descriptions-item>
        <el-descriptions-item label="选择季节（provide）: ">{{ season }}</el-descriptions-item>
        <el-descriptions-item label="包含节气（computed）: ">
            <template v-for="(item, index) in currentSolarTerms"
                      :key="index">
                &nbsp;&nbsp; <el-link :type="modelValue === item ? 'danger' : 'primary'"
                         @click="selectHandler(item)">
                    {{ item }}</el-link>
            </template>
        </el-descriptions-item>
        <el-descriptions-item label="选择节气（v-model）: ">{{ modelValue }}</el-descriptions-item>
        <el-descriptions-item label="异步组件: ">
            <DateString :value="date"></DateString>
        </el-descriptions-item>
    </el-descriptions>
</template>
<!-- C. 演示Vue3的setup 语法糖开发 -->
<script lang="ts" setup>
import { ref, onMounted, withDefaults, watch, inject, toRefs, toRef, defineExpose, computed, defineAsyncComponent } from 'vue';

// const name: string = "ItemC";

// 声明emit返回类型
const emit = defineEmits<{
    (e: 'update:modelValue', name: string): void
}>();

// 声明props返回类型
type PropsType = {
    modelValue?: String,
    likes: Array<string>,
    date: String | Number | Date,
}

// 使用类型声明时的默认 props 值
const props = withDefaults(defineProps<PropsType>(),
    {
        likes: () => [],
        date: () => Date.now()
    });

defineExpose({
    toLocalString() {
        console.log({ type: "error", message: " - toLocalString 方法触发 ~" })
    }
});

// 异步组件
const DateString = defineAsyncComponent(() => import('./DateString.vue'));

// 带 ref 的响应式变量
let title = ref("Hello ");
// inject
const solarTerms: Array<string> = inject("solarTerms") || [];
const season: any = inject('season');

// 使用toRefs解构必传的props
const { date, likes } = toRefs(props);
// 使用toRef解构非必传的props
const modelValue = toRef(props, 'modelValue');

//computed
let currentSolarTerms = computed(() => {
    let index: number = season.value ? season.value.value : 0;
    index--;
    return solarTerms.slice(index * 6, index * 6 + 6);
});

// 监听一个响应式对象
watch(modelValue, () => {
    requestRemoteData();
}, {
    immediate: true
});

// 监听多个响应式对象
watch([date, likes], (state, prevState) => {
    requestRemoteData();
});

const requestRemoteData = () => {
    console.log("远程数据请求已经发送", date, likes, modelValue);
};

const selectHandler = (name: string) => {
    emit('update:modelValue', name);
};

// 生命周期钩子函数
console.log("created - 组合式API对应选项式API的created函数是setup ~");

onMounted(() => {
    console.log('mounted  - 虚拟DOM挂载完成 ~');
});
</script>