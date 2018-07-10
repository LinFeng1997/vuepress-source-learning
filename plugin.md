## 插件系统 (10分钟）

### 设计思路
构造插件的方式是 new 一个类

* 构造参数是 pluginConfigs
* 实例属性有 hooks、apis
* 初始钩子定义了 ready、compiled、updated、generated 四种状态
* 初始 api 有 client、chainWebpack、enhanceDevServer、extendMarkdown、enhanceAppFiles、outFiles、extendPageData 七种
	- 注册、拓展钩子和 api 逻辑较简单，望名生意即可
	- 解析插件选项的两个方法一个为批量，一个为单个。批量处理时可以看出支持插件为一个函数或对象，单个处理就是注册 api 和钩子。
	- hook.js 导出一个 Hook 类，后期重构为 Tapable 类，值得玩味
		- 构造参数是 name
		- 实例属性有 name 和 handles
		- 实例方法有 tap (symbol, handler) 和 remove (symbol)、async run ()，都是字面意思。
* 在 plugin-api 下增加文件，提供插件的 API
	- AbstractAPI 基类
		- name、items 实例属性
		- add、remove、run 三个实例方法
		- values 只读属性
	- EnhanceAppFiles 全局增强类
		- `add (value /* Array<String> | () => Array<String> */, pluginName)` 添加插件
		- async run (...args) 应用全局增强逻辑
		- getEnhanceAppCode (files) 生成代码
		- resolveItems () 映射项成为插件
	- ExtendPageData 处理站点数据类
		- run (args) 拓展站点数据
	- instantiateAPI 导出一个 instantiateAPI(name) 函数
		- 可选择是全局增强应用、站点数据、动态客户端代码
	- AdditionalPagesOption 增加额外页面数据类
* 增加一个插件上下文类，提供一些基本信息
	- 如 sourceDir、outDir、themePath
	- 冻结了它的 options 属性
	- 增加 writeTemp 实例方法

### 功能

* 支持带有若干个钩子、api 的插件，选项可以是字符串或者函数以及数组
	- 注册钩子和 api 的时候支持类型检测
	- 分离 lastUpdated、register-global-components、enhance-app、activeHeaderLinks 等为插件
* 支持 chainWebpack 的选项
* 支持 markdown 和 devServer 的选型
* 支持动态生成客户端代码的选项
* 支持客户端混入选项
* 增加 TranslationHelper 组件用于辅助切换语言时定位