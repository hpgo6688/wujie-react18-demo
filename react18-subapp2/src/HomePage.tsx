import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div style={{ padding: 20, backgroundColor: "#f0f0f0" }}>
      <h2>React 18 子应用 2</h2>
      <p>这是通过 Wujie 加载的微前端示例。</p>
      <div style={{ marginTop: 20 }}>
        <Link to="/test1" style={{ marginRight: 20, color: "#dc3545" }}>测试页面1</Link>
        <Link to="/test2" style={{ color: "#17a2b8" }}>测试页面2</Link>
      </div>
    </div>
  );
}
