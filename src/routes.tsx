import { Route, Routes } from "react-router-dom";
import { ProfilePage } from "./pages/ProfilePage";
import { ProfileProvider } from "./providers/profileContext";

export const Router = () => (
    <Routes>
        {/* add as rotas aqui */}
        <Route path="/profile" element={<ProfileProvider><ProfilePage/></ProfileProvider>}/>
    </Routes>
)