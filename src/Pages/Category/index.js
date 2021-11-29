import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { api } from '../../services/api'
import Header from "../../Components/Header"
import ProductCard from "../../Components/ProductCard"
import Sidebar from "../../Components/Sidebar"
import FormAccess from "../../Components/FormAccess"
import profile_black from '../../Assets/profile_black.png'
import MobileMenu from '../../Components/MobileMenu'
import Board from "../../Components/CategoryPageBoard"

const Category = () => {


    let { id } = useParams()
    
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const response = await api.get(`/categories/my_products/${id}`)
        console.log(response.data)
        console.log('oi')
        setProducts(response.data)}
    

    useEffect(() => {
        fetchProducts()
    }, [])


    return (
        <>
            <Board products={products}/>
        
            <Header background="none" color="#161616" profileBlack={profile_black}
                    position="absolute" bottom="0.7rem" fontColor="#161616"
                    hoverEffect="newHover" topSubmenu="-18rem" colorSubmenu="rgba(249,246,240,0.9)"/>
            <MobileMenu/>
            <Sidebar/>
            <FormAccess/>

        </>
    )
}

export default Category