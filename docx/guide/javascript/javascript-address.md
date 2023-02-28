# 省市区联动

## 省市区数据添加头[全部]

```js
const convert = (list) => {
    return list.map((item, index) => {
        let data = { label: item.name, level: item.level, value: item.adcode, extra: index };

        if (data.level === 'province') {
            item.districts = item.districts || [];
            item.districts.unshift({ name: "全部", level: "city", adcode: null });
        }

        if (data.level === 'city') {
            item.districts = item.districts || [];
            item.districts.unshift({ name: "全部", level: "district", adcode: null });
        }

        if (data.level === 'district') {
            delete item.districts;
        }

        if ('districts' in item && item.districts instanceof Array) {
            data.children = convert(item.districts);
        }
        return data;
    });
}

data.unshift({ name: "全国", level: "province", adcode: null, extra: 0 });
console.log(convert(data));
// => 省市区每一项都增加全部/全国
```
## 省市区移除【全国/全部】项
```js
all = !!all; //是否显示全国
const tree = JSON.parse(JSON.stringify(store.state.dicInfo.gx_city));
const filter = (list) => {
    let arr = [];
    list.forEach((item) => {
        if (item.extra) {
            if (item.children && item.children instanceof Array) {
                item.children = filter(item.children);
            }
            arr.push(item);
        }
    })
    return arr;
}

return all ? tree : filter(tree);
```
<hr/>
