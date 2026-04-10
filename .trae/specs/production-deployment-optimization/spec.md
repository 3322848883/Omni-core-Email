# 生产环境部署优化 Spec

## Why
当前 Notifuse 项目部署存在以下问题需要解决：
1. Notifuse 后端监听所有网络接口（*:8080），存在安全隐患且占用公网端口
2. 没有进程守护机制，服务崩溃后不会自动重启
3. 缺少资源限制，可能因资源耗尽影响其他项目
4. 配置未持久化，重启后需要手动启动服务
5. 日志文件缺乏轮转机制，可能占满磁盘空间

## What Changes
- 限制 Notifuse 后端只监听 127.0.0.1:8080，通过 Nginx 反向代理访问
- 创建 Systemd 服务配置，实现进程守护和自动重启
- 配置资源限制（内存 256MB，CPU 50%）
- 配置 Nginx 日志和系统日志轮转
- 创建数据库自动备份脚本和定时任务
- 保存所有配置文件到版本控制或备份目录

## Impact
- Affected services: Notifuse 后端服务、Nginx、PostgreSQL
- Affected configs: `/etc/systemd/system/notifuse.service`, `/etc/nginx/sites-enabled/mail.omnicore.xin`, `/etc/logrotate.d/`
- Affected code: `.env` 配置文件

## ADDED Requirements

### Requirement: 安全配置强化
系统 SHALL 限制 Notifuse 后端服务只监听本地回环地址，避免直接暴露到公网。

#### Scenario: 服务绑定本地地址
- **WHEN** 配置 `SERVER_HOST=127.0.0.1` 并重启服务
- **THEN** Notifuse 只监听 127.0.0.1:8080，不监听 0.0.0.0:8080
- **AND** 外部无法直接访问 8080 端口，只能通过 Nginx 反向代理访问

### Requirement: 进程守护机制
系统 SHALL 使用 Systemd 管理 Notifuse 服务，确保服务崩溃后自动重启。

#### Scenario: 服务异常退出
- **WHEN** Notifuse 进程意外终止
- **THEN** Systemd 在 5 秒后自动重启服务
- **AND** 重启次数不超过 10 次/分钟，防止无限重启循环

### Requirement: 资源限制
系统 SHALL 限制 Notifuse 服务的资源使用，防止影响其他项目。

#### Scenario: 资源使用限制
- **WHEN** 配置 Systemd 资源限制参数
- **THEN** 内存使用不超过 256MB
- **AND** CPU 使用不超过 50%
- **AND** 进程数不超过 50 个

### Requirement: 日志轮转
系统 SHALL 配置 Nginx 和系统日志的自动轮转，防止磁盘空间耗尽。

#### Scenario: 日志文件管理
- **WHEN** 日志文件达到 100MB 或每天凌晨
- **THEN** 自动轮转日志文件
- **AND** 保留最近 14 天的日志
- **AND** 压缩旧日志文件

### Requirement: 数据库备份
系统 SHALL 每天自动备份 PostgreSQL 数据库，确保数据安全。

#### Scenario: 自动备份
- **WHEN** 每天凌晨 2 点执行备份任务
- **THEN** 备份所有数据库到 `/var/backups/notifuse/`
- **AND** 保留最近 7 天的备份
- **AND** 删除超过 7 天的旧备份

### Requirement: 配置持久化
系统 SHALL 将所有配置文件保存到备份目录，便于恢复和版本管理。

#### Scenario: 配置备份
- **WHEN** 完成所有配置修改
- **THEN** 复制配置文件到 `/root/notifuse-main/notifuse-main/configs/backup/`
- **AND** 包括：Nginx 配置、Systemd 服务文件、环境变量文件

## MODIFIED Requirements
无

## REMOVED Requirements
无
