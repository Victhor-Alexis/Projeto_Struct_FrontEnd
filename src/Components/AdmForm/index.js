import React from 'react'
import { useDynimicityContext } from '../../Context/useDynimicityContext'
import { Container } from './styles'

const AdmForm = () => {

    const {optionCrud, optionModel, displayAdmForm, admFormShow} = useDynimicityContext();

    return (
        <Container style={{display: displayAdmForm[0], opacity: displayAdmForm[1]}}>
            <h1>{optionCrud} {optionModel.toLowerCase()}</h1>

            <div className="close" onClick={() => admFormShow(true)}>
                <svg width="36" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="2.70711" y1="1.29289" x2="34.7071" y2="33.2929" stroke="#161616" strokeWidth="2"/>
                    <line x1="1.29289" y1="33.2929" x2="33.2929" y2="1.29289" stroke="#161616" strokeWidth="2"/>
                </svg>
            </div>

            <div className="inputWrapper">
                <h2>Nome:</h2>
                <input type="text"/>
            </div>

            <div className="inputWrapper">
                <h2>Preço:</h2>
                <input type="text"/>
            </div>

            <div className="inputWrapper">
                <h2>Descrição:</h2>
                <textarea></textarea>
            </div>

            <div className="inputWrapper">
                <h2>Imagem:</h2>
            </div>

            <input className="submit" value={optionCrud} type="submit"/>
        </Container>
    )
}

export default AdmForm
