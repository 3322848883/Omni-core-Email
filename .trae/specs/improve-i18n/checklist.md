# Checklist

## 代码修改检查
- [x] Segment 组件中的所有 label 已翻译为中文
- [x] Segment 组件中的所有 placeholder 已翻译为中文
- [x] messages.ts 中的所有验证消息已翻译为中文
- [x] type_json.tsx 中的所有标签已翻译为中文
- [x] type_string.tsx 中的所有标签已翻译为中文
- [x] type_number.tsx 中的所有标签已翻译为中文
- [x] type_time.tsx 中的所有标签已翻译为中文

## 翻译文件检查
- [x] zh.po 已更新缺失的翻译
- [x] ja.po 翻译完整（103条缺失是正常情况，为英文源文本）
- [x] 翻译文件已编译为 zh.js 和 ja.js

## 质量检查
- [x] 中文翻译参考日文和英文，确保准确性
- [x] 翻译自然流畅，无生硬直译
- [x] 所有修改已完成

## 修改的文件清单

### 1. console/src/components/segment/messages.ts
- 所有验证消息从英文改为中文

### 2. console/src/components/segment/operator_time.tsx
- 'before date' → '早于日期'
- 'after date' → '晚于日期'
- 'in date range' → '在日期范围内'
- 'not in date range' → '不在日期范围内'
- 'in the last' → '在最近'
- 'days' → '天'

### 3. console/src/components/segment/operator_equals.tsx
- 'equals' → '等于'

### 4. console/src/components/segment/operator_number.tsx
- 'greater than' → '大于'
- 'enter a value' → '输入值'

### 5. console/src/components/segment/operator_set_not_set.tsx
- 'is set' → '已设置'
- 'is not set' → '未设置'

### 6. console/src/components/segment/operator_contains.tsx
- 'contains' → '包含'
- 'or' → '或'
- 'no values' → '无值'
- 'press enter to add a value' → '按回车添加值'
- 'Select a gender' → '选择性别'
- 'Select a currency' → '选择货币'
- 'Select a country' → '选择国家'
- 'Select a value' → '选择值'
- 'Select a time zone' → '选择时区'

### 7. console/src/components/segment/operator_array.tsx
- 'in array' → '在数组中'
- 'Enter value' → '输入值'

### 8. console/src/components/segment/type_string.tsx
- "doesn't equal" → '不等于'
- "doesn't contain" → '不包含'
- 'select a value' → '选择值'

### 9. console/src/components/segment/type_time.tsx
- 'select a value' → '选择值'

### 10. console/src/components/segment/type_json.tsx
- "doesn't equal" → '不等于'
- "doesn't contain" → '不包含'
- 'greater than' → '大于'
- 'less than' → '小于'
- 'greater than or equal' → '大于或等于'
- 'less than or equal' → '小于或等于'
- 'JSON Path' → 'JSON 路径'
- 'JSON path is required' → 'JSON 路径为必填项'
- 'Value Type' → '值类型'
- 'String' → '字符串'
- 'Number' → '数字'
- 'Date' → '日期'
- 'select an operator' → '选择运算符'

### 11. console/src/components/segment/type_number.tsx
- "doesn't equal" → '不等于'
- 'greater than' → '大于'
- 'less than' → '小于'
- 'greater than or equal' → '大于或等于'
- 'less than or equal' → '小于或等于'
- 'select a value' → '选择值'

### 12. console/src/i18n/locales/zh.po
- 'in date range' → '在日期范围内'
- 'in the last' → '在最近'

### 13. 编译后的文件
- zh.js (已重新编译)
- ja.js (已重新编译)
