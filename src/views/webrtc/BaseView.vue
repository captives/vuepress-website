<template>
    <template v-if="readied">
        <h3>{{ title }}</h3>
        
        <slot></slot>
    </template>
</template>

<script setup lang="ts">
import { ref, inject, toRefs } from 'vue';
import helper from '@/plugins/helper';

const props = withDefaults(
    defineProps<{
        title?: string;
    }>(),
    {
        title: '',
    }
);

const { title } = toRefs(props);

const readied = ref(false);
const { appendScript } = helper;
const oss = inject('oss') as Function;

appendScript(oss('wertc-adapter/adapter.js'))
    .then(value => readied.value = value)
    .catch(err => console.log(err));
</script>

<style lang="sass" scoped>

</style>