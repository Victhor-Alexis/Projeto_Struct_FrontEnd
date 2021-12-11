import React, { useState } from 'react'
import { useDynimicityContext } from '../../Context/useDynimicityContext'
import { Container } from './styles'
import {api} from '../../services/api'

const FormAccess = () => {
    
    const {displayForm, formOpacity, formShow, login} = useDynimicityContext();

    const [formType, setFormType] = useState(["block", "none"])

    const alterarForm = (formType) => (formType[0] === "block" ? setFormType(["none", "block"]) : setFormType(["block", "none"]))


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    /* Cadastrar usuário */

    const cadastrarUser = async (event) => {
        event.preventDefault();

        console.log(name)

        if (name.length != 0 && password.length >= 6 && email.length !=0){

        await api.post('user/create', {
            user: {
                name,
                email,
                password,
                is_admin: false
            }
        }).then((response) => alert('criado(a)!'))
        }

        else {
            alert("atenção: a senha deve ter no mínimo 6 caracteres e os outros campos não podem ser vazios")
        }

    }

    /* * * * */

    const loginUser = (event) => {
        event.preventDefault()
        login(email ,password)
    }

    return (
        <Container>
            <div className="wrapper" style={{display: displayForm, opacity: formOpacity}}>
                <form onSubmit={(event) => loginUser(event)} className="acessar" style={{display: formType[0]}}>

                    <div className="close">
                        <svg onClick={() => formShow("block")} width="34" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="2.70711" y1="1.29289" x2="34.7071" y2="33.2929" stroke="#6F5B3E" strokeWidth="3"/>
                            <line x1="1.29289" y1="33.2929" x2="33.2929" y2="1.29291" stroke="#6F5B3E" strokeWidth="3"/>
                        </svg>
                    </div>

                    <h1>Acessar minha conta</h1>

                    <input 
                        type="email" 
                        placeholder="E-mail"
                        value={email}
                        onChange={(event) => {setEmail(event.target.value)}}
                    />
                    <input 
                        autoComplete="on"
                        type="password" 
                        placeholder="Senha"
                        value={password}
                        onChange={(event) => {setPassword(event.target.value)}}/>
                    <input type="submit" value="Entrar"/>

                    <div className="box-bottom">
                        <h2>Ainda não tem cadastro?</h2>
                        <div className="button" onClick={() => alterarForm(formType)}>Cadastrar-se</div>
                    </div>
                </form>

                <form className="cadastrar" style={{display: formType[1]}} onSubmit={cadastrarUser}>

                    <div className="close">
                        <svg onClick={() => formShow("block")} width="34" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="2.70711" y1="1.29289" x2="34.7071" y2="33.2929" stroke="#6F5B3E" strokeWidth="3"/>
                            <line x1="1.29289" y1="33.2929" x2="33.2929" y2="1.29291" stroke="#6F5B3E" strokeWidth="3"/>
                        </svg>
                    </div>

                    <h1>Cadastro</h1>

                    <input type="nome" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Senha" autoComplete="on" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <input type="submit" value="Cadastrar"/>

                    <div className="box-bottom">
                        <div className="button" onClick={() => alterarForm(formType)}>Fazer login</div>
                    </div>
                </form>
            </div>
        </Container>
    )
}

export default FormAccess
