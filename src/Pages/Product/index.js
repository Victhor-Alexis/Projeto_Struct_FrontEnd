import React from 'react'
import Header from '../../Components/Header'
import Sidebar from '../../Components/Sidebar'
import FormAccess from '../../Components/FormAccess'
import profile_black from '../../Assets/profile_black.png'

const Product = () => {
    return (
        <>
            <Header background="none" color="#161616" profileBlack={profile_black}
                    position="absolute" bottom="0.7rem" fontColor="#161616"
                    hoverEffect="newHover" topSubmenu="-18rem" colorSubmenu="rgba(249,246,240,0.9)"/>
            <Sidebar/>
            <FormAccess/>
        </>
    )
}

export default Product;