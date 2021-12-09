import { createContext, useContext, useState } from "react";
import { api } from "../services/api";

const LoginContext = createContext({})


const LoginProvider = ({children}) => {

    const [user, setUser] = useState(undefined)

    const login = async (user) =>{
        const response = await api.post(`user/login`, {user})
        setUser(response.data)
    }
    
    return(
        <LoginContext.Provider value={{login,user}}>
            {children}
        </LoginContext.Provider>
    )
}

const useLoginContext = () => {
    const context = useContext(LoginContext)
    return context;
}

export {LoginProvider, useLoginContext}