## webpack 管理（10分钟）
webpack-chain 动态生成配置，而不是声明配置

### base、client、server 三套配置
和 Vue 的 SSR 三套配置对应
* 基础配置
	- 实例化一个 markdown，在 markdown-loader 的参数中传进去
	- 只在需要兼容浏览器时时添加 babel-loader
	- 为 rule 添加 postcss-loader，配置 autoprefixer 插件
	- createCSSRule 批量应用样式加载规则
		- 把关于 loader 的逻辑抽象到 applyLoaders(rule, modules) 里
			- 为 css-loader 增加选项：是否模块化、生产环境压缩、打包文件名设置
	- 获取缓存目录和缓存标识在 cache-loader 和 vue-loader 选项中使用，封装在 applyVuePipeline(rule) 里
		- vue 和 markdown 规则都调用了 applyVuePipeline，markdown 规则额外使用 markdown-loader(./markdownLoader)，参数传 sourceDir, markdown
	- 使用 injections 注入常量开启 GA 和 Worker
* 开发配置
	- 模拟 node 变量
	- 针对服务端构建生成客户端 manifest 文件
		- 添加 optimize-css-assets-webpack-plugin 插件，在选项里对 cssProcessorOptions 配置安全模式
* 构建配置
	- 针对 SSR 添加部分配置
	- 使用 copy-webpack-plugin 复制 .vuepress/public 下的资源文件


### 编写 webpack 插件（打断点演示）
apply 里是插件逻辑

* markdownLoader.js 实现 md 转 vue 
	- 通过 getOptions 方法获取 markdown-it 实例
	- 新建 devCache，用于手动缓存链式加载器，用文件哈希值做键
		- 使用 lru-cache 算法，当处于线上环境或者已有 vue 文件使用缓存
		- 允许 md-it 添加自定义插件，并在 render 函数中注册数据：先检查相对链接是否有效，再获取结果模板，加入缓存
	- yaml front matter 也在此被转成 markdown
		- 创建一个缓存哈希表用来 diff frontmatter 和 标题，如果有变化，触发更新事件
	- 生成 vue 的 html 代码
		- 在模板里把要提升的标签也拼接进去，使用 hoist 插件产生的标签
	- 新导出一个 frontmatterEmitter 为一个事件触发器
* clientPlugin.js 用作客户端 ssr 渲染的插件 VueSSRClientPlugin
	- 在 compiler 的钩子里触发 vue-client-plugin
		- 获取 manifest 对象
		- 遍历 stats.modules，忽略多个块中的重复块，移除拓展的 hash，找到与同一块相关的所有资产模块
		- 最终定义 compilation 的 assets 数组内容，调用回调
* HeadPlugin.js，将传入的标签们生成 head 标签推入到 data 里
* DevLogPlugin.js 
	- 在 apply(compiler) 中设置 vuepress-log 钩子：先清屏，然后从 options 获取主机、端口、公共路径，提示相关构建信息。
