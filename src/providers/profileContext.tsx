import { createContext, ReactNode } from "react";
import { api } from "../services/api";
import { toast } from 'react-toastify';


export const ProfileContext = createContext({});

interface IProviderProps {
  children: ReactNode;
}

const userId = 2
const cityId = 2
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQG1haWwuY29tIiwiaWF0IjoxNjc4MTMyMzQ2LCJleHAiOjE2NzgxMzU5NDYsInN1YiI6IjIifQ.W9dM5ag9T5Q9bSZxxFJ3XB8M3QYkh8mh9khZnDNz3Qw"

export const ProfileProvider = ({children}: IProviderProps) => {

    const getAllCitiesFromUser = async ()=>{
        try {
            const response = await api.get(`/cities?userid=${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            console.log(response.data)
        } catch (error) {
            toast.error("Error 404, por favor tente novamente")
        }
    }

    const editCityFromUser = async () =>{
        try {
            const reponse = await api.patch(`/cities/${cityId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            console.log(reponse)
        } catch (error) {
            toast.error("Error, por favor tente novamente")
        }
    }

    
  return <ProfileContext.Provider value={{}}>
    {children}
    </ProfileContext.Provider>;
};
