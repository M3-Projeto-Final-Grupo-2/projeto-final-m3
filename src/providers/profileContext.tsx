import { createContext } from "react";

export const ProfileContext = createContext({})

export const ProfileProvider = ({}) =>{

    return <ProfileContext.Provider value={{}}>
        {}
    </ProfileContext.Provider>
}