import { createContext, useContext, useState } from "react";

 export const authcontext=createContext();
export const AuthProvider=({children})=>{
    const [isAuth,setIsAuth]=useState(localStorage.getItem("login")==="true")
    const Login=()=>{
        localStorage.setItem('login',"true")
        setIsAuth(true);

    }
    const Logout=()=>{
        localStorage.setItem('login',"false")
        setIsAuth(false)
    }
    return(
        <authcontext.Provider value={{Login,Logout,isAuth}}>
            {children}
        </authcontext.Provider>
    )
}
export const useAuth=()=>{
return useContext(authcontext)
}