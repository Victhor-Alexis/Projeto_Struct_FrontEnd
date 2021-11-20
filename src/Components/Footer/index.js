import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './style'

const Fotter = () => {
    return (
        <Container>
            <p>© 2021 Grupo 1, Inc</p>
            <Link to="/">Contato</Link>
        </Container>
    )
}

export default Fotter
