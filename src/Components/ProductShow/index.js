import React from 'react'
import { Container } from './styles'
import favorites from '../../Assets/fav.png'
import paoteste from '../../Assets/paoteste.jpg'
import {useDynimicityContext} from '../../Context/useDynimicityContext';
import {api} from '../../services/api';

function ProductShow({product}) {

    const {user, refreshFun} = useDynimicityContext();

    const addFavorite = async (productId) => {
        console.log("antes do favorites create")
        await api.post('favorites/create',{
            favorite:{
                user_id: user.id,
                product_id: productId
            }
                
        }).then(() =>{
        console.log('depois do favorites create')  
        alert("Favorite adicionado")
        refreshFun()
        console.log('depois do refresh fun')
        }).catch((event) => console.log('Error uploading favorite'))
    }

    return (
        <Container>
            <div className="header">
                <h1>{product.name}</h1>

                {user? 
                <div className="addFavorites">
                    <img src={favorites} alt="add_favorites_button" onClick={(event) => {
                        addFavorite(product.id);
                     }
                    }></img>
                </div>
                :
                null 
                }

                <h1 className="Price">R$ {product.price}</h1>
            </div>

            <img src={`http://localhost:3000${product.image_url}`} className="produtoPhoto" alt="A foto atrelada ao produto"/>

            <p>{product.description}</p>
        </Container>
    )
}

export default ProductShow
