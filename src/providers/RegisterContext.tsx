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
    iconPassword: () => "fa-sharp fa-solid fa-eye" | "fa-solid fa-eye-slash";
    iconConfirmPass: () => "fa-sharp fa-solid fa-eye" | "fa-solid fa-eye-slash";
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
    };

    const iconPassword = () => {
        let icon: '' | 'fa-sharp fa-solid fa-eye' | 'fa-solid fa-eye-slash' = '';

        showPass === 'password' ? icon = 'fa-sharp fa-solid fa-eye' :
            icon = 'fa-solid fa-eye-slash';

        return icon;
    };

    const iconConfirmPass = () => {
        let icon: '' | 'fa-sharp fa-solid fa-eye' | 'fa-solid fa-eye-slash' = '';

        showConfirm === 'password' ? icon = 'fa-sharp fa-solid fa-eye' :
            icon = 'fa-solid fa-eye-slash';

        return icon;
    } 

    const navigate = useNavigate();

    const registerUser = async (data: IDataRegisterUser) => {
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
        passChangeVisibility, ConfirmChangeVisibility,
        iconPassword, iconConfirmPass
    }}>
        {children}
    </RegisterContext.Provider>;
};