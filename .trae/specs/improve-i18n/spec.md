# 前端国际化完善 Spec

## Why
当前 Notifuse 前端存在硬编码的英文文本，导致中文界面显示不一致。需要：
1. 默认全中文界面
2. 参考日文和中文包进行翻译对比
3. 确保翻译准确性

## What Changes
- 修改前端代码中的硬编码英文文本为翻译函数调用
- 更新翻译包 (zh.po, ja.po)，添加缺失的翻译条目
- 确保默认语言为中文

## Impact
- 影响文件：
  - console/src/components/segment/messages.ts
  - console/src/components/segment/operator_*.tsx
  - console/src/i18n/locales/zh.po
  - console/src/i18n/locales/ja.po
- 影响语言：简体中文 (zh)、日文 (ja)

## ADDED Requirements
### Requirement: Segment 组件国际化
The system SHALL 将 Segment 组件中的所有硬编码英文标签翻译为中文。

#### Scenario: 时间操作符
- **WHEN** 用户查看时间筛选条件
- **THEN** 显示"早于日期"、"晚于日期"、"在日期范围内"等中文标签

#### Scenario: 其他操作符
- **WHEN** 用户查看其他筛选条件
- **THEN** 显示"等于"、"大于"、"包含"等中文标签

### Requirement: 验证消息国际化
The system SHALL 将所有表单验证消息翻译为中文。

#### Scenario: 必填字段验证
- **WHEN** 用户提交表单时字段为空
- **THEN** 显示"此字段为必填项"等中文提示

## MODIFIED Requirements
### Requirement: 默认语言设置
**现有**: 默认语言为英文
**修改后**: 默认语言为中文
