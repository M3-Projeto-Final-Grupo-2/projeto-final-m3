import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router";


export const ProfileContext = createContext({} as IProfileContext);

interface ICities {
    userId: number
    name: string
    state: string
    description: string
    image: string
    id: number
    data?: string 
}

interface IProviderProps {
  children: ReactNode;
}

interface IData {
    description: string,
    image: string
}

interface IProfileContext {
    editCityFromUser: (data: IData) => Promise<void>
    cities: ICities[] | Array<null>
    logoutUser: () => void
    homePageUser: () => void
    modal: boolean
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}

const userId = 2
const cityId = 2
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQG1haWwuY29tIiwiaWF0IjoxNjc4MTQ4OTMwLCJleHAiOjE2NzgxNTI1MzAsInN1YiI6IjIifQ.JdS8GALWtRb2aBFhLEMbZc2f81wk24kzIAaEpDloxdo"

export const ProfileProvider = ({children}: IProviderProps) => {

    const [cities, setCities] = useState<ICities[] | null[]>([])

    useEffect(() =>{
        const getAllCitiesFromUser = async ()=>{
            // const token = localStorage.getItem("")
            try {
                const response = await api.get(`/cities?userid=${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                setCities(response.data)
            } catch (error) {
                toast.error("Error 404, por favor tente novamente")
            }
        }
        getAllCitiesFromUser()
    }, [])

    const editCityFromUser = async (data: IData) =>{
            // const token = localStorage.getItem("")
        try {
            const reponse = await api.patch(`/cities/${cityId}`,  data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
        } catch (error) {
            toast.error("Error, por favor tente novamente")
        }
    }

    const Navigate = useNavigate()

    const logoutUser = () =>{
        // localStorage.removeItem("")
        // Navigate("/")
    }
    const homePageUser = () =>{
        // Navigate("/home")

    }

    const [modal, setModal] = useState(false)

    
  return <ProfileContext.Provider value={{cities, editCityFromUser, logoutUser, homePageUser, modal, setModal}}>
    {children}
    </ProfileContext.Provider>;
};
