# lottie 动画

使用教程查看[官网](https://airbnb.io/)

<script lang="ts" setup>
import {ref} from 'vue';
const list:Array<any> = [
    "lf20_SedlEa.json",
    "lf20_Yiahbq.json",
    "lf20_ZdVYgO.json",
    "lf20_ae4gsm8c.json",
    "lf20_amJmnJ.json",
    "lf20_bqyfcixr.json",
    "lf20_pgxl3p2l.json",
    "lf20_q4h79bkv.json",
    "lf20_rz0hyab1.json",
];

const selectValue =ref(list[0]);
</script>
<ul>
    <li v-for="item in list" :key="item" @click="selectValue = item">{{item.replace('.json',"")}}</li>
</ul>
<LottieWeb :value="$oss(`assets/lottie/${selectValue}`)"></LottieWeb>