import { createContext, useContext, useState } from "react";

const DynimicityContext = createContext({});

const DynimicityProvider = ({children}) => {
    /* Sidebar */

    const [sizeSidebar, setSizeSidebar] = useState("0%")
    const [displaySidebar, setDisplaySidebar] = useState("none") 

    // displaySidebar é para os elementos dentro da sidebar se ocultarem enquanto ela não for aberta

    const sidebarShow = (sizeSidebar) => {
        if (sizeSidebar === "0%") {
            setSizeSidebar("30%")
            setDisplaySidebar("block")
        }
        else {
            setSizeSidebar("0%")
            setDisplaySidebar("none")
        }
    };

    /* * * * */

    return (
        <DynimicityContext.Provider value={{sidebarShow, sizeSidebar, displaySidebar}}>
            {children}
        </DynimicityContext.Provider>
    );
}

const useDynimicityContext = () => {
    const context = useContext(DynimicityContext)

    return context;
}

export {DynimicityProvider, useDynimicityContext}