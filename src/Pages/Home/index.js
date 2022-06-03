import React from 'react'
import Banner2 from '../../Components/Banner2'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Sidebar from '../../Components/Sidebar'
import FormAccess from '../../Components/FormAccess'
import MobileMenu from '../../Components/MobileMenu'
import Favbar from '../../Components/AddFavoriteBar'

const Home = () => {

    return (
        <>
            <Banner2/>
            <Header/>
            <MobileMenu/>
            <Footer/>
            
            <Sidebar/>
            <Favbar/>
            <FormAccess/>
        </>
    )
}

export default Home