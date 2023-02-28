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

<!-- E. 演示Vue3的vue-property-decorator开发 -->
<script lang="ts">
import { defineAsyncComponent } from 'vue';
import { Options } from "vue-class-component";
import { Vue, Prop, Model, Watch, Inject, Emit, Ref } from 'vue-property-decorator'

@Options({
    name: "ItemE",
    components: {
        // 异步组件
        DateString: defineAsyncComponent(() => import('./DateString.vue'))
    },
    computed: {
        currentSolarTerms() {
            let index = this.season && this.season.value || 0;
            index--;
            return this.solarTerms.slice(index * 6, index * 6 + 6);
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
    @Inject({ default: () => [] }) readonly solarTerms?: Array<string>;
    @Inject({ default: () => { } }) readonly season?: any;
    @Model("modelValue", String) private value?: string; //可选
    @Prop([String, Number, Date]) readonly date!: String | Number | Date; //必须有值
    @Prop({ default: () => [] }) readonly likes!: Array<string>; //必须有值

    // 当前组件的私有属性
    private title: String = "Hello ";

    @Watch('value')
    valueHandler(value: string, oldVal: string) {
        this.requestRemoteData();
    }

    @Watch('date')
    dateHandler(value: string, oldVal: string) {
        this.requestRemoteData();
    }

    @Watch('likes')
    likesHandler(value: string, oldVal: string) {
        this.requestRemoteData();
    }

    @Emit('change') //自定义事件，等于 this.$emit('change', "更新的值");
    changeHandler() {
        return "更新的值";
    }

    private selectHandler(name: string) {
        this.value = name;
    }

    private requestRemoteData() {
        console.log("远程数据请求已经发送");
    }
}
</script>