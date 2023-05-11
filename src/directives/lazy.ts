import { type App } from 'vue';

export default {
    install(app: App<any>, options?: any) {
        app.directive('lazy', {
            // 在元素被插入到 DOM 前调用
            beforeMount(el, binding, vnode, prevVnode) {
                //把含有v-lazy的元素的图片地址设置为空，也可以自定义图片
                el.src = "";
                //观察者
                const observer = new IntersectionObserver(([{ isIntersecting }]) => {
                    // 图片进入可视区域
                    if (isIntersecting) {
                        //加载真实图片
                        el.src = el.dataset.url;
                        //加载完停止观察
                        observer.unobserve(el)
                    }
                })
                //调用观察者
                observer.observe(el);
            },
        });

    }
}