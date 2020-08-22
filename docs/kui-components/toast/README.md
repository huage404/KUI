---
title: Toast - 弹窗
---

# 弹窗

## 效果展示

<ClientOnly>
<toast-demo></toast-demo>
</ClientOnly>

<br>

## 代码结构

```vue
<template>
    <div style="padding-top: 1em;">
        <k-button @click="$toast('点击弹出提示', {position:'top'})">上方弹出</k-button>
        <k-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</k-button>
        <k-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</k-button>
    </div>
</template>

<script>
    import plugin from '../../../src/toast/plugin'
    import GButton from '../../../src/button/button'
    import Vue from 'vue'

    Vue.use(plugin)  // 注意这里需要 use 一下 plugin 插件

    export default {
        components: {'k-button':GButton}
    }
</script>
```