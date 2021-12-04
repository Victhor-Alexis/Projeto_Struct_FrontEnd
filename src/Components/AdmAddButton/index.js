import React from 'react'
import { useDynimicityContext } from '../../Context/useDynimicityContext';
import { Container } from './styles'

const AdmAddButton = () => {

    const {admFormShow, setOptionCrud} = useDynimicityContext();

    return (
        <Container onClick={() => {admFormShow(false, -1, "Adicionar")}}>
            <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="18.5" x2="18.5" y2="36" stroke="#F9F6F0" strokeWidth="3"/>
                <line y1="18.5" x2="37" y2="18.5" stroke="#F9F6F0" strokeWidth="3"/>
            </svg>
        </Container>
    )
}

export default AdmAddButton
