import { createContext, useContext, useState } from "react";
import { api } from "../services/api"

const DynimicityContext = createContext({});

const DynimicityProvider = ({children}) => {

     /* Add Favorite */ 

     const [sizeFavbar, setSizeFavbar] = useState("0%")
     const [displayFavbar, setDisplayFavbar] = useState("none") 
     const [minWidthFav, setMinWidthFav] = useState("0")
 
     // displaySidebar é para os elementos dentro da sidebar se ocultarem enquanto ela não for aberta
     // SizeDisplay é para a transição ser 'suave'.
     // Do modo como fiz, a função recebe o 'estado/visibilidade' atual do componente para depois alterá-lo
     const favbarShow = (sizeFavbar) => { 
         if (sizeFavbar === "0%") {
             setDisplayFavbar("block")
             setSizeFavbar("30%")
             setMinWidthFav("20rem")
         }
         else {
             setDisplayFavbar("none")
             setSizeFavbar("0%")
             setMinWidthFav("0")
         }
     };


    /* login */

    const [user, setUser] = useState({})

    const login = async (sentUser) =>{
        console.log("dentro de login = " + sentUser.email, sentUser.password)
        const response = await api.post(`user/login`, {sentUser})
        alert('depois da requisicao')
        setUser(response.data)
    }
    
    /* Sidebar */

    const [sizeSidebar, setSizeSidebar] = useState("0%")
    const [displaySidebar, setDisplaySidebar] = useState("none") 
    const [minWidthSide, setMinWidthSide] = useState("0")

    // displaySidebar é para os elementos dentro da sidebar se ocultarem enquanto ela não for aberta
    // SizeDisplay é para a transição ser 'suave'.
    // Do modo como fiz, a função recebe o 'estado/visibilidade' atual do componente para depois alterá-lo
    const sidebarShow = (sizeSidebar) => { 
        if (sizeSidebar === "0%") {
            setDisplaySidebar("block")
            setSizeSidebar("30%")
            setMinWidthSide("20rem")
        }
        else {
            setDisplaySidebar("none")
            setSizeSidebar("0%")
            setMinWidthSide("0")
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
            setFormOpacity(0)
            setTimeout(() => setDisplayForm("none"), 400)
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

    /* Painel de controle */

    // Selecionar a model:
    const [optionModel, setOptionModel] = useState("");
    const [modelItens, setModelItens] = useState([]);

    const fetchModelItens = async (realOptionModel) => {
        const response = await api.get(`${realOptionModel}/index`)
        //console.log(response.data)
        setModelItens(response.data)
    }

    const managementOption = (optionModel) => {
        let realOptionModel;
        setOptionModel(optionModel)
        
        switch(optionModel) {
            case "Produtos":
                realOptionModel = "products"
            break;

            case "Categorias":
                realOptionModel = "categories"
            break;

            default:
                realOptionModel = "user"
            break;
        }

        fetchModelItens(realOptionModel);
    } 

    // Hide menu:

    /* * * * */

    return (
        <DynimicityContext.Provider value={{sidebarShow, sizeSidebar, displaySidebar, minWidthSide, 
                                            favbarShow, sizeFavbar, displayFavbar, minWidthFav,
                                            formShow, displayForm, formOpacity, 
                                            mobMenuShow, displayMobMenu, widthMobMenu,
                                            managementOption, optionModel, modelItens,
                                            login,user}}>
            {children}
        </DynimicityContext.Provider>
    );
}

const useDynimicityContext = () => {
    const context = useContext(DynimicityContext)

    return context;
}

export {DynimicityProvider, useDynimicityContext}