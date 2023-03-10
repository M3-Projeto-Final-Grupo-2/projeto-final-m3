import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CitiesContext, INewPost } from "../../../providers/citiesContext";
import { LoginContext } from "../../../providers/loginContext";
import CreatePostModal, { StyledBackground } from "./style";

const schema = yup.object({
  description: yup.string().required("Nova descrição obrigatória"),
});

export const ModalCreatePost = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<INewPost>({
    resolver: yupResolver(schema),
  });

  const { setModalPost, registerPost } = useContext(CitiesContext);
  const {user} = useContext(LoginContext)

 
  const defaultValues = {
    userId: user?.id,
    userName: user?.name 
  };

  useEffect(() => {
    reset(defaultValues); 
  }, [reset]);

  return (
    <>
    <CreatePostModal>

        <div className="containerButtons">
          <h3>Postar</h3>
      <button
        onClick={() => {
          setModalPost(false);
        }}
      >
        X
      </button>

        </div>
      <form onSubmit={handleSubmit(registerPost)}>
        <label htmlFor="name">Nome da cidade</label>
        <input id="name" type="text" {...register("name")} />
        <label htmlFor="state">Nome do estado</label>
        <input id="state" type="text" {...register("state")} />
        <label htmlFor="description">Descrição da cidade</label>
        <input id="description" type="text" {...register("description")} />
        <label htmlFor="image">URL da imagem da cidade</label>
        <input id="image" type="text" {...register("image")} />

        <button>Enviar</button>
      </form>

    </CreatePostModal>
    <StyledBackground className="background">
        </StyledBackground>
    </>
  );
};
