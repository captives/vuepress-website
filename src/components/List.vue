<template>
    <ul class="list">
        <li class="list-item" v-for="(item, index) in  list " :key="index" @click="clickHandler(item, index)"
            :class="{ active: selected(item, index), disabled, horizontal: direction === 'horizontal' }" :style="itemStyle">
            <!-- 索引 -->
            <div v-if="$slots.index || showIndex" class="index">
                <slot name="index" :data="item" :index="index">{{ index + 1 }}</slot>
            </div>

            <!-- 内容 -->
            <span class="content">
                <slot :data="item">{{ item[labelFiled] || item['label'] || item }}</slot>
            </span>

            <!-- 扩展 -->
            <div v-if="$slots.extra" class="extra">
                <slot name="extra" :data="item"></slot>
            </div>
        </li>
    </ul>
</template>

<script lang="ts" setup>
export interface ItemRecord { value?: string, id?: string, [key: string]: any };
export type ListItemRecord = ItemRecord | string | number | boolean;

import { StyleHTMLAttributes, watch } from 'vue';
import { toRefs, ref, computed, type ComputedRef, type Ref } from 'vue';

const emit = defineEmits<{
    (e: "change", value: ListItemRecord, index?: number): void
    (e: "update:modelValue", value: string | number | null, index?: number): void
}>();

const props = withDefaults(defineProps<{
    gutter: number,
    modelValue: string | number | null,
    showIndex: boolean,
    disabled: boolean,
    direction: 'vertical' | 'horizontal',
    list: Array<ListItemRecord>,
    labelFiled: string,
}>(), {
    gutter: 6,
    modelValue: null,
    showIndex: false,
    disabled: false,
    direction: "vertical",
    list: () => [],
    labelFiled: 'value'
});

const { modelValue, showIndex, disabled, list, labelFiled, direction, gutter } = toRefs(props);
const selectValue: Ref<string | number | null> = ref(null);
const selectIndex: Ref<number> = ref(-1);

watch([modelValue], () => {
    selectValue.value = modelValue.value || list[selectIndex.value][labelFiled.value];
    selectIndex.value = list.value.findIndex((item: ListItemRecord) => ((item as ItemRecord)[labelFiled.value] || item) === selectValue.value);
}, { immediate: true });

const itemStyle: ComputedRef<any> = computed(() => {
    if (direction.value === 'horizontal') {
        return { marginLeft: gutter.value / 2 + "px", marginRight: gutter.value / 2 + "px" };
    } else {
        return { marginTop: gutter.value / 2 + "px", marginBottom: gutter.value / 2 + "px" };
    }
});

const selected: ComputedRef<(item: ListItemRecord, index: number) => boolean> = computed(() => {
    return (item: ListItemRecord, index: number) => {
        if ((item as ItemRecord)[labelFiled.value]) {
            return item[labelFiled.value] === selectValue.value || index === selectIndex.value;
        } else {
            return item === selectValue.value || index === selectIndex.value;
        }
    }
});

const clickHandler = (item: ListItemRecord, index: number) => {
    if (!disabled.value) {
        selectIndex.value = index;
        selectValue.value = (item as ItemRecord)[labelFiled.value] || item;
        emit('change', item, index);
        emit('update:modelValue', selectValue.value, index);
    }
}
</script>

<style lang="scss" scoped>
.list {
    padding: 0;

    &-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 5px;
        padding: 14px 24px;
        margin: 2px 0;

        .content {
            padding: 0 20px;
            flex: 1;
        }

        .extra {
            color: #a1b8ba;
        }

        &:not(.disabled) {
            cursor: pointer;
        }

        &.horizontal {
            display: inline-flex;

            .content {
                padding: 0;
            }
        }

        &.active,
        &:not(.disabled):hover {
            background: linear-gradient(90deg, #41b782, #86d169);

            .extra {
                color: #FFF;
            }
        }
    }
}
</style>