import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

let root: ReactDOM.Root | null = null;

export async function bootstrap() {
  console.log("子应用2 bootstrap");
}

export async function mount(props: any) {
  console.log("子应用2 mount", props);
  const container = props.container
    ? props.container.querySelector("#root")
    : document.getElementById("root");
  
  if (!container) {
    console.error("子应用2: 找不到容器元素");
    return;
  }

  try {
    root = ReactDOM.createRoot(container);
    root.render(<App />);
    console.log("子应用2: 渲染成功");
  } catch (error) {
    console.error("子应用2: 渲染失败", error);
  }
}

export async function unmount(props: any) {
  console.log("子应用2 unmount");
  if (root) {
    try {
      root.unmount();
      root = null;
      console.log("子应用2: 卸载成功");
    } catch (error) {
      console.error("子应用2: 卸载失败", error);
    }
  }
}
