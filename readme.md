# Vite4 and Vue3

This template should help get you started developing with Vue 3 in Vite 4.
## 介绍

本项目使用`Vue3.x`、`Vue Router 4.x`、`Vuex 4.x`基础架构、语言约束`typeScript`、样式`dart-sass`，UI库使用`element-plus`。

开发中，强烈建议使用ts语法进行数据约束，但并不强制，如果您ts语法不是很熟练，可以参考`Vue 3.0`官方`composition-api`部分教程，或者参考`@/components/HelloWorld.vue`组件

**注意：** 非必须，请严禁使用Vue2.0的`选项式API`语法

## 目录
├── public
│   ├── img  # 图片资源
│   │      └── icons # head icons
│   └── index.html  # 模板文件
│   └── robots.txt
├── src
│   ├── api  # 请求接口
│   ├── assets  # 静态资源
│   │       └── images # 图片资源
│   │       └── style # 全局样式
│   ├── components  # 通用业务组件
│   ├── config  # 全局配置(包含echarts主题)
│   │      └── index.ts  # 配置文件入口
│   ├── directives # 指令集
│   ├── hooks # 全局hooks
│   ├── layout  # 布局
│   ├── locale  # 国际化语言包
│   │      └── arco  # arco 主题的其他语言包
│   │      └── lang  # 国际化语言包
│   ├── mock  # 模拟数据
│   ├── views  # 页面模板
│   ├── router # 路由配置
│   ├── store  # 状态管理中心
│   ├── types  # Typescript 类型
│   └── utils  # 工具库
│   └── main.ts  # 入口
├── README.md
├── package.json
├── index.html
└── tsconfig.json

## Project setup
```sh
npm install
```
or
```sh
sh ./install.sh         //linux

cmd ./install.bat       //win
```

### Copy environment variables to create local development
```
cp .env.dev .env.local
```
### Nginx proxy
```nginx
server {
    listen       2022;
    server_name  localhost;

    location /tools {
        #允许跨域请求的域，* 代表所有
        add_header 'Access-Control-Allow-Origin' *;
        #允许带上cookie请求
        add_header 'Access-Control-Allow-Credentials' 'true';
        #允许请求的方法，比如 GET/POST/PUT/DELETE
        add_header 'Access-Control-Allow-Methods' *;
        #允许请求的header
        add_header 'Access-Control-Allow-Headers' *;
        #代理地址
        proxy_pass http://127.0.0.1:8080;
    }
    
    location / {
        #允许跨域请求的域，* 代表所有
        add_header 'Access-Control-Allow-Origin' *;
        #允许带上cookie请求
        add_header 'Access-Control-Allow-Credentials' 'true';
        #允许请求的方法，比如 GET/POST/PUT/DELETE
        add_header 'Access-Control-Allow-Methods' *;
        #允许请求的header
        add_header 'Access-Control-Allow-Headers' *;
        #代理地址
        proxy_pass http://127.0.0.1:8008;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
}
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
- 构建本地开发配置
```
npm run build
```
- 构建DEV环境配置
```
npm run build:dev
```
- 构建UAT环境配置
```
npm run build:uat
```
- 构建生产环境配置
```
npm run build:prod
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

See [Vite Configuration Reference](https://vitejs.dev/config/).


## Git

### Commitlint 

> (Git 提交代码规范检查) [链接](https://github.com/conventional-changelog/commitlint/#what-is-commitlint)

- `feat` 增加新功能
- `fix` 修复问题/BUG
- `style` 代码风格相关无影响运行结果的
- `perf` 优化/性能提升
- `refactor` 重构
- `revert` 撤销修改
- `test` 测试相关
- `docs` 文档/注释
- `chore` 依赖更新/脚手架配置修改等
- `workflow` 工作流改进
- `ci` 持续集成
- `types` 类型定义文件更改
- `wip` 开发中
- `mod` 不确定分类的修改
- `release` 发布
