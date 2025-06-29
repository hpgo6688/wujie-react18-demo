# Wujie React18 微前端示例

这是一个使用 Wujie 和 React 18 构建的微前端示例项目。

## 项目结构

```
wujie-react18-demo/
├── main-app/          # 主应用 (端口 3000)
├── react18-subapp1/   # 子应用1 (端口 5173)
├── react18-subapp2/   # 子应用2 (端口 5174)
└── start-all.sh       # 启动脚本
```

## 修复的问题

1. **React 错误 #31**: 添加了正确的 React 导入和错误处理
2. **子应用生命周期**: 确保子应用正确导出 bootstrap、mount、unmount 函数
3. **路由配置**: 简化了路由配置，移除了可能导致冲突的 basename
4. **URL 后缀问题**: 使用 `sync={false}` 和 `keepRoute={false}` 禁用自动路由同步
5. **错误处理**: 添加了更好的错误处理和日志记录
6. **CORS 配置**: 在子应用中启用了 CORS 支持

## 运行方法

### 方法1: 使用启动脚本 (推荐)

```bash
./start-all.sh
```

### 方法2: 手动启动

1. 启动子应用1:
```bash
cd react18-subapp1
pnpm dev
```

2. 启动子应用2:
```bash
cd react18-subapp2
pnpm dev
```

3. 启动主应用:
```bash
cd main-app
pnpm dev
```

## 访问地址

- 主应用: http://localhost:3000
- 子应用1: http://localhost:5173
- 子应用2: http://localhost:5174

## 功能测试

1. **主应用首页**: 访问 http://localhost:3000 查看主应用首页
2. **路由测试**: 点击"测试路由"验证 React Router 功能
3. **子应用1**: 点击"子应用1"加载第一个微前端应用
4. **子应用2**: 点击"子应用2"加载第二个微前端应用

## 技术栈

- **主应用**: React 18 + Vite + React Router + Wujie React
- **子应用**: React 18 + Vite + React Router
- **微前端框架**: Wujie

## 关键配置

### 主应用 Wujie 配置
```jsx
<WujieReact
  name="react18-subapp1"
  url="http://localhost:5173"
  sync={false}        // 禁用路由同步，避免URL后缀
  keepRoute={false}   // 禁用路由保持
  width="100%"
  height="100%"
/>
```

### 子应用生命周期
```jsx
// 在子应用的 index.tsx 中导出
export { bootstrap, mount, unmount };
```

## 注意事项

1. 确保所有端口 (3000, 5173, 5174) 没有被其他应用占用
2. 子应用需要先启动，主应用才能正常加载它们
3. 如果遇到 CORS 错误，请检查子应用的 CORS 配置
4. 使用 `sync={false}` 可以避免 URL 自动添加后缀 