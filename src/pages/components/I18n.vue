<template>
    <div>
        <el-button type="success" @click="loadLanguage">加载【泰语】</el-button>
        <list v-model="locale" :list="languages" direction="horizontal" :gutter="20"></list>
        <h1>列表1 对象</h1>
        <list :list="list" :showIndex="true" labelFiled="locale" modelValue="app.loading">
            <template #default="{ data }">
                {{ $t((data as ItemRecord).locale) }}
            </template>
            <template #extra="{ data }">
                {{ (data as ItemRecord).value }}
            </template>
        </list>

        <h1>列表2 字符串</h1>
        <!-- 列表 -->
        <list :list="Object.values(pageLocale)" :showIndex="true" :disabled="true" modelValue="site.date.thu">
            <template #default="{ data }">
                {{ $t(String(data)) }}
            </template>
            <template #extra="{ data }">
                {{ data }}
            </template>
        </list>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import List, { type ItemRecord } from '@/components/List.vue';
import { i18Config, setLocale } from '@/locale';
import appLocale from '@/locale/lang/index';
import pageLocale from '@/pages/locale';
import { fetch } from '@/utils/helper';

const languages = computed(() => Object.keys(i18Config.messages).map(l => ({ value: l })));
const i18n = useI18n();

const locale = computed({
    set(value: string) {
        i18n.locale.value = value;
    },
    get() {
        return i18n.locale.value;
    }
});

const list: Array<ItemRecord> = Object.values(Object.assign({}, appLocale)).map(l => ({ locale: l }));

const loadLanguage = () => {
    //@ts-ignore
    fetch('/lang/th-TH.json').then((text: string) => {
        setLocale('th-TH', JSON.parse(text));
        // app.use(i18n);
        console.log('i18Config', i18Config);
    })
}
</script>