import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw, RouteLocationRaw } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    name: 'home',
    component: () => import('@/pages/Home.vue')
  }, {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/About.vue')
  }, {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import('@/layout/404.vue')
  }]
})

/**
 * 打开地址/路由,此方法会重新加载/打开新页面
 * 
 * @param option RouteLocationRaw | string，规则参考https://router.vuejs.org/zh/api/#routelocationraw
 * 当option:string = "http|s://localhost:8088/home/1000?a=2"时可打开站外外链地址，否则打开路由外链地址;
 * @param target 继承a的target属性
 * @returns 打开页面的完整目标地址，包含参数
 */
export function open(option: RouteLocationRaw, target: string = '_self', external: boolean = false): string {
  const link = document.createElement('a');
  if (typeof option == 'string' && !!option.match(/(http|https):\/\/|^(\/\/)?/)) {
    link.href = option;
  } else {
    const location = router.resolve(option);
    link.href = external ? location.fullPath : location.href;
  }
  link.target = target;
  document.documentElement.appendChild(link);
  setTimeout(() => {
    link.click();
    link.parentNode?.removeChild(link);
  });
  return link.href;
}

export default router
