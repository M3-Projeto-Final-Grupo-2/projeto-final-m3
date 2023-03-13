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

export const ProfilePage = () => {
  const { logoutUser, homePageUser, modal, openModalAddPost } =
    useContext(ProfileContext);
  const { user } = useContext(LoginContext);
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
                <CardProfile />
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
                openModalAddPost()
                }
                }>Adicionar viagem</button>
            </div>
          </StyledAside>
        </StyledFlexDirection>
        {modal ? <ModalProfilePage /> : null}
      </StyledOver>
    </>
  );
};
