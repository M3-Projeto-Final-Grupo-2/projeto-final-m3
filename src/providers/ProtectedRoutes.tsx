import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { LoginContext } from "./loginContext"

interface IRoute {
  ProtectedRoutes: ()  => JSX.Element
}


export const ProtectedRoutes = ()  =>{

  const { user } = useContext(LoginContext)

  return user? <Outlet/> : <Navigate to='/'/>

} 