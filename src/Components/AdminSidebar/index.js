import ManageTable from "../ManageTable"
import { Container } from "./styles"

const AdminSidebar = () => {
    return (
        <Container>
            <img src="https://pfpmaker.com/_nuxt/img/profile-3-1.3e702c5.png" alt="Admin_profile"/>

            <div className="adminInfo">
                <h1>Nome</h1>
                <h1 className="cargo">Administrador</h1>
            </div>

            <div className="management">
                <ManageTable name={"Usuários"}/>
                <ManageTable name={"Categorias"}/>
                <ManageTable name={"Produtos"}/>
            </div>
        </Container>
    )
}

export default AdminSidebar
