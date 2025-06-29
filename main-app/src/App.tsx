import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import WujieReact from "wujie-react";

function HomePage() {
  return (
    <div style={{ padding: 20 }}>
      <h1>React 18 主应用</h1>
      <p>欢迎使用微前端示例</p>
      <p>如果你能看到这个页面，说明主应用运行正常！</p>
      <div style={{ marginTop: 20 }}>
        <Link to="/test" style={{ marginRight: 20 }}>测试路由</Link>
        <Link to="/subapp1" style={{ marginRight: 20 }}>子应用1</Link>
        <Link to="/subapp2">子应用2</Link>
      </div>
    </div>
  );
}

function TestPage() {
  return (
    <div style={{ padding: 20 }}>
      <h1>测试页面</h1>
      <p>路由功能正常工作！</p>
      <Link to="/">返回首页</Link>
    </div>
  );
}

function SubApp1() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <WujieReact
        name="react18-subapp1"
        url="http://localhost:5173"
        sync={false}
        keepRoute={false}
        width="100%"
        height="100%"
        onBeforeLoad={() => console.log("主应用: 子应用1开始加载")}
        onMounted={() => console.log("主应用: 子应用1挂载完成")}
        onUnmount={() => console.log("主应用: 子应用1卸载")}
        onError={(e) => console.error("主应用: 子应用1加载错误", e)}
      />
    </div>
  );
}

function SubApp2() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <WujieReact
        name="react18-subapp2"
        url="http://localhost:5174"
        sync={false}
        keepRoute={false}
        width="100%"
        height="100%"
        onBeforeLoad={() => console.log("主应用: 子应用2开始加载")}
        onMounted={() => console.log("主应用: 子应用2挂载完成")}
        onUnmount={() => console.log("主应用: 子应用2卸载")}
        onError={(e) => console.error("主应用: 子应用2加载错误", e)}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/subapp1" element={<SubApp1 />} />
        <Route path="/subapp2" element={<SubApp2 />} />
      </Routes>
    </BrowserRouter>
  );
} 