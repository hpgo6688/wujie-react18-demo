#!/bin/bash

echo "启动所有微前端应用..."

# 获取脚本所在目录的绝对路径
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# 停止可能正在运行的进程
echo "停止可能正在运行的进程..."
pkill -f "vite.*5173" || true
pkill -f "vite.*5174" || true
pkill -f "vite.*3000" || true

sleep 2

# 启动子应用1
echo "启动子应用1 (端口 5173)..."
cd "$SCRIPT_DIR/react18-subapp1" && pnpm dev &
SUBAPP1_PID=$!

sleep 3

# 启动子应用2
echo "启动子应用2 (端口 5174)..."
cd "$SCRIPT_DIR/react18-subapp2" && pnpm dev &
SUBAPP2_PID=$!

sleep 3

# 启动主应用
echo "启动主应用 (端口 3000)..."
cd "$SCRIPT_DIR/main-app" && pnpm dev &
MAIN_APP_PID=$!

# 捕捉 Ctrl+C 中断信号，杀掉所有子进程
trap "echo ''; echo '终止所有应用...'; kill $SUBAPP1_PID $SUBAPP2_PID $MAIN_APP_PID; exit" SIGINT

echo ""
echo "所有应用已启动:"
echo "- 主应用:   http://localhost:3000"
echo "- 子应用1:  http://localhost:5173"
echo "- 子应用2:  http://localhost:5174"
echo ""
echo "按 Ctrl+C 停止所有应用"

# 阻塞脚本，直到所有后台任务终止
wait
