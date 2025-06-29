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

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WujieReact from "wujie-react";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/react18-subapp1" replace />} />

        <Route
          path="/react18-subapp1/*"
          element={
            <WujieReact
              name="react18-subapp1"
              url="http://localhost:5173"
              sync={true}
              keepRoute={false}  // ✅ 禁用 query 尾巴
              props={{ prefix: "/react18-subapp1" }} // ✅ 通知子应用 basePath
              width="100%"
              height="100%"
            />
          }
        />

        <Route
          path="/react18-subapp2/*"
          element={
            <WujieReact
              name="react18-subapp2"
              url="http://localhost:5174"
              sync={true}
              keepRoute={false}
              props={{ prefix: "/react18-subapp2" }}
              width="100%"
              height="100%"
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
