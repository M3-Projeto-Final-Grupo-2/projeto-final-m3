import { CardProfile } from "../../components/CardProfile";
import backgrounHeader from "../../assets/backgrounHeader.png";
import { useContext } from "react";
import { ProfileContext } from "../../providers/profileContext";
import { ModalProfilePage } from "../../components/Modal/ModalProfilePage";
import {
  StyledAside,
  StyledFlexDirection,
  StyledHeader,
  StyledMain,
  StyledOver,
} from "./style";
import { LoginContext } from "../../providers/loginContext";
import { CitiesContext } from "../../providers/CitiesContext";
import { ModalCreatePost } from "../../components/Modal/ModalCreatePost";


export const ProfilePage = () => {
  const {cities ,logoutUser, homePageUser, modal } = useContext(ProfileContext);
  const { user } = useContext(LoginContext);
  const {modalPost, setModalPost } = useContext(CitiesContext)
  return (
    <>
      <StyledOver>
        <StyledHeader>
          <div className="conatiner__buttons">
            <span
              onClick={() => {
                homePageUser();
              }}
            >
              Home
            </span>
            <span
              className="span__right"
              onClick={() => {
                logoutUser();
              }}
            >
              Sair
            </span>
          </div>
          <div className="user__info">
            <h2>{user?.name[0]}</h2>
            <h1>{user?.name}</h1>
          </div>
        </StyledHeader>
        <StyledFlexDirection>
          <StyledMain>
            <div className="container__list">
              <h2 className="tilte__card">Suas viagens:</h2>
              <ul>
                {cities.length !== 0?<CardProfile />:
                <li className="empityList">
                  <span>Opss...</span>
                  <p>Parece que você ainda não cadastrou nenhuma viagem</p>
                </li> 
                }
                
              </ul>
            </div>
          </StyledMain>
          <StyledAside>
            <div>
              <h2>Outros usuários precisam de você!</h2>
              <p>
                Nos escreva suas experiências vividas em viagens, para que os
                outros usuários possam se basear nelas !
              </p>
              <p>Para fazer isso é simples basta clicar no botão a baixo.</p>
              <button onClick={() =>{
                setModalPost(true)
                }
                }>Adicionar viagem</button>
            </div>
          </StyledAside>
        </StyledFlexDirection>
        {modal ? <ModalProfilePage /> : null}
        {modalPost ? <ModalCreatePost/> : null}
      </StyledOver>
    </>
  );
};
