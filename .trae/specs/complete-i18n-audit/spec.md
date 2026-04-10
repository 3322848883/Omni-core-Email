# 全面国际化核对与完善 Spec

## Why
根据用户截图反馈，前端界面仍存在大量未翻译的英文文本，需要进行一次全面的三语（英/日/中）对比核对，确保所有界面元素都有完整的中文翻译。

## What Changes
- 对比英文(en.po)、日文(ja.po)、中文(zh.po)三个翻译文件
- 识别中文文件中缺失或未翻译的条目
- 参考日文翻译完善中文翻译
- 修复代码中硬编码的英文文本
- 重新编译翻译文件

## Impact
- 受影响文件：
  - `console/src/i18n/locales/zh.po`
  - `console/src/i18n/locales/ja.po` (参考)
  - `console/src/i18n/locales/en.po` (参考)

## 详细待翻译清单

### 1. 危险区域页面 (Danger Zone)
| 英文原文 | 日文翻译 | 当前中文 | 建议中文翻译 |
|---------|---------|---------|-------------|
| This action cannot be undone. | この操作は元に戻せません。 | This action cannot be undone. | 此操作无法撤销。 |
| This will permanently delete the workspace "{0}" and all of its data. To confirm, please enter the workspace ID: | ワークスペース"{0}"とそのすべてのデータを永久に削除します。確認するには、ワークスペースIDを入力してください： | This will permanently delete the workspace "{0}" and all of its data. To confirm, please enter the workspace ID: | 这将永久删除工作区 "{0}" 及其所有数据。要确认，请输入工作区 ID： |

### 2. SMTP桥接页面 (SMTP Bridge)
| 英文原文 | 日文翻译 | 当前中文 | 建议中文翻译 |
|---------|---------|---------|-------------|
| SMTP bridge server for forwarding transactional emails | トランザクションメールを転送するためのSMTPブリッジサーバー | SMTP bridge server for forwarding transactional emails | 用于转发事务性邮件的 SMTP 桥接服务器 |
| SMTP bridge is not configured. | SMTPブリッジが設定されていません。 | SMTP bridge is not configured. | SMTP 桥接未配置。 |
| Learn how to enable SMTP bridge | SMTPブリッジの有効化方法を学ぶ | Learn how to enable SMTP bridge | 了解如何启用 SMTP 桥接 |
| Port for the SMTP bridge server (default: 587) | SMTPブリッジサーバーのポート（デフォルト：587） | Port for the SMTP bridge server (default: 587) | SMTP 桥接服务器端口（默认：587） |

### 3. 自动化创建页面 (Automations)
| 英文原文 | 日文翻译 | 当前中文 | 建议中文翻译 |
|---------|---------|---------|-------------|
| Unsaved changes | 未保存の変更 | Unsaved changes | 未保存的更改 |
| NODES | ノード | NODES | 节点 |
| Minimap | ミニマップ | Minimap | 小地图 |
| Trigger Event | トリガーイベント | Trigger Event | 触发事件 |
| Select the event that will trigger this automation | このオートメーションをトリガーするイベントを選択してください | Select the event that will trigger this automation | 选择将触发此自动化的事件 |
| Once per contact | コンタクトごとに一度 | Once per contact | 每个联系人一次 |

### 4. 自动化节点名称
| 英文原文 | 日文翻译 | 当前中文 | 建议中文翻译 |
|---------|---------|---------|-------------|
| Delay | 遅延 | Delay | 延迟 |
| Email | メール | Email | 邮件 |
| Filter | フィルター | Filter | 筛选 |
| A/B Test | A/Bテスト | A/B Test | A/B 测试 |
| List Status | リストステータス | List Status | 列表状态 |
| Add to List | リストに追加 | Add to List | 添加到列表 |
| Remove from List | リストから削除 | Remove from List | 从列表移除 |
| Webhook | Webhook | Webhook | Webhook |

### 5. 其他待翻译文本
| 英文原文 | 日文翻译 | 当前中文 | 建议中文翻译 |
|---------|---------|---------|-------------|
| Learn how to enable SMTP bridge | SMTPブリッジの有効化方法を学ぶ | Learn how to enable SMTP bridge | 了解如何启用 SMTP 桥接 |
| Minimap | ミニマップ | Minimap | 小地图 |
| Once per contact | コンタクトごとに一度 | Once per contact | 每个联系人一次 |
| Trigger Event | トリガーイベント | Trigger Event | 触发事件 |
| Unsaved changes | 未保存の変更 | Unsaved changes | 未保存的更改 |

## MODIFIED Requirements
### Requirement: 现有翻译完善
- 补充上述清单中的所有缺失翻译
- 统一翻译风格，保持与现有中文翻译一致
- 确保所有 msgid 都有对应的中文 msgstr
