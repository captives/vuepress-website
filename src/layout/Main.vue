<template>
  <!-- 页面视图 -->
  <router-view></router-view>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';
// import { useI18n } from 'vue-i18n';
// import enUS from '@arco-design/web-vue/es/locale/lang/en-us';
// import zhCN from '@arco-design/web-vue/es/locale/lang/zh-cn';
// import thTH from '@/locale/arco/th-TH';
// import viVN from '@/locale/arco/vi-VN'
// import useLocale from '@/hooks/locale';
// const { t } = useI18n();
// const { currentLocale } = useLocale();
// document.querySelector("body")?.setAttribute("class", "arco-layout");
// const locale: any = computed(() => {
//   switch (currentLocale.value) {
//     case 'zh-CN':
//       return zhCN;
//     case 'en-US':
//       return enUS;
//     case 'th-TH':
//       return thTH;
//     case 'vi-VN':
//       return viVN;
//     default:
//       return enUS;
//   }
// });

const router = useRouter();
router.beforeEach((to: any) => {
  document.title = "loading....";
});

router.afterEach((to: any) => {
  document.title = String(to.meta.hasOwnProperty('title') ? to.meta.title : to.name || "Kaibo");
});
</script>
