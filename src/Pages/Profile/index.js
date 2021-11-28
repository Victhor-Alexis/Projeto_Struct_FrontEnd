import React from 'react'
import Header from '../../Components/Header'
import Sidebar from '../../Components/Sidebar'
import FormAccess from '../../Components/FormAccess'
import profile_black from '../../Assets/profile_black.png'
import MobileMenu from '../../Components/MobileMenu'
import ProfileCard from '../../Components/ProfileCard'
import ProductCard from '../../Components/ProductCard'
import ProductsWrapper from '../../Components/ProductsWrapper'

const Profile= () => {
    return (
        <>
            <Header background="none" color="#161616" profileBlack={profile_black}
                    fontColor="#161616" hoverEffect="newHover" 
                    colorSubmenu="rgba(249,246,240,0.9)"/>
            <ProfileCard/>

            <ProductsWrapper/> 

            <Sidebar/>
            <FormAccess/>
            <MobileMenu/>
        </>
    )
}

export default Profile;