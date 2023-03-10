import { useNavigate } from "react-router";
import StyledHeader from "./style";

const Header = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate("/")
    }

 return(
    <StyledHeader>

        <div className="headerContainer">
        <h1>Destinos<span>Kenzie</span></h1>
        <div className="buttonsContainer">
        <button className="whiteBtn" onClick={() => navigate("/profile")}>Perfil</button>
        <button className="blueBtn" onClick={() => logout()}>Sair</button>

        </div>

        </div>
    </StyledHeader>
   
 )
}

export default Header;