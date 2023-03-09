import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FormContainer } from "./style";

const FormLogin = () => {
  /* const {} = useContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver() });

  const submit = (data) => {};
 */
  return (
    <FormContainer>
      <h2>Login</h2>
      <fieldset>
        <label htmlFor="">Email</label>
        <input type="email" placeholder="Digite seu email" />
      </fieldset>
      <fieldset>
        <label htmlFor="">Senha</label>
        <input type="password" placeholder="Digite sua senha" />
      </fieldset>

      <button>Acessar</button>
      <span>Ainda não tem uma conta?</span>

      <p>Clicando no botão abaixo você pode se cadastrar rapidamente</p>

      <button>Cadastrar</button>
    </FormContainer>
  );
};

export default FormLogin;
