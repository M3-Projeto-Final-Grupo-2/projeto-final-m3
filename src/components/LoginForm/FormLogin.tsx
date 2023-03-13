import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ILoginForm, LoginContext } from "../../providers/loginContext";
import Input from "../Input";
import Schema from "./schema";
import { FormContainer } from "./style";

const FormLogin = () => {
  const { Login, showPass,
    passChangeVisibility,
    passIcon } = useContext(LoginContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({ resolver: yupResolver(Schema) });

  const submit = (formdata: ILoginForm) => {
    Login(formdata);
  };

  return (
    <FormContainer onSubmit={handleSubmit(submit)}>
      <h2>Login</h2>
      <Input
        label="Email"
        type="email"
        id="email"
        placeholder="Digite seu email"
        register={register("email")}
        error={errors.email?.message}
      ><i className="fa-solid fa-user"></i></Input>
      <Input
        label="Senha"
        type={showPass}
        id="password"
        placeholder="Digite sua senha"
        register={register("password")}
        error={errors.password?.message}
      ><i className={passIcon() + " onClick"}
        onClick={passChangeVisibility}></i></Input>

      <button type="submit">Acessar</button>
      <span>Ainda não tem uma conta?</span>

      <p>Clicando no botão abaixo você pode se cadastrar rapidamente</p>

      <button type="button" onClick={() => navigate("/register")}>
        Cadastrar
      </button>
    </FormContainer>
  );
};

export default FormLogin;
