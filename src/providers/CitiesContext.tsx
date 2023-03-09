import React, { ReactNode } from 'react'
import { createContext, useEffect, useState } from "react";
import { api } from '../services/api';

interface ICityProviderProps {
  children: ReactNode;
}

export interface IPost {
    id: number;
}

export interface ICity {
    id: number;
    name: string;
    state: string;
    description: string;
    image: string;
}

export interface ICitiesContext {
posts: IPost[];
cities: ICity[];
}

export const CitiesContext = createContext({} as ICitiesContext);

export const CitiesProvider = ({children}: ICityProviderProps) => {
    const [posts, setPosts] = useState<IPost[]>([])
    const [cities, setCities] = useState<ICity[]>([])
    const token = localStorage.getItem("@TOKEN")
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    useEffect(() => {
        async function getCities() {
            try {
              const response = await api.get(`/cities`, {headers});
              setCities(response.data);
            } catch (error) {
              console.log(error);
            } 
          }
          getCities();
    }, [])

    useEffect(() => {
    async function getPosts() {
        try {
          const response = await api.get(`/cities/?_embed=users`, {headers});
          setPosts(response.data);
        } catch (error) {
          console.log(error);
        } 
      }
      getPosts();
}, [])

    return (
        <CitiesContext.Provider value={{posts, cities}}>
            {children}
        </CitiesContext.Provider>
    )
}