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
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQG1haWwuY29tIiwiaWF0IjoxNjc4MzAxMDA3LCJleHAiOjE2NzgzMDQ2MDcsInN1YiI6IjIifQ._CDb3O-AIKb3jiFwV3-wuyw00oLQj4qxSa7mZi6Jph0"

export const ProfileProvider = ({ children }: IProviderProps) => {

    const [cities, setCities] = useState<ICities[]>([])
    // const token = localStorage.getItem("")

    useEffect(() => {
        const getAllCitiesFromUser = async () => {
            try {
                const response = await api.get(`/cities?userId=${userId}`, {
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

    const editCityFromUser = async (data: IData) => {
        try {
            const response = await api.patch(`/cities/${cityId}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            setCities(response.data)
        } catch (error) {
            toast.error("Error, por favor tente novamente")
        }
    }

    const dellCity = async (id: number) => {
        try {
            const response = await api.delete(`/cities/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            const citiesFiltered = cities.filter((city: ICities) => city.id !== id)
            setCities(citiesFiltered)
            setModal(false)
        } catch (error) {
            toast.error("Error, por favor tente novamente")
        }
    }

    const Navigate = useNavigate()

    const logoutUser = () => {
        // localStorage.removeItem("")
        Navigate("/")
    }
    const homePageUser = () => {
        // Navigate("/home")

    }

    const [modal, setModal] = useState(false)

    const [cityFromClick, setCityFromClick] = useState<ICities | null>(null)


    return <ProfileContext.Provider value={{ cities, editCityFromUser, dellCity, logoutUser, homePageUser, modal, setModal, cityFromClick, setCityFromClick }}>
        {children}
    </ProfileContext.Provider>;
};
