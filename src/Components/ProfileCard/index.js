import React from 'react'
import { Container } from './styles'

const ProfileCard = () => {
    return (
        <Container>
            <img src="https://pfpmaker.com/_nuxt/img/profile-3-1.3e702c5.png" alt="profile"/>

            <div className="infoUser">
                <h1>Nome</h1>
                <h1>Email@gmail</h1>
            </div>
        </Container>            
    )
}

export default ProfileCard
