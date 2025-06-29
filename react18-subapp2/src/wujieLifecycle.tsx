import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

let root: ReactDOM.Root | null = null;

export async function bootstrap() {
  console.log("子应用 bootstrap");
}

export async function mount(props: any) {
  console.log("子应用 mount", props);
  const container = props.container
    ? props.container.querySelector("#root")
    : document.getElementById("root");
  if (!container) return;

  root = ReactDOM.createRoot(container);
  root.render(<App />);
}

export async function unmount(props: any) {
  console.log("子应用 unmount");
  if (root) {
    root.unmount();
    root = null;
  }
}
