// Note: These validation messages are used as static strings in Form validation rules.
// Since they're used outside of React component context (in validation rules), they cannot
// use useLingui directly. These messages will be extracted by lingui extract and can
// be translated, but the translation needs to happen at the component level where possible.
// For Form validation messages, Ant Design displays these strings as-is.
// Consider creating a useMessages() hook for components that need translated validation messages.
const Messages = {
  RequiredField: '此字段为必填项',
  ServiceAccountPasswordInvalidFormat: '密码应至少包含16个字符',
  EmailRequired: '请输入您的邮箱',
  YourNameIsRequired: '请输入您的姓名',
  PasswordRequired: '请输入您的密码',
  NewPasswordInvalid: '新密码应至少包含8个字符',
  ConfirmPasswordRequired: '请确认您的新密码',
  PasswordsDontMatch: '两次输入的密码不一致',
  InvalidTimezone: '此时区无效',
  InvalidIdFormat: '值应使用此格式书写：should-be-written-like-this',
  InvalidTableName: '值应使用此格式书写：should_be_written_like_this',
  InvalidWorkspaceIdFormat: 'ID 只能包含字母数字字符（az09）',
  ValidURLRequired: '需要有效的 URL',
  InvalidArrayOfStrings: '值应为字符串数组',
  InvalidPath: '路径应类似于：/url-path',
  InvalidURLParamsFormat:
    '参数只能包含以下字符：A-Za-z0-9-_~',
  InvalidHostname: '值应为有效的主机名',
  InvalidFilterOperation: '操作无效',
  InvalidTableColumName: '表列名只能包含以下字符：a-Z0-9_-',
  InvalidOrganizationIDFormat: 'ID 只能包含字母数字字符（az09）'
}

export default Messages
