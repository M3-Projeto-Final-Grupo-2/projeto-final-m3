import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CitiesContext, INewPost } from "../../../providers/citiesContext";



const schema = yup.object({
  description: yup.string().required("Nova descrição obrigatória"),
});

export const ModalCreatePost = () => {
  const {register, handleSubmit, formState: {errors},} = useForm<INewPost>({resolver: yupResolver(schema)})  
 
  const {setModalPost, registerPost} = useContext(CitiesContext)
  return (
    <>
     
          <button
            onClick={() => {
              setModalPost(false);
            }}
          >
            X
          </button>
          <form onSubmit={handleSubmit(registerPost)}>
            <label htmlFor="name">Nome da cidade</label>
            <input type="text" {...register("userId")}/>
            <input type="text" {...register("name")}/>
            <input type="text" {...register("state")}/>
            <input type="text" {...register("description")}/>
            <input type="text" {...register("image")}/>
            <button>Submit</button>
          </form>
        
    </>
  );
};
