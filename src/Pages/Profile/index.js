import React from 'react'
import Header from '../../Components/Header'
import Sidebar from '../../Components/Sidebar'
import FavBar from '../../Components/AddFavoriteBar'
import FormAccess from '../../Components/FormAccess'
import profile_black from '../../Assets/profile_black.png'
import MobileMenu from '../../Components/MobileMenu'
import ProfileCard from '../../Components/ProfileCard'
import ProductCard from '../../Components/ProductCard'
import ProductsWrapper from '../../Components/ProductsWrapper'
import { useDynimicityContext } from '../../Context/useDynimicityContext'

const Profile= () => {
    const {user} = useDynimicityContext()
    return (
        <>
            <Header background="none" color="#161616" profileBlack={profile_black}
                    fontColor="#161616" hoverEffect="newHover" 
                    colorSubmenu="rgba(249,246,240,0.9)"/>
            <ProfileCard/>

            <ProductsWrapper user={user}/> 

            <Sidebar/>
            <FavBar/>
            <FormAccess/>
            <MobileMenu/>
        </>
    )
}

export default Profile;