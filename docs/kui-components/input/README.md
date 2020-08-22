---
title: Input - 输入框
---

# 搜索框

## 效果展示

<br>

<ClientOnly>
<kuiInput />
</ClientOnly>

<br>

## 使用方法

```
<k-input placeholder="可输入" />
<k-input readonly placeholder="唯一值" />
<k-input disabled placeholder="不可输入" />
<k-input error="警告信息" placeholder="警告" />
```

<br>

## 可选参数

<br>

| 参数 | 描述 | 参数类型 | 默认值 |
|---|---|---|---|
| value | 输入框内容 | String | 无 |
| type | 输入框类型 | String | text |
| disabled | 不可点击 | Boolean | false |
| readonly | 唯一值 | Boolean | false |
| placeholder | 占位符 | text | 无 |
| error | 警告信息 | text | 无 |