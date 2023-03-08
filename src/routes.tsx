import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

export const Router = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
  </Routes>
);
