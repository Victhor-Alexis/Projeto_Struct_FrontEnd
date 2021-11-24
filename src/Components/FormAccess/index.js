import React, { useState } from 'react'
import { useDynimicityContext } from '../../Context/useDynimicityContext'
import { Container } from './styles'

const FormAccess = () => {
    
    const {displayForm, formOpacity, formShow} = useDynimicityContext();

    const [formType, setFormType] = useState(["block", "none"])

    const alterarForm = (formType) => (formType[0] === "block" ? setFormType(["none", "block"]) : setFormType(["block", "none"]))

    return (
        <Container>
            <div className="wrapper" style={{display: displayForm, opacity: formOpacity}}>
                <form className="acessar" style={{display: formType[0]}}>

                    <div className="close">
                        <svg onClick={() => formShow("block")} width="34" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="2.70711" y1="1.29289" x2="34.7071" y2="33.2929" stroke="#6F5B3E" strokeWidth="3"/>
                            <line x1="1.29289" y1="33.2929" x2="33.2929" y2="1.29291" stroke="#6F5B3E" strokeWidth="3"/>
                        </svg>
                    </div>

                    <h1>Acessar minha conta</h1>

                    <input type="email" placeholder="E-mail"/>
                    <input type="password" placeholder="Senha" autoComplete="on"/>
                    <input type="submit" value="Entrar"/>

                    <div className="box-bottom">
                        <h2>Ainda não tem cadastro?</h2>
                        <div className="button" onClick={() => alterarForm(formType)}>Cadastrar-se</div>
                    </div>
                </form>

                <form className="cadastrar" style={{display: formType[1]}}>

                    <div className="close">
                        <svg onClick={() => formShow("block")} width="34" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="2.70711" y1="1.29289" x2="34.7071" y2="33.2929" stroke="#6F5B3E" strokeWidth="3"/>
                            <line x1="1.29289" y1="33.2929" x2="33.2929" y2="1.29291" stroke="#6F5B3E" strokeWidth="3"/>
                        </svg>
                    </div>

                    <h1>Cadastro</h1>

                    <input type="nome" placeholder="Nome"/>
                    <input type="email" placeholder="E-mail"/>
                    <input type="password" placeholder="Senha" autoComplete="on"/>
                    <input type="submit" value="Entrar"/>

                    <div className="box-bottom">
                        <div className="button" onClick={() => alterarForm(formType)}>Fazer login</div>
                    </div>
                </form>
            </div>
        </Container>
    )
}

export default FormAccess
