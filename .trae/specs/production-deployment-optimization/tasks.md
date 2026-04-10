# Tasks

- [x] Task 1: 安全配置强化 - 限制 Notifuse 只监听本地地址
  - [x] SubTask 1.1: 修改 `.env` 文件，添加 `SERVER_HOST=127.0.0.1`
  - [x] SubTask 1.2: 停止当前运行的 Notifuse 进程
  - [x] SubTask 1.3: 使用新配置启动 Notifuse，验证只监听 127.0.0.1:8080
  - [x] SubTask 1.4: 测试 Nginx 反向代理是否正常工作

- [x] Task 2: 创建 Systemd 服务配置
  - [x] SubTask 2.1: 创建 `/etc/systemd/system/notifuse.service` 文件
  - [x] SubTask 2.2: 配置资源限制（MemoryLimit=256M, CPUQuota=50%）
  - [x] SubTask 2.3: 配置自动重启策略（Restart=always, RestartSec=5）
  - [x] SubTask 2.4: 启用服务并启动：`systemctl enable notifuse && systemctl start notifuse`
  - [x] SubTask 2.5: 验证服务状态：`systemctl status notifuse`

- [x] Task 3: 配置日志轮转
  - [x] SubTask 3.1: 创建 `/etc/logrotate.d/nginx-custom` 配置 Nginx 日志轮转
  - [x] SubTask 3.2: 创建 `/etc/logrotate.d/notifuse` 配置应用日志轮转
  - [x] SubTask 3.3: 测试日志轮转配置：`logrotate -d /etc/logrotate.d/nginx-custom`

- [x] Task 4: 配置数据库自动备份
  - [x] SubTask 4.1: 创建备份目录 `/var/backups/notifuse/`
  - [x] SubTask 4.2: 创建备份脚本 `/usr/local/bin/backup-notifuse.sh`
  - [x] SubTask 4.3: 设置脚本权限并测试执行
  - [x] SubTask 4.4: 添加 Crontab 定时任务（每天凌晨 2 点执行）

- [x] Task 5: 保存配置文件备份
  - [x] SubTask 5.1: 创建备份目录 `/root/notifuse-main/notifuse-main/configs/backup/`
  - [x] SubTask 5.2: 备份 Nginx 配置：`cp /etc/nginx/sites-enabled/mail.omnicore.xin`
  - [x] SubTask 5.3: 备份 Systemd 服务文件：`cp /etc/systemd/system/notifuse.service`
  - [x] SubTask 5.4: 备份环境变量文件：`cp .env`
  - [x] SubTask 5.5: 创建配置说明文档 `README.md`

- [x] Task 6: 验证整体部署
  - [x] SubTask 6.1: 验证所有服务正常运行
  - [x] SubTask 6.2: 验证 HTTPS 访问正常
  - [x] SubTask 6.3: 验证 API 功能正常
  - [x] SubTask 6.4: 验证日志轮转配置有效

# Task Dependencies
- [Task 2] depends on [Task 1] （需要先限制监听地址）
- [Task 6] depends on [Task 1, Task 2, Task 3, Task 4, Task 5] （最终验证）
