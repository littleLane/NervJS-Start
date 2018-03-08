A development environment base on NervJS and Athena2 tool！

## 缘由

去年刚进公司时，开发了一套项目，由于浏览器的兼容性选择了基于 `gulp` 自动化。后续迭代一直不是很顺手，于是想着重构一波。现阶段正式三大框架炒得火热，但是主要兼容现代浏览器，只能望而却步。偶然在一次分享会上听说了 [NervJS](https://github.com/NervJS/nerv)，基于 `React 16`，还兼容 `IE8`，于是就看看咯！

## 简介

[NervJS官网](https://nerv.aotu.io/)介绍是这样的

> Nerv is a virtual-dom based JavaScript (TypeScript) library with identical React 16 API, which offers much higher performance, tinier package size and better browser compatibility.

反正又是京东出的，就研究研究，顺带重构掉之前老的项目。

## 探索

### 基础环境

由于 `NervJS` 的神奇特性，开发环境的搭建可以沿用 `React` 的开发环境，也可以自己手动操作，也可以使用 `o2team` 团队提供的脚手架 `Athena2`。本项目的环境搭建就是基于 `Athena2` 的。

[Athena2 官方 github](https://github.com/o2team/athena2)

官方 `github` 上有炒鸡详细的构建步骤，可以自由摸索，也可以继续往下阅读！

#### get starting

在开始之前确保机器上已经具备新的 `Node` 环境（>=4.0.0）。

##### 全局安装 athena2

> $ [sudo] npm install -g athena2

也可以使用 `taobao` 镜像

> $ [sudo] npm i -g athena2 --registry=http://registry.npm.taobao.org --disturl=http://npm.taobao.org/mirrors/node

##### 初始化新项目

基于命令 `athena2`，同时提供了简写 `ath2`

> $ ath2 a --name [name] --description [description] --sass --template [template] --framework [framework]

参数说明

参数 `--name` 指定项目名称

参数 `--description` 指定项目描述

参数 `--template` 指定项目使用的模板，输入模板名称，支持 `complete（多页）`、`simple（单页）`、`h5（H5活动）`三种应用模式。

参数 `--framework` 指定项目使用的框架，输入框架名称，支持 `Nerv`、`React`、`Vue`三大框架。

参数 `--sass` 指定项目使用 `sass`

其他没什么好说的，搜刮官方文档就可以了！