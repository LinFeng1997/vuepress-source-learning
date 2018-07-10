## 其他（2分钟）

### github 模板
* pr
* bug

### package 中的骚操作
* 规定 node >= 8
* 添加 lint 命令，并放在 pre-commit 的 git 钩子中执行
* conventional-changelog-cli 自动生成变更记录

### 有趣的库
* fs-extra Promise 化所有文件操作
* webpackbar webpack 打包进度条
* chalk 高亮命令行
* chokidar 实现热更新
* cross-spawn 兼容 win 平台的命令执行器
* globby 批量获取文件名
* nprogress 页面加载进度条