# Tasks: Complete Chinese Translation

## 阶段一：提取并分类未翻译词条

- [x] Task 1.1: 从 `en.po` 提取全部 2320 条 msgid 到列表
- [x] Task 1.2: 从 `zh.po` 提取已有翻译的 150 条
- [x] Task 1.3: 对比得出 2170 条未翻译词条清单
- [x] Task 1.4: 按类别分类（短词条/长文本/变量词条/特殊格式）

## 阶段二：批量翻译核心 UI 词条（第一优先级）

翻译约 500 条高频 UI 词条，包括：

- [x] Task 2.1: 导航菜单词条（Dashboard, Contacts, Lists, Templates, Broadcasts, Analytics, Automations, Settings 等）
- [x] Task 2.2: 操作按钮词条（Create, Edit, Delete, Save, Cancel, Send, Preview, Export, Import 等）
- [x] Task 2.3: 状态标签词条（Active, Pending, Failed, Success, Draft, Published 等）
- [x] Task 2.4: 错误警告消息（Error, Warning, Failed to..., Invalid, Required 等）
- [x] Task 2.5: 确认对话框（Are you sure?, Confirm, Cancel 等）

## 阶段三：翻译表单和配置词条（第二优先级）

翻译约 800 条表单和配置词条，包括：

- [x] Task 3.1: 表单字段标签（Name, Email, Subject, Title, Description 等）
- [x] Task 3.2: 设置项名称（Profile, Account, Workspace, Permissions 等）
- [x] Task 3.3: 配置描述和提示文本
- [x] Task 3.4: 列表操作相关词条

## 阶段四：翻译长文本和帮助词条（第三优先级）

翻译剩余约 870 条长文本和帮助词条：

- [x] Task 4.1: 说明和描述文本
- [x] Task 4.2: 工具提示和占位符文本
- [x] Task 4.3: 邮件相关词条（Subject, Body, Header, Footer 等）

## 阶段五：编译和验证

- [x] Task 5.1: 运行 `npm run lingui:compile` 重新编译 `zh.js`
- [x] Task 5.2: 验证翻译覆盖率是否达到 100%
- [x] Task 5.3: 检查变量占位符 `{0}`, `{name}` 是否保留正确
- [x] Task 5.4: 运行前端构建确认无错误

## 任务依赖

```
Task 1.1 → Task 1.2 → Task 1.3 → Task 1.4
    ↓
Task 2.1~2.5 (可并行执行)
    ↓
Task 3.1~3.4 (可并行执行)
    ↓
Task 4.1~4.3 (可并行执行)
    ↓
Task 5.1 → Task 5.2 → Task 5.3 → Task 5.4
```
