import { Descript, Images, Main } from "./style";
import CataratasdoIguaçu from "../../assets/CataratasdoIguaçu.svg";
import CristoRedentor from "../../assets/CristoRedentor.svg";
import ElevadorLacerda from "../../assets/ElevadorLacerda.svg";
import FormLogin from "../../components/LoginForm/FormLogin";

const LoginPage = () => (
  <Main>
    <FormLogin />
    <Descript>
      <h1>Destinos Kenzie</h1>
      <p>
        Conhecer e se aventurar em novos horizontes por meio de outras
        experiências.
      </p>

      <Images>
        <div>
          {<img src={CataratasdoIguaçu} alt="Cataratas do Iguaçu" />}
          {<img src={ElevadorLacerda} alt="Elevador Lacerda" />}
        </div>
        {<img src={CristoRedentor} alt="Cristo Redentor" />}
      </Images>
    </Descript> 
  </Main>
);

export default LoginPage;
