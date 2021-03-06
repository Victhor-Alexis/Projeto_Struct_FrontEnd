import React from 'react'
import Banner from '../../Components/Banner'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Sidebar from '../../Components/Sidebar'
import FormAccess from '../../Components/FormAccess'
import MobileMenu from '../../Components/MobileMenu'
import Favbar from '../../Components/AddFavoriteBar'
import { useLoginContext } from '../../Context/useLoginContext'

const Home = () => {

    return (
        <>
            <Header/>
            <MobileMenu/>
            <Banner/>
            <Footer/>
            
            <Sidebar/>
            <Favbar/>
            <FormAccess/>
        </>
    )
}

export default Home