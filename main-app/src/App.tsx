// import React from "react";
// import { WujieMicroApp } from "./wujie";

// export default function App() {
//   return (
//     <div>
//       <h1>React 18 主应用</h1>
//       <WujieMicroApp />
//     </div>
//   );
// }



import React, { useState } from "react";
import WujieReact from "wujie-react";

const apps = [
  {
    name: "react18-subapp1",
    url: "http://localhost:5173",
  },
  {
    name: "react18-subapp2",
    url: "http://localhost:5174",
  },
];

export default function App() {
  const [activeApp, setActiveApp] = useState(apps[0]);

  return (
    <div>
      <h1>React 18 主应用 - 切换子应用示例</h1>
      <div style={{ marginBottom: 12 }}>
        {apps.map((app) => (
          <button
            key={app.name}
            onClick={() => setActiveApp(app)}
            style={{
              marginRight: 8,
              padding: "8px 16px",
              backgroundColor: app.name === activeApp.name ? "#1890ff" : "#eee",
              color: app.name === activeApp.name ? "#fff" : "#000",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            {app.name}
          </button>
        ))}
      </div>

      <div style={{ border: "1px solid #ccc", height: 600 }}>
        <WujieReact
          name={activeApp.name}
          url={activeApp.url}
          props={{ some: "data" }}
          sync={true}
          width="100%"
          height="100%"
          onBeforeLoad={() => console.log(`${activeApp.name} 开始加载`)}
          onMounted={() => console.log(`${activeApp.name} 挂载完成`)}
          onUnmount={() => console.log(`${activeApp.name} 卸载`)}
        />
      </div>
    </div>
  );
}
