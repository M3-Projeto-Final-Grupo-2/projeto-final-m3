import { Route, Routes } from "react-router-dom";
import { ProfilePage } from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { RegisterProvider } from "./providers/RegisterContext";
import { ProfileProvider } from "./providers/profileContext";

const Router = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route
      path="/register"
      element={
        <RegisterProvider>
          <RegisterPage />
        </RegisterProvider>
      }
    />
    <Route
      path="/profile"
      element={
        <ProfileProvider>
          <ProfilePage />
        </ProfileProvider>
      }
    />
  </Routes>
);

export default Router;
