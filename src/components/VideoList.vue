<template>
    <ul class="list">
        <li class="list-item" v-for="(item, index) in  list " :key="index"
            @click="clickHandler(item, index)" :class=" { active: selected(item, index) } ">
            <span class="index">P{{ index + 1 }}</span>
            <span class="title">{{ item.title }}</span>
            <span v-if=" item.durction " class="time">{{ item.durction }}</span>
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { toRefs, computed, type ComputedRef } from 'vue';
export interface ListItemRecord { title: string, href: string, durction?: string | number };

const emit = defineEmits<{
    (e: "change", value: ListItemRecord, index?: number): void
}>();

const props = withDefaults(defineProps<{
    selectIndex: number,
    selectValue: string | number | null,
    list: Array<ListItemRecord>,
}>(), {
    list: () => [],
    selectIndex: -1,
    selectValue: null
});

const { list, selectIndex, selectValue } = toRefs(props);

const selected: ComputedRef<(item: ListItemRecord, index: number) => boolean> = computed(() => {
    return (item: ListItemRecord, index: number) => {
        return item.title === selectValue.value || item.href === selectValue.value || index === selectIndex.value;
    }
});

const clickHandler = (item: ListItemRecord, index: number) => {
    emit('change', item, index);
}
</script>

<style lang="scss" scoped>
.list {
    padding: 0;

    &-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        border-radius: 5px;
        padding: 14px 24px;
        margin: 2px 0;

        .title {
            padding: 0 10px;
            flex: 1;
        }

        .time {
            color: #a1b8ba;
        }

        &.active,
        &:hover {
            background: linear-gradient(90deg, #41b782, #86d169);

            .time {
                color: #c1ffc3;
            }
        }
    }
}
</style>