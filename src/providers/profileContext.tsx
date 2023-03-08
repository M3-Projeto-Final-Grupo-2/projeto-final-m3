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
    dellCity: (id: any) => Promise<void>
    logoutUser: () => void
    homePageUser: () => void
    modal: boolean
    setModal: React.Dispatch<React.SetStateAction<boolean>>
    cityFromClick: ICities | null
    setCityFromClick: React.Dispatch<React.SetStateAction<ICities | null>>
}


const userId = 2
const cityId = 2
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQG1haWwuY29tIiwiaWF0IjoxNjc4MjgzODM1LCJleHAiOjE2NzgyODc0MzUsInN1YiI6IjIifQ.oj45Lps1VIJQFPGfGn_zQibdUnTo-LFh_cgVvntZwlc"

export const ProfileProvider = ({children}: IProviderProps) => {

    const [cities, setCities] = useState<ICities[] | null[]>([])
    // const token = localStorage.getItem("")

    useEffect(() =>{
        const getAllCitiesFromUser = async ()=>{
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
        try {
            const response = await api.patch(`/cities/${cityId}`,  data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            setCities(response.data)
        } catch (error) {
            toast.error("Error, por favor tente novamente")
        }
    }

    const dellCity = async (id:any)=>{
        try {
            const response = await api.delete(`/citie/${id}` ,{
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            setCities(response.data)
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

    const [cityFromClick, setCityFromClick] = useState<ICities | null>(null)

    
  return <ProfileContext.Provider value={{cities, editCityFromUser, dellCity, logoutUser, homePageUser, modal, setModal, cityFromClick, setCityFromClick}}>
    {children}
    </ProfileContext.Provider>;
};
