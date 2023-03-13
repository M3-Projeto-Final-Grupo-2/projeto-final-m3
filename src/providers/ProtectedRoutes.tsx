import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { LoginContext } from "./loginContext"

interface IRoute {
  ProtectedRoutes: ()  => JSX.Element
}

const token = localStorage.getItem("@TOKEN")


export const ProtectedRoutes = ()  =>{

  const { user } = useContext(LoginContext)

  return token? <Outlet/> : <Navigate to='/'/>
} 