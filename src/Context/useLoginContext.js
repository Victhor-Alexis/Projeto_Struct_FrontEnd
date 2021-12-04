import { createContext, useContext, useState } from "react";

const LoginContext = createContext({})


const LoginProvider = ({children}) => {

    const [user, setUser] = useState({})

    return(
        <LoginContext.Provider value={user, setUser}>
            {children}
        </LoginContext.Provider>
    )
}

const useLoginContext = () => {
    const context = useContext(LoginContext)
    return context;
}

export {LoginProvider, useLoginContext}