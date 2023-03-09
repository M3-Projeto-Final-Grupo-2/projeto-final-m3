import { Route, Routes } from "react-router-dom";
import { ProfilePage } from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { RegisterProvider } from "./providers/RegisterContext";
import { ProfileProvider } from "./providers/profileContext";
import HomePage from "./pages/HomePage";

const Router = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route
      path="/register"
      element={

          <RegisterPage />
     
      }
    />
    <Route
      path="/profile"
      element={

          <ProfilePage />

      }
    />
    <Route  path="/home"
      element={

          <HomePage />

      }/>
  </Routes>
);

export default Router;
