import React, { useEffect, useState } from 'react'
import { useDynimicityContext } from '../../Context/useDynimicityContext'
import { Container, Options } from './styles'
import UserCard from '../UserCard'
import ProductCard from '../ProductCard'
import edit from '../../Assets/edit.png'
import delete_icon from '../../Assets/delete.png'

const AdmRenderElements = ({model}) => {

    const {optionModel, setOptionCrud, admFormShow} = useDynimicityContext();
    const [whatToRender, setWhatToRender] = useState([]);

    useEffect(() => {
        const determiningWhatToRender = () => {
            if (optionModel === "Usuários")
                setWhatToRender(["block", "none", "none"])
            else if (optionModel === "Produtos")
                setWhatToRender(["none", "block", "none"])
            else
                setWhatToRender(["none", "none", "block"])
        }

        determiningWhatToRender()
    }, [optionModel]) 
    // Atualiza Quais elementos devem ser mostrados com base na mudança da opção da model
    
    // Não esquecer de tranformar Options em componente

    return (
        <Container>
            <div className="userWrapper" style={{display: whatToRender[0]}}>
                <Options>
                    <img src={edit} alt="edit" onClick={() => {admFormShow(false); setOptionCrud("Editar")}}/>
                    <img src={delete_icon} alt="delete" onClick={() => {admFormShow(false); setOptionCrud("Deletar")}}/>
                </Options>

                <UserCard name = {model.name} email = {model.email}/>
            </div>

            <div className="produtos" style={{display: whatToRender[1]}}>
                <Options>
                    <img src={edit} alt="edit" onClick={() => {{admFormShow(false); setOptionCrud("Editar")}}}/>
                    <img src={delete_icon} alt="delete" onClick={() => {admFormShow(false); setOptionCrud("Deletar")}}/>
                </Options>

                <ProductCard newDimensions={8} product={model}/>
                <table>
                    <tbody>
                        <tr>
                            <th>Preço:</th>
                            <td>{model.price} R$</td>
                        </tr>
                        <tr>
                            <th>Descrição:</th>
                            <td>{model.description}</td>
                        </tr>
                        <tr>
                            <th>Categorias:</th>
                            <td>{model.categories !== undefined && model.categories.map((element, key) => (element.name+" "))}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="categorias" style={{display: whatToRender[2]}}>
                <Options>
                    <img src={edit} alt="edit" onClick={() => {admFormShow(false); setOptionCrud("Editar")}}/>
                    <img src={delete_icon} alt="delete" onClick={() => {admFormShow(false); setOptionCrud("Deletar")}}/>
                </Options>
                {
                    <>
                        <h1>{model.name}</h1>

                        <table>
                            <tbody>
                                <tr>
                                    <th>Produtos relacionados</th>
                                </tr>
                                {model.products !== undefined && model.products.map((element, key) => (<tr><td>{element.name}</td></tr>))}
                            </tbody>
                        </table>
                    </>
                }
            </div>
        </Container>
    )
}

export default AdmRenderElements;
