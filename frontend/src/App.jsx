import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.jsx";
import ControlPanel from "./components/ControlPanel/ControlPanel.jsx";
import Auth from "./components/ControlPanel/Auth.jsx";
import ProtectedRoute from "./components/ControlPanel/ProtectedRoute.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/controlpanel"
          element={
            <ProtectedRoute>
              <ControlPanel />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
