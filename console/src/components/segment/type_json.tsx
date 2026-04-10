import { FormInstance, Form, Select, Alert, Radio, Space, Tag } from 'antd'
import Messages from './messages'
import {
  DimensionFilter,
  FieldTypeRenderer,
  FieldTypeValue,
  IOperator
} from '../../services/api/segment'
import { OperatorEquals } from './operator_equals'
import { OperatorSet, OperatorNotSet } from './operator_set_not_set'
import { OperatorContains } from './operator_contains'
import { OperatorNumber } from './operator_number'
import { OperatorInArray } from './operator_array'
import { JSONPathInput } from './input_json_path'

// Note: This class contains string labels that cannot use useLingui as they are class properties.
// The labels like 'JSON Path', 'Value Type', 'String', 'Number', 'Date', placeholder 'select an operator',
// and error messages should be translated at the point of use if needed.
export class FieldTypeJSON implements FieldTypeRenderer {
  operators: IOperator[] = [
    new OperatorSet(),
    new OperatorNotSet(),
    new OperatorEquals(),
    new OperatorEquals('not_equals', "不等于"),
    new OperatorContains(),
    new OperatorContains('not_contains', "不包含"),
    new OperatorNumber('gt', '大于'),
    new OperatorNumber('lt', '小于'),
    new OperatorNumber('gte', '大于或等于'),
    new OperatorNumber('lte', '小于或等于'),
    // Array operators
    new OperatorInArray()
  ]

  render(filter: DimensionFilter) {
    const operator = this.operators.find((x) => x.type === filter.operator)
    if (!operator) {
      return <Alert type="error" message={`operator not found for: ${filter.operator}`} />
    }

    // Show JSON path as cyan tags
    const pathSegments = filter.json_path || []
    const pathDisplay =
      pathSegments.length > 0 ? (
        <Space size={2} style={{ marginRight: '0.5rem' }}>
          {pathSegments.map((seg, idx) => {
            const isIndex = /^\d+$/.test(seg)
            return (
              <Tag key={idx} color={isIndex ? 'purple' : 'cyan'} bordered={false}>
                {isIndex ? `[${seg}]` : seg}
              </Tag>
            )
          })}
        </Space>
      ) : null

    return (
      <>
        {pathDisplay}
        {operator.render(filter)}
      </>
    )
  }

  renderFormItems(_fieldType: FieldTypeValue, fieldName: string, form: FormInstance) {
    return (
      <>
        {/* JSON Path Input */}
        <Form.Item
          label="JSON 路径"
          name="json_path"
          rules={[
            {
              validator: async (_, value) => {
                // json_path is optional for existence checks (is_set/is_not_set)
                const operator = form.getFieldValue('operator')
                if (operator === 'is_set' || operator === 'is_not_set') {
                  return Promise.resolve()
                }
                if (!value || value.length === 0) {
                  return Promise.reject(new Error('JSON 路径为必填项'))
                }
                return Promise.resolve()
              }
            }
          ]}
        >
          <JSONPathInput />
        </Form.Item>

        {/* Value Type Selector */}
        <Form.Item label="值类型" name="field_type" initialValue="string">
          <Radio.Group style={{ width: '100%' }}>
            <Radio.Button value="string" style={{ width: '33.33%', textAlign: 'center' }}>
              字符串
            </Radio.Button>
            <Radio.Button value="number" style={{ width: '33.33%', textAlign: 'center' }}>
              数字
            </Radio.Button>
            <Radio.Button value="time" style={{ width: '33.33%', textAlign: 'center' }}>
              日期
            </Radio.Button>
          </Radio.Group>
        </Form.Item>

        {/* Operator Selector - filtered based on value type */}
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.field_type !== currentValues.field_type
          }
        >
          {(funcs) => {
            const selectedValueType = funcs.getFieldValue('field_type') || 'string'
            const filteredOperators = this.getOperatorsForValueType(selectedValueType)
            const currentOperator = funcs.getFieldValue('operator')

            // Reset operator if it's not valid for the new field type
            const isOperatorValid = filteredOperators.some((op) => op.type === currentOperator)
            if (!isOperatorValid && currentOperator) {
              funcs.setFieldValue('operator', undefined)
            }

            return (
              <Form.Item
                name="operator"
                rules={[{ required: true, message: Messages.RequiredField }]}
              >
                <Select
                  placeholder="选择运算符"
                  dropdownMatchSelectWidth={false}
                  options={filteredOperators.map((op: IOperator) => ({
                    value: op.type,
                    label: op.label
                  }))}
                />
              </Form.Item>
            )
          }}
        </Form.Item>

        {/* Dynamic operator-specific inputs */}
        <Form.Item noStyle shouldUpdate>
          {(funcs) => {
            const operator = this.operators.find((x) => x.type === funcs.getFieldValue('operator'))
            const selectedFieldType = funcs.getFieldValue('field_type') || 'json'

            if (operator) {
              return operator.renderFormItems(selectedFieldType, fieldName, form)
            }
            return null
          }}
        </Form.Item>
      </>
    )
  }

  // Filter operators based on value type
  private getOperatorsForValueType(valueType: string): IOperator[] {
    switch (valueType) {
      case 'string':
        return this.operators.filter(
          (op) =>
            op.type === 'is_set' ||
            op.type === 'is_not_set' ||
            op.type === 'equals' ||
            op.type === 'not_equals' ||
            op.type === 'contains' ||
            op.type === 'not_contains'
        )
      case 'number':
        return this.operators.filter(
          (op) =>
            op.type === 'is_set' ||
            op.type === 'is_not_set' ||
            op.type === 'equals' ||
            op.type === 'not_equals' ||
            op.type === 'gt' ||
            op.type === 'lt' ||
            op.type === 'gte' ||
            op.type === 'lte'
        )
      case 'time':
        return this.operators.filter(
          (op) =>
            op.type === 'is_set' ||
            op.type === 'is_not_set' ||
            op.type === 'equals' ||
            op.type === 'not_equals' ||
            op.type === 'before_date' ||
            op.type === 'after_date' ||
            op.type === 'in_date_range' ||
            op.type === 'not_in_date_range' ||
            op.type === 'in_the_last_days'
        )
      default:
        return this.operators
    }
  }
}
