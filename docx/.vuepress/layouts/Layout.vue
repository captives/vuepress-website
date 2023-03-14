<!-- See继承： https://v2.vuepress.vuejs.org/zh/reference/default-theme/extending.html; -->
<template>
    <!-- <Banner> 压屏通知 </Banner> -->
    <ParentLayout>
        <template #page-top>
            <div class="cover" v-if="cover" :style="{
                height: '320px',
                background: `url(${$withBase(cover)}) no-repeat 0/cover`,
            }">
                <span class="cover-body">
                    <b class="title">{{ $page.title }}</b>
                    <small v-if="$page.frontmatter.description" class="desc"> {{ $page.frontmatter.description }} </small>
                </span>
            </div>
        </template>
    <!-- <template #page-bottom>
                <div class="footer">定义：This is page-bottom footer</div>
            </template>
            <template #page-content-bottom>
                <div class="footer">定义：This is page-content-bottom footer</div>
                </template> -->
    </ParentLayout>
</template>

<script setup>
import {computed, toRefs, onMounted} from 'vue';
import {usePageData, useSiteData, usePageFrontmatter, usePageHead, usePageHeadTitle, usePageLang, useRouteLocale, useSiteLocaleData} from '@vuepress/client';
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue';
// import Banner from './../components/Banner.vue';

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
});
</script>
<style lang="scss" scoped>
.cover {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3.58rem;

    &-body {
        padding: 20px 50px;
        border-radius: 10px;
        // filter:drop-shadow(4px 4px 10px rgba(101, 103, 114, 0.08));
        // 背景演变
        background-image: linear-gradient(to right, rgba(255, 255, 255, 0.015), rgba(255, 255, 255, .35));
        // 盒子阴影
        box-shadow: 0px 12px 16px rgba(101, 103, 114, 0.08), 0px -12px 16px rgba(101, 103, 114, 0.08);
        // 内容模糊
        backdrop-filter: blur(2px);

        & > * {
            display: block;

            &.title {
                //文字阴影
                text-shadow: 2px 5px 5px rgba(0, 0, 0, .25);
            }

            &.desc {
                font-size: 1rem;
                float: right;
                width: 50%;
                margin-top: 1rem;
                font-style: italic;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;

                &::before {
                    content: "——";
                    display: inline-block;
                    padding-right: 10px;
                }
            }
        }
    }
}

.footer {
    color: #fff;
    line-height: 120px;
    text-align: center;
    background: var(--c-brand);
}
</style>