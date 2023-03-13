import { useContext } from "react";
import { useNavigate } from "react-router";
import { CitiesContext } from "../../providers/CitiesContext";
import { StyledBackground } from "../Modal/ModalProfilePage/style";
import StyledHeader from "./style";

const Header = () => {
    const navigate = useNavigate();
    const { modalPost } = useContext(CitiesContext)

    const logout = () => {
        localStorage.clear();
        navigate("/")
    }

 return(
    <>
    {
        modalPost ?
        
        <><StyledBackground></StyledBackground><StyledHeader>

                     <div className="headerContainer">
                         <h1>Destinos<span>Kenzie</span></h1>
                         <div className="buttonsContainer">
                             <button className="whiteBtn" onClick={() => navigate("/profile")}>Perfil</button>
                             <button className="blueBtn" onClick={() => logout()}>Sair</button>

                         </div>

                     </div>
                 </StyledHeader></>
    :
    <StyledHeader>

    <div className="headerContainer">
    <h1>Destinos<span>Kenzie</span></h1>
    <div className="buttonsContainer">
    <button className="whiteBtn" onClick={() => navigate("/profile")}>Perfil</button>
    <button className="blueBtn" onClick={() => logout()}>Sair</button>

    </div>

    </div>
</StyledHeader>
        
    }
    </>
   
 )
}

export default Header;