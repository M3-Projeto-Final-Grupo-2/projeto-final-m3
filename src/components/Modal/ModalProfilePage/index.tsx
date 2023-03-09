import { useContext } from "react";
import { ProfileContext } from "../../../providers/profileContext";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledBackground, StyledContainerModal } from "./style";

interface IData {
  description: string;
  image: string;
}

const schema = yup.object({
  description: yup.string().required("Nova descrição obrigatória"),
});

export const ModalProfilePage = () => {
  const { setModal, cityFromClick, dellCity } = useContext(ProfileContext);
  const { register, handleSubmit } = useForm<IData>({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const getFromData = (data: IData | null) => {
    console.log(data);
  };
  return (
    <>
      <StyledContainerModal>
        <div>
          <h2>
            {cityFromClick?.name} - <p>{cityFromClick?.state}</p>
          </h2>
          <button
            onClick={() => {
              setModal(false);
            }}
          >
            X
          </button>
        </div>
        <h2 className="h2__description">Sua experiancia atual:</h2>
        <p className="p__description">{cityFromClick?.description}</p>
        <h2>Edite sua viagem aqui:</h2>
        <form onSubmit={handleSubmit(getFromData)}>
          <label htmlFor="description">Descrição da viagem</label>
          <input type="text" id="description" {...register("description")} />
          {/* <label htmlFor="image">Imagem da viagem</label>
        <input type="text" id="image" {...register("image")} /> */}
          <div className="container__buttons">
            <button type="submit">Editar</button>
            <span
              onClick={() => {
                if (cityFromClick) {
                  dellCity(cityFromClick?.id);
                }
              }}
            >
              Excluir
            </span>
          </div>
        </form>
      </StyledContainerModal>
        <StyledBackground className="background">
          <p></p>
        </StyledBackground>
    </>
  );
};
