## 前端主题（13分钟）

### 布局
![布局](./imgs/layout.png)

* 页面、布局、首页和 404 页
	- 页面的上一页和下一页来源于 prev、next 两个计算属性，从 yaml 和 resolvePage 获取
	- 全局监听 scroll 事件，重新设置激活的哈希(节流)
	- 随机 404 消息
* 导航、搜索框和下拉框
	- algolia 搜索功能
* 侧边栏
	- resolveItem(item, pages) 将 item 分三种情况：字符串、数组、对象,将得到的配置映射成侧边栏数据
	- 渲染出的是 router-link 组件，使用自定义激活类匹配逻辑
* 样式管理
	- config.stylus 存储变量，如 $textColor、$accentColor、$borderColor、$codeBgColor、$sidebarWidth、$contentWidth
	- theme 和 mobile 分别是整体 和 移动端样式
	- arrow.stylus 四个方向的箭头样式
	- code.stylus 代码块和高亮代码样式
	- custom-blocks.stylus 提示块样式
* ga 使用
	- 一个开放 API 平台，可以用来存储网站内容以供搜索
	- 需要 [docsearch-scraper](https://github.com/algolia/docsearch-scraper) 生成的数据
* 国际化支持
	- 基于配置

### PWA
使用 worker 实现 

### 自定义应用或主题
比如西瓜播放器文档

### 其他
- $withBase 方法
- 动态 import 语法兼容一开始就访问浏览器 API 的库