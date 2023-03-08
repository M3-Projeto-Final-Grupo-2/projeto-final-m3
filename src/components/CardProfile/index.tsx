import { useContext } from "react";
import { ProfileContext } from "../../providers/profileContext";
import { StyledCardProfile } from "./style";

export const CardProfile = () => {
  const { cities, setModal, setCityFromClick } = useContext(ProfileContext);
  if (cities) {
    return (
      <>
        {cities.map((city) => {
          return (
            <StyledCardProfile key={city?.id}>
                <img src={city?.image} alt={city?.name} />
                <div>
                  <h2>{city?.name} - <p>{city?.state}</p></h2>
                  <span>{city?.data}</span>
                <button className="button__editCard"
                  onClick={() => {
                    setModal(true);
                    setCityFromClick(city);
                  }}
                >
                  Editar
                </button>
              </div>
            </StyledCardProfile>
          );
        })}
      </>
    );
  } else {
    return null;
  }
};
