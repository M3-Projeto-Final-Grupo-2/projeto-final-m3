import { useContext } from "react";
import { ProfileContext } from "../../../providers/profileContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IData {
    description: string
    image: string
}

const schema = yup.object({
    description: yup.string().required("Nova descrição obrigatória")
})

export const ModalProfilePage = () => {
  const { setModal, cityFromClick, dellCity } = useContext(ProfileContext);
  const { register, handleSubmit } = useForm<IData>({
    resolver: yupResolver(schema) , mode: "onSubmit"
  });

  const getFromData = (data : IData | null) => {
    console.log(data);
  };
  return (
    <div>
        <h2>{cityFromClick?.name} - {cityFromClick?.state}</h2>
      <span
        onClick={() => {
          setModal(false);
        }}
      >
        X
      </span>
      <form onSubmit={handleSubmit(getFromData)}>
        <label htmlFor="description">Descrição da viagem</label>
        <input type="text" id="description" {...register("description")} />
        {/* <label htmlFor="image">Imagem da viagem</label>
        <input type="text" id="image" {...register("image")} /> */}
        <button type="submit">Editar</button>
        </form>
        <button onClick={() =>{
            if(cityFromClick){
                dellCity(cityFromClick?.id)
            }
        }}>Excluir</button>
    </div>
  );
};
