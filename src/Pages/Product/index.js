import React from 'react'
import Header from '../../Components/Header'
import Sidebar from '../../Components/Sidebar'
import FormAccess from '../../Components/FormAccess'
import profile_black from '../../Assets/profile_black.png'
import MobileMenu from '../../Components/MobileMenu'
import ProductShow from '../../Components/ProductShow'

const Product = () => {
    return (
        <>
            <ProductShow/>
            <Sidebar/>
            <FormAccess/>
            <Header background="none" color="#161616" profileBlack={profile_black}
                    position="fixed" bottom="0.7rem" fontColor="#161616"
                    hoverEffect="newHover" topSubmenu="-18rem" colorSubmenu="rgba(249,246,240,0.9)"/>
            <MobileMenu/>
        </>
    )
}

export default Product;