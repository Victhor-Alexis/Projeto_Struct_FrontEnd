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
            setSizeSidebar("30%")
        }
        else {
            setDisplaySidebar("none")
            setSizeSidebar("0%")
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

    /* Menu Mobile */

    const [displayMobMenu, setDisplayMobMenu] = useState("none");
    const [widthMobMenu, setWidthMobMenu] = useState("0%");

    const mobMenuShow = () => {
        if (displayMobMenu === "none") {
            setDisplayMobMenu("block")
            setTimeout( () => setWidthMobMenu("100%"), 1)
        } else {
            setDisplayMobMenu("none")
            setTimeout( () => setWidthMobMenu("0%"), 1)
        }
    }

    /* * * * */

    return (
        <DynimicityContext.Provider value={{sidebarShow, sizeSidebar, displaySidebar, 
                                            formShow, displayForm, formOpacity, 
                                            mobMenuShow, displayMobMenu, widthMobMenu}}>
            {children}
        </DynimicityContext.Provider>
    );
}

const useDynimicityContext = () => {
    const context = useContext(DynimicityContext)

    return context;
}

export {DynimicityProvider, useDynimicityContext}