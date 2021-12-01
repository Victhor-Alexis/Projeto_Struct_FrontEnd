import React from 'react'
import { Container } from './styles'
import favorites from '../../Assets/fav.png'
import paoteste from '../../Assets/paoteste.jpg'

function ProductShow({product}) {
    return (
        <Container>
            <div className="header">
                <h1>{product.name}</h1>

                <div className="addFavorites">
                    <img src={favorites} alt="add_favorites_button"></img>
                </div>

                <h1 className="Price">{product.price}</h1>
            </div>

            <img src={`http://localhost:3000${product.image_url}`} className="produtoPhoto" alt="A foto atrelada ao produto"/>

            <p>{product.description}</p>
        </Container>
    )
}

export default ProductShow
