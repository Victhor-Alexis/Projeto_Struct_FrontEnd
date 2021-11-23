import { createContext, useContext, useState } from "react";

const DynimicityContext = createContext({});

const DynimicityProvider = ({children}) => {
    /* Sidebar */

    const [sizeSidebar, setSizeSidebar] = useState("0%")
    const [displaySidebar, setDisplaySidebar] = useState("none") 

    // displaySidebar é para os elementos dentro da sidebar se ocultarem enquanto ela não for aberta
    // SizeDisplay é para a transição ser 'suave'.
    // Do modo como fiz, a função recebe o 'estado/visibilidade' atual do componente para depois alterá-lo
    const sidebarShow = (sizeSidebar) => { 
        if (sizeSidebar === "0%") {
            setDisplaySidebar("block")
            setTimeout(() => setSizeSidebar("30%"), 5)
        }
        else {
            setDisplaySidebar("none")
            setTimeout(() => setSizeSidebar("0%"), 5)
        }
    };

    /* * * * */

    /* Formulário */
    
    const [displayForm, setDisplayForm] = useState("none");
    const [formOpacity, setFormOpacity] = useState(0);

    const formShow = (displayForm) => {
        if (displayForm === "none") {
            setDisplayForm("block")
            setTimeout(() => setFormOpacity(1), 5) 
            /* Se não tiver o timeout, o form aparece de repente; o valor para a opacidade
            é setado para 1 no mesmo momento do click*/
        }
        else {
            setDisplayForm("none")
            setTimeout(() => setFormOpacity(0), 5)
        }
    }


    /* * * * */

    return (
        <DynimicityContext.Provider value={{sidebarShow, sizeSidebar, displaySidebar, formShow, displayForm, formOpacity}}>
            {children}
        </DynimicityContext.Provider>
    );
}

const useDynimicityContext = () => {
    const context = useContext(DynimicityContext)

    return context;
}

export {DynimicityProvider, useDynimicityContext}