import { Container, Descript, Images, Main } from "./style";
import CataratasdoIguaçu from "../../assets/CataratasdoIguaçu.svg";
import CristoRedentor from "../../assets/CristoRedentor.svg";
import ElevadorLacerda from "../../assets/ElevadorLacerda.svg";
import Logo from "../../assets/Logo-Destinos-Kenzie.png";
import FormLogin from "../../components/LoginForm/FormLogin";

const LoginPage = () => (
  <Main>
    <Container>
      <FormLogin />
      <Descript>
        <img src={Logo} />
        <p>
          Conhecer e se aventurar em <span>novos horizontes</span> por meio de outras
          experiências.
        </p>
        <span>
          Todas as informações para o seu novo destino em um só lugar
        </span>
        <Images>
          <div>
            {<img src={CataratasdoIguaçu} alt="Cataratas do Iguaçu" />}
            {<img src={ElevadorLacerda} alt="Elevador Lacerda" />}
          </div>
          {<img src={CristoRedentor} alt="Cristo Redentor" />}
        </Images>
      </Descript>
    </Container>
  </Main>
);

export default LoginPage;
