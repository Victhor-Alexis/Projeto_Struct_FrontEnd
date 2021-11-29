import { Container } from "./styles"

const ManageTable = ({name}) => {
    return (
        <Container>
            <ul>
                <li>Gerência de {name}</li>
                <li>Mostrar {name}</li>
                <li>Adicionar {name}</li>
                <li>Editar {name}</li>
                <li>Deletar {name}</li>
            </ul>
        </Container>
    )
}

export default ManageTable
