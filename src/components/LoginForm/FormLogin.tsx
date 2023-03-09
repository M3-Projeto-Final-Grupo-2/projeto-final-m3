import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ILoginForm, LoginContext } from "../../providers/loginContext";
import Input from "../Input";
import Schema from "./schema";
import { FormContainer } from "./style";

const FormLogin = () => {
  const { Login } = useContext(LoginContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({ resolver: yupResolver(Schema) });

  const submit = (formdata: ILoginForm) => {
    Login(formdata);
  };

  return (
    <FormContainer onClick={handleSubmit(submit)}>
      <h2>Login</h2>
      <Input
        label="Email"
        type="email"
        id="email"
        placeholder="Digite seu email"
        register={register("email")}
        error={errors.email?.message}
      />
      <Input
        label="Senha"
        type="password"
        id="password"
        placeholder="Digite sua senha"
        register={register("password")}
        error={errors.password?.message}
      />

      <button type="submit">Acessar</button>
      <span>Ainda não tem uma conta?</span>

      <p>Clicando no botão abaixo você pode se cadastrar rapidamente</p>

      <button type="button">Cadastrar</button>
    </FormContainer>
  );
};

export default FormLogin;
