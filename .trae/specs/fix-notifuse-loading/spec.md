# 修复 Notifuse 页面加载问题 Spec

## Why
Notifuse 平台 (https://mail.omnicore.xin/console/) 持续无法加载，用户访问页面时一直处于加载状态。经诊断发现 Vite 前端开发服务器进程处于停止状态（State: T (stopped)），无法响应任何请求。

## 问题诊断结果

### 根本原因
Vite 开发服务器进程（pid 1069370）处于 **T (stopped)** 状态。该进程虽然仍在监听端口 8088，但无法处理任何请求。原因是在终端后台运行时，进程因终端作业控制信号（SIGTTIN/SIGTTOU）被挂起。

### 当前服务状态
| 服务 | 端口 | 状态 | 说明 |
|------|------|------|------|
| Nginx | 80, 443 | ✅ 运行中 | 反向代理正常 |
| Notifuse 后端 | 8080 | ✅ 运行中 | API 返回 `{"status":"api running"}` |
| Vite 前端 | 8088 | ❌ 已停止 | 进程状态为 T (stopped)，无法响应请求 |
| PostgreSQL | 5432 | ✅ 运行中 | 数据库连接正常 |
| Redis | 6379 | ✅ 运行中 | 缓存服务正常 |

### Nginx 错误日志证据
- 早期错误：代理到错误端口 3000（已修复为 8088）
- 当前错误：`upstream timed out` 连接 `http://127.0.0.1:8088/console/` — Vite 进程已停止，无法响应

## What Changes
- 停止所有 Notifuse 相关服务（后端 + Vite 前端）
- 清理已停止的 Vite 进程及其子进程
- 使用 `nohup` 正确重启 Vite 前端服务，避免终端作业控制导致进程挂起
- 重启 Notifuse 后端服务
- 验证所有服务正常运行并可访问

## Impact
- Affected code: 无代码变更，仅服务管理操作
- Affected services: Notifuse 后端、Vite 前端开发服务器
- Affected configs: 无配置变更

## ADDED Requirements

### Requirement: 服务进程管理
系统 SHALL 使用 `nohup` 或 `disown` 启动 Vite 前端服务，确保进程不会因终端作业控制信号而被挂起。

#### Scenario: Vite 服务正常启动
- **WHEN** 使用 `nohup npx vite &` 启动 Vite 服务
- **THEN** 进程状态应为 S (sleeping) 或 R (running)，而非 T (stopped)
- **AND** `curl http://localhost:8088/console/` 应返回 HTML 内容

### Requirement: 端到端访问验证
系统 SHALL 确保从外部通过 HTTPS 访问完整链路正常工作。

#### Scenario: 用户通过域名访问
- **WHEN** 用户访问 `https://mail.omnicore.xin/console/`
- **THEN** 页面应正常加载，不再无限转圈
- **AND** API 请求 `/api/` 应正常响应

## MODIFIED Requirements
无

## REMOVED Requirements
无
