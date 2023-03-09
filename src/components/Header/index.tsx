import { useNavigate } from "react-router";

const Header = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate("/")
    }

 return(
    <header>
        <div>
        <h1>Destinos<span>Kenzie</span></h1>
        <button onClick={() => navigate("/profile")}>Perfil</button>
        <button onClick={() => logout()}>Sair</button>

        </div>
    </header>
 )
}

export default Header;