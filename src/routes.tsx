import { Route, Routes } from "react-router-dom";
import { ProfilePage } from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import HomePage from "./pages/HomePage";
import { CitiesProvider } from "./providers/citiesContext";
import { ProfileProvider } from "./providers/profileContext";
import { ProtectedRoutes } from "./providers/ProtectedRoutes";

const Router = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />

    <Route
      element={
        <CitiesProvider>
          <ProfileProvider>
            <ProtectedRoutes />
          </ProfileProvider>
        </CitiesProvider>
      }
    >
      <Route path="/profile" element={<ProfilePage />} />
      <Route
        path="/home"
        element={
          <CitiesProvider>
            <HomePage />
          </CitiesProvider>
        }
      />
    </Route>
  </Routes>
);

export default Router;
