import { useDynimicityContext } from "../../Context/useDynimicityContext"
import { Container } from "./styles"

const AdminSidebar = () => {

    const {managementOption} = useDynimicityContext();

    return (
        <Container>
            <img src="https://pfpmaker.com/_nuxt/img/profile-3-1.3e702c5.png" alt="Admin_profile"/>

            <div className="adminInfo">
                <h1>Nome</h1>
                <h1 className="cargo">Administrador</h1>
            </div>

            <ul className="manage">
                <li onClick={() => managementOption("Usuários")}>Gerenciar Usuários</li>
                <li onClick={() => managementOption("Categorias")}>Gerenciar Categorias</li>
                <li onClick={() => managementOption("Produtos")}>Gerenciar Produtos</li>
            </ul>
        </Container>
    )
}

export default AdminSidebar
