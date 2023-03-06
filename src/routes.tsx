import { Route, Routes } from "react-router-dom";
import { ProfilePage } from "./pages/ProfilePage";

export const Router = () => (
    <Routes>
        {/* add as rotas aqui */}
        <Route path="/profile" element={<ProfilePage/>}/>
    </Routes>
)