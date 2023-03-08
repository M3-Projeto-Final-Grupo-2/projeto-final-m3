import { createContext, ReactNode } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { AxiosResponse } from "axios";



export interface IDataRegisterUser {
    name: string;
    email: string;
    password: string;
};

export interface IApiResponse {
    user: IDataRegisterUser;
}

export interface IProviderProps {
    children: ReactNode;
};

export interface IRegisterContext {
    registerUser: (data: IDataRegisterUser) => Promise<void>;
};

export const RegisterContext = createContext({} as IRegisterContext);

export const RegisterProvider = ({ children }: IProviderProps) => {

    const registerUser = async (data: IDataRegisterUser) => {
        console.log(data)
        try {
            await api.post('/register', data).then((response: AxiosResponse<IApiResponse>) => {
                toast.success(`${response.data.user.name}, seu cadastro está efetuado! Redirecionando à página de Login...`)
            });
        } catch (error) {
            toast.warning('E-mail já cadastrado. Por favor, tente novamente.');
        }
    };



    return <RegisterContext.Provider value={{ registerUser }}>
        {children}
    </RegisterContext.Provider>;
};