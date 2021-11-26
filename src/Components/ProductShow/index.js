import React from 'react'
import { Container } from './styles'
import favorites from '../../Assets/fav.png'
import paoteste from '../../Assets/paoteste.jpg'

function ProductShow() {
    return (
        <Container>
            <div className="header">
                <h1>Nome do produto</h1>

                <div className="addFavorites">
                    <img src={favorites} alt="add_favorites_button"></img>
                </div>

                <h1 className="Price">99.99 R$</h1>
            </div>

            <img src={paoteste} className="produtoPhoto" alt="A foto atrelada ao produto"/>

            <p>Uma descrição do produto, conforme o trabalho pede. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit sit amet arcu ac tempus.</p>
        </Container>
    )
}

export default ProductShow
