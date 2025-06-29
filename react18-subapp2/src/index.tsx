import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { bootstrap, mount, unmount } from "./wujieLifecycle";

// 导出 wujie 生命周期函数
export { bootstrap, mount, unmount };

// 独立运行时
const container = document.getElementById("root");
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
}
