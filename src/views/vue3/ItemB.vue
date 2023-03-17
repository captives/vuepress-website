<template>
    <el-descriptions :title="title + '-' + $options.name " :column="1">
        <el-descriptions-item label="组件名称（$attrs）">{{ $attrs.label }} </el-descriptions-item>
        <el-descriptions-item label="日期（props）: ">{{ date }}</el-descriptions-item>
        <el-descriptions-item label="喜欢列表（props）: ">{{ likes }}</el-descriptions-item>
        <el-descriptions-item label="节气列表（provide）: ">{{ solarTerms }}</el-descriptions-item>
        <el-descriptions-item label="选择季节（provide）: ">{{ season }}</el-descriptions-item>
        <el-descriptions-item label="包含节气（computed）: ">
            <template v-for="(item,index) in currentSolarTerms" :key="index">
                &nbsp;&nbsp; <el-link :type="modelValue === item ? 'danger' : 'primary'" @click="selectHandler(item)">
                    {{ item }}</el-link>
            </template>
        </el-descriptions-item>
        <el-descriptions-item label="选择节气（v-model）: ">{{ modelValue }}</el-descriptions-item>
        <el-descriptions-item label="异步组件: ">
            <DateString :value="date"></DateString>
        </el-descriptions-item>
    </el-descriptions>
</template>

<!-- B. 此实例演示Vue 3的setup -->
<script>
import { toRef, toRefs, onMounted, computed, watch, inject, defineAsyncComponent } from 'vue';
export default {
    name: "ItemB",
    components: {
        // 异步组件
        DateString: defineAsyncComponent(() => import('./DateString.vue'))
    },
    // props声明，必须和setup同级
    props: {
        modelValue: String,
        likes: { type: Array, require: true, default: () => [] },
        date: { type: [String, Number, Date], require: true, default: () => new Date() },
    },
    setup (props, { attrs, slots, emit, expose }) {
        // inject
        const solarTerms = inject("solarTerms");
        const season = inject('season');

        //computed
        let currentSolarTerms = computed(() => {
            let index = season.value ? season.value.value : 0;
            index--;
            return solarTerms.slice(index * 6, index * 6 + 6);
        });

        // 使用toRefs解构必传的props
        const { date, likes } = toRefs(props);
        // 使用toRef解构非必传的props
        const modelValue = toRef(props, 'modelValue');

        const requestRemoteData = () => {
            console.log("远程数据请求已经发送", date, likes, modelValue);
        };

        // 监听一个响应式对象
        watch(modelValue, () => {
            requestRemoteData();
        });

        // 监听多个响应式对象
        watch([date, likes], (state, prevState) => {
            requestRemoteData();
        });

        console.log("created - 组合式API对应选项式API的created函数是setup ~", attrs);
        requestRemoteData();
        onMounted(() => {
            console.log('mounted  - 虚拟DOM挂载完成 ~');
        })
        // 这里返回的任何内容都可以用于组件的其余部分
        return {
            title: "Hello ",
            season,
            solarTerms,
            currentSolarTerms,
            selectHandler (name) {
                emit('update:modelValue', name);
            }
        }
    }
}
</script>
