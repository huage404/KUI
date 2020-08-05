# 快 UI，一个基于 Vue 的 UI 框架

作者：huage404

[![Build Status](https://travis-ci.org/huage404/KUI.svg?branch=master)](https://travis-ci.org/huage404/KUI)

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，希望对你有用

## 开始使用

1. 添加 CSS 样式

    使用本框架前，请在 CSS 样式这种开启 box-sizing: border-box
    
    ```css
    *,*::before,*::after{ box-sizing: border-box }
    ```
    
    IE8 及以上浏览器都支持此样式
    
    你还需要设置默认的 CSS 颜色变量（后续会改为 SCSS 变量）
    ```css
    html {
            --button-height: 32px;
            --font-size: 14px;
            --button-bg: white;
            --button-active-bg: #eee;
            --border-radius: 4px;
            --color: #333;
            --border-color: #999;
            --border-color-hover: #666;
        }
    ```
    
    IE 15 及以上浏览器都支持此样式

2. 安装 KUI
    
    ```
    npm install --save kui-demo
    ```
   
3. 引入 KUI
    ```vue
    import {Button , ButtonGroup , Icon} from 'kui-demo';
    import 'kui-demo/dist/index.css';
   
    export default {
       name: '#app',
       components: {
           HelloWorld,
           'g-button': Button,
           'g-icon': Icon
       }   
    }
    ```

4. 引入 svg symbols
```html
<script src="//at.alicdn.com/t/font_1983529_ejhe38l08b.js"></script>
```



## 文档


## 提问


## 变更记录


## 联系方式


## 贡献代码

