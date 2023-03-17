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

<!-- D. 演示Vue3的vue-class-component开发 -->
<script lang="ts">
import { defineAsyncComponent } from 'vue';
import { Options, Vue } from "vue-class-component";

@Options({
    name: "ItemD",
    components: {
        DateString: defineAsyncComponent(() => import('./DateString.vue'))
    },
    props: {
        modelValue: String,
        likes: { type: Array, require: true, default: () => [] },
        date: { type: [String, Number, Date], require: true, default: () => new Date() }
    },
    inject: [
        "solarTerms", //常量
        "season"     //响应性数据
    ],
    computed: {
        currentSolarTerms() {
            let index = this.season.value ? this.season.value.value : 0;
            index--;
            return this.solarTerms.slice(index * 6, index * 6 + 6);
        }
    },
    watch: {
        likes(value) {
            this.requestRemoteData();
        },
        date(value) {
            this.requestRemoteData();
        }
    },
    created() {
        console.log('created - 二十四节气', this.season, this.solarTerms);
        this.requestRemoteData();
    },
    mounted() {
        console.log('mounted  - 虚拟DOM挂载完成 ~');
    }
})
export default class Winter extends Vue {
    private title: String = "Hello ";

    private requestRemoteData() {
        console.log("远程数据请求已经发送");
    }

    private selectHandler(name: string) {
        this.$emit('update:modelValue', name);
    }
}
</script>