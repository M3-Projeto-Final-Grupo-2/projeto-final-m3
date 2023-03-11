import { createContext, ReactNode, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";



export interface IDataRegisterUser {
    name: string;
    email: string;
    password: string;
};

export interface IApiResponse {
    user: IDataRegisterUser;
}

export interface IApiError {
    code: string;
    message: string;
    name: string;
}

export interface IProviderProps {
    children: ReactNode;
};

export interface IRegisterContext {
    registerUser: (data: IDataRegisterUser) => Promise<void>;
    showPass: "password" | "text";
    showConfirm: "password" | "text";
    passChangeVisibility: () => void;
    ConfirmChangeVisibility: () => void;
};

export const RegisterContext = createContext({} as IRegisterContext);

export const RegisterProvider = ({ children }: IProviderProps) => {
    const [showPass, setShowPass] = useState<'password' | 'text'>('password');
    const [showConfirm, setShowConfirm] = useState<'password' | 'text'>('password');

    const passChangeVisibility = () => {
        showPass === 'password' ? setShowPass('text') : setShowPass('password');
    };

    const ConfirmChangeVisibility = () => {
        showConfirm === 'password' ? setShowConfirm('text') : setShowConfirm('password');
    }

    const navigate = useNavigate();

    const registerUser = async (data: IDataRegisterUser) => {
        console.log(data)
        await api.post('/register', data).then((response: AxiosResponse<IApiResponse>) => {
            toast.success(`${response.data.user.name}, seu cadastro está efetuado! Redirecionando à página de Login...`);
            setTimeout(() => {
                navigate('/');
            }, 2000);
        }).catch((error: AxiosError) => {
            if (error.code === 'ECONNABORTED') {
                toast.warning('Falha na conexão com o servidor. Por favor, tente novamente mais tarde');
            } else {
                toast.warning('E-mail já cadastrado. Por favor, tente novamente.');
            };
        });
    };

    return <RegisterContext.Provider value={{
        registerUser, showPass, showConfirm,
        passChangeVisibility, ConfirmChangeVisibility
    }}>
        {children}
    </RegisterContext.Provider>;
};