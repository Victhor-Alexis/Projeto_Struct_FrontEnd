import React from 'react'
import Header from '../../Components/Header'
import Sidebar from '../../Components/Sidebar'
import FormAccess from '../../Components/FormAccess'
import profile_black from '../../Assets/profile_black.png'
import MobileMenu from '../../Components/MobileMenu'
import ProductShow from '../../Components/ProductShow'
import { useState } from "react"
import { useEffect } from "react/cjs/react.development"
import { api } from "../../services/api"
import { useParams } from "react-router"
import Favbar from '../../Components/AddFavoriteBar'

const Product = () => {

    let { id } = useParams()
    
    const [product, setProduct] = useState({})

    const fetchProduct = async () => {
        const response = await api.get(`/products/show/${id}`)
        console.log(response.data)
        setProduct(response.data)}
    

    useEffect(() => {
        fetchProduct()
    }, [])

    return (
        <>
            <ProductShow product={product}/>
            <Sidebar/>
            <Favbar/>
            <FormAccess/>
            <Header background="none" color="#161616" profileBlack={profile_black}
                    position="absolute" bottom="0rem" fontColor="#161616"
                    hoverEffect="newHover" topSubmenu="-18rem" colorSubmenu="rgba(249,246,240,0.9)"/>
            <MobileMenu/>
        </>
    )
}

export default Product;
