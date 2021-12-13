import React from 'react'
import { Container } from './styles'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import ProductCard from '../ProductCard'
import { useDynimicityContext } from '../../Context/useDynimicityContext'

const ProductsWrapper = ({user}) => {

    const {refreshFav} = useDynimicityContext()
    const [favorites, setFavorites] = useState([])

    const fetchFavorites = async () => {
        const response = await api.get(`user/my_favorites/${user.id}`)
        setFavorites(response.data)
    }
    
    useEffect(() => {
        if( user != undefined){
        fetchFavorites()
        }
    }, [refreshFav])

    return (
        <Container>
            {favorites.map((favorite, i) => {
                return(
                <div>
                    <ProductCard key={favorite.id} newDimensions={15} product={favorite}/>
                </div>
            )})}

    
        </Container>
    )
}

export default ProductsWrapper
