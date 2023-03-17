---
sidebar: false
---
# VCard 电子名片

vCard是电子名片的文件格式标准。它一般附加在电子邮件之后，但也可以用于其它场合（如在互联网上相互交换）。vCard可包含的信息有：姓名、地址资讯、电话号码、URL，logo，相片等。

<script setup>
import { ref, computed } from 'vue';
import { example4 } from '@/utils/uuid.ts';

const uuid = ref(example4(4, 10));
const value = computed(() => `BEGIN:VCARD 
VERSION:3.0 
N:姓;名 
TEL;CELL;VOICE:183-0000-${uuid.value} 
TEL;WORK;VOICE: 
EMAIL:ming.xing@live.com 
TITLE:资深工程师 
ROLE:研发组 
ORG:互联网教育 
ADR;WORK:;;单位地址;深圳;广东;433000;中国 
ADR;HOME;POSTAL;PARCEL:;;街道地址;深圳;广东;433330;中国 
URL: xxxxxxxxx.com
END:VCARD`);

</script>

<QRCode :value="value" @change="uuid=example4(4, 10)"></QRCode>

```html
BEGIN:VCARD 
VERSION:3.0 
N:姓;名 
TEL;CELL;VOICE:183-0000-7788 
TEL;WORK;VOICE: 
EMAIL:ming.xing@live.com 
TITLE:资深工程师 
ROLE:研发组 
ORG:互联网教育 
ADR;WORK:;;单位地址;深圳;广东;433000;中国 
ADR;HOME;POSTAL;PARCEL:;;街道地址;深圳;广东;433330;中国 
URL: wwwedu
END:VCARD
```