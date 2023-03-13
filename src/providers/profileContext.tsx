import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { LoginContext } from "./loginContext";
import { CitiesContext } from "./CitiesContext";

export const ProfileContext = createContext({} as IProfileContext);

interface ICities {
  userId: number;
  name: string;
  state: string;
  description: string;
  image: string;
  id: number;
  data?: string;
}

interface IProviderProps {
  children: ReactNode;
}

interface IData {
  description: string;
  image: string;
}

interface IProfileContext {
  editCityFromUser: (data: IData) => Promise<void>;
  cities: ICities[] | Array<null>;
  dellCity: (id: any) => Promise<void>;
  logoutUser: () => void;
  homePageUser: () => void;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  cityFromClick: ICities | any;
  setCityFromClick: React.Dispatch<React.SetStateAction<ICities | null>>;
}

export const ProfileProvider = ({ children }: IProviderProps) => {
  const token = localStorage.getItem("@TOKEN");
  const userId = localStorage.getItem("@USERID");

  const [cities, setCities] = useState<ICities[]>([]);

  useEffect(() => {
    const getAllCitiesFromUser = async () => {
      try {
        const response = await api.get(`/cities?userId=${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCities(response.data);
      } catch (error) {
        toast.error("Error 404, por favor tente novamente");
      }
    };
    getAllCitiesFromUser();
  }, []);

  const [cityFromClick, setCityFromClick] = useState<ICities | any>(null);

  const editCityFromUser = async (data: IData) => {
    try {
      const response = await api.patch(`/cities/${cityFromClick?.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const index = cities.indexOf(cityFromClick);
      const editCity = cities.splice(index, 1);
      setCities([...cities, editCity[0]]);
      setModal(false);
    } catch (error) {
      toast.error("Error, por favor tente novamente");
    }
  };

  const dellCity = async (id: number) => {
    try {
      const response = await api.delete(`/cities/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const citiesFiltered = cities.filter((city: ICities) => city.id !== id);
      setCities(citiesFiltered);
      setModal(false);
    } catch (error) {
      toast.error("Error, por favor tente novamente");
    }
  };

  const Navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    Navigate("/");
  };

  const homePageUser = () => {
    Navigate("/home");
  };

  const [modal, setModal] = useState(false);



  const { setUser, user } = useContext(LoginContext);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await api.get(`/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
        Navigate("/home");
      } catch (error) {
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
      }
    };
    getUser();
  }, []);


  return (
    <ProfileContext.Provider
      value={{
        cities,
        editCityFromUser,
        dellCity,
        logoutUser,
        homePageUser,
        modal,
        setModal,
        cityFromClick,
        setCityFromClick,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
