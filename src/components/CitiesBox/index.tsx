import React from "react";
import { useContext } from "react";
import { CitiesContext, ICity } from "../../providers/citiesContext";
import CitiesSection from "./style";

const CitiesList = () => {

    const {cities} = useContext(CitiesContext)
    return(
        <CitiesSection>
        <div className="citiesBoxContainer">
        <h3>Cities</h3>
            <ul>
            {cities.map((city: ICity) => (
            <li key={city.id}>
                <div className="imgContainer"><img src={city.image} alt="Imagem da cidade"/></div>
                <h4>{city.name}</h4>
                <span>{city.state}</span>
            </li>
      ))}
            </ul>
            </div>
            </CitiesSection>

    )
    
}

export default CitiesList;