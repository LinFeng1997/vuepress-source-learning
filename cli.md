## cli（8分钟）
* 使用 semver 限制 node 版本
* 引入 commander
	- 支持命令行传参功能
	- 错误处理增强
	- 在实际调用 dev、build 等函数的时候包了一层:wrapCommand，其实就是一个错误装饰器

### prepare.js 的步骤
1. 加载用户选项，大多是 config.js 里的配置(通过 loadConfig 方法)
	- 根据 base 处理 head 标签的 url
	- 解析 outDir
	- 解析 theme，默认解析 default-theme 下的组件，如果用户自定义了就替换之
	- 解析 theme config
	- 解析 algolia，一个搜索工具
	- 解析 markdown
	- 解析 pageFiles，使用 globby 预处理
	- 解析 lastUpdated
	- 解析 pagesData
		- 解析页面数据的时候给返回的 data 增加 key 属性，随机的，并且 path 属性也经过 encodePath 的编码
	- 解析 site data
	- 最后得到
	```
	{
	    siteConfig,
	    siteData,
	    sourceDir,
	    outDir,
	    publicPath: base,
	    pageFiles,
	    pagesData,
	    themePath,
	    themeLayoutPath,
	    themeNotFoundPath,
	    themeEnhanceAppPath,
	    useDefaultTheme,
	    isAlgoliaSearch,
	    markdown
	}
	```
2. 生成路由和组件注册代码
	- 文件就是字符串
3. 生成站点数据
	- 辅助搜索等
	- 测试也有用到
	- 展示 lib/app/.temp/siteData.js
4. 处理用户复写
	- 样式覆盖
	- 全局应用增强
	- 主题覆盖

### dev.js 启动服务
- dev 函数增加 cliOptions 参数，从而端口等可自定义
- 页面通过 Watcher 文件热更新，忽略文档的 md 文件
- 解析 webpack 配置，并使用 vuepress-html-webpack-plugin 、HeadPlugin(处理 siteConfig)、DevLogPlugin 插件
	- 从 siteConfig.configureWebpack 获取用户自定义 webpack 配置，然后通过 applyUserWebpackConfig 合并到当前配置
	- 自定义插件在 webpack 部分再提及
- webpack-server 启服务 + koa 的各种中间件

### build.js 构建 SSR
- build 函数增加 cliOptions 参数，从而输出文件夹、端口等可自定义
- 应用用户自定义的 webpack 配置
- 通过 manifests 进行 SSR 渲染
	- 渲染页面那里有较大改动，新增 `renderPage({ path: pagePath })` 异步函数
		- 就是之前的构造上下文、渲染 HTML 字符串写入文件的逻辑
- 从 siteConfig.configureWebpack 获取用户自定义配置，然后通过 applyUserWebpackConfig 合并到当前配置
- 开启 worker 实现 PWA

### eject 弹出以自定义配置
- 实际就是拷贝文件 + 把文件内容当字符串改掉