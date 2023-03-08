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

export const ProfilePage = () => {
  const { logoutUser, homePageUser, modal } = useContext(ProfileContext);
  return (
    <>
      {modal ? <ModalProfilePage /> : null}
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
            <h2>U</h2>
            <h1>User name</h1>
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
              <button>Adicionar viagem</button>
            </div>
          </StyledAside>
        </StyledFlexDirection>
      </StyledOver>
    </>
  );
};
