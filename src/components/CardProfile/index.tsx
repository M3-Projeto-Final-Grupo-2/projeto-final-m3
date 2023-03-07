import { useContext } from "react";
import { ProfileContext } from "../../providers/profileContext";

export const CardProfile = () => {
  const { cities, setModal, setCityFromClick } = useContext(ProfileContext);
  if(cities){
      return (
          <>
      {
      cities.map((city) => {
        return (
            <li key={city?.id}>
            <div>
              <img src={city?.image} alt={city?.name} />
              <h2>{city?.name}</h2>
              <p>{city?.state}</p>
            </div>
            <div>
              <span>{city?.data}</span>
              <button onClick={() =>{
                setModal(true)
                setCityFromClick(city)
              }}>Editar</button>
            </div>
          </li>
        );
    })}
    </>
  );
}else{
    return null
}
};

