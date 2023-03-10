import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { RegisterContext } from "../../../providers/RegisterContext";
import StyledRegisterForm from "./style";
import Input from "../../../components/Input";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

interface IRegisterForm {
  name: string;
  email: string;
  password: string;
  passConfirm: string;
}

const formSchema = yup.object().shape({
  name: yup.string().required("Informe seu nome"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Informe sua senha")
    .matches(/[a-z]/, "Necessário ao menos uma letra minúscula")
    .matches(/(\d)/, "Necessário ao menos um número")
    .matches(/[A-Z]/, "Necessário ao menos uma letra maiúscula")
    .matches(/(\W|_)/, "Necessário ao menos um caracter especial")
    .matches(/.{8,}/, "Necessário ao menos oito caracteres"),
  passConfirm: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      "A confirmação deve ser idêntica à senha informada!"
    )
    .required("Confirme sua senha"),
});

const RegisterForm = () => {
  const { registerUser } = useContext(RegisterContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>({ resolver: yupResolver(formSchema) });

  return (
    <StyledRegisterForm onSubmit={handleSubmit(registerUser)}>
      <Input
        label="Usuário"
        placeholder="Digite seu nome..."
        id="name"
        register={register("name")}
        type="text"
        error={errors.name?.message}
      />
      <Input
        label="Email"
        placeholder="Digite seu e-mail..."
        id="email"
        register={register("email")}
        type="text"
        error={errors.email?.message}
      />
      <Input
        label="Senha"
        placeholder="Digite sua senha..."
        id="password"
        register={register("password")}
        type="password"
        error={errors.password?.message}
      />
      <Input
        label="Confirmar senha"
        placeholder="Confirme sua senha..."
        id="passConfirm"
        register={register("passConfirm")}
        type="password"
        error={errors.passConfirm?.message}
      />
      <button type="submit">Cadastrar</button>
      <Link to="/">Voltar para o Login</Link>
    </StyledRegisterForm>
  );
};

export default RegisterForm;
