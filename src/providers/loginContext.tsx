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
  showPass: "password" | "text";
  passChangeVisibility: () => void;
  passIcon: () => "fa-sharp fa-solid fa-eye" | "fa-solid fa-eye-slash";
}

export const LoginContext = createContext({} as IUserContext);

export const LoginContextProvider = ({ children }: IProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [showPass, setShowPass] = useState<'password' | 'text'>('password');

  const navigate = useNavigate();

  const passChangeVisibility = () => {
    showPass === 'password' ? setShowPass('text') :
      setShowPass('password');
  };

  const passIcon = () => {
    let icon: '' | 'fa-sharp fa-solid fa-eye' | 'fa-solid fa-eye-slash' = '';

    showPass === 'password' ? icon = 'fa-sharp fa-solid fa-eye' :
      icon = 'fa-solid fa-eye-slash'

    return icon;
  }

  const Login = async (data: ILoginForm) => {
    try {
      const response = await api.post("/login", data);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      localStorage.setItem("@USERID", response.data.user.id)
      setUser(response.data.user);
      navigate("/home");
      toast.success("Logado com sucesso");
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
        showPass,
        passChangeVisibility,
        passIcon
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
