(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{159:function(e,a,i){"use strict";i.r(a);var l=i(0),n=Object(l.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"content"},[i("h2",{attrs:{id:"插件系统-10分钟）"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#插件系统-10分钟）","aria-hidden":"true"}},[e._v("#")]),e._v(" 插件系统 (10分钟）")]),i("h3",{attrs:{id:"设计思路"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#设计思路","aria-hidden":"true"}},[e._v("#")]),e._v(" 设计思路")]),i("p",[e._v("构造插件的方式是 new 一个类")]),i("ul",[i("li",[e._v("构造参数是 pluginConfigs")]),i("li",[e._v("实例属性有 hooks、apis")]),i("li",[e._v("初始钩子定义了 ready、compiled、updated、generated 四种状态")]),i("li",[e._v("初始 api 有 client、chainWebpack、enhanceDevServer、extendMarkdown、enhanceAppFiles、outFiles、extendPageData 七种\n"),i("ul",[i("li",[e._v("注册、拓展钩子和 api 逻辑较简单，望名生意即可")]),i("li",[e._v("解析插件选项的两个方法一个为批量，一个为单个。批量处理时可以看出支持插件为一个函数或对象，单个处理就是注册 api 和钩子。")]),i("li",[e._v("hook.js 导出一个 Hook 类，后期重构为 Tapable 类，值得玩味\n"),i("ul",[i("li",[e._v("构造参数是 name")]),i("li",[e._v("实例属性有 name 和 handles")]),i("li",[e._v("实例方法有 tap (symbol, handler) 和 remove (symbol)、async run ()，都是字面意思。")])])])])]),i("li",[e._v("在 plugin-api 下增加文件，提供插件的 API\n"),i("ul",[i("li",[e._v("AbstractAPI 基类\n"),i("ul",[i("li",[e._v("name、items 实例属性")]),i("li",[e._v("add、remove、run 三个实例方法")]),i("li",[e._v("values 只读属性")])])]),i("li",[e._v("EnhanceAppFiles 全局增强类\n"),i("ul",[i("li",[i("code",[e._v("add (value /* Array<String> | () => Array<String> */, pluginName)")]),e._v(" 添加插件")]),i("li",[e._v("async run (...args) 应用全局增强逻辑")]),i("li",[e._v("getEnhanceAppCode (files) 生成代码")]),i("li",[e._v("resolveItems () 映射项成为插件")])])]),i("li",[e._v("ExtendPageData 处理站点数据类\n"),i("ul",[i("li",[e._v("run (args) 拓展站点数据")])])]),i("li",[e._v("instantiateAPI 导出一个 instantiateAPI(name) 函数\n"),i("ul",[i("li",[e._v("可选择是全局增强应用、站点数据、动态客户端代码")])])]),i("li",[e._v("AdditionalPagesOption 增加额外页面数据类")])])]),i("li",[e._v("增加一个插件上下文类，提供一些基本信息\n"),i("ul",[i("li",[e._v("如 sourceDir、outDir、themePath")]),i("li",[e._v("冻结了它的 options 属性")]),i("li",[e._v("增加 writeTemp 实例方法")])])])]),i("h3",{attrs:{id:"功能"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#功能","aria-hidden":"true"}},[e._v("#")]),e._v(" 功能")]),i("ul",[i("li",[e._v("支持带有若干个钩子、api 的插件，选项可以是字符串或者函数以及数组\n"),i("ul",[i("li",[e._v("注册钩子和 api 的时候支持类型检测")]),i("li",[e._v("分离 lastUpdated、register-global-components、enhance-app、activeHeaderLinks 等为插件")])])]),i("li",[e._v("支持 chainWebpack 的选项")]),i("li",[e._v("支持 markdown 和 devServer 的选型")]),i("li",[e._v("支持动态生成客户端代码的选项")]),i("li",[e._v("支持客户端混入选项")]),i("li",[e._v("增加 TranslationHelper 组件用于辅助切换语言时定位")])])])}],!1,null,null,null);a.default=n.exports}}]);