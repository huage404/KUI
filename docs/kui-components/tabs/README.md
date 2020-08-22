---
title: Tabs - 标签
---

# 标签

## 效果预览

<ClientOnly>
<tabs-demo></tabs-demo>
</ClientOnly>

<br>

## 代码结构

```vue
<k-tabs :selected="selected">
    <k-tabs-head>
        <k-tabs-item name="1">1</k-tabs-item>
        <k-tabs-item name="2">2</k-tabs-item>
    </k-tabs-head>
    <k-tabs-body>
        <k-tabs-pane name="1">content 1</k-tabs-pane>
        <k-tabs-pane name="2">content 2</k-tabs-pane>
    </k-tabs-body>
</k-tabs>
```