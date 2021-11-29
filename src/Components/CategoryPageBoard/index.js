import React from 'react'
import { Container } from './styles'
import ProductCard from '../ProductCard'

const Board = ({products}) => {
    return (
        <Container>
            {products.map((product,key) => (
                // os produtos ainda n tem foto
                <ProductCard product={product}/>
            ))}
        </Container>
    )
}

export default Board
