## 单元测试（5分钟）
基于 jest

* jest.config
	- 指定解析(moduleNameMapper)目录和转译(transform)目录
	- 指定快照序列化器 snapshotSerializers

### 准备
- prepare.js：将 temp 目录下的站点数据文件拷贝过来，用于支撑用例
- hoc.js：mock 具名组件
- util.js 准备路由、Vue 实例、测试套件
	- 导出 getRouter()
	- 导出 getLocalVueByMode(mode)
	- 导出 modeTestRunner(description, testFn, modes = ['simple', 'i18n']) 封装测试代码 
- prepare 文件夹
	- fixtrue 文件夹下有三种文档用例：简单文档、使用了配置的文档、自定义布局的文档
	- util.spec  测试源码 util 下的 isIndexFile 和 fileToPath 函数
	- resolveOptions.spec 测试 resolveOptions 函数

### 组件测试
* 使用快照对比
* 选取 dom 比较预期值

### 函数测试
测试用例的设计

* markdown 插件测试
	- 获取 md 文件，渲染后比较快照
	- 比较多个渲染结果
* util 函数测试