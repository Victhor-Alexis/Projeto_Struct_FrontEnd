import { Container } from "./styles";

const UserCard = ({user}) => {
    return (
        <Container>
            <img src="https://pfpmaker.com/_nuxt/img/profile-3-1.3e702c5.png" alt="profile"/>
            <div className="info">
                <span>{user.name}</span>
                <br/>
                <span>{user.email}</span>
            </div>
        </Container>
    )
}

export default UserCard
