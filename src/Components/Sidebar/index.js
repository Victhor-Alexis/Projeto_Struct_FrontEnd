import { Container } from './styles';
import {useDynimicityContext} from '../../Context/useDynimicityContext';
import ProductCard from "../ProductCard";
import { useLoginContext } from '../../Context/useLoginContext';
import { useState, useEffect } from 'react';
import {api} from '../../services/api';
import deleteButton from '../../Assets/deleteButton.png'
import addFavorite from '../../Assets/addfavorite.png'

const Sidebar = () => {

    const {sizeSidebar, displaySidebar, sidebarShow, minWidthSide} = useDynimicityContext();

    // Descomentar para acessar produtos do usuario logado
    // const {user} = useLoginContext();
    
    const user = {id: 3}
    const [products, setProducts] = useState([])
    const [favorites, setFavorites] = useState([])

    const fetchFavorites = async () => {
        const response = await api.get(`favorites/index`)
        console.log(response.data)
        setFavorites(response.data)}

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
        fetchProducts()
    }

    const fetchProducts = async () => {
        const response = await api.get(`user/my_favorites/${user.id}`)
        setProducts(response.data)}
    

    useEffect(() => {
        fetchProducts()
        fetchFavorites()
    }, [])

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

                    <div className="deslogado" style={{display: "none"}}>
                        <div className="boxAlert">
                            <p>Logue-se para poder adicionar seus pratos favoritos!</p>
                        </div>
                    </div>

                    <div className="logado" style={{display: "flex"}}>
                        {/* <div className="card-completo">
                            <div className="delete-button" onClick={() => console.log("ok")}>
                                <img src="../../Assets/deleteButton.png" alt="delete"></img>
                            </div>
                            <ProductCard newHeight={6.2} newWidth={24}
                            newFontSize={"11px"} product={produto}/>
                        </div> */}
                        
                        {products.map((product,key) => (
                            <div className="card-completo">
                                <div className="delete-button" onClick={() => findFavoriteId(product.id)}>
                                    <img className="icon" src={deleteButton} alt="delete"></img>
                                </div>
                                <ProductCard newDimensions={7} product={product}/>
                              </div>
                         ))}
                         <div className="addfav-button">
                            <img className="add-icon" src={addFavorite} alt="adicionar favorito"></img>
                         </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Sidebar
