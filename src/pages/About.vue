<template>
    <div>
        <el-button type="success" @click="loadLanguage">加载【泰语】</el-button>
        <ol>
            <li v-for="lang in languages" :key="lang" @click="changeHandler(lang)">{{ lang }}</li>
        </ol>
        <ul>
            <li v-for="(value, key) in appLocale" :key="key"> {{ value }} -> {{ $t(value) }}</li>
            <li v-for="(value, key) in sitLocale" :key="key"> {{ value }} -> {{ $t(value) }}</li>
        </ul>
        <br>
        {{ sitLocale }}
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { i18Config, setLocale } from '@/locale';
import appLocale from '@/locale/lang/index';
import sitLocale from './locale';
import { fetch } from '@/utils/helper';

const languages = computed(() => Object.keys(i18Config.messages));
const i18n = useI18n();

const changeHandler = (lang: string) => {
    i18n.locale.value = lang;
}

const loadLanguage = () => {
    //@ts-ignore
    fetch('/lang/th-TH.json').then((text: string) => {
        setLocale('th-TH', JSON.parse(text));
        // app.use(i18n);
        console.log('i18Config', i18Config);
    })
}
</script>