import React from "react";
import WujieReact from "wujie-react";

export function WujieMicroApp() {
  return (
    <WujieReact
      name="react18-subapp"
      url="http://localhost:5173"
      props={{ some: "data" }}
      sync={true}
      width="100%"
      height="600px"
      onBeforeLoad={() => console.log("主应用: 子应用开始加载")}
      onMounted={() => console.log("主应用: 子应用挂载完成")}
      onUnmount={() => console.log("主应用: 子应用卸载")}
    />
  );
}
