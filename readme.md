# Vuepress 源码学习心得分享

## 整体架构（12分钟）

### 1. vuepress 解决了什么问题？

生成静态网站,包括：
- 文档 
	![文档 logo](./imgs/old_logo.png)
- 博客
- ...
>[竞品？](https://vuepress.docschina.org/guide/#%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E4%BD%BF%E7%94%A8%E4%B8%8B%E9%9D%A2%E8%BF%99%E4%BA%9B%E5%B7%A5%E5%85%B7%EF%BC%9F)

>React 替代品：[react-static](https://github.com/nozzle/react-static)、[gastby](https://www.gatsbyjs.org/)

### 2. 实现流程是什么样的？
![流程](./imgs/plugin.png)

### 3. 主要用到了哪些技术？
* 命令行库 commandar
* 构建工具 webpack + webpack-chain
* markdown 解释器 markdown-it
* vue 全家桶
* jest 自动测试

### 4. API 如何设计的？
* 零配置：纯 markdown 文件
* [使用配置文件](https://vuepress.docschina.org/config/#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE-basic-config)：.vuepress 下的 config.js
* [自定义主题](https://vuepress.docschina.org/guide/custom-themes.html#%E5%BA%94%E7%94%A8%E7%BA%A7%E5%88%AB%E7%9A%84%E5%A2%9E%E5%BC%BA-app-level-enhancements)：eject 命令弹出代码让你魔改
* 更灵活的自定义：[插件与生命周期钩子](https://github.com/vuejs/vuepress/issues/329)

### 5. 演示使用