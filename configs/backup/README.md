# Notifuse 生产环境配置备份

## 备份时间
创建时间：2026-04-09

## 配置文件清单

### 1. Nginx 配置
- **文件**: `nginx-mail.omnicore.xin.conf`
- **路径**: `/etc/nginx/sites-enabled/mail.omnicore.xin`
- **说明**: HTTPS 反向代理配置，包含 SSL、静态文件服务、API 代理

### 2. Systemd 服务配置
- **文件**: `notifuse.service`
- **路径**: `/etc/systemd/system/notifuse.service`
- **说明**: Notifuse 后端服务配置，包含资源限制和自动重启

### 3. 环境变量配置
- **文件**: `.env`
- **路径**: `/root/notifuse-main/notifuse-main/.env`
- **说明**: 应用环境变量，包含数据库连接、API 端点等

### 4. 日志轮转配置
- **文件**: `nginx-custom`, `notifuse`
- **路径**: `/etc/logrotate.d/`
- **说明**: Nginx 和应用日志自动轮转配置

### 5. 数据库备份脚本
- **文件**: `backup-notifuse.sh`
- **路径**: `/usr/local/bin/backup-notifuse.sh`
- **说明**: 自动备份 PostgreSQL 数据库脚本

## 快速恢复指南

### 恢复 Nginx 配置
```bash
sudo cp nginx-mail.omnicore.xin.conf /etc/nginx/sites-enabled/mail.omnicore.xin
sudo nginx -t && sudo nginx -s reload
```

### 恢复 Systemd 服务
```bash
sudo cp notifuse.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable notifuse
sudo systemctl start notifuse
```

### 恢复环境变量
```bash
cp .env /root/notifuse-main/notifuse-main/
```

### 恢复日志轮转
```bash
sudo cp nginx-custom notifuse /etc/logrotate.d/
```

### 恢复备份脚本
```bash
sudo cp backup-notifuse.sh /usr/local/bin/
sudo chmod +x /usr/local/bin/backup-notifuse.sh
```

## 服务状态检查

```bash
# 检查所有服务
sudo systemctl status nginx
sudo systemctl status notifuse
sudo systemctl status postgresql
sudo systemctl status redis

# 检查端口
ss -tlnp | grep -E "80|443|8080|5432|6379"

# 检查日志
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/notifuse/notifuse.log
```

## 重要提示

1. **SSL 证书**: 证书文件位于 `/etc/letsencrypt/live/mail.omnicore.xin/`，需要单独备份
2. **数据库**: 自动备份位于 `/var/backups/notifuse/`
3. **静态文件**: 部署文件位于 `/var/www/notifuse/`
4. **定时任务**: 备份任务通过 `sudo crontab -l` 查看
