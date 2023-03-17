# JS生成 UUID 

全局唯一标识符 `GUID`*(Globally Unique Identifier)* 也称作 `UUID`*(Universally Unique IDentifier)* 。

`GUID`是一种由算法生成的二进制长度为128位的数字标识符。GUID 的格式为 *“xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx”*，其中的 `x` 是 0-9 或 a-f 范围内的一个32位十六进制数。

在理想情况下，任何计算机和计算机集群都不会生成两个相同的GUID。

`GUID` 的总数达到了2^128^（3.4×10^38^）个，所以随机生成两个相同GUID的可能性非常小，但并不为0。GUID一词有时也专指微软对UUID标准的实现。


<script setup>
import {reactive} from 'vue';
import { 
    example1,
    example2,
    example3,
    example4
} from '@/utils/uuid.ts';

const guid = reactive({
    length: 8,
    radix: 2,
    value1:example1(),
    value2:example2(),
    value3:example3(),
    value4:example4(8,2),
})
</script>
## 示例1

<el-icon @click="guid.value1 = example1()" class="button mr-5"><IconRefresh /></el-icon> {{guid.value1}}


## 示例2

<el-icon @click="guid.value2 = example2()" class="button mr-5"><IconRefresh /></el-icon> {{guid.value2}}


## 示例3

<el-icon @click="guid.value3 = example3()" class="button mr-5"><IconRefresh /></el-icon> {{guid.value3}}

## 示例4

长度 <el-input-number v-model="guid.length" :min="8" :max="32" size="mini" label="长度"></el-input-number> 

<el-radio-group v-model="guid.radix">
    <el-radio :label="2">二进制</el-radio>
    <el-radio :label="10">十进制</el-radio>
    <el-radio :label="16">十六进制</el-radio>
</el-radio-group>

<br/>

<el-icon @click="guid.value4 = example4(guid.length, guid.radix)" class="button mr-5"><IconRefresh /></el-icon> {{guid.value4}}

这个可以指定长度和基数。比如:
```js
// 8 character ID (base=2)
uuid(8, 2) //  "01001010"
// 8 character ID (base=10)
uuid(8, 10) // "47473046"
// 8 character ID (base=16)
uuid(8, 16) // "098F4D35"
```

## 示例源码


:::details 查看源码
@[code](@src/utils/uuid.ts)
:::