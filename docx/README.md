---
home: true
title: Home
heroImage: assets/images/logo.svg
actions:
  - text: Get Started
    link: /guide
    type: primary
  - text: GitHub →
    link: https://www.github.com/captives
    type: secondary
features:
- title: Guide
  details: 代码片段
- title: Poetry
  details: 古诗词系列
- title: Tutorial
  details: 教程系列
footer: MIT Licensed | Copyright © 2018-present Evan You
---
<!-- 仅文档专用全局组件 -->
<NpmBadge package="vue"></NpmBadge>
<!-- 公共全局组件 -->
<VueSite></VueSite>

<script>
  console.log('doc env', VITE_APP_GITHUB_API);
</script>