<!-- See继承： https://v2.vuepress.vuejs.org/zh/reference/default-theme/extending.html; -->
<template>
    <Banner> 压屏通知 </Banner>
    <ParentLayout>
        <template #page-top>
            <h1>这是HomeLayout</h1>
        </template>
    </ParentLayout>
    <div class="footer">This is my custom page footer</div>
</template>

<script setup>
import { computed, toRefs, onMounted } from 'vue';
import { usePageData, useSiteData, usePageFrontmatter, usePageHead, usePageHeadTitle, usePageLang, useRouteLocale, useSiteLocaleData } from '@vuepress/client';
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue';
import Banner from './../components/Banner.vue';

const page = usePageData();
const frontmatter = usePageFrontmatter();
const site = useSiteData();
const head = usePageHead();
const headTitle = usePageHeadTitle();
const pageLang = usePageLang();
const routeLocale = useRouteLocale();
const siteLocaleData = useSiteLocaleData();
const cover = computed(() => page.value.frontmatter.cover);
const fit = computed(() => page.value.frontmatter.coverfit || page.value.frontmatter['cover-fit'] || '100% auto');

onMounted(() => {
    console.log('1.page', page.value);
    console.log('2.site', site.value);
    console.log('3.head', head.value);
    console.log('4.frontmatter', frontmatter.value);
    console.log('5.headTitle', headTitle.value);
    console.log('6.pageLang', pageLang.value);
    console.log('7.routeLocale', routeLocale.value);
    console.log('8.siteLocaleData', siteLocaleData.value);
})
</script>

<style lang="scss" scoped>
.footer {
    padding: 40px 0;
    color: #fff;
    text-align: center;
}
</style>