import React, { useState, useEffect } from 'react'
import { useDynimicityContext } from '../../Context/useDynimicityContext'
import { api } from '../../services/api';
import { Container } from './styles'

const AdmForm = () => {

    const {optionCrud, optionModel, displayAdmForm, admFormShow, 
           selectedItemId, modelForm, formKind, realOptionModel} = useDynimicityContext();

    const [name, setName] = useState("")

    const fetchValues = async () => {
        const response = await api.get(`${realOptionModel}/show/${selectedItemId}`)
        //onsole.log(response.data)
        setName(response.data.name)
    }

    useEffect(() => {
        if (selectedItemId !== -1)
            fetchValues()
    }, [selectedItemId, optionCrud])

    const selectSubmitType = () => {
        if (optionCrud === 'Editar') {
            updateModel()
        }
    }

    const updateModel = async () => {
        //console.log(realOptionModel, selectedItemId)
        await api.patch(`${realOptionModel}/update/${selectedItemId}`, {
            category: {
                name
            }
        }).then((response) => {alert("Categoria editada")})
    }

    // Existe a opção de fazer um form para cada opção do crud. Ia ficar mais organizado
    // que a forma que fiz aqui, mas teria mais componentes e trechos repetidos.

    return (
        <Container style={{display: displayAdmForm[0], opacity: displayAdmForm[1]}} onSubmit={selectSubmitType}>
            <h1>{optionCrud} {optionModel.toLowerCase()}</h1>

            <div className="close" onClick={() => admFormShow(true, -1, "")}>
                <svg width="36" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="2.70711" y1="1.29289" x2="34.7071" y2="33.2929" stroke="#161616" strokeWidth="2"/>
                    <line x1="1.29289" y1="33.2929" x2="33.2929" y2="1.29289" stroke="#161616" strokeWidth="2"/>
                </svg>
            </div>

            <div className="edit_or_add" style={{display: formKind[0]}}>
                <div className="inputWrapper">
                    <h2>Nome:</h2>
                    <input type="text" value={name} onChange={(e) => {setName(e.target.value)}}/>
                </div>

                <div className="inputWrapper" style={{display: modelForm[0]}}>
                    <h2>Categoria:</h2>
                    <input type="text"/>
                </div>

                <div className="inputWrapper" style={{display: modelForm[0]}}>
                    <h2>Preço:</h2>
                    <input type="text"/>
                </div>

                <div className="inputWrapper" style={{display: modelForm[0]}}>
                    <h2>Descrição:</h2>
                    <input type="text"></input>
                </div>

                <div className="inputWrapper" style={{display: modelForm[1]}}>
                    <h2>Email:</h2>
                    <input type="text"/>
                </div>

                <div className="inputWrapper" style={{display: modelForm[2]}}>
                    <h2>Imagem:</h2>
                </div>
            </div>

            <div className="delete" style={{display: formKind[1]}}>
                <h1>Tem certeza que deseja deletar?</h1>
            </div>

            <input className="submit" value={optionCrud} type="submit"/>
        </Container>
    )
}

export default AdmForm
