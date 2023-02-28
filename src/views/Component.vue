<template>
    <el-row>
        <el-col :span="24"
                :md="10">
            <el-form :model="form"
                     label-width="90px">
                <el-form-item label="组件">
                    <el-radio-group v-model="selectTabIndex"
                                    @update:modelValue="tabChangeHandler">
                        <el-radio-button v-for="(item, index) in list"
                                         :key="index"
                                         :label="index">{{ item.label }}
                        </el-radio-button>
                        <el-radio-button :label="-1">
                            {{ selectTabIndex == list.length - 1 ? '|<<' : '>>' }} </el-radio-button>
                    </el-radio-group>
                </el-form-item>
                <!-- props 传输复杂对象 -->
                <el-form-item label="日期">
                    <el-date-picker v-model="form.date"
                                    type="date"
                                    placeholder="请选择">
                    </el-date-picker>
                </el-form-item>
                <!-- props传输数组 -->
                <el-form-item label="喜欢的节气">
                    <el-checkbox-group v-model="form.likes"
                                       style="width:300px">
                        <el-checkbox v-for="(item, index) in solarTerms"
                                     :key="index"
                                     :label="item"
                                     name="type">
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <!-- provide index/object 响应式数据 -->
                <el-form-item label="季节">
                    <el-radio-group v-model="selectSeasonValue"
                                    placeholder="请选择"
                                    @update:modelValue="seasonChangeHandler">
                        <el-radio v-for="item in seasons"
                                  :key="item.code"
                                  v-bind="item">
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="选中的季节"> {{ selectSeason }} </el-form-item>
                <el-form-item label="选中的节气"> {{ selectValue }} </el-form-item>
            </el-form>
        </el-col>
        <el-col :span="24"
                :md="14">
            <component :is="currentTabItem.item"
                       v-bind="form"
                       v-model="selectValue"
                       :label="currentTabItem.label">
            </component>
        </el-col>
    </el-row>
</template>
<script lang="ts" setup>
import { ref, reactive, computed, provide, defineAsyncComponent } from 'vue';

// 定义数组对象
let list: Array<any> = [
    { label: "组件A", item: defineAsyncComponent(() => import('./components/ItemA.vue')) },
    { label: "组件B", item: defineAsyncComponent(() => import('./components/ItemB.vue')) },
    { label: "组件C", item: defineAsyncComponent(() => import('./components/ItemC.vue')) },
    { label: "组件D", item: defineAsyncComponent(() => import('./components/ItemD.vue')) },
    { label: "组件E", item: defineAsyncComponent(() => import('./components/ItemE.vue')) }
];

// 定义数据源对象
let seasons = [
    { label: "春天", code: "Spring", value: "1" },
    { label: "夏天", code: "Summer ", value: "2" },
    { label: "秋天", code: "Autumn", value: "3" },
    { label: "冬天", code: "Winter", value: "4" }
];

// 定义响应性属性
let selectTabIndex = ref(1);
// 组件切换的响应性索引
let tabIndex = ref(0);

// 选中的季节响应性对象
let selectSeason = ref<{ label: string; code: string; value: string }>();

// 选中的季节，v-model
let selectSeasonValue = ref();

// 选中的节气，v-model
let selectValue = ref();

// 定义响应性对象
let form = reactive({ likes: [], date: new Date() });

// 二十四节气
let solarTerms: Array<string> = [
    "立春", "雨水", "惊蛰", "春分", "清明", "谷雨",
    "立夏", "小满", "芒种", "夏至", "小暑", "大暑",
    "立秋", "处暑", "白露", "秋分", "寒露", "霜降",
    "立冬", "小雪", "大雪", "冬至", "小寒", "大寒"];

// 计算属性，求当前的元素
const currentTabItem = computed(() => list[tabIndex.value]);

// 二十四节气, 以常量的形式传递给后代组件
provide("solarTerms", solarTerms);

// 选中的季节，以响应方式提供给后代组件
provide('season', selectSeason);

// 定义方法
const tabChangeHandler = (value: number = 0) => {
    // 切换之前,把缓存数据处理完,再渲染组件,可以触发组件created/actived,但是不触发属性的watch
    if (value != -1) {
        tabIndex.value = value;
    } else {
        tabIndex.value = tabIndex.value == list.length - 1 ? 0 : tabIndex.value + 1;
    }
}

const seasonChangeHandler = (label: string) => {
    selectSeason.value = seasons.find(item => item.label === label);
}
</script>