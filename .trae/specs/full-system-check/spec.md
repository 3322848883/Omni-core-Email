# Notifuse 项目全面诊断与修复规范

## Why
当前 Notifuse 项目存在以下问题：
1. 页面一直显示加载中，无法正常进入
2. LOGO 图片显示为损坏的图标
3. 前端无法正确连接到后端 API
4. Vite 开发服务器代理配置不正确

## What Changes
- 检查并修复前端 LOGO 显示问题
- 检查并修复后端 API 连接问题
- 检查并修复 Vite 开发服务器配置
- 确保前端和后端正确启动并相互通信
- 验证项目可以正常加载并显示中文界面

## Impact
- 受影响的服务：前端 (Vite + React)、后端 (Go API)
- 受影响的文件：vite.config.ts、logo.png、AuthContext.tsx、.env

## ADDED Requirements

### Requirement: 后端 API 服务
系统 SHALL 启动后端 API 服务在 127.0.0.1:8080

#### Scenario: 后端正常启动
- **WHEN** 执行 `./notifuse` 命令
- **THEN** 后端成功监听 8080 端口并返回 200 OK

### Requirement: 前端开发服务器
系统 SHALL 启动前端 Vite 开发服务器并正确代理 API 请求

#### Scenario: 前端正常启动
- **WHEN** 执行 `npm run dev` 命令
- **THEN** 前端服务器成功启动并能访问 http://localhost:300X/console/

#### Scenario: API 代理正常工作
- **WHEN** 访问 http://localhost:300X/console/api/health
- **THEN** 请求被正确代理到 http://127.0.0.1:8080/api/health

### Requirement: LOGO 图片正确显示
系统 SHALL 显示正确的 PNG 格式 LOGO 图片

#### Scenario: LOGO 文件验证
- **WHEN** 检查 /public/logo.png 文件
- **THEN** 文件是有效的 PNG 格式，不是 SVG 或损坏的文件

### Requirement: 页面正常加载
系统 SHALL 在 10 秒内完成页面加载，不再显示无限加载动画

#### Scenario: 页面加载成功
- **WHEN** 访问 http://69.12.85.185:300X/console/
- **THEN** 页面显示 Notifuse 界面，不再显示加载动画

## MODIFIED Requirements

### Requirement: Vite 代理配置
修改 vite.config.ts 中的代理目标地址从 `localhost` 改为 `127.0.0.1`

**原因**: 某些系统上 `localhost` 解析较慢或不稳定，直接使用 `127.0.0.1` 可以确保快速可靠的连接

## REMOVED Requirements
无

## 检查清单
- [ ] 后端 API 服务正在运行 (127.0.0.1:8080)
- [ ] 前端 Vite 服务器正在运行
- [ ] /public/logo.png 是有效的 PNG 文件
- [ ] Vite 代理配置使用 127.0.0.1 而非 localhost
- [ ] API 代理请求能正常响应
- [ ] 页面能在 10 秒内加载完成
- [ ] LOGO 能正确显示
- [ ] 页面显示中文界面
