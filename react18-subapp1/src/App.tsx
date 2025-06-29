import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";


export default function App() {
  return (
    <BrowserRouter basename="/react18-subapp1">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* 其他子应用路由 */}
      </Routes>
    </BrowserRouter>
  );
}
