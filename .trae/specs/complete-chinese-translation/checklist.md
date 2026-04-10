# Checklist: Complete Chinese Translation

## 翻译完整性检查

- [x] zh.po 文件中 msgstr 空值或英文原文的条目数为 0
- [x] 所有 2291 条 msgid 均有对应的中文 msgstr

## 翻译准确性检查

- [x] 高频 UI 词条（Dashboard→仪表盘, Contacts→联系人 等）翻译正确
- [x] 邮件营销专业术语翻译一致（Broadcast→群发邮件, Segment→细分 等）
- [x] 变量占位符 `{0}`, `{name}`, `{value}` 位置保持不变
- [x] 复数形式翻译完整（msgid_plural 处理正确）

## 编译检查

- [x] `npm run lingui:compile` 执行成功，无错误
- [x] 生成的 zh.js 文件包含所有 2291 个 key
- [x] zh.js 中无 msgstr 为空或纯英文的条目

## 构建检查

- [x] `npm run build` 执行成功，无 TypeScript/Lint 错误
- [x] 前端控制台无 i18n 相关警告

## 运行时检查

- [x] 语言切换到简体中文后，界面显示中文
- [x] 刷新页面后语言设置保持（localStorage）
- [x] 无英文残留文本（除非是用户输入内容）

## 术语一致性检查

以下术语在所有词条中保持一致翻译：

| 术语 | 翻译 |
|------|------|
| Broadcast | 群发邮件 |
| Segment | 细分 |
| Automation | 自动化 |
| Contact | 联系人 |
| Template | 模板 |
| Workspace | 工作区 |
| Open Rate | 打开率 |
| Click Rate | 点击率 |
| Bounce | 退回 |
| Unsubscribe | 退订 |
| Delivery | 投递 |
