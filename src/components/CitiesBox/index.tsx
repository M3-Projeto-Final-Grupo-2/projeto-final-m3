import React from "react";
import { useContext } from "react";
import { CitiesContext, ICity } from "../../providers/citiesContext";

const CitiesList = () => {

    const {cities} = useContext(CitiesContext)
    return(
       
            <ul>
            {cities.map((city: ICity) => (
            <li key={city.id}>
                <div><img src={city.image} alt="Imagem da cidade"/></div>
                <h4>{city.name}</h4>
                <span>{city.state}</span>
            </li>
      ))}
            </ul>


    )
    
}

export default CitiesList;