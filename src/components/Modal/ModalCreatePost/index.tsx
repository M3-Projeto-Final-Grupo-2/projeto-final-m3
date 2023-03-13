import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CitiesContext, INewPost } from "../../../providers/citiesContext";
import { LoginContext } from "../../../providers/loginContext";
import CreatePostModal, { StyledBackground } from "./style";

const schema = yup.object({
  name: yup.string().required("Digite o nome da cidade"),
  state: yup.string().required("Digite o estado da cidade"),
  image: yup.string().required("Coloque a URL da imagem"),
  description: yup.string().required("Descrição obrigatória"),
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
        <span className="errorMsg">{errors.name?.message}</span>
        <label htmlFor="state">Nome do estado</label>
        <input id="state" type="text" {...register("state")} />
        <span className="errorMsg">{errors.state?.message}</span>

        <label htmlFor="description">Descrição da cidade</label>
        <input id="description" type="text" {...register("description")} />
        <span className="errorMsg">{errors.description?.message}</span>

        <label htmlFor="image">URL da imagem da cidade</label>
        <input id="image" type="text" {...register("image")} />
        <span className="errorMsg">{errors.image?.message}</span>


        <button>Enviar</button>
      </form>

    </CreatePostModal>
    <StyledBackground className="background">
        </StyledBackground>
    </>
  );
};
