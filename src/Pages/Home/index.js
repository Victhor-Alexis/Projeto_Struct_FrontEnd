import React from 'react'
import Banner from '../../Components/Banner'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Sidebar from '../../Components/Sidebar'
import FormAccess from '../../Components/FormAccess'

const Home = () => {
    return (
        <>
            <Header/>
            <Banner/>
            <Footer/>
            
            <Sidebar/>
            <FormAccess/>
        </>
    )
}

export default Home