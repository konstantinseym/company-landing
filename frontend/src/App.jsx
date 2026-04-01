import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.jsx";
import ControlPanel from "./components/ControlPanel/ControlPanel.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cp" element={<ControlPanel />} />
      </Routes>
    </BrowserRouter>
  );
}
