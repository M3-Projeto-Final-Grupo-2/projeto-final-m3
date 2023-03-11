import React, { ReactNode, useContext } from "react";
import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { LoginContext } from "./loginContext";

interface ICityProviderProps {
  children: ReactNode;
}

export interface INewPost {
  userId: number;
  name: string;
  state: string;
  description: string;
  image: string;
  userName: string;
}

export interface IPost {
  id: number;
  userId: number;
  name: string;
  state: string;
  description: string;
  image: string;
  userName: string;
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
  modalPost: boolean;
  setModalPost: React.Dispatch<React.SetStateAction<boolean>>;
  registerPost(data: INewPost): void;
}

export const CitiesContext = createContext({} as ICitiesContext);

export const CitiesProvider = ({ children }: ICityProviderProps) => {
  const { user } = useContext(LoginContext);

  const [posts, setPosts] = useState<IPost[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);
  const [modalPost, setModalPost] = useState<boolean>(false);

  const token = localStorage.getItem("@TOKEN");
  const userId = localStorage.getItem("@USERID");

  const headers = {
    Authorization: `Bearer ${token}`,
    userID: userId,
  };

  useEffect(() => {
    async function getCities() {
      try {
        const response = await api.get(`/cities`, { headers });
        setCities(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getCities();
  }, []);

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await api.get(`/cities/?_embed=users`, { headers });
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getPosts();
  }, []);

  const registerPost = async (data: INewPost) => {
    try {
      const response = await api.post(`/cities`, data, { headers });

      setModalPost(false);
      setPosts([response.data, ...posts]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CitiesContext.Provider
      value={{ posts, cities, modalPost, setModalPost, registerPost }}
    >
      {children}
    </CitiesContext.Provider>
  );
};
