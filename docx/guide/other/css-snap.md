---
sidebar: false
---

# scroller-snap


- `scroll-snap-type` 捕捉视口
- `scroll-snap-align` 视口对齐方向

<ul class="list">
    <li v-for="i in 24" class="list-item" :key="i">
        <img v-if="i < 10" :src="$oss(`assets/solar-term/0${i}.webp`)">
        <img v-else :src="$oss(`assets/solar-term/${i}.webp`)">
    </li>
</ul>

<style lang="scss">
.list {
    padding:0px;
    margin:0 auto;
    list-style: none;
    width: 375px;
    height: 600px;
    background: orange;
    overflow-y: auto;
    scroll-snap-type: y mandatory;

    &-item {
        height: 85%;
        width: 100%;
        scroll-snap-align: start;
        overflow: hidden;
        box-sizing: border-box;
        padding: 20px 20px 0;

        &:last-child {
            padding-bottom: 20px;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: fill;
        }
    }
}
</style>