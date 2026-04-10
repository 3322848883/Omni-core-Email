# 中文翻译完善规格 (Complete Chinese Translation)

## Why

当前 `zh.po` 翻译文件只有约 150 条翻译（占总词条 2320 条的 6.5%），剩余 2170 条词条未翻译或仍为英文原文。用户需要完整的中文界面支持。

## What Changes

* 补充 `zh.po` 中缺失的 2170 条翻译

* 参考 `en.po` 作为英文原文基准

* 优先翻译高频 UI 词条（菜单、按钮、状态、错误提示）

* 翻译后重新编译 `zh.js`

* 验证翻译覆盖率

## Impact

* **受影响的规格**: i18n 国际化系统

* **受影响的代码文件**:

  * `console/src/i18n/locales/zh.po` — 主要修改目标

  * `console/src/i18n/locales/zh.js` — 重新编译生成

## ADDED Requirements

### Requirement: 翻译覆盖率 100%

系统 SHALL 支持 2320 条词条全部翻译为中文。

#### Scenario: 翻译验证

* **GIVEN** 用户打开语言设置选择"简体中文"

* **WHEN** 界面渲染时

* **THEN** 所有可见文本均显示中文，无英文残留

### Requirement: 翻译准确性

翻译 SHALL 遵循邮件营销平台的专业术语规范：

| 英文          | 中文   |
| ----------- | ---- |
| Broadcast   | 群发邮件 |
| Segment     | 细分   |
| Automation  | 自动化  |
| Template    | 模板   |
| Contact     | 联系人  |
| Open Rate   | 打开率  |
| Click Rate  | 点击率  |
| Bounce      | 退回   |
| Unsubscribe | 退订   |
| Workflow    | 工作流  |

### Requirement: 变量占位符保留

包含变量占位符（如 `{0}`, `{name}`）的词条 SHALL 保留占位符位置不变。

#### Scenario: 变量占位符

* **GIVEN** 原文 "Failed to send to {0} recipients"

* **WHEN** 翻译为中文

* **THEN** 结果为 "发送给 {0} 个收件人失败"

* **AND** 占位符 `{0}` 位置和格式保持不变

## Translation Strategy

### 第一优先级（高频 UI 词条）

* 导航菜单词条

* 操作按钮词条

* 状态标签词条

* 错误/警告消息

### 第二优先级（表单和配置）

* 表单标签和提示

* 设置项名称

* 配置描述

### 第三优先级（长文本和帮助）

* 说明文本

* 错误详情

* 工具提示

## Reference Languages

参考以下语言的翻译格式和术语一致性：

| 语言   | 文件位置       | 说明    |
| ---- | ---------- | ----- |
| 日语   | `ja.po`    | 已完整翻译 |
| 葡萄牙语 | `pt-BR.po` | 已完整翻译 |
| 法语   | `fr.po`    | 已完整翻译 |
| 西班牙语 | `es.po`    | 已完整翻译 |

## Translation Format

```po
msgid "English text"
msgstr "中文翻译"
```

### 多复数形式

```po
msgid "{0} contact selected"
msgid_plural "{0} contacts selected"
msgstr[0] "已选择 {0} 个联系人"
msgstr[1] "已选择 {0} 个联系人"
```

### 包含变量的翻译

```po
msgid "Sending to {0} recipients..."
msgstr "正在发送给 {0} 个收件人..."
```

