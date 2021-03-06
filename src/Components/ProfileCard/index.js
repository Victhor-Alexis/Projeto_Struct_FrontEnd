import React from 'react'
import { useEffect } from 'react/cjs/react.development'
import { useDynimicityContext } from '../../Context/useDynimicityContext'
import { Container } from './styles'

const ProfileCard = () => {
    const {user} = useDynimicityContext()
    return (
        <Container>
            <img src="https://pfpmaker.com/_nuxt/img/profile-3-1.3e702c5.png" alt="profile"/>
            
            <div className="infoUser">
                <h1>{user?.name}</h1>
                <h1>{user?.email}</h1>
            </div>
        </Container>            
    )
}

export default ProfileCard
