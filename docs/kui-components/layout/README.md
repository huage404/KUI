---
title: Layout - 布局
---

# 布局

**展示效果（一）**

<ClientOnly>
<layout-demo1></layout-demo1>
</ClientOnly>

**代码结构**

```vue
<k-layout style="color: white; margin-bottom:50px;">
    <k-header style="height: 50px; background:lightskyblue;">
        header
    </k-header>
    <k-content style="height: 100px; background:deepskyblue;">
        content
    </k-content>
    <k-footer style="height: 50px; background:lightskyblue;">
        footer
    </k-footer>
</k-layout>
```
<br>

**展示效果（二）**

<ClientOnly>
<layout-demo2></layout-demo2>
</ClientOnly>

**代码结构**

```vue
<k-layout style="color: white; overflow:hidden; margin-bottom:50px;">
    <k-header style="height: 50px; background:lightskyblue;">
        header
    </k-header>
    <k-layout>
        <k-sider style="height: 100px; background:#ddd; width:200px; color: black;">
            sider
        </k-sider>
        <k-content style="height: 100px; background:deepskyblue;">
            content
        </k-content>
    </k-layout>
    <k-footer style="height: 50px; background:lightskyblue;">
        footer
    </k-footer>
</k-layout>
```

<br>

**展示效果（三）**

<ClientOnly>
<layout-demo3></layout-demo3>
</ClientOnly>

**代码结构**

```vue
<k-layout style="color: white; overflow:hidden; margin-bottom:50px;">
    <k-sider style=" background:#ddd; width:200px; color: black;">
        sider
    </k-sider>
    <k-layout>
        <k-header style="height: 50px; background:lightskyblue;">
            header
        </k-header>
        <k-content style="height: 100px; background:deepskyblue;">
            content
        </k-content>
        <k-footer style="height: 50px; background:lightskyblue;">
            footer
        </k-footer>
    </k-layout>
</k-layout>
```