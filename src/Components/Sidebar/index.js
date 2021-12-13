import { Container } from './styles';
import {useDynimicityContext} from '../../Context/useDynimicityContext';
import ProductCard from "../ProductCard";
import { useState, useEffect } from 'react';
import {api} from '../../services/api';
import deleteButton from '../../Assets/deleteButton.png'
import addfavorite from '../../Assets/addfavorite.png'

const Sidebar = () => {

    const {favbarShow,
        sizeSidebar, displaySidebar, sidebarShow, minWidthSide, 
        user, refreshFav, refreshFun} = useDynimicityContext();
    
    const [products, setProducts] = useState([])
    const [favorites, setFavorites] = useState([])

    const onDelete = (productId) => {
        findFavoriteId(productId)
        refreshFun()
    }

    const fetchFavorites = async () => {
        const response = await api.get(`favorites/index`)
        .then((response) => {
        setFavorites(response.data)
    })
    }

    const findFavoriteId = (productId) => {
        favorites.forEach(favorite => {
            if(productId == favorite.product_id && user.id == favorite.user_id){
                let favoriteId = favorite.id
                deleteFavorite(favoriteId)
            }
        });
    }

    const deleteFavorite = (favoriteId) => {
        api.delete(`favorites/delete/${favoriteId}`)
    }

    const fetchProducts = async () => {
        const response = await api.get(`user/my_favorites/${user.id}`)
        setProducts(response.data)
    }
        

    const showFavoriteBar = () => {
        sidebarShow("30%")
        favbarShow("0%")
    }


    useEffect(() => {
        if(user != undefined){
            fetchFavorites()}
    }, [sizeSidebar, refreshFav])

    useEffect(() => {
        if(user != undefined){
            fetchProducts()}
    }, [sizeSidebar, favorites])


    return (
        <Container>
            <div className="smoothTransition" style={{width: sizeSidebar, minWidth:minWidthSide}}>
                <div className="wrapper" style={{display: displaySidebar}}>
                    <div className="header">
                        <p>Adicionar aos favoritos</p>

                        <div className="close" onClick={() => {
                                sidebarShow("30%")
                            }}>

                            <svg width="34" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="2.70711" y1="1.29289" x2="34.7071" y2="33.2929" stroke="#F9F6F0" strokeWidth="2"/>
                                <line x1="1.29289" y1="33.2929" x2="33.2929" y2="1.29291" stroke="#F9F6F0" strokeWidth="2"/>
                            </svg>
                        </div>
                    </div>
                            
                    {user?
                    <div className="logado" style={{display: "flex"}}>
                        
                        {products.map(product => (
                            <div className='card-completo'>
                                <div className='delete-button' onClick={() => onDelete(product.id)}>
                                    <img className="icon" src={deleteButton} alt="delete"></img>
                                </div>
                                 <ProductCard newDimensions={7} product={product}/>
                            </div>
                        ))}

                         <div className="addfav-button" onClick={() => showFavoriteBar()}>
                            <img className="add-icon" src={addfavorite} alt="adicionar favorito"></img>
                         </div>
                    </div>
                    :
                    <div className="deslogado" >
                        <div className="boxAlert">
                            <p>Logue-se para poder adicionar seus pratos favoritos!</p>
                        </div>
                    </div>
                    }

                </div>
            </div>
        </Container>
    )
}

export default Sidebar
