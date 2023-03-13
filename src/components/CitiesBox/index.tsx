import React from "react";
import { useContext } from "react";
import { CitiesContext, ICity } from "../../providers/CitiesContext";
import CitiesSection from "./style";

const CitiesList = () => {
  const { cities } = useContext(CitiesContext);
  return (
    <CitiesSection>
      <div className="citiesBoxContainer">
        <h3>Cidades já cadastradas:</h3>
        <ul>
          {cities.map((city: ICity) => (
            <li key={city.id}>

                <div className="imgContainer"><img src={city.image} alt="Imagem da cidade"/></div>
                <div className="cityText">
                <h4>{city.name}</h4>
                <span>{city.state}</span>

                </div>

            </li>
          ))}
        </ul>
      </div>
    </CitiesSection>
  );
};

export default CitiesList;
