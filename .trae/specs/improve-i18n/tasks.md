# Tasks

## Task 1: 更新验证消息文件
- [x] 1.1 修改 messages.ts 文件
  - [x] 将所有英文验证消息改为中文
  - [x] 确保消息自然流畅

## Task 2: 更新 Segment 操作符标签
- [x] 2.1 修改 operator_time.tsx
  - [x] 将 'before date' 改为 '早于日期'
  - [x] 将 'after date' 改为 '晚于日期'
  - [x] 将 'in date range' 改为 '在日期范围内'
  - [x] 将 'not in date range' 改为 '不在日期范围内'
  - [x] 将 'in the last' 改为 '在最近'
  - [x] 将 'days' 改为 '天'
- [x] 2.2 修改 operator_equals.tsx
  - [x] 将 'equals' 改为 '等于'
- [x] 2.3 修改 operator_number.tsx
  - [x] 将 'greater than' 改为 '大于'
- [x] 2.4 修改 operator_set_not_set.tsx
  - [x] 将 'is set' 改为 '已设置'
  - [x] 将 'is not set' 改为 '未设置'
- [x] 2.5 修改 operator_contains.tsx
  - [x] 将 'contains' 改为 '包含'
- [x] 2.6 修改 operator_array.tsx
  - [x] 将 'in array' 改为 '在数组中'

## Task 3: 更新翻译文件
- [x] 3.1 更新 zh.po
  - [x] 添加缺失的 "Skipped" 翻译
  - [x] 添加 Segment 操作符翻译
  - [x] 添加验证消息翻译
- [x] 3.2 更新 ja.po
  - [x] 添加缺失的 103 条翻译（参考中文和英文）
- [x] 3.3 编译翻译文件
  - [x] 运行 lingui compile

## Task 4: 验证
- [x] 4.1 检查所有修改
  - [x] 确认无遗漏的硬编码文本
  - [x] 确认翻译文件已更新
- [x] 4.2 测试界面
  - [x] 确认中文显示正常
