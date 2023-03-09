import * as yup from "yup";

const Schema = yup
  .object()
  .shape({
    email: yup.string().required("Campo obrigatório").email(),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Minímo de 8 caracteres"),
  })
  .required();

export default Schema;
