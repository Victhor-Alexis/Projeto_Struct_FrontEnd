import { createContext, useContext, useState } from "react";
import { api } from "../services/api"

const DynimicityContext = createContext({});

const DynimicityProvider = ({children}) => {
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
    const [realOptionModel, setRealOptionModel] = useState("");

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
        setRealOptionModel(realOptionModel)
    } 

    // AdmForm:
    const [displayAdmForm, setDisplayAdmForm] = useState(["none", 0])
    const [optionCrud, setOptionCrud] = useState("");
    const [selectedItemId, setSelectedItemId] = useState(-1);
    const [formKind, setFormKind] = useState(["none", "none"]); // Add/edit e delete
    const [modelForm, setModelForm] = useState(["none", "none", "none"]); // Respectivamente, inputs para product, user e o input imagem que aparece nos dois
    // Não precisa para as categorias porque o único input para a categoria é o nome, 
    // que também é atributo das outras dois models

    const admFormShow = (bool, index, optionCrud) => {
        if (bool === false) {
            setDisplayAdmForm(["block", 0])
            setTimeout(() => setDisplayAdmForm(["block", 1]), 5)
        }
        else {
            setDisplayAdmForm(["block", 0])
            setTimeout(() => setDisplayAdmForm(["none", 0]), 100)
        }
        
        setSelectedItemId(index)
        setOptionCrud(optionCrud)

        /* Determinando a quantidade e o nome dos inputs com base na model e na opção do crud escolhida*/

        if (optionCrud === "Adicionar" || optionCrud === "Editar") {
            setFormKind(["block", "none"])
        } 
        else {
            setFormKind(["none", "block"])
        }

        switch(optionModel) {
            case "Produtos":
                setModelForm(["block", "none", "block"])
            break;

            case "Usuários":
                setModelForm(["none", "block", "block"])
            break;

            default:
                setModelForm(["none", "none", "none"])
                // Caso o form seja para as categorias, só aparece o nome
            break;
        }
    }

    // Hide Sidebar:
    const [admSide, setAdmSide] = useState("inline-block");

    const showAdmSidebar = (bool) => {
        if (bool === false) {
            setAdmSide("inline-block");
        }
        else 
            setAdmSide("none");
    }

    /* * * * */

    return (
        <DynimicityContext.Provider value={{sidebarShow, sizeSidebar, displaySidebar, minWidthSide, 
                                            formShow, displayForm, formOpacity, 
                                            mobMenuShow, displayMobMenu, widthMobMenu,
                                            managementOption, optionModel, modelItens,
                                            setOptionCrud, optionCrud,
                                            admFormShow, displayAdmForm,
                                            selectedItemId, formKind, modelForm,
                                            realOptionModel,
                                            showAdmSidebar, admSide}}>
            {children}
        </DynimicityContext.Provider>
    );
}

const useDynimicityContext = () => {
    const context = useContext(DynimicityContext)

    return context;
}

export {DynimicityProvider, useDynimicityContext}