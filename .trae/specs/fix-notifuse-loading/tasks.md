# Tasks

- [x] Task 1: 停止所有 Notifuse 相关服务
  - [x] SubTask 1.1: 终止已停止的 Vite 进程（pid 1069370）及其父进程（pid 1069369）和 esbuild 子进程（pid 1069386）
  - [x] SubTask 1.2: 终止 Notifuse 后端进程（pid 1062909）
  - [x] SubTask 1.3: 确认所有进程已清理干净（ps aux 验证）

- [x] Task 2: 重启 Notifuse 后端服务
  - [x] SubTask 2.1: 使用 nohup 启动 notifuse 后端，确保后台运行不挂起
  - [x] SubTask 2.2: 验证后端 API 可访问（curl http://localhost:8080/api/）

- [x] Task 3: 重启 Vite 前端服务
  - [x] SubTask 3.1: 进入 console 目录，使用 nohup 启动 Vite 开发服务器
  - [x] SubTask 3.2: 验证 Vite 进程状态为 S/R（非 T）
  - [x] SubTask 3.3: 验证 Vite 本地可访问（curl http://localhost:8088/console/）

- [x] Task 4: 验证端到端访问
  - [x] SubTask 4.1: 通过 Nginx 代理验证 HTTPS 访问（curl -sk https://mail.omnicore.xin/console/）
  - [x] SubTask 4.2: 验证 API 代理正常（curl -sk https://mail.omnicore.xin/api/）
  - [x] SubTask 4.3: 检查 Nginx 错误日志无新错误

# Task Dependencies
- [Task 2] depends on [Task 1] （必须先停止旧服务）
- [Task 3] depends on [Task 1] （必须先停止旧服务）
- [Task 4] depends on [Task 2, Task 3] （前后端都启动后才能验证）
