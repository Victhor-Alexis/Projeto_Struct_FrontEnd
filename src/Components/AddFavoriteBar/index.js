import { Container } from './styles';
import {useDynimicityContext} from '../../Context/useDynimicityContext';
import { useState, useEffect } from 'react';
import {api} from '../../services/api';
import favorites from '../../Assets/fav.png'

const Favbar = () => {

    const {sizeFavbar, displayFavbar, favbarShow, minWidthFav, 
        user, sizeSidebar, refreshFav, refreshFun} = useDynimicityContext();


    const [products, setProducts] = useState([])
    const [notfavorited, setNotfavorited] = useState([])
    const [allProducts, setAllProducts] = useState([])


    const onAdd = async (productId) => {
        await addFavorite(productId)
        .then(() =>{refreshFun()})
    }
    const addFavorite = async (productId) => {
        console.log(productId, user.id)
        await api.post('favorites/create',{
                user_id: user.id,
                product_id: productId
        }).then(() =>{  
        defineNonFavorited()
        }).catch((event) => console.log('Error uploading favorite'))
    }

    const fetchProducts = async () => {
        const response = await api.get(`user/my_favorites/${user.id}`)
        setProducts(response.data)}
    
    const fetchAllProducts = async () => {
        const response = await api.get(`products/index`)
        setAllProducts(response.data)
    }

    
    const defineNonFavorited = () => {
        const result = allProducts.filter(product => !products.map(favorite=>favorite.id).includes(product.id))
        setNotfavorited(result)
    }

    useEffect(() => {
        if(user != undefined){
            fetchProducts()
            fetchAllProducts()
            defineNonFavorited()}
    }, [sizeFavbar,refreshFav, sizeSidebar])

    return (
        <Container>
            <div className="smoothTransition" style={{width: sizeFavbar, minWidth:minWidthFav}}>
                <div className="wrapper" style={{display: displayFavbar}}>
                    <div className="header">
                        <button onClick={() => console.log(notfavorited)}>not favorited</button>
                        <button onClick={() => console.log(allProducts)}>All products</button>
                        <button onClick={() => console.log(products)}>Favorite products</button>
                        <p>Escolha o favorito</p>

                        <div className="close" onClick={() => {
                                favbarShow("30%")
                            }}>

                            <svg width="34" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="2.70711" y1="1.29289" x2="34.7071" y2="33.2929" stroke="#F9F6F0" strokeWidth="2"/>
                                <line x1="1.29289" y1="33.2929" x2="33.2929" y2="1.29291" stroke="#F9F6F0" strokeWidth="2"/>
                            </svg>
                        </div>
                        
                    </div>
                    <div className="products">
                        {notfavorited.map((product, key) => (
                            <div key={key} className="product-bar">
                                <span>{product.name}</span>
                                <div className="favorite-button" onClick={() => onAdd(product.id)}>
                                    <img className="fav-icon" src={favorites} alt="favorite item"></img>
                                </div>
                            </div>
                            ))}
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Favbar
