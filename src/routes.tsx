import { Route, Routes } from "react-router-dom";
import { ProfilePage } from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import HomePage from "./pages/HomePage";
import { CitiesProvider } from "./providers/citiesContext";
import { ProfileProvider } from "./providers/profileContext";

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
        <CitiesProvider>

          <ProfileProvider>
            <ProfilePage />

          </ProfileProvider>
        </CitiesProvider>

      }
    />
    <Route  path="/home"
      element={
          <CitiesProvider>
            <HomePage />

          </CitiesProvider>

      }/>
  </Routes>
);

export default Router;
