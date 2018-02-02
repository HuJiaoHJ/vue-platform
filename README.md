# vue-platform

[![npm version](https://badge.fury.io/js/vue-platform.svg)](https://badge.fury.io/js/vue-platform)

[![NPM](https://nodei.co/npm/vue-platform.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue-platform/)

vue-platform是一个Vue插件，区分PC端和H5移动端，支持针对不同端展示不同的视图层

### 使用背景

1、对于已有的PC项目，想对系统中某一部分模块移动化（业务逻辑基本一致，只有视图层存在差异），为了提高开发效率，决定在原代码结构上进行开发，复用原有 URL 和业务逻辑，只需开发视图层即可

2、使用 `vue-platform` 插件区分PC端和H5移动端，针对不同端动态加载不同的 Vue 组件来切换视图层

### 实现

判断优先级：

1、判断 `query` 中的 `_platform`

2、读取 `localStorage` 中的 `_platform`

3、解析 `userAgent`

4、最后将结果存储到 `localStorage` 的 `_platform` 字段，方便后续访问页面直接使用

<p align="left">
    <img width="800px" src="./screenshot/vue-platform.png">
</p>

### 使用

#### 安装

``` bash
$ npm install vue-platform
```

#### 使用

##### app.js

``` js
import vuePlatform from 'vue-platform';

Vue.use(vuePlatform);
```

##### middle.vue

``` html
<template>
    <component :is="content"></component>
</template>

<script>
    import pc from './pc.vue';
    import mobile from './mobile.vue';

    export default {
        data () {
            return {
                content: 'pc',
            };
        },
        created () {
            if (this.$platform === '2') {
                this.content = 'mobile';
            }
        },
        components: {
            pc,
            mobile,
        },
    };
</script>
```