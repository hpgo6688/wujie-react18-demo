import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";

function TestPage1() {
  return (
    <div style={{ padding: 20, backgroundColor: "#f8d7da" }}>
      <h2>子应用2 - 测试页面1</h2>
      <p>这是子应用2的第一个测试页面</p>
      <p>功能：展示不同的颜色主题</p>
      <Link to="/">返回首页</Link>
    </div>
  );
}

function TestPage2() {
  return (
    <div style={{ padding: 20, backgroundColor: "#d1ecf1" }}>
      <h2>子应用2 - 测试页面2</h2>
      <p>这是子应用2的第二个测试页面</p>
      <p>功能：展示信息提示样式</p>
      <Link to="/">返回首页</Link>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test1" element={<TestPage1 />} />
        <Route path="/test2" element={<TestPage2 />} />
      </Routes>
    </BrowserRouter>
  );
}
