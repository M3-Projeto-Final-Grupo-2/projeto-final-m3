import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

interface IProviderProps {
  children: React.ReactNode;
}

export interface ILoginForm {
  email: string;
  password: string;
}

export interface IUser {
  email: string;
  name: string;
  id: number;
}

export interface IUserContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  Login: (data: ILoginForm) => Promise<void>;
}

export const LoginContext = createContext({} as IUserContext);

export const LoginContextProvider = ({ children }: IProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  const navigate = useNavigate();

  const Login = async (data: ILoginForm) => {
    try {
      const response = await api.post("/login", data);
      localStorage.setItem("@TOKEN", JSON.stringify(response.data.accessToken));
      toast.success("Logado com sucesso");
      setUser(response.data.user);
      navigate("/home");
    } catch (errors) {
      toast.error("Ops, algo deu errado");
    }
  };

  return (
    <LoginContext.Provider
      value={{
        Login,
        user,
        setUser,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
