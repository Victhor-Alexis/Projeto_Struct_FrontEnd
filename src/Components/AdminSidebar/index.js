import { useDynimicityContext } from "../../Context/useDynimicityContext"
import { Container } from "./styles"

const AdminSidebar = () => {

    const {managementOption, admSide, showAdmSidebar} = useDynimicityContext();

    return (
        <Container style={{display: admSide}}>
            <div className="close">
                <svg width="34" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => showAdmSidebar(true)}>
                    <line x1="2.70711" y1="1.29289" x2="34.7071" y2="33.2929" stroke="white" strokeWidth="3"/>
                    <line x1="1.29289" y1="33.2929" x2="33.2929" y2="1.29291" stroke="white" strokeWidth="3"/>
                </svg>
            </div>

            <img src="https://pfpmaker.com/_nuxt/img/profile-3-1.3e702c5.png" alt="Admin_profile"/>

            <div className="adminInfo">
                
                <h1 className="cargo">Administrador</h1>
            </div>

            <ul className="manage">
                <li onClick={() => managementOption("Categorias")}>Gerenciar Categorias</li>
                <li onClick={() => managementOption("Produtos")}>Gerenciar Produtos</li>
            </ul>
        </Container>
    )
}

export default AdminSidebar
