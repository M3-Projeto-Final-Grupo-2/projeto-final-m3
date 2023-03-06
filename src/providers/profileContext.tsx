import { createContext, ReactNode } from "react";

export const ProfileContext = createContext({});

interface IProviderProps {
  children: ReactNode;
}

export const ProfileProvider = ({children}: IProviderProps) => {

    
  return <ProfileContext.Provider value={{}}>
    {children}
    </ProfileContext.Provider>;
};
