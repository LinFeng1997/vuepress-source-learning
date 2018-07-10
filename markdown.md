## mardown（5分钟）
基于 markdown-it 这个库拓展，它比 markup 老，但生态更为丰富

### 使用 markdown-it 插件
* 使用 markdown-it-anchor 处理锚
* 使用 markdown-it-container 处理容器 
::: tip 容器
容器内容
:::
* 使用 markdown-it-emoji 处理 emoji 表情😁
* 使用 markdown-it-table-of-contents 生成内容概览
[[toc]]
* 使用 gray-matter 支持 yaml 

### 编写 markdown-it 插件
实际上就是将使用了 markdown 语法的字符串转成了 html 字符串

- **component.js 在根级别替换默认的 htmlBlock 规则以允许使用自定义组件**
	- 借用了 markdown-it 的 html_blocks 和 html_re 模块
	- 定义了一个 HTML_SEQUENCES 正则数组，用于检测指定的 html 标签(开闭都有)
	- 这个自定义插件关键在于 htmlBlock(state, startLine, endLine, silent)
		- 这个函数很复杂，需要讨论理解
		- 大概过程是在筛选某种情况，不通过就返回 false
- highlight.js 高亮代码
- link.js 处理链接，区分内外链
	- 给外部链接加上 rel = noreferrer 属性，防止恶意链接控制。
- highlightLines.js，高亮行代码，借鉴了[markdown-it-highlight-lines](https://github.com/egoist/markdown-it-highlight-lines)
- hoist.js 提升标签，如 style、script
- containers.js 内容块加工
- lineNumbers 显示行号，依赖于 preWrapper
- preWrapper 包裹 pre 标签
- slugify 
- snippet 支持导入文件作为`代码围栏`中的内容
